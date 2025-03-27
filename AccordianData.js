
import {useEffect, useState} from "react"

const API_URL ="https://jsonplaceholder.typicode.com/posts/1/comments";

const GetAccordianData = ()=>{
    const  [data,setData] = useState()
  
    useEffect(()=>{
        const getData = async()=>{
         try{
            const res = await fetch(API_URL)
         const resData= await res.json()
         setData( resData)

         } catch(error){
            console.log(error,"API Error")
         }
        }
        getData()
    },[])
 return data
}

export default GetAccordianData