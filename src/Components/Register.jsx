import React,{useState,useEffect} from 'react'
import Inputtext from './Ui/Inputtext';

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
