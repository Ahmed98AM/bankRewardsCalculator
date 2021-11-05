import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [formData, setFormData] = useState({});
  const [formButtonCorpName, setFormButtonCorpName] = useState("");

  const onFormSubmitHandler = function (formData) {
    setFormData(formData);
  };
  const onFormButtonCorpNameChangedHandler = function (corpName) {
    if (Object.keys(formData).length !== 0) setFormButtonCorpName(corpName);
  };

  return (
    <div className="calculator-box">
      <h2>Calculator</h2>
      <Form
        onFormSubmit={onFormSubmitHandler}
        onFormButtonCorpNameChanged={onFormButtonCorpNameChangedHandler}
      />
      <Result formData={formData} formButtonCorpName={formButtonCorpName} />
    </div>
  );
}

export default App;
