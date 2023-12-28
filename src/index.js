import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skill-list />
      </div>
    </div>
  );
}
function Avatar() {
  return <img src="Image/segun.jpg" alt="oluwasegun" className="avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>Oluwasegun Owoeye</h1>
      <p>
        I am a software developer, expanding his knowledge on how to build
        complex UIs with react JS. I find react interesting and i hope to
        harness my skills to building world class applications.
      </p>
    </div>
  );
}
function Skillset() {
  return (
    <div>
      <skill />
    </div>
  );
}
function skill(props) {
  <div className="skill"></div>;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
