export const ReturnBook=() => {
    return (
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="text-center">
                <img src={require('./../../images/Public_images/girl_learn.jpeg')}
                    width='151'
                    height='233'
                    alt='Carousel Item'
                />
                <h6 className='mt-2'>Courses</h6>
                <p>Luv2Code</p>
                <a className='btn main-color text-white' href='#'>Subscribe</a>
            </div>
        </div>
    </div>
    );
}