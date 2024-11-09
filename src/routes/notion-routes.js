import express from 'express';
import { body, param } from 'express-validator';
import notionController from '../controllers/notion-controller.js';

const router = express.Router();

// ENDPOINT 01 - Criação de nova página
router.post(
  '/page',
  [body('properties').notEmpty().withMessage('Properties are required')],
  notionController.createNotionPage
);

// ENDPOINT 02 - Buscar dados de uma página pelo ID
router.get(
  '/page/:id',
  [param('id').isString().withMessage('ID deve ser um uuid, ex.: 1290d303ccf9816f8179e8631f1c9291')],
  notionController.getNotionPageById
);

// ENDPOINT 03 - Atualizar página pelo ID
router.patch(
  '/page/:id',
  [
    param('id').isString().withMessage('ID deve ser um uuid, ex.: 1290d303ccf9816f8179e8631f1c9291'),
    body('properties').notEmpty().withMessage('o Valor "Properties" deve ser preenchido no payload.')
  ],
  notionController.updateNotionPage
);

// ENDPOINT 04 - Arquivar uma página
router.delete(
  '/page/:id',
  [param('id').isString().withMessage('ID deve ser um uuid, ex.: 1290d303ccf9816f8179e8631f1c9291')],
  notionController.archiveNotionPage
);

export default router;