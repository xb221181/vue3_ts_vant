import { defineMock } from "vite-plugin-mock-dev-server";
import Mock from "mockjs";

export default defineMock([
  {
    url: "/dev-api/list/get",
    delay: 1000,
    body: {
      code: 0,
      message: "OK",
      result: Mock.mock({
        "list": [
          {
            id: '1',
            title: '木瓜',
            price: '42.9',
            sale: '35.9',
            msg: '海南糖心木瓜 2个装 1.5kg-1.8kg 新鲜水果',
            url: '../src/assets/fruit/p(1).png'
          },
          {
            id: '2',
            title: '蛇果',
            price: '49.9',
            sale: '29.9',
            msg: '潘苹果 甘肃天水花牛苹果/蛇果 12个 单果约70mm 简装',
            url: '../src/assets/fruit/p(2).png'
          },
          {
            id: '3',
            title: '梨',
            price: '59.9',
            sale: '39.9',
            msg: '樱慕晴（YINGMUQING） 樱慕晴 辽宁鞍山南果梨5斤装 大果包邮 海城南国梨子香水 南果梨/5斤装',
            url: '../src/assets/fruit/p(3).png'
          },
          {
            id: '4',
            title: '脐橙',
            price: '39.9',
            sale: '21.9',
            msg: '美仑达 赣南脐橙 2017新上市 3斤装 铂金果',
            url: '../src/assets/fruit/p(4).png'
          },
          {
            id: '5',
            title: '小橙子',
            price: '39.9',
            sale: '15.9',
            msg: '爽果乐 湖南麻阳冰糖橙1.5kg 单果100-130g 小橙子 新鲜水果',
            url: '../src/assets/fruit/p(5).png'
          },
          {
            id: '6',
            title: '奇异果',
            price: '28.9',
            sale: '20.9',
            msg: '荔之味 四川蒲江黄心猕猴桃15个 单果70-90g 新鲜水果奇异果',
            url: '../src/assets/fruit/p(6).png'
          },
          {
            id: '7',
            title: '红心苹果',
            price: '38',
            sale: '25.8',
            msg: '汇果洲 新疆阿克苏冰糖心苹果 国产新鲜水果 中果2kg 约11-13个',
            url: '../src/assets/fruit/p(7).png'
          },
          {
            id: '8',
            title: '橙子',
            price: '34',
            sale: '21.8',
            msg: '第二件9.8元湖北秭归中华 血橙 1kg 脐橙 单果140-200g3-6个 橙子坏果包赔',
            url: '../src/assets/fruit/p(8).png'
          },
          {
            id: '9',
            title: '鳄梨',
            price: '95',
            sale: '59',
            msg: '苏洪鲜食 新鲜牛油果 5个 新鲜鳄梨水果 单果约130g',
            url: '../src/assets/fruit/p(9).png'
          },
          {
            id: '10',
            title: '半价车厘子',
            price: '138',
            sale: '79.8',
            msg: '【第二份半价】智利进口车厘子J级 约1.5磅装（681g） 果径约26-28mm 新鲜水果',
            url: '../src/assets/fruit/p(10).png'
          },
          {
            id: '11',
            title: '车厘子',
            price: '299',
            sale: '219',
            msg: '智利原装进口车厘子礼盒装JJ级 约2kg 果径约28-30mm 原箱礼盒装 新鲜水果',
            url: '../src/assets/fruit/p(11).png'
          },
          {
            id: '12',
            title: '苹果',
            price: '49.9',
            sale: '29.9',
            msg: '宏辉果蔬 烟台红富士苹果 12个 单果约75mm 总重约2.1kg 简装',
            url: '../src/assets/fruit/p(12).png'
          },
          {
            id: '13',
            title: '草莓',
            price: '128',
            sale: '108',
            msg: '依禾农庄 北京昌平兴寿红颜奶油草莓甜草莓 约700g 礼盒装 新鲜水果',
            url: '../src/assets/fruit/p(13).png'
          },
          {
            id: '14',
            title: '不知名水果',
            price: '95',
            sale: '59',
            msg: '苏洪鲜食 新鲜牛油果 5个 新鲜鳄梨水果 单果约130g',
            url: '../src/assets/fruit/p(14).png'
          },
        ]
      })
    }
  },
  {
    url: "/dev-api/list/error",
    delay: 1000,
    body: {
      code: 1,
      message: "ERROR",
      result: null
    }
  }
]);
