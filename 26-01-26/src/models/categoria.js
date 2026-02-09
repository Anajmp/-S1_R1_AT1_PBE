import pool from "../database/connection.js";

async function getAllCategorias(){
    
    const [rows] = await pool.query('SELECT * FROM Categorias');

    return rows;
}

async function createCategoria(categoria) {
    const {nome,descricao} = categoria;

    const [result] = await pool.query (`INSERT INTO categorias (nome,descricao) VALUES (?,?)`, [nome,descricao]) 
    return result.insertId
}

async function updateCategoria(id, categoria) {
    const {nome,descricao} = categoria;

    const [result] = await pool.query (` UPDATE categorias SET nome = ?, descricao = ? WHERE id = ? `, [nome,descricao, id])
    return result.affectedRows;
}

async function deleteCategoria(id) {
    const [result] = await pool.query(`DELETE FROM categorias WHERE id = ?`, [id])
    return result.affectedRows;
} 

export default {getAllCategorias, createCategoria, updateCategoria, deleteCategoria}