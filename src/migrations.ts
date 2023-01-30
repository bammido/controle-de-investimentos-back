import { usuarioDatabase } from "./data/UsuarioDatabase";

usuarioDatabase.createTable().then(() => process.exit)