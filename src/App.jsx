import { useState } from 'react'
import './PriceCard'
import './Pricecard.css'
import PriceCard from './PriceCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <PriceCard plan="FREE" price={0} users="Single User" storage="50GB"  communityAccess={true} />
      <PriceCard plan="PLUS" price={9} users={5} storage="50GB" publicProjects="Unlimited" communityAccess={true} privateProjects="Unlimited" phoneSupport={true} freeSubdomain={true} />
      <PriceCard plan="PRO" price={49} users="Unlimited" storage="50GB" publicProjects="Unlimited" communityAccess={true} privateProjects="Unlimited" phoneSupport={true} freeSubdomain={true} statusReports={true} />
    </div>
  )
}

export default App
