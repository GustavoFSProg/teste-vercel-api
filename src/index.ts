import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const { PORT } = process.env

const api = express()

api.use(cors())
api.use(express.json())

api.listen(PORT, () => {
  console.log(` 🔯 Api running: ${PORT}`)
})

api.get('/', (req: Request, res: Response) => {
  return res.json({ msg: " 🔯 API!!" })
})

export default api