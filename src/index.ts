import express, { Response, Request } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { usuarioRouter } from './routes/UsuarioRouter'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/usuario', usuarioRouter)

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send('pong')
})

app.listen(process.env.port, () => {
    console.log(`Server rodando http://localhost:${process.env.port}`);
})