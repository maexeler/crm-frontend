import axios from 'axios'

// Let's create an axios instance and paramize it
export const http = axios.create({
    // baseURL: 'https://my-json-server.typicode.com/maexeler/jsondata',
    baseURL: 'http://localhost:8080',
    timeout: 2000,
    headers: {'Content-Type': 'application/json'},
})

// Return a Promise containing the response data on success
export async function callForData<R>(httpFun: any, uri: string, params?: any): Promise<R> {
    return new Promise<R>((resolve, reject) => {
        httpFun(uri, params)
            .then((response: any) => { resolve(response.data) })
    })
}
