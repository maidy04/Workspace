// routes/estudiantes.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// ✅ Obtener todos los estudiantes
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM estudiantes';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al obtener estudiantes:', err);
      return res.status(500).json({ error: 'Error al obtener estudiantes' });
    }
    res.json(results);
  });
});

// ✅ Obtener un estudiante por documento_identidad
router.get('/:documento_identidad', (req, res) => {
  const documento = req.params.documento_identidad;
  const sql = 'SELECT * FROM estudiantes WHERE documento_identidad = ?';

  db.query(sql, [documento], (err, results) => {
    if (err) {
      console.error('Error al obtener estudiante:', err);
      return res.status(500).json({ error: 'Error al obtener estudiante' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Estudiante no encontrado' });
    }
    res.json(results[0]);
  });
});

// ✅ Crear un nuevo estudiante (POST)
router.post('/', (req, res) => {
  const {
    documento_identidad,
    primer_nombre,
    segundo_nombre,
    apellidos,
    fecha_nacimiento,
    genero
  } = req.body;

  // Validar campos obligatorios
  if (!documento_identidad || !primer_nombre || !apellidos || !genero) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  const sql = `
    INSERT INTO estudiantes 
    (documento_identidad, primer_nombre, segundo_nombre, apellidos, fecha_nacimiento, genero)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [documento_identidad, primer_nombre, segundo_nombre, apellidos, fecha_nacimiento, genero],
    (err, result) => {
      if (err) {
        console.error('Error al crear estudiante:', err);
        return res.status(500).json({ error: 'Error al crear estudiante' });
      }
      res.status(201).json({ message: 'Estudiante creado exitosamente', id: result.insertId });
    }
  );
});

// ✅ Actualizar un estudiante existente (PUT)
router.put('/:documento_identidad', (req, res) => {
  const documento = req.params.documento_identidad;
  const {
    primer_nombre,
    segundo_nombre,
    apellidos,
    fecha_nacimiento,
    genero
  } = req.body;

  const sql = `
    UPDATE estudiantes
    SET primer_nombre = ?, segundo_nombre = ?, apellidos = ?, fecha_nacimiento = ?, genero = ?
    WHERE documento_identidad = ?
  `;

  db.query(
    sql,
    [primer_nombre, segundo_nombre, apellidos, fecha_nacimiento, genero, documento],
    (err, result) => {
      if (err) {
        console.error('Error al actualizar estudiante:', err);
        return res.status(500).json({ error: 'Error al actualizar estudiante' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Estudiante no encontrado' });
      }
      res.json({ message: 'Estudiante actualizado exitosamente' });
    }
  );
});

// ✅ Eliminar un estudiante
router.delete('/:documento_identidad', (req, res) => {
  const documento = req.params.documento_identidad;
  const sql = 'DELETE FROM estudiantes WHERE documento_identidad = ?';

  db.query(sql, [documento], (err, result) => {
    if (err) {
      console.error('Error al eliminar estudiante:', err);
      return res.status(500).json({ error: 'Error al eliminar estudiante' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Estudiante no encontrado' });
    }
    res.json({ message: 'Estudiante eliminado exitosamente' });
  });
});

module.exports = router;
