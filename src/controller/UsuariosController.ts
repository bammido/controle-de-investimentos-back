import { Request, Response } from "express";
import { usuarioDatabase } from "../data/UsuarioDatabase";
import Usuario from "../models/Usuario";
import { v4 as uuidV4 } from 'uuid'

class UsuarioController {

    async getUsuarios(req: Request, res: Response) {
        try {
            const usuarios = await usuarioDatabase.getAll()

            res.send(usuarios)
        } catch (error: any) {
            console.log(error)
            return error
        }
    }

    async criarUsuario(req: Request, res: Response) {
        try {
            const { email, password, nome } = req.body
            const id = uuidV4()

            const buscaEmailDuplicado = await usuarioDatabase.findOne({ email })

            if (buscaEmailDuplicado?.email) {
                throw new Error('email ja cadastrado')
            }

            const novoUsuario = new Usuario(id, email, password, nome)

            await usuarioDatabase.create(novoUsuario)

            res.status(201).send({ message: 'usuario criado com sucesso!' })
        } catch (error: any) {
            res.status(422).send({ message: error.message })
        }
    }
}

export const usuarioController = new UsuarioController()