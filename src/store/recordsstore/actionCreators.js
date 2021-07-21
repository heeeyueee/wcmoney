
import { getRecords } from "../../services/records"

export const getRecordsDataAction = () => {
    return dispatch => {
        getRecords().then(res => {
            console.log(res);
        })
    }
}