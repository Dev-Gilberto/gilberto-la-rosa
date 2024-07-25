import { useEffect, useState } from "react";
const fetchClima =
  "http://api.openweathermap.org/geo/1.0/zip?zip=E14,GB&appid=b4e7c650fbdb51c72239f49aab49ee63";

const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchClima().then((response) => setData(response.data));
  }, []);

  if (!data) return <div>Cargando...</div>;

  return (
    <div>
      <h2>Clima en Santiago, Chile</h2>
      <p>Temperatura: {} °C</p>
      <p>Descripción: {}</p>
    </div>
  );
};

export default Weather;
