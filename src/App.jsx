import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import MainPage from './MainPage';
import { UserProvider } from './context/userContext';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import db from './constants/Firebase';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const tempUser = user.toJSON();
        console.log('tempUser', tempUser);
        const currUser = {
          name: tempUser.displayName,
          email: tempUser.email,
          timestamp: serverTimestamp(),
          image: tempUser.photoURL,
          uid: tempUser.uid,
          role: 'user',
        };
        const docRef = doc(db, 'users', tempUser.uid);

        console.log('starting to get doc');
        try {
          const docSnap = await getDoc(docRef);
        } catch (err) {
          console.log('error getting doc', err);
          await setDoc(docRef, currUser);

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
        console.log('user is signed out');
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
