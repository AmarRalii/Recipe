import React from 'react'
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
  return <>
  <div className='parent'>
    <Navbar></Navbar>
  <div className="">
    <Outlet/>
  </div>
  <Footer></Footer>
  </div>
  
  </>
    
  
}
