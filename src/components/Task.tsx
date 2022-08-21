import { IonButton, IonItem } from "@ionic/react";


type TaskType = {
  id:number
  content:string
  done:boolean
}
type TaskProps = {
  task: TaskType;
  onChange: (id: number) => void;
  onDelete: (id: number) => void;
};
export function Task({ task, onChange, onDelete }: TaskProps) {
  return(
    <IonItem>
      <IonButton> o</IonButton>
      <p>{task.content}</p>
      <IonButton onClick={(e)=> onDelete(task.id)}>Del</IonButton>
    </IonItem>
  )
}