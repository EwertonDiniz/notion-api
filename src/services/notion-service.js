import config from "../config/config.js";
import { Client } from "@notionhq/client"; // Utilizei a biblioteca oficial do Notion.

const notion = new Client({ auth: config.notionApiKey });
const databaseId = config.notionDatabaseId;

export default {
  // Função para criar uma nova página
  async createPage(properties) {
    try {
      const response = await notion.pages.create({
        parent: { database_id: databaseId },
        properties: properties,
      });
      return response;
    } catch (error) {
      if (error.response) {
        throw {
          status: error.response.status,
          body: error.response.data,
        };
      }
      console.error("Erro inesperado ao criar página:", error.message);
      throw error;
    }
  },

  // Função para obter os dados de uma página a partir do ID
  async getPageById(pageId) {
    try {
      const response = await notion.pages.retrieve({ page_id: pageId });
      return response;
    } catch (error) {
      if (error.response) {
        throw {
          status: error.response.status,
          body: error.response.data,
        };
      }
      console.error(`Erro ao buscar página com ID ${pageId}:`, error.message);
      throw error;
    }
  },

  // Função para atualizar as propriedades de uma página a partir do ID
  async updatePage(pageId, properties) {
    try {
      const response = await notion.pages.update({
        page_id: pageId,
        properties: properties,
      });
      return response;
    } catch (error) {
      if (error.response) {
        throw {
          status: error.response.status,
          body: error.response.data,
        };
      }
      console.error(
        `Erro ao atualizar página com ID ${pageId}:`,
        error.message
      );
      throw error;
    }
  },

  // Função para arquivar uma página
  async archivePage(pageId) {
    try {
      const response = await notion.pages.update({
        page_id: pageId,
        archived: true,
      });
      return response;
    } catch (error) {
      if (error.response) {
        throw {
          status: error.response.status,
          body: error.response.data,
        };
      }
      console.error(`Erro ao arquivar página com ID ${pageId}:`, error.message);
      throw error;
    }
  },
};
