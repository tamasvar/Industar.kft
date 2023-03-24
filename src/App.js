import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages';
import PrivacyPolicy from './pages/privacypolicy';
import Company from './pages/company';
import Services from './pages/services';
import Csohajlitas from './components/Servicesall/Servicesallelement/Csohajlitas';
import Csodarabolas from './components/Servicesall/Servicesallelement/Csodarabolas';
import Lemezmegmunkalas from './components/Servicesall/Servicesallelement/Lemezmegmunkalas';
import Elektrosztatikusporszoras from './components/Servicesall/Servicesallelement/Elektrosztatikusporszoras';
import Koordinatalyukasztas from './components/Servicesall/Servicesallelement/Koordinatalyukasztas';
import Products from './pages/products';
import Lada from './components/Productsall/Productsallelement/Lada';
import Contacts from './pages/contacts';
import Certifications from './pages/certifications';
import Furesztarcsaelezes from './components/Servicesall/Servicesallelement/Furesztarcsaelezes';
import Forgacsolas from './components/Servicesall/Servicesallelement/Forgacsolas';
import Lezervagas from './components/Servicesall/Servicesallelement/Lezervagas';
import Kemiaitisztitas from './components/Servicesall/Servicesallelement/Kemiaitisztitas';
import Hegesztes from './components/Servicesall/Servicesallelement/Hegesztes';
import Szemcseszoras from './components/Servicesall/Servicesallelement/Szemcseszoras';
import Plazmavagas from './components/Servicesall/Servicesallelement/Plazmavagas';






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
        <Route path="/services/csodarabolas" component={Csodarabolas} exact />
        <Route path="/services/lemezmegmunkalas" component={Lemezmegmunkalas} exact />
        <Route path="/services/furesztarcsaelezes" component={Furesztarcsaelezes} exact />
        <Route path="/services/forgacsolas" component={Forgacsolas} exact />
        <Route path="/services/lezervagas" component={Lezervagas} exact />
        <Route path="/services/kemiaitisztitas" component={Kemiaitisztitas} exact />
        <Route path="/services/hegesztes" component={Hegesztes} exact />
        <Route path="/services/szemcseszoras" component={Szemcseszoras} exact />
        <Route path="/services/plazmavagas" component={Plazmavagas} exact />
        <Route path="/services/elektrosztatikusporszoras" component={Elektrosztatikusporszoras} exact />
        <Route path="/services/koordinatalyukasztas" component={Koordinatalyukasztas} exact />
        <Route path="/products/lada" component={Lada} exact />
      </Switch>
    </Router>
  );
}

export default App;
