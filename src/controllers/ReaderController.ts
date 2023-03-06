import { Request, Response } from "express";
import { chapter } from "../services/reader/chapter";
import { chapters } from "../services/reader/chapters";
import { serie } from "../services/reader/serie";

class ReaderController {
    async chapter(request: Request, response: Response){
        const { chapterId } = request.body

        try {
            const chapterInfo = await chapter(String(chapterId))

            return response.status(200).send({ chapter: chapterInfo })
        } catch (error) {
            return response.status(400).send({ error })
        }
    }

    async chapters(request: Request, response: Response){
        const { serieId } = request.body

        try {
            const serieChapters = await chapters(String(serieId))

            return response.status(200).send({ chapters: serieChapters })
        } catch (error) {
            return response.status(400).send({ error })
        }
    }

    async serie(request: Request, response: Response){
        const { search } = request.body

        try {
            const serieInfo = await serie(search)

            return response.status(200).send({ serie: serieInfo })
        } catch (error) {
            return response.status(400).send({ error })
        }
    }
}

export default new ReaderController()