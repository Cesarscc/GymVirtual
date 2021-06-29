import { useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./Style/Dashboard.css";
import Deportes from "./Deportes";
import Footer from "./Footer";

import "./Style/prueba.css";
import { AudioFilled } from "@ant-design/icons";

function Dashboard() {
  let usuariobj = localStorage.getItem("usuario");
  if (!usuariobj) {
    window.location.href = "/login";
  }

  const commands = [
    {
      command: "abrir ejercicio piernas",
      callback: (website) => {
        //window.open("http://" + website.split(" ").join(""));
        window.location.replace("http://localhost:3000/niveles");
      },
    },
    {
      /*command: "color *",
      callback: (color) => {
        document.body.style.background = color;
      },*/
      command: "abrir ejercicio tríceps",
      callback: (website) => {
        window.location.replace("http://localhost:3000/niveles");
      },
    },
    {
      command: "resetear",
      callback: () => {
        handleReset();
      },
    },
    {
      command: "resetear color",
      callback: () => {
        document.body.style.background = `rgba(0, 0, 0, 0.8)`;
      },
    },
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }

  let nombres = [
    "piernas",
    "tríceps",
    "abdominales",
    "perfil",
    "cerrar sesión",
  ];

  if (transcript == nombres[0]) {
    window.location.replace("http://localhost:3000/Piernas/Niveles");
  }

  if (transcript == nombres[1]) {
    window.location.replace("http://localhost:3000/niveles");
  }

  if (transcript == nombres[2]) {
    window.location.replace("http://localhost:3000/niveles");
  }
  if (transcript == nombres[3]) {
    window.location.replace("http://localhost:3000/perfil");
  }
  if (transcript == nombres[4]) {
    localStorage.clear();
    window.location.href = "/login";
  }

  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
    console.log(transcript);
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };

  return (
    <div className="App">
      <div className="titulo">
        <h1>GYM VIRTUAL</h1>
      </div>

      <div>
        <h2 className="mensaje">¡Hora de Entrenar!</h2>
      </div>

      <Deportes />

      <div>
        <div>
          <button
            className="microphone-icon-container"
            ref={microphoneRef}
            onClick={handleListing}
          >
            <AudioFilled />
          </button>
        </div>
      </div>
      <br />
      {isListening && <button onClick={stopHandle}>Stop</button>}

      {transcript && (
        <div className="microphone-result-container">
          <div className="microphone-result-text">
            <p>{transcript}</p>
          </div>
        </div>
      )}

      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
}

export default Dashboard;
