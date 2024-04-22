import React from 'react';
import rawData, { transformData } from './data';
import AbsenceChart from './AbsenceChart';
import './styles.css';  

const App = () => {
    const dataByMonth = transformData(rawData);

    return (
        <div className="App">
            {Object.entries(dataByMonth).map(([month, data]) => (
                <AbsenceChart key={month} data={data} month={month} />
            ))}
        </div>
    );
}

export default App;
