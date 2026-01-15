import Image from 'next/image';
import React from 'react';

const loading = () => {
  return (
    <div className='fixed top-0 left-0 w-screen flex items-center justify-center h-screen'>
      <Image src={'/Images/loading.gif'} width={100} height={100} alt='loading..'/>
    </div>
  );
};

export default loading;