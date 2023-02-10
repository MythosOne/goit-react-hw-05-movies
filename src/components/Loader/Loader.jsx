import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
      }}
    >
      <TailSpin color="#3d6fcce2" radius="9" height={50} width={50} />
    </div>
  );
};

export default Loader;
