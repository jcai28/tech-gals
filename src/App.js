import "./App.css";
import { Routes, Route } from "react-router-dom";

const TestPage = () => {
  return (
    <>
      <p>hi there</p>
    </>
  );
};
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
