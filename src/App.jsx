/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import Testimonios from './components/Testimonios'
import TestimoniosBis from './components/TestimoniosBis'

function App() {
  /* const [count, setCount] = useState(0) */

  return (
    <>
    <h1>APIS</h1>
    <section className='RandomUser'>
      <h2>RANDOM USER </h2>
      <h3>https://randomuser.me/</h3>
      <h3>LINK DE API: https://randomuser.me/api/ </h3>
      <Testimonios/>
      </section>
      <section className="RandomData"> 
      <h2>RANDOM DATA GENERATOR</h2>
      <h3>LINK DE API: https://random-data-api.com/api/v2/users?response_type=json  </h3>
     <TestimoniosBis/>
     </section>
    </>
  )
}

export default App
