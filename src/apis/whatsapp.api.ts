import { Request, Response } from "express";

export const challangecode=(req:Request,resp:Response)=>{
const verify_token="123456789"

const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

    if(mode === "subscribe" &&  token === verify_token){
        return resp.status(200).send(challenge);
    }
    return resp.status(403)
}

export const whatsapp=(req:Request,resp:Response)=>{
resp.sendStatus(200)
try{
    if(req.body.object === 'whatsapp_business_account'){
        const entry=req.body.entry?.[0];
        const changes=entry?.changes?.[0];
        const value=changes?.value;
        const messageobject=value?.messages?.[0]

        if(!messageobject || messageobject.type !== "text"){
            return
        }

        const sendphonenumber=messageobject.from
        const textmessage=messageobject.text.body
        const messageid=messageobject.id

        const sendername=value?.contacts?.[0]?.profile?.name || "unknown user"
    }
}catch(err){
    console.error("Error parsing the webhook payload:", err);
}
}