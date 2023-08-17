import NoControlado from "./components/NoControlado";
import Header from "./components/Header";

import Controlado from "./components/Controlado";

const App = () => {
  return (
    <div className="container">
      <Header/>
      <div className="row">
      <Controlado/>
      
      </div>
    </div>
  );
};

export default App;


