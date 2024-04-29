import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top" data-bs-theme="light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><img src="../Logo.png" width="125"/></a>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse position-absolute end-0" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/duesinfo">Dues Info</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/events">Neighborhood Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/boardmembers">Board Members</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Other</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">New Resident Information</a>
                <a className="dropdown-item" href="#">Annual Meeting Minutes</a>
                <a className="dropdown-item" href="#">Directory</a>
                <a className="dropdown-item" href="#">Vendor Recommendations</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>





    // OLD CODE BELOW
    // <ul className="nav nav-pills">

    //   <li className="nav-item">
    //     <Link
    //       to="/aboutme"
    //       // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}
    //     >
    //       About Me
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/portfolio"
    //       // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Portfolio
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/contact"
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Contact
    //     </Link>
    //   </li>
    //   <li className="nav-item">
    //     <Link
    //       to="/resume"
    //       // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
    //     >
    //       Resume
    //     </Link>
    //   </li>
    // </ul>
  );
}

export default NavTabs;