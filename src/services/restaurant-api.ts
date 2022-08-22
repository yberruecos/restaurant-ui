import axios from "axios"


const SERVER_URL='http://localhost:8080'
const API_URL=`${SERVER_URL}/api`

const doingRequest=(url:string,method:string,data={})=>{
    return new Promise((resolve,reject)=>{
        axios({
            url,
            method,
            data
        }).then(({data})=>{
            resolve(data)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}

const getMenu=()=>{
    return doingRequest(`${API_URL}/getmenu`,'get')
}

const getDish=(id:string)=>{
    return doingRequest(`${API_URL}/getdish/${id}`,'get')
}

const changeDish=(data:any)=>{
    return doingRequest(`${API_URL}/changedish`,'put',data)
}

const createDish=(data:any)=>{
    return doingRequest(`${API_URL}/createdish`,'post',data)
}

const deleteDish=(id:string)=>{
    return doingRequest(`${API_URL}/deletedish/${id}`,'delete')
}


export {SERVER_URL,API_URL,getMenu,getDish,changeDish,createDish,deleteDish}