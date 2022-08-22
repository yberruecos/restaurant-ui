import { useEffect,useState } from "react"
import { getMenu } from "../services/restaurant-api"


const useData=()=>{
    const [data,setData]:any=useState([])

    useEffect(()=>{
      //   getMenu()
      // .then((data)=>{
      //   setData(data)
      // })

      const fetchData=async()=>{
        const res=await getMenu()
        setData(res)
      }

      fetchData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const updateData=()=>{
      getMenu()
      .then((data)=>{
        setData(data)
      })
    }

    return [data,setData,updateData]
}

export default useData