import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Twitter from '../components/Twitter';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Twitter API</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Twitter</IonTitle>
          </IonToolbar>
        </IonHeader>
        Calling Twitter components
        <Twitter></Twitter>
      </IonContent>
    </IonPage>
  );
};

export default Home;
