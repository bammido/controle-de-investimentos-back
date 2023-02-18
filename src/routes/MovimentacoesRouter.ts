import express, { Router } from 'express'
import { movimentacaoController } from '../controller/MovimentacaoController'

export const movimentacaoRouter: Router = express.Router()

movimentacaoRouter.get('/', movimentacaoController.getMovimentacoes)
movimentacaoRouter.post('/', movimentacaoController.cadastrarMovimentacao)