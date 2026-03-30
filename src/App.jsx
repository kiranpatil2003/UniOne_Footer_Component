import { Routes, Route } from "react-router-dom";
import CookiePolicy from "./pages/CookiePolicy";
import UniversityUpdates from "./pages/UniversityUpdates";
import Layout from "./components/Layout"; // Import the new Layout component
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="cookies" element={<CookiePolicy />} />
        <Route path="university-updates" element={<UniversityUpdates />} />
      </Route>
    </Routes>
  );
}

export default App;
