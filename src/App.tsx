import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProtocolPage1 from "./pages/ProtocolPage1"
import ProtocolPage2 from "./pages/ProtocolPage2"
import ProtocolPage3 from "./pages/ProtocolPage3"
import ProtocolPage4 from "./pages/ProtocolPage4"

function App() {
  
  return (
    <div>
  
        <Routes>
          <Route  path="/" element={<HomePage />} />
          <Route  path="/protocol1" element={<ProtocolPage1 />} />
          <Route  path="/protocol2" element={<ProtocolPage2 />} />
          <Route  path="/protocol3" element={<ProtocolPage3 />} />
          <Route  path="/protocol4" element={<ProtocolPage4 />} />
        </Routes>
     
    </div>
  )
}

export default App
