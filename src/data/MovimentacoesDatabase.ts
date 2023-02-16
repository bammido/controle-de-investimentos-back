import BaseDatabase from "./BaseDatabase";
import dotenv from "dotenv"
import Movimentacoes from "../models/MovimentacoesModel";

dotenv.config()

export default class MovimentacoesDatabase extends BaseDatabase {
    TABLE_NAME = (process.env.movimentacoes as string)

    public async getAll(): Promise<Movimentacoes[]> {
        return await super.getAll()
    }

    public async create(novaMovimentacao: Movimentacoes): Promise<void> {
        await super.create(novaMovimentacao)
    }

    protected async findOne(where: Movimentacoes): Promise<any> {
        return await super.findOne(where)
    }

    protected async dropTable(): Promise<void> {
        await super.dropTable()
    }

    protected async delete(where: any): Promise<void> {
        await super.delete(where)
    }

    public async createTable(): Promise<void> {
        const colunas = `papel VARCHAR(10) NOT NULL PRIMARY KEY, dataDaCompra DATE NOT NULL, corretora VARCHAR(50) NOT NULL, preco FLOAT NOT NULL, qtd FLOAT NOT NULL, tipoMovimentacao VARCHAR(10) NOT NULL, userId VARCHAR(255) NOT NULL, FOREIGN KEY (papel) REFERENCES ${(process.env.papeis as string)} (papel), FOREIGN KEY (userId) REFERENCES ${(process.env.usuarios as string)} (id)`
        await super.createTable(colunas)
    }

}