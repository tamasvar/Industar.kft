import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import Company from './pages/company';
import Services from './pages/services';
import Csohajlitas from './components/Servicesall/Servicesallelement/Csohajlitas';
import Lemezmegmunkalas from './components/Servicesall/Servicesallelement/Lemezmegmunkalas';
import Elektrosztatikusporszoras from './components/Servicesall/Servicesallelement/Elektrosztatikusporszoras';




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/company" component={Company} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/services/csohajlitas" component={Csohajlitas} exact />
        <Route path="/services/lemezmegmunkalas" component={Lemezmegmunkalas} exact />
        <Route path="/services/elektrosztatikusporszoras" component={Elektrosztatikusporszoras} exact />
      </Switch>
    </Router>
  );
}

export default App;
