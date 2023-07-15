const TodoApp = ({ taskname, id, deleted, completed, updateTask }) => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      taskName: tasks,
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
    };
    setList([...list, task]);
  };

  const tasks = list.map((task) => (
    <Task
      id={task.id}
      taskName={task.taskName}
      deleteTask={deleteTask}
      updateTask={updateTask}
      completed={task.completed}
    />
  ));

  return (
    <div className="w-screen h-screen bg-slate-100 text-center p-20 ">
      <input
        type="text"
        onChange={handleChange}
      />
      <button className="bg-green-300">Add new task</button>
      <div>{tasks}</div>
    </div>
  );

  return (
    <div className="container">
      <h1>{taskname}</h1>
      <button></button>
    </div>
  );
};
export default TodoApp;
