import { useEffect, useState } from "react";
import a11yChecker from "a11y-checker";
import img from "../assets/baby_yoda.jpeg";
import "./home.css";

function Home() {
  const [isDialogOpen, toggleDialog] = useState(false);

  useEffect(() => {
    a11yChecker();
  }, []);

  return (
    <div data-role="page">
      <h1>Título de página</h1>
      <section>
        <h2>Título de seção</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </section>
      <section>
        <details>
          <summary>Titulo de área colapsavel 1</summary>
          <p> Texto de área colapsavel 1</p>
        </details>
        <details>
          <summary>Titulo de área colapsavel 2</summary>
          <p> Texto de área colapsavel 2</p>
        </details>
      </section>
      <section>
        <button title="Fechar modal" onClick={() => toggleDialog(true)}>
          Abrir janela modal
        </button>
        <dialog open={isDialogOpen} className="dialog">
          Modal
          <button onClick={() => toggleDialog(false)}>x</button>
        </dialog>
      </section>
      <section>
        <img src={img} alt="Grogu sendo a coisa mais fofa desse mundo todo" />
      </section>
      <a href="https://github.com">Clique para abrir o github!</a>
    </div>
  );
}

export default Home;
