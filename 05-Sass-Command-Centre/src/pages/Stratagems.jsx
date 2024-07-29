import { useLoaderData } from "react-router-dom";

import StratagemsComponent from "../components/StratagemsComp";

function StratagemsPage() {
    const stratagems = useLoaderData();

    return (
        <StratagemsComponent stratagems={stratagems}/>
    )
};
export default StratagemsPage;

export async function loader() {
    const nonCappedStratagemsUrl = "https://api-hellhub-collective.koyeb.app/api/stratagems?start=0&limit=100";

    const res = await fetch(nonCappedStratagemsUrl);
    const resData = await res.json();
    console.log("Stratagems resData.data= ", resData.data);
    return resData.data;
};