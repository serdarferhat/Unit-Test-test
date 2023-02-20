import axios from 'axios';
import React, { useEffect, useState } from 'react';
import http from '../urls';

const Sos = () => {
  const [sosData, setSosData] = useState([]);
  const [sepet, setSepet] = useState([]);
  console.log(sepet);
  useEffect(() => {
    axios
      .get(http.sos)
      .then((res) => setSosData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleAdd = (e, sos) => {
    if (e.target.checked) {
      setSepet([...sepet, sos]);
    } else {
      const cikart = sepet.filter((item) => item.name !== sos.name);
      setSepet(cikart);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Soslar Tanesi 1 $</h1>
      <h2>Ücret Toplam: {sepet.length * 1} $ </h2>
      <div className="row gap-3">
        {sosData.map((sos) => (
          <div
            key={sos.name}
            className="d-flex flex-column align-items-center gap-3"
            style={{ width: '150px' }}
          >
            <img src={sos.imagePath} className="w-100" alt="sos" title="sos" />
            <label htmlFor={sos.name} className="text-nowrap">
              {sos.name}
            </label>
            <input
              id={sos.name}
              type="checkbox"
              className="form-check-input"
              onChange={(e) => handleAdd(e, sos)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sos;
