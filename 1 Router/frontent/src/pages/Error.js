import PageContent from "./PageContent";
import {useRouteError} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Error() {
    const error = useRouteError();
    debugger

    let title = 'An error occurred';
    let message = 'Something went wrong';

    if (error.status === 500) {
        message = error.data.message;
    }

    if (error.status === 404) {
        title = 'Not Found';
        message = 'Could not find the page';
    }

    return (
        <>
            <MainNavigation/>
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>
        </>
    )
}

export default Error;