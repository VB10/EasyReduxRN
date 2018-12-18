import { selectDatas } from "../const";

export default (state = null, action) => {
    
    switch (action.type) {
        case selectDatas:            
            return action.payload    
        default:
            return state;
    }
};
