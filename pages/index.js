import Head from 'next/head'
import Link from 'next/link';
import NavBar from '../components/NavBar';
import Footer from '@/components/footer';
import Aboutus from '@/components/About';
import Services from '@/components/services';
import Clients from '@/components/clients';
import Contactform from './contactform';

import { easeOut, motion as m } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Webguy UG</title>
        <meta name="description" content="Web guy Uganda has acquired a fully hand, selected team of great web developers in Uganda. In fact, according to our research, we consider it to have the best web developers in Uganda.Web guy Uganda vision is Simple “  Help website owners have great websites, created as fast elegant and affordable as possible.”Thank you for taking time to read through. Lets get you the best web development in Uganda." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <div>
          <NavBar />
          <section
            id="home"
            className=" bg-brown-200 pt-20 sm:h-screen ">
            <div className=' lg:flex md:px-8 mx-4 '>
              <div className=' sm:grid sm:grid-rows-1 sm:grid-flow-col gap-x-8' >
                <div className=' mr-10 my-12 xl:m-12'>
                  <m.h2
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className=' lg:pt-20 2xl:px-20 lg:text-6xl pt-10 text-6xl'>Welcome to the Webguy Uganda
                  </m.h2>
                  <m.h1
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className=' 2xl:px-20 lg:text-6xl text-brown-950 lg:pb-6 text-3xl mt-10'>WE ARE SO EXCITED YOU ARE HERE!</m.h1>
                  <m.p
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className=' 2xl:px-20 pt-5'>
                    We help entrepreneurs and influencers to launch beautiful websites + blogs + shops so you can focus more on ruling the world one day at a time!
                  </m.p>
                  <m.button
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='bg-white lg:py-3 lg:px-6 rounded-md 2xl:ml-20 lg:mt-10 mt-10 py-3 px-6 '><Link href="#contactus" >Let's work together</Link></m.button>
                </div>
                <div className=' mt-10 mx-5 2xl:px-20'>
                  <m.p
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='sm:pt-20 lg:mt-20 lg:py-3 lg:p-2 lg:flex px-6 py-3 text-sm'>Specializing in custom websites redesigns and wordpress</m.p>
                  <m.img
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    alt="gallery"
                    class="block  w-full rounded-lg object-cover object-center"
                    src="https://mews.agency/wp-content/uploads/2019/05/web-design-1-1080x675.jpg" />
                </div>
              </div>
            </div>
          </section>
          <div id="about" className="my-12 lg:mb-0 h-screen md:px-20 lg:px-40  ">
            <Aboutus />
          </div>
          <section id="services" className=" bg-brown-200 md:h-screen  ">
            <Services />
          </section>
          <section id="clients" className=" xl:lg:md:sm:h-screen  flex">
            <Clients />
          </section>
          <section id='contactus' className='bg-brown-200'>
            <Contactform />
          </section>
          <section>
            <Footer />
          </section>
        </div>
      </main>
    </>
  )
}
