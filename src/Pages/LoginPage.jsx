import React, { useState, useEffect } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon}
 from 'mdb-react-ui-kit';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

function App() {
  // State-urile pentru email, parola și afișarea alertelor pentru email și parolă
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailAlert, setEmailAlert] = useState(false);
  const [passwordAlert, setPasswordAlert] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  // State-ul pentru token
  const [token, setToken] = useState('');

  // Funcția care se apelează când se schimbă valoarea câmpului email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailAlert(false); // ascunde alerta dacă se introduce o valoare validă
  }

  // Funcția care se apelează când se schimbă valoarea câmpului parolă
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordAlert(false); // ascunde alerta dacă se introduce o valoare validă
  }

  // Funcția care se apelează când se trimite formularul
  const handleFormSubmit = (event) => {
    event.preventDefault(); // oprește comportamentul default de trimitere a formularului

    if (email === '') { // dacă email-ul este gol, afișează alerta și oprește execuția
      setEmailAlert(true);
      return;
    }
    if (password === '') { // dacă parola este goală, afișează alerta și oprește execuția
      setPasswordAlert(true);
      return;
    }

    axios.post('/api/login', { email, password }) // trimite request-ul de autentificare la API-ul nostru
      .then((response) => { // dacă request-ul a avut succes
        if (response.data.success) { // dacă autentificarea a fost reușită
          setToken(response.data.token); // setează token-ul în state
        } else {
          alert(response.data.message); // afișează o alertă pentru erorile de autentificare
        }
      });
  }

  useEffect(() => {
    if (token !== '') {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // setează token-ul în header-ul request-urilor
      window.location.href = '/admin'; // redirectionează utilizatorul la pagina de administrare
    }
  }, [token]);


  return (
    
    <div className='container-fluid p-4'>
        

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center' >

          <h1 className="my-5 display-3 fw-bold ls-tight px-3"style={{ position: 'sticky', top: '0' }}>
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)', position: 'sticky', top: '0'  }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              {emailAlert &&
                <Alert variant='danger'>
                  Please enter your email address.
                </Alert>
              }

              {passwordAlert &&
                <Alert variant='danger'>
                  Please enter your password.
                </Alert>
              }

              <form onSubmit={handleFormSubmit}>
                <MDBInput label='Email' type='email' value={email} onChange={handleEmailChange} />
                <MDBInput label='Password' type='password' value={password} onChange={handlePasswordChange} />
                <MDBCheckbox label='Remember me' />
                <button style={{ backgroundColor: "blue", color: "white", padding: "10px 20px", borderRadius: "5px" }}>
                  Login
                </button>

              </form>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </div>
  );
            }     

export default App;
