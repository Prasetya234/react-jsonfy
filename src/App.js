import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Users from './component/Users';
import Posts from './component/Posts';
import Comments from './component/Comments';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Link path="/" exact component={Users} />
      <Link path="/Posts" exact component={Posts} />
      <Link path="/Comments" exact component={Comments} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
