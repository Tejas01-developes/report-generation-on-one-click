import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '../../.env') });
const globalprisma = globalThis;
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
});
export const prisma = globalprisma.prisma || new PrismaClient({ adapter });
if (process.env.NODE_ENV !== "production")
    globalprisma.prisma;
//# sourceMappingURL=db.js.map