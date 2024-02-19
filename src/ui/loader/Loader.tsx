import React from 'react';
import stl from './Loader.module.css'

const Loader: React.FC<{ size: number, isActive: boolean }> = ({size, isActive}) => {

    const getBackgroundStyles = () => {
        return isActive ? [stl.background, stl.active].join(" ") : stl.background;
    }

    const getLoaderStyles = () => {
        if (size === 1) {
            return [stl.loader, stl.big].join(" ");
        } else {
            return [stl.loader, stl.small].join(" ");
        }
    }

    return (
        <div className={getBackgroundStyles()}>
            <div className={getLoaderStyles()}/>
        </div>
    );
};

export default Loader;