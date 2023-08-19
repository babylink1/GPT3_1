import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "战略变革与创新",
    text: "凭借整个价值链的端到端经验，基于实践的诀窍，有效帮助企业在不断变化的世界里，敏捷且有效精准实施策略，助力企业把握赋能力量，识别转型机遇，以精准预测驱动企业快速发展，完善决策考量运营模式，实现战略转型，技术驱动，创造360°价值",
  },
  {
    title: "人力资源效能与组织能力提升",
    text: "基于实际业务和组织场景的精确分析法，促进员工能力与战略目标高效匹配。帮助企业塑造一支熟练且出色的员工队伍，从而 实现业实现业务目标。通过组织和运营模式、以及兼具包容性与多样性的文化来推动增长和敏捷性，整体组织以高效能为开启新机遇和推动增长做好充分准备",
  },
  {
    title: "精准营销",
    text: "实验和迭代，准确、透明、精细地找到决定性因素。强大的营销运营模式，建立高效的营销网络，提升营销绩效。并在整个客户旅程中交付全渠道体验，开展高效、规模化、明确目标指向的营销活动以品牌重塑推动新的互动机遇和业务增长。革新营销模式，客户粘性，驱动可持续增长",
  },
  {
    title: "精益运营",
    text: "挖掘海量数据的千丝万缕联系，找到效率、成本、质量的最佳平衡点，交付可量化的商业价值",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
