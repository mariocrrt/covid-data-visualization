import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import { NavComponent } from "./components/Nav";
import { Container } from "react-bootstrap";
import { About } from "./components/About";
import { FooterComponent } from "./components/Footer";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { ChartComp } from "./components/ChartComp";
import { HashRouter as Router } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <NavComponent />
                <Container style={{ minHeight: "93.5vh" }}>
                    <Switch>
                        <Route exact path="/" component={ChartComp}></Route>
                        <Route path="/about" component={About}></Route>
                    </Switch>
                </Container>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
