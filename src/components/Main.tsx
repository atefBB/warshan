import { IonApp, setupIonicReact } from "@ionic/react";

import { Carousel } from "./Carousel";

setupIonicReact();

export function Main() {
  return (
    <IonApp>
      <main style={{ direction: "rtl", touchAction: "pan-y" }}>
        <Carousel />
      </main>
    </IonApp>
  );
}
