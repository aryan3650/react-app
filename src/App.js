import Header from "./components/Header";
import Main from "./components/Main";
import MenuProvider from "react-flexible-sliding-menu";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div className="App prose">
      <MenuProvider MenuComponent={Menu} direction="right" animation="">
        <Header />
      </MenuProvider>
      <Main />
    </div>
  );
};

export default App;
