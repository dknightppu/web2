require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// GET all albums
app.get('/api/classics', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM classics');
    res.json(results.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// POST new album
app.post('/api/classics', async (req, res) => {
  const { artist, album_title, year, genre } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO classics (artist, album_title, year, genre) VALUES ($1, $2, $3, $4) RETURNING *',
      [artist, album_title, year, genre]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// PUT update album
app.put('/api/classics/:id', async (req, res) => {
  const { id } = req.params;
  const { artist, album_title, year, genre } = req.body;

  try {
    const result = await db.query(
      'UPDATE classics SET artist = $1, album_title = $2, year = $3, genre = $4 WHERE id = $5 RETURNING *',
      [artist, album_title, year, genre, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).send('Album not found');
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
