import React, { useState, useRef, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import styles from "../styles/RegistroInicio.module.css"; // Importa el módulo CSS

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Estado para el nombre en el registro
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // Estado para controlar el modo

  const containerRef = useRef(null);
  const formInicioSesionRef = useRef(null);
  const formularioRegistroRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const formInicioSesion = formInicioSesionRef.current;
    const formularioRegistro = formularioRegistroRef.current;

    const handleFormInicioSesionClick = () => {
      container.classList.add(styles.cambioDeModo);
    };

    const handleFormularioRegistroClick = () => {
      container.classList.remove(styles.cambioDeModo);
    };

    if (container && formInicioSesion && formularioRegistro) {
      formInicioSesion.addEventListener("click", handleFormInicioSesionClick);
      formularioRegistro.addEventListener("click", handleFormularioRegistroClick);
    }

    // Cleanup the event listeners on component unmount
    return () => {
      if (formInicioSesion && formularioRegistro) {
        formInicioSesion.removeEventListener("click", handleFormInicioSesionClick);
        formularioRegistro.removeEventListener("click", handleFormularioRegistroClick);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("Registro exitoso");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("Inicio de sesión exitoso");
      }
    } catch (error) {
      setError("Error: " + error.message);
    }
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.contenedorFormulario}>
        <div className={styles.registroInicio}>
          <form className={`${styles.formInicioSesion}`} ref={formInicioSesionRef}>
            <h2 className={styles.titulo}>Iniciar Sesión</h2>
            <div className={styles.campoEntrada}>
              <i className="fas fa-user"></i>
              <input 
                type="email" 
                placeholder="Email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.campoEntrada}>
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                placeholder="Contraseña" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input 
              type="submit" 
              value="Iniciar sesión" 
              className={`${styles.btn} ${styles.solid}`} 
              onClick={handleSubmit}
            />
            <p className={styles.socialTexto}>O inicia sesión con una plataforma social</p>
            <div className={styles.contenedorIconos}>
              <a href="#" className={styles.iconos}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={styles.iconos}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className={styles.iconos}>
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className={styles.iconos}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          <form className={`${styles.formularioRegistro}`} ref={formularioRegistroRef}>
            <h2 className={styles.titulo}>Regístrate</h2>
            <div className={styles.campoEntrada}>
              <i className="fas fa-user"></i>
              <input 
                type="text" 
                placeholder="Nombre" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.campoEntrada}>
              <i className="fas fa-envelope"></i>
              <input 
                type="email" 
                placeholder="Email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /> 
            </div>
            <div className={styles.campoEntrada}>
              <i className="fas fa-lock"></i>
              <input 
                type="password" 
                placeholder="Contraseña" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input 
              type="submit" 
              value="Regístrate" 
              className={`${styles.btn} ${styles.solid}`} 
              onClick={handleSubmit}
            />
            <p className={styles.socialTexto}>
              O regístrate con una plataforma social
            </p>
            <div className={styles.contenedorIconos}>
              <a href="#" className={styles.iconos}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={styles.iconos}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className={styles.iconos}>
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className={styles.iconos}>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>

        <div className={styles.contendorPaneles}>
          <div className={`${styles.panel} ${styles.panelIzquierdo}`}>
            <div className={styles.contenedor}>
              <h3>¡Únete hoy mismo!</h3>
              <p>
                Crea tu cuenta hoy mismo y descubre todo lo que tenemos para
                ofrecerte.
              </p>
              <button className={`${styles.btn} ${styles.transparent}`}>Regístrate</button> 
            </div>
            <img src="/svg/Login.svg" alt="Descripción de la imagen" className={styles.image}/> 
          </div>
          <div className={`${styles.panel} ${styles.panelDerecho}`}>
            <div className={styles.contenedor}>
              <h3>Bienvenido de nuevo</h3>
              <p>Inicia sesión y descubre todo lo nuevo que hemos preparado para ti.</p>
              <button className={`${styles.btn} ${styles.transparent}`}> Iniciar Sesión </button>
            </div>
            <img
              src="/svg/Register.svg" alt="Descripción de la imagen" className={styles.image}/>
          </div>
        </div>
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default Login;
