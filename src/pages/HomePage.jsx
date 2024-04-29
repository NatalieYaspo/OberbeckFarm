// import Image from '../images/NatalieYaspo.jpg' //Image of front entrance sign?

export default function Home() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-4 px-4">
          {/* <img src={Image} className="d-block mx-lg-auto img-fluid shadow p-3 mb-5 bg-white rounded" width={700} height={500} /> */}
        </div>
        <div className="col-lg-8 px-4">
          <h1 className="display-5 fw-bold text-white lh-1 mb-3">Welcome to Oberbeck Farm</h1>
          <p className="lead text-light">SOme information about the neighborhood.
            <br></br>
            <br></br>
            We will figure something out to go here.</p>
        </div>
      </div>
    </div>
  );
}