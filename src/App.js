import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useTheme } from './theme/index';

const TestPage = () => {
  const theme = useTheme()
  return (
    <>
      <p style={{ backgroundColor: theme.lightPurple}}>hi there</p>
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
