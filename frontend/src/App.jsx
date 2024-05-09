
import { Navigate,BrowserRouter,Route, Routes } from "react-router-dom"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Feed from "./pages/Feed"
import Login from "./pages/Login"

import Register from "./pages/Register"
import Logout from "./components/Logout"
import RegisterAndLogout from "./components/RegisterAndLogout"
import NotFound from "./pages/NotFound"
import PropertyDetail from "./pages/PropertyDetail"
import Dashboard from "./pages/Dashboard"
function App() {


  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <ProtectedRoutes>
          <Feed/>
        </ProtectedRoutes>
      }/>
        

      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<RegisterAndLogout/>} />
      <Route path="/logout" element={<Logout/>} />
      <Route paht='/property-detail' element={<PropertyDetail/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
