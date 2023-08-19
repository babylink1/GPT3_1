import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        在高度复杂的挑战中，公司引以为豪的技术应用开发能力是您在竞争激烈的环境中脱颖而出的秘密武器，更是您业务发展的搭档
      </h1>
      <p>
        我们的技术应用开发团队凭借着多年的经验和无与伦比的创造力，将客户的愿景转化为切实可行的解决方案。无论是开发移动应用、Web
        应用、大数据分析工具还是物联网应用，我们都能以高度定制化的方式满足你的需求，从而提升你的业务效率、增加收益、改善用户体验
        <br />
        我们的开发流程注重用户需求的洞察和理解，通过紧密合作和持续沟通，确保我们的解决方案不仅仅是技术上的杰作，还能真正满足用户的期望。灵活的开发方法，以及能够适应不同规模的项目和不同的技术栈，从而在预算和时间范围内为你提供最佳的解决方案
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
