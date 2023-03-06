import { Manhua } from "../../types/types"
import { api } from "../axios"

type ManhuaData = {
    dia: Manhua[]
    semana: Manhua[]
    mês: Manhua[]
    ano: Manhua[]
}

export const get = async () => {
    try {
        const manhuas: ManhuaData = {
            dia: await (await api.get("home/most_read_period?type=manhua&period=day")).data.most_read,
            semana: await (await api.get("home/most_read_period?type=manhua&period=week")).data.most_read,
            mês: await (await api.get("home/most_read_period?type=manhua&period=month")).data.most_read,
            ano: await (await api.get("home/most_read_period?type=manhua&period=year")).data.most_read
        }

        return manhuas
    } catch (error: any) {
        throw error.message
    }
}