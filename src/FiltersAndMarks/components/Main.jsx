import React, {useEffect, useState} from 'react';
import Filter from "./Filter";
import mainStyle from '../assets/styles/main.module.css'

const Main = () => {
    const [filters, setFilters] = useState([])

    useEffect(() => {
        const ls = localStorage.getItem('filters')
        if (ls !== null)
            setFilters(JSON.parse(ls))
    },[]);

    const saveToLs = () => localStorage.setItem('filters', JSON.stringify(filters))

    const addFilter = () => {
        setFilters([...filters, [{name: '', value: ''}]])
    }

    const removeFilter = filterIndex => {
        let newFilters = [...filters]
        newFilters.splice(filterIndex, 1)
        setFilters(newFilters)
    }

    const removeAllFilters = () => {
        setFilters([])
    }

    const addMark = filterIndex => {
        let newFilters = [...filters]
        newFilters[filterIndex].push({name: '', value: ''})
        setFilters(newFilters)
    }

    const changeMark = (value, markIndex, fieldName) => {
        let newFilters = [...filters]
        const exactFilterIndex = markIndex.split('-')[0]
        const exactMarkIndex = markIndex.split('-')[1]
        let currentMark = newFilters[exactFilterIndex][exactMarkIndex]
        currentMark[fieldName] = value
        newFilters[exactFilterIndex][exactMarkIndex] = currentMark
        setFilters(newFilters)
    }

    const removeMark = markIndex => {
        let newFilters = [...filters]
        const exactFilterIndex = markIndex.split('-')[0]
        const exactMarkIndex = markIndex.split('-')[1]
        newFilters[exactFilterIndex].splice(exactMarkIndex, 1)
        newFilters[exactFilterIndex].length === 0 && newFilters.splice(exactFilterIndex, 1)
        setFilters(newFilters)
    }

    return (
        <div className={mainStyle.main}>
            <div className={mainStyle.buttonRow}>
                <div
                    className={mainStyle.button}
                    onClick={addFilter}
                >Add filter</div>
                <div
                    className={mainStyle.button}
                    onClick={removeAllFilters}
                >Remove all</div>
            </div>
            <div className={mainStyle.filtersContainer}>
                {filters.length === 0 && <span className={mainStyle.info}>No data</span>}
                {filters.map((filter, index) =>
                    <Filter
                        key={'filter-'+index}
                        filterIndex={index}
                        filterData={filter}
                        removeFilter={removeFilter}
                        addMark={addMark}
                        changeMark={changeMark}
                        removeMark={removeMark}
                    />
                )}
            </div>
            <div
                className={mainStyle.saveBtn}
                onClick={saveToLs}
            >Save</div>
        </div>
    );
};

export default Main;
