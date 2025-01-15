import { useEffect, useState } from "react";
import axios from "axios"

export default  function  useTodos(){

    const[todos, settodos]=useState([]);
    useEffect(()=>{
        async function fech(){
        const response= await axios.get("http://localhost:3000/todos");
        settodos(response.data)
    }
fech()
},[])
    
    console.log(todos);
    return{
        todos
    }
}