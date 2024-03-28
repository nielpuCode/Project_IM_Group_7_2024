"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import resultPatient from './resultPatient/page';

function Home() {
    const router = useRouter()
    const [personalInfo, setPersonalInfo] = useState({
        fullName: '',
        gender: '',
        age: '',
        mothersName: ''
    });

    const [healthStatus, setHealthStatus] = useState({
        haematocrit: '',
        haemoglobins: '',
        erythrocyte: '',
        leucocyte: '',
        thrombocyte: '',
        mch: '',
        mchc: '',
        mcv: ''
    });

    const handlePersonalInfoChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleHealthStatusChange = (e) => {
        const { name, value } = e.target;
        setHealthStatus(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/resultPatient");
    };
    
    const tryMove = (e) => {
        router.push("/resultPatient");
    }

    return (
        <main className="bg-mediumBlue min-h-screen w-full cursor-default">
            {/* <button onClick={tryMove} className="bg-darkBlue hover:bg-darkBlue/50 text-white px-4 py-2 rounded-xl block mx-auto font-extrabold">MOVE</button> */}
            <div className="flex flex-col mx-auto p-4">
                <h1 className="text-4xl font-extrabold text-center text-white mb-4">Medical Information Form</h1>
                <form onSubmit={handleSubmit} className="bg-brightBlue/40 flex flex-col shadow-md rounded-xl pt-6 pb-8 mb-4 flex-wrap">
                    <div className='border-0 w-full flex flex-row items-center justify-center gap-2 md:gap-4 flex-wrap'>
                        <div className="mb-6 flex flex-col border-0 text-center w-2/5 px-5">
                            <h2 className="text-3xl font-extrabold mb-2 text-white">Personal Information</h2>
                            <input className="rounded-lg p-3 shadow-xl my-3 border-0 border-gray-400 w-full" type="text" name="fullName" placeholder="Full Name" value={personalInfo.fullName} onChange={handlePersonalInfoChange} required />
                            <input className="rounded-lg p-3 shadow-xl my-3 border-0 border-gray-400 w-full" type="text" name="gender" placeholder="Gender" value={personalInfo.gender} onChange={handlePersonalInfoChange} required />
                            <input className="rounded-lg p-3 shadow-xl my-3 border-0 border-gray-400 w-full" type="number" name="age" placeholder="Age" value={personalInfo.age} onChange={handlePersonalInfoChange} required />
                            <input className="rounded-lg p-3 shadow-xl my-3 border-0 border-gray-400 w-full" type="text" name="mothersName" placeholder="Biological Mother's Name" value={personalInfo.mothersName} onChange={handlePersonalInfoChange} required />
                        </div>

                        <div className="mb-6 flex flex-col border-0 text-center gap-3 w-2/5 px-5">
                            <h2 className="text-3xl font-extrabold mb-2 text-white">Health Status</h2>
                            <input className="rounded-lg p-3 shadow-xl border-0 border-gray-400 w-full" type="number" name="haematocrit" placeholder="Haematocrit" value={healthStatus.haematocrit} onChange={handleHealthStatusChange} required />
                            <input className="rounded-lg p-3 shadow-xl border-0 border-gray-400 w-full" type="number" name="haemoglobins" placeholder="Haemoglobins" value={healthStatus.haemoglobins} onChange={handleHealthStatusChange} required />
                            <input className="rounded-lg p-3 shadow-xl border-0 border-gray-400 w-full" type="number" name="erythrocyte" placeholder="Erythrocyte" value={healthStatus.erythrocyte} onChange={handleHealthStatusChange} required />
                            <input className="rounded-lg p-3 shadow-xl border-0 border-gray-400 w-full" type="number" name="leucocyte" placeholder="Leucocyte" value={healthStatus.leucocyte} onChange={handleHealthStatusChange} required />
                            <input className="rounded-lg p-3 shadow-xl border-0 border-gray-400 w-full" type="number" name="thrombocyte" placeholder="Thrombocyte" value={healthStatus.thrombocyte} onChange={handleHealthStatusChange} required />
                            <input className="rounded-lg p-3 shadow-xl border-0 border-gray-400 w-full" type="number" name="mch" placeholder="MCH" value={healthStatus.mch} onChange={handleHealthStatusChange} required />
                            <input className="rounded-lg p-3 shadow-xl border-0 border-gray-400 w-full" type="number" name="mchc" placeholder="MCHC" value={healthStatus.mchc} onChange={handleHealthStatusChange} required />
                            <input className="rounded-lg p-3 shadow-xl border-0 border-gray-400 w-full" type="number" name="mcv" placeholder="MCV" value={healthStatus.mcv} onChange={handleHealthStatusChange} required />
                        </div>
                    </div>

                    <button onClick={tryMove} className="bg-darkBlue hover:bg-darkBlue/50 text-white px-4 py-2 rounded-xl mt-4 block mx-auto font-extrabold">Submit</button>
                </form>
            </div>
        </main>
    );
}

export default Home;
