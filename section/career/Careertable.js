import React from "react";
import { useSelector } from "react-redux";
import { RxArrowRight } from "react-icons/rx";
import img from "../../assets/form-img.png"

const Careertable = () => {
  const state = useSelector((state) => state);
  const darkCheck = state.dark % 2;

  const data = [
    { location: "Onsite", experience: 2, title: "Project Manger" },
    { location: "Remote", experience: 2, title: "Lead Generation Manger" },
    { location: "Onsite", experience: 2, title: "Sales Manger" },
  ];

  return (
    <div id="career-page">
      <p id="opening-title" className={darkCheck && "heading-dark"}>
        CURRENT OPENINGS
      </p>

      <div id="career-table">
        <div id="career-table1" className={darkCheck && "career-text-dark"}>
          CANNOT FIND A SUITABLE VACANCY?  DROP US A LINE
          <span> hr@TEZERACT.IO</span>
        </div>
        <div id="career-table2">
          {data.map((res) => {
            return (
              <div id="career-table-row">
                <p id="career-table-time" className={darkCheck && "career-text-dark"}>
                  Full Time <span> x </span> {res.location}
                </p>

                <span id="career-table-exp">
                  {res.experience}+ Years Experience
                </span>

                <div id="career-table-div">
                  <p id="career-table-title" className={darkCheck && "career-text-dark"}>{res.title}</p>
                  <p id="career-table-gif">
                    <RxArrowRight color="white" />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div id="career-form">
        <div id="career-form1">
          <span>
            LEARN ABOUT US
            <span id="career-form-icon">
              <RxArrowRight size={20} />
            </span>
          </span>
        </div>

        <div id="career-form2">
          <div id="career-form-div">
          <p id="career-form-circle-1"></p>
              <p id="career-form-circle-2"></p>
            <div id="career-form-div1">
              <p>
                NO SUITABLE VACANCY? <br /><br /><br />
                <span> THEN DROP US A LINE, WE’LL THINK OF SOMETHING</span>
              </p>


             <div id="career-form-img">
              <img src={img} alt=""/>
             </div>

            </div>
            <div id="career-form-div2">

              <p id="career-form-label">EMAIL:</p>
               <input />

               <p id="career-form-label">TELL US ABOUT YOURSELF:</p>
                <textarea></textarea>
                    
             
              <p id="career-form-btn">
                Submit
              </p>
         

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careertable;
