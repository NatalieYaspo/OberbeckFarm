import NatalieYaspo from '../images/BoardMembers/NatalieYaspo.jpg'

export default function Board() {
  return (
    <div>
      {/* <section className="py-5 text-center container"> */}
        <div className="row py-lg-5 py-5 text-center container">
          <div className="col-lg-8 col-md-8 mx-auto">
            <h1 className="fw-light">Meet Our Board Members</h1>
            {/* <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p> */}
            <p>
              <a href="mailto:oberbeckfarmneighbors@gmail.com" className="btn btn-primary my-2">Contact the Board</a>
              {/* <a href="#" className="btn btn-secondary my-2">Secondary action</a> */}
            </p>
          </div>
        </div>
      {/* </section> */}

      <div className="album py-1">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={NatalieYaspo} role="img" preserveAspectRatio="xMidYMid slice" focusable="false" />
                <div className="card-body">
                  <h4>President</h4>
                  <br></br>
                  <p className="card-text">Natalie Yaspo</p>
                  {/* <div className="d-flex justify-content-between align-items-center"> */}
                  {/* <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                  <h4>Vice President</h4>
                  <p className="card-text"><small>& Social Committee Chair </small><br></br>Lidsay Paquette</p>
                  {/* <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                  <h4>Treasurer</h4>
                  <br></br>
                  <p className="card-text">Jean Kochick</p>
                  {/* <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                  <h4>Secretary</h4>
                  <br></br>
                  <p className="card-text">Heather Bailey</p>
                  {/* <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="row py-5">
            <div className="col">
              <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                  <h4>Front Entrance Committee Leads</h4>
                  <p className="card-text">Kathy Baron & Dotty Hedberg</p>
                  {/* <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}