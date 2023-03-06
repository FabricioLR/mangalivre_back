import { Router} from "express"

import MangaController from "./controllers/MangaController"
import ManhuaController from "./controllers/ManhuaController"
import ReaderController from "./controllers/ReaderController"
import WebtoonController from "./controllers/WebtoonController"

const router = Router()

router.get("/getMangas", MangaController.get)
router.get("/getManhuas", ManhuaController.get)
router.get("/getWebtoons", WebtoonController.get)

router.post("/getChapter", ReaderController.chapter)
router.post("/getChapters", ReaderController.chapters)
router.post("/getSerie", ReaderController.serie)

export default router