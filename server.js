import app from './src/app.js';
import config from './src/config/config.js';

const port = config.port;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
