import './App.css';
import Row from './row';

function App() {
  var data=[
    {id: 1, name: 'Aditya', age: 30, place: 'Mumbai'},
{id: 2, name: 'Anjali', age: 25, place: 'Delhi'},
{id: 3, name: 'Rishabh', age: 40, place: 'Bangalore'},
{id: 4, name: 'Sakshi', age: 35, place: 'Chennai'},
{id: 5, name: 'Rohit', age: 20, place: 'Kolkata'}
]

          console.log(data);
  return (
    <div className="App">
      <table>
        {
          data.map((rdata)=>{
            console.log(rdata);
            return <Row key={rdata.id} propData={rdata} />
          })
        }
      </table>
    </div>
  );
}

export default App;
