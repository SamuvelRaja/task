import React from 'react'
import { useParams } from "react-router-dom"
import listData from './list';
import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
    const navigate=useNavigate()
    const { id } = useParams()
    const[name, setName]=useState(listData[id].name)
    const[age, setAge]=useState(listData[id].age)
    const[place, setPlace]=useState(listData[id].place)
    const subHandle=(e)=>{
        e.preventDefault()
        listData[id].name=document.querySelector("#name").value;
        listData[id].age=document.querySelector("#age").value;
        listData[id].place=document.querySelector("#place").value;
        navigate("/")
    }
  return (
    <div>
        <div className="dflex">
            <span>id: {listData[id].id}</span><span>{listData[id].name}</span><span>{listData[id].age}</span><span>{listData[id].place}</span>
        </div>
        <div className="form">
            <form >
                <label htmlFor="">name</label>
                <input type="text" name="" id="name" onChange={(e)=>{setName(e.target.value)}} value={name} />
                <label htmlFor="">age</label>
                <input type="number" name="" onChange={(e)=>{setAge(e.target.value)}} id="age" value={age} />
                <label htmlFor="">place</label>
                <input type="text" name="" id="place" onChange={(e)=>{setPlace(e.target.value)}} value={place} />
                <button className='sub-btn' onClick={(e)=>{subHandle(e)}}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Edit