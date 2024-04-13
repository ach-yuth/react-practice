import "./App.css";
export default function App() {
  const name = <h1>ramakanth</h1>;
  const userName = "ramakanth";
  const planets = [
    { name: "earth", isGasPlanet: true },
    { name: "venus", isGasPlanet: true },
    { name: "jupiter", isGasPlanet: false },
    { name: "saturn", isGasPlanet: true },
    { name: "neptune", isGasPlanet: false },
    { name: "mars", isGasPlanet: true },
    { name: "pluto", isGasPlanet: true },
  ];
  const user = (
    <div>
      {name}
      {userName}
    </div>
  );
  const age = 18;
  const isGreen = true;
  const names = ["ram", "laxman", "seetha", "bharat", "shatragna"];
  return (
    <div className="container">
      {/* conditional statements using in objects */}

      {planets.map(
        (planet, key) => planet.isGasPlanet && <h2>{planet.name}</h2>
      )}

      {/* compnents by using props */}

      <Job
        salary={90000}
        position="senior developer"
        company="Tata consultancy service"
      />

      {name}
      <h2>{userName}</h2>
      {user}

      <div>
        {/* ternary operator using  */}

        {age >= 18 ? <h1>over age</h1> : <h2>under age</h2>}
      </div>

      {/* changing styles by condition */}

      <h2 style={{ color: isGreen ? "green" : "red" }}>This is a color</h2>

      {/* if  age is declared then button is displayed */}

      {age && <button>This is a button</button>}

      {/* array */}
      {names.map((name, key) => {
        return <h1 index={key}>{name.toUpperCase()}</h1>;
      })}

      {/* displaying gasPlanets using conditional statements in objects */}

      {planets.map((planet, key) => {
        return (
          <div>
            {!planet.isGasPlanet && <Planets index={key} name={planet.name} />}
          </div>
        );
      })}
    </div>
  );
}
//react component variable must be declared with capital letter & it returns a single html element
const Job = (props) => {
  return (
    <div>
      <h3>{props.position}</h3>
      <h1>{props.salary}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};
// react component
const Planets = (props) => {
  return (
    <h1>
      {props.name.toUpperCase()} {props.isGasPlanet}
    </h1>
  );
};
