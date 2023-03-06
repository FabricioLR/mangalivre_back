import { Request, Response } from "express";
import { get } from "../services/manga/get";

class MangaController{
    async get(request: Request, response: Response){
        try {
            const mangas = await get()

            return response.status(200).send({ mangas })
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
}

export default new MangaController()