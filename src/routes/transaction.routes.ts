import { UserController } from "../controller/users.controller";
import { Router } from "express"
import { Transaction } from "../models/transactions";

export const transactionsRoutes = () => {

const app = Router({
    mergeParams: true
});


app.post("/", new UserController().create)
app.get("/:id", new UserController().findTransactions)
app.get("/", new UserController().listTransaction)
app.delete("/:id", new UserController().deleteTransaction)
app.put("/:id", new UserController().editTransaction)

return app;

}