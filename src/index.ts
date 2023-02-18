import { Response, Request } from 'express'
import dotenv from 'dotenv'
import { usuarioRouter } from './routes/UsuarioRouter'
import { app } from './app'
import { papelRouter } from './routes/PapelRouter'
import { movimentacaoRouter } from './routes/MovimentacoesRouter'

dotenv.config()

app.use('/usuario', usuarioRouter)
app.use('/papel', papelRouter)
app.use('/movimentacao', movimentacaoRouter)

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('pong')
})

app.listen(process.env.PORT || 4444, () => {
    console.log(`Server rodando http://localhost:${process.env.port}`);
})