import { Content } from "../Components/Content";
import { Header } from "../Components/Header";
import { Context } from "../Context";
import "./index.scss";

export const App = () => {
  return (
    <div className="app">
      <Context.Provider value={{}}>
        <Header />
        <Content />
      </Context.Provider>
    </div>
  );
};
