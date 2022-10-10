import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Medical Check-Up",
      day: "September 3rd",
      reminder: false,
    },
    {
      id: 2,
      text: "Date With Sharon",
      day: "September 15th",
      reminder: true,
    },
    {
      id: 3,
      text: "Foof Shopping",
      day: "September 7th",
      reminder: false,
    },
    {
      id: 4,
      text: "Meeting at the Office",
      day: "September 4th",
      reminder: true,
    },
  ]);

  //AddTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() + 10000) + 1;
    console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //Delerte TAsk
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //ToggleReminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
