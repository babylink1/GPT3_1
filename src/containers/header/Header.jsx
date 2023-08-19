import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">从洞察到行动，非凡价值由此创造</h1>
      <p>
        在不确定性的现实中，我们通过专业管理咨询，帮助企业
        迅速、从容、规模化执行的制胜战略；利用数据分析，帮助企业精准施策，唯“策”是用,并以专业的应用开发能力。我们将复杂的技术转化为简单易懂的解决方案。通过管理咨询、数据分析和应用开发综合能力，您将在竞争激烈的市场中提高韧性，实现可持续发展
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
