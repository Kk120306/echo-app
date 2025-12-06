import { PrismaClient } from '../../generated/prisma/client.js'
import "dotenv/config";

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL!
        }
    }
})

export { prisma }
