"use client";
import React, { useState, useEffect } from "react";

const Ruleta = () => {
  const [rotation, setRotation] = useState(0); // Almacena la rotación acumulada
  const [resultado, setResultado] = useState(""); // Resultado del giro
  const [girado, setGirado] = useState(false); // Estado para saber si ya giró
  const [cupon, setCupon] = useState(null); // Cupon que se muestra

  const descuentos = [
    { descuento: "5% OFF", codigo: "DESC5OFF" },
    { descuento: "ENVÍO GRATIS", codigo: "ENVIOGRATIS" },
    { descuento: "$10.000", codigo: "10MILGRATIS" },
    { descuento: "50% OFF", codigo: "DESC50OFF" },
    { descuento: "20% OFF", codigo: "DESC20OFF" },
    { descuento: "10% OFF", codigo: "DES10OFF" },
    { descuento: "$5.000", codigo: "5MILGRATIS" },
    { descuento: "NO HAY PREMIO", codigo: "" },
  ];

  useEffect(() => {
    const giradoSession = sessionStorage.getItem("girado");
    const cuponSession = sessionStorage.getItem("cupon");
    if (giradoSession === "true" && cuponSession) {
      setGirado(true);
      setCupon(JSON.parse(cuponSession));
    }
  }, []);

  // Función para calcular el índice del segmento seleccionado
  const getSelectedIndex = (finalRotation) => {
    const anglePerSection = 360 / descuentos.length; // Tamaño de cada sección
    const adjustedAngle = finalRotation % 360; // Mantener el ángulo entre 0 y 360
    const selectedIndex =
      Math.floor((360 - adjustedAngle) / anglePerSection) % descuentos.length; // Cálculo del índice
    console.log({ finalRotation, adjustedAngle, selectedIndex }); // Debug
    return selectedIndex;
  };

  // Función para girar la ruleta
  const handleSpin = () => {
    if (girado) return; // Impedir que se gire de nuevo

    const randomSpin = Math.floor(Math.random() * 360) + 720; // Giro entre 720 y 1080 grados
    const finalRotation = (rotation + randomSpin) % 360; // Rotación final en el rango [0, 360)

    setRotation(rotation + randomSpin); // Acumular la rotación
    setGirado(true);
    sessionStorage.setItem("girado", "true"); // Guardar que ya giró

    // Calcular el resultado tras el giro
    setTimeout(() => {
      const selectedIndex = getSelectedIndex(finalRotation); // Índice seleccionado
      const resultadoSeleccionado = descuentos[selectedIndex];
      setResultado(resultadoSeleccionado);
      setCupon(resultadoSeleccionado);
      sessionStorage.setItem("cupon", JSON.stringify(resultadoSeleccionado)); // Guardar el cupón
    }, 5000); // Esperar el tiempo de la animación
  };

  const handleCloseModal = () => {
    setResultado("");
  };

  return (
    <div style={{ textAlign: "center", margin: "2rem auto" }}>
      <h1 style={{ fontSize: "2rem", color: "#333", marginBottom: "1.5rem" }}>
        ¡Girá la ruleta y descubrí tu regalo!
      </h1>
      <div className="ruleta-container">
        <div
          className="ruleta"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 5s ease-out", // Transición suave
          }}
        >
          {descuentos.map((item, index) => (
            <div
              key={index}
              className={`segment ${index}`}
              style={{
                transform: `rotate(${(360 / descuentos.length) * index}deg)`,
              }}
            >
              {item.descuento}
            </div>
          ))}
        </div>
        <div className="arrow"></div>
      </div>
      <button onClick={handleSpin} className="spin" disabled={girado}>
        Girar
      </button>

      {resultado && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>¡Felicidades!</h2>
            <p>
              Has ganado: <strong>{resultado.descuento}</strong>
            </p>
            {resultado.codigo && (
              <p>
                Código: <strong>{resultado.codigo}</strong>
              </p>
            )}
            <button onClick={handleCloseModal} className="modal-button">
              Cerrar
            </button>
          </div>
        </div>
      )}

      {cupon && cupon.descuento !== "NO HAY PREMIO" && (
        <div className="cupon-container">
          <p>
            Tu cupón es: <strong>{cupon.codigo}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Ruleta;

