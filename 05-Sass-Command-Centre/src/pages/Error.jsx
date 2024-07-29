import MainNavigation from "../components/MainNavigationComp";
import classes from "../components/Error.module.scss";
import { Link } from 'react-router-dom';

function ErrorPage() {

    return (
        <>
            <MainNavigation />
            <main className={classes.container}>
                <h2 className={classes.error__header}>Error - Lost Connection With Super Destroyer !</h2>
                <p className={classes.error__content}>
                    <Link href="/">
                        <button className={classes.error__content__button}>Return to assignments</button>
                    </Link>
                </p>
            </main>
        </>

    )
};
export default ErrorPage;