import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigationComp";
import classes from "../components/Root.module.scss";

function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main className={classes.container}>
                <Outlet />
            </main>
        </>
    )
};
export default RootLayout