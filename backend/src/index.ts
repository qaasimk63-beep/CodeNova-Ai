import app from './app';
import { env } from './config';

app.listen(env.PORT, () => {
  console.log(`CodeNova AI backend listening on http://localhost:${env.PORT}`);
});
