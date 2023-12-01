import "./styles.css";

function Greeting({ name }) {
  return <h1>Hello {name} </h1>;
}

export default function App() {
  return (
    <div>
      <Greeting name={"Julia"} />
      <Greeting name={"Anna"} />
    </div>
  );
}
