import React from "react";
import { useSelector } from "react-redux";

const ServiceDetail = () => {
  const data = [
    {
      title: "Tailored strategies",
      text: "We understand that every business is unique. That's why we take the time to understand your goals, target audience, and industry to create customized strategies that align with your specific needs.   ",
    },
    {
      title: "data-driven insights",
      text: "Our approach is rooted in data. By utilizing advanced analytics tools, we gather valuable insights about your audience's behavior, preferences, and engagement patterns. This data drives our decision-making process, ensuring optimal results for your marketing campaigns..",
    },
  ];

  const data2 = [
    {
      title: "Mechanical approach",
      text: "In the digital realm, it's not enough to focus on a single platform. We leverage the power of multiple channels, including search engines, social media, email marketing, and more, to maximize your online reach and impact.",
    },
    {
      title: "content excellence",
      text: "Compelling content is the backbone of successful digital marketing. Our skilled content creators develop engaging and relevant content that resonates with your audience, enhances your brand's reputation, and drives organic traffic to your website.",
    },
  ];

  const state = useSelector((state) => state);
  const darkCheck = state.dark % 2;

  return (
    <div id="service-detail">
      <p id="benefit-title" className={darkCheck === 1 && "benefit-title-dark"}>
        WHAT KIND OF WEBSITES DO WE CREATE?
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

      <br />
      <br />

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
