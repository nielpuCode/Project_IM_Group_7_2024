"use client";
import { useEffect, useState } from "react";
import GraphicVisual from "../graphicVisual/page";

function ResultPatient() {
    // Below this is dummy data
    const personalInfo = {
        fullName: "John Doe",
        gender: "Male",
        age: 30,
        mothersName: "Jane Doe"
    };

    const [prediction, setPrediction] = useState(null); // State to hold the predicted output

    // Function to fetch prediction data from the server
    useEffect(() => {
        // Example: Fetch prediction data from an API endpoint
        // fetch("/prediction_endpoint")
        //     .then(response => response.json())
        //     .then(data => setPrediction(data))
        //     .catch(error => console.error("Error fetching prediction data:", error));

        // For demonstration purpose, setting a dummy prediction
        const dummyPrediction = {
            hospitalized: true,
            diagnosis: "Genitourinary diseases",
            confidence: 0.85
        };
        setPrediction(dummyPrediction);
    }, []);
    // End of dummy data

    
    
    return (
        <main className="bg-blue-800 min-h-screen w-full cursor-default pt-16 text-white">

            <h1 className="text-center text-6xl font-extrabold">Result Patient</h1>

            <div className="border-0 flex flex-row justify-center text-center w-full h-1/3 px-5 gap-5 mt-14">
                {/* Personal Information */}
                <div className="flex flex-col rounded-lg p-3 shadow-xl my-3 border-0 bg-gradient-to-r from-darkBlue to-brightBlue h-full w-fit text-left gap-2 text-2xl">
                    <p><strong>Full Name:</strong> {personalInfo.fullName}</p> 
                    <p><strong>Gender:</strong> {personalInfo.gender}</p>
                    <p><strong>Age:</strong> {personalInfo.age}</p>
                    <p><strong>Biological Mother's Name:</strong> {personalInfo.mothersName}</p>
                </div>

                {/* Predicted Output */}
                <div className="bg-gradient-to-l from-darkBlue to-brightBlue flex flex-col items-center w-fit min-h-full rounded-lg p-3 shadow-xl my-3 border-0 text-left text-2xl">
                {prediction && (
                    <div className="border-0 flex flex-col items-start gap-y-5 w-full h-full text-left">
                        <p className="text-green-400 font-extrabold"><strong class="text-white">Hospitalization:</strong> {prediction.hospitalized ? "Yes" : "No"}</p>
                        <p className="text-red-400 font-extrabold"><strong class="text-white">Diagnosis:</strong> {prediction.diagnosis}</p>
                        <p className="font-extrabold"><strong class="text-white">Confidence:</strong> {Math.round(prediction.confidence * 100)}%</p>
                    </div>
                )}
                </div>
            </div>

            <GraphicVisual />



        </main>
    );
}

export default ResultPatient;
