import React, {useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UpdateIcon from "@material-ui/icons/Update";

import "./Style/Basico.css";
import Footer from "./Footer";
import Subcategoria from "./Subcategoria";
import Titulo from "./Titulo";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { AudioFilled } from "@ant-design/icons";

function Basico() {
  let userobj = localStorage.getItem("usuario");
  if (!userobj) {
    window.location.href = "/login";
  }
  let user = JSON.parse(userobj);

  const [ejercicios, setEjercicios] = useState(null);

  const [random, setRandom] = useState(1);

  let match = useParams();

  useEffect(() => {
    if (ejercicios === null || random === 1) {
      return fetch(
        `http://localhost:4000/api/exercise/exercises/${match.nameCategory}/${match.level}`,
        {
          crossDomain: true,
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (!data.error) {
            //console.log(data.data);
            setEjercicios(data.data);
            setRandom(0);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [random, match.level, match.nameCategory, ejercicios]);

  const getRandomExercises = () => {
    setRandom(1);
  };

  const postRoutine = async () => {
    const exerciseIds = ejercicios.map((ejercicio) => ejercicio._id);

    const len = ejercicios.length - 1;

    try {
      const response = await fetch(`http://localhost:4000/api/routine/createroutine`, {
        crossDomain: true,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          exerciseIds: exerciseIds,
          userId: user._id,
          exercises: ejercicios,
        }),
      });
      const data = await response.json();
      if (!data.error) {
        //console.log(data);
        const rutina = {
          ejercicios: data.exerciseIds,
          tamaño: data.exerciseIds.length - 1,
          ganancia: 0
        }
        //console.log(rutina);
        localStorage.setItem("rutina", JSON.stringify(rutina));
        window.location.href = `/rutina/${data._id}/0`;
      }
    } catch (error) {
      return console.log(error);
    }
  };


  const commands = [
    {
      command: "gymvirtual *",
      callback: (website) => {
        //window.open("http://" + website.split(" ").join(""));
        window.location.replace("http://localhost:3000/Piernas/Niveles");
      },
    },
    {
      command: "borrar",
      callback: () => {
        handleReset();
      },
    }
  ];

  let nombres = [
    "iniciar",
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);



  /*useEffect(() => {
    
  }, [transcript,nombres]);*/




  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }

  

  if (transcript === nombres[0]) {
    postRoutine();
    //window.location.replace("http://localhost:3000/Piernas/Niveles");
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
      <div>
        <Titulo />

        <div className="Containers">
          <div className='TittleCategory'>
            <div Style="margin-left:30px"><h1 Style="color:white">{match.nameCategory}</h1></div>
            <div><button className="update" onClick={getRandomExercises}><UpdateIcon fontSize= "large" /></button></div>
          </div>
          
        </div>

      <div className="nota">
        <div className="pregunta">
          ¿Listo para empezar?
        </div>
        <div className="boton-basico">
          <button
              className="microphone-icon-container"
              ref={microphoneRef}
              onClick={handleListing}
            >
              <AudioFilled />
            </button>
      </div>
      </div>

        <div>
            {ejercicios && ejercicios.map((ejercicio, i=1) => (
                <div className="container" key={ejercicio._id}>
                    <Subcategoria title={ejercicio.tittle} image={ejercicio.exercisePhoto} id={i = i+1}/>
                </div>
            ))}
        </div>
      
      <br />
      <br/>
        <div>
            <button type="button" class="btn btn-danger" onClick={postRoutine}>
              INICIAR
            </button>
        </div>

        <footer className="foot">
            <Footer />
        </footer>
      </div>
  );
}

export default Basico;
