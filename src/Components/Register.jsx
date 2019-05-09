import React,{useState,useEffect} from 'react'
import Inputtext from './Ui/Inputtext';
import Axios from 'axios';

export default function Register(props) {

const [data,setData]=useState({

    "Username":"",
    "Password" :"",
    "Email":"",
    "Address":"",
})

function Submit(e){
    e.preventDefault()
  console.log(data)
  Axios.post("http://localhost:62405/api/Registers",data)
   .then(res=>console.log(res.data)).catch(err=>console.error(err))
  }



function handle(e){

    const newdata={...data}

    newdata[e.target.id]=e.target.value
    setData(newdata)

}

  return (
    <div>
        <form onSubmit={(e)=>Submit(e)} >
      <Inputtext label="Username" handle={(e)=>handle(e)} nvalue={data.Username} itype="text"  name="Username"  place="Enter Username" />
      <Inputtext label="Password" handle={(e)=>handle(e)} nvalue={data.Password} itype="text"  name="Password"  place="Enter Password" />
      <Inputtext label="Email" handle={(e)=>handle(e)} nvalue={data.Email} itype="text"  name="Email"  place="Enter Email" />
      <Inputtext label="Address" handle={(e)=>handle(e)} nvalue={data.Address} itype="text"  name="Address"  place="Enter Address" />
      <button className="btn btn-primary">submit</button>
      
      </form>
    
    </div>
  )
}
