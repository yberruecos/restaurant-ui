import react from 'react'
import { SERVER_URL } from '../../services/restaurant-api'
import './dish.css'

export type dishInfo={
    id?:number,
    name:string,
    description:string,
    price:string,
    photo:string
}

const Dish=({dishData,editCallBack,deleteCallBack}:{dishData:dishInfo,editCallBack:Function,deleteCallBack:Function})=>{
    return (
        <article className='dish'>
            <div className='dish_container_img'><img src={`${SERVER_URL}${dishData.photo}`} alt='dish'/></div>
            <div className='dish_container_info'>
                <h1>{dishData.name}</h1>
                <p>{dishData.description}</p>
                <div className='dish_container_info_price'>
                    <span>{dishData.price}</span>
                    <div>
                        <button className='dish_button_edit' onClick={(e)=>editCallBack(e,dishData.id)}>Edit</button>
                        <button className='dish_button_delete' onClick={(e)=>deleteCallBack(e,dishData.id)}>Delete</button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Dish