import express from 'express';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto', PORT);
});

export default app;