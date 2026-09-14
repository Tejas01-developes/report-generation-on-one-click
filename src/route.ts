import express from 'express';
import { generatereport } from './apis/generateReport.js';
import { challangecode, whatsapp } from './apis/whatsapp.api.js';

const router=express.Router()
router.post("/",generatereport)
router.get("/webhook",challangecode)
router.post("/webhook",whatsapp)

export default router