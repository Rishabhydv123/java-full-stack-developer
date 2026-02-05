import axios from 'axios';
import { useState } from 'react';

export const AxiosData = ({ url }) => {
  const [axiosData, setAxiosData] = useState([]);

  const getApi = async () => {
    const res = await axios.get(url);
    const resData = await res.data;
    setAxiosData(resData);
  };

  console.log('🚀 ~ axiosData:', axiosData);

  return (
    <>
      <button onClick={getApi}>click</button>
 
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '4em',
        }}
      >
        {axiosData.map((el) => {
          return (
            <div key={el.id}>
              <h2>{el.id}</h2>
              <img width="150" src={el.image} alt={el.category} />
              <h3>{el.title}</h3>
              <h4>{el.category}</h4>
              <h4>{el.description}</h4>
              {/* <h4>{}</h4> */}
            </div>
          );
        })}
      </div>
    </>
  );
};
