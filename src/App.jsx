
import "./App.css";
import Background from "./components/Background/Background";
import Dashboard from "./components/Dashboard/Dashboard";



const App = () => {
  return (
    <section className="main-container">
      <Background />
      <div className="steps-container">
        <Dashboard />
      </div>
    </section>
  );
};

export default App;
