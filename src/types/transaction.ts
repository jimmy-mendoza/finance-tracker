export enum Category {
    comida = "comida",
    salud = "salud",
    estudio = "estudio",
    transporte = "transporte",
    otro = "otro"
}

export enum TransactionType {
    expense = "expense",
    income = "income"
}

export interface Transaction {
    id: number;
    category: Category;
    description: string;
    monto: number;
    fecha: string;
    type: TransactionType;
}