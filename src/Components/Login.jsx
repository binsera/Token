import React,{useState,useEffect} from 'react'
import Axios from 'axios';

export default function Login(props) {

    const url ="http://localhost:62405/api/Login"

    const [isSuccess,setSuccess]=useState(false)

    const [isError,setError]=useState(false)

  const [data,setData]=useState({

       "Username":"",
       Password:"",
  })

 function Submit(e){
   e.preventDefault()
console.log(data)
Axios.post(url,data)
.then(res=>{
    console.log(res.data)

    localStorage.setItem('token',res.data['Token'])
    setSuccess(true)

}).catch(err=>{
    setError(true)
})


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

  { isSuccess && <div className="alert alert-success">success</div> }

  {isError && <div className="alert alert-danger">Error please check</div> }

    </div>
  )
}
