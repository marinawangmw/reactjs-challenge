import React from 'react';
import './ModalDetailData.css'

interface ModalDetailDataProps {
    children: React.ReactNode;
    data?: string | Date;
}

const ModalDetailData: React.FC<ModalDetailDataProps> = ({ children, ...otherProp }) => {
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