// prisma.config.ts
import "dotenv/config"; // loads .env automatically
import { defineConfig } from "prisma/config";

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations",
    },
    engine: "classic",
    datasource: {
        url: process.env.DATABASE_URL,
    },
});
