import { api } from "../axios"

export const chapter = async (chapterId: string) => {
    try {
        if (!chapterId) throw new Error("chapter id must be provided")

        return await (await api.get("leitor/pages/" + chapterId + ".json")).data.images
    } catch (error: any) {
        throw error.message
    }
}