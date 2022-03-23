import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import CreateUserForm from './components/CreateUserForm';
import GetUserForm from './components/GetUserForm';
import Toggle from './components/Toggle';

function App() {
  const [shouldShowGetUser, setShouldShowGetUser] = useState(false);
  const [user, setUser] = useState({});
  // useEffect(() => {
  //   clearQueryParams();
  //   setQueryParam('apiUrl', 'your-api-url');
  // }, [])
  return (
    <div className="App">
      <Toggle onText='Get' offText='Create' handleToggle={() => {
        setShouldShowGetUser(!shouldShowGetUser);
      }} />
      {shouldShowGetUser ? <Card title={'Get User'} description={'Enter user mail to get the user'}>{
        <>
        <GetUserForm setUser={setUser} />
        {JSON.stringify(user, null, 2)}
        </>
      }</Card> : <Card title={'Create User'} description={'Fill the required fields below'}>{<CreateUserForm />}</Card>}
    </div>
  );
}

export default App;
