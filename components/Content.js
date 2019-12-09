import React from "react";
import Column from "./Column";
import users from './data.json';
import PropTypes from "prop-types";
import List from "./List";

const data = users.map(user =>{
  return {
    first: user.name.first,
    last: user.name.last,
    balance: user.balance,
    id: user._id,
    isActive: user.isActive,
    eyeColor: user.eyeColor,
    picture: user.picture
  }
})
const sorted = users.sort((a, b) => 
b.balance.slice(1).split(',').join('') - a.balance.slice(1).split(',').join(''));

const active = [];
const inActive = [];
const brown = [];
const blue = [];
const green = [];
const inbrown = [];
const inblue = [];
const ingreen = [];
users.map(user => user.isActive ? active.push(user) : inActive.push(user));
active.map(user => user.eyeColor === "brown" ? brown.push(user) : user.eyeColor === "blue" ? blue.push(user) : green.push(user));
inActive.map(user => user.eyeColor === "brown" ? inbrown.push(user) : user.eyeColor === "blue" ? inblue.push(user) : ingreen.push(user));
export default function Content(){
    return (
    <div style={{display: "flex", justifyContent: "space-around" }}>
      <Column  data = {brown} title = {"Brown"}/>
      <Column data = {blue} title = {"Blue"}/>
      <Column data = {green} title = {"Green"}/>
      <Column data = {inbrown} title = {"Brown"}/>
      <Column data = {inblue} title = {"Blue"}/>
      <Column data = {ingreen} title = {"Green"}/>
      </div>
    )
};

List.PropTypes = {
  List: PropTypes.array
}
