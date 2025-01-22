import H from "../styles/layout/header.module.scss";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <>
      <header className={H.cabecalho}>
        <img src={logo} alt="Logo" height="80" width="80"/>
        <nav>
          <ul className={H.menu}>
            <li>Paz</li>
            <li>Saúde</li>
            <li>Alegria</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
