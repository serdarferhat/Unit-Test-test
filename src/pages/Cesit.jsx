import React, { useEffect, useState } from 'react';
import urls from './urls';
import axios from 'axios';



const Cesit = () => {
const [cesit,setCesit]=useState([]);

  useEffect(() => {
    axios.get(urls.cesit)
    .then((res)=>console.log(res.data))
    .catch()
   
  }, []);

  return (
    <div>
      sa
      </div>
  )
}

export default Cesit