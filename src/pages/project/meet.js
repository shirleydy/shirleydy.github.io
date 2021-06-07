/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-05-16 14:16:03
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-06-07 22:13:22
 * @FilePath: /shirley/src/pages/project/meet.js
 */
/*
 * @Description:
 * @Author: Jack Deng
 * @Date: 2021-04-26 17:38:10
 * @LastEditors: Jack Deng
 * @LastEditTime: 2021-05-16 13:15:31
 * @FilePath: /shirley/src/pages/project/emoji.js
 */
import React from "react";

import { Header } from "../../components";
import icon1 from "../../images/icon1.jpg";
import icon2 from "../../images/icon2.jpg";
import icon3 from "../../images/icon3.jpg";

import "animate.css";
import "../../styles/meet/index.css";
import "../../styles/global.css";

import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";
import image5 from "../../images/5.jpg";
import image6 from "../../images/6.jpg";
import image7 from "../../images/7.jpg";
import image8 from "../../images/8.jpg";
import image9 from "../../images/9.jpg";
import image10 from "../../images/10.jpg";
import image11 from "../../images/11.jpg";
import image12 from "../../images/12.jpg";
import image13 from "../../images/13.jpg";
import image14 from "../../images/14.jpg";
import image15 from "../../images/15.jpg";
import image16 from "../../images/16.jpg";
import image17 from "../../images/17.jpg";
import image18 from "../../images/18.jpg";
import image19 from "../../images/19.jpg";
import image20 from "../../images/20.jpg";
import image21 from "../../images/21.jpg";
import image22 from "../../images/22.jpg";
import image23 from "../../images/23.jpg";

const images = [
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
];

function Index() {
  return (
    <main>
      <title>Meet</title>
      <div className="Meet_page flex-col">
        <div className="Meet_main1 flex-col">
          <Header link={"work"} />
          <div className={"Meet_homepage_title"}>
            <span className="Meet_word3">
              <span className={"Meet_word3_text"}>{"Meet"}</span>
              <div className="Meet_wrap2 flex-col" />
            </span>
            <span className="Meet_info5">{"Meet"}</span>
          </div>
          {images.map((image, index) => {
            return (
              <div className="Meet_wrap4 flex-col">
                {index === 0 && (
                  <p
                    className={"paragraph"}
                  >{`Roles: This is the project that I responsible for from concepts to implementation and through all the iterations. \n
                  [The original app was in Chinese and I did some redesign and translated some of the pages into English just for display. ]
`}</p>
                )}
                {index === 1 && (
                  <p
                    className={"paragraph"}
                  >{`Background: MEET is an information social platform,  there are many networking apps but most of them are following certain algorithm to show similar contents based on user behavior, so we were trying to do some different, and thus Meet born. We hoped to provide useful and valuable content  based on each user’s needs and based on their likes or dislikes. And users can share different opinions and find person with same value, even soulmate.
`}</p>
                )}
                {index === 2 && (
                  <p
                    className={"paragraph"}
                  >{`According to the data, It can be seen that in China the largest user base which is 63% of social media apps is between 20-29 years old, and 27% is between 30-39 years old.  There is little distinction in gender, basically half and half. based on the data, the general style was defined as youthful, energetic, neutral and concise.`}</p>
                )}
                {index === 4 && (
                  <p
                    className={"paragraph"}
                  >{`From user persona, I found the most pain points were there’s no reliable social platforms for young people to find someone that share the same value and same hobby with them, and another pain point was there are lots of information platform out there, and they need to switch from one to another to gain comprehensive information.`}</p>
                )}
                {index === 6 && (
                  <p
                    className={"paragraph"}
                  >{`The needed features, actions and pieces of information were already pretty clear after the phases above, so I just jumped straight into a quick sketch to map out the information architecture and wireframes. I tried to put in all the features I was planning, and most of it already felt logical at this point.After a couple of paper iterations I had the general idea ready, so I switched to digital version, where it’s easier to move things around.`}</p>
                )}
                {index === 10 && (
                  <p className={"paragraph"}>
                    {`I also did the logo for this app and it made up of 3 shapes. The mainly background shape is a communication bubble that is commonly seen in many apps, and it’s obviously shows the main feather- which is communication. And the Letter M is the first letter of the app’s name and the shape of it is made of two persons holding hands with each other. The overall logo is very easy to recognized and also conveys the main functions of the app.`}
                  </p>
                )}
                {index === 11 && (
                  <p className={"paragraph"}>
                    {`The welcome screen was pretty standard. It features a big app icon to reinforce branding and add some visual delight to the user’s first contact with the app. It also repeats the value proposition which explains the user why it’s worth it to complete the questionnaire.`}
                  </p>
                )}
                {index === 14 && (
                  <p className={"paragraph"}>
                    {`The questionnaire itself is equally simple. The first two pages are mainly focus on age and gender and with some visual illustration in the middle to help catching the user’s eyes and last page filled with multiple choices. The user can go back to change his choices, or go forward to skip a question.`}
                  </p>
                )}
                {index === 15 && (
                  <p className={"paragraph"}>
                    {`If the user presses the Skip button, he immediately gets the view of the inside content. As long as he has not completed the wizard, there is an illustration that repeats the value prop and urges the user to answer the questions.`}{" "}
                  </p>
                )}
                {index === 16 && (
                  <p className={"paragraph"}>
                    {`I also created some cute illustration design on the empty pages , which incorporates the brand ip image ‘dolphin’ into the pages and effectively alleviates users negative emotions and further enhances product experience and brand perception.`}{" "}
                  </p>
                )}
                {index === 17 && (
                  <p className="paragraph">
                    {`The app has 4 buttons on the bottom navigation, which are new, circle , discover,  and me. There are three sub-titles in this New page, which are following, trending, and local. 
These three parts of information flow are totally customisable. 
In 'following' section, this page shows users their subscribed content, subscribed topics. For the trending part, it shows the contents with most likes, when users like the content, it increase the temperature of this topic and this page shows the most hottest topic to the users. You can also find a little medal shown on the left top of the topic creator with the most likes, which encourages the creators to post more topics. 
In the local sub-page, it achieves the design goal of 'information serves life', many local store bargains, sales products or even second-hand product selling information are shown in this section.`}
                  </p>
                )}
                {index === 18 && (
                  <p className="paragraph">
                    {`Next feature part is the circle function, it’s a high-quality instant gathering place for people share great moments, have same value or interests. There are thousands circles in the app created by different users and every members in the circle get a place to share their thoughts and experience. Here it solves the users difficulties of making friends outside, instead you can easily find a friend in our app.`}
                  </p>
                )}
                <img className={"Meet_img"} src={image} />
              </div>
            );
          })}

          <span className="Meet_txt1">{"Let’s connect"}</span>
          <div className="Meet_wrap7">
            <div className={"Meet_icon-container"}>
              <img
                className={"Meet_icon expand"}
                onClick={() =>
                  window.open("https://www.linkedin.com/in/diyue-uidesigner/")
                }
                src={icon1}
              />
            </div>
            <div title={"+610410918668"} className={"Meet_icon-container"}>
              <img
                title={"+610410918668"}
                className="icon expand"
                onClick={() => {
                  window.open("tel://+610410918668");
                }}
                src={icon2}
              />
            </div>
            <div className={"Meet_icon-container"}>
              <img
                className={"Meet_icon expand"}
                onClick={() => {
                  window.open(
                    "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Hola!&to=shirleyyuedi@gmail.com"
                  );
                }}
                src={icon3}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
