
import { Navigate,BrowserRouter,Route, Routes } from "react-router-dom"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Feed from "./pages/Feed"
import Login from "./pages/Login"
import 'bootstrap/dist/css/bootstrap.min.css';



import Logout from "./components/Logout"
import RegisterAndLogout from "./components/RegisterAndLogout"
import NotFound from "./pages/NotFound"

import Dashboard from "./pages/Dashboard"
import AddProperty from "./pages/AddProperty"
import UpdateProperty from "./pages/UpdateProperty";
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
      
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/property/add" element={<AddProperty/>}/>
      <Route path="/property/update/:id" element={<UpdateProperty/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
