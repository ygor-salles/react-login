import "./App.css";
import { AuthProvider } from "./AuthProvider";
import { Router } from "./routes";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
