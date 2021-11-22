export class userAPI {
    static all() {
        const url = 'http://localhost:3002/users';
        return fetch(url, { method: "GET" });
    }
    static find(id) {
        const url = `http://localhost:3002/users/${id}`;
        console.log(url);
        return fetch(url, { method: "GET" });
    }
    static creat(data) {
        const url = 'http://localhost:3002/users';
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(data)
        });
    }
    static update(id, data) {
        const url = `http://localhost:3002/users/${id}`;
        return fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(data)
        });
    }
    static delete(id) {
        const url = `http://localhost:3002/users/${id}`;
        return fetch(url, { method: "DELETE" });
    }
}
// import axios from "axios"
// axios.defaults.baseURL = 'http://localhost:3002/users';
// export class axiosRequest {
//     public static get(options: object) {
//         return axios({
//             method: "GET",
//             ...options
//         });
//     }
//     public static put(options: object) {
//         return axios({
//             method: "PUT",
//             ...options
//         });
//     }
//     public static post(options: object) {
//         return axios({
//             method: "POST",
//             ...options
//         });
//     }
//     public static delete(options: object) {
//         return axios({
//             method: "DELETE",
//             ...options
//         });
//     }
// }
// export class userAPI {
//     public static all() {
//         const url: string = 'http://localhost:3002/users';
//     }
// }
