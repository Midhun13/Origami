import React from 'react'
import { Link } from 'react-router-dom'
import './Css/Header.css'
import Logo from './Images/Logo.png'

const Header = () => {
  return (
<>
<div className="container-fluid">
    <div className="row">
        <div className="col-md-4" id='origami'>
            <img src={Logo} height={50}/>
        </div>
        <div className="col-md-8">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'About'}>About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'Academic'}>Academic</Link>
        </li>
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Batches
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to={'SpokenEnglish'}>Spoken-English</Link></li>
            <li><Link class="dropdown-item" to={'Ielts'}>IELTS</Link></li>
            <li><Link class="dropdown-item" to={'Oet'}>OET</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={'Contact'}>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    </div>
</div>
</>
  )
}

export default Header
