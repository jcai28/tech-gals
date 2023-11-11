import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const TestPage = () => {
  return (
    <>
      <p>hi there</p>
    </>
  )
}
function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path='/' element={<TestPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
