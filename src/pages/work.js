/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-04-26 17:38:10
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 14:34:04
 * @FilePath: /shirley/src/pages/work.js
 */
import React from "react";
import { Link } from "gatsby";

import { Header } from "../components";

import "animate.css";
import "../styles/work/index.css";
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
      <title>Work</title>
      <div className="Work_page flex-col">
        <div className="Work_main1 flex-col">
          <Header link={"work"} />
          <div className={"Work_homepage_title"}>
            <span className="Work_word3">
              <span className={"Work_word3_text"}>{"Yes, I design"}</span>
              <div className="Work_wrap2 flex-col" />
            </span>
          </div>
          <span className="Work_info5">{"My Work Collection"}</span>
          <Link to="/project/meet">
            <div
              className="Work_wrap4 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"Work_img"}
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd1bcc4d2d664e0bcff75df3a8976e6ea2008e3f53fae70fc4428693dc4026bc2"
              />
            </div>
          </Link>
          <Link to="/project/emoji">
            <div
              className="Work_wrap5 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"Work_img"}
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng45a8ab99d24bb23e51799ae5c4952e8f14a7b6cdd252279f3494a97398b5bcf0"
                }
              />
            </div>
          </Link>
          <Link to="/project/mansion">
            <div
              className="Work_wrap6 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"img"}
                src={
                  "https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng416702a201f1326c5eaeb206965e0322efc2a12d96f1b103574ed2977da1a18e"
                }
              />
            </div>
          </Link>
          <Link to="/project/festival">
            <div
              className="Work_wrap6 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"img"}
                src={
                  " https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfcb6c1ab7e8e46abcdd1b577191645a4348b728528a916177cdf39fd27f50467"
                }
              />
            </div>
          </Link>
          <Link to="/project/qixi">
            <div
              className="Work_wrap6 flex-col"
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
            >
              <img
                className={"img"}
                src={
                  " https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfb7b9573eeb87d4f40df42b4b32b33ebeec70f3de0b94b8390211b0af742f97b"
                }
              />
            </div>
          </Link>

          <span className="Work_txt1">{"Let’s connect"}</span>
          <div className="Work_wrap7">
            <div className={"Work_icon-container"}>
              <img
                className={"Work_icon expand"}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/di-shirley-yue-b58723113/"
                  )
                }
                src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9ed1245fee470366086500a777411384708b7b3e39be98c65e62af6bc81c2637"
              />
            </div>
            <div title={"+610410918668"} className={"Work_icon-container"}>
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
            <div className={"Work_icon-container"}>
              <img
                className={"Work_icon expand"}
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
