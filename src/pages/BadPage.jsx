import { useEffect, useState } from "react";
import a11yChecker from "a11y-checker";
import img from "../assets/baby_yoda.jpeg";

function BadPage() {
  const [isDialogOpen, toggleDialog] = useState(false);
  const [isCollapseOpen, toggleCollapse] = useState(false);

  useEffect(() => {
    a11yChecker();
  }, []);

  return (
    <div>
      <h1>Título de página</h1>
      <h1>Título de página</h1>
      <div>
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
      </div>
      <div>
        <div onClick={() => toggleCollapse(!isCollapseOpen)}>
          Titulo de área colapsavel 1
        </div>
        {isCollapseOpen && <p> Texto de área colapsavel 1</p>}
      </div>
      <div>
        <button onClick={() => toggleDialog(true)}>Abrir janela modal</button>
        {isDialogOpen && (
          <div>
            Modal
            <button onClick={() => toggleDialog(false)}>x</button>
          </div>
        )}
      </div>
      <img src={img} />
      <p>
        <a href="https://github.com">Clique aqui!</a>
      </p>
    </div>
  );
}

export default BadPage;
