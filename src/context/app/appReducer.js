import { DATA_ACTOR, DELETE_INFO} from '../../types/index';

const appReducer = (state, action) => {
    switch (action.type) {
        case DATA_ACTOR:
            return{ 
                ...state,
                dataActor:action.payload
            }
        case DELETE_INFO:
            return{ 
                ...state,
                dataActor:[]
            }
        default:
            return state;
    }
}

export default appReducer;