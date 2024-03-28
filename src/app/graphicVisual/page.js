"use client"
import { useEffect, useState } from "react";
import Chart from "chart.js";
import { csv } from "d3-fetch";

function graphicVisual() {
    useEffect(() => {
        // Fetch and parse CSV data
        csv("/data_patient_treatment.csv").then(data => {
            const labels = data.map(d => d.AGE);
            const haemoglobinsData = data.map(d => parseFloat(d.HAEMOGLOBINS));
            const haematocritData = data.map(d => parseFloat(d.HAEMATOCRIT));

            // Chart initialization
            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        data: haemoglobinsData,
                        label: "Haemoglobins",
                        backgroundColor: "#3da3e8",
                    }, {
                        data: haematocritData,
                        label: "Haematocrit",
                        backgroundColor: "#0affce",
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }).catch(error => {
            console.error("Error fetching CSV data:", error);
        });
    }, [])

    return (
        <main>
            <div className="border-0 w-[95%] h-screen flex mx-auto">
                <div className='border-2 bg-white pt-0 rounded-xl w-full h-fit my-auto shadow-xl'>
                    <canvas id='myChart'></canvas>

                    {/* Line chart here */}
                    {/* Bar chart here */}
                    {/* Scatter chart here */}


                </div>
            </div>
        </main>

    )
}

export default graphicVisual;