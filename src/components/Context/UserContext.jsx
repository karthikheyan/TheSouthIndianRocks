import { createContext, useReducer} from "react";

export const UserContext = createContext();

const userReducer = (state, action)=> {
    switch(action.type){
        case "LOGIN":
            return {userDetails: action.payload, user:action.payload.UserName}
        case "LOGOUT":
            return {userDetails: null, user:null}
        default:
            return state;
    }
}

export function UserProvider({ children }){
    const [state, dispatch] = useReducer(userReducer,{
        user: null,
        userData: null,
    })
    const userLogin = (userDetails)=>{
        dispatch({type:'LOGIN',payload: userDetails})
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