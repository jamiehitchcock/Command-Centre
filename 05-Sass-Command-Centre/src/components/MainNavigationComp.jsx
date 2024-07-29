import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";

import {BiMenuAltRight} from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from './MainNavigation.module.scss';

const MainNavigation = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 992 && menuOpen){
            setMenuOpen(false);
        }
    },[size.width,menuOpen]);

    function menuToggleHandler(){
        setMenuOpen((p) => !p);
    }

    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <h2 className={classes.header__content__logo}>Command Centre</h2>
                <nav className={`${classes.header__content__nav} ${menuOpen && size.width < 992 ? classes.isMenu: ""}`}>
                    <ul className={classes.list}>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? classes.activeNav : '')} onClick={menuToggleHandler}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/campaigns" className={({ isActive }) => (isActive ? classes.activeNav : '')} onClick={menuToggleHandler}>Campaigns</NavLink>
                        </li>
                        {/* <li>
                            <Link to="/galaxy-map" className={({ isActive }) => (isActive ? classes.activeNav : '')} onClick={menuToggleHandler}>Galaxy Map</Link>
                        </li> */}
                        <li>
                            <NavLink to="/reports" className={({ isActive }) => (isActive ? classes.activeNav : '')} onClick={menuToggleHandler}>Reports</NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics" className={({ isActive }) => (isActive ? classes.activeNav : '')} onClick={menuToggleHandler}>Statistics</NavLink>
                        </li>
                        <li>
                            <NavLink to="/stratagems" className={({ isActive }) => (isActive ? classes.activeNav : '')} onClick={menuToggleHandler}>Stratagems</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className={classes.header__content__toggle}>
                    {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler}/> : <AiOutlineClose onClick={menuToggleHandler}/>}
                    
                </div>
            </div>
        </header>
    )
};
export default MainNavigation;