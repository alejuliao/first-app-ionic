import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

export function Tab1() {
  const [state, setState] = useState(0)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{state}</IonTitle>

          </IonToolbar>
        </IonHeader>
        <IonContent> 

          <div>
          <h1>{state}</h1>
          </div>
          <IonButton onClick={()=>setState(state+1)}> Mais</IonButton>
          <IonButton onClick={()=>setState(state-1)}> Menos</IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
