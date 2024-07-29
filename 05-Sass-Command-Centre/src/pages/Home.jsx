import { useLoaderData } from "react-router-dom";

import AssignmentsComponent from "../components/AssignmentsComp";

function HomePage() {
    const assignments = useLoaderData();

    return (
        <AssignmentsComponent assignments={assignments} />
    )
};
export default HomePage;

export async function loader() {
    const assignmentsURL = "https://helldivers-2-dotnet.fly.dev/api/v1/assignments";

    const response = await fetch(assignmentsURL);
    const resData = await response.json();
    console.log("Assignments resData = ", resData);
    return resData;
};