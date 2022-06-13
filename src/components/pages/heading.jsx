import React from 'react'

const Heading = (props) => {
  return (
    <div style={{textAlign:"center", }}>
                                            <h1 className='my-3' style={{fontWeight:"bold", textTransform:"capitalize", fontSize:"2.5rem"}}>{props.name}</h1>
                                        </div>
  )
}

export default Heading