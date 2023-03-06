import { Request, Response } from "express";
import { get } from "../services/webtoon/get";

class WebtoonController{
    async get(request: Request, response: Response){
        try {
            const webtoons = await get()

            return response.status(200).send({ webtoons })
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
}

export default new WebtoonController()