import { Routes, Route } from "react-router-dom";
import CookiePolicy from "./pages/CookiePolicy";
import Layout from "./components/Layout"; // Import the new Layout component
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> {/* Use Layout as the parent route */}
        <Route
          index
          element={
            <p>
              Unione Footer Component, Please scroll down to see the footer in
              action!
            </p>
          }
        />
        <Route path="cookies" element={<CookiePolicy />} />
      </Route>
    </Routes>
  );
}

export default App;
