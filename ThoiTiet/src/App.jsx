<<<<<<< HEAD
import { useState } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> 6fdeb2529b26a3b8c1864a8cfd99a6d8248ba700
import axios from "axios";


function App() {
<<<<<<< HEAD
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
=======
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setStudents(res.data))
      .catch(() => alert("Lỗi tải danh sách sinh viên"));
  }, []);

  return (
    <div className="container">
      <h2>Danh sách sinh viên</h2>
      <ul className="student-list">
        {students.map(s => (
          <li key={s.id}>
            <strong>{s.name}</strong> - <span>{s.email}</span>
          </li>
        ))}
      </ul>
>>>>>>> 6fdeb2529b26a3b8c1864a8cfd99a6d8248ba700
    </div>
  );
}

export default App;
