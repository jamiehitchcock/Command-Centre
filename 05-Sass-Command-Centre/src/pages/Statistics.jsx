import { useLoaderData } from "react-router-dom";

import StatisticsComponent from "../components/StatsComp";

function StatisticsPage() {
    const statistics = useLoaderData();

    return (
        <StatisticsComponent statistics={statistics}/>
    )
};
export default StatisticsPage;

export async function loader(){

    const statsUrl = "https://helldivers-2-dotnet.fly.dev/api/v1/war";

        const response = await fetch(statsUrl);
        const resData = await response.json();
        console.log("Statistics resData.statistics=", resData.statistics);
        return resData.statistics;
};