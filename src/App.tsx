import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import { AuthProvider } from "./AuthProvider";
import { Homepage } from "./pages/homepage";
import { Profile } from "./pages/profile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" />
          <Route path="/pagina-inicial" element={<Homepage />} />

          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
