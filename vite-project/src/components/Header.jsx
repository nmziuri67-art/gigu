import ReactImage from "./assets/react-concepts-core.png";
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
export function getRandomInt() {
  return Math.floor(Math.random() * 3);
}
export default function Header() {
  return (
    <header>
      <img src={ReactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandomInt()]} concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
