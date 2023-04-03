import { easeOut, motion as m } from 'framer-motion';

function Contactform() {
    return (
        <div className='container my-10 mx-auto pr-5 pt-10 pb-0 lg:px-32 '>
            <h1 className='text-brown-950 text-center justify-between text-[30px] pt-10'>CONTACT US</h1>
            <div className='md:flex gap-20'>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSebCFEMeYM-1ZQrmGHrx2P9adONGfU2OAubgT2BAiQO9UbCNA/viewform?embedded=true" width="500" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                <div className='pt-10'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.752462790181!2d32.56884586472615!3d0.3292035140959746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb7275e1412f%3A0xaed0aa8d7ad15e29!2sMakerere%20University%20Main%20Gate%2C%20Kampala!5e0!3m2!1sen!2sug!4v1678943442712!5m2!1sen!2sug" width="600" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contactform;