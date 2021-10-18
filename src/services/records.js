
import axios from "axios";


const API_URL = "http://39.96.56.146:9000/";
export function addRecords(record) {
    return axios.post(API_URL + "records", record)
}
export function getRecords(userId) {
    // console.log(userId);
    return axios.get(API_URL + "records", {
        params: {
            userId: userId
        }
    }).then((response) => {
        return response.data;
    });
}

// export function getRecords() {
//     return request({
//         url: "/records"
//     })
// }

// export function addRecords(record) {
//     return postRequest("/records", record)
// }