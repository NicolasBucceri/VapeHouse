// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-transparent ${styles.navbar}`}>
      <div className="container">
        <Link className="navbar-brand fs-4" to="/">VapeHouse</Link>
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="sidebar offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header text-white border-bottom shadow-none">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">VapeHouse</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column flex-lg-row p-4">
            <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/productos">Productos</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/subir-productos">Subir Productos</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/registro">Registro</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/crear-admin">Crear Admin</Link>
              </li>
            </ul>
            <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
              <Link className="text-white text-decoration-none" to="/registro-inicio">Iniciar Sesión</Link>
              <Link
                className="text-white text-decoration-none px-3 py-1 rounded-4"
                style={{ backgroundColor: '#00bfff' }}
                to="/registro-inicio"
              >
                Registrarte
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
