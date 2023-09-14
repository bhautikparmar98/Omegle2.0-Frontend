import React, { useState } from "react";
import Header from "./components/Header/Header";
import styles from "./App.module.css";
import MainBody from "./components/MainBody/LandingPage";

function App() {
  const [currentComponentforApp, setCurrentComponentforApp] = useState<string | null>(null);
  return (
    <div className={styles["landing-page"]}>
      <Header />
      <MainBody setCurrentComponentforApp={setCurrentComponentforApp}/>
      { !(currentComponentforApp==='chatRoom')  &&
          <footer>
          <p>&copy; 2023 Omegle Clone</p>
        </footer>
      }
    </div>
  );
}

export default App;
