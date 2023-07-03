import BaseDatabase from "./BaseDatabase";
import dotenv from "dotenv"
import Movimentacoes from "../models/Movimentacao";

dotenv.config()

class MovimentacaosDatabase extends BaseDatabase {
    TABLE_NAME = (process.env.movimentacoes as string)

    public async getAll(): Promise<Movimentacoes[]> {
        return await super.getAll()
    }

    public async getAllWithWhere(where: any): Promise<Movimentacoes[]> {
        return await super.getAllWithWhere(where)
    }

    public async create(novaMovimentacao: Movimentacoes): Promise<void> {
        await super.create(novaMovimentacao)
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
        const colunas = `id VARCHAR(255) NOT NULL PRIMARY KEY, papel VARCHAR(10) NOT NULL, data DATE NOT NULL, corretora VARCHAR(50) NOT NULL, preco FLOAT NOT NULL, qtd FLOAT NOT NULL, tipoMovimentacao VARCHAR(10) NOT NULL, userId VARCHAR(255) NOT NULL, FOREIGN KEY (papel) REFERENCES ${(process.env.papeis as string)} (papel), FOREIGN KEY (userId) REFERENCES ${(process.env.usuarios as string)} (id), FOREIGN KEY (corretora) REFERENCES ${(process.env.corretoras as string)} (nome)`
        await super.createTable(colunas)
    }

    public async update(where: any, update: any): Promise<any> {
        return await super.update(where, update)
    }
}

export const movimentacaoDatabase = new MovimentacaosDatabase()