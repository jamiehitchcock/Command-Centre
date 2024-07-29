import { useState } from 'react';

const GalaxyMapComponent = ({ planetsList }) => {

    const [zoomLevel, setZoomLevel] = useState(1); // Initial zoom level (1 = 100%)

    // Function to handle zoom in
    const handleZoomIn = () => {
        setZoomLevel((prevZoom) => prevZoom + 0.1); // Increase zoom by 10%
    };

    // Function to handle zoom out
    const handleZoomOut = () => {
        setZoomLevel((prevZoom) => Math.max(prevZoom - 0.1, 0.1)); // Decrease zoom by 10%, minimum 10%
    };

    // Calculate the centered position based on the center of the map
    const centerX = 0.5; // X-coordinate of the center (0.5 represents 50%)
    const centerY = 0.5; // Y-coordinate of the center (0.5 represents 50%)

    // Save the map center position to a variable
    const mapCentre = {
        x: centerX * 100,
        y: centerY * 100,
    };

    return (
        <>
            <section>
                <h1>Galaxy Map</h1>
                <button onClick={handleZoomIn}>Zoom In</button>
                <button onClick={handleZoomOut}>Zoom Out</button>
                <div className="map-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px', width: '400px', background: 'black', margin: '0 auto', }}>
                    <div className="planet-map" style={{ width: '200px', height: '200px', position: 'relative', transform: `scale(${zoomLevel})` }}>
                        {planetsList.map((planet) => {
                            // Calculate the planet's position relative to the map center
                            const planetX = mapCentre.x + planet.position.x * 100;
                            const planetY = mapCentre.y + planet.position.y * 100;

                            return (
                                <div
                                    key={planet.index}
                                    className="planet"
                                    style={{
                                        left: `${planetX}%`, top: `${planetY}%`, position: 'absolute', transform: 'translate(-50%, -50%)', width: '2px', height: '2px', backgroundColor: 'yellow', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3px',
                                    }}
                                >
                                    {planet.name}
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>
        </>
    );
};

export default GalaxyMapComponent;
