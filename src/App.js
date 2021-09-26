import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Layout from "./components/Layout/Layout";
import OrdersStore from "./pages/OrdersStore";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Header />
        <Switch>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/order"  component={Order} />
            <Route path="/orders-store"  component={OrdersStore} />
          </Layout>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
