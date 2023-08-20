import { Outlet } from "react-router-dom"
function App() {
  return (
    <>
      <section className='main-section'> 
       <Outlet/>
      </section>
    </>
  )
}

export default App
