import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import SignUp from "./screens/SignUp.js";
import CardProvider from "./components/ContextReducer.js";
import MyOrders from "./screens/MyOrders.js";

function App() {
  return (
    <div>
      <CardProvider>
        <div>
          <Router>
            <div>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/createUser" element={<SignUp />} />
                <Route exact path="/myOrder" element={<MyOrders />} />
              </Routes>
            </div>
          </Router>
        </div>
      </CardProvider>
    </div>
  );
}

export default App;
