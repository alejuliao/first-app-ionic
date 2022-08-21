import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
// import { v1 as uuid } from 'uuid';
import { useState } from 'react';
import { InputTask } from '../components/InputTask';
import { Task } from '../components/Task';
type TaskType = {
  id:number
  content:string
  done:boolean
}
export function Todo() {
const [tasks, setTasks] = useState<TaskType[]>([
  {
    id: 23123123,
    content: "Estudar",
    done: false,
  },
  {
    id: 2315312,
    content: "Trabalhar",
    done: true,
  },
]);
function handleAddTask(taskContent: string) {
  if (taskContent === "") return;
  const id = Math.random() * 100;
  const newTask = {
    id: id,
    content: taskContent,
    done: false,
  };
  setTasks(
    [...tasks, newTask].sort((x, y) => Number(x.done) - Number(y.done))
  );
}
function handleTaskChange(id: number) {
  const newTasks = tasks.map((task: TaskType) => {
    if (task.id === id) {
      task.done = !task.done;
    }
    return task;
  });
  setTasks(newTasks.sort((x, y) => Number(x.done) - Number(y.done)));
}
function handleTaskDelete(id: number) {
  const newTasks = tasks.filter((task) => task.id !== id);
  setTasks(newTasks);
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <InputTask onCreateTask={handleAddTask} />
 <IonList>

       { tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onChange={handleTaskChange}
                onDelete={handleTaskDelete}
              />
              ))}
              </IonList>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

