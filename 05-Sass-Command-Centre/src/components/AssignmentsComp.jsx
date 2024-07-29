import classes from './AssignmentsComp.module.scss';

const AssignmentsComponent = ({ assignments }) => {

    function calculateTimeLeft(expiration){

        const formatTimeUnit = (value, unit) => {
            return value === 1 ? `${value} ${unit}` : `${value} ${unit}s`;
        };

        const now = new Date();
        const endDate = new Date(expiration);
        const timeLeft = endDate - now;

        const remainingDays = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        
        let remainderResult;
        switch (true) {
            case (remainingDays > 0):
                remainderResult = `Expires in: ${formatTimeUnit(remainingDays, 'day')}, ${formatTimeUnit(remainingHours, 'hour')}, ${formatTimeUnit(remainingMinutes, 'minute')}.`;
                break;

            case (remainingDays == 0 && remainingHours > 0):
                remainderResult = `Expires in: ${formatTimeUnit(remainingHours, 'hour')}, ${formatTimeUnit(remainingMinutes, 'minute')}.`;
                break;

            case (remainingDays == 0 && remainingHours == 0 && remainingMinutes > 0):
                remainderResult = `Expires in: ${formatTimeUnit(remainingMinutes, 'minute')}.`;
                break;

            default:
                remainderResult = "Assignment expired.";
        }
        return remainderResult;
        
    }

    return (
        <>
            <section>
                <h1>Assignments:</h1>
                {assignments.length === 0 && <>
                    <h3 className={classes.placeholder}>Awaiting Further Orders From Super Earth Command</h3>
                    <div className={classes.time}>
                        <p>Updated at: </p>
                        <p>{new Date().toUTCString()}</p>
                    </div>
                </>}

                {assignments.length > 0 && assignments.map((assignments) => (
                    <div key={assignments.id}>
                        <h2 className={classes.assignment__header}>{assignments.title}:</h2>
                        <h3 className={classes.assignment__content}>{assignments.briefing}</h3>
                        <p className={classes.assignment__content}>{assignments.description}</p>
                        <p className={classes.assignment__content}>Reward: <span className={classes.reward}>{assignments.reward.amount} Medals.</span></p>
                        <p className={classes.assignment__content}>{calculateTimeLeft(assignments.expiration)}</p>
                        <div className={classes.time}>
                            <p>Updated at: </p>
                            <p>{new Date().toUTCString()}</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
};
export default AssignmentsComponent;