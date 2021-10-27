import "./App.css";
import { HashRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import { ChartComp } from "./components/ChartComp";
import { About } from "./components/About";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={ChartComp}></Route>
                    <Route path="/about" component={About}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
