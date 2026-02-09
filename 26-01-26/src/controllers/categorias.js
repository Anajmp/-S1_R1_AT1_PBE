import Categoria from '../models/categoria.js'

async function index(req, res) {
    try{
    const categorias = await Categoria.getAllCategorias();
    return res.json(categorias);
    }catch(error) {
        console.log(error)
        return res.status(500).json({error:"Erro ao buscar categorias"})
    }
}

async function store(req, res) {
    try {
        const categoria = req.body;
        console.log(categoria)
        await Categoria.createCategoria(categoria);
        return res.status(201).json(categoria);
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Erro ao criar categoria"})
    }
}

async function update(req, res) {
    try {
        const {id} = req.params;
        const categoria = req.body;

        await Categoria.updateCategoria(id,categoria);
        res.status(201).json({message:"Categoria atualizado com sucesso"})
    } catch (error) {
        res.json ({ error: "Erro ao atualizar categoria"})
    }
}

async function destroy(req, res) {
    try {
        const {id} = req.params;
        await Categoria.deleteCategoria(id);
        res.status(200).json({message: "Categoria removido com sucesso!"})
    } catch (error) {
        res.json({ message: "Erro ao remover categoria"})
    }
}
export default {index, store, update, destroy}