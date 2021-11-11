import { Link } from "react-router-dom"

const NavList = () => (
        <ul>
                <li>
                        <Link to="/">About Us</Link>
                </li>
                {/* <li>
                        <Link to='/past-project'>Past Project</Link>
                </li> */}
                <li>
                        <Link to='/current-project'>Current Project</Link>
                </li>
                <li>
                        <Link to='/supportus'>Support Us</Link>
                </li>
                <li>
                        <Link to="/contact">Contact</Link>
                </li>
        </ul>
)

export default NavList;