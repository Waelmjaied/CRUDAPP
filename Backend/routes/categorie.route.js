import express from 'express';

import { getCategories, getCategorieByID, createCategorie, updateCategorie, deleteCategorie } from '../controllers/categories.js';
//app.use(cors());
const router = express.Router();

  
/**
 * @route   GET /api/categories
 * @desc    Get All categories
 * @access  Public
 */
router.get('/', getCategories);



/**
 * @route   POST /api/categories
 * @desc    Ajouter une categorie
 * @access  Public
 */
router.post('/', createCategorie);


/**
 * @route   GET /api/categories/:id
 * @desc    Renvoyer une categorie
 * @access  Public
 */
router.get('/:id', getCategorieByID);



/**
 * @route   PUT /api/categories/:id
 * @desc    Modifier une categorie
 * @access  Public
 */
router.put('/:id', updateCategorie);


/**
 * @route  DELETE /api/categories/:id
 * @desc    Supprimer une categorie
 * @access  Public
 */
router.delete('/:id', deleteCategorie);


export default router;