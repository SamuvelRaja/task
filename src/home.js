import './App.css';
import Row from './row';
import { useState } from 'react';
import listData from './list';

function Home() {
  var data=listData
 const[value, setValue]=useState("")
  
    console.log(value)
  return (
    <div className="App">
      <a href={ window.location.origin+"/edit/"+value} className="edit-btn">edit</a>
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
