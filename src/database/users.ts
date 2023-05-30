import { Transaction } from "../models/transactions";
import {User} from "../models/user"


export const users: User[] = [
    new User("André","823.370.550-00","andré@email.com",21),
    new User("Ramon","203.154.460-80","ramon@email.com",22),
    new User("Diego","061.061.240-94","diego@email.com",18),
    new User("Pablo","093.299.330-33","pablo@email.com",21),
];

users[0].transaction.push(new Transaction ("Compra do feijão", 10, "saída" ));
users[1].transaction.push(new Transaction("Levar cachorro no pet", 60, "saída"));
users[2].transaction.push(new Transaction("Cabeleireiro", 50, "saída"));
users[3].transaction.push(new Transaction("Salario", 3500, "entrada"));
