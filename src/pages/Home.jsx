import React from 'react'
import { useState } from 'react'
import TopSection from '../components/TopSection'
import Content from '../components/Content'
import '../App.css'
import Navbar from '../components/Navbar'
import Expertise from '../components/Expertise'
import Litigation from '../components/Litigation'
import Legacy from '../components/Legacy'
import TeamCard from '../components/TeamCard'
import Team from '../components/Team'
import Blogs from '../components/Blogs'
import Contact from '../components/Contact'
import YoutubeApi from '../components/YoutubeApi'
import { Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div className='bg-gray-50' id='home'>
    <Navbar />
    <TopSection />
    <Content />
    <Expertise />
    <Litigation />
    <Legacy />
    <Team />
    <Blogs />
    <YoutubeApi />
    <Contact />
    </div>
  )
}

export default Home