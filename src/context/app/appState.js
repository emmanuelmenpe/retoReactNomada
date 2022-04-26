import {useReducer} from 'react';
import appReducer from './appReducer';
import appContext from './appContext';
import { DATA_ACTOR, DELETE_INFO} from '../../types/index'

const AppState = ({children}) => {

    const initialState = {
        dataActor:[],
    }

    const [state, dispatch] = useReducer(appReducer, initialState);

    const infoActor = (data) => {
        
        dispatch({
            type: DATA_ACTOR,
            payload:data
        });
    }

    const deleteInfoActor = () => {
        dispatch({
            type: DELETE_INFO
        });
    }
    
    return (
        <appContext.Provider
            value={{
                dataActor: state.dataActor,
                infoActor,
                deleteInfoActor
            }}
        >
            {children}
        </appContext.Provider>
    )
}

export default AppState;