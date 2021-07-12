import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages';
import OutsystemPage from './pages/outsystem';
import EraxPage from './pages/erax';
import ContatoPage from './pages/contato';
import EbookPage from './pages/ebook';
import ClubPage from './pages/club';
import ParceirosPage from './pages/parceiros';
import PlanilhasPage from './pages/planilhas';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/outsystem" component={OutsystemPage} exact />
          <Route path="/erax" component={EraxPage} exact />
          <Route path="/contato" component={ContatoPage} exact />
          <Route path="/ebook" component={EbookPage} exact />
          <Route path="/club" component={ClubPage} exact />
          <Route path="/parceiros" component={ParceirosPage} exact />
          <Route path="/planilhas" component={PlanilhasPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
