import Nav from './NavTabs';

function Header () {
    return (
        // <header className="d-flex flex-wrap justify-content-center w-100 py-3 mb-4 border-bottom">
        <header>
            {/* <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-1">Oberbeck Farm</span>
            </a> */}
            <Nav />
        </header>
    )
}

export default Header;