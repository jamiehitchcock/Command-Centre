import { useLoaderData } from "react-router-dom";

import GalaxyMapComponent from "../components/GalaxyMapComp";

function GalaxyMap() {
    const planetsList = useLoaderData();

    return (
        <>
            <GalaxyMapComponent planetsList={planetsList} />
        </>
    )
};
export default GalaxyMap;

export async function loader() {
    const planetsListUrl = "https://api.helldivers2.dev/api/v1/planets";

    const response = await fetch(planetsListUrl);
    const resData = await response.json();
    console.log("PlanetsList resData = ", resData);
    return resData;
};