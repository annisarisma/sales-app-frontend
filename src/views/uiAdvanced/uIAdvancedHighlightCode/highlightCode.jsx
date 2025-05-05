import React from 'react'

import PrismCode from '@common//Prism'

const AllCode = `
import Button from '@src/components/CustomComponents/Buttons/Button';
import React from 'react';

const BaseButtons = () => {
    const baseButtons = [
        { text: 'Primary', color: 'btn-primary' },
        { text: 'Purple', color: 'btn-purple' },
        { text: 'Green', color: 'btn-green' },
        { text: 'Red', color: 'btn-red' },
        { text: 'Yellow', color: 'btn-yellow' },
        { text: 'Sky', color: 'btn-sky' },
        { text: 'Pink', color: 'btn-pink' },
        { text: 'Indigo', color: 'btn-indigo' },
        { text: 'Orange', color: 'btn-orange' },
        { text: 'Dark', color: 'btn-gray' },
        { text: 'Light', color: 'bg-gray-200 text-gray-800 border-gray-200 hover:bg-gray-300 hover:text-gray-800 hover:border-gray-300 focus:bg-gray-300 
         focus:text-gray-800 focus:border-gray-300' },
    ];

    return (
        <div className="col-span-12 card">
            <div className="card-header">
                <h6 className="card-title">Base Buttons</h6>
            </div>
            <div className="card-body">
                <div className="flex flex-wrap gap-4">
                    {baseButtons.map((button, index) => (
                        <Button
                            key={index}
                            custom="btn"
                            text={button.text}
                            color={button.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BaseButtons;
`

const HighlightCode = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-x-space">
        <div className="col-span-12 card">
          <div className="card-header">
            <h6 className="card-title">React Highlight Code</h6>
          </div>
          <div className="card-body">
            <PrismCode language="javascript" code={AllCode} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default HighlightCode
