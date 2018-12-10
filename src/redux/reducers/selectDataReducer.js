import { selectData } from "../const";

export default (state = null,action) => {
  
    switch (action.type) {
        case selectData:            
            return action.payload    
        default:
            return state;
    }
};
