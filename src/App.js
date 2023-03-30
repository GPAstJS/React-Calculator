import Calculator from "./components/calculator";
import "./App.css";

function App() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        width: "1920px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="box"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "1440px,",
        }}
      >
        <Calculator/>
      </div>
    </div>
  );
}

export default App;
