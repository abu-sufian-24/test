
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import './App.css'
import { auth } from './firebase/firebase.init';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((resulr) => {
        console.log(resulr);
        setUser(resulr.user)

      }).catch((error) => {
        console.log(error);
        setUser(null)
      })
  }
  const handleGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((resulr) => {
        console.log(resulr);
        setUser(resulr.user)

      }).catch((error) => {
        console.log(error);
        setUser(null)
      })
  }
  const handleLogOut = () => {
    signOut(auth).then(() => {
      alert('logget out')
      setUser(null)

    }).catch((error) => {
      console.log(error);

    });
  }

  return (
    <>
      {
        user ? <button onClick={handleLogOut} className='bg-slate-300 py-2 px-4'>Log out</button>
          : <>
            <button onClick={handleLogin} className='bg-slate-300 py-2 px-4'>login with google</button>
            <br />
            <br />
            <button onClick={handleGithub} className='bg-rose-300 py-2 px-4'>login with gitHub</button>
            <br />
            <br />
            <button onClick={handleGithub} className='bg-rose-300 py-2 px-4'>login with Twitter</button>
          </>
      }

      {user && (
        <div>
          <h1>{user.displayName}</h1>
          <p>{user.email}</p>
          <img referrerPolicy='on-referrer' src={user.photoURL} alt="" className='mx-auto rounded' />
        </div>
      )}
    </>
  )
}

export default App
