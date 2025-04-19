import express from 'express';

import { getArticles, getArticleByID, createArticle, updateArticle, deleteArticle } from '../controllers/articles.js';

const router = express.Router();
/**
 * @route   GET /api/articles
 * @desc    Get All articles
 * @access  Public
 */
router.get('/', getArticles);



/**
 * @route   POST /api/article
 * @desc    Ajouter un article
 * @access  Public
 */
router.post('/', createArticle);


/**
 * @route   GET /api/articles/:id
 * @desc    Renvoyer un article
 * @access  Public
 */
router.get('/:id', getArticleByID);



/**
 * @route   PUT /api/articles/:id
 * @desc    Modifier un article
 * @access  Public
 */
router.put('/:id', updateArticle);


/**
 * @route  DELETE /api/articles/:id
 * @desc    Supprimer un article
 * @access  Public
 */
router.delete('/:id', deleteArticle);


export default router;