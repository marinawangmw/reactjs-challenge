import React from 'react';
import './ModalDetailData.css'

const ModalDetailData = ({ children, ...otherProp }) => {
    console.log(otherProp)
    return (
        <div>
            <div className="modalDetailData">
                <p className="modalDetailData__subtitle">
                    {children} &#160;
                </p>
                
                <p className="modalDetailData__detail">     
                    {
                    otherProp.data? 
                        `${otherProp.data}`
                        :'None' 
                    } 
                </p>
          </div>
        </div>
    );
};

export default ModalDetailData;