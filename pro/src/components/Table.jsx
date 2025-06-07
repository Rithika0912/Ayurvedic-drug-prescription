import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Table.scss";
import Data from "./Data.json";
import "./scrollbar.css";
import Mic from "./images/mic.png";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const Table = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [disease, setDisease] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");
  const [record, setRecord] = useState(listening);

  const navigate = useNavigate();
  function changeDisease(event) {
    resetTranscript();
    setDisease(event.target.value);
    console.log(disease);
  }
  function recordPress() {
    if (record) {
      setDisease(transcript);
      SpeechRecognition.stopListening();
      resetTranscript();
      setRecord(false);
    } else {
      setRecord(true);
      resetTranscript();
      SpeechRecognition.stopListening();
      SpeechRecognition.startListening();
    }
  }

  function handleDiseaseSelection(selectedDisease) {
    navigate("/description", { state: { selectedDisease } });
  }
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <section>
      <div className="search-1">
        <input
          className="search"
          type="text"
          placeholder="Type To Search"
          value={disease}
          onChange={changeDisease}
        />
        <img src={Mic} alt="mic" className="mic" onClick={()=>recordPress()} />
        
      </div>
      
      <div className="table-container">
        <table>
          <thead className="sticky-header">
            <tr>
              <th>Disease</th>
              <th>Gender</th>
              <th>Severity</th>
            </tr>
          </thead>
          <tbody>
            {Data.filter((item) => {
              return disease.toLowerCase() === ""
                ? item
                : item.DISEASE.toLowerCase().includes(disease);
            }).map((item, id) => (
              <tr key={id}>
                <a
                  href="/description"
                  onClick={() => handleDiseaseSelection(item.DISEASE)}
                >
                  <td>{item.DISEASE}</td>
                </a>
                <td>{item.GENDER}</td>
                <td>{item.SEVERITY}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default Table;
