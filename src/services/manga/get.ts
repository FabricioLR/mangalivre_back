import { Manga } from "../../types/types"
import { api } from "../axios"
import { exec } from "child_process"

type MangasData = {
    dia: Manga[]
    semana: Manga[]
    mês: Manga[]
    ano: Manga[]
}

export const get = async () => {
    try {
        // const mangas: MangasData = {
        //     dia: await (await api.get("home/most_read_period?type=manga&period=day")).data.most_read,
        //     semana: await (await api.get("home/most_read_period?type=manga&period=week")).data.most_read,
        //     mês: await (await api.get("home/most_read_period?type=manga&period=month")).data.most_read,
        //     ano: await (await api.get("home/most_read_period?type=manga&period=year")).data.most_read
        // }

        // return mangas
        exec("curl https://mangalivre.net/home/most_read_period?type=manga&period=day", (error, stdout, stderr) => {
            console.log(error)
            console.log(stdout)
        })

        return {}
    } catch (error: any) {
        console.log("manga get error", error)
        throw error.message
    }
}