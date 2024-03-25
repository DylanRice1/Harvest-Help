import { Link } from "react-router-dom";
import { titleText, navText } from '../styling/navStyling';

function Navigation() {
    return (
        <nav className="flex items-center justify-between px-4 py-3 bg-green-950">
            <div className="md:flex py-4 md:px-10 px-7">
                <div className="cursor-pointer flex items-center" style={titleText}>
                    <span className="mr-1 pt-2">Harvest&Help</span>
                </div>
            </div>
            <ul className="flex justify-end md:flex-1">
                <li className="mr-8">
                    <Link to="/" style={navText} className="transition duration-500 hover:bg-green-700 hover:border border-white px-3 py-1 rounded-md">Home</Link>
                </li>
                <li className="mr-8">
                    <Link to="/explore" style={navText} className="transition duration-500 hover:bg-green-700 hover:border border-white px-3 py-1 rounded-md">Explore Projects</Link>
                </li>
                <li className="mr-8">
                    <Link to="/newpost" style={navText} className="transition duration-500 hover:bg-green-700 hover:border border-white px-3 py-1 rounded-md">New Post</Link>
                </li>
                <li className="mr-8">
                    <Link to="/profile" style={navText} className="transition duration-500 hover:bg-green-700 hover:border border-white px-3 py-1 rounded-md">Profile</Link>
                </li>
                <li className="mr-8">
                    <Link to="/login" style={navText} className="transition duration-500 hover:bg-green-700 hover:border border-white px-3 py-1 rounded-md">Login</Link>
                </li>
                <li className="mr-8">
                    <Link to="/register" style={navText} className="transition duration-500 hover:bg-green-700 hover:border border-white px-3 py-1 rounded-md">Register</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;