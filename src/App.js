import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Users from './component/Users';
import Posts from './component/Posts';
import Comments from './component/Comments';
import Albums from './component/Albums';
import Photos from './component/Photos';
import Categories from './component/Categories';
import Brands from './component/Brands';
import Items from './component/Items';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Link path="/" exact component={Users} />
      <Link path="/Posts" exact component={Posts} />
      <Link path="/Comments" exact component={Comments} />
      <Link path="/Albums" exact component={Albums} />
      <Link path="/Photos" exact component={Photos} />
      <Link path="/Categories" exact component={Categories} />
      <Link path="/Brands" exact component={Brands} />
      <Link path="/Items" exact component={Items} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
