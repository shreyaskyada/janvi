
import "./App.css";
import Background from "./components/Background/Background";
import Dashboard from "./components/Dashboard/Dashboard";
import { Analytics } from "@vercel/analytics/react"


const App = () => {
  return (
    <section className="main-container">
      <Background />
      <div className="steps-container">
        <Dashboard />
      </div>
      <Analytics />
    </section>
  );
};

export default App;
