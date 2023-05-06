import { Request, Response } from "express"
import { movimentacaoDatabase } from "../data/MovimentacaoDatabase"
import { papelDatabase } from "../data/PapelDatabase"
import { usuarioDatabase } from "../data/UsuarioDatabase"
import Movimentacao from "../models/Movimentacao"

class MovimentacaoController {
    async getMovimentacoes(req: Request, res: Response) {
        let statusError = 400
        try {
            const movimentacoes = await movimentacaoDatabase.getAll()

            res.send(movimentacoes)
        } catch (error: any) {
            res.status(statusError || 400).send({ message: error.message })
        }
    }

    async cadastrarMovimentacao(req: Request, res: Response) {
        let statusError = 400
        try {
            const { papel, dataDaCompra, corretora, preco, qtd, userId, tipoMovimentacao } = req.body

            const papelJaCadastrado = await papelDatabase.findOne({ papel })

            if (!papel || !dataDaCompra || !corretora || !preco || !qtd || !userId || !tipoMovimentacao) {
                statusError = 422
                throw new Error('Os campos papel, dataDaCompra, corretora, preco, qtd, userId e tipoMovimentacao são obrigatórios')
            }

            if (!papelJaCadastrado) {
                statusError = 404
                throw new Error('papel não cadastrado, cadastre o papel primeiro!')
            }

            const usuarioEncontrado = await usuarioDatabase.findOne({ id: userId })

            if (!usuarioEncontrado) {
                statusError = 404
                throw new Error('usuario não encontrado!')
            }

            const novaMovimentacao = new Movimentacao(papel, dataDaCompra, corretora, preco, qtd, userId, tipoMovimentacao)

            await movimentacaoDatabase.create(novaMovimentacao)

            res.status(201).send({ message: 'movimentacao cadastrada com sucesso!' })
        } catch (error: any) {
            console.log(error.message)
            res.status(statusError || 400).send({ message: error.message })
        }
    }
}

export const movimentacaoController = new MovimentacaoController()