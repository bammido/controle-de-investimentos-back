import express, { Response, Request } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(`mongodb+srv://bammido:${process.env.DATABASE_PASSWORD}@controle-de-investiment.j0cg3ev.mongodb.net/?retryWrites=true&w=majority`)

const db = mongoose.Connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connectado!'))

const app = express()
app.use(express.json())
app.use(cors())

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send('pong')
})

app.listen(3333, () => {
    console.log("Server is running in http://localhost:3003");
})