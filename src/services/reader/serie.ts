import { api } from "../axios"
import FormData from "form-data"

export const serie = async (search: string) => {
    var form = new FormData()

    try {
        if (search == "" || !search) throw new Error("serie name must be provided")

        form.append("search", search)

        const response = await api.post("https://mangalivre.net/lib/search/series.json", form, {
            headers: {
                "HTTP_X_REQUESTED_WITH": "XMLHttpRequest",
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "multipart/form-data",
                "sec-fetch-dest": "empty",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
                "refer": "localhost.com"
            },
        })

        if (response.data.series.length == 0) throw new Error("serie does not exists")

        return response.data.series[0]
    } catch (error: any) {
        console.log("reader serie error", error)
        throw error.message
    }
}