import { useState } from "react";
import "../Form/Form.css";

const Form1 = () => {
  const [fields, setFields] = useState({
    firstName: "",
    email: "",
    gender: "",
    skills: [],
    dob: "",
    location: "",
  });

  const [error, setError] = useState({});
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const error = validateData(fields);
    setError(error);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.value
        : event.target.value;

    if (name === "skills") {
      let isCheked = event.target.checked;
      if (isCheked) {
        setFields((prev) => ({
          ...prev,
          skills: [...prev.skills, value],
        }));
      } else {
        setFields((prev) => ({
          ...prev,
          skills: prev.skills.filter((skill) => skill != value),
        }));
      }
    } else {
      setFields((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateData = (data) => {
    
    const errors = {};
    if (!data.firstName) {
      errors.firstName = "Please enter your first name";
    }
    if (!data.email) {
      errors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!data.gender) {
      errors.gender = "please select gender";
    }
    if (data.skills.length === 0) {
      errors.skills = "Please select atleast one skill";
    }
    if (!data.dob) {
      errors.dob = "Please select your date of birth";
    }
    if (!data.location) {
      errors.location = "Please select your location";
    }

    return errors;
  };

  return (
    <div className="container">
      <div className="formcontainer">
        <div className="containerleft">
          <div>
            <p className="formheading">Registration Form 1</p>
            <p className="formsubtitle">onSubmit validation</p>
          </div>
          <div className="imgdiv">
            <img
              src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg"
              alt=""
            />
          </div>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="input">
            <label htmlFor="fn">First Name</label>
            <input
              type="text"
              name="firstName"
              id="fn"
              onChange={handleChange}
            />
            <span className="errormsg">{error.firstName}</span>
          </div>
          <div className="input">
            <label htmlFor="em">Email</label>
            <input type="email" name="email" id="em" onChange={handleChange} />
            <span className="errormsg">{error.email}</span>
          </div>
          <div className="input gender">
            <label htmlFor="">Gender</label>
            <div className="radiobtn">
              <label htmlFor="male" className="genderlbl">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  value="Male"
                  onChange={handleChange}
                />
                <span>Male</span>
              </label>
              <label htmlFor="female" className="genderlbl">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  value="Female"
                  onChange={handleChange}
                />
                <span>Female</span>
              </label>
            </div>
            <span className="errormsg">{error.gender}</span>
          </div>
          <div className="skillsdiv input ">
            <div>
              <label htmlFor="">Skills</label>
            </div>
            <div className="chkbox">
              <label htmlFor="js">
                <input
                  type="checkbox"
                  name="skills"
                  id="js"
                  value="JavaScript"
                  onChange={handleChange}
                />
                <span>JavaScript</span>
              </label>
              <label htmlFor="html">
                <input
                  type="checkbox"
                  name="skills"
                  id="html"
                  value="HTML"
                  onChange={handleChange}
                />
                <span>HTML</span>
              </label>
              <label htmlFor="css">
                <input
                  type="checkbox"
                  name="skills"
                  id="css"
                  value="CSS"
                  onChange={handleChange}
                />
                <span>CSS</span>
              </label>

              <label htmlFor="php">
                <input
                  type="checkbox"
                  name="skills"
                  id="php"
                  value="PHP"
                  onChange={handleChange}
                />
                <span>PHP</span>
              </label>
            </div>
            <span className="errormsg">{error.skills}</span>
          </div>
          <div className="input">
            <label htmlFor="dob">Date of birth</label>

            <input type="date" name="dob" id="dob" onChange={handleChange} />
            <span className="errormsg">{error.dob}</span>
          </div>
          <div className="input">
            <label htmlFor="loc">Location</label>

            <select name="location" id="loc" onChange={handleChange}>
              <option value="">Select</option>
              <option value="India">India</option>
              <option value="UAE">UAE</option>
              <option value="Qatar">Qatar</option>
            </select>
            <span className="errormsg">{error.location}</span>
          </div>
          <div className="btndiv">
            <button className="btnsubmit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form1;
