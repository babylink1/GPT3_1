import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GSS-3"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        利用数据分析、自动化和人工智能的强大力量，挖掘海量数据的千丝万缕联系。精准施策，唯“策”是用，找到效率、成本、质量的最佳平衡点，交付可量化的商业价值
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="数据采集"
        text="通过基于实际场景的梳理，定位、全维度采集数据
通过目标化识别，结构化逻辑设定，保证数据采集有效性完整性
    即时形成数据库，可随时查看导出"
      />
      <Feature
        title="数据分析"
        text="将数据指标植于客户具体应用场景，进行数据分析，提供预警、指导并推进行动
        经典统计分析
        多维度时空分析
        基于实际业务场景的算法和模型建立"
      />
      <Feature
        title="数据聚合展示"
        text="图表化关联呈现，核心指标检测
        数据大屏，支持精准决策
        数据交互动态展示，实现了客户快速响应、科学决策和高效行动"
      />
    </div>
  </div>
);

export default WhatGPT3;
