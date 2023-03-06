import { api } from "../axios"

export const chapters = async (serieId: string) => {
    try {
        var index = 1
        var data: any = []

        while (true){
            const response = await api.get("series/chapters_list.json?page=" + String(index) + "&id_serie=" + serieId, {
                headers: {
                    "HTTP_X_REQUESTED_WITH": "XMLHttpRequest",
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json",
                    "sec-fetch-dest": "empty",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
                    "refer": "localhost.com"
                },
            })

            if (response.data.chapters == false) break
            
            index += 1

            data = [...data, ...response.data.chapters]
        }

        return data
    } catch (error: any) {
        throw error.message
    }
}