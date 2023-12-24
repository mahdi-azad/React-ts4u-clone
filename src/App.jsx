import { useState } from 'react'
import List from './components/List'
import '../src/styles/list.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1>We Offer a Wide Variety of Desktop App Development</h1>
        <List></List>
      </div>
    </>
  )
}

export default App

