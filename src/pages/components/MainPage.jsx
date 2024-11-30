import React from 'react';

import { YourComponent } from "./MainPageSource";
import { Header } from "../../Components/Header/Header";
import { Footer } from "../../Components/Footer/Footer"

export function MainPageRoute() {
    return (
      <>
        <Header/>
        <YourComponent/> 
        <Footer/>   
      </>
    );
  }