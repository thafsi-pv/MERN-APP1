import { useState } from "react";
import "../Components/Accordion.css";

const Accordion = () => {
  const [faq, setFaq] = useState([
    { id: 1, title: "FAQ 1", content: 'Content1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.',viewDetails:false },
    { id: 2, title: "FAQ 2", content: 'Content2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.',viewDetails:false },
    { id: 3, title: "FAQ 3", content: 'Content3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.',viewDetails:false },
    { id: 4, title: "FAQ 4", content: 'Content4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoest commodi unde. Ducimus beatae eveniet.',viewDetails:false },
  ]);

  const [faqDetails, setFaqDetails] = useState(false);

  const handleFaqView = (i) => {
    console.log("🚀 ~ file: Accordion.jsx:15 ~ handleFaqView ~ i:", i)
    const newlist = faq.map((item, index) => {
      if (i === index && item.viewDetails==false) {
        return { ...item, viewDetails: true };
      } else {
        return { ...item, viewDetails: false };
      }
    });

    setFaq(newlist);
  };

  return (
    <div className="faq">
      {faq.map((f, index) => (
        <div key={index} className="acccontainer">
          <div className="acctitle">
            <p>{f.title}</p>
            <button className="accview" onClick={() => handleFaqView(index)}>
              {f.viewDetails?'Hide':'Show'}
            </button>
          </div>
          {f.viewDetails ? (
            <div className="accdetails">
              <p>
               {f.content}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
