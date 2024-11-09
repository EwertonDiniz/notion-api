import handleError from "../middlewares/error-handler.js";
import { validationResult } from "express-validator";
import notionService from "../services/notion-service.js";

// Função para criar uma nova página no Notion
const createNotionPage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { properties } = req.body;
    const result = await notionService.createPage(properties);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    handleError(res, error);
  }
};

// Função para obter uma página do Notion por ID
const getNotionPageById = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { id } = req.params;
    const result = await notionService.getPageById(id);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    handleError(res, error);
  }
};

// Função para atualizar uma página do Notion por ID
const updateNotionPage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { id } = req.params;
    const { properties } = req.body;
    const result = await notionService.updatePage(id, properties);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    handleError(res, error);
  }
};

// Função para arquivar uma página do Notion por ID
const archiveNotionPage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { id } = req.params;
    const result = await notionService.archivePage(id);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    handleError(res, error);
  }
};

export default {
  createNotionPage,
  getNotionPageById,
  updateNotionPage,
  archiveNotionPage,
};
