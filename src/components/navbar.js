import { Link } from 'react-router-dom'


export const Navbar = () => {
    const SiteName = "The Button Inc";

    return (
        <div className="navbar">
            <h3>{SiteName}</h3>
            <div className="linkHolder">
                <Link to="/">Home</Link>
                <Link to="/create">New Button</Link>
            </div>
        </div>
    )
};