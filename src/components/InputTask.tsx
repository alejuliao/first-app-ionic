import { IonButton, IonInput, IonItem } from "@ionic/react";
import { useState } from "react";

interface InputChangeEventDetail {
  value: string | undefined | null;
}
interface InputCustomEvent extends CustomEvent {
  detail: InputChangeEventDetail;
  target: HTMLIonInputElement;
}
type InputProps = {
  onCreateTask: (taskContent: string) => void;
};

export function InputTask({ onCreateTask }: InputProps){
  const [inputText, setInputText] = useState("");
  //   function handleKeyUp(e: KeyboardEvent) {
  //   if (e.code === "Enter" && inputText !== "") {
  //     onCreateTask(inputText);
  //     setInputText("");
  //   }
  // }

  function createTask() {
    if (inputText !== "") {
      onCreateTask(inputText);
      setInputText("");
    }
  }

  return (

    <div>
       <IonItem>
            <IonInput value={inputText} placeholder="Digit uma tarefa" onIonChange={(e) => setInputText(e.detail.value!)} 
            enterkeyhint="enter"
            // onKeyPress={handleKeyUp}
            ></IonInput>
          </IonItem>
          <IonButton onClick={createTask}> Criar</IonButton>
  </div>
    )
}