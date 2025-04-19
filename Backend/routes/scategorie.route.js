import express from 'express';

import { getSCategories, getSCategorieByID, createSCategorie, updateSCategorie, deleteSCategorie } from '../controllers/scategories.js';

const router = express.Router();
/**
 * @route   GET /api/scategories
 * @desc    Get All sous categories
 * @access  Public
 */
router.get('/', getSCategories);



/**
 * @route   POST /api/scategories
 * @desc    Ajouter une sous categorie
 * @access  Public
 */
router.post('/', createSCategorie);


/**
 * @route   GET /api/scategories/:id
 * @desc    Renvoyer une sous categorie
 * @access  Public
 */
router.get('/:id', getSCategorieByID);



/**
 * @route   PUT /api/scategories/:id
 * @desc    Modifier une sous categorie
 * @access  Public
 */
router.put('/:id', updateSCategorie);


/**
 * @route  DELETE /api/scategories/:id
 * @desc    Supprimer une sous categorie
 * @access  Public
 */
router.delete('/:id', deleteSCategorie);


export default router;