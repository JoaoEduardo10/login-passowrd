import { MongoDb } from "./dataBase/mongoDb";
import { server } from "./server/server";

MongoDb.connect().then(() => {
  server.listen(8000, () => {
    console.info("Servido iniciado");
  });
});
