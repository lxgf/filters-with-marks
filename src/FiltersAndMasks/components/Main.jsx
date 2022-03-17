import React from 'react';
import db from "../services/firestore";
import Filter from "./Filter";
import mainStyle from '../assets/styles/main.module.css'

const Main = () => {
    return (
        <div className={mainStyle.main}>
            <div c>
                <Filter />
            </div>
        </div>
    );
};

export default Main;
