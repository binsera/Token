import React,{useState,useEffect} from 'react'

export default function Login(props) {

    const url ="http://localhost:62405/api/Login"

  const [data,setData]=useState({

       "Username":"",
       Password:"",
  })

 function Submit(e){
   e.preventDefault()
console.log(data)

 }

 function handle(e){
   const newdata={...data}
   newdata[e.target.id] =e.target.value

   setData(newdata)

 }


  return (
    <div>
      <form onSubmit={(e)=>Submit(e)}>
  <div className="form-group">
    <label htmlFor="Username">User Name</label>
    <input onChange={(e)=>handle(e)} value={data.Username} type="text" className="form-control" id="Username"  placeholder="Enter Username"/>
   
  </div>
 
      
  <div className="form-group">
    <label htmlFor="Password">Password</label>
    <input onChange={(e)=>handle(e)} value={data.Password} type="text" className="form-control" id="Password"  placeholder="Enter Password"/>
   
  </div>

  <button className="btn btn-primary">Submit</button>



  </form>
    </div>
  )
}
