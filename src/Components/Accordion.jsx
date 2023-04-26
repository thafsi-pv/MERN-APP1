import { useState } from "react";
import "../Components/Accordion.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Accordion = () => {
  const [faq] = useState([
    {
      id: 1,
      title: "How does react work?",
      content:
        "Content1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
    },
    {
      id: 2,
      title: "What is SPA?",
      content:
        "Content2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
    },
    {
      id: 3,
      title: "What is virtual dom?",
      content:
        "Content3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
    },
    {
      id: 4,
      title: "What is vite?",
      content:
        "Content4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.",
    },
  ]);

  const [currentActiveFaq, setCurrentActiveFaq] = useState("");

  const handleFaqView = (id) => {
    setCurrentActiveFaq((prev) => (prev == id ? "" : id));
  };

  return (
    <div className="faq">
      <div>
        <img
          className="faqbanner"
          src="https://www.cybertill.com/wp-content/uploads/2020/08/10-questions-charity.png"
          alt="faq-banner"
        />
      </div>
      <div className="faqheading">FAQ</div>
      <div className="faqlist">
        {faq.map((data) => (
          <div key={data.id} className="acccontainer">
            <div className="acctitle">
              <p>{data.title}</p>
              <span className="accview" onClick={() => handleFaqView(data.id)}>
                {data.id===currentActiveFaq ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </div>
            {data.id == currentActiveFaq && (
              <div className="accdetails">
                <p>{data.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
