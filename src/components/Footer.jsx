function Footer() {

    return (

        <footer className="footer mt-auto py-3 d-flex w-100 flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <span className="mb-3 mb-md-0">© 2024 Natalie Yaspo</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                {/* FACEBOOK Link */}
                <li className="ms-3"><a className="text-black" href="https://www.facebook.com/people/Oberbeck-Farm/100064750387312/"><i className="bi bi-facebook" width="24" height="24"></i></a></li>
                {/* SEND AN EMAIL Link */}
                <li className="ms-3"><a className="text-black" href="mailto:oberbeckfarmneighbors@gmail.com"><i className="bi bi-envelope" width="24" height="24"></i></a></li>
            </ul>
        </footer>

    );
}

export default Footer;