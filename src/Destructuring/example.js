// App.js   (like when we want pass a lot of data in this way)

import React from 'react';
import ChildComponent from './ChildComponent';

const App = () => {
  // Define a lot of data
  const userData = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
    // Add more data as needed...
  };

  const userSettings = {
    theme: 'dark',
    language: 'en',
    // Add more settings as needed...
  };

  // Pass the data to the child component
  return <ChildComponent userData={userData} userSettings={userSettings} />;
};

export default App;



/////////////////////////////////////////////////////////////////////////////



// ChildComponent.js

import React from 'react';

const ChildComponent = ({ userData, userSettings }) => {
  // Destructure the props to access the data
  const { name, age, email } = userData;
  const { theme, language } = userSettings;

  // Use the data in the child component
  return (
    <div>
      <h2>User Data:</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>

      <h2>User Settings:</h2>
      <p>Theme: {theme}</p>
      <p>Language: {language}</p>
    </div>
  );
};


