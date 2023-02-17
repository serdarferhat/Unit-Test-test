import React, { useState } from 'react'

const Onay = () => {
    const [tikli,setTikli] = useState(false)

  return (
    <form className='container form-check form-switch mt-4 d-flex justify-content-center align-items-center'>
        
            <input className='form-check-input' id="kosul" type="checkbox" onChange={()=>setTikli(!tikli)} />
            <label className='mx-2' htmlFor="kosul">Kosulları anladım ve kabul ediyorum</label>
            <button disabled={!tikli} className='btn btn-sm btn-outline-success mx-2'>
             Siparişi Onayla
                </button>   
            
            
                </form>
  )
}

export default Onay