import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import ProjectCard from './components/project-card'

function App() {
  return (
    <>
    <Header />
    <ProjectCard name="RockClimber" img="./assets/imgs/Capture.PNG" github="https://github.com/Jack-Storment/North-Carolina-Rock-Climbing" deployed="https://www.northcarolinarockclimbing.com/" />
    <ProjectCard name="CryptoDash" img="./assets/imgs/Capture.PNG" github=" https://github.com/travis-john/dolla-dolla-bills" deployed=" https://travis-john.github.io/dolla-dolla-bills" />
    </>
      )
}

export default App;
