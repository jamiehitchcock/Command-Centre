import classes from './ReportsComp.module.scss';

const ReportsComponent = ({ reports }, title) => {

    // Remove <i=3>, <i=1>, and </i> tags from message
    function filterMessage(str) {
        return str.replace(/<i=[13]>|<[/]i=[13]>|<\/i>/g, '');
    }

    // Extract uppercase words and other words
    function extractUppercaseWords(str) {
        const words = str.split(/\s+/);
        const uppercaseWords = [];
        const otherWords = [];

        for (const word of words) {
            if (word === word.toUpperCase()) {
                uppercaseWords.push(word);
            } else {
                otherWords.push(word);
            }
        }

        return {
            uppercase: uppercaseWords.join(' '),
            other: otherWords.join(' ')
        };
    }

    return (
        <>
            <section>
                <h1>Reports From The Ministry Of Truth:</h1>
                {reports.slice(0, 6).map((report) => (
                    <div key={report.id} className={classes.report}>
                        <h2 className={classes.report__header}>{extractUppercaseWords(filterMessage(report.message)).uppercase}</h2>
                        <p className={classes.report__message}>{extractUppercaseWords(filterMessage(report.message)).other}</p>
                        <div className={classes.report__time}>
                            <p>Updated at: </p>
                            <p>{new Date(report.published).toUTCString()}</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default ReportsComponent;
