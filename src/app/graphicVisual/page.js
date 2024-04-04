"use client"
import { useEffect } from "react";
import Chart from "chart.js";

function GraphicVisual() {
    useEffect(() => {
        // Dummy data for charts
        const generateHospitalizationData = () => {
            const data = [];
            for (let i = 0; i < 100; i++) {
                // Generate random values between 0 and 1 representing whether the patient is hospitalized (1) or not (0)
                data.push(Math.random() < 0.5 ? 1 : 0);
            }
            return data;
        };

        const lineChartData = {
            labels: Array.from({ length: 100 }, (_, i) => i + 1),
            datasets: [{
                label: 'Hospitalized',
                data: generateHospitalizationData(),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        };

        const barChartData = {
            labels: ["Department A", "Department B", "Department C", "Department D", "Department E", "Department F"],
            datasets: [{
                label: 'Hospitalized Patients',
                data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100) + 1),
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        };

        const scatterChartData = {
            datasets: [{
                label: 'Patient Vital Signs',
                data: Array.from({ length: 100 }, () => ({
                    x: Math.floor(Math.random() * 100) + 1,
                    y: Math.floor(Math.random() * 100) + 1
                }))
            }]
        };

        // Line chart
        new Chart(document.getElementById('lineChart'), {
            type: 'line',
            data: lineChartData,
        });

        // Bar chart
        new Chart(document.getElementById('barChart'), {
            type: 'bar',
            data: barChartData,
            options: {
                indexAxis: 'y',
            }
        });

        // Scatter chart
        new Chart(document.getElementById('scatterChart'), {
            type: 'scatter',
            data: scatterChartData,
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    },
                    y: {
                        type: 'linear',
                        position: 'left'
                    }
                }
            }
        });
    }, []);

    return (
        <main>
            <div className="border-0 w-[95%] h-screen flex flex-row flex-wrap items-center justify-center gap-3 mx-auto">
                <div className='border-2 bg-white pt-0 rounded-xl w-[40%] h-fit my-auto shadow-xl'>
                    <canvas id='lineChart'></canvas>
                </div>
                <div className='border-2 bg-white pt-0 rounded-xl w-[40%] h-fit my-auto shadow-xl'>
                    <canvas id='barChart'></canvas>
                </div>
                <div className='border-2 bg-white pt-0 rounded-xl w-[40%] h-fit my-auto shadow-xl'>
                    <canvas id='scatterChart'></canvas>                   
                </div>
            </div>
        </main>
    );
}

export default GraphicVisual;
