import { UserController } from "../controller/users.controller";
import { Router } from "express"

export const userRoutes = () => {


const app = Router();

app.post("/", new UserController().create)
app.get("/:id", new UserController().findUser)
app.get("/", new UserController().list)

return app;

}