import express from 'express';
import ProdutosRoutes from './routes/produtos.js'
import CategoriasRoutes from './routes/categorias.js'

const app = express();
app.use(express.json());

app.use("/produtos", ProdutosRoutes);
app.use("/categorias", CategoriasRoutes);

export default app;