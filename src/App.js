import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Layout from "./components/Layout/Layout";
import OrdersStore from "./pages/OrdersStore";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/order"  component={Order} />
            <Route path="/orders-store"  component={OrdersStore} />
          </Layout>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
