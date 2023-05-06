import { movimentacaoDatabase } from "./data/MovimentacaoDatabase";
import { papelDatabase } from "./data/PapelDatabase";
import { usuarioDatabase } from "./data/UsuarioDatabase";

async function createTables(): Promise<void> {
    await usuarioDatabase.createTable()
    await papelDatabase.createTable()
    await movimentacaoDatabase.createTable()
}

createTables().finally(() => process.exit())