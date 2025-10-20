import { useEffect, useState } from "react";
import axios from "axios";


function App() {
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
    </div>
  );
}

export default App;
