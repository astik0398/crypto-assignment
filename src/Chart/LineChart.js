import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto';
import { useParams } from 'react-router-dom';

const LineChart = () => {
    const [prices, setPrices] = useState([]);
    const [date, setDate] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=INR&days=10&interval=daily`);
                const data = await response.json();
                // Extracting prices and dates from the data
                const pricesData = data.prices.map(item => item[1]);
                const dates = data.prices.map(item => new Date(item[0]).toLocaleDateString());
                // Update state
                setPrices(pricesData);
                setDate(dates)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        
        fetchData();
    }, []);

    const data = {
        labels: date, // Assuming one price per day
        datasets: [{
            label: 'Price (INR)',
            data: prices,
            fill: false,
            borderColor: 'green',
            tension: 0.1
        }]
    };

  return (
    <div style={{width:'90%', margin:'auto'}}>
        <Line data={data}
        legendToggle/>

    </div>
  )
}

export default LineChart