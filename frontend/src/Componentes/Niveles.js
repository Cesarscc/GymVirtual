import { useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./Style/Niveles.css";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";

import "./Style/prueba.css";
import { AudioFilled } from "@ant-design/icons";
import Titulo from "./Titulo";

function Niveles() {
  let match = useParams();
  let usuariobj = localStorage.getItem("usuario");
  if (!usuariobj) {
    window.location.href = "/login";
  }

  const commands = [
    {
      command: "abrir *",
      callback: (website) => {
        window.location.replace("http://" + website.split(" ").join(""));
      },
    },
    {
      command: "resetear",
      callback: () => {
        handleReset();
      },
    }
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

  let nombres = ["nivel básico", "nivel intermedio", "nivel avanzado", "personalizado", "regresar"];

 
  if (transcript === nombres[0]) {
    window.location.replace(`http://localhost:3000/${match.nameCategory}/Básico/Seleccion`);
  }

  if (transcript === nombres[1]) {
    window.location.replace(`http://localhost:3000/${match.nameCategory}/Intermedio/Seleccion`);
  }

  if (transcript === nombres[2]) {
    window.location.replace(`http://localhost:3000/${match.nameCategory}/Avanzado/Seleccion`);
  }
  if (transcript === nombres[3]) {
    window.location.replace("http://localhost:3000/basico");
  }
  if (transcript === nombres[4]) {
    window.location.replace("http://localhost:3000/dashboard");
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
      
      <Titulo />
      <br/>
      <div className="niveles">
        <div className="aaaa">
          <h2 className="nombre_nivel">Elige el nivel para {match.nameCategory}</h2>
          
        <div className="aaaaa">
          <button
            className="microphone-icon-container"
            ref={microphoneRef}
            onClick={handleListing}
          >
            <AudioFilled />
          </button>
        </div>
          <br />
          <br />
          <br />
          <br />
          
        </div>

        <Link to={`/${match.nameCategory}/Básico/Seleccion`}>
          <div className="basico">BASICO</div>
        </Link>
        <Link to={`/${match.nameCategory}/Intermedio/Seleccion`}>
          <div className="intermedio">INTERMEDIO</div>
        </Link>
        <Link to={`/${match.nameCategory}/Avanzado/Seleccion`}>
          <div className="avanzado">AVANZADO</div>
        </Link>
        
      </div>

      
      <br />

      <footer className="foot">
        <Footer />
      </footer>
    </div>
  );
}

export default Niveles;
