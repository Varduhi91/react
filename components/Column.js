import React from "react";
import SubHeader from "./SubHeader";
import List from "./List";


export default function Column({title, data}){
    return (
        <div>
            <SubHeader title = {title}/>
            <List list = {data}/>
        </div>
    )
};
