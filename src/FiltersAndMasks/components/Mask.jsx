import React from 'react';
import maskStyle from '../assets/styles/mask.module.css'

const Mask = () => {
    return (
        <div className={maskStyle.mask}>
            <input
                type="text"
                className={maskStyle.mask__input}
            />
            <input
                type="text"
                className={maskStyle.mask__input}
            />
        </div>
    );
};

export default Mask;
