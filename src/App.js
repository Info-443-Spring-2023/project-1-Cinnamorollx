import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import ProfileSelect from './components/ProfileSelect';
import AuthControl from './components/AuthControl';

function App(props) {
  const [currentProfile, setCurrentProfile] = useState("Guest");

  return (
    <div>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="Kush, Efra, Yusuf, Carl" />
        <meta name="description" content="application for improving family interation" />
        <title>Family folks</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
        <link rel="stylesheet" href="css/index.css" />
        <link rel="icon" type="image/x-icon" href="images/icons8-home-page-16.png" />
      </head>

      <Router>
        <Routes>
          <Route exact path="/" element={<ProfileSelect setCurrentProfile={setCurrentProfile} />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/home/*" element={<AuthControl currentProfile={currentProfile}><Home currentProfile={currentProfile} setCurrentProfile={setCurrentProfile} /> </AuthControl>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;