import './App.css';
import Row from './row';
import { useState } from 'react';
import listData from './list';
import { Link
 } from 'react-router-dom';
function Home() {
  var data=listData
 const[value, setValue]=useState("")
  
    console.log(value)
  return (
    <div className="App">
       <Link to={"/edit/"+value} className="edit-btn">edit</Link>
      <table>
        <tbody>
        {
          data.map((rdata)=>{
            console.log(rdata);
            return <Row key={rdata.id} propData={rdata} setVal={setValue} val={value}/>
          })
        }
        </tbody>
      </table>
    </div>
  );
}

export default Home;
