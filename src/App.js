import {Route, Routes, Link, BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Listproduits from './components/Produits/Listproduits';
import Ajoutproduit from './components/Produits/Ajoutproduit';

export default  function App() {
     return (

   <Router>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
     <ul className="navbar-nav">
     <li><Link to="/liste" className="nav-link">Liste des produits</Link></li>    
     </ul> 
     </nav>
     <Routes>
       <Route exact path="/liste" element={<Listproduits/>}></Route>  
       <Route exact path="/ajproduit" element={<Ajoutproduit/>}></Route>    
     </Routes>
     </Router>

    );
  }  
