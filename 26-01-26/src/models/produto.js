import pool from "../database/connection.js";

async function getAllProducts(){
    
    const [rows] = await pool.query('SELECT * FROM Produtos');

    return rows;
}

async function createProduct(produto) {
    const {nome,descricao,preco,quantidade_estoque,status,destaque,marca, modelo,garantia_meses, categoria} = produto;

    const [result] = await pool.query (`INSERT INTO produtos (nome,descricao,preco,quantidade_estoque,status,destaque,marca,modelo,garantia_meses, categoria) VALUES (?,?,?,?,?,?,?,?,?,?)`, [nome,descricao,preco,quantidade_estoque,status,destaque,marca,modelo,garantia_meses,categoria]) 
    return result.insertId
}

async function updateProduct(id, produto) {
    const {nome,descricao,preco,quantidade_estoque,status,destaque,marca, modelo,garantia_meses, categoria} = produto;

    const [result] = await pool.query (` UPDATE produtos SET nome = ?, descricao = ?, preco = ?, quantidade_estoque = ?, status = ?, destaque = ?, marca = ?, modelo = ?, garantia_meses = ?, categoria=? WHERE id = ? `, [nome,descricao,preco,quantidade_estoque,status,destaque,marca, modelo,garantia_meses,categoria, id])
    return result.affectedRows;
}

async function deleteProduct(id) {
    const [result] = await pool.query(`DELETE FROM produtos WHERE id = ?`, [id])
    return result.affectedRows;
} 

export default {getAllProducts, createProduct, updateProduct, deleteProduct}