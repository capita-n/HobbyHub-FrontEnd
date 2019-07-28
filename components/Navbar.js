import Link from "next/link"
const Navbar = ()=> {
    return(
        <div>
           <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
                <div className="container">
                    <a className="navbar-brand" href="/">HobbyHub</a>
                    <div className="collapes navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link href="/login"><a className="nav-link">Login</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/register"><a className="nav-link">Register</a></Link>
                            </li>
                        </ul>
                    </div>
                </div>
           </nav>
        </div>
    )
}

export default Navbar;