import React from 'react'
import "./404.scss"

const PageNF = () => {
  return (
    <div className='boxeda'>
   
   <div class='error'>

  <h1 class='code' style={{color:"rgba(252, 153, 24, 0.811)"}}>404</h1>
  <h2 class='desc'>Ops... There's something wrong.</h2>
<button className='btn btn-solid my-4' onClick={()=>{
  window.location = `${process.env.PUBLIC_URL}/`;
}} style={{boxShadow:"0 5px 0px -2px rgba(252, 153, 24, 0.411)"}} >Go To Home</button>
</div>

    </div>
  )
}

export default PageNF;