const express = require('express');
const cors = require('cors');
const estudiantesRoutes = require('./routes/estudiantes.js');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Ruta para obtener todos los estudiantes
app.use('/api/estudiantes', estudiantesRoutes); 

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});