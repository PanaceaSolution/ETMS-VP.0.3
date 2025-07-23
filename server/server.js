import express from 'express'
import dotenv from 'dotenv'
import globalErrorHandler from './middlewares/globalErrorHandler.js'

const app = express()
dotenv.config()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello Server!')
})

app.use(globalErrorHandler)
app.listen(3000, () => {
    console.log('Server running on port 3000')
})
