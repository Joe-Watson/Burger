import './App.css';
import Layout from "../src/components/Layout/Layout"
import BugerBuilder from './container/BurgerBuider/BurgerBuilder';


function App() {
  return (
    <div className="App">
      <Layout >
        <BugerBuilder />
      </Layout>
    </div>
  );
}

export default App;
