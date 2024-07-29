import { useState } from "react";
import { ImArrowUp, ImArrowDown, ImArrowLeft, ImArrowRight } from "react-icons/im";

import classes from './StratagemsComp.module.scss';

const StratagemsComponent = ({ stratagems }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredStratagems, setFilteredStratagems] = useState(stratagems);

    function handleSearchInput(input) {
        const term = input.target.value.toLowerCase();
        setSearchTerm(term);
        if (term === '') {
            setFilteredStratagems(stratagems);
        } else {
            const filtered = stratagems.filter((s) => s.name.toLowerCase().includes(term));
            setFilteredStratagems(filtered);
        }
    }

    const convertArrows = (direction) => {
        switch (direction) {
            case 'up':
                return <ImArrowUp />;
            case 'down':
                return <ImArrowDown />;
            case 'left':
                return <ImArrowLeft />;
            case 'right':
                return <ImArrowRight />;
            default:
                return direction;
        }
    };

    return (
        <>
            <section>
                <h1>Stratagems:</h1>
                <input type="search" className={classes.stratagemSearch} placeholder="Search for stratagems" onChange={handleSearchInput} />

                {filteredStratagems.map((stratagems) => (
                    <div key={stratagems.id} className={classes.stratagem}>
                        <h4 className={classes.stratagem__name}>{stratagems.name}</h4>

                        <div className={classes.stratagem__content}>
                            <img className={classes.stratagem__content__image} src={stratagems.imageUrl} alt={stratagems.name} />

                            <div className={classes.stratagem__details}>
                                <p>{stratagems.uses === "" ? "Uses: Unlimited." : `Uses: ${stratagems.uses}.`} </p>
                                <p>{stratagems.cooldown === null ? "Cooldown: N/A" : `Cooldown: ${stratagems.cooldown} seconds.`}</p>
                            </div>
                        </div>

                        <p>Input Code: </p>
                        <p>{stratagems.keys.map((key, index) => <span className={classes.arrow} key={index}>{convertArrows(key)}</span>)}</p>
                    </div>
                ))}
            </section>
        </>
    )
};
export default StratagemsComponent;