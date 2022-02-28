import { useState } from "react";
import "../styles.css";
import axios from "axios";

function Form() {
  const [formFields, setFormFields] = useState([{ value: "" }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index]["value"] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(`https://makemovesbackend.arasdean.repl.co/survey`, {
        options: formFields
      })
      .then((response) => {
        console.log("received");
        const res = response.data;
        console.log(res);
      })
      .catch((error) => {
        console.log("ERROR");
        console.log(error);
        // this.setState({error});
      });
  };

  const addFields = () => {
    let object = {
      value: ""
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className="Form">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Option A"
                onChange={(event) => handleFormChange(event, index)}
                value={form.value}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          );
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Form;
