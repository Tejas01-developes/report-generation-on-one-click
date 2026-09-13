import express from 'express';
import { generatereport } from './apis/generateReport.js';
const router = express.Router();
router.post("/", generatereport);
export default router;
//# sourceMappingURL=route.js.map