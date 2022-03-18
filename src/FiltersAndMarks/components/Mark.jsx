import React from 'react';
import markStyle from '../assets/styles/mark.module.css'

const Mark = ({markData, markIndex, changeMark, removeMark}) => {
    return (
        <div className={markStyle.mark}>
            <input
                type="text"
                className={markStyle.input}
                placeholder={'Mark name'}
                value={markData.name}
                onChange={e => changeMark(e.target.value, markIndex, 'name')}
            />
            <input
                type="text"
                className={markStyle.input}
                placeholder={'Value'}
                value={markData.value}
                onChange={e => changeMark(e.target.value, markIndex, 'value')}
            />
            <div
                className={markStyle.removeIcon}
                onClick={() => removeMark(markIndex)}
            />
        </div>
    );
};

export default Mark;
