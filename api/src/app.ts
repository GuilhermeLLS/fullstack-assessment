import cors from "cors"
import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"
import routes from "./routes/index"
import getDbURL from "./config/database";

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
        this.server.use(morgan("[INFO] :method - :url - STATUS: :status - :response-time ms"))
    }

    database() {
        const mongoURL: string = getDbURL();
        mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
    }

    middlewares() {
        this.server.use(cors())
        this.server.use(express.json())
    }

    routes() {
        this.server.use(routes)
    }
}

export default new App().server