import BaseDatabase from "./BaseDatabase";
import dotenv from "dotenv"
import Papel from "../models/Papel";

dotenv.config()

export default class PapelDatabase extends BaseDatabase {
    TABLE_NAME = (process.env.papeis as string)

    public async getAll(): Promise<Papel[]> {
        return await super.getAll()
    }

    public async create(novaMovimentacao: Papel): Promise<void> {
        await super.create(novaMovimentacao)
    }

    protected async findOne(where: Papel): Promise<any> {
        return await super.findOne(where)
    }

    protected async dropTable(): Promise<void> {
        await super.dropTable()
    }

    protected async delete(where: any): Promise<void> {
        await super.delete(where)
    }

    public async createTable(): Promise<void> {
        const colunas = 'papel VARCHAR(10) NOT NULL PRIMARY KEY, nome VARCHAR(50) NOT NULL, tipoDeRenda VARCHAR(20) NOT NULL, tipoDeInvestimento VARCHAR(20), taxasIncidentes VARCHAR(50)'
        await super.createTable(colunas)
    }
}

export const papelDatabase = new PapelDatabase()