import axios from "axios"

const api = axios.create({
    baseURL: "https://mangalivre.net/",
    headers: {
        "HTTP_X_REQUESTED_WITH": "XMLHttpRequest",
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        "sec-fetch-dest": "empty",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36",
        "refer": "localhost.com",
        "Accept-Encoding": "gzip, deflate, br"
    }
})

api.defaults.headers.common["HTTP_X_REQUESTED_WITH"] = "XMLHttpRequest"
api.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
api.defaults.headers.common["Content-Type"] = "application/json"
api.defaults.headers.common["sec-fetch-dest"] = "empty"
api.defaults.headers.common["User-Agent"] = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
api.defaults.headers.common["refer"] = "localhost.com"
api.defaults.headers.common["Accept-Encoding"] = "gzip, deflate, br"


export { api }