import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import PrivacyPolicy from './pages/privacypolicy';
import Company from './pages/company';
import Services from './pages/services';
import Csohajlitas from './components/Servicesall/Servicesallelement/Csohajlitas';
import Lemezmegmunkalas from './components/Servicesall/Servicesallelement/Lemezmegmunkalas';
import Elektrosztatikusporszoras from './components/Servicesall/Servicesallelement/Elektrosztatikusporszoras';
import Products from './pages/products';
import Lada from './components/Productsall/Productsallelement/Lada';
import Contacts from './pages/contacts';
import Certifications from './pages/certifications';




function App() {
  return (
    <Router>
      <Switch>
      
        <Route path="/" component={Home} exact />
        <Route path="/privacypolicy" component={PrivacyPolicy} exact />
        <Route path="/company" component={Company} exact />
        <Route path="/services" component={Services} exact />
        <Route path="/contacts" component={Contacts} exact />
        <Route path="/certifications" component={Certifications} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/services/csohajlitas" component={Csohajlitas} exact />
        <Route path="/services/lemezmegmunkalas" component={Lemezmegmunkalas} exact />
        <Route path="/services/elektrosztatikusporszoras" component={Elektrosztatikusporszoras} exact />
        <Route path="/products/lada" component={Lada} exact />
      </Switch>
    </Router>
  );
}

export default App;
