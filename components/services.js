import Image from 'next/image';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import { easeOut, motion as m } from 'framer-motion';

function Services() {
  return (
    <div
      className="lg:flex gap-10 md:px-20 lg:px-40 py-5 lg:py-40 md:flex">
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
        <Image className='mx-auto' src={design} width={100} height={100} />
        <h3 className='text-lg font-medium pt-8 pb-2'>Web Development</h3>
        <p className='py-2'>
          Creating elegant designs suited for your needs following core design theory.
        </p>
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
        <Image className='mx-auto' src={code} width={100} height={100} />
        <h3 className='text-lg font-medium pt-8 pb-2'>Branding</h3>
        <p className='py-2'>
          Creating elegant designs suited for your needs following core design theory.
        </p>
      </div>
      <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1'>
        <Image className='mx-auto' src={consulting} width={100} height={100} />
        <h3 className='text-lg font-medium pt-8 pb-2'>Search Engine Optimization</h3>
        <p className='py-2'>
          Creating elegant designs suited for your needs following core design theory.
        </p>
      </div>
    </div>
  );

}

export default Services;
