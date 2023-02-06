import { usuarioDatabase } from "./data/UsuarioDatabase";

usuarioDatabase.createTable().finally(() => process.exit())