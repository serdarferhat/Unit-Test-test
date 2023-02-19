import React, { useEffect, useState } from "react";
import urls from "../urls";
import axios from "axios";

const Cesit = () => {
  const [cesits, setCesits] = useState([]);
  const [shop, setShop] = useState([]);
  console.log(shop);
  useEffect(() => {
    axios
      .get(urls.cesit)
      .then((res) => setCesits(res.data))
      .catch((err) => console.log(err));
  }, []);
 
  const handleReset =(param)=>{
    const reset = shop.filter((item)=>item.name!==param.name);
    setShop(reset)
  }

  const adet = (cesit) => {
    const miktar = shop.filter((item) => item.name === cesit.name);
    return miktar.length;
  };
  return (
    <div className="container mt-3 mb-2">
      <h2>Çeşitler Tanesi 2 $</h2>
      <h3>Ücret Toplam:  {shop.length * 2}  $</h3>
      <div className="container d-flex justify-content-center mt-5 gap-5">
        {cesits.map((cesit) => {

     const miktar = adet(cesit)
          return (
            <div
              key={cesit.name}
              className="d-flex flex-column"
              style={{ width: "150px" }}
            >
              <img src={cesit.imagePath} className="w-100" alt="" />
              <p>{cesit.name}</p>
              <div className="d-flex gap-2">
                <button 
                className="btn btn-sm btn-danger"
                onClick={()=>handleReset(cesit)}>
                  Sıfırla
                </button>
                <span className="lead">{miktar}</span>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => setShop([...shop, cesit])}
                >
                  Ekle
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cesit;
