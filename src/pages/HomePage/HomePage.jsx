import React from 'react';
import './HomePage.css';
import animationData from '../../assets/happy-autumn-shopping.json';
import Lottie from 'lottie-react';

export default function HomePage() {
  return (
    <div className='homePage'>
      <div className='animation_div'>
      <Lottie animationData={animationData}/>
      </div>
      <h1><span>"</span>Easily manage your users and products. Start by choosing a section!<span>"</span></h1>
    </div>
  )
}
