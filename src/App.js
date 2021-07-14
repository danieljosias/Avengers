import Header from './components/Header/index';
import Footer from './components/Footer/index';

import Login from './pages/Login/index';
import HomePage from './pages/HomePage/index';
import Noticias from './pages/Noticias/index';
import Midia from './pages/Midia/index';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(null);
    const actionLoginDataGoogle = (u) =>{
      let newUser = {
        id: u.uid,
        name: u.displayName,
        avatar: u.photoUrl
      }

      setUser(newUser);

    }

    if(user === null){
      return(
        <Login onReceiveGoogle={actionLoginDataGoogle}/>
      )
    }
    
    return (
     
      <Router>
        <Header />
        
        <Switch>
          <Route exact path="/"> <HomePage /> </Route>
          <Route exact path="/noticias"> <Noticias /> </Route>
          <Route exact path="/midia"> <Midia /> </Route>
        </Switch>

        <Footer />
      </Router>

    );  
  
}

export default App;
