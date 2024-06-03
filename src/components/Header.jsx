import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="food images" />
        <h1>react food</h1>
      </div>
      <nav>
        <Button textOnly={true}>cart 0</Button>
      </nav>
    </header>
  );
}
