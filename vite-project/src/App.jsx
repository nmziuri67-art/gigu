function CoreConcept(props) {
  return (
    <li>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="var moswavle vswavlob rekts 16 wlis."
            />
            <CoreConcept title="compon" description="i live in tbilisi" />
            <CoreConcept title="Props" description="i go to N77 school." />
            <CoreConcept title="jsx" description="i am learning react rn" />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
