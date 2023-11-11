import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useColor } from './context/useColor';

const TestPage = () => {
  const colors = useColor()
  return (
    <>
      <p style={{ backgroundColor: colors.lightPurple}}>hi there</p>
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
