import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import HomePg from "./Pages/Home" ;
import ActivityPg from "./Pages/Activity" ;
import WalletPg from "./Pages/Wallet" ;
import MarketPg from "./Pages/Market" ;
import EarnPg from "./Pages/Earn" ;



const App = () => {
  return (
    <Router>
      <div style={{ height: 100 + '%' }}>
        <Switch>
          <Route exact path='/' component={HomePg} />
          <Route exact path='/activity' component={ActivityPg} />
          <Route exact path='/wallet' component={WalletPg} />
          <Route exact path='/market' component={MarketPg} />
          <Route exact path='/earn' component={EarnPg} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
