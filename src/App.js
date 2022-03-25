import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import CreateUserForm from './components/CreateUserForm';
import GetUserForm from './components/GetUserForm';
import Notification from './components/Notification';
import Toggle from './components/Toggle';

function App() {
  const [shouldShowGetUser, setShouldShowGetUser] = useState(false);
  const [user, setUser] = useState({});
  const [notificationComponent, setNotificationComponent] = useState(null);
  const setNotification = ({ title, message, type }) =>
    setNotificationComponent(
      <Notification
        title={title}
        message={message}
        type={type}
        setItself={setNotificationComponent}
      />
    );
  return (
    <div className='App'>
      {notificationComponent}
      <Toggle
        onText='Get'
        offText='Create'
        handleToggle={() => {
          setShouldShowGetUser(!shouldShowGetUser);
        }}
      />
      {shouldShowGetUser ? (
        <Card
          title={'Get User'}
          description={'Enter user mail to get the user'}
        >
          {
            <>
              <GetUserForm
                setNotification={setNotification}
                setUser={setUser}
              />
              {JSON.stringify(user, null, 2)}
            </>
          }
        </Card>
      ) : (
        <Card
          title={'Create User'}
          description={'Fill the required fields below'}
        >
          {<CreateUserForm setNotification={setNotification} />}
        </Card>
      )}
    </div>
  );
}

export default App;
