import React from 'react'

const Heading = (props) => {
  return (
    <div style={{textAlign:"center",paddingTop:"0%"}}>
                                            <h1 className='my-3' style={{fontWeight:"bold", textTransform:"capitalize", fontSize:"2.0rem"}}>{props.name}</h1>
                                        </div>
  )
}

export default Heading