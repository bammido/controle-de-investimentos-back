import { corretoraDatabase } from "./data/CorretoraDatabase";
import { movimentacaoDatabase } from "./data/MovimentacaoDatabase";
import { papelDatabase } from "./data/PapelDatabase";
import { papelTaxaDatabase } from "./data/PapelTaxaDatabase";
import { taxaDatabase } from "./data/TaxaDatabase";
import { tipoDeRendaDatabase } from "./data/TipoDeRendaDatabase";
import { usuarioDatabase } from "./data/UsuarioDatabase";

async function createTables(): Promise<void> {
    await usuarioDatabase.createTable()
    await corretoraDatabase.createTable()
    await tipoDeRendaDatabase.createTable()
    await tipoDeRendaDatabase.populate()
    await taxaDatabase.createTable()
    await taxaDatabase.populate()

    await papelDatabase.createTable()
    await movimentacaoDatabase.createTable()

    await papelTaxaDatabase.createTable()
}

createTables().finally(() => process.exit())