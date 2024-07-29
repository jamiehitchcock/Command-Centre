import { useLoaderData } from "react-router-dom";

import PlanetCampaignsComponent from "../components/PlanetCampaignsComp";

function PlanetCampaignsPage() {
    const planetCampaigns = useLoaderData();

    return (
        <PlanetCampaignsComponent planetCampaigns={planetCampaigns} />
    )
};
export default PlanetCampaignsPage;

export async function loader() {
    const planetCampaignsUrl = "https://helldivers-2-dotnet.fly.dev/api/v1/campaigns";
    const response = await fetch(planetCampaignsUrl);
    const resData = await response.json();
    console.log("Planet Campaigns resData=", resData);
    return resData;
};