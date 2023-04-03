
function Aboutus() {
    return (
        <div className='sm:grid sm:grid-cols-2 lg:py-40 lg:mb-0 px-4 gap-10 sm:mb-5 '>

            <div className='px-0 pt-4 content-center '>
                <img
                    alt="gallery"
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="https://thumbs.dreamstime.com/b/web-design-software-media-www-website-design-responsive-web-80648434.jpg" />
            </div>

            <div className='px-5 sm:py-14 pb-0 sm:mb-10 ' >
                <h1 className='m-auto text-[30px] text-brown-950 text-center justify-between' >ABOUT US</h1>
                <h3
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className='sm:py-3 content-center whitespace-normal' >
                    <p className='pb-3 text-center'>Web guy is a  new development and surprisingly it hasn't yet made a year since
                        it was established in 2023.</p>
                    <p className='pb-3 text-center'>However with a team of experienced web developers,with experience of over 6 years we truly meet the clients' needs.
                        The purpose of this creation is to help struggling people,customers,business personnel,celebrities find a credible web developer
                        without falling trap to the many mediocre.</p>
                    <p className=" mb-0 text-center">
                        our team is filled with top level web developers,individually vetted to the webguy standard. to make amazing websites for it
                        clients.
                    </p>

                </h3>
            </div>
        </div>

    );

}

export default Aboutus;