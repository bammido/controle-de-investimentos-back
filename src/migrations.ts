import { papelDatabase } from "./data/PapelDatabase";
import { usuarioDatabase } from "./data/UsuarioDatabase";

async function createTables(): Promise<void> {
    usuarioDatabase.createTable()
    papelDatabase.createTable()
}

createTables().finally(() => process.exit())