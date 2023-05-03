import express,  {Request, Response} from "express";
import cors from "cors";
import dataSource from "./utils";
import wilderController from "./controller/wilder";
import skillController from "./controller/skill";
import gradeController from "./controller/grade";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000"}))

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.post ("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.read);
app.put("/api/wilder", wilderController.update);
app.delete("/api/wilder", wilderController.delete);

app.post ("/api/skill", skillController.create);
app.get("/api/skill", skillController.read);
app.put("/api/skill", skillController.update);
app.delete("/api/skill", skillController.delete);

app.post ("/api/grade", gradeController.create);
app.get("/api/grade", gradeController.read);

app.use((req, res, next) => {
  res.status(404).send ("Sorry can't find that");
});
const start = async (): Promise<void> => {
  await dataSource.initialize();
  // dataSource.getRepository(Wilder).save({name: "First Wilder"});
  app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
};

void start();

