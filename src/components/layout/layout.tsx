import React,{useContext, useState} from "react";
import Dish from "../dish/dish";
import { dishInfo } from "../dish/dish";
import './layout.css'
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/appContext";
import { useSelector } from "react-redux";
import useData from "../../hooks/useData";
import { deleteDish } from "../../services/restaurant-api";


const Layout=()=>{
    const [data,setData,updateData]:any=useData()
    //const [data]:any=useContext(AppContext)
    let navigate = useNavigate();
    // const data=useSelector((state:any)=>state.data.value)

    const handleClickAdd=(e:any)=>{
        e.preventDefault()
        navigate('/form/0')
    }

    const editCallBack=(e:any,id:string)=>{
        e.preventDefault()
        navigate(`/form/${id}`)
    }

    const deleteCallBack=(e:any,id:string)=>{
        e.preventDefault()
        deleteDish(id)
        .then((data)=>{
            updateData()
            alert(data)
        })
    }
    return (
        <section className="menu">
            <h1>The awesome menu</h1>
            <button onClick={(e)=>{handleClickAdd(e)}} className="menu_add_button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"/></svg></button>
            <div className="menu_grid">
                {data?data.map((item:dishInfo,index:number)=>{
                    return <Dish key={`dish-${index}`} dishData={item} editCallBack={editCallBack} deleteCallBack={deleteCallBack}/>
                }):''}
            </div>
        </section>
    )
}

export default Layout