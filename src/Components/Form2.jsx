import { useState } from "react";
import "../Components/form.css";

const Form = () => {
  const [fields, setFields] = useState({
    firstName: "",
    email: "",
    gender: "",
    skills: [],
    dob: "",
    location: "",
  });

  const [error, setError] = useState({ firstName: null,
  email: null,
  gender: null,
  skills: [],
  dob: null,
  location: null,});

  const handleSubmit = (event) => {
    event.preventDefault();
    // const error = validateData(fields);
    // setError(error);
    Object.entries(fields).forEach(([name, value]) => {
      const err = validateInput(name, value);
      setError((prevErrors) => ({ ...prevErrors, ...err }));
    });
    if (Object?.values(error).every((item)=>item==null)) {

        alert("Submited data is:"+ JSON.stringify(fields,null,10) )
    }
    else{

    }
  };
  var sillArray=[];
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


    const err = validateInput(name,value);
    setError((prevErrors) => ({ ...prevErrors, ...err }));
  };

  const validateInput = (name, value) => {
    const errors = {};
    switch (name) {
      case "firstName":
        if (!value.trim()) {
          errors.firstName = "First name is required";
        } else if (value.trim().length < 3) {
          errors.firstName = "Too short";
        } else errors.firstName = null;
        break;
      case "email":
        if (!value.trim()) {
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errors.email = "Invalid email address";
        } else errors.email = null;
        break;
      case "gender":
        if (!value.trim()) {
          errors.gender = "gender is required";
        } else errors.gender = null;
        break;
      case "dob":
        if (!value.trim()) {
          errors.dob = "dob is required";
        } else errors.dob = null;
        break;
      case "skills":
        if (value?.length==0) {
          errors.skills = "Please select atleast one skills";
        } else errors.skills = null;
        break;
      case "location":
        if (!value.trim()) {
          errors.location = "location is required";
        } else errors.location = null;
        break;
      default:
        break;
    }
    return errors;
  };

  return (
    <div className="container">
      <div className="formcontainer">
        <div className="containerleft">
          <div>
            <p className="formheading">Registration Form 2</p>
            <p className="formsubtitle">onChange validation</p>
          </div>
          <div className="imgdiv">
            <img
              src="https://thumbs.dreamstime.com/b/online-registration-sign-up-concept-young-man-signing-login-to-account-smartphone-app-user-interface-secure-password-194944772.jpg"
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
            <label htmlFor="genderlbl">Gender</label>
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
                  className="chkbx"
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

export default Form;
