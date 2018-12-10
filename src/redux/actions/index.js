
import {selectData} from '../const'
export const selectData = (dataID) => {

    //api call
    return {
        type: selectData,
        payload: dataID
    }

}