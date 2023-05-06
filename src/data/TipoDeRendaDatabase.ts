import BaseDatabase from "./BaseDatabase";
import dotenv from "dotenv"
import TipoDeRenda from "../models/TipoDeRenda";

dotenv.config()

class TipoDeRendaDatabase extends BaseDatabase {
    TABLE_NAME = (process.env.TiposDeRenda as string)

    public async getAll(): Promise<TipoDeRenda[]> {
        return await super.getAll()
    }

    public async create(novaMovimentacao: TipoDeRenda): Promise<void> {
        return await super.create(novaMovimentacao)
    }

    public async findOne(where: any): Promise<any> {
        return await super.findOne(where)
    }

    public async dropTable(): Promise<void> {
        await super.dropTable()
    }

    public async delete(where: any): Promise<void> {
        await super.delete(where)
    }

    public async createTable(): Promise<void> {
        const colunas = `id VARCHAR(255) NOT NULL PRIMARY KEY, tipo VARCHAR(20) NOT NULL UNIQUE`
        return await super.createTable(colunas)
    }

}

export const tipoDeRendaDatabase = new TipoDeRendaDatabase()