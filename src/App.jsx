import { useState } from 'react'
import './assets'
import './App.css';
import {
  ProfileCard,
  // ProfileCard_style,
  coverImage,
  avatarImage,
  badgeImage,
  JobCard,
  JobCards_data,
  Card1,
  Card2
} from './assets'

function App() {

  const JobCards = JobCards_data

  return (
    <>
      {/* <ProfileCard 
        name='jude' role='coder' avatarImage={avatarImage}
        coverImage={coverImage} badge='Top performer'
        badgeImage={badgeImage} rating={4.8}  
        price={'1000'} hours={10} period='monthly'
      /> */}

      <div className='cad_grd'>
        {JobCards.map((Job, index) => (
          <JobCard
            key = {index}
            logo = {Job.logo}
            title = {Job.title}
            work_level = {Job.work_level}
            work_time={Job.work_time}
            location = {Job.location}
            rate = {Job.rate}
            time = {Job.time}
            work_state = {Job.work_state}
            save = {Job.save}
            company = {Job.company}
            save_sty={Job.save_sty}
          />
        ))} 
      </div>

      <div className='cad_cen'>
        <Card1 />
        <Card2 />
      </div>
      
    </>
  )
}

export default App
