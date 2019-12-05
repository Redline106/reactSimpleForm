import React from "react";

function FormComponent(props) {
  return (
    <main>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          placeholder="first name"
          value={props.data.firstName}
          name="firstName"
          onChange={props.handleChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleChange}
        ></input>
        <br />
        <input
          name="age"
          value={props.data.age}
          placeholder="Age"
          onChange={props.handleChange}
        ></input>

        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.data.gender === "male"}
            onChange={props.handleChange}
          ></input>
          male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.data.gender === "female"}
            onChange={props.handleChange}
          ></input>
          female
        </label>

        <br />

        <select
          value={props.data.favColor}
          name="favColor"
          onChange={props.handleChange}
        >
          <option value="blue"> Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">orange</option>
        </select>
        <br />

        <button className="btn btn-secondary">submit</button>
      </form>
      <hr></hr>
      <h1>Entred information</h1>
    </main>
  );
}
export default FormComponent;
