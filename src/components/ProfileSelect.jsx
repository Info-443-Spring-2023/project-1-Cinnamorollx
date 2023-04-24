import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../index.css"


const ProfileSelect = ({setCurrentProfile}) => {
  const navigate = useNavigate();

  const handleLogin = (newUser) => {
    setCurrentProfile(newUser)
    navigate("/home/");
  }

  return (
    <>
      <div className='text-center'>
        <div data-testid="home-banner" className='container-head home-banner mx-5 my-4 pl-3'>
          <h1>This is OurFamily</h1>
          <h3 data-testid="well-technically">Well, technically <i>your</i> family.</h3>
        </div>
        <h2 className='mt-5'>Who's Here?</h2>
        <main className="profile-card-group container-main profile-container">
          <div className="card profile-card col-sm-4 col-md-2" data-testid="linda-profile" onClick={(e) => handleLogin("Linda")}>
              <img src="../images/av1.png" className="card-img-top" alt="Profile 1"/>
              <div className="card-body">
                  <h1 className="card-title">Linda</h1>
              </div>
          </div>
          <div className="card profile-card col-sm-4 col-md-2" data-testid="timothy-profile" onClick={(e) => handleLogin("Timothy")}>
              <img src="../images/av2.png" className="card-img-top" alt="Profile 2"/>
              <div className="card-body">
                  <h1 className="card-title">Timothy</h1>
              </div>
          </div>
          <div className="card profile-card col-sm-4 col-md-2" data-testid="bernard-profile" onClick={(e) => handleLogin("Bernard")}>
              <img src="../images/av3.png" className="card-img-top" alt="Profile 3"/>
              <div className="card-body">
                  <h1 className="card-title">Bernard</h1>
              </div>
          </div>
          <div className="card profile-card col-sm-4 col-md-2"  data-testid="grace-profile" onClick={(e) => handleLogin("Grace")}>
              <img src="../images/av4.png" className="card-img-top" alt="Profile 4"/>
              <div className="card-body">
                  <h1 className="card-title">Grace</h1>
              </div>
          </div>
        </main>
        {/* <button className="profile-editor-btn" type="button">Edit Profile</button> */}
      </div>
    </>
  );
}

export default ProfileSelect;