import express, { Router } from 'express'
import { usuarioController } from '../controller/UsuariosController'


export const usuarioRouter: Router = express.Router()

usuarioRouter.get('/', usuarioController.getUsuarios)
usuarioRouter.post('/', usuarioController.criarUsuario)
usuarioRouter.post('/login', usuarioController.login)