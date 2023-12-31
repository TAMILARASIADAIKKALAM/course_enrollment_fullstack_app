export const Heros = () => {
    return (
        <div>
            <div className='d-none d-lg-block'>
                <div className='row g-0 mt-5'>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-left'></div>
                    </div>
                    <div className='col-4 col-md-4 container d-flex justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>What Course you are started?</h1>
                            <p className='lead'>
                                The Infinity team would love to know what course you are doing.
                                Whether it is to learn a new skill or grow within one,
                                we will be able to provide the top content for you!
                            </p>
                            <a className='btn main-color btn-lg text-white' href='#'>Sign up</a>
                            
                        </div>
                    </div>
                </div>
                <div className='row g-0'>
                    <div className='col-4 col-md-4 container d-flex 
                        justify-content-center align-items-center'>
                        <div className='ml-2'>
                            <h1>Our collection is always changing!</h1>
                            <p className='lead'>
                                Try to check in daily as our collection is always changing! 
                                We work nonstop to provide the most on demanded courses possible 
                                for our Infinity students! We are diligent about our course selection 
                                and our courses are always going to be our 
                                top priority.
                            </p>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-6'>
                        <div className='col-image-right'></div>
                    </div>
                </div>
            </div>

            {/* Mobile Heros */}
            <div className='d-lg-none'>
                <div className='container'>
                    <div className='m-2'>
                        <div className='col-image-left'></div>
                        <div className='mt-2'>
                        <h1>What Course you are started?</h1>
                            <p className='lead'>
                                The Infinity team would love to know what course you are doing.
                                Whether it is to learn a new skill or grow within one,
                                we will be able to provide the top content for you!
                            </p>
                            <a className='btn main-color btn-lg text-white' href='#'>Sign up</a>
                        
                        </div>
                    </div>
                    <div className='m-2'>
                    <div className='col-lg-10 offset-lg-3 shadow-lg col-image-right'></div>
                        <div className='mt-2'>
                        <h1>Our collection is always changing!</h1>
                            <p className='lead'>
                                Try to check in daily as our collection is always changing! 
                                We work nonstop to provide the most on demanded courses possible 
                                for our Infinity students! We are diligent about our course selection 
                                and our courses are always going to be our 
                                top priority.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}