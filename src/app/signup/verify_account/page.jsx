'use client'

// Importa i moduli necessari
import useEncryption from '@/app/Hooks/useEncryption';
import userPool from '@/app/UserPool';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ConfirmCode() {
  const { decrypt } = useEncryption(process.env.NEXT_PUBLIC_ENCRYPTION_KEY);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);


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
  
  

  return (
    <div id='confirm-code'>
      {success ? (
        // Se la conferma è riuscita, mostra un messaggio di successo
        <div>
          <h2>Conferma riuscita!</h2>
          <p>Ora puoi accedere al tuo account.</p>
        </div>
      ) : (
        // Altrimenti, mostra il modulo di conferma del codice
        <form>
          {!searchParams.has('username') && (
            // Mostra l'input di email solo se non è presente nella query
            <label>
              Email:
              <input
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          )}
          <br />
          <label>
            Codice di conferma:
            <input
              type="text"
              value={confirmationCode}
              onChange={(e) => setConfirmationCode(e.target.value)}
            />
          </label>
          <br />
          {error && <div>Error: {error}</div>}
          <button type="button" onClick={handleConfirmation}>
            Conferma
          </button>
        </form>
      )}
    </div>
  );
}
