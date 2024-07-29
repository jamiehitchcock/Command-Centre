import { useLoaderData } from "react-router-dom";

import ReportsComponent from "../components/ReportsComp";

function ReportsPage() {
    const reports = useLoaderData();

    return (
        <ReportsComponent reports={reports} />
    )
};
export default ReportsPage;

export async function loader() {
    const reportsUrl = "https://api.helldivers2.dev/api/v1/dispatches";

    const response = await fetch(reportsUrl);
    const resData = await response.json();
    console.log("Reports resData = ", resData);
    return resData;
};