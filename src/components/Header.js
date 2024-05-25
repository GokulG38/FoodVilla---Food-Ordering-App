import logo from "../assets/unnamed.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const { user } = useContext(UserContext);
    const isOnline = useOnline();
    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="flex justify-between items-center bg-white shadow-lg p-4">
            <div className="h-16">
                <img className="h-full" src={logo} alt="logo picture" />
            </div>
            <div className="flex-1">
                <ul className="flex justify-center space-x-6 text-lg font-medium">
                    <li>
                        <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-500 transition-colors">About</Link>
                    </li>
                    <li>
                        <Link to="/contacts" className="hover:text-blue-500 transition-colors">Contacts</Link>
                    </li>
                    <li>
                        <Link to="/instamart" className="hover:text-blue-500 transition-colors">Instamart</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="hover:text-blue-500 transition-colors">Cart - {cartItems.length}</Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center space-x-4">
                <span className="text-xl">{isOnline ? "🟢" : "🔴"}</span>
                <h3 className="text-lg font-semibold">{user.name}</h3>
            </div>
        </div>
    );
}

export default Header;
