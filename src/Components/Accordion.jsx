import { useState } from "react";
import "../Components/Accordion.css";
import {FaAngleDown,FaAngleUp} from 'react-icons/fa'

const Accordion = () => {
  const [faq, setFaq] = useState([
    {
      id: 1,
      title: "How does react work?",
      content:
        "Content1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
      viewDetails: false,
    },
    {
      id: 2,
      title: "What is SPA?",
      content:
        "Content2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
      viewDetails: false,
    },
    {
      id: 3,
      title: "What is virtual dom?",
      content:
        "Content3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
      viewDetails: false,
    },
    {
      id: 4,
      title: "What is vite?",
      content:
        "Content4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
      viewDetails: false,
    },
  ]);

  const [faqDetails, setFaqDetails] = useState(false);

  const handleFaqView = (i) => {
    console.log("🚀 ~ file: Accordion.jsx:15 ~ handleFaqView ~ i:", i);
    const newlist = faq.map((item, index) => {
      if (i === index && item.viewDetails == false) {
        return { ...item, viewDetails: true };
      } else {
        return { ...item, viewDetails: false };
      }
    });
    setFaq(newlist);
  };

  return (
    <div className="faq">
      <div>
        <img
          className="faqbanner"
          src="https://www.cybertill.com/wp-content/uploads/2020/08/10-questions-charity.png"
          alt=""
        />
      </div>
      <div className="faqheading">FAQ</div>
      <div className="faqlist">
        {faq.map((f, index) => (
          <div key={index} className="acccontainer">
            <div className="acctitle">
              <p>{f.title}</p>
              <span className="accview" onClick={() => handleFaqView(index)}>
                {f.viewDetails ? <FaAngleUp/> : <FaAngleDown/>}
              </span>
            </div>
            {f.viewDetails ? (
              <div className="accdetails">
                <p>{f.content}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
