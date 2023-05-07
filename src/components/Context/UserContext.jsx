import { createContext, useReducer} from "react";

export const UserContext = createContext();

const userReducer = (state, action)=> {
    switch(action.type){
        case "LOGIN":
            return {user:action.payload}
        case "LOGOUT":
            return {user:action.payload}
        default:
            return state;
    }
}

export function UserProvider({ children }){
    const [state, dispatch] = useReducer(userReducer,{
        user: null,
    })
    const userLogin = (user)=>{
        dispatch({type:'LOGIN',payload: user})
    }
    const userLogout = (user)=>{
        dispatch({type:'LOGOUT',payload: null})
    }
    console.log(state);

    return (
            <UserContext.Provider value={{...state, userLogin, userLogout}}>
                {children}
            </UserContext.Provider>)
    }