
import { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavbarStyle.css';
import { MdShoppingCart } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = ({count}) => {
    const [click, setClick] = useState(false);

    const responsiveHandler = () => {
        return setClick(!click)
    };

    const closeHambager = () => {
          setClick(false)
    };

    return (
        <div className='navbar_container'>

            <NavLink className="navbar_logo" to='/'>
                <img src="https://www.pngmart.com/files/Amazon-Logo-PNG-Photo.png" alt="logo" />
            </NavLink>


            <ul className={click ? " nav_heading active" : "nav_heading"}>
                <li onClick={closeHambager}>
                    <NavLink to='/' >Home</NavLink>
                </li>

                <li onClick={closeHambager}>
                    <NavLink to='/About' >About</NavLink>
                </li>

                <li onClick={closeHambager}>
                    <NavLink to='/products' >Products</NavLink>
                </li>

                <li onClick={closeHambager}>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>

                <li onClick={closeHambager}>
                    <NavLink to='/cart' style={{ position: 'relative' }}>
                        <MdShoppingCart style={{ fontSize: '2.5rem' }} />

                        <span className="cart_count">{count}</span>
                    </NavLink>
                </li>

            </ul>


            <div className="mobile_responsive" onClick={responsiveHandler}>
                {
                    click ? (<FaTimes size={'2rem'}/>) : (<FaBars size={'2rem'} />)
                }
            </div>

        </div>
    )
};

export default Navbar;