import React from 'react'
import { Link } from 'react-router-dom'
import Nanolab from '../img/nanolab-cobre.png';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark sticky-top'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='#'>
          <img
            src={Nanolab}
            alt='Nanolab Logo'
            height={50}
          />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasDarkNavbar'
          aria-controls='offcanvasDarkNavbar'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div
          className='offcanvas offcanvas-end text-bg-dark'
          tabIndex={-1}
          id='offcanvasDarkNavbar'
          aria-labelledby='offcanvasDarkNavbarLabel'
        >
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title' id='offcanvasDarkNavbarLabel'>
              NanoLab
            </h5>
            <button
              type='button'
              className='btn-close btn-close-white'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            />
          </div>
          <div className='offcanvas-body'>
            <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='#'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='#'>
                  Quiénes Somos
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  to='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Producto
                </Link>
                <ul className='dropdown-menu dropdown-menu-dark'>
                  <li>
                    <Link className='dropdown-item' to='#'>
                      Características
                    </Link>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <Link className='dropdown-item' to='#'>
                      Propiedades
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <Link
                  className='nav-link dropdown-toggle'
                  to='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Aplicaciones
                </Link>
                <ul className='dropdown-menu dropdown-menu-dark'>
                  <li>
                    <Link className='dropdown-item' to='#'>
                      Áreas de Aplicación
                    </Link>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <Link className='dropdown-item' to='#'>
                      Desarrollos Actuales
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='#'>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
