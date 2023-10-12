const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const envs =require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const port =  envs.parsed.DEV_API_PORT;

const app = express();

app.use(bodyParser.json());

const dbPath = path.resolve(__dirname, '../db/produtos.db');

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS produtos (id TEXT, name TEXT, price REAL, description TEXT)');
});

app.get('/produtos', (req, res) => {
  db.all('SELECT * FROM produtos', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
    res.json(rows);
  });
});

app.post('/produtos', (req, res) => {
  const { name, price, description } = req.body;
  if (!name || !price || !description) {
    return res.status(400).json({ error: 'Por favor, forneça name, price e description para criar um produto.' });
  }

  const id = uuidv4();

  db.run('INSERT INTO produtos (id, name, price, description) VALUES (?, ?, ?, ?)', [id, name, price, description], (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao criar um novo produto' });
    }

    res.status(201).json({ id, name, price, description });
  });
});


app.delete('/produtos/:id', (req, res) => {
  const productId = req.params.id;


  db.run('DELETE FROM produtos WHERE id = ?', productId, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao deletar o produto' });
    }

    res.status(204).send();
  });
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
