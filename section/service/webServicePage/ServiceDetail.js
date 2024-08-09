import React from "react";
import { useSelector } from "react-redux";

const ServiceDetail = () => {
  const data = [
    {
      title: "Analysis and definition of tasks",
      text: "During development of Mobile App UI/UX design, we scrupulously collect information about your project, investigate its target audience, and determine possible strategic steps. After a detailed discussion of the project, we determine the best possible website format, design strategy, and its key tasks.",
    },
    {
      title: "Design of the structure",
      text: "Building on the Mobile App UI/UX purpose and its pre-set tasks, we will design a convenient and logical website structure. This skeleton will be designed in such a way that allows managing the users’ actions and attention in future.",
    },
  ];

  const data2 = [
    {
      title: "market research",
      text: "We closely scrutinise the specificity of your business, the situation in the market of your goods or services, and the opportunities of your competitors. Moreover, benchmarking - — a thorough analysis of the industry and its successful players — is mandatory for each project.",
    },
    {
      title: "Drawing a unique design",
      text: "When creating a App screens, we think through possible user scenarios, create a large number of working layouts and prototypes, and then we carefully draw each detail of the user interface. Focusing on all visual website’s elements that can be drawn, we never miss out any important detail. ",
    },
  ];

  const state = useSelector((state) => state);
  const darkCheck = state.dark % 2;

  return (
    <div id="service-detail">
      <p id="benefit-title" className={darkCheck === 1 && "benefit-title-dark"}>
        Stages of MOBILE APPS DESIGN & DEVELOPMENT:{" "}
      </p>

      <div id="landing-comp">
        <div>
          {data.map((res) => {
            return (
              <div id="landing-div">
                <p
                  id="landing-title"
                  className={darkCheck === 1 && "landing-title-dark"}
                >
                  {res.title}
                </p>
                <p
                  id="landing-text"
                  className={darkCheck === 1 && "landing-text-dark"}
                >
                  {res.text}
                </p>
              </div>
            );
          })}
        </div>
        <div>
          {data2.map((res) => {
            return (
              <div id="landing-div">
                <p
                  id="landing-title"
                  className={darkCheck === 1 && "landing-title-dark"}
                >
                  {res.title}
                </p>
                <p
                  id="landing-text"
                  className={darkCheck === 1 && "landing-text-dark"}
                >
                  {res.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div id="btn-container">
        <span id="qoute-btn"
         onClick={()=>{
          window.open("https://calendly.com/tezeract-io/meet","_blank")
         }}
        >Get A Quote</span>
      </div>
    </div>
  );
};

export default ServiceDetail;
