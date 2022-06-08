import React from "react";
import { createStore } from "redux";

const reducerFn=(state={Product:[]},action)=>{
    axios.get("http://localhost:8000/").then((res)=>{
        const data=res.data
        return {Product:data};
        console.log(Product);
      }).catch((error)=>{
        console.log("error");
      })

}


const store= createStore(reducerFn)
export default  store
