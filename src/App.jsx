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
} from './assets'

function App() {

  const JobCards = [
    {
      logo: 'https://cdn.simpleicons.org/amazon',
      title: 'Senior UI/UX Designer',
      work_time: 'Part-Time',
      work_level: 'Seni Level',
      location: 'behil india',
      rate: '$120/hr',
      time: '5',
      save: 'Save',
      company: 'Amazon',
      // save_sty: 'save save_dark'
    },
    {
      logo: 'https://cdn.simpleicons.org/google',
      title: 'Graphic Designer',
      work_time: 'Part-Time',
      work_level: 'Flexible Schedule',
      location: 'Kochi, India',
      rate: '$150-220k',
      time: '30',
      save: 'Saved',
      company: 'Google',
      // save_sty: 'save save_dark'
    },
    {
      logo: 'https://cdn.simpleicons.org/dribble',
      title: 'Senior Motion Designer',
      work_time: 'Contract',
      work_level: 'Remote',
      location: 'Chennal, India',
      rate: '$85/hr',
      time: '18',
      save: 'Save',
      company: 'Dribble',
      // save_sty: 'save'
    },
    {
      logo: 'https://cdn.simpleicons.org/figma',
      title: 'UX Designer',
      work_time: 'Full-Time',
      work_level: 'In office',
      location: 'Jangaiore, India',
      rate: '$200-250K',
      time: '5',
      save: 'Saved',
      company: 'Figma',
      // save_sty: 'save save_dark'
    },
    {
      logo: 'https://cdn.simpleicons.org/airbnb',
      title: 'Junior UI/UX Designer',
      work_time: 'Contract',
      work_level: 'Remote',
      location: 'Dehi, India',
      rate: '$100/hr',
      time: '5',
      save: 'Save',
      company: 'Airbnb',
      // save_sty: 'save'
    },
    {
      logo: 'https://cdn.simpleicons.org/apple',
      title: 'Graphic Designer',
      work_time: 'Full-Time',
      work_level: 'Flexible Schedule',
      location: 'Kerala, India',
      rate: '$85-120K',
      time: '5',
      save: 'Saved',
      company: 'Apple',
      // save_sty: 'save save_dark'
    },
  ]

  return (
    <>
      <ProfileCard 
        name='jude' role='coder' avatarImage={avatarImage}
        coverImage={coverImage} badge='Top performer'
        badgeImage={badgeImage} rating={4.8}  
        price={'1000'} hours={10} period='monthly'
      />

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
    </>
  )
}

export default App
