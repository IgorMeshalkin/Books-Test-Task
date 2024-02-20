import React from 'react';
import stl from "./CloseButton.module.css";

const CloseButton: React.FC<{ onClick: Function }> = ({onClick}) => {
    return (
        <div className={stl.main} onClick={() => onClick()}>
            <div className={stl.elementContainer}>
                <div className={[stl.element, stl.first].join(" ")}/>
            </div>
            <div className={stl.elementContainer}>
                <div className={[stl.element, stl.second].join(" ")}/>
            </div>
        </div>
    );
};

export default CloseButton;