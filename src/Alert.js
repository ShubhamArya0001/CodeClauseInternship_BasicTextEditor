import React from 'react'

export default function Alert(props) {
 const fcap = (text) =>{
    const lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
 }

  return (

      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show my-3`} role="alert">
      <strong>{fcap(props.alert.type)}</strong>: {props.alert.msg}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div> 
    
  )
}
