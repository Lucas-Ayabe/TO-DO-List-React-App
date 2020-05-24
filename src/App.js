import React, { useState, useEffect } from "react";
import Card, { AppCardBody as CardBody } from "./components/AppCard";
import List, { AppListItem as ListItem } from "./components/AppList";
import Search from "./components/Search";

function App() {
  const [tasks, setTasks] = useState([]);
  const task = (id, title, done = false) => {
    return {
      id,
      title,
      done,
    };
  };

  useEffect(() => {
    setTasks([
      task(1, "Acordar"),
      task(2, "Dormir"),
      task(3, "Estudar React.js"),
      task(4, "Ser incrivel", true),
    ]);
  }, []);

  const handleDelete = (id) =>
    setTasks([...tasks].filter((task) => task.id !== id));

  const toggleMark = (id) => {
    const toggledTasks = [...tasks];
    const taskIndex = toggledTasks.findIndex((task) => task.id === id);
    toggledTasks[taskIndex].done = !toggledTasks[taskIndex].done;
    setTasks(toggledTasks);
  };

  const handleChange = (id, value) => {
    const toggledTasks = [...tasks];
    const taskIndex = toggledTasks.findIndex((task) => task.id === id);
    toggledTasks[taskIndex].title = value;
    setTasks(toggledTasks);
  };

  const addTask = (title) => {
    if (tasks.length > 0) {
      const toggledTasks = [...tasks];
      const newId = toggledTasks[toggledTasks.length - 1].id + 1;
      toggledTasks.push(task(newId, title));
      setTasks(toggledTasks);
    } else {
      const toggledTasks = [task(1, title)];
      setTasks(toggledTasks);
    }
  };

  return (
    <article className="App o-container">
      <section className="o-section o-flow">
        <Card className="to-do-list">
          <CardBody>
            <h1 className="c-title -small">Lista de tarefas</h1>
            <p className="c-card__text">
              Lista de tarefas simples, feita em React.js por motivos de
              estudos.
            </p>

            <Search onSubmit={addTask} />
            <List>
              {tasks.map((task) => (
                <ListItem
                  key={task.id}
                  task={task}
                  handleChange={handleChange}
                  handleMark={toggleMark}
                  handleDelete={handleDelete}
                />
              ))}
            </List>
          </CardBody>
        </Card>
      </section>
    </article>
  );
}

export default App;
