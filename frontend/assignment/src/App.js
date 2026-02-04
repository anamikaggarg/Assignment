import axios from "axios"
import { useState, useEffect } from "react"

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [tasks, setTasks] = useState([])
  const token = localStorage.getItem("token")

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email, password
    })
    localStorage.setItem("token", res.data.token)
    alert("Login success")
  }

  const loadTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks", {
      headers: { Authorization: `Bearer ${token}` }
    })
    setTasks(res.data)
  }

  const addTask = async () => {
    await axios.post(
      "http://localhost:5000/api/tasks",
      { title },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    loadTasks()
  }

  useEffect(() => {
    if (token) loadTasks()
  }, [])

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h3 style={styles.heading}>Login</h3>

        <input
          style={styles.input}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={login}>
          Login
        </button>

        <h3 style={{ ...styles.heading, marginTop: "20px" }}>Tasks</h3>

        <input
          style={styles.input}
          placeholder="Task"
          onChange={e => setTitle(e.target.value)}
        />

        <button style={styles.button} onClick={addTask}>
          Add Task
        </button>

        {tasks.map(t => (
          <div key={t._id} style={styles.task}>
            {t.title}
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f4f6f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    width: "350px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "6px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)"
  },
  heading: {
    textAlign: "center",
    marginBottom: "10px"
  },
  input: {
    width: "100%",
    padding: "8px",
    margin: "6px 0",
    borderRadius: "4px",
    border: "1px solid #ccc"
  },
  button: {
    width: "100%",
    padding: "8px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "6px"
  },
  task: {
    backgroundColor: "#f1f1f1",
    padding: "6px",
    marginTop: "5px",
    borderRadius: "4px"
  }
}

export default App
