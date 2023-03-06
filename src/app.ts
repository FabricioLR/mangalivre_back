import express from "express"
import cors from "cors"
import router from "./router"

class App {
    express: express.Express

    constructor(){
        this.express = express()

        this.middleware()
        this.router()
    }

    middleware(){
        this.express.use(cors())
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }))
    }

    router(){
        this.express.use(router)
    }
}

export default new App().express