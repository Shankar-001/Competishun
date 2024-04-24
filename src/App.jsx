import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import MainPage from './MainPage';
import { UserProvider } from './context/userContext';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import db from './constants/Firebase';
import { useLocation } from 'react-router-dom';
import TagManager from 'react-gtm-module';

function App() {
  const gtmId = import.meta.env.VITE_PUBLIC_GTM_ID;
  const [user, setUser] = useState(null);

  const { hash, key } = useLocation();

  useEffect(() => {
    if (gtmId) {
      // const script = document.createElement('script');
      // script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      // script.async = true;
      // document.head.appendChild(script);
      TagManager.initialize({ gtmId });
    }
  }, [gtmId]);
  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [key, hash]);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const tempUser = user.toJSON();
        const currUser = {
          name: tempUser.displayName,
          email: tempUser.email,
          timestamp: serverTimestamp(),
          image: tempUser.photoURL,
          uid: tempUser.uid,
          role: 'user',
        };
        const docRef = doc(db, 'users', tempUser.uid);

        // console.log('starting to get doc');
        try {
          const docSnap = await getDoc(docRef);
        } catch (err) {
          console.log('error getting doc', err);
          try {
            await setDoc(docRef, currUser);
          } catch (e) {
            console.log('error setting doc', e);
          }
          await signOut(auth);
          Swal.fire({
            icon: 'error',
            title: 'Unauthorized Access!',
            text: 'You do not have access to this dashboard!',
          });
          return;
        }
        setUser(currUser);
      } else {
        // User is signed out
        // console.log('user is signed out');
        setUser(null);
      }
    });
  }, []);
  return (
    <div className="App">
      <UserProvider value={{ user, setUser }}>
        <MainPage />
      </UserProvider>
    </div>
  );
}

export default App;
