import { app } from "./app.js";
import { connectDatabase } from "./database.js";

const port = process.env.PORT ?? 3000;

try {
  await connectDatabase(process.env.MONGODB_URI);
  app.listen(port, () => console.log(`API na porta ${port}`));
} catch (error) {
  console.error("Falha ao iniciar a API", error);
  process.exit(1);
}
