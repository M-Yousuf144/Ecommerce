import {useState, useEffect, useRef} from "react";
import React from "react";

function Test() {
  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= urls.length) {
      setLoading(false);
    }
  }
  return <React.Fragment>
    <div style={{display: loading ? "block" : "none"}}>
       Loading images,
    </div>
    <div style={{display: loading ? "none" : "block"}}>
      {urls.map(url => 
        <img 
          key={url}
          src={url}
          onLoad={imageLoaded}/>)}
    </div>
  </React.Fragment>;
}

export default Test;