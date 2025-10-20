import { useState } from "react";
import axios from "axios";


function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return alert("Nhập tên thành phố trước!");
    try {
      const res = await axios.get(`https://wttr.in/${city}?format=j1`);
      setWeather(res.data.current_condition[0]);
    } catch {
      alert("Không tìm thấy thành phố!");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Ứng dụng Thời tiết</h2>
      <input
        placeholder="Nhập tên thành phố..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Xem</button>

      {weather && (
        <div style={{ marginTop: 20 }}>
          <p>Nhiệt độ: {weather.temp_C}°C</p>
          <p>Tình trạng: {weather.weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
}

export default App;
