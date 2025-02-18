import React from 'react';
import DateConverter from './DateConverter';
import ImageBackgroundRemover from './ImageBackgroundRemover';
import EMICalculator from './EMICalculator';
import { Outlet } from 'react-router-dom';
import './SmartTools.css'

const SmartTools = () => {
  return (
    <div>
      <div className="smart-header"></div>
        <div className="smart-tools">
       
         
           <Outlet/>
        </div>
      
    </div>
  );
}

export default SmartTools;
