import { Request, Response } from "express"
import { prisma } from "../db/db.js"
import puppeteer from "puppeteer"
import path from 'path';
import fs from 'fs'

export const generatereport=async(req:Request,res:Response)=>{
    const allStudents:any[]=await prisma.students.findMany()
    if(allStudents.length === 0){
        return res.status(400).json({success:false,message:"No students in the db"})
    }
  const browser=await puppeteer.launch()
  const reportdir=path.join(process.cwd(),'public','reports')

        if(!fs.existsSync(reportdir)){
            fs.mkdirSync(reportdir,{recursive:true})
        }

        for (const student of allStudents) {
                  // 2. Inject student data into the HTML template string
                  const htmlTemplate = `
                    <!DOCTYPE html>
                    <html>
                      <head>
                        <style>
                          body { font-family: 'Arial', sans-serif; padding: 30px; color: #333; }
                          .header { text-align: center; border-bottom: 2px solid #2563eb; padding-bottom: 10px; margin-bottom: 20px; }
                          .info { font-size: 16px; margin-bottom: 15px; }
                          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                          th, td { border: 1px solid #cbd5e1; padding: 10px; text-align: left; }
                          th { background-color: #f1f5f9; }
                          .footer { margin-top: 30px; font-weight: bold; }
                        </style>
                      </head>
                      <body>
                        <div class="header">
                          <h1>School Annual Report Card</h1>
                          <h3>Class: ${student.class} - Section: ${student.section}</h3>
                        </div>
                        <div class="info">
                          <p><strong>Student Name:</strong> ${student.firstName} ${student.lastName}</p>
                          <p><strong>Roll Number:</strong> ${student.rollNo}</p>
                          <p><strong>Phone:</strong> ${student.phoneNo}</p>
                        </div>
                        <table>
                          <tr><th>Subject</th><th>Marks Obtained</th></tr>
                          <tr><td>English</td><td>${student.english}</td></tr>
                          <tr><td>Maths</td><td>${student.maths}</td></tr>
                          <tr><td>Hindi</td><td>${student.hindi}</td></tr>
                          <tr><td>Gujarati</td><td>${student.gujarati}</td></tr>
                          <tr><td>Computer</td><td>${student.computer}</td></tr>
                          <tr><td>Social Science (SS)</td><td>${student.ss}</td></tr>
                          <tr><td>Science</td><td>${student.science}</td></tr>
                        </table>
                        <div class="footer">
                          <p>Total Marks: ${student.totalMarks} / 700</p>
                          <p>Grade: ${student.grade} | Status: ${student.isPass ? 'PASS' : 'FAIL'}</p>
                        </div>
                      </body>
                    </html>
                  `;

                  const page=await browser.newPage()
                  await page.setContent(htmlTemplate,{waitUntil:'domcontentloaded'})

                  const pdfBuffer=await page.pdf({format:'A4',printBackground:true})
                  await page.close()

                  const fileName = `report_${student.id}.pdf`;
                        const filePath = path.join(reportdir, fileName);
                        fs.writeFileSync(filePath, pdfBuffer);

                        const fileUrl = `/reports/${fileName}`;

                        await prisma.students.update(
                            {where:{id:student.id},
                            data:{fileUrl:fileUrl}
        })

                       
}
await browser.close()

return res.status(200).json({success:true,message:`successfully generated result for ${allStudents.length}`})

}



