import { prettyDOM } from '@testing-library/react'
import React from 'react'

const Row = ({propData}) => {
    console.log(propData,"rdata")
  return (
    <tr>
        <td>
            <input type="checkbox" name="" id="" />
        </td>
        <td>{propData.id}</td>
        <td>{propData.name}</td>
        <td>{propData.age}</td>
        <td>{propData.place}</td>
    </tr>
  )
}

export default Row