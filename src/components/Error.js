import React from 'react';
import {useRouteError} from "react-router-dom";

const Error = () => {
  return (
 <div>
    <div>
        <h1>Oops!</h1>
        <h2>Something went wrong.</h2>
    </div>
    <div className="error-logo">
        <img src="https://www.nicepng.com/png/detail/166-1669594_chibi-batman-by-rosielis-on-deviantart-svg-royalty.png"/>
    </div>
    {/* <div>
        {err.status}:{err.statusText}
    </div> */}
  </div>
  )
}

export default Error;