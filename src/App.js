import { BrowserRouter, Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import logo from './logo.svg';
import './css/main.css';
import './css/tailwin.css'
import Homepage from './components/Homepage'
import Detail from './components/Detail'
import List from './components/List';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/detail" component={Detail} />
                <Route exact path="/list" component={List} />
            </Switch>
        </Router>

    );
}

export default App;
