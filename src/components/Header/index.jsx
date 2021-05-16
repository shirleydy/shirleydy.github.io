/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-05-02 12:03:57
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 15:18:48
 * @FilePath: /shirley/src/components/Header/index.jsx
 */
import React from "react";
import { Link } from "gatsby";

import "./style.css";

function Header({link}) {
  return (
    <section className={"header"}>
        <span className="word1">{"Shirley Yue"}</span>
       <div className="wrap1 flex-row">
            <Link to={"/"} className={'no-underline'}>
              <span className={link === 'home' ? "active info1": 'info1'}>HOME</span>
            </Link>
            <Link to={"/work"} className={'no-underline'}>
              <span className={link === 'work' ? "active info2": 'info2'}>WORK</span>
            </Link>
            <Link to={"/illustration"} className={'no-underline'}>
              <span className={link === 'illustration' ? "active info3": 'info3'}>Illustration</span>
            </Link>
            <Link to={"/about"} className={'no-underline'}>
              <span className={link === 'about' ? "active word2": 'word2'}>ABOUT</span>
            </Link>
          </div>
    </section>
  );
}

export default Header;
