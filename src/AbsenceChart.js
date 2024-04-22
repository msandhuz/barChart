import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './styles.css';  // Import CSS styles

// CustomTooltip component defined directly in the file
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="custom-tooltip">
                <p className="label">{`Name: ${data.name}`}</p>
                <p className="intro">{`Absences: ${data.absences}`}</p>
                <p className="desc">{`Dates: ${data.dates}`}</p>
            </div>
        );
    }
    return null;
};

function AbsenceChart({ data, month }) {
    return (
        <div className="chart-container">
            <h2>{month}</h2>
            <ResponsiveContainer width="200%" height={500}>  
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-75} textAnchor="end" interval={0} height={300} />
                    <YAxis ticks={[1, 2, 3]} type="number" allowDecimals={false} domain={[0, 'dataMax + 0']} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="absences" fill="#8884d8" name="Days Absent" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default AbsenceChart;
