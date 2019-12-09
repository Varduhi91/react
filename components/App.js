import React from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import Content from "./Content";



export default function App() {
  return (
   <div className = "App">
     <Header title = {"User"} />
     <div style={{ display: "flex", justifyContent: "space-around" }}>
     <SubHeader title = {"Active"}/>
     <SubHeader title = {"InActive"}/>
     </div>
     <Content />
   </div>
  )
}
