function Footer() {

    return (
        // <div className="conatiner">
        //     <footer className="footer d-flex flex-wrap justify-content-between align-items-center position-absolute bottom-0">
        //         <div className="col-md-4 d-flex align-items-center">
        //             <span className="mb-3 mb-md-0">© 2024 Natalie Yaspo</span>
        //         </div>

        //         <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        //             {/* FACEBOOK Link */}
        //             <li className="ms-3"><a className="text-black" href="https://www.facebook.com/people/Oberbeck-Farm/100064750387312/"><i className="bi bi-facebook" width="24" height="24"></i></a></li>
        //             {/* SEND AN EMAIL Link */}
        //             <li className="ms-3"><a className="text-black" href="mailto:oberbeckfarmneighbors@gmail.com"><i className="bi bi-envelope" width="24" height="24"></i></a></li>
        //         </ul>
        //     </footer>
        // </div>

        <div class="container">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom me-3">
                    <li class="nav-item me-3"><a className="text-secondary" href="https://www.facebook.com/people/Oberbeck-Farm/100064750387312/"><i className="bi bi-facebook" width="24" height="24"></i></a></li>
                    <li class="nav-item"><a className="text-secondary" href="mailto:oberbeckfarmneighbors@gmail.com"><i className="bi bi-envelope" width="24" height="24"></i></a></li>
                </ul>
                <p class="text-center text-body-secondary">© 2024 Château Trâspo</p>
            </footer>
        </div>


    );
}

export default Footer;