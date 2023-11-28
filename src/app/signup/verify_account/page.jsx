'use client'


import useEncryption from '@/app/Hooks/useEncryption';
import userPool from '@/app/UserPool';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SlReload } from "react-icons/sl";


export default function ConfirmCode() {
  const { decrypt } = useEncryption(process.env.NEXT_PUBLIC_ENCRYPTION_KEY);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    const usernameFromQuery = searchParams.get('username');
    if (usernameFromQuery) {
      setUsername(decrypt(usernameFromQuery));
    }
  }, []);

  const handleConfirmation = () => {
    const userData = {
      Username: username,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);


    cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
      if (err) {
        console.error('Errore durante la conferma dell\'utente:', err);
        setError(err.message || 'Errore durante la conferma dell\'utente.');
      } else {

        setSuccess(true);
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      }
    });
  };

  const handleResendCode = () => {
    setResendLoading(true);

    const userData = {
      Username: username,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.resendConfirmationCode((err, result) => {
      setResendLoading(false);

      if (err) {
        console.error('Errore durante l\'invio del codice di verifica:', err);
        setError(err.message || 'Errore durante l\'invio del codice di verifica.');
      } else {
        setError(null);
        // Puoi gestire il successo qui, ad esempio mostrare un messaggio all'utente
      }
    });
  };

  return (
    <div id='confirm-code'>
      {success ? (
        <div className='verified'>
          <h1>Conferma riuscita!</h1>
          <p>Ora puoi accedere al tuo account.</p>
        </div>
      ) : (
        <>
          <form>
            <h3>Conferma il tuo Account!</h3>
            <p>
              Ti è stato inviato un codice di verifica alla mail che ci hai fornito, inseriscilo qui per confermare l'account.
            </p>
            {!searchParams.has('username') && (
              <input
                type="email"
                className='form-control'
                id='floatingInput'
                value={username}
                placeholder='Email'
                onChange={(e) => setUsername(e.target.value)}
              />
            )}
            <br />
            <input
              type="text"
              className='form-control'
              id='floatingInput'
              placeholder='Verify Code'
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
            />
            <br />
            {error && <div>Error: {error}</div>}
            <button type="button" onClick={handleConfirmation}>
              Conferma
            </button>
            {
              searchParams.has('username') &&
              <div className='resend-code'>
                <p>Non hai ricevuto il codice di verifica?</p>

                {resendLoading ? 'Inviando...' :
                  <div className='resend-btn'>
                    <SlReload onClick={handleResendCode} className='me-2' />
                    Invia di nuovo
                  </div>
                }
              </div>
            }
          </form>


        </>
      )}
    </div>
  );
}
