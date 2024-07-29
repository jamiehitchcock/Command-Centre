import classes from './StatsComp.module.scss';

const StatisticsComponent = ({ statistics }) => {

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

    return (
        <>
            <section>
                <h1>Statistics:</h1>
                <div className={classes.statistics}>
                    <div className={classes.statistics__title}>Helldivers Currently Fighting For Democracy:
                        <div className={classes.number}>{condenseStat(statistics.playerCount)}</div>
                    </div>
                    <div className={classes.statistics__title}>Successful Missions:
                        <div className={classes.number}>{condenseStat(statistics.missionsWon)}</div>
                    </div>
                    <div className={classes.statistics__title}>Failed Missions:
                        <div className={classes.number}>{condenseStat(statistics.missionsLost)}</div>
                    </div>
                    <div className={classes.statistics__title}>Mission Success Rate:
                        <div className={classes.number}>{statistics.missionSuccessRate}%</div>
                    </div>
                    <div className={classes.statistics__title}>Bullets Fired:
                        <div className={classes.number}>{condenseStat(statistics.bulletsFired)}</div>
                    </div>
                    <div className={classes.statistics__title}>Helldivers Lost:
                        <div className={classes.number}>{condenseStat(statistics.deaths)}</div>
                    </div>
                    <div className={classes.statistics__title}>Automatons Dissasembled:
                        <div className={classes.number}>{condenseStat(statistics.automatonKills)}</div>
                    </div>
                    <div >Termanids Splatted:
                        <div className={classes.number}>{condenseStat(statistics.terminidKills)}</div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default StatisticsComponent;