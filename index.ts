import express, { Response, Request } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send('pong')
})

app.listen(3333, () => {
    console.log("Server is running in http://localhost:3003");
})