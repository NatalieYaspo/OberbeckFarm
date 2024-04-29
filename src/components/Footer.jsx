function Footer() {

    return (

        <div class="container">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom me-3">
                    {/* FACEBOOK Link */}
                    <li class="nav-item me-3"><a className="text-secondary" href="https://www.facebook.com/people/Oberbeck-Farm/100064750387312/"><i className="bi bi-facebook" width="24" height="24"></i></a></li>
                    {/* SEND AN EMAIL Link */}
                    <li class="nav-item"><a className="text-secondary" href="mailto:oberbeckfarmneighbors@gmail.com"><i className="bi bi-envelope" width="24" height="24"></i></a></li>
                </ul>
                <p class="text-center text-body-secondary">© 2024 Château Trâspo</p>
            </footer>
        </div>

    );
}

export default Footer;