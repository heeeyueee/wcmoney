import { request, postRequest, deleteRequest } from "./axios";

export function getTags() {
    return request({
        url: "/tags"
    })
}

export function addTags(tag) {
    return postRequest("/tags", tag)
}
export function deleteTags(id) {
    return deleteRequest("/tags", { params: { id } })
}