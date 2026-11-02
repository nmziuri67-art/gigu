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
