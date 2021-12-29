import React from 'react';

import {Switch, Route} from "react-router-dom";
import Home from "./companents/homepage/home";
import GridDefoult from "./companents/page2/grid-defoult";
import ShopList from "./companents/page3/shop-list";
import Page4 from "./companents/page4/page4";
import Page5 from "./companents/page5/page5";
import Page6 from "./companents/page6/page6";
import Page7 from "./companents/page7/page7";
import Page8 from "./companents/page8/page8";
import Page9 from "./companents/page9/page9";
function App() {
  return (

      <Switch>
          <Route path={"/page2"} component={GridDefoult}/>
          <Route path={"/page3"} component={ShopList}/>
          <Route path={"/page4"} component={Page4}/>
          <Route path={"/page5"} component={Page5}/>
          <Route path={"/page6"} component={Page6}/>
          <Route path={"/page7"} component={Page7}/>
          <Route path={"/page8"} component={Page8}/>
          <Route path={"/page9"} component={Page9}/>
          <Route  path={"/"}  component={Home}/>
      </Switch>
  );
}

export default App;
