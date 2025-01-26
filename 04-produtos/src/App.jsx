import Header from "./components/Header";
import Home from "./components/Home";
import Produtos from "./components/Produtos";

const App = () => {
  const { pathname } = window.location;

  let Component;
  if (pathname === "/produtos") {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <section>
      <Header />
      <Component />
    </section>
  );
};

export default App;
