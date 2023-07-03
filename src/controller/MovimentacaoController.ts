import { Request, Response } from "express"
import { movimentacaoDatabase } from "../data/MovimentacaoDatabase"
import { papelDatabase } from "../data/PapelDatabase"
import { usuarioDatabase } from "../data/UsuarioDatabase"
import Movimentacao from "../models/Movimentacao"
import verifyToken from "../helpers/functions/verifyToken"

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

    async getMovimentacoesPeloId(req: Request, res: Response) {
        let statusError = 400
        try {
            const { userId } = req.params

            const movimentacoes = await movimentacaoDatabase.getAllWithWhere({ userId })

            res.send(movimentacoes)
        } catch (error: any) {
            res.status(statusError || 400).send({ message: error.message })
        }
    }

    async cadastrarMovimentacao(req: Request, res: Response) {
        let statusError = 400
        try {
            const { papel, data, corretora, preco, qtd, userId, tipoMovimentacao } = req.body

            const papelJaCadastrado = await papelDatabase.findOne({ papel })

            if (!papel || !data || !corretora || !preco || !qtd || !userId || !tipoMovimentacao) {
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

            const novaMovimentacao = new Movimentacao(papel, data, corretora, preco, qtd, userId, tipoMovimentacao)

            await movimentacaoDatabase.create(novaMovimentacao)

            res.status(201).send({ message: 'movimentacao cadastrada com sucesso!' })
        } catch (error: any) {
            console.log(error.message)
            res.status(statusError || 400).send({ message: error.message })
        }
    }

    async editarMovimentacao(req: Request, res: Response) {
        let statusError = 400
        try {
            const { id } = req.params

            const { papel, data, corretora, preco, qtd, tipoMovimentacao } = req.body

            const update = {
                papel,
                data,
                corretora,
                preco,
                qtd,
                tipoMovimentacao
            }

            const movimentacaoParaAtualizar = await movimentacaoDatabase.findOne({ id })

            if (!movimentacaoParaAtualizar) {
                statusError = 404
                throw new Error('Movimentação não encontrado!')
            }

            const token = (req.headers['x-auth-token'] as string)

            const { payload: { data: { 'id': userId } } } = await verifyToken(token)

            if (userId !== movimentacaoParaAtualizar.userId) {
                throw new Error('Somente o usuário referente a essa movimentação tem acesso a modificar suas movimentações')
            }

            const movimentacaoAtualizada = await movimentacaoDatabase.update({ id }, update)

            res.send(movimentacaoAtualizada)
        } catch (error: any) {
            res.status(statusError || 400).send({ message: error.message })
        }
    }
}

export const movimentacaoController = new MovimentacaoController()