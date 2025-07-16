import React from 'react';
import image1 from '../../../assets/trusted images/trusted_1.png';
import image2 from '../../../assets/trusted images/trusted_2.png';
import image3 from '../../../assets/trusted images/trusted_3.png';
import image4 from '../../../assets/trusted images/trusted_4.png';

const TrustedSection:React.FC = () => {
  return (
    <div className='max-w-6xl m-auto mb-4 text-center'>
        <h1 className='text-[12px] text-smallText font-medium uppercase'>
            Trusted by forward thinking teams
        </h1>
        <div className='flex flex-col items-center justify-around mt-4 md:flex-row'>
            <img src={image1} alt="Company 1" className='h-32' />
            <img src={image2} alt="Company 2" className='h-32' />
            <img src={image3} alt="Company 3" className='h-32' />
            <img src={image4} alt="Company 4" className='h-32' />
        </div>
    </div>
  )
}

export default TrustedSection