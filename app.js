import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
import bodyParser from 'body-parser'

const app = express()

const PORT = 8000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})