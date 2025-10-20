<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
<<<<<<< HEAD
import { useState } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> 6fdeb2529b26a3b8c1864a8cfd99a6d8248ba700
>>>>>>> 0009ee2387c3bcdc3b2eefe7a300986c3230a9d9
import axios from "axios";


function App() {
<<<<<<< HEAD
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then(res => setArticles(res.data.results))
      .catch(() => alert("Không tải đc tin tức"));
=======
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
>>>>>>> 0009ee2387c3bcdc3b2eefe7a300986c3230a9d9
  }, []);

  return (
    <div className="container">
<<<<<<< HEAD
      <h2>Tin tức vũ trụ</h2>
      {articles.map(a => (
        <div key={a.id} className="article">
          <img src={a.image_url} alt={a.title} className="article-img" />
          <h3>{a.title}</h3>
          <p>{a.summary}</p>
          <a href={a.url} target="_blank" rel="noreferrer">Xem chi tiết</a>
          <p><small>{new Date(a.published_at).toLocaleDateString()}</small></p>
          <hr />
        </div>
      ))}
=======
      <h2>Danh sách sinh viên</h2>
      <ul className="student-list">
        {students.map(s => (
          <li key={s.id}>
            <strong>{s.name}</strong> - <span>{s.email}</span>
          </li>
        ))}
      </ul>
>>>>>>> 6fdeb2529b26a3b8c1864a8cfd99a6d8248ba700
>>>>>>> 0009ee2387c3bcdc3b2eefe7a300986c3230a9d9
    </div>
  );
}

export default App;
