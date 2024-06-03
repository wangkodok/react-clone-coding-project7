import logoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="food images" />
        <h1>react food</h1>
      </div>
      <nav>
        <button>cart 0</button>
      </nav>
    </header>
  );
}
