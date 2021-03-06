import { LoginPage, AnonJournalsHomePage, ExistingUserJournalsHomePage, CreatePost, ViewJournals } from './components/index';
import { Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <Route path='/' exact render={(props) => (
          <LoginPage />
      )} />

      <Route path='/home' exact render={(props) => (
          <AnonJournalsHomePage />
      )} />

      <Route path='/user/home' exact render={(props) => (
          <ExistingUserJournalsHomePage />
      )} />

      <Route path='/user/create-post' exact render={(props) => (
          <CreatePost />
      )} />

      <Route path='/user/view-journals' exact render={(props) => (
          <ViewJournals />
      )} />
    </div>
  );
}

export default App;
