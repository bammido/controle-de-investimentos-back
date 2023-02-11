import { Response, Request } from 'express'
import dotenv from 'dotenv'
import { usuarioRouter } from './routes/UsuarioRouter'
import { app } from './app'
import { papelRouter } from './routes/PapelRouter'

dotenv.config()

app.use('/usuario', usuarioRouter)
app.use('/papel', papelRouter)

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send('pong')
})

app.listen(process.env.port, () => {
    console.log(`Server rodando http://localhost:${process.env.port}`);
})