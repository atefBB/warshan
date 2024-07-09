import { lazy } from "react";
import { IonApp, setupIonicReact } from "@ionic/react";

const Page = lazy(() => import("./Page"));

setupIonicReact();

export function Main() {
  return (
    <IonApp>
      <main style={{ direction: "rtl", touchAction: "pan-y" }}>
        <Page />
      </main>
    </IonApp>
  );
}
