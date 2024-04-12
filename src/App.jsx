import "./App.css";
export default function App() {
  const name = <h1>ramakanth</h1>;
  const userName = "ramakanth";
  const user = (
    <div>
      {name}
      {userName}
    </div>
  );

  return (
    <div className="container">
      <Job
        salary={90000}
        position="senior developer"
        company="Tata consultancy service"
      />
      {name}
      <h2>{userName}</h2>
      {user}
    </div>
  );
}

const Job = (props) => {
  return (
    <div>
      <h3>{props.position}</h3>
      <h1>{props.salary}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};
