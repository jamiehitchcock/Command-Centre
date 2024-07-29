import { useState } from "react";

import classes from './PlanetCampaignsComp.module.scss';

const PlanetCampaignsComponent = ({ planetCampaigns }) => {

    // initialise filtered planets to all data
    const [filteredCampaigns, setFilteredCampaigns] = useState(planetCampaigns);
    const [selectedFaction, setSelectedFaction] = useState(null);

    function condenseStat(number) {
        let formattedNum;
        switch (true) {
            case (Math.abs(number) >= 1.0e+12):
                formattedNum = (number / 1.0e+12).toFixed(2) + " Trillion";
                break;

            case (Math.abs(number) >= 1.0e+9):
                formattedNum = (number / 1.0e+9).toFixed(2) + " Billion";
                break;

            case (Math.abs(number) >= 1.0e+6):
                formattedNum = (number / 1.0e+6).toFixed(2) + " Million";
                break;

            default:
                formattedNum = new Intl.NumberFormat('en-us').format(number);
        }
        return formattedNum;
    }

    function handleFilter(faction) {
        setSelectedFaction(faction);
        if (faction === null) {
            // show all campaigns
            setFilteredCampaigns(planetCampaigns);
        } else {
            const filtered = planetCampaigns.filter((campaign) => campaign.planet.currentOwner === faction);
            setFilteredCampaigns(filtered);
        }
    }

    // const biomeImage = `assets/biomes/${planetCampaigns.planet.biome.name.toLowerCase()}.webp`;

    return (
        <>
            <section>
                {planetCampaigns.length === 0 && <>
                    <h3>No currently active campaigns. Await further orders from Super Earth.</h3>
                    <p>Updated at: {new Date().toUTCString()}</p>
                </>}

                {planetCampaigns.length > 0 && <>
                    <h1>Planets In Need Of Liberation:</h1>
                    <div className={classes.campaignFilter}>
                        <p className={classes.campaignFilter__title}>Filter by Faction</p>
                        <div className={classes.campaignFilter__buttons}>
                            <button className={`${classes.campaignFilter__buttons__button} ${selectedFaction === null ? classes.activeButton : ''}`} onClick={() => handleFilter(null)}>All</button>
                            <button className={`${classes.campaignFilter__buttons__button} ${selectedFaction === 'Automaton' ? classes.activeButton : ''}`} onClick={() => handleFilter("Automaton")}>Automatons</button>
                            <button className={`${classes.campaignFilter__buttons__button} ${selectedFaction === 'Terminids' ? classes.activeButton : ''}`} onClick={() => handleFilter("Terminids")}>Terminids</button>
                        </div>
                    </div>

                    {filteredCampaigns.length === 0 ? (
                        <h4>No active planets under {selectedFaction} control.</h4>
                    ) : (
                        filteredCampaigns.map((planetCampaigns) => (
                            <div key={planetCampaigns.id} className={`${classes.campaignPlanet} ${planetCampaigns.planet.currentOwner === 'Automaton' ? classes.automaton : planetCampaigns.planet.currentOwner === 'Terminids' ? classes.terminid : ''}`}>
                                <h4 className={classes.campaignPlanet__name}>{planetCampaigns.planet.name} - {planetCampaigns.planet.sector} Sector</h4>
                                <img className={classes.campaignPlanet__image} src={`./assets/biomes/${planetCampaigns.planet.biome.name.toLowerCase()}.webp`} alt={planetCampaigns.planet.biome.name} />
                                <p className={`${classes.campaignPlanet__faction} ${planetCampaigns.planet.currentOwner === 'Automaton' ? classes.automaton : planetCampaigns.planet.currentOwner === 'Terminids' ? classes.terminid : ''}`}
                                >Faction In Control: {planetCampaigns.planet.currentOwner}</p>
                                <p className={classes.campaignPlanet__playercount}>Helldivers Currently On Planet: {condenseStat(planetCampaigns.planet.statistics.playerCount)}</p>
                                <div className={classes.campaignPlanet__biome}>
                                    <p>Biome: </p>
                                    <p>{planetCampaigns.planet.biome.name} - {planetCampaigns.planet.biome.description}</p>
                                </div>
                                <div className={classes.campaignPlanet__hazards}>
                                    <p>Hazards: </p>
                                    {planetCampaigns.planet.hazards.map((hazard, index) => (<div key={index}>
                                        <p>{hazard.name} - {hazard.description}</p>
                                    </div>))
                                    }
                                </div>
                            </div>
                        ))
                    )}
                </>}
            </section>
        </>
    )

};
export default PlanetCampaignsComponent;