import React, { useState } from 'react'
import Navbar from './Navbar';
import Dropbox from './dropbox';
import { programs } from '../../constants/programs';

export default function Dashboard() {
  return (
  <>
    <Navbar />
    <div className='gap-2'>
      {programs && programs.length > 0 && programs.map(program => (
        <Dropbox title={program.title} description={program.description} tags={program.topic} difficulty={program.difficulty} />
      ))}
    </div>
  </> 
  )
}
