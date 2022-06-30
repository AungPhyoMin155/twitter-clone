
import './App.css'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Widgets from './components/Widgets'

function App() {
  

  return (
    <>
      <main className='bg-[#000000] w-full h-[100vh] flex overflow-scroll'>

        <Sidebar />

        <Feed />

        <Widgets />

      </main>
    </>
  )
}

export default App
