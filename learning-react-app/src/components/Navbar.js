import React from 'react'
import PropTypes from 'prop-types'
import { Link, link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode.bg} bg-${props.mode.bg}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about'>{props.attr1} </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/textform">{props.attr2}</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled {props.var}</a>
            </li>
            <li className="nav-item">
              <div className="form-check form-switch my-2 mx-2">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.fmode}/>
                <label className={`form-check-label text-${props.mode.text}`} htmlFor="flexSwitchCheckDefault">{props.mode.text}</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propsTypes = {
  title: PropTypes.string,
  attr1: PropTypes.string,
  attr2: PropTypes.string,
  var: PropTypes.number
}

export default Navbar