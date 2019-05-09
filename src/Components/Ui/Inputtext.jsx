import React from 'react'

export default function Inputtext(props) {
  return (
    <div>
        <label>{props.label}</label>
      <input  onChange={(e)=>props.handle(e)} value={props.nvalue} type={props.itype} className="form-control" id={props.name} placeholder={props.place} /> 
    </div>
  )
}
