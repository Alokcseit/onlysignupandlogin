import Signup from "./Signup";
import Home from "./Home";
import Login from "./Login";
import DashBoard from "./DashBoard";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/signup" element={<Signup></Signup>}/>
      <Route path="/login" element={<Login></Login>}/>
      <Route path="/dashboard" element={<DashBoard></DashBoard>} />
    </Routes>
   </Router>
   </>
  );
}

export default App;
