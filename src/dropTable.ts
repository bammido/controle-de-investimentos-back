import { movimentacaoDatabase } from "./data/MovimentacoesDatabase";
import { papelDatabase } from "./data/PapelDatabase";
import { usuarioDatabase } from "./data/UsuarioDatabase";

async function dropTable() {
    await movimentacaoDatabase.dropTable()
    await papelDatabase.dropTable()
    await usuarioDatabase.dropTable()
}

dropTable().finally(() => process.exit())