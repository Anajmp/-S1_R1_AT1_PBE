import express from 'express';
import ProdutosController from '../controllers/produtos.js'

const router = express.Router();

router.get("/",ProdutosController.index)
router.post("/",ProdutosController.store)
router.put("/:id",ProdutosController.update)
router.delete("/:id", ProdutosController.destroy)

export default router;
