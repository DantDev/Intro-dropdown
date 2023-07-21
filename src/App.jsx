import React, {useEffect,useRef} from "react"
import logo from "./assets/images/logo.svg"
import upArrow from "./assets/images/icon-arrow-up.svg"
import todoIcon from "./assets/images/icon-todo.svg"
import calendarIcon from "./assets/images/icon-calendar.svg"
import remindersIcon from "./assets/images/icon-reminders.svg"
import planningIcon from "./assets/images/icon-planning.svg"
import heroDesktop from "./assets/images/image-hero-desktop.png"
import heroMobile from "./assets/images/image-hero-mobile.png"
import logoDatabiz from "./assets/images/client-databiz.svg"
import logoAudio from "./assets/images/client-audiophile.svg"
import logoMeet from "./assets/images/client-meet.svg"
import logoMaker from "./assets/images/client-maker.svg"


function App() {
  const[openFeatures,setOpenFeatures] = React.useState(false)
  const[openCompany,setOpenCompany] = React.useState(false)

  let menuRef = useRef()

  useEffect(() => {

    let handler = (e) =>{
      if(!menuRef.current.contains(e.target)){
        setOpenFeatures(false)
        setOpenCompany(false)
      }
    }

    document.addEventListener("mousedown",handler)
  })

  function dropFeatures() {
    setOpenFeatures(!openFeatures)
  }
  function dropCompany() {
    setOpenCompany(!openCompany)
  }
  
  return (
      <div className="container">
        <nav className="nav">
          <div className="logo-div">
            <img className="logo" src={logo} />
          </div>
          <div className="navigation">
            <input type="checkbox" className="toggle-menu"/>
            <div className="hamburger"></div>
            <label className="menu-overlay" ></label>
            <ul className="menu">
              <div className="nav-section">
                <li>
                  <div className="dropdown" ref={menuRef}>
                    <label onClick={dropFeatures} className="nav-item">
                      Features
                      <img className={openFeatures? "up-arrow" : "down-arrow"} src={upArrow}/>
                    </label>
                    <ul className={openFeatures ? "dropdown-features-active" : "dropdown-features"}>
                      <li className="drop-item">
                        <img className="drop-img" src={todoIcon}/>
                        <p className="drop-text"><a href="">Todo List</a></p>
                      </li>
                      <li className="drop-item">
                        <img className="drop-img" src={calendarIcon}/>
                        <p className="drop-text"><a href="">Calendar</a></p>
                      </li>
                      <li className="drop-item">
                        <img className="drop-img" src={remindersIcon}/>
                        <p className="drop-text"><a href="">Reminders</a></p>
                      </li>
                      <li className="drop-item">
                        <img className="drop-img" src={planningIcon}/>
                        <p className="drop-text"><a href="">Planning</a></p>
                      </li>
                    </ul>          
                  </div>
                </li>
                <li>
                  <div className="dropdown" ref={menuRef}>
                    <label onClick={dropCompany} className="nav-item">
                      Company
                      <img className={openCompany? "up-arrow" : "down-arrow"} src={upArrow}/>
                    </label>
                    <ul className={openCompany ? "dropdown-company-active" : "dropdown-company"}>
                      <li className="drop-item">
                        <p className="drop-text"><a href="">History</a></p>
                      </li>
                      <li className="drop-item">
                        <p className="drop-text"><a href="">Our Team</a></p>
                      </li>
                      <li className="drop-item">
                        <p className="drop-text"><a href="">Blog</a></p>
                      </li>
                    </ul>          
                  </div>
                </li>
                <li>
                  <p className="nav-item">Careers</p>
                </li>
                <li>
                  <p className="nav-item">About</p>
                </li>
              </div>
              <div className="login-section">
                <li>
                  <p className="nav-login"><a href="">Login</a></p>
                </li>
                <li>
                  <button className="register-btn">Register</button>
                </li>
              </div>
            </ul>
          </div>
        </nav>
        <div className="content">
          <section className="image-container">
              <img className="hero-image-desktop" src={heroDesktop} />
              <img className="hero-image-mobile" src={heroMobile} />
          </section>
          <section className="content-info">
            <h1 className="content-title"><span>Make</span> remote work</h1>
            <p className="content-text">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button className="content-btn">Learn more</button>
            <div className="client-container">
              <img className="client-logo" src={logoDatabiz} />
              <img className="client-logo" src={logoAudio} />
              <img className="client-logo" src={logoMeet} />
              <img className="client-logo" src={logoMaker} />
            </div>
          </section>
        </div>
      </div>    
  )
}

export default App
