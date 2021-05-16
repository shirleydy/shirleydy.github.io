/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-04-26 17:38:10
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 15:28:43
 * @FilePath: /shirley/src/pages/index.js
 */
import React from "react";
import { Link } from "gatsby";

import { Header } from "../components";

import "animate.css";
import "../styles/index/index.css";
import "../styles/global.css";

function Index() {
  const handleMouseEnter = (e) => {
    e.target.classList.add("animate__animated", "animate__pulse");
  };

  const handleMouseLeave = (e) => {
    e.target.classList.remove("animate__animated");
    e.target.classList.remove("animate__pulse");
  };
  return (
    <main>
      <title>Home</title>
      <div className="page flex-col">
        <div className="main1 flex-col">
          <Header link={"home"} />
          <div className={"homepage_title"}>
            <span className="word3">
              <span className={"word3_text"}>{"Hi, I’m Shirley Yue"}</span>
              <div className="wrap2 flex-col" />
            </span>
          </div>

          <div className="wrap3 flex-row">
            <span className="info41">{`I `}</span>
            <span className={"info4 hollow design"}>{"design"}</span>
            <span className={"info4 hollow"}>{", "}</span>
            <span className={"info4 hollow sing"}>{"sing"}</span>
            <span className={"info4 hollow"}>{" & "}</span>
            <span className={"info4 hollow paint"}>{"paint"}</span>
            <div className="group1 flex-col" />
          </div>
          <span className="infoBox1">
            I'm&nbsp;a&nbsp;UI&nbsp;designer&nbsp;based&nbsp;in&nbsp;Sydney,&nbsp;Australia&nbsp;with&nbsp;experience&nbsp;in&nbsp;delivering&nbsp;end-to-end&nbsp;UI&nbsp;design&nbsp;for&nbsp;digital&nbsp;products.&nbsp;I'm&nbsp;passionate&nbsp;about&nbsp;
            <br />
            improving&nbsp;the&nbsp;lives&nbsp;of&nbsp;users&nbsp;through&nbsp;design&nbsp;and&nbsp;am&nbsp;constantly&nbsp;looking&nbsp;to&nbsp;learn&nbsp;new&nbsp;things&nbsp;everyday.
          </span>
          <span className="info5">My&nbsp;Recent&nbsp;Work</span>
          <Link to="/project/meet">
            <div
              className="wrap4 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"img"}
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd1bcc4d2d664e0bcff75df3a8976e6ea2008e3f53fae70fc4428693dc4026bc2"
              />
            </div>
          </Link>
          <Link to="/project/emoji">
            <div
              className="wrap5 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"img"}
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge3995667fee600c03b501834dda372baa731e6a5871098040c9b94e37ffa9b2d"
                }
              />
            </div>
          </Link>
          <Link to="/project/mansion">
            <div
              className="wrap6 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"img"}
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng72fae7849635ad79db5f05fe0d673d547440244a3e84af84d35b29f974328bb3"
                }
              />
            </div>
          </Link>
          <span className="txt1">{"Let’s connect"}</span>
          <div className="wrap7">
            <div className={"icon-container"}>
              <img
                className={"icon expand"}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/di-shirley-yue-b58723113/"
                  )
                }
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9ed1245fee470366086500a777411384708b7b3e39be98c65e62af6bc81c2637"
              />
            </div>
            <div title={"+610410918668"} className={"icon-container"}>
              <img
                title={"+610410918668"}
                className="icon expand"
                onClick={() => {
                  window.open("tel://+610410918668");
                }}
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2622058b150d22bc7da7488109ec1cc12058a480916585f601d098a87dddbb13"
                }
              />
            </div>
            <div className={"icon-container"}>
              <img
                className={"icon expand"}
                onClick={() => {
                  window.open(
                    "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Hola!&to=shirleyyuedi@gmail.com"
                  );
                }}
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng08c362bac5f41fda5f08002921b231abc2ceb855a7786b06e7fc2bdf7d093826"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
