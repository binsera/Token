import React,{useState,useEffect} from 'react'
import Inputtext from './Ui/Inputtext';
import Axios from 'axios';

export default function Fileupload() {

    const [filepath,setFilepath]=useState({

    })

    const [image,setImage]=useState("")

    function Submit(e){
        e.preventDefault()
        const formdata = new FormData()
        formdata.append("file",filepath)
        Axios.post("http://localhost:61425/api/Image",formdata)
        .then(res=>{
            console.log(res.data)

         const imageurl =    changeImagePath(res.data["path"])
         setImage(imageurl)



        }).catch(err=>console.error(err))

        

    }

    function changeImagePath(imagename){

        return "http://localhost:61425/Images/"+imagename
        }




    function handle(e){
        console.log(e.target.files[0])
        setFilepath(e.target.files[0])


    }

  return (
    <div>
      <form onSubmit={(e)=>Submit(e)}>

      <Inputtext  label="file upload" itype="file" handle={(e)=>handle(e)}  name="file"   />
      <button className="btn btn-success">Upload</button>
      </form>
      <div className="container">
       <img src= {image} width="200" height="200"/>
      </div>
    </div>

  )
}
