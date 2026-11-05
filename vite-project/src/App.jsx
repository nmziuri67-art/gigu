<<<<<<< HEAD
const userData = {
  firstName: "Nika",
  lastName: "giguashvili",
  title: "student",
};

function User() {
  return (
    <div id="user" data-testid="user">
      <h1>
        {userData.firstName} {userData.lastName}
      </h1>
      <p>{userData.title}</p>
    </div>
  );
}
=======
import Header from ".components/Header.jsx"

import function getRandomInt() {
  return Math.floor(Math.random() * 3);
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}
export default App;
>>>>>>> 062ccd453266eaf482ed123e521980458e5244f4
