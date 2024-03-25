import NewPost from './components/NewPost'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Projects from './components/Projects'
import ProjectsAll from './components/ProjectsAll'
import LoginForm from './components/LoginForm'
import Authorized from './components/Authorized'
import RegisterForm from './components/RegisterForm'
import SearchProjects from './components/SearchProjects'
import { Routes, Route } from "react-router-dom"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function App() {

  const [signedIn, setSignedIn] = useState(false)
  const navigate = useNavigate() // Hook for navigation

  const signOut = () => {
    console.log("signOut is called - App.jsx")
    setSignedIn(false)
    localStorage.removeItem('token')
    navigate("/")
  }

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/newpost" element={<NewPost signedIn={signedIn}/>}/>
        <Route path="/explore" element={<ProjectsAll />}/>
        <Route path="/searchprojects" element={<SearchProjects />}/>
        <Route path="/myprojects/:projectType" element={<Projects />}/>
        <Route path="/register" element={<RegisterForm setSignedIn={setSignedIn} />} />
        <Route path="/login" element={<LoginForm setSignedIn={setSignedIn} />} />
        <Route path="/authorized" element={<Authorized signedIn={signedIn} signOut={signOut} />} />
        <Route path="*" element={<p>Not found</p>}/>
      </Routes>
    </div>
  );
}

export default App
