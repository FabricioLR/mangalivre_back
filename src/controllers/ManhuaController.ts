import { Request, Response } from "express";
import { get } from "../services/manhua/get";

class ManhuaController{
    async get(request: Request, response: Response){
        try {
            const manhuas = await get()

            return response.status(200).send({ manhuas })
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
}

export default new ManhuaController()