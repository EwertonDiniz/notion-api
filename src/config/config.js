import dotenv from 'dotenv';
dotenv.config();

export default {
  notionApiKey: process.env.NOTION_API_KEY,
  notionDatabaseId: process.env.NOTION_DATABASE_ID,
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || "development",

  // Configuração do rate limiting, proteção contra ataques DDOS.
  rateLimit: {
    windowMs: 15 * 60 * 1000,
    max: 500, // Limitei em 500 requisições por IP a cada 15 minutos.
  },
};
