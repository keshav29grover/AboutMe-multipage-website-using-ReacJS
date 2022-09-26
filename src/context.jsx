import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { useEffect } from "react";

const AppContext = React.createContext();

const API = "https://thapareactapi.up.railway.app";

const initialState = {
    name: "",
    image: "",
    services: [],
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Full Stack Developer",
                image: "./images/hero.svg",
            },
        });
    };

    const updateAboutPage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Keshav Grover",
                image: "./images/about1.svg",
            },
        });
    };

    const getServices = async (url) => {
        try{
            const res = await fetch(url);
            const data = await res.json();
            dispatch({type: "GET_SERVICES", payload: data});
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      getServices(API);
    }, []);
    

    return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};