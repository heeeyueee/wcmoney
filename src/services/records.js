import { request, postRequest } from "./axios";

export function getRecords() {
    return request({
        url: "/records"
    })
}

export function addRecords(record) {
    return postRequest("/records", record)
}