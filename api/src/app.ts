import express from "express"
import mongoose from "mongoose"
import morgan from "morgan"
import routes from "@routes/index"
import uri from "@database/config"

class App {
    server: any
    constructor() {
        this.server = express()
        this.logger()
        this.database()
        this.middlewares()
        this.routes()
    }

    logger() {
        this.server.use(morgan('[INFO] :method - :url - STATUS: :status - :response-time ms'))
    }

    database() {
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
    }

    middlewares() {
        this.server.use(express.json())
    }

    routes() {
        this.server.use(routes)
    }
}

export default new App().server