
import React from 'react'

const Row = ({propData,val,setVal}) => {
  return (
    <tr>
        <td>
            <input className='check' type="checkbox" name="" id="" onChange={()=>{setVal(propData.id)}} />
        </td>
        <td>{propData.id}</td>
        <td>{propData.name}</td>
        <td>{propData.age}</td>
        <td>{propData.place}</td>
    </tr>
  )
}

export default Row