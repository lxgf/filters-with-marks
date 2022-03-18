import React from 'react';
import Mark from "./Mark";
import filterStyle from '../assets/styles/filter.module.css'
import mainStyle from '../assets/styles/main.module.css'

const Filter = ({filterData, filterIndex, removeFilter, addMark, changeMark, removeMark}) => {

    return (
        <div className={filterStyle.filter}>
            {filterData.map((mark, index) =>
                <Mark
                    markData={mark}
                    key={'mark-'+filterIndex+'-'+index}
                    markIndex={filterIndex+'-'+index}
                    changeMark={changeMark}
                    removeMark={removeMark}
                />
            )}
            <div className={mainStyle.buttonRow}>
                <div
                    className={mainStyle.button}
                    onClick={() => addMark(filterIndex)}
                >Add mark</div>
                <div
                    className={mainStyle.button}
                    onClick={() => removeFilter(filterIndex)}
                >Del filter</div>
            </div>
        </div>
    );
};

export default Filter;
