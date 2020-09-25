import React from 'react';
import Loading from '../components/Loading';


const WithLoading = ({ children, fetched }) => (
  <div>
    {
      fetched ? children : <Loading />
    }
  </div>
);

export default WithLoading;
