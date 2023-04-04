import React from 'react';
import ProfileSelect from './ProfileSelect';

export default function HomePage(props){
  return(
    <main>
      <div className='container-head home-banner'>
        <h1>This is OurFamily</h1>
        <h3>Well, technically <i>your</i> family.</h3>
      </div>
      <h2 className='mt-5'>Who's Here?</h2>
      <ProfileSelect className='pt-0' />
    </main>
  );
}