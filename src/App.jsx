import { useState } from 'react'
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import CollectClinicals from './components/CollectClinicals.jsx';
import AddPatient from './components/AddPatient.jsx';
import AnalyzeData from './components/AnalyzeData.jsx';
import Home from './components/Home.jsx';
import {toast,ToastContainer } from 'react-toastify';

function App() {
  
  return (
    <Router>
     <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/patientDetails/:patientId" element={<CollectClinicals/>}/>
        <Route  path="/addPatient" element={<AddPatient/>}/>
        <Route  path="/analyze/:patientId" element={<AnalyzeData/>}/>
    </Routes>
    </Router>
  );
}

export default App