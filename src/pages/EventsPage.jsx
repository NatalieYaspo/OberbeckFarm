import NatalieYaspo from '../images/BoardMembers/NatalieYaspo.jpg'
// 2024 Annual Meeting Images
import AM24A from '../images/EventPics/2024_AnnualMtg/IMG_1749.jpg'
import AM24B from '../images/EventPics/2024_AnnualMtg/IMG_1750.jpg'

// 2024 Spring BBQ Images
import SPBBQA from '../images/EventPics/2024_SpringBBQ/IMG_0250.jpg'
// import SPBBQB from '../images/EventPics/2024_SpringBBQ/IMG_0251.jpg'
// import SPBBQC from '../images/EventPics/2024_SpringBBQ/IMG_0252.jpg'
// import SPBBQD from '../images/EventPics/2024_SpringBBQ/IMG_0254.jpg'

// 2024 Fall Chili Cookoff Images
import Kevin from '../images/EventPics/2024_ChiliCookoff/KevinsChili.jpg'


export default function Events() {
  return (
    <div>
      <div id="myCarousel" className="carousel slide p-6 pointer-event" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns={NatalieYaspo} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns={NatalieYaspo} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <svg className="bd-placeholder-img" width="100%" height="100%" xmlns={NatalieYaspo} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container events">


        <div className="row p-5">

          {/* 2024 Annual Meeting */}
          <div className="col-lg-4">
            <img className="rounded-circle" width="140" height="140" src={AM24A} />
            <h2 className="fw-normal">2024 Annual Meeting</h2>
            {/* <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p> */}
            <p><a className="btn btn-secondary" href="#">Pictures »</a></p>
          </div>

          {/* 2024 Spring BBQ */}
          <div className="col-lg-4">
            <img className="rounded-circle" width="140" height="140" src={SPBBQA} />
            <h2 className="fw-normal">2024 Spring BBQ</h2>
            {/* <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p> */}
            <p><a className="btn btn-secondary" href="#">Pictures »</a></p>
          </div>

          {/* 2024 Fall Chilli Cookoff */}
          <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
            <h2 className="fw-normal">Heading</h2>
            {/* <p>And lastly this, the third column of representative placeholder content.</p> */}
            <p><a className="btn btn-secondary" href="#">Pictures »</a></p>
          </div>
        </div>

        <hr className="featurette-divider" />
        {/* 2024 Annual Meeting */}
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">2024 Annual Meeting</h2>
            <p className="lead">We had a wonderful turn out with all of our neighbors.  Annual meetings will be held on Sundays moving forward!</p>
          </div>
          <div className="col-md-5">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
          </div>
        </div>


        <hr className="featurette-divider" />
        {/* 2024 Spring BBQ */}
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">2024 Spring BBQ <span className="text-body-secondary">Mmm Mmm Good...</span></h2>
            <p className="lead">Thank you to the pitmasters for all of their hard work feeding our neighbors!  And thank you to the weather for being absolutely beautiful.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
          </div>
        </div>


        <hr className="featurette-divider" />
        {/* 2024 Fall Chilli Cookoff */}
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">2024 Fall Chili Cookoff <span className="text-body-secondary">- CALLING ALL CHEFS.</span></h2>
            <p className="lead">More information to come.  Check back in August.</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" width="500" height="500" src={Kevin} role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />
          </div>
        </div>
      </div>
    </div>
  );
}