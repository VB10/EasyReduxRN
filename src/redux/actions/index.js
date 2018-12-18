import {
    selectDatas
} from '../const'
export const selectData = (dataID) => {
    //api call
    return {
        type: selectDatas,
        payload: dataID
    }

}