import { Request, Response } from "express";
import { usuarioDatabase } from "../data/UsuarioDatabase";
import Usuario from "../models/Usuario";
import { v4 as uuidV4 } from 'uuid'

import dotenv from 'dotenv'
import generateToken from "../helpers/functions/generateToken";

dotenv.config()

class UsuarioController {

    async getUsuarios(req: Request, res: Response) {
        let statusError = 400
        try {
            const usuarios = await usuarioDatabase.getAll()

            res.send(usuarios)
        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    async criarUsuario(req: Request, res: Response) {
        let statusError = 400
        try {
            const { email, password, nome } = req.body
            const id = uuidV4()

            const buscaEmailJacadastrado = await usuarioDatabase.findOne({ email })

            if (buscaEmailJacadastrado?.email) {
                throw new Error('email ja cadastrado')
            }

            if (`${password}`.length < 8) {
                throw new Error('a senha deve conter pelo menos 8 dígitos');
            }

            if (Number(password)) {
                throw new Error('a senha não pode conter apenas números');
            }

            const novoUsuario = new Usuario(id, email, password, nome)

            await usuarioDatabase.create(novoUsuario)

            res.status(201).send({ message: 'usuario criado com sucesso!' })
        } catch (error: any) {
            res.status(statusError || 400).send({ message: error.message })

        }
    }

    async login(req: Request, res: Response) {
        let statusError = 400
        try {
            const { email, password } = req.body

            const usuario = await usuarioDatabase.findOne({ email, password })

            if (!usuario) {
                statusError = 404
                throw new Error("usuário não encontrado");
            }

            const token = await generateToken(usuario, '1h')

            res.send({ token })
        } catch (error: any) {
            res.status(statusError || 400).send({ message: error.message })
        }
    }
}

export const usuarioController = new UsuarioController()