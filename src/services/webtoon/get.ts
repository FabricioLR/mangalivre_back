import { Webtoon } from "../../types/types"
import { api } from "../axios"

type WebtoonsData = {
    dia: Webtoon[]
    semana: Webtoon[]
    mês: Webtoon[]
    ano: Webtoon[]
}

export const get = async () => {
    try {
        const webtoons: WebtoonsData = {
            dia: await (await api.get("home/most_read_period?type=webtoon&period=day")).data.most_read,
            semana: await (await api.get("home/most_read_period?type=webtoon&period=week")).data.most_read,
            mês: await (await api.get("home/most_read_period?type=webtoon&period=month")).data.most_read,
            ano: await (await api.get("home/most_read_period?type=webtoon&period=year")).data.most_read
        }

        return webtoons
    } catch (error: any) {
        throw error.message
    }
}