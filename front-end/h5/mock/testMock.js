const Mock = require("mockjs");

let obj = Mock.mock({
  // 实例id
  id: "@id",
  // 提交日期
  date: "@date()",
  // 矿山地区
  "address|object2": {
    province: "湖南省",
    city: "郴州市",
    name: "柿竹园",
  },
  // 矿山年产量（万吨）
  outputAnnual: 150,
  // 矿石名称
  oreName: "fe",
  // 矿床成因和类型
  causesAndTypes: "沉积浅变质矿床",
  // 矿体平均厚度（m）
  avgThickness: 34,
  // 矿体平均倾角(°)
  avgDipAngle: 60,
  // 矿体走向长度(m)
  strikeLength: 700,
  // 矿体埋藏深度(m)
  burialDepth: 300,
  // 品位(%)
  grade: 42,
  // 容重=[矿石,围岩](array)
  bulkDensity: [3.81, 2.7],
  // 围岩名称=[上盘,下盘](string)
  surroundingRock: ["灰岩", "千枚岩"],
  // 稳固性=[矿石,上盘围岩,下盘围岩]
  /**
   * 1 -- 极不稳固
   * 2 -- 不稳固
   * 3 -- 中等稳固
   * 4 -- 稳固
   * 5 -- 极稳固
   */
  //   stability: ["中等稳固", "中等稳固", "中等稳固"],
  stability: [3, 3, 3],
  // 坚固性系数=[[矿石],[上盘围岩],[下盘围岩]],二维数组，有上下限
  firmness: [
    [6, 8],
    [5, 6],
    [5, 6],
  ],
  // 松散系数=[矿石,上盘围岩,下盘围岩]
  loose: [1.78, 1.68, 1.68],
  // 自燃性 Boolean
  spontaneous: false,
  // 粘结性 Boolean
  cohesiveness: false,
  // 地质破坏及水文条件 String
  geologicalAndHydrological: "小断裂构造较多",
  // 其它附加条件 String
  additional: "地表允许崩落",
});

console.log(obj);
