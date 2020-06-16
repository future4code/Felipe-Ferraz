import express from "express";
import { AddressInfo } from "net";
import { userRouter } from "./router/UserRouter";
import { admRouter } from "./router/AdminRouter";
import { admAndBandRouter } from "./router/adminAndBandRouter";
import { bandRouter } from "./router/BandRouter";
const app = express();

app.use(express.json());

app.use("/users/", userRouter);
app.use("/admin/", admRouter);
app.use("/genders/", admAndBandRouter);
app.use("/band/", bandRouter);

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});
