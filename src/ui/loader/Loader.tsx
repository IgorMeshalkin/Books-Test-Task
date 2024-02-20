import React, {useEffect, useState} from 'react';
import stl from './Loader.module.css'

const Loader: React.FC<{ size: number, isActive: boolean }> = ({size, isActive}) => {
    // 'isActive' state was changed or not.
    const [isActiveChanged, setIsActiveChanged] = useState(false);

    // If 'isActive' state changing first time assigns 'true' value to 'isActiveChanged' state.
    useEffect(() => {
        if (isActive && !isActiveChanged) {
            setIsActiveChanged(true)
        }
    }, [isActive])

    // Returns css classes for main(background) element. If 'isActiveChanged === false' returns class without animation.
    const getBackgroundStyles = () => {
        if (!isActiveChanged) {
            return stl.background;
        } else {
            return isActive ? [stl.background, stl.active].join(" ") : [stl.background, stl.notActive].join(" ");
        }
    }

    // Returns css classes for loader with different sizes, depending on the 'size' props.
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