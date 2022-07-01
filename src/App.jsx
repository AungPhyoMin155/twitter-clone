
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase'
import './App.css'
import Feed from './components/Feed'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Widgets from './components/Widgets'
import { login, selectUser } from './features/userSlice'

function App() {
  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(user=> {
      if(user) {
          dispatch(login({
              displayName: user.displayName,
              email: user.email,
              photoUrl: user.photoURL,
          }))
      }
    })
  }, [])

  return (
    <>

      {
        !user ? <Login /> :
        <main className='bg-[#000] w-full h-[100vh] flex overflow-y-scroll'>

        <Sidebar />

        <Feed />

        <Widgets />

      </main>
      }
      
    </>
  )
}

export default App
