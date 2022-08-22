import axios from 'axios'
import React,{useRef,useLayoutEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { changeDish, createDish, getDish } from '../../services/restaurant-api'
import { dishInfo } from '../dish/dish'
import './formDish.css'

const FormDish=()=>{
    const formRef:any=useRef(null)
    const params=useParams()
    const [dataForm,setDataForm]:any=useState({
        id: "",
        name: "",
        description: "",
        price: "",
        photo: ""
    })
    const [editImage,setEditImage]=useState(false)
    const [changeDishFlag,setChangeDishFlag]=useState(false)
    const idDish=params.dish

    useLayoutEffect(()=>{
        const editDish=idDish!=="0"
        if(editDish){
            getDish(idDish || '0')
            .then((data)=>{
                setEditImage(true)
                setChangeDishFlag(true)
                setDataForm(data)
            })
        }
    },[idDish,params])

    const handleSubmit=(e:any)=>{
        e.preventDefault()
        const formDataCreate=new FormData(formRef.current)
        if(changeDishFlag){
            const formDataEdit=new FormData()
            formDataEdit.append("id",idDish || '0')
            formDataEdit.append("name",formDataCreate.get('name') || 'bandeja')
            formDataEdit.append("description",formDataCreate.get('description') || 'description')
            formDataEdit.append("price",formDataCreate.get('price') || 'price')
            formDataEdit.append("photo",formDataCreate.get('photo') || dataForm.photo)
            changeDish(formDataEdit)
            .then((data:any)=>{
                alert(data)
            })
        }else {
            createDish(formDataCreate)
            .then((data:any)=>{
                alert(data)
            })
        }
    }

    return (
        <section className="form-container">
            <h1>Create / Edit dish</h1>
            <form ref={formRef}>
                <label>
                    Name:
                    <input type="text" name="name" defaultValue={dataForm.name}/>
                </label>
                <label>
                    Description:
                    <textarea name="description" defaultValue={dataForm.description}></textarea>
                </label>
                <label>
                    Price:
                    <input type="text" name="price" defaultValue={dataForm.price}/>
                </label>
                {editImage?
                <label>
                    Image:
                    <img src={`http://localhost:8080${dataForm.photo}`} alt='dish' width={50}/>
                    <button onClick={()=>setEditImage(false)}>Edit</button>
                </label>:
                <label>
                    Photo:
                    <input type="file" name="photo"/>
                </label>}
                <input className='form_submit' type="submit" value="Submit" onClick={(e)=>handleSubmit(e)}/>
            </form>
        </section>
    )
}

export default FormDish