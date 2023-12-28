import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkilllList />
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
function SkillList() {
  return (
    <div>
      <Skill skill = "HTML + CSS" emoji = "👍🏻" color = "orange" />
      <Skill skill = "Angular" emoji = "👍🏻" color = "red" />
      <Skill skill = "ReactJS" emoji = "👍🏻" color = "blue" />
      <Skill skill = "TailwindCSS" emoji = "👍🏻" color = "purple" />
    </div>
  );
}
function Skill(props) {
  <div className="skill" style = {{backgroundColor: props.color}}>
    <span>{props.skill}</span>
    <span>{props.emoji}</span>
    </div>;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
