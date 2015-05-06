/**
 * @module: nd-area-data
 * @author: lzhengms <lzhengms@gmail.com> - 2015-05-04 18:15:44
 */

'use strict';

var $ = require('jquery');


module.exports = {

  //省份
  province: function () {
    return [
      {value: "110000", text: "北京市"},
      {value: "120000", text: "天津市"},
      {value: "130000", text: "河北省"},
      {value: "140000", text: "山西省"},
      {value: "150000", text: "内蒙古自治区"},
      {value: "210000", text: "辽宁省"},
      {value: "220000", text: "吉林省"},
      {value: "230000", text: "黑龙江省"},
      {value: "310000", text: "上海市"},
      {value: "320000", text: "江苏省"},
      {value: "330000", text: "浙江省"},
      {value: "340000", text: "安徽省"},
      {value: "350000", text: "福建省"},
      {value: "360000", text: "江西省"},
      {value: "370000", text: "山东省"},
      {value: "410000", text: "河南省"},
      {value: "420000", text: "湖北省"},
      {value: "430000", text: "湖南省"},
      {value: "440000", text: "广东省"},
      {value: "450000", text: "广西壮族自治区"},
      {value: "460000", text: "海南省"},
      {value: "500000", text: "重庆市"},
      {value: "510000", text: "四川省"},
      {value: "520000", text: "贵州省"},
      {value: "530000", text: "云南省"},
      {value: "540000", text: "西藏自治区"},
      {value: "610000", text: "陕西省"},
      {value: "620000", text: "甘肃省"},
      {value: "630000", text: "青海省"},
      {value: "640000", text: "宁夏回族自治区"},
      {value: "650000", text: "新疆维吾尔自治区"},
      {value: "710000", text: "台湾省"},
      {value: "810000", text: "香港特别行政区"},
      {value: "820000", text: "澳门特别行政区"}
    ];
  },

  //城市
  city: function () {
    return [
      {
        code: 110000,
        options: [
          {value: "110100", text: "市辖区"},
          {value: "110200", text: "县"}
        ]
      },
      {
        code: 120000,
        options: [
          {value: "120100", text: "市辖区"},
          {value: "120200", text: "县"}
        ]
      },
      {
        code: 130000,
        options: [
          {value: "130100", text: "石家庄市"},
          {value: "130200", text: "唐山市"},
          {value: "130300", text: "秦皇岛市"},
          {value: "130400", text: "邯郸市"},
          {value: "130500", text: "邢台市"},
          {value: "130600", text: "保定市"},
          {value: "130700", text: "张家口市"},
          {value: "130800", text: "承德市"},
          {value: "130900", text: "沧州市"},
          {value: "131000", text: "廊坊市"},
          {value: "131100", text: "衡水市"}
        ]
      },
      {
        code: 140000,
        options: [
          {value: "140100", text: "太原市"},
          {value: "140200", text: "大同市"},
          {value: "140300", text: "阳泉市"},
          {value: "140400", text: "长治市"},
          {value: "140500", text: "晋城市"},
          {value: "140600", text: "朔州市"},
          {value: "140700", text: "晋中市"},
          {value: "140800", text: "运城市"},
          {value: "140900", text: "忻州市"},
          {value: "141000", text: "临汾市"},
          {value: "141100", text: "吕梁市"}
        ]
      }, {
        code: 150000,
        options: [
          {value: "150100", text: "呼和浩特市"},
          {value: "150200", text: "包头市"},
          {value: "150300", text: "乌海市"},
          {value: "150400", text: "赤峰市"},
          {value: "150500", text: "通辽市"},
          {value: "150600", text: "鄂尔多斯市"},
          {value: "150700", text: "呼伦贝尔市"},
          {value: "150800", text: "巴彦淖尔市"},
          {value: "150900", text: "乌兰察布市"},
          {value: "152200", text: "兴安盟"},
          {value: "152500", text: "锡林郭勒盟"},
          {value: "152900", text: "阿拉善盟"}
        ]
      },
      {
        code: 210000,
        options: [
          {value: "210100", text: "沈阳市"},
          {value: "210200", text: "大连市"},
          {value: "210300", text: "鞍山市"},
          {value: "210400", text: "抚顺市"},
          {value: "210500", text: "本溪市"},
          {value: "210600", text: "丹东市"},
          {value: "210700", text: "锦州市"},
          {value: "210800", text: "营口市"},
          {value: "210900", text: "阜新市"},
          {value: "211000", text: "辽阳市"},
          {value: "211100", text: "盘锦市"},
          {value: "211200", text: "铁岭市"},
          {value: "211300", text: "朝阳市"},
          {value: "211400", text: "葫芦岛市"}
        ]
      }, {
        code: 220000,
        options: [
          {value: "220100", text: "长春市"},
          {value: "220200", text: "吉林市"},
          {value: "220300", text: "四平市"},
          {value: "220400", text: "辽源市"},
          {value: "220500", text: "通化市"},
          {value: "220600", text: "白山市"},
          {value: "220700", text: "松原市"},
          {value: "220800", text: "白城市"},
          {value: "222400", text: "延边朝鲜族自治州"}
        ]
      },
      {
        code: 230000,
        options: [
          {value: "230100", text: "哈尔滨市"},
          {value: "230200", text: "齐齐哈尔市"},
          {value: "230300", text: "鸡西市"},
          {value: "230400", text: "鹤岗市"},
          {value: "230500", text: "双鸭山市"},
          {value: "230600", text: "大庆市"},
          {value: "230700", text: "伊春市"},
          {value: "230800", text: "佳木斯市"},
          {value: "230900", text: "七台河市"},
          {value: "231000", text: "牡丹江市"},
          {value: "231100", text: "黑河市"},
          {value: "231200", text: "绥化市"},
          {value: "232700", text: "大兴安岭地区"}
        ]
      },
      {
        code: 310000,
        options: [
          {value: "310100", text: "市辖区"},
          {value: "310200", text: "县"}
        ]
      },
      {
        code: 320000,
        options: [
          {value: "320100", text: "南京市"},
          {value: "320200", text: "无锡市"},
          {value: "320300", text: "徐州市"},
          {value: "320400", text: "常州市"},
          {value: "320500", text: "苏州市"},
          {value: "320600", text: "南通市"},
          {value: "320700", text: "连云港市"},
          {value: "320800", text: "淮安市"},
          {value: "320900", text: "盐城市"},
          {value: "321000", text: "扬州市"},
          {value: "321100", text: "镇江市"},
          {value: "321200", text: "泰州市"},
          {value: "321300", text: "宿迁市"}
        ]
      },
      {
        code: 330000,
        options: [
          {value: "330100", text: "杭州市"},
          {value: "330200", text: "宁波市"},
          {value: "330300", text: "温州市"},
          {value: "330400", text: "嘉兴市"},
          {value: "330500", text: "湖州市"},
          {value: "330600", text: "绍兴市"},
          {value: "330700", text: "金华市"},
          {value: "330800", text: "衢州市"},
          {value: "330900", text: "舟山市"},
          {value: "331000", text: "台州市"},
          {value: "331100", text: "丽水市"}
        ]
      },
      {
        code: 340000,
        options: [
          {value: "340100", text: "合肥市"},
          {value: "340200", text: "芜湖市"},
          {value: "340300", text: "蚌埠市"},
          {value: "340400", text: "淮南市"},
          {value: "340500", text: "马鞍山市"},
          {value: "340600", text: "淮北市"},
          {value: "340700", text: "铜陵市"},
          {value: "340800", text: "安庆市"},
          {value: "341000", text: "黄山市"},
          {value: "341100", text: "滁州市"},
          {value: "341200", text: "阜阳市"},
          {value: "341300", text: "宿州市"},
          {value: "341400", text: "巢湖市"},
          {value: "341500", text: "六安市"},
          {value: "341600", text: "亳州市"},
          {value: "341700", text: "池州市"},
          {value: "341800", text: "宣城市"}
        ]
      },
      {
        code: 350000,
        options: [
          {value: "350100", text: "福州市"},
          {value: "350200", text: "厦门市"},
          {value: "350300", text: "莆田市"},
          {value: "350400", text: "三明市"},
          {value: "350500", text: "泉州市"},
          {value: "350600", text: "漳州市"},
          {value: "350700", text: "南平市"},
          {value: "350800", text: "龙岩市"},
          {value: "350900", text: "宁德市"}
        ]
      },
      {
        code: 360000,
        options: [
          {value: "360100", text: "南昌市"},
          {value: "360200", text: "景德镇市"},
          {value: "360300", text: "萍乡市"},
          {value: "360400", text: "九江市"},
          {value: "360500", text: "新余市"},
          {value: "360600", text: "鹰潭市"},
          {value: "360700", text: "赣州市"},
          {value: "360800", text: "吉安市"},
          {value: "360900", text: "宜春市"},
          {value: "361000", text: "抚州市"},
          {value: "361100", text: "上饶市"}
        ]
      },
      {
        code: 370000,
        options: [
          {value: "370100", text: "济南市"},
          {value: "370200", text: "青岛市"},
          {value: "370300", text: "淄博市"},
          {value: "370400", text: "枣庄市"},
          {value: "370500", text: "东营市"},
          {value: "370600", text: "烟台市"},
          {value: "370700", text: "潍坊市"},
          {value: "370800", text: "济宁市"},
          {value: "370900", text: "泰安市"},
          {value: "371000", text: "威海市"},
          {value: "371100", text: "日照市"},
          {value: "371200", text: "莱芜市"},
          {value: "371300", text: "临沂市"},
          {value: "371400", text: "德州市"},
          {value: "371500", text: "聊城市"},
          {value: "371600", text: "滨州市"},
          {value: "371700", text: "菏泽市"}
        ]
      },
      {
        code: 410000,
        options: [
          {value: "410100", text: "郑州市"},
          {value: "410200", text: "开封市"},
          {value: "410300", text: "洛阳市"},
          {value: "410400", text: "平顶山市"},
          {value: "410500", text: "安阳市"},
          {value: "410600", text: "鹤壁市"},
          {value: "410700", text: "新乡市"},
          {value: "410800", text: "焦作市"},
          {value: "410900", text: "濮阳市"},
          {value: "411000", text: "许昌市"},
          {value: "411100", text: "漯河市"},
          {value: "411200", text: "三门峡市"},
          {value: "411300", text: "南阳市"},
          {value: "411400", text: "商丘市"},
          {value: "411500", text: "信阳市"},
          {value: "411600", text: "周口市"},
          {value: "411700", text: "驻马店市"}
        ]
      },
      {
        code: 420000,
        options: [
          {value: "420100", text: "武汉市"},
          {value: "420200", text: "黄石市"},
          {value: "420300", text: "十堰市"},
          {value: "420500", text: "宜昌市"},
          {value: "420600", text: "襄樊市"},
          {value: "420700", text: "鄂州市"},
          {value: "420800", text: "荆门市"},
          {value: "420900", text: "孝感市"},
          {value: "421000", text: "荆州市"},
          {value: "421100", text: "黄冈市"},
          {value: "421200", text: "咸宁市"},
          {value: "421300", text: "随州市"},
          {value: "422800", text: "恩施土家族苗族自治州"},
          {value: "429000", text: "省直辖县级行政单位"}
        ]
      },
      {
        code: 430000,
        options: [
          {value: "430100", text: "长沙市"},
          {value: "430200", text: "株洲市"},
          {value: "430300", text: "湘潭市"},
          {value: "430400", text: "衡阳市"},
          {value: "430500", text: "邵阳市"},
          {value: "430600", text: "岳阳市"},
          {value: "430700", text: "常德市"},
          {value: "430800", text: "张家界市"},
          {value: "430900", text: "益阳市"},
          {value: "431000", text: "郴州市"},
          {value: "431100", text: "永州市"},
          {value: "431200", text: "怀化市"},
          {value: "431300", text: "娄底市"},
          {value: "433100", text: "湘西土家族苗族自治州"}
        ]
      },
      {
        code: 440000,
        options: [
          {value: "440100", text: "广州市"},
          {value: "440200", text: "韶关市"},
          {value: "440300", text: "深圳市"},
          {value: "440400", text: "珠海市"},
          {value: "440500", text: "汕头市"},
          {value: "440600", text: "佛山市"},
          {value: "440700", text: "江门市"},
          {value: "440800", text: "湛江市"},
          {value: "440900", text: "茂名市"},
          {value: "441200", text: "肇庆市"},
          {value: "441300", text: "惠州市"},
          {value: "441400", text: "梅州市"},
          {value: "441500", text: "汕尾市"},
          {value: "441600", text: "河源市"},
          {value: "441700", text: "阳江市"},
          {value: "441800", text: "清远市"},
          {value: "441900", text: "东莞市"},
          {value: "442000", text: "中山市"},
          {value: "445100", text: "潮州市"},
          {value: "445200", text: "揭阳市"},
          {value: "445300", text: "云浮市"}
        ]
      },
      {
        code: 450000,
        options: [
          {value: "450100", text: "南宁市"},
          {value: "450200", text: "柳州市"},
          {value: "450300", text: "桂林市"},
          {value: "450400", text: "梧州市"},
          {value: "450500", text: "北海市"},
          {value: "450600", text: "防城港市"},
          {value: "450700", text: "钦州市"},
          {value: "450800", text: "贵港市"},
          {value: "450900", text: "玉林市"},
          {value: "451000", text: "百色市"},
          {value: "451100", text: "贺州市"},
          {value: "451200", text: "河池市"},
          {value: "451300", text: "来宾市"},
          {value: "451400", text: " 崇左市"}
        ]
      },
      {
        code: 460000,
        options: [
          {value: "460100", text: "海口市"},
          {value: "460200", text: "三亚市"},
          {value: "469000", text: "省直辖县级行政单位"}
        ]
      },
      {
        code: 500000,
        options: [
          {value: "500100", text: "市辖区"},
          {value: "500200", text: "县"},
          {value: "500300", text: "市"}
        ]
      },
      {
        code: 510000,
        options: [
          {value: "510100", text: "成都市"},
          {value: "510300", text: "自贡市"},
          {value: "510400", text: "攀枝花市"},
          {value: "510500", text: "泸州市"},
          {value: "510600", text: "德阳市"},
          {value: "510700", text: "绵阳市"},
          {value: "510800", text: "广元市"},
          {value: "510900", text: "遂宁市"},
          {value: "511000", text: "内江市"},
          {value: "511100", text: "乐山市"},
          {value: "511300", text: "南充市"},
          {value: "511400", text: "眉山市"},
          {value: "511500", text: "宜宾市"},
          {value: "511600", text: "广安市"},
          {value: "511700", text: "达州市"},
          {value: "511800", text: "雅安市"},
          {value: "511900", text: "巴中市"},
          {value: "512000", text: "资阳市"},
          {value: "513200", text: "阿坝藏族羌族自治州"},
          {value: "513300", text: "甘孜藏族自治州"},
          {value: "513400", text: "凉山彝族自治州"}
        ]
      },
      {
        code: 520000,
        options: [
          {value: "520100", text: "贵阳市"},
          {value: "520200", text: "六盘水市"},
          {value: "520300", text: "遵义市"},
          {value: "520400", text: "安顺市"},
          {value: "522200", text: "铜仁地区"},
          {value: "522300", text: "黔西南布依族苗族自治州"},
          {value: "522400", text: "毕节地区"},
          {value: "522600", text: "黔东南苗族侗族自治州"},
          {value: "522700", text: "黔南布依族苗族自治州"}
        ]
      },
      {
        code: 530000,
        options: [
          {value: "530100", text: "昆明市"},
          {value: "530300", text: "曲靖市"},
          {value: "530400", text: "玉溪市"},
          {value: "530500", text: "保山市"},
          {value: "530600", text: "昭通市"},
          {value: "530700", text: "丽江市"},
          {value: "530800", text: "思茅市"},
          {value: "530900", text: "临沧市"},
          {value: "532300", text: "楚雄彝族自治州"},
          {value: "532500", text: "红河哈尼族彝族自治州"},
          {value: "532600", text: "文山壮族苗族自治州"},
          {value: "532800", text: "西双版纳傣族自治州"},
          {value: "532900", text: "大理白族自治州"},
          {value: "533100", text: "德宏傣族景颇族自治州"},
          {value: "533300", text: "怒江傈僳族自治州"},
          {value: "533400", text: "迪庆藏族自治州"}
        ]
      },
      {
        code: 540000,
        options: [
          {value: "540100", text: "拉萨市"},
          {value: "542100", text: "昌都地区"},
          {value: "542200", text: "山南地区"},
          {value: "542300", text: "日喀则地区"},
          {value: "542400", text: "那曲地区"},
          {value: "542500", text: "阿里地区"},
          {value: "542600", text: "林芝地区"}
        ]
      },
      {
        code: 610000,
        options: [
          {value: "610100", text: "西安市"},
          {value: "610200", text: "铜川市"},
          {value: "610300", text: "宝鸡市"},
          {value: "610400", text: "咸阳市"},
          {value: "610500", text: "渭南市"},
          {value: "610600", text: "延安市"},
          {value: "610700", text: "汉中市"},
          {value: "610800", text: "榆林市"},
          {value: "610900", text: "安康市"},
          {value: "611000", text: "商洛市"}
        ]
      },
      {
        code: 620000,
        options: [
          {value: "620100", text: "兰州市"},
          {value: "620200", text: "嘉峪关市"},
          {value: "620300", text: "金昌市"},
          {value: "620400", text: "白银市"},
          {value: "620500", text: "天水市"},
          {value: "620600", text: "武威市"},
          {value: "620700", text: "张掖市"},
          {value: "620800", text: "平凉市"},
          {value: "620900", text: "酒泉市"},
          {value: "621000", text: "庆阳市"},
          {value: "621100", text: "定西市"},
          {value: "621200", text: "陇南市"},
          {value: "622900", text: "临夏回族自治州"},
          {value: "623000", text: "甘南藏族自治州"}
        ]
      },
      {
        code: 630000,
        options: [
          {value: "630100", text: "西宁市"},
          {value: "632100", text: "海东地区"},
          {value: "632200", text: "海北藏族自治州"},
          {value: "632300", text: "黄南藏族自治州"},
          {value: "632500", text: "海南藏族自治州"},
          {value: "632600", text: "果洛藏族自治州"},
          {value: "632700", text: "玉树藏族自治州"},
          {value: "632800", text: "海西蒙古族藏族自治州"}
        ]
      },
      {
        code: 640000,
        options: [
          {value: "640100", text: "银川市"},
          {value: "640200", text: "石嘴山市"},
          {value: "640300", text: "吴忠市"},
          {value: "640400", text: "固原市"},
          {value: "640500", text: "中卫市"}
        ]
      },
      {
        code: 650000,
        options: [
          {value: "650100", text: "乌鲁木齐市"},
          {value: "650200", text: "克拉玛依市"},
          {value: "652100", text: "吐鲁番地区"},
          {value: "652200", text: "哈密地区"},
          {value: "652300", text: "昌吉回族自治州"},
          {value: "652700", text: "博尔塔拉蒙古自治州"},
          {value: "652800", text: "巴音郭楞蒙古自治州"},
          {value: "652900", text: "阿克苏地区"},
          {value: "653000", text: "克孜勒苏柯尔克孜自治州"},
          {value: "653100", text: "喀什地区"},
          {value: "653200", text: "和田地区"},
          {value: "654000", text: "伊犁哈萨克自治州"},
          {value: "654200", text: "塔城地区"},
          {value: "654300", text: "阿勒泰地区"},
          {value: "659000", text: "省直辖行政单位"}
        ]
      },
      {
        code: 710000,
        options: []
      },
      {
        code: 810000,
        options: []
      },
      {
        code: 820000,
        options: []
      }
    ];
  },

  //县区
  district: function () {
    return [
      {
        code: 110100,
        options: [
          {
            text: "东城区",
            value: "110101"
          },
          {
            text: "西城区",
            value: "110102"
          },
          {
            text: "崇文区",
            value: "110103"
          },
          {
            text: "宣武区",
            value: "110104"
          },
          {
            text: "朝阳区",
            value: "110105"
          },
          {
            text: "丰台区",
            value: "110106"
          },
          {
            text: "石景山区",
            value: "110107"
          },
          {
            text: "海淀区",
            value: "110108"
          },
          {
            text: "门头沟区",
            value: "110109"
          },
          {
            text: "房山区",
            value: "110111"
          },
          {
            text: "通州区",
            value: "110112"
          },
          {
            text: "顺义区",
            value: "110113"
          },
          {
            text: "昌平区",
            value: "110114"
          },
          {
            text: "大兴区",
            value: "110115"
          },
          {
            text: "怀柔区",
            value: "110116"
          },
          {
            text: "平谷区",
            value: "110117"
          }
        ]
      },
      {
        code: 110200,
        options: [
          {
            text: "密云",
            value: "110228"
          },
          {
            text: "延庆",
            value: "110229"
          }
        ]
      },
      {
        code: 120100,
        options: [
          {
            text: "和平区",
            value: "120101"
          },
          {
            text: "河东区",
            value: "120102"
          },
          {
            text: "河西区",
            value: "120103"
          },
          {
            text: "南开区",
            value: "120104"
          },
          {
            text: "河北区",
            value: "120105"
          },
          {
            text: "红桥区",
            value: "120106"
          },
          {
            text: "塘沽区",
            value: "120107"
          },
          {
            text: "汉沽区",
            value: "120108"
          },
          {
            text: "大港区",
            value: "120109"
          },
          {
            text: "东丽区",
            value: "120110"
          },
          {
            text: "西青区",
            value: "120111"
          },
          {
            text: "津南区",
            value: "120112"
          },
          {
            text: "北辰区",
            value: "120113"
          },
          {
            text: "武清区",
            value: "120114"
          },
          {
            text: "宝坻区",
            value: "120115"
          }
        ]
      },
      {
        code: 120200,
        options: [
          {
            text: "宁河",
            value: "120221"
          },
          {
            text: "静海",
            value: "120223"
          },
          {
            text: "蓟",
            value: "120225"
          }
        ]
      },
      {
        code: 310100,
        options: [
          {
            text: "黄浦区",
            value: "310101"
          },
          {
            text: "卢湾区",
            value: "310103"
          },
          {
            text: "徐汇区",
            value: "310104"
          },
          {
            text: "长宁区",
            value: "310105"
          },
          {
            text: "静安区",
            value: "310106"
          },
          {
            text: "普陀区",
            value: "310107"
          },
          {
            text: "闸北区",
            value: "310108"
          },
          {
            text: "虹口区",
            value: "310109"
          },
          {
            text: "杨浦区",
            value: "310110"
          },
          {
            text: "闵行区",
            value: "310112"
          },
          {
            text: "宝山区",
            value: "310113"
          },
          {
            text: "嘉定区",
            value: "310114"
          },
          {
            text: "浦东新区",
            value: "310115"
          },
          {
            text: "金山区",
            value: "310116"
          },
          {
            text: "松江区",
            value: "310117"
          },
          {
            text: "青浦区",
            value: "310118"
          },
          {
            text: "南汇区",
            value: "310119"
          },
          {
            text: "奉贤区",
            value: "310120"
          }
        ]
      },
      {
        code: 310200,
        options: [
          {
            text: "崇明",
            value: "310230"
          }
        ]
      },
      {
        code: 500100,
        options: [
          {
            text: "万州区",
            value: "500101"
          },
          {
            text: "涪陵区",
            value: "500102"
          },
          {
            text: "渝中区",
            value: "500103"
          },
          {
            text: "大渡口区",
            value: "500104"
          },
          {
            text: "江北区",
            value: "500105"
          },
          {
            text: "沙坪坝区",
            value: "500106"
          },
          {
            text: "九龙坡区",
            value: "500107"
          },
          {
            text: "南岸区",
            value: "500108"
          },
          {
            text: "北碚区",
            value: "500109"
          },
          {
            text: "万盛区",
            value: "500110"
          },
          {
            text: "双桥区",
            value: "500111"
          },
          {
            text: "渝北区",
            value: "500112"
          },
          {
            text: "巴南区",
            value: "500113"
          },
          {
            text: "黔江区",
            value: "500114"
          },
          {
            text: "长寿区",
            value: "500115"
          }
        ]
      },
      {
        code: 500200,
        options: [
          {
            text: "綦江",
            value: "500222"
          },
          {
            text: "潼南",
            value: "500223"
          },
          {
            text: "铜梁",
            value: "500224"
          },
          {
            text: "大足",
            value: "500225"
          },
          {
            text: "荣昌",
            value: "500226"
          },
          {
            text: "璧山",
            value: "500227"
          },
          {
            text: "梁平",
            value: "500228"
          },
          {
            text: "城口",
            value: "500229"
          },
          {
            text: "丰都",
            value: "500230"
          },
          {
            text: "垫江",
            value: "500231"
          },
          {
            text: "武隆",
            value: "500232"
          },
          {
            text: "忠",
            value: "500233"
          },
          {
            text: "开",
            value: "500234"
          },
          {
            text: "云阳",
            value: "500235"
          },
          {
            text: "奉节",
            value: "500236"
          },
          {
            text: "巫山",
            value: "500237"
          },
          {
            text: "巫溪",
            value: "500238"
          },
          {
            text: "石柱土家族自治",
            value: "500240"
          },
          {
            text: "秀山土家族苗族自治",
            value: "500241"
          },
          {
            text: "酉阳土家族苗族自治",
            value: "500242"
          },
          {
            text: "彭水苗族土家族自治",
            value: "500243"
          }
        ]
      },
      {
        code: 500300,
        options: [
          {
            text: "重庆江津",
            value: "500381"
          },
          {
            text: "重庆合川",
            value: "500382"
          },
          {
            text: "重庆永川",
            value: "500383"
          },
          {
            text: "重庆南川",
            value: "500384"
          }
        ]
      },
      {
        code: 130100,
        options: [
          {
            text: "市辖区",
            value: "130101"
          },
          {
            text: "长安区",
            value: "130102"
          },
          {
            text: "桥东区",
            value: "130103"
          },
          {
            text: "桥西区",
            value: "130104"
          },
          {
            text: "新华区",
            value: "130105"
          },
          {
            text: "井陉矿区",
            value: "130107"
          },
          {
            text: "裕华区",
            value: "130108"
          },
          {
            text: "井陉县",
            value: "130121"
          },
          {
            text: "正定县",
            value: "130123"
          },
          {
            text: "栾城县",
            value: "130124"
          },
          {
            text: "行唐县",
            value: "130125"
          },
          {
            text: "灵寿县",
            value: "130126"
          },
          {
            text: "高邑县",
            value: "130127"
          },
          {
            text: "深泽县",
            value: "130128"
          },
          {
            text: "赞皇县",
            value: "130129"
          },
          {
            text: "无极县",
            value: "130130"
          },
          {
            text: "平山县",
            value: "130131"
          },
          {
            text: "元氏县",
            value: "130132"
          },
          {
            text: "赵县",
            value: "130133"
          },
          {
            text: "辛集市",
            value: "130181"
          },
          {
            text: "藁城市",
            value: "130182"
          },
          {
            text: "晋州市",
            value: "130183"
          },
          {
            text: "新乐市",
            value: "130184"
          },
          {
            text: "鹿泉市",
            value: "130185"
          }
        ]
      },
      {
        code: 130200,
        options: [
          {
            text: "市辖区",
            value: "130201"
          },
          {
            text: "路南区",
            value: "130202"
          },
          {
            text: "路北区",
            value: "130203"
          },
          {
            text: "古冶区",
            value: "130204"
          },
          {
            text: "开平区",
            value: "130205"
          },
          {
            text: "丰南区",
            value: "130207"
          },
          {
            text: "丰润区",
            value: "130208"
          },
          {
            text: "滦县",
            value: "130223"
          },
          {
            text: "滦南县",
            value: "130224"
          },
          {
            text: "乐亭县",
            value: "130225"
          },
          {
            text: "迁西县",
            value: "130227"
          },
          {
            text: "玉田县",
            value: "130229"
          },
          {
            text: "唐海县",
            value: "130230"
          },
          {
            text: "遵化市",
            value: "130281"
          },
          {
            text: "迁安市",
            value: "130283"
          }
        ]
      },
      {
        code: 130300,
        options: [
          {
            text: "市辖区",
            value: "130301"
          },
          {
            text: "海港区",
            value: "130302"
          },
          {
            text: "山海关区",
            value: "130303"
          },
          {
            text: "北戴河区",
            value: "130304"
          },
          {
            text: "青龙满族自治县",
            value: "130321"
          },
          {
            text: "昌黎县",
            value: "130322"
          },
          {
            text: "抚宁县",
            value: "130323"
          },
          {
            text: "卢龙县",
            value: "130324"
          }
        ]
      },
      {
        code: 130400,
        options: [
          {
            text: "市辖区",
            value: "130401"
          },
          {
            text: "邯山区",
            value: "130402"
          },
          {
            text: "丛台区",
            value: "130403"
          },
          {
            text: "复兴区",
            value: "130404"
          },
          {
            text: "峰峰矿区",
            value: "130406"
          },
          {
            text: "邯郸县",
            value: "130421"
          },
          {
            text: "临漳县",
            value: "130423"
          },
          {
            text: "成安县",
            value: "130424"
          },
          {
            text: "大名县",
            value: "130425"
          },
          {
            text: "涉县",
            value: "130426"
          },
          {
            text: "磁县",
            value: "130427"
          },
          {
            text: "肥乡县",
            value: "130428"
          },
          {
            text: "永年县",
            value: "130429"
          },
          {
            text: "邱县",
            value: "130430"
          },
          {
            text: "鸡泽县",
            value: "130431"
          },
          {
            text: "广平县",
            value: "130432"
          },
          {
            text: "馆陶县",
            value: "130433"
          },
          {
            text: "魏县",
            value: "130434"
          },
          {
            text: "曲周县",
            value: "130435"
          },
          {
            text: "武安市",
            value: "130481"
          }
        ]
      },
      {
        code: 130500,
        options: [
          {
            text: "市辖区",
            value: "130501"
          },
          {
            text: "桥东区",
            value: "130502"
          },
          {
            text: "桥西区",
            value: "130503"
          },
          {
            text: "邢台县",
            value: "130521"
          },
          {
            text: "临城县",
            value: "130522"
          },
          {
            text: "内丘县",
            value: "130523"
          },
          {
            text: "柏乡县",
            value: "130524"
          },
          {
            text: "隆尧县",
            value: "130525"
          },
          {
            text: "任县",
            value: "130526"
          },
          {
            text: "南和县",
            value: "130527"
          },
          {
            text: "宁晋县",
            value: "130528"
          },
          {
            text: "巨鹿县",
            value: "130529"
          },
          {
            text: "新河县",
            value: "130530"
          },
          {
            text: "广宗县",
            value: "130531"
          },
          {
            text: "平乡县",
            value: "130532"
          },
          {
            text: "威县",
            value: "130533"
          },
          {
            text: "清河县",
            value: "130534"
          },
          {
            text: "临西县",
            value: "130535"
          },
          {
            text: "南宫市",
            value: "130581"
          },
          {
            text: "沙河市",
            value: "130582"
          }
        ]
      },
      {
        code: 130600,
        options: [
          {
            text: "市辖区",
            value: "130601"
          },
          {
            text: "新市区",
            value: "130602"
          },
          {
            text: "北市区",
            value: "130603"
          },
          {
            text: "南市区",
            value: "130604"
          },
          {
            text: "满城县",
            value: "130621"
          },
          {
            text: "清苑县",
            value: "130622"
          },
          {
            text: "涞水县",
            value: "130623"
          },
          {
            text: "阜平县",
            value: "130624"
          },
          {
            text: "徐水县",
            value: "130625"
          },
          {
            text: "定兴县",
            value: "130626"
          },
          {
            text: "唐县",
            value: "130627"
          },
          {
            text: "高阳县",
            value: "130628"
          },
          {
            text: "容城县",
            value: "130629"
          },
          {
            text: "涞源县",
            value: "130630"
          },
          {
            text: "望都县",
            value: "130631"
          },
          {
            text: "安新县",
            value: "130632"
          },
          {
            text: "易县",
            value: "130633"
          },
          {
            text: "曲阳县",
            value: "130634"
          },
          {
            text: "蠡县",
            value: "130635"
          },
          {
            text: "顺平县",
            value: "130636"
          },
          {
            text: "博野县",
            value: "130637"
          },
          {
            text: "雄县",
            value: "130638"
          },
          {
            text: "涿州市",
            value: "130681"
          },
          {
            text: "定州市",
            value: "130682"
          },
          {
            text: "安国市",
            value: "130683"
          },
          {
            text: "高碑店市",
            value: "130684"
          }
        ]
      },
      {
        code: 130700,
        options: [
          {
            text: "市辖区",
            value: "130701"
          },
          {
            text: "桥东区",
            value: "130702"
          },
          {
            text: "桥西区",
            value: "130703"
          },
          {
            text: "宣化区",
            value: "130705"
          },
          {
            text: "下花园区",
            value: "130706"
          },
          {
            text: "宣化县",
            value: "130721"
          },
          {
            text: "张北县",
            value: "130722"
          },
          {
            text: "康保县",
            value: "130723"
          },
          {
            text: "沽源县",
            value: "130724"
          },
          {
            text: "尚义县",
            value: "130725"
          },
          {
            text: "蔚县",
            value: "130726"
          },
          {
            text: "阳原县",
            value: "130727"
          },
          {
            text: "怀安县",
            value: "130728"
          },
          {
            text: "万全县",
            value: "130729"
          },
          {
            text: "怀来县",
            value: "130730"
          },
          {
            text: "涿鹿县",
            value: "130731"
          },
          {
            text: "赤城县",
            value: "130732"
          },
          {
            text: "崇礼县",
            value: "130733"
          }
        ]
      },
      {
        code: 130800,
        options: [
          {
            text: "市辖区",
            value: "130801"
          },
          {
            text: "双桥区",
            value: "130802"
          },
          {
            text: "双滦区",
            value: "130803"
          },
          {
            text: "鹰手营子矿区",
            value: "130804"
          },
          {
            text: "承德县",
            value: "130821"
          },
          {
            text: "兴隆县",
            value: "130822"
          },
          {
            text: "平泉县",
            value: "130823"
          },
          {
            text: "滦平县",
            value: "130824"
          },
          {
            text: "隆化县",
            value: "130825"
          },
          {
            text: "丰宁满族自治县",
            value: "130826"
          },
          {
            text: "宽城满族自治县",
            value: "130827"
          },
          {
            text: "围场满族蒙古族自治县",
            value: "130828"
          }
        ]
      },
      {
        code: 130900,
        options: [
          {
            text: "市辖区",
            value: "130901"
          },
          {
            text: "新华区",
            value: "130902"
          },
          {
            text: "运河区",
            value: "130903"
          },
          {
            text: "沧县",
            value: "130921"
          },
          {
            text: "青县",
            value: "130922"
          },
          {
            text: "东光县",
            value: "130923"
          },
          {
            text: "海兴县",
            value: "130924"
          },
          {
            text: "盐山县",
            value: "130925"
          },
          {
            text: "肃宁县",
            value: "130926"
          },
          {
            text: "南皮县",
            value: "130927"
          },
          {
            text: "吴桥县",
            value: "130928"
          },
          {
            text: "献县",
            value: "130929"
          },
          {
            text: "孟村回族自治县",
            value: "130930"
          },
          {
            text: "泊头市",
            value: "130981"
          },
          {
            text: "任丘市",
            value: "130982"
          },
          {
            text: "黄骅市",
            value: "130983"
          },
          {
            text: "河间市",
            value: "130984"
          }
        ]
      },
      {
        code: 131000,
        options: [
          {
            text: "市辖区",
            value: "131001"
          },
          {
            text: "安次区",
            value: "131002"
          },
          {
            text: "广阳区",
            value: "131003"
          },
          {
            text: "固安县",
            value: "131022"
          },
          {
            text: "永清县",
            value: "131023"
          },
          {
            text: "香河县",
            value: "131024"
          },
          {
            text: "大城县",
            value: "131025"
          },
          {
            text: "文安县",
            value: "131026"
          },
          {
            text: "大厂回族自治县",
            value: "131028"
          },
          {
            text: "霸州市",
            value: "131081"
          },
          {
            text: "三河市",
            value: "131082"
          }
        ]
      },
      {
        code: 131100,
        options: [
          {
            text: "市辖区",
            value: "131101"
          },
          {
            text: "桃城区",
            value: "131102"
          },
          {
            text: "枣强县",
            value: "131121"
          },
          {
            text: "武邑县",
            value: "131122"
          },
          {
            text: "武强县",
            value: "131123"
          },
          {
            text: "饶阳县",
            value: "131124"
          },
          {
            text: "安平县",
            value: "131125"
          },
          {
            text: "故城县",
            value: "131126"
          },
          {
            text: "景县",
            value: "131127"
          },
          {
            text: "阜城县",
            value: "131128"
          },
          {
            text: "冀州市",
            value: "131181"
          },
          {
            text: "深州市",
            value: "131182"
          }
        ]
      },
      {
        code: 140100,
        options: [
          {
            text: "市辖区",
            value: "140101"
          },
          {
            text: "小店区",
            value: "140105"
          },
          {
            text: "迎泽区",
            value: "140106"
          },
          {
            text: "杏花岭区",
            value: "140107"
          },
          {
            text: "尖草坪区",
            value: "140108"
          },
          {
            text: "万柏林区",
            value: "140109"
          },
          {
            text: "晋源区",
            value: "140110"
          },
          {
            text: "清徐县",
            value: "140121"
          },
          {
            text: "阳曲县",
            value: "140122"
          },
          {
            text: "娄烦县",
            value: "140123"
          },
          {
            text: "古交市",
            value: "140181"
          }
        ]
      },
      {
        code: 140200,
        options: [
          {
            text: "市辖区",
            value: "140201"
          },
          {
            text: "城区",
            value: "140202"
          },
          {
            text: "矿区",
            value: "140203"
          },
          {
            text: "南郊区",
            value: "140211"
          },
          {
            text: "新荣区",
            value: "140212"
          },
          {
            text: "阳高县",
            value: "140221"
          },
          {
            text: "天镇县",
            value: "140222"
          },
          {
            text: "广灵县",
            value: "140223"
          },
          {
            text: "灵丘县",
            value: "140224"
          },
          {
            text: "浑源县",
            value: "140225"
          },
          {
            text: "左云县",
            value: "140226"
          },
          {
            text: "大同县",
            value: "140227"
          }
        ]
      },
      {
        code: 140300,
        options: [
          {
            text: "市辖区",
            value: "140301"
          },
          {
            text: "城区",
            value: "140302"
          },
          {
            text: "矿区",
            value: "140303"
          },
          {
            text: "郊区",
            value: "140311"
          },
          {
            text: "平定县",
            value: "140321"
          },
          {
            text: "盂县",
            value: "140322"
          }
        ]
      },
      {
        code: 140400,
        options: [
          {
            text: "市辖区",
            value: "140401"
          },
          {
            text: "城区",
            value: "140402"
          },
          {
            text: "郊区",
            value: "140411"
          },
          {
            text: "长治县",
            value: "140421"
          },
          {
            text: "襄垣县",
            value: "140423"
          },
          {
            text: "屯留县",
            value: "140424"
          },
          {
            text: "平顺县",
            value: "140425"
          },
          {
            text: "黎城县",
            value: "140426"
          },
          {
            text: "壶关县",
            value: "140427"
          },
          {
            text: "长子县",
            value: "140428"
          },
          {
            text: "武乡县",
            value: "140429"
          },
          {
            text: "沁县",
            value: "140430"
          },
          {
            text: "沁源县",
            value: "140431"
          },
          {
            text: "潞城市",
            value: "140481"
          }
        ]
      },
      {
        code: 140500,
        options: [
          {
            text: "市辖区",
            value: "140501"
          },
          {
            text: "城区",
            value: "140502"
          },
          {
            text: "沁水县",
            value: "140521"
          },
          {
            text: "阳城县",
            value: "140522"
          },
          {
            text: "陵川县",
            value: "140524"
          },
          {
            text: "泽州县",
            value: "140525"
          },
          {
            text: "高平市",
            value: "140581"
          }
        ]
      },
      {
        code: 140600,
        options: [
          {
            text: "市辖区",
            value: "140601"
          },
          {
            text: "朔城区",
            value: "140602"
          },
          {
            text: "平鲁区",
            value: "140603"
          },
          {
            text: "山阴县",
            value: "140621"
          },
          {
            text: "应县",
            value: "140622"
          },
          {
            text: "右玉县",
            value: "140623"
          },
          {
            text: "怀仁县",
            value: "140624"
          }
        ]
      },
      {
        code: 140700,
        options: [
          {
            text: "市辖区",
            value: "140701"
          },
          {
            text: "榆次市",
            value: "140702"
          },
          {
            text: "榆社县",
            value: "140721"
          },
          {
            text: "左权县",
            value: "140722"
          },
          {
            text: "和顺县",
            value: "140723"
          },
          {
            text: "昔阳县",
            value: "140724"
          },
          {
            text: "寿阳县",
            value: "140725"
          },
          {
            text: "太谷县",
            value: "140726"
          },
          {
            text: "祁县",
            value: "140727"
          },
          {
            text: "平遥县",
            value: "140728"
          },
          {
            text: "灵石县",
            value: "140729"
          },
          {
            text: "介休市",
            value: "140781"
          }
        ]
      },
      {
        code: 140800,
        options: [
          {
            text: "市辖区",
            value: "140801"
          },
          {
            text: "盐湖区",
            value: "140802"
          },
          {
            text: "临猗县",
            value: "140821"
          },
          {
            text: "万荣县",
            value: "140822"
          },
          {
            text: "闻喜县",
            value: "140823"
          },
          {
            text: "稷山县",
            value: "140824"
          },
          {
            text: "新绛县",
            value: "140825"
          },
          {
            text: "绛县",
            value: "140826"
          },
          {
            text: "垣曲县",
            value: "140827"
          },
          {
            text: "夏县",
            value: "140828"
          },
          {
            text: "平陆县",
            value: "140829"
          },
          {
            text: "芮城县",
            value: "140830"
          },
          {
            text: "永济市",
            value: "140881"
          },
          {
            text: "河津市",
            value: "140882"
          }
        ]
      },
      {
        code: 140900,
        options: [
          {
            text: "市辖区",
            value: "140901"
          },
          {
            text: "忻府区",
            value: "140902"
          },
          {
            text: "定襄县",
            value: "140921"
          },
          {
            text: "五台县",
            value: "140922"
          },
          {
            text: "代县",
            value: "140923"
          },
          {
            text: "繁峙县",
            value: "140924"
          },
          {
            text: "宁武县",
            value: "140925"
          },
          {
            text: "静乐县",
            value: "140926"
          },
          {
            text: "神池县",
            value: "140927"
          },
          {
            text: "五寨县",
            value: "140928"
          },
          {
            text: "岢岚县",
            value: "140929"
          },
          {
            text: "河曲县",
            value: "140930"
          },
          {
            text: "保德县",
            value: "140931"
          },
          {
            text: "偏关县",
            value: "140932"
          },
          {
            text: "原平市",
            value: "140981"
          }
        ]
      },
      {
        code: 141000,
        options: [
          {
            text: "市辖区",
            value: "141001"
          },
          {
            text: "尧都区",
            value: "141002"
          },
          {
            text: "曲沃县",
            value: "141021"
          },
          {
            text: "翼城县",
            value: "141022"
          },
          {
            text: "襄汾县",
            value: "141023"
          },
          {
            text: "洪洞县",
            value: "141024"
          },
          {
            text: "古县",
            value: "141025"
          },
          {
            text: "安泽县",
            value: "141026"
          },
          {
            text: "浮山县",
            value: "141027"
          },
          {
            text: "吉县",
            value: "141028"
          },
          {
            text: "乡宁县",
            value: "141029"
          },
          {
            text: "大宁县",
            value: "141030"
          },
          {
            text: "隰县",
            value: "141031"
          },
          {
            text: "永和县",
            value: "141032"
          },
          {
            text: "蒲县",
            value: "141033"
          },
          {
            text: "汾西县",
            value: "141034"
          },
          {
            text: "侯马市",
            value: "141081"
          },
          {
            text: "霍州市",
            value: "141082"
          }
        ]
      },
      {
        code: 141100,
        options: [
          {
            text: "市辖区",
            value: "141101"
          },
          {
            text: "离石区",
            value: "141102"
          },
          {
            text: "文水县",
            value: "141121"
          },
          {
            text: "交城县",
            value: "141122"
          },
          {
            text: "兴县",
            value: "141123"
          },
          {
            text: "临县",
            value: "141124"
          },
          {
            text: "柳林县",
            value: "141125"
          },
          {
            text: "石楼县",
            value: "141126"
          },
          {
            text: "岚县",
            value: "141127"
          },
          {
            text: "方山县",
            value: "141128"
          },
          {
            text: "中阳县",
            value: "141129"
          },
          {
            text: "交口县",
            value: "141130"
          },
          {
            text: " 孝义县",
            value: "141181"
          },
          {
            text: " 汾阳县",
            value: "141182"
          }
        ]
      },
      {
        code: 150100,
        options: [
          {
            text: "市辖区",
            value: "150101"
          },
          {
            text: "新城区",
            value: "150102"
          },
          {
            text: "回民区",
            value: "150103"
          },
          {
            text: "玉泉区",
            value: "150104"
          },
          {
            text: "赛罕市",
            value: "150105"
          },
          {
            text: "土默特左旗",
            value: "150121"
          },
          {
            text: "托克托县",
            value: "150122"
          },
          {
            text: "和林格尔县",
            value: "150123"
          },
          {
            text: "清水河县",
            value: "150124"
          },
          {
            text: "武川县",
            value: "150125"
          }
        ]
      },
      {
        code: 150200,
        options: [
          {
            text: "市辖区",
            value: "150201"
          },
          {
            text: "东河区",
            value: "150202"
          },
          {
            text: "昆都仑区",
            value: "150203"
          },
          {
            text: "青山区",
            value: "150204"
          },
          {
            text: "石拐区",
            value: "150205"
          },
          {
            text: "白云矿区",
            value: "150206"
          },
          {
            text: "九元区",
            value: "150207"
          },
          {
            text: "土默特右旗",
            value: "150221"
          },
          {
            text: "固阳县",
            value: "150222"
          },
          {
            text: "达尔罕茂明安联合旗",
            value: "150223"
          }
        ]
      },
      {
        code: 150300,
        options: [
          {
            text: "市辖区",
            value: "150301"
          },
          {
            text: "海勃湾区",
            value: "150302"
          },
          {
            text: "海南区",
            value: "150303"
          },
          {
            text: "乌达区",
            value: "150304"
          }
        ]
      },
      {
        code: 150400,
        options: [
          {
            text: "市辖区",
            value: "150401"
          },
          {
            text: "红山区",
            value: "150402"
          },
          {
            text: "元宝山区",
            value: "150403"
          },
          {
            text: "松山区",
            value: "150404"
          },
          {
            text: "阿鲁科尔沁旗",
            value: "150421"
          },
          {
            text: "巴林左旗",
            value: "150422"
          },
          {
            text: "巴林右旗",
            value: "150423"
          },
          {
            text: "林西县",
            value: "150424"
          },
          {
            text: "克什克腾旗",
            value: "150425"
          },
          {
            text: "翁牛特旗",
            value: "150426"
          },
          {
            text: "喀喇沁旗",
            value: "150428"
          },
          {
            text: "宁城县",
            value: "150429"
          },
          {
            text: "敖汉旗",
            value: "150430"
          }
        ]
      },
      {
        code: 150500,
        options: [
          {
            text: "市辖区",
            value: "150501"
          },
          {
            text: "科尔沁区",
            value: "150502"
          },
          {
            text: "科尔沁左翼中旗",
            value: "150521"
          },
          {
            text: "科尔沁左翼后旗",
            value: "150522"
          },
          {
            text: "开鲁县",
            value: "150523"
          },
          {
            text: "库伦旗",
            value: "150524"
          },
          {
            text: "奈曼旗",
            value: "150525"
          },
          {
            text: "扎鲁特旗",
            value: "150526"
          },
          {
            text: "霍林郭勒市",
            value: "150581"
          }
        ]
      },
      {
        code: 150600,
        options: [
          {
            text: "东胜市",
            value: "150602"
          },
          {
            text: "达拉特旗",
            value: "150621"
          },
          {
            text: "准格尔旗",
            value: "150622"
          },
          {
            text: "鄂托克前旗",
            value: "150623"
          },
          {
            text: "鄂托克旗",
            value: "150624"
          },
          {
            text: "杭锦旗",
            value: "150625"
          },
          {
            text: "乌审旗",
            value: "150626"
          },
          {
            text: "伊金霍洛旗",
            value: "150627"
          }
        ]
      },
      {
        code: 150700,
        options: [
          {
            text: "市辖区",
            value: "150701"
          },
          {
            text: "海拉尔市",
            value: "150702"
          },
          {
            text: "阿荣旗",
            value: "150721"
          },
          {
            text: "莫力达瓦达斡尔族自治旗",
            value: "150722"
          },
          {
            text: "鄂伦春自治旗",
            value: "150723"
          },
          {
            text: "鄂温克族自治旗",
            value: "150724"
          },
          {
            text: "陈巴尔虎旗",
            value: "150725"
          },
          {
            text: "新巴尔虎左旗",
            value: "150726"
          },
          {
            text: "新巴尔虎右旗",
            value: "150727"
          },
          {
            text: "满洲里市",
            value: "150781"
          },
          {
            text: "牙克石市",
            value: "150782"
          },
          {
            text: "扎兰屯市",
            value: "150783"
          },
          {
            text: "额尔古纳市",
            value: "150784"
          },
          {
            text: "根河市",
            value: "150785"
          }
        ]
      },
      {
        code: 150800,
        options: [
          {
            text: "市辖区",
            value: "150801"
          },
          {
            text: "临河区",
            value: "150802"
          },
          {
            text: "五原县",
            value: "150821"
          },
          {
            text: "磴口县",
            value: "150822"
          },
          {
            text: "乌拉特前旗",
            value: "150823"
          },
          {
            text: "乌拉特中旗",
            value: "150824"
          },
          {
            text: "乌拉特后旗",
            value: "150825"
          },
          {
            text: "杭锦后旗",
            value: "150826"
          }
        ]
      },
      {
        code: 150900,
        options: [
          {
            text: "市辖区",
            value: "150901"
          },
          {
            text: "集宁区",
            value: "150902"
          },
          {
            text: "卓资县",
            value: "150921"
          },
          {
            text: "化德县",
            value: "150922"
          },
          {
            text: "商都县",
            value: "150923"
          },
          {
            text: "兴和县",
            value: "150924"
          },
          {
            text: "凉城县",
            value: "150925"
          },
          {
            text: "察哈尔右翼前旗",
            value: "150926"
          },
          {
            text: "察哈尔右翼中旗",
            value: "150927"
          },
          {
            text: "察哈尔右翼后旗",
            value: "150928"
          },
          {
            text: "四子王旗",
            value: "150929"
          },
          {
            text: "丰镇市",
            value: "150981"
          }
        ]
      },
      {
        code: 152200,
        options: [
          {
            text: "乌兰浩特市",
            value: "152201"
          },
          {
            text: "阿尔山市",
            value: "152202"
          },
          {
            text: "科尔沁右翼前旗",
            value: "152221"
          },
          {
            text: "科尔沁右翼中旗",
            value: "152222"
          },
          {
            text: "扎赉特旗",
            value: "152223"
          },
          {
            text: "突泉县",
            value: "152224"
          }
        ]
      },
      {
        code: 152500,
        options: [
          {
            text: "二连浩特市",
            value: "152501"
          },
          {
            text: "锡林浩特市",
            value: "152502"
          },
          {
            text: "阿巴嘎旗",
            value: "152522"
          },
          {
            text: "苏尼特左旗",
            value: "152523"
          },
          {
            text: "苏尼特右旗",
            value: "152524"
          },
          {
            text: "东乌珠穆沁旗",
            value: "152525"
          },
          {
            text: "西乌珠穆沁旗",
            value: "152526"
          },
          {
            text: "太仆寺旗",
            value: "152527"
          },
          {
            text: "镶黄旗",
            value: "152528"
          },
          {
            text: "正镶白旗",
            value: "152529"
          },
          {
            text: "正蓝旗",
            value: "152530"
          },
          {
            text: "多伦县",
            value: "152531"
          }
        ]
      },
      {
        code: 152900,
        options: [
          {
            text: "阿拉善左旗",
            value: "152921"
          },
          {
            text: "阿拉善右旗",
            value: "152922"
          },
          {
            text: "额济纳旗",
            value: "152923"
          }
        ]
      },
      {
        code: 210100,
        options: [
          {
            text: "市辖区",
            value: "210101"
          },
          {
            text: "和平区",
            value: "210102"
          },
          {
            text: "沈河区",
            value: "210103"
          },
          {
            text: "大东区",
            value: "210104"
          },
          {
            text: "皇姑区",
            value: "210105"
          },
          {
            text: "铁西区",
            value: "210106"
          },
          {
            text: "苏家屯区",
            value: "210111"
          },
          {
            text: "东陵区",
            value: "210112"
          },
          {
            text: "新城子区",
            value: "210113"
          },
          {
            text: "于洪区",
            value: "210114"
          },
          {
            text: "辽中县",
            value: "210122"
          },
          {
            text: "康平县",
            value: "210123"
          },
          {
            text: "法库县",
            value: "210124"
          },
          {
            text: "新民市",
            value: "210181"
          }
        ]
      },
      {
        code: 210200,
        options: [
          {
            text: "市辖区",
            value: "210201"
          },
          {
            text: "中山区",
            value: "210202"
          },
          {
            text: "西岗区",
            value: "210203"
          },
          {
            text: "沙河口区",
            value: "210204"
          },
          {
            text: "甘井子区",
            value: "210211"
          },
          {
            text: "旅顺口区",
            value: "210212"
          },
          {
            text: "金州区",
            value: "210213"
          },
          {
            text: "长海县",
            value: "210224"
          },
          {
            text: "瓦房店市",
            value: "210281"
          },
          {
            text: "普兰店市",
            value: "210282"
          },
          {
            text: "庄河市",
            value: "210283"
          }
        ]
      },
      {
        code: 210300,
        options: [
          {
            text: "市辖区",
            value: "210301"
          },
          {
            text: "铁东区",
            value: "210302"
          },
          {
            text: "铁西区",
            value: "210303"
          },
          {
            text: "立山区",
            value: "210304"
          },
          {
            text: "千山区",
            value: "210311"
          },
          {
            text: "台安县",
            value: "210321"
          },
          {
            text: "岫岩满族自治县",
            value: "210323"
          },
          {
            text: "海城市",
            value: "210381"
          }
        ]
      },
      {
        code: 210400,
        options: [
          {
            text: "市辖区",
            value: "210401"
          },
          {
            text: "新抚区",
            value: "210402"
          },
          {
            text: "东洲区",
            value: "210403"
          },
          {
            text: "望花区",
            value: "210404"
          },
          {
            text: "顺城区",
            value: "210411"
          },
          {
            text: "抚顺县",
            value: "210421"
          },
          {
            text: "新宾满族自治县",
            value: "210422"
          },
          {
            text: "清原满族自治县",
            value: "210423"
          }
        ]
      },
      {
        code: 210500,
        options: [
          {
            text: "市辖区",
            value: "210501"
          },
          {
            text: "平山区",
            value: "210502"
          },
          {
            text: "溪湖区",
            value: "210503"
          },
          {
            text: "明山区",
            value: "210504"
          },
          {
            text: "南芬区",
            value: "210505"
          },
          {
            text: "本溪满族自治县",
            value: "210521"
          },
          {
            text: "桓仁满族自治县",
            value: "210522"
          }
        ]
      },
      {
        code: 210600,
        options: [
          {
            text: "市辖区",
            value: "210601"
          },
          {
            text: "元宝区",
            value: "210602"
          },
          {
            text: "振兴区",
            value: "210603"
          },
          {
            text: "振安区",
            value: "210604"
          },
          {
            text: "宽甸满族自治县",
            value: "210624"
          },
          {
            text: "东港市",
            value: "210681"
          },
          {
            text: "凤城市",
            value: "210682"
          }
        ]
      },
      {
        code: 210700,
        options: [
          {
            text: "市辖区",
            value: "210701"
          },
          {
            text: "古塔区",
            value: "210702"
          },
          {
            text: "凌河区",
            value: "210703"
          },
          {
            text: "太和区",
            value: "210711"
          },
          {
            text: "黑山县",
            value: "210726"
          },
          {
            text: "义县",
            value: "210727"
          },
          {
            text: "凌海市",
            value: "210781"
          },
          {
            text: "北宁市",
            value: "210782"
          }
        ]
      },
      {
        code: 210800,
        options: [
          {
            text: "市辖区",
            value: "210801"
          },
          {
            text: "站前区",
            value: "210802"
          },
          {
            text: "西市区",
            value: "210803"
          },
          {
            text: "鲅鱼圈区",
            value: "210804"
          },
          {
            text: "老边区",
            value: "210811"
          },
          {
            text: "盖州市",
            value: "210881"
          },
          {
            text: "大石桥市",
            value: "210882"
          }
        ]
      },
      {
        code: 210900,
        options: [
          {
            text: "市辖区",
            value: "210901"
          },
          {
            text: "海州区",
            value: "210902"
          },
          {
            text: "新邱区",
            value: "210903"
          },
          {
            text: "太平区",
            value: "210904"
          },
          {
            text: "清河门区",
            value: "210905"
          },
          {
            text: "细河区",
            value: "210911"
          },
          {
            text: "阜新蒙古族自治县",
            value: "210921"
          },
          {
            text: "彰武县",
            value: "210922"
          }
        ]
      },
      {
        code: 211000,
        options: [
          {
            text: "市辖区",
            value: "211001"
          },
          {
            text: "白塔区",
            value: "211002"
          },
          {
            text: "文圣区",
            value: "211003"
          },
          {
            text: "宏伟区",
            value: "211004"
          },
          {
            text: "弓长岭区",
            value: "211005"
          },
          {
            text: "太子河区",
            value: "211011"
          },
          {
            text: "辽阳县",
            value: "211021"
          },
          {
            text: "灯塔市",
            value: "211081"
          }
        ]
      },
      {
        code: 211100,
        options: [
          {
            text: "市辖区",
            value: "211101"
          },
          {
            text: "双台子区",
            value: "211102"
          },
          {
            text: "兴隆台区",
            value: "211103"
          },
          {
            text: "大洼县",
            value: "211121"
          },
          {
            text: "盘山县",
            value: "211122"
          }
        ]
      },
      {
        code: 211200,
        options: [
          {
            text: "市辖区",
            value: "211201"
          },
          {
            text: "银州区",
            value: "211202"
          },
          {
            text: "清河区",
            value: "211204"
          },
          {
            text: "铁岭县",
            value: "211221"
          },
          {
            text: "西丰县",
            value: "211223"
          },
          {
            text: "昌图县",
            value: "211224"
          },
          {
            text: "调兵山市",
            value: "211281"
          },
          {
            text: "开原市",
            value: "211282"
          }
        ]
      },
      {
        code: 211300,
        options: [
          {
            text: "市辖区",
            value: "211301"
          },
          {
            text: "双塔区",
            value: "211302"
          },
          {
            text: "龙城区",
            value: "211303"
          },
          {
            text: "朝阳县",
            value: "211321"
          },
          {
            text: "建平县",
            value: "211322"
          },
          {
            text: "喀喇沁左翼蒙古族自治县",
            value: "211324"
          },
          {
            text: "北票市",
            value: "211381"
          },
          {
            text: "凌源市",
            value: "211382"
          }
        ]
      },
      {
        code: 211400,
        options: [
          {
            text: "市辖区",
            value: "211401"
          },
          {
            text: "连山区",
            value: "211402"
          },
          {
            text: "龙港区",
            value: "211403"
          },
          {
            text: "南票区",
            value: "211404"
          },
          {
            text: "绥中县",
            value: "211421"
          },
          {
            text: "建昌县",
            value: "211422"
          },
          {
            text: "兴城市",
            value: "211481"
          }
        ]
      },
      {
        code: 220100,
        options: [
          {
            text: "市辖区",
            value: "220101"
          },
          {
            text: "南关区",
            value: "220102"
          },
          {
            text: "宽城区",
            value: "220103"
          },
          {
            text: "朝阳区",
            value: "220104"
          },
          {
            text: "二道区",
            value: "220105"
          },
          {
            text: "绿园区",
            value: "220106"
          },
          {
            text: "双阳区",
            value: "220112"
          },
          {
            text: "农安县",
            value: "220122"
          },
          {
            text: "九台市",
            value: "220181"
          },
          {
            text: "榆树市",
            value: "220182"
          },
          {
            text: "德惠市",
            value: "220183"
          }
        ]
      },
      {
        code: 220200,
        options: [
          {
            text: "市辖区",
            value: "220201"
          },
          {
            text: "昌邑区",
            value: "220202"
          },
          {
            text: "龙潭区",
            value: "220203"
          },
          {
            text: "船营区",
            value: "220204"
          },
          {
            text: "丰满区",
            value: "220211"
          },
          {
            text: "永吉县",
            value: "220221"
          },
          {
            text: "蛟河市",
            value: "220281"
          },
          {
            text: "桦甸市",
            value: "220282"
          },
          {
            text: "舒兰市",
            value: "220283"
          },
          {
            text: "磐石市",
            value: "220284"
          }
        ]
      },
      {
        code: 220300,
        options: [
          {
            text: "市辖区",
            value: "220301"
          },
          {
            text: "铁西区",
            value: "220302"
          },
          {
            text: "铁东区",
            value: "220303"
          },
          {
            text: "梨树县",
            value: "220322"
          },
          {
            text: "伊通满族自治县",
            value: "220323"
          },
          {
            text: "公主岭市",
            value: "220381"
          },
          {
            text: "双辽市",
            value: "220382"
          }
        ]
      },
      {
        code: 220400,
        options: [
          {
            text: "市辖区",
            value: "220401"
          },
          {
            text: "龙山区",
            value: "220402"
          },
          {
            text: "西安区",
            value: "220403"
          },
          {
            text: "东丰县",
            value: "220421"
          },
          {
            text: "东辽县",
            value: "220422"
          }
        ]
      },
      {
        code: 220500,
        options: [
          {
            text: "市辖区",
            value: "220501"
          },
          {
            text: "东昌区",
            value: "220502"
          },
          {
            text: "二道江区",
            value: "220503"
          },
          {
            text: "通化县",
            value: "220521"
          },
          {
            text: "辉南县",
            value: "220523"
          },
          {
            text: "柳河县",
            value: "220524"
          },
          {
            text: "梅河口市",
            value: "220581"
          },
          {
            text: "集安市",
            value: "220582"
          }
        ]
      },
      {
        code: 220600,
        options: [
          {
            text: "市辖区",
            value: "220601"
          },
          {
            text: "八道江区",
            value: "220602"
          },
          {
            text: "抚松县",
            value: "220621"
          },
          {
            text: "靖宇县",
            value: "220622"
          },
          {
            text: "长白朝鲜族自治县",
            value: "220623"
          },
          {
            text: "江源县",
            value: "220625"
          },
          {
            text: "临江市",
            value: "220681"
          }
        ]
      },
      {
        code: 220700,
        options: [
          {
            text: "市辖区",
            value: "220701"
          },
          {
            text: "宁江区",
            value: "220702"
          },
          {
            text: "前郭尔罗斯蒙古族自治县",
            value: "220721"
          },
          {
            text: "长岭县",
            value: "220722"
          },
          {
            text: "乾安县",
            value: "220723"
          },
          {
            text: "扶余县",
            value: "220724"
          }
        ]
      },
      {
        code: 220800,
        options: [
          {
            text: "市辖区",
            value: "220801"
          },
          {
            text: "洮北区",
            value: "220802"
          },
          {
            text: "镇赍县",
            value: "220821"
          },
          {
            text: "通榆县",
            value: "220822"
          },
          {
            text: "洮南市",
            value: "220881"
          },
          {
            text: "大安市",
            value: "220882"
          }
        ]
      },
      {
        code: 222400,
        options: [
          {
            text: "延吉市",
            value: "222401"
          },
          {
            text: "图门市",
            value: "222402"
          },
          {
            text: "敦化市",
            value: "222403"
          },
          {
            text: "珲春市",
            value: "222404"
          },
          {
            text: "龙井市",
            value: "222405"
          },
          {
            text: "和龙市",
            value: "222406"
          },
          {
            text: "汪清县",
            value: "222424"
          },
          {
            text: "安图县",
            value: "222426"
          }
        ]
      },
      {
        code: 230100,
        options: [
          {
            text: "市辖区",
            value: "230101"
          },
          {
            text: "道里区",
            value: "230102"
          },
          {
            text: "南岗区",
            value: "230103"
          },
          {
            text: "道外区",
            value: "230104"
          },
          {
            text: "太平区",
            value: "230105"
          },
          {
            text: "香坊区",
            value: "230106"
          },
          {
            text: "动力区",
            value: "230107"
          },
          {
            text: "平房区",
            value: "230108"
          },
          {
            text: "松北区",
            value: "230109"
          },
          {
            text: "呼兰区",
            value: "230111"
          },
          {
            text: "依兰县",
            value: "230123"
          },
          {
            text: "方正县",
            value: "230124"
          },
          {
            text: "宾县",
            value: "230125"
          },
          {
            text: "巴彦县",
            value: "230126"
          },
          {
            text: "木兰县",
            value: "230127"
          },
          {
            text: "通河县",
            value: "230128"
          },
          {
            text: "延寿县",
            value: "230129"
          },
          {
            text: "阿城市",
            value: "230181"
          },
          {
            text: "双城市",
            value: "230182"
          },
          {
            text: "尚志市",
            value: "230183"
          },
          {
            text: "五常市",
            value: "230184"
          }
        ]
      },
      {
        code: 230200,
        options: [
          {
            text: "市辖区",
            value: "230201"
          },
          {
            text: "龙沙区",
            value: "230202"
          },
          {
            text: "建华区",
            value: "230203"
          },
          {
            text: "铁锋区",
            value: "230204"
          },
          {
            text: "昂昂溪区",
            value: "230205"
          },
          {
            text: "富拉尔基区",
            value: "230206"
          },
          {
            text: "碾子山区",
            value: "230207"
          },
          {
            text: "梅里斯达斡尔族区",
            value: "230208"
          },
          {
            text: "龙江县",
            value: "230221"
          },
          {
            text: "依安县",
            value: "230223"
          },
          {
            text: "泰来县",
            value: "230224"
          },
          {
            text: "甘南县",
            value: "230225"
          },
          {
            text: "富裕县",
            value: "230227"
          },
          {
            text: "克山县",
            value: "230229"
          },
          {
            text: "克东县",
            value: "230230"
          },
          {
            text: "拜泉县",
            value: "230231"
          },
          {
            text: "讷河市",
            value: "230281"
          }
        ]
      },
      {
        code: 230300,
        options: [
          {
            text: "市辖区",
            value: "230301"
          },
          {
            text: "鸡冠区",
            value: "230302"
          },
          {
            text: "恒山区",
            value: "230303"
          },
          {
            text: "滴道区",
            value: "230304"
          },
          {
            text: "梨树区",
            value: "230305"
          },
          {
            text: "城子河区",
            value: "230306"
          },
          {
            text: "麻山区",
            value: "230307"
          },
          {
            text: "鸡东县",
            value: "230321"
          },
          {
            text: "虎林市",
            value: "230381"
          },
          {
            text: "密山市",
            value: "230382"
          }
        ]
      },
      {
        code: 230400,
        options: [
          {
            text: "市辖区",
            value: "230401"
          },
          {
            text: "向阳区",
            value: "230402"
          },
          {
            text: "工农区",
            value: "230403"
          },
          {
            text: "南山区",
            value: "230404"
          },
          {
            text: "兴安区",
            value: "230405"
          },
          {
            text: "东山区",
            value: "230406"
          },
          {
            text: "兴山区",
            value: "230407"
          },
          {
            text: "萝北县",
            value: "230421"
          },
          {
            text: "绥滨县",
            value: "230422"
          }
        ]
      },
      {
        code: 230500,
        options: [
          {
            text: "市辖区",
            value: "230501"
          },
          {
            text: "尖山区",
            value: "230502"
          },
          {
            text: "岭东区",
            value: "230503"
          },
          {
            text: "四方台区",
            value: "230505"
          },
          {
            text: "宝山区",
            value: "230506"
          },
          {
            text: "集贤县",
            value: "230521"
          },
          {
            text: "友谊县",
            value: "230522"
          },
          {
            text: "宝清县",
            value: "230523"
          },
          {
            text: "饶河县",
            value: "230524"
          }
        ]
      },
      {
        code: 230600,
        options: [
          {
            text: "市辖区",
            value: "230601"
          },
          {
            text: "萨尔图区",
            value: "230602"
          },
          {
            text: "龙凤区",
            value: "230603"
          },
          {
            text: "让胡路区",
            value: "230604"
          },
          {
            text: "红岗区",
            value: "230605"
          },
          {
            text: "大同区",
            value: "230606"
          },
          {
            text: "肇州县",
            value: "230621"
          },
          {
            text: "肇源县",
            value: "230622"
          },
          {
            text: "林甸县",
            value: "230623"
          },
          {
            text: "杜尔伯特蒙古族自治县",
            value: "230624"
          }
        ]
      },
      {
        code: 230700,
        options: [
          {
            text: "市辖区",
            value: "230701"
          },
          {
            text: "伊春区",
            value: "230702"
          },
          {
            text: "南岔区",
            value: "230703"
          },
          {
            text: "友好区",
            value: "230704"
          },
          {
            text: "西林区",
            value: "230705"
          },
          {
            text: "翠峦区",
            value: "230706"
          },
          {
            text: "新青区",
            value: "230707"
          },
          {
            text: "美溪区",
            value: "230708"
          },
          {
            text: "金山屯区",
            value: "230709"
          },
          {
            text: "五营区",
            value: "230710"
          },
          {
            text: "乌马河区",
            value: "230711"
          },
          {
            text: "汤旺河区",
            value: "230712"
          },
          {
            text: "带岭区",
            value: "230713"
          },
          {
            text: "乌伊岭区",
            value: "230714"
          },
          {
            text: "红星区",
            value: "230715"
          },
          {
            text: "上甘岭区",
            value: "230716"
          },
          {
            text: "嘉荫县",
            value: "230722"
          },
          {
            text: "铁力市",
            value: "230781"
          }
        ]
      },
      {
        code: 230800,
        options: [
          {
            text: "市辖区",
            value: "230801"
          },
          {
            text: "永红区",
            value: "230802"
          },
          {
            text: "向阳区",
            value: "230803"
          },
          {
            text: "前进区",
            value: "230804"
          },
          {
            text: "东风区",
            value: "230805"
          },
          {
            text: "郊区",
            value: "230811"
          },
          {
            text: "桦南县",
            value: "230822"
          },
          {
            text: "桦川县",
            value: "230826"
          },
          {
            text: "汤原县",
            value: "230828"
          },
          {
            text: "抚远县",
            value: "230833"
          },
          {
            text: "同江市",
            value: "230881"
          },
          {
            text: "富锦市",
            value: "230882"
          }
        ]
      },
      {
        code: 230900,
        options: [
          {
            text: "市辖区",
            value: "230901"
          },
          {
            text: "新兴区",
            value: "230902"
          },
          {
            text: "桃山区",
            value: "230903"
          },
          {
            text: "茄子河区",
            value: "230904"
          },
          {
            text: "勃利县",
            value: "230921"
          }
        ]
      },
      {
        code: 231000,
        options: [
          {
            text: "市辖区",
            value: "231001"
          },
          {
            text: "东安区",
            value: "231002"
          },
          {
            text: "阳明区",
            value: "231003"
          },
          {
            text: "爱民区",
            value: "231004"
          },
          {
            text: "西安区",
            value: "231005"
          },
          {
            text: "东宁县",
            value: "231024"
          },
          {
            text: "林口县",
            value: "231025"
          },
          {
            text: "绥芬河市",
            value: "231081"
          },
          {
            text: "海林市",
            value: "231083"
          },
          {
            text: "宁安市",
            value: "231084"
          },
          {
            text: "穆棱市",
            value: "231085"
          }
        ]
      },
      {
        code: 231100,
        options: [
          {
            text: "市辖区",
            value: "231101"
          },
          {
            text: "爱辉区",
            value: "231102"
          },
          {
            text: "嫩江县",
            value: "231121"
          },
          {
            text: "逊克县",
            value: "231123"
          },
          {
            text: "孙吴县",
            value: "231124"
          },
          {
            text: "北安市",
            value: "231181"
          },
          {
            text: "五大连池市",
            value: "231182"
          }
        ]
      },
      {
        code: 231200,
        options: [
          {
            text: "市辖区",
            value: "231201"
          },
          {
            text: "北林区",
            value: "231202"
          },
          {
            text: "望奎县",
            value: "231221"
          },
          {
            text: "兰西县",
            value: "231222"
          },
          {
            text: "青冈县",
            value: "231223"
          },
          {
            text: "庆安县",
            value: "231224"
          },
          {
            text: "明水县",
            value: "231225"
          },
          {
            text: "绥棱县",
            value: "231226"
          },
          {
            text: "安达市",
            value: "231281"
          },
          {
            text: "肇东市",
            value: "231282"
          },
          {
            text: "海伦市",
            value: "231283"
          }
        ]
      },
      {
        code: 232700,
        options: [
          {
            text: "呼玛县",
            value: "232721"
          },
          {
            text: "塔河县",
            value: "232722"
          },
          {
            text: "漠河县",
            value: "232723"
          }
        ]
      },
      {
        code: 320100,
        options: [
          {
            text: "市辖区",
            value: "320101"
          },
          {
            text: "玄武区",
            value: "320102"
          },
          {
            text: "白下区",
            value: "320103"
          },
          {
            text: "秦淮区",
            value: "320104"
          },
          {
            text: "建邺区",
            value: "320105"
          },
          {
            text: "鼓楼区",
            value: "320106"
          },
          {
            text: "下关区",
            value: "320107"
          },
          {
            text: "浦口区",
            value: "320111"
          },
          {
            text: "栖霞区",
            value: "320113"
          },
          {
            text: "雨花台区",
            value: "320114"
          },
          {
            text: "江宁区",
            value: "320115"
          },
          {
            text: "六合区",
            value: "320116"
          },
          {
            text: "溧水县",
            value: "320124"
          },
          {
            text: "高淳县",
            value: "320125"
          }
        ]
      },
      {
        code: 320200,
        options: [
          {
            text: "市辖区",
            value: "320201"
          },
          {
            text: "崇安区",
            value: "320202"
          },
          {
            text: "南长区",
            value: "320203"
          },
          {
            text: "北塘区",
            value: "320204"
          },
          {
            text: "锡山区",
            value: "320205"
          },
          {
            text: "惠山区",
            value: "320206"
          },
          {
            text: "滨湖区",
            value: "320211"
          },
          {
            text: "江阴市",
            value: "320281"
          },
          {
            text: "宜兴市",
            value: "320282"
          }
        ]
      },
      {
        code: 320300,
        options: [
          {
            text: "市辖区",
            value: "320301"
          },
          {
            text: "鼓楼区",
            value: "320302"
          },
          {
            text: "云龙区",
            value: "320303"
          },
          {
            text: "九里区",
            value: "320304"
          },
          {
            text: "贾汪区",
            value: "320305"
          },
          {
            text: "泉山区",
            value: "320311"
          },
          {
            text: "丰县",
            value: "320321"
          },
          {
            text: "沛县",
            value: "320322"
          },
          {
            text: "铜山县",
            value: "320323"
          },
          {
            text: "睢宁县",
            value: "320324"
          },
          {
            text: "新沂市",
            value: "320381"
          },
          {
            text: "邳州市",
            value: "320382"
          }
        ]
      },
      {
        code: 320400,
        options: [
          {
            text: "市辖区",
            value: "320401"
          },
          {
            text: "天宁区",
            value: "320402"
          },
          {
            text: "钟楼区",
            value: "320404"
          },
          {
            text: "戚墅堰区",
            value: "320405"
          },
          {
            text: "新北区",
            value: "320411"
          },
          {
            text: "武进区",
            value: "320412"
          },
          {
            text: "溧阳市",
            value: "320481"
          },
          {
            text: "金坛市",
            value: "320482"
          }
        ]
      },
      {
        code: 320500,
        options: [
          {
            text: "市辖区",
            value: "320501"
          },
          {
            text: "沧浪区",
            value: "320502"
          },
          {
            text: "平江区",
            value: "320503"
          },
          {
            text: "金阊区",
            value: "320504"
          },
          {
            text: "虎丘区",
            value: "320505"
          },
          {
            text: "吴中区",
            value: "320506"
          },
          {
            text: "相城区",
            value: "320507"
          },
          {
            text: "常熟市",
            value: "320581"
          },
          {
            text: "张家港市",
            value: "320582"
          },
          {
            text: "昆山市",
            value: "320583"
          },
          {
            text: "吴江市",
            value: "320584"
          },
          {
            text: "太仓市",
            value: "320585"
          }
        ]
      },
      {
        code: 320600,
        options: [
          {
            text: "市辖区",
            value: "320601"
          },
          {
            text: "崇川区",
            value: "320602"
          },
          {
            text: "港闸区",
            value: "320611"
          },
          {
            text: "海安县",
            value: "320621"
          },
          {
            text: "如东县",
            value: "320623"
          },
          {
            text: "启东市",
            value: "320681"
          },
          {
            text: "如皋市",
            value: "320682"
          },
          {
            text: "通州市",
            value: "320683"
          },
          {
            text: "海门市",
            value: "320684"
          }
        ]
      },
      {
        code: 320700,
        options: [
          {
            text: "市辖区",
            value: "320701"
          },
          {
            text: "连云区",
            value: "320703"
          },
          {
            text: "新浦区",
            value: "320705"
          },
          {
            text: "海州区",
            value: "320706"
          },
          {
            text: "赣榆县",
            value: "320721"
          },
          {
            text: "东海县",
            value: "320722"
          },
          {
            text: "灌云县",
            value: "320723"
          },
          {
            text: "灌南县",
            value: "320724"
          }
        ]
      },
      {
        code: 320800,
        options: [
          {
            text: "市辖区",
            value: "320801"
          },
          {
            text: "清河区",
            value: "320802"
          },
          {
            text: "楚州区",
            value: "320803"
          },
          {
            text: "淮阴区",
            value: "320804"
          },
          {
            text: "清浦区",
            value: "320811"
          },
          {
            text: "涟水县",
            value: "320826"
          },
          {
            text: "洪泽县",
            value: "320829"
          },
          {
            text: "盱眙县",
            value: "320830"
          },
          {
            text: "金湖县",
            value: "320831"
          }
        ]
      },
      {
        code: 320900,
        options: [
          {
            text: "市辖区",
            value: "320901"
          },
          {
            text: "亭湖区",
            value: "320902"
          },
          {
            text: "盐都区",
            value: "320903"
          },
          {
            text: "响水县",
            value: "320921"
          },
          {
            text: "滨海县",
            value: "320922"
          },
          {
            text: "阜宁县",
            value: "320923"
          },
          {
            text: "射阳县",
            value: "320924"
          },
          {
            text: "建湖县",
            value: "320925"
          },
          {
            text: "东台市",
            value: "320981"
          },
          {
            text: "大丰市",
            value: "320982"
          }
        ]
      },
      {
        code: 321000,
        options: [
          {
            text: "市辖区",
            value: "321001"
          },
          {
            text: "广陵区",
            value: "321002"
          },
          {
            text: "邗江区",
            value: "321003"
          },
          {
            text: "维扬区",
            value: "321011"
          },
          {
            text: "宝应县",
            value: "321023"
          },
          {
            text: "仪征市",
            value: "321081"
          },
          {
            text: "高邮市",
            value: "321084"
          },
          {
            text: "江都市",
            value: "321088"
          }
        ]
      },
      {
        code: 321100,
        options: [
          {
            text: "市辖区",
            value: "321101"
          },
          {
            text: "京口区",
            value: "321102"
          },
          {
            text: "润州区",
            value: "321111"
          },
          {
            text: "丹徒区",
            value: "321112"
          },
          {
            text: "丹阳市",
            value: "321181"
          },
          {
            text: "扬中市",
            value: "321182"
          },
          {
            text: "句容市",
            value: "321183"
          }
        ]
      },
      {
        code: 321200,
        options: [
          {
            text: "市辖区",
            value: "321201"
          },
          {
            text: "海陵区",
            value: "321202"
          },
          {
            text: "高港区",
            value: "321203"
          },
          {
            text: "兴化市",
            value: "321281"
          },
          {
            text: "靖江市",
            value: "321282"
          },
          {
            text: "泰兴市",
            value: "321283"
          },
          {
            text: "姜堰市",
            value: "321284"
          }
        ]
      },
      {
        code: 321300,
        options: [
          {
            text: "市辖区",
            value: "321301"
          },
          {
            text: "宿城区",
            value: "321302"
          },
          {
            text: "宿豫区",
            value: "321311"
          },
          {
            text: "沭阳县",
            value: "321322"
          },
          {
            text: "泗阳县",
            value: "321323"
          },
          {
            text: "泗洪县",
            value: "321324"
          }
        ]
      },
      {
        code: 330100,
        options: [
          {
            text: "市辖区",
            value: "330101"
          },
          {
            text: "上城区",
            value: "330102"
          },
          {
            text: "下城区",
            value: "330103"
          },
          {
            text: "江干区",
            value: "330104"
          },
          {
            text: "拱墅区",
            value: "330105"
          },
          {
            text: "西湖区",
            value: "330106"
          },
          {
            text: "滨江区",
            value: "330108"
          },
          {
            text: "萧山区",
            value: "330109"
          },
          {
            text: "余杭区",
            value: "330110"
          },
          {
            text: "桐庐县",
            value: "330122"
          },
          {
            text: "淳安县",
            value: "330127"
          },
          {
            text: "建德市",
            value: "330182"
          },
          {
            text: "富阳市",
            value: "330183"
          },
          {
            text: "临安市",
            value: "330185"
          }
        ]
      },
      {
        code: 330200,
        options: [
          {
            text: "市辖区",
            value: "330201"
          },
          {
            text: "海曙区",
            value: "330203"
          },
          {
            text: "江东区",
            value: "330204"
          },
          {
            text: "江北区",
            value: "330205"
          },
          {
            text: "北仑区",
            value: "330206"
          },
          {
            text: "镇海区",
            value: "330211"
          },
          {
            text: "鄞州区",
            value: "330212"
          },
          {
            text: "象山县",
            value: "330225"
          },
          {
            text: "宁海县",
            value: "330226"
          },
          {
            text: "余姚市",
            value: "330281"
          },
          {
            text: "慈溪市",
            value: "330282"
          },
          {
            text: "奉化市",
            value: "330283"
          }
        ]
      },
      {
        code: 330300,
        options: [
          {
            text: "市辖区",
            value: "330301"
          },
          {
            text: "鹿城区",
            value: "330302"
          },
          {
            text: "龙湾区",
            value: "330303"
          },
          {
            text: "瓯海区",
            value: "330304"
          },
          {
            text: "洞头县",
            value: "330322"
          },
          {
            text: "永嘉县",
            value: "330324"
          },
          {
            text: "平阳县",
            value: "330326"
          },
          {
            text: "苍南县",
            value: "330327"
          },
          {
            text: "文成县",
            value: "330328"
          },
          {
            text: "泰顺县",
            value: "330329"
          },
          {
            text: "瑞安市",
            value: "330381"
          },
          {
            text: "乐清市",
            value: "330382"
          }
        ]
      },
      {
        code: 330400,
        options: [
          {
            text: "市辖区",
            value: "330401"
          },
          {
            text: "秀城区",
            value: "330402"
          },
          {
            text: "秀洲区",
            value: "330411"
          },
          {
            text: "嘉善县",
            value: "330421"
          },
          {
            text: "海盐县",
            value: "330424"
          },
          {
            text: "海宁市",
            value: "330481"
          },
          {
            text: "平湖市",
            value: "330482"
          },
          {
            text: "桐乡市",
            value: "330483"
          }
        ]
      },
      {
        code: 330500,
        options: [
          {
            text: "市辖区",
            value: "330501"
          },
          {
            text: "吴兴区",
            value: "330502"
          },
          {
            text: "南浔区",
            value: "330503"
          },
          {
            text: "德清县",
            value: "330521"
          },
          {
            text: "长兴县",
            value: "330522"
          },
          {
            text: "安吉县",
            value: "330523"
          }
        ]
      },
      {
        code: 330600,
        options: [
          {
            text: "市辖区",
            value: "330601"
          },
          {
            text: "越城区",
            value: "330602"
          },
          {
            text: "绍兴县",
            value: "330621"
          },
          {
            text: "新昌县",
            value: "330624"
          },
          {
            text: "诸暨市",
            value: "330681"
          },
          {
            text: "上虞市",
            value: "330682"
          },
          {
            text: "嵊州市",
            value: "330683"
          }
        ]
      },
      {
        code: 330700,
        options: [
          {
            text: "市辖区",
            value: "330701"
          },
          {
            text: "婺城区",
            value: "330702"
          },
          {
            text: "金东区",
            value: "330703"
          },
          {
            text: "武义县",
            value: "330723"
          },
          {
            text: "浦江县",
            value: "330726"
          },
          {
            text: "磐安县",
            value: "330727"
          },
          {
            text: "兰溪市",
            value: "330781"
          },
          {
            text: "义乌市",
            value: "330782"
          },
          {
            text: "东阳市",
            value: "330783"
          },
          {
            text: "永康市",
            value: "330784"
          }
        ]
      },
      {
        code: 330800,
        options: [
          {
            text: "市辖区",
            value: "330801"
          },
          {
            text: "柯城区",
            value: "330802"
          },
          {
            text: "衢江区",
            value: "330821"
          },
          {
            text: "常山县",
            value: "330822"
          },
          {
            text: "开化县",
            value: "330824"
          },
          {
            text: "龙游县",
            value: "330825"
          },
          {
            text: "江山市",
            value: "330881"
          }
        ]
      },
      {
        code: 330900,
        options: [
          {
            text: "市辖区",
            value: "330901"
          },
          {
            text: "定海区",
            value: "330902"
          },
          {
            text: "普陀区",
            value: "330903"
          },
          {
            text: "岱山县",
            value: "330921"
          },
          {
            text: "嵊泗县",
            value: "330922"
          }
        ]
      },
      {
        code: 331000,
        options: [
          {
            text: "市辖区",
            value: "331001"
          },
          {
            text: "椒江区",
            value: "331002"
          },
          {
            text: "黄岩区",
            value: "331003"
          },
          {
            text: "路桥区",
            value: "331004"
          },
          {
            text: "玉环县",
            value: "331021"
          },
          {
            text: "三门县",
            value: "331022"
          },
          {
            text: "天台县",
            value: "331023"
          },
          {
            text: "仙居县",
            value: "331024"
          },
          {
            text: "温岭市",
            value: "331081"
          },
          {
            text: "临海市",
            value: "331082"
          }
        ]
      },
      {
        code: 331100,
        options: [
          {
            text: "市辖区",
            value: "331101"
          },
          {
            text: "莲都区",
            value: "331102"
          },
          {
            text: "青田县",
            value: "331121"
          },
          {
            text: "缙云县",
            value: "331122"
          },
          {
            text: "遂昌县",
            value: "331123"
          },
          {
            text: "松阳县",
            value: "331124"
          },
          {
            text: "云和县",
            value: "331125"
          },
          {
            text: "庆元县",
            value: "331126"
          },
          {
            text: "景宁畲族自治县",
            value: "331127"
          },
          {
            text: "龙泉市",
            value: "331181"
          }
        ]
      },
      {
        code: 340100,
        options: [
          {
            text: "市辖区",
            value: "340101"
          },
          {
            text: "瑶海区",
            value: "340102"
          },
          {
            text: "庐阳区",
            value: "340103"
          },
          {
            text: "蜀山区",
            value: "340104"
          },
          {
            text: "包河区",
            value: "340111"
          },
          {
            text: "长丰县",
            value: "340121"
          },
          {
            text: "肥东县",
            value: "340122"
          },
          {
            text: "肥西县",
            value: "340123"
          }
        ]
      },
      {
        code: 340200,
        options: [
          {
            text: "市辖区",
            value: "340201"
          },
          {
            text: "镜湖区",
            value: "340202"
          },
          {
            text: "马塘区",
            value: "340203"
          },
          {
            text: "新芜区",
            value: "340204"
          },
          {
            text: "鸠江区",
            value: "340207"
          },
          {
            text: "芜湖县",
            value: "340221"
          },
          {
            text: "繁昌县",
            value: "340222"
          },
          {
            text: "南陵县",
            value: "340223"
          }
        ]
      },
      {
        code: 340300,
        options: [
          {
            text: "市辖区",
            value: "340301"
          },
          {
            text: "龙子湖区",
            value: "340302"
          },
          {
            text: "蚌山区",
            value: "340303"
          },
          {
            text: "禹会区",
            value: "340304"
          },
          {
            text: "淮上区",
            value: "340311"
          },
          {
            text: "怀远县",
            value: "340321"
          },
          {
            text: "五河县",
            value: "340322"
          },
          {
            text: "固镇县",
            value: "340323"
          }
        ]
      },
      {
        code: 340400,
        options: [
          {
            text: "市辖区",
            value: "340401"
          },
          {
            text: "大通区",
            value: "340402"
          },
          {
            text: "田家庵区",
            value: "340403"
          },
          {
            text: "谢家集区",
            value: "340404"
          },
          {
            text: "八公山区",
            value: "340405"
          },
          {
            text: "潘集区",
            value: "340406"
          },
          {
            text: "凤台县",
            value: "340421"
          }
        ]
      },
      {
        code: 340500,
        options: [
          {
            text: "市辖区",
            value: "340501"
          },
          {
            text: "金家庄区",
            value: "340502"
          },
          {
            text: "花山区",
            value: "340503"
          },
          {
            text: "雨山区",
            value: "340504"
          },
          {
            text: "当涂县",
            value: "340521"
          }
        ]
      },
      {
        code: 340600,
        options: [
          {
            text: "市辖区",
            value: "340601"
          },
          {
            text: "杜集区",
            value: "340602"
          },
          {
            text: "相山区",
            value: "340603"
          },
          {
            text: "烈山区",
            value: "340604"
          },
          {
            text: "濉溪县",
            value: "340621"
          }
        ]
      },
      {
        code: 340700,
        options: [
          {
            text: "市辖区",
            value: "340701"
          },
          {
            text: "铜官山区",
            value: "340702"
          },
          {
            text: "狮子山区",
            value: "340703"
          },
          {
            text: "郊区",
            value: "340711"
          },
          {
            text: "铜陵县",
            value: "340721"
          }
        ]
      },
      {
        code: 340800,
        options: [
          {
            text: "市辖区",
            value: "340801"
          },
          {
            text: "迎江区",
            value: "340802"
          },
          {
            text: "大观区",
            value: "340803"
          },
          {
            text: "郊区（宜秀区2005.6）",
            value: "340811"
          },
          {
            text: "怀宁县",
            value: "340822"
          },
          {
            text: "枞阳县",
            value: "340823"
          },
          {
            text: "潜山县",
            value: "340824"
          },
          {
            text: "太湖县",
            value: "340825"
          },
          {
            text: "宿松县",
            value: "340826"
          },
          {
            text: "望江县",
            value: "340827"
          },
          {
            text: "岳西县",
            value: "340828"
          },
          {
            text: "桐城市",
            value: "340881"
          }
        ]
      },
      {
        code: 341000,
        options: [
          {
            text: "市辖区",
            value: "341001"
          },
          {
            text: "屯溪区",
            value: "341002"
          },
          {
            text: "黄山区",
            value: "341003"
          },
          {
            text: "徽州区",
            value: "341004"
          },
          {
            text: "歙县",
            value: "341021"
          },
          {
            text: "休宁县",
            value: "341022"
          },
          {
            text: "黟县",
            value: "341023"
          },
          {
            text: "祁门县",
            value: "341024"
          }
        ]
      },
      {
        code: 341100,
        options: [
          {
            text: "市辖区",
            value: "341101"
          },
          {
            text: "琅琊区",
            value: "341102"
          },
          {
            text: "南谯区",
            value: "341103"
          },
          {
            text: "来安县",
            value: "341122"
          },
          {
            text: "全椒县",
            value: "341124"
          },
          {
            text: "定远县",
            value: "341125"
          },
          {
            text: "凤阳县",
            value: "341126"
          },
          {
            text: "天长市",
            value: "341181"
          },
          {
            text: "明光市",
            value: "341182"
          }
        ]
      },
      {
        code: 341200,
        options: [
          {
            text: "市辖区",
            value: "341201"
          },
          {
            text: "颍州区",
            value: "341202"
          },
          {
            text: "颍东区",
            value: "341203"
          },
          {
            text: "颍泉区",
            value: "341204"
          },
          {
            text: "临泉县",
            value: "341221"
          },
          {
            text: "太和县",
            value: "341222"
          },
          {
            text: "阜南县",
            value: "341225"
          },
          {
            text: "颍上县",
            value: "341226"
          },
          {
            text: "界首市",
            value: "341282"
          }
        ]
      },
      {
        code: 341300,
        options: [
          {
            text: "市辖区",
            value: "341301"
          },
          {
            text: "埇桥区",
            value: "341302"
          },
          {
            text: "宿县市砀山县",
            value: "341321"
          },
          {
            text: "宿县市萧县",
            value: "341322"
          },
          {
            text: "宿县市灵璧县",
            value: "341323"
          },
          {
            text: "宿县市泗县",
            value: "341324"
          }
        ]
      },
      {
        code: 341400,
        options: [
          {
            text: "市辖区",
            value: "341401"
          },
          {
            text: "居巢区",
            value: "341402"
          },
          {
            text: "庐江县",
            value: "341421"
          },
          {
            text: "无为县",
            value: "341422"
          },
          {
            text: "含山县",
            value: "341423"
          },
          {
            text: "和县",
            value: "341424"
          }
        ]
      },
      {
        code: 341500,
        options: [
          {
            text: "市辖区",
            value: "341501"
          },
          {
            text: "金安区",
            value: "341502"
          },
          {
            text: "裕安区",
            value: "341503"
          },
          {
            text: "寿县",
            value: "341521"
          },
          {
            text: "霍邱县",
            value: "341522"
          },
          {
            text: "舒城县",
            value: "341523"
          },
          {
            text: "金寨县",
            value: "341524"
          },
          {
            text: "霍山县",
            value: "341525"
          }
        ]
      },
      {
        code: 341600,
        options: [
          {
            text: "市辖区",
            value: "341601"
          },
          {
            text: "谯城区",
            value: "341602"
          },
          {
            text: "涡阳县",
            value: "341621"
          },
          {
            text: "蒙城县",
            value: "341622"
          },
          {
            text: "利辛县",
            value: "341623"
          }
        ]
      },
      {
        code: 341700,
        options: [
          {
            text: "市辖区",
            value: "341701"
          },
          {
            text: "贵池市",
            value: "341702"
          },
          {
            text: "东至县",
            value: "341721"
          },
          {
            text: "石台县",
            value: "341722"
          },
          {
            text: "青阳县",
            value: "341723"
          }
        ]
      },
      {
        code: 341800,
        options: [
          {
            text: "市辖区",
            value: "341801"
          },
          {
            text: "宣州区",
            value: "341802"
          },
          {
            text: "郎溪县",
            value: "341821"
          },
          {
            text: "广德县",
            value: "341822"
          },
          {
            text: "泾县",
            value: "341823"
          },
          {
            text: "绩溪县",
            value: "341824"
          },
          {
            text: "宁国市",
            value: "341881"
          }
        ]
      },
      {
        code: 350100,
        options: [
          {
            text: "市辖区",
            value: "350101"
          },
          {
            text: "鼓楼区",
            value: "350102"
          },
          {
            text: "台江区",
            value: "350103"
          },
          {
            text: "仓山区",
            value: "350104"
          },
          {
            text: "马尾区",
            value: "350105"
          },
          {
            text: "晋安区",
            value: "350111"
          },
          {
            text: "闽侯县",
            value: "350121"
          },
          {
            text: "连江县",
            value: "350122"
          },
          {
            text: "罗源县",
            value: "350123"
          },
          {
            text: "闽清县",
            value: "350124"
          },
          {
            text: "永泰县",
            value: "350125"
          },
          {
            text: "平潭县",
            value: "350128"
          },
          {
            text: "福清市",
            value: "350181"
          },
          {
            text: "长乐市",
            value: "350182"
          }
        ]
      },
      {
        code: 350200,
        options: [
          {
            text: "市辖区",
            value: "350201"
          },
          {
            text: "思明区",
            value: "350203"
          },
          {
            text: "海沧区（杏林区）",
            value: "350205"
          },
          {
            text: "湖里区",
            value: "350206"
          },
          {
            text: "集美区",
            value: "350211"
          },
          {
            text: "同安区",
            value: "350212"
          },
          {
            text: "翔安区",
            value: "350213"
          }
        ]
      },
      {
        code: 350300,
        options: [
          {
            text: "市辖区",
            value: "350301"
          },
          {
            text: "城厢区",
            value: "350302"
          },
          {
            text: "涵江区",
            value: "350303"
          },
          {
            text: "荔城区",
            value: "350304"
          },
          {
            text: "秀屿区",
            value: "350305"
          },
          {
            text: "仙游县",
            value: "350322"
          }
        ]
      },
      {
        code: 350400,
        options: [
          {
            text: "市辖区",
            value: "350401"
          },
          {
            text: "梅列区",
            value: "350402"
          },
          {
            text: "三元区",
            value: "350403"
          },
          {
            text: "明溪县",
            value: "350421"
          },
          {
            text: "清流县",
            value: "350423"
          },
          {
            text: "宁化县",
            value: "350424"
          },
          {
            text: "大田县",
            value: "350425"
          },
          {
            text: "尤溪县",
            value: "350426"
          },
          {
            text: "沙县",
            value: "350427"
          },
          {
            text: "将乐县",
            value: "350428"
          },
          {
            text: "泰宁县",
            value: "350429"
          },
          {
            text: "建宁县",
            value: "350430"
          },
          {
            text: "永安市",
            value: "350481"
          }
        ]
      },
      {
        code: 350500,
        options: [
          {
            text: "市辖区",
            value: "350501"
          },
          {
            text: "鲤城区",
            value: "350502"
          },
          {
            text: "丰泽区",
            value: "350503"
          },
          {
            text: "洛江区",
            value: "350504"
          },
          {
            text: "泉港区",
            value: "350505"
          },
          {
            text: "惠安县",
            value: "350521"
          },
          {
            text: "安溪县",
            value: "350524"
          },
          {
            text: "永春县",
            value: "350525"
          },
          {
            text: "德化县",
            value: "350526"
          },
          {
            text: "金门县",
            value: "350527"
          },
          {
            text: "石狮市",
            value: "350581"
          },
          {
            text: "晋江市",
            value: "350582"
          },
          {
            text: "南安市",
            value: "350583"
          }
        ]
      },
      {
        code: 350600,
        options: [
          {
            text: "市辖区",
            value: "350601"
          },
          {
            text: "芗城区",
            value: "350602"
          },
          {
            text: "龙文区",
            value: "350603"
          },
          {
            text: "云霄县",
            value: "350622"
          },
          {
            text: "漳浦县",
            value: "350623"
          },
          {
            text: "诏安县",
            value: "350624"
          },
          {
            text: "长泰县",
            value: "350625"
          },
          {
            text: "东山县",
            value: "350626"
          },
          {
            text: "南靖县",
            value: "350627"
          },
          {
            text: "平和县",
            value: "350628"
          },
          {
            text: "华安县",
            value: "350629"
          },
          {
            text: "龙海市",
            value: "350681"
          }
        ]
      },
      {
        code: 350700,
        options: [
          {
            text: "市辖区",
            value: "350701"
          },
          {
            text: "延平区",
            value: "350702"
          },
          {
            text: "顺昌县",
            value: "350721"
          },
          {
            text: "浦城县",
            value: "350722"
          },
          {
            text: "光泽县",
            value: "350723"
          },
          {
            text: "松溪县",
            value: "350724"
          },
          {
            text: "政和县",
            value: "350725"
          },
          {
            text: "邵武市",
            value: "350781"
          },
          {
            text: "武夷山市",
            value: "350782"
          },
          {
            text: "建瓯市",
            value: "350783"
          },
          {
            text: "建阳市",
            value: "350784"
          }
        ]
      },
      {
        code: 350800,
        options: [
          {
            text: "市辖区",
            value: "350801"
          },
          {
            text: "新罗区",
            value: "350802"
          },
          {
            text: "长汀县",
            value: "350821"
          },
          {
            text: "永定县",
            value: "350822"
          },
          {
            text: "上杭县",
            value: "350823"
          },
          {
            text: "武平县",
            value: "350824"
          },
          {
            text: "连城县",
            value: "350825"
          },
          {
            text: "漳平市",
            value: "350881"
          }
        ]
      },
      {
        code: 350900,
        options: [
          {
            text: "市辖区",
            value: "350901"
          },
          {
            text: "蕉城区",
            value: "350902"
          },
          {
            text: "霞浦县",
            value: "350921"
          },
          {
            text: "古田县",
            value: "350922"
          },
          {
            text: "屏南县",
            value: "350923"
          },
          {
            text: "寿宁县",
            value: "350924"
          },
          {
            text: "周宁县",
            value: "350925"
          },
          {
            text: "柘荣县",
            value: "350926"
          },
          {
            text: "福安市",
            value: "350981"
          },
          {
            text: "福鼎市",
            value: "350982"
          }
        ]
      },
      {
        code: 360100,
        options: [
          {
            text: "市辖区",
            value: "360101"
          },
          {
            text: "东湖区",
            value: "360102"
          },
          {
            text: "西湖区",
            value: "360103"
          },
          {
            text: "青云谱区",
            value: "360104"
          },
          {
            text: "湾里区",
            value: "360105"
          },
          {
            text: "青山湖区",
            value: "360111"
          },
          {
            text: "南昌县",
            value: "360121"
          },
          {
            text: "新建县",
            value: "360122"
          },
          {
            text: "安义县",
            value: "360123"
          },
          {
            text: "进贤县",
            value: "360124"
          }
        ]
      },
      {
        code: 360200,
        options: [
          {
            text: "市辖区",
            value: "360201"
          },
          {
            text: "昌江区",
            value: "360202"
          },
          {
            text: "珠山区",
            value: "360203"
          },
          {
            text: "浮梁县",
            value: "360222"
          },
          {
            text: "乐平市",
            value: "360281"
          }
        ]
      },
      {
        code: 360300,
        options: [
          {
            text: "市辖区",
            value: "360301"
          },
          {
            text: "安源区",
            value: "360302"
          },
          {
            text: "湘东区",
            value: "360313"
          },
          {
            text: "莲花县",
            value: "360321"
          },
          {
            text: "上栗县",
            value: "360322"
          },
          {
            text: "芦溪县",
            value: "360323"
          }
        ]
      },
      {
        code: 360400,
        options: [
          {
            text: "市辖区",
            value: "360401"
          },
          {
            text: "庐山区",
            value: "360402"
          },
          {
            text: "浔阳区",
            value: "360403"
          },
          {
            text: "九江县",
            value: "360421"
          },
          {
            text: "武宁县",
            value: "360423"
          },
          {
            text: "修水县",
            value: "360424"
          },
          {
            text: "永修县",
            value: "360425"
          },
          {
            text: "德安县",
            value: "360426"
          },
          {
            text: "星子县",
            value: "360427"
          },
          {
            text: "都昌县",
            value: "360428"
          },
          {
            text: "湖口县",
            value: "360429"
          },
          {
            text: "彭泽县",
            value: "360430"
          },
          {
            text: "瑞昌市",
            value: "360481"
          }
        ]
      },
      {
        code: 360500,
        options: [
          {
            text: "市辖区",
            value: "360501"
          },
          {
            text: "渝水区",
            value: "360502"
          },
          {
            text: "分宜县",
            value: "360521"
          }
        ]
      },
      {
        code: 360600,
        options: [
          {
            text: "市辖区",
            value: "360601"
          },
          {
            text: "月湖区",
            value: "360602"
          },
          {
            text: "余江县",
            value: "360622"
          },
          {
            text: "贵溪市",
            value: "360681"
          }
        ]
      },
      {
        code: 360700,
        options: [
          {
            text: "市辖区",
            value: "360701"
          },
          {
            text: "章贡区",
            value: "360702"
          },
          {
            text: "赣县",
            value: "360721"
          },
          {
            text: "信丰县",
            value: "360722"
          },
          {
            text: "大余县",
            value: "360723"
          },
          {
            text: "上犹县",
            value: "360724"
          },
          {
            text: "崇义县",
            value: "360725"
          },
          {
            text: "安远县",
            value: "360726"
          },
          {
            text: "龙南县",
            value: "360727"
          },
          {
            text: "定南县",
            value: "360728"
          },
          {
            text: "全南县",
            value: "360729"
          },
          {
            text: "宁都县",
            value: "360730"
          },
          {
            text: "于都县",
            value: "360731"
          },
          {
            text: "兴国县",
            value: "360732"
          },
          {
            text: "会昌县",
            value: "360733"
          },
          {
            text: "寻乌县",
            value: "360734"
          },
          {
            text: "石城县",
            value: "360735"
          },
          {
            text: "瑞金市",
            value: "360781"
          },
          {
            text: "南康市",
            value: "360782"
          }
        ]
      },
      {
        code: 360800,
        options: [
          {
            text: "市辖区",
            value: "360801"
          },
          {
            text: "吉州区",
            value: "360802"
          },
          {
            text: "青原区",
            value: "360803"
          },
          {
            text: "吉安县",
            value: "360821"
          },
          {
            text: "吉水县",
            value: "360822"
          },
          {
            text: "峡江县",
            value: "360823"
          },
          {
            text: "新干县",
            value: "360824"
          },
          {
            text: "永丰县",
            value: "360825"
          },
          {
            text: "泰和县",
            value: "360826"
          },
          {
            text: "遂川县",
            value: "360827"
          },
          {
            text: "万安县",
            value: "360828"
          },
          {
            text: "安福县",
            value: "360829"
          },
          {
            text: "永新县",
            value: "360830"
          },
          {
            text: "井冈山市",
            value: "360881"
          }
        ]
      },
      {
        code: 360900,
        options: [
          {
            text: "市辖区",
            value: "360901"
          },
          {
            text: "袁州市",
            value: "360902"
          },
          {
            text: "奉新县",
            value: "360921"
          },
          {
            text: "万载县",
            value: "360922"
          },
          {
            text: "上高县",
            value: "360923"
          },
          {
            text: "宜丰县",
            value: "360924"
          },
          {
            text: "靖安县",
            value: "360925"
          },
          {
            text: "铜鼓县",
            value: "360926"
          },
          {
            text: "丰城市",
            value: "360981"
          },
          {
            text: "樟树市",
            value: "360982"
          },
          {
            text: "高安市",
            value: "360983"
          }
        ]
      },
      {
        code: 361000,
        options: [
          {
            text: "市辖区",
            value: "361001"
          },
          {
            text: "临川市",
            value: "361002"
          },
          {
            text: "南城县",
            value: "361021"
          },
          {
            text: "黎川县",
            value: "361022"
          },
          {
            text: "南丰县",
            value: "361023"
          },
          {
            text: "崇仁县",
            value: "361024"
          },
          {
            text: "乐安县",
            value: "361025"
          },
          {
            text: "宜黄县",
            value: "361026"
          },
          {
            text: "金溪县",
            value: "361027"
          },
          {
            text: "资溪县",
            value: "361028"
          },
          {
            text: "东乡县",
            value: "361029"
          },
          {
            text: "广昌县",
            value: "361030"
          }
        ]
      },
      {
        code: 361100,
        options: [
          {
            text: "市辖区",
            value: "361101"
          },
          {
            text: "信州区",
            value: "361102"
          },
          {
            text: "广丰县",
            value: "361122"
          },
          {
            text: "玉山县",
            value: "361123"
          },
          {
            text: "铅山县",
            value: "361124"
          },
          {
            text: "横峰县",
            value: "361125"
          },
          {
            text: "弋阳县",
            value: "361126"
          },
          {
            text: "余干县",
            value: "361127"
          },
          {
            text: "鄱阳县",
            value: "361128"
          },
          {
            text: "万年县",
            value: "361129"
          },
          {
            text: "婺源县",
            value: "361130"
          },
          {
            text: "德兴市",
            value: "361181"
          }
        ]
      },
      {
        code: 370100,
        options: [
          {
            text: "市辖区",
            value: "370101"
          },
          {
            text: "历下区",
            value: "370102"
          },
          {
            text: "市中区",
            value: "370103"
          },
          {
            text: "槐荫区",
            value: "370104"
          },
          {
            text: "天桥区",
            value: "370105"
          },
          {
            text: "历城区",
            value: "370112"
          },
          {
            text: "长清区",
            value: "370113"
          },
          {
            text: "平阴县",
            value: "370124"
          },
          {
            text: "济阳县",
            value: "370125"
          },
          {
            text: "商河县",
            value: "370126"
          },
          {
            text: "章丘市",
            value: "370181"
          }
        ]
      },
      {
        code: 370200,
        options: [
          {
            text: "市辖区",
            value: "370201"
          },
          {
            text: "市南区",
            value: "370202"
          },
          {
            text: "市北区",
            value: "370203"
          },
          {
            text: "四方区",
            value: "370205"
          },
          {
            text: "黄岛区",
            value: "370211"
          },
          {
            text: "崂山区",
            value: "370212"
          },
          {
            text: "李沧区",
            value: "370213"
          },
          {
            text: "城阳区",
            value: "370214"
          },
          {
            text: "胶州市",
            value: "370281"
          },
          {
            text: "即墨市",
            value: "370282"
          },
          {
            text: "平度市",
            value: "370283"
          },
          {
            text: "胶南市",
            value: "370284"
          },
          {
            text: "莱西市",
            value: "370285"
          }
        ]
      },
      {
        code: 370300,
        options: [
          {
            text: "市辖区",
            value: "370301"
          },
          {
            text: "淄川区",
            value: "370302"
          },
          {
            text: "张店区",
            value: "370303"
          },
          {
            text: "博山区",
            value: "370304"
          },
          {
            text: "临淄区",
            value: "370305"
          },
          {
            text: "周村区",
            value: "370306"
          },
          {
            text: "桓台县",
            value: "370321"
          },
          {
            text: "高青县",
            value: "370322"
          },
          {
            text: "沂源县",
            value: "370323"
          }
        ]
      },
      {
        code: 370400,
        options: [
          {
            text: "市辖区",
            value: "370401"
          },
          {
            text: "市中区",
            value: "370402"
          },
          {
            text: "薛城区",
            value: "370403"
          },
          {
            text: "峄城区",
            value: "370404"
          },
          {
            text: "台儿庄区",
            value: "370405"
          },
          {
            text: "山亭区",
            value: "370406"
          },
          {
            text: "滕州市",
            value: "370481"
          }
        ]
      },
      {
        code: 370500,
        options: [
          {
            text: "市辖区",
            value: "370501"
          },
          {
            text: "东营区",
            value: "370502"
          },
          {
            text: "河口区",
            value: "370503"
          },
          {
            text: "垦利县",
            value: "370521"
          },
          {
            text: "利津县",
            value: "370522"
          },
          {
            text: "广饶县",
            value: "370523"
          }
        ]
      },
      {
        code: 370600,
        options: [
          {
            text: "市辖区",
            value: "370601"
          },
          {
            text: "芝罘区",
            value: "370602"
          },
          {
            text: "福山区",
            value: "370611"
          },
          {
            text: "牟平区",
            value: "370612"
          },
          {
            text: "莱山区",
            value: "370613"
          },
          {
            text: "长岛县",
            value: "370634"
          },
          {
            text: "龙口市",
            value: "370681"
          },
          {
            text: "莱阳市",
            value: "370682"
          },
          {
            text: "莱州市",
            value: "370683"
          },
          {
            text: "蓬莱市",
            value: "370684"
          },
          {
            text: "招远市",
            value: "370685"
          },
          {
            text: "栖霞市",
            value: "370686"
          },
          {
            text: "海阳市",
            value: "370687"
          }
        ]
      },
      {
        code: 370700,
        options: [
          {
            text: "市辖区",
            value: "370701"
          },
          {
            text: "潍城区",
            value: "370702"
          },
          {
            text: "寒亭区",
            value: "370703"
          },
          {
            text: "坊子区",
            value: "370704"
          },
          {
            text: "奎文区",
            value: "370705"
          },
          {
            text: "临朐县",
            value: "370724"
          },
          {
            text: "昌乐县",
            value: "370725"
          },
          {
            text: "青州市",
            value: "370781"
          },
          {
            text: "诸城市",
            value: "370782"
          },
          {
            text: "寿光市",
            value: "370783"
          },
          {
            text: "安丘市",
            value: "370784"
          },
          {
            text: "高密市",
            value: "370785"
          },
          {
            text: "昌邑市",
            value: "370786"
          }
        ]
      },
      {
        code: 370800,
        options: [
          {
            text: "市辖区",
            value: "370801"
          },
          {
            text: "市中区",
            value: "370802"
          },
          {
            text: "任城区",
            value: "370811"
          },
          {
            text: "微山县",
            value: "370826"
          },
          {
            text: "鱼台县",
            value: "370827"
          },
          {
            text: "金乡县",
            value: "370828"
          },
          {
            text: "嘉祥县",
            value: "370829"
          },
          {
            text: "汶上县",
            value: "370830"
          },
          {
            text: "泗水县",
            value: "370831"
          },
          {
            text: "梁山县",
            value: "370832"
          },
          {
            text: "曲阜市",
            value: "370881"
          },
          {
            text: "兖州市",
            value: "370882"
          },
          {
            text: "邹城市",
            value: "370883"
          }
        ]
      },
      {
        code: 370900,
        options: [
          {
            text: "市辖区",
            value: "370901"
          },
          {
            text: "泰山区",
            value: "370902"
          },
          {
            text: "岱岳区",
            value: "370903"
          },
          {
            text: "宁阳县",
            value: "370921"
          },
          {
            text: "东平县",
            value: "370923"
          },
          {
            text: "新泰市",
            value: "370982"
          },
          {
            text: "肥城市",
            value: "370983"
          }
        ]
      },
      {
        code: 371000,
        options: [
          {
            text: "市辖区",
            value: "371001"
          },
          {
            text: "环翠区",
            value: "371002"
          },
          {
            text: "文登市",
            value: "371081"
          },
          {
            text: "荣成市",
            value: "371082"
          },
          {
            text: "乳山市",
            value: "371083"
          }
        ]
      },
      {
        code: 371100,
        options: [
          {
            text: "市辖区",
            value: "371101"
          },
          {
            text: "东港区",
            value: "371102"
          },
          {
            text: "岚山区",
            value: "371103"
          },
          {
            text: "五莲县",
            value: "371121"
          },
          {
            text: "莒县",
            value: "371122"
          }
        ]
      },
      {
        code: 371200,
        options: [
          {
            text: "市辖区",
            value: "371201"
          },
          {
            text: "莱城区",
            value: "371202"
          },
          {
            text: "钢城区",
            value: "371203"
          }
        ]
      },
      {
        code: 371300,
        options: [
          {
            text: "市辖区",
            value: "371301"
          },
          {
            text: "兰山区",
            value: "371302"
          },
          {
            text: "罗庄区",
            value: "371311"
          },
          {
            text: "河东区",
            value: "371312"
          },
          {
            text: "沂南县",
            value: "371321"
          },
          {
            text: "郯城县",
            value: "371322"
          },
          {
            text: "沂水县",
            value: "371323"
          },
          {
            text: "苍山县",
            value: "371324"
          },
          {
            text: "费县",
            value: "371325"
          },
          {
            text: "平邑县",
            value: "371326"
          },
          {
            text: "莒南县",
            value: "371327"
          },
          {
            text: "蒙阴县",
            value: "371328"
          },
          {
            text: "临沭县",
            value: "371329"
          }
        ]
      },
      {
        code: 371400,
        options: [
          {
            text: "市辖区",
            value: "371401"
          },
          {
            text: "德城区",
            value: "371402"
          },
          {
            text: "陵县",
            value: "371421"
          },
          {
            text: "宁津县",
            value: "371422"
          },
          {
            text: "庆云县",
            value: "371423"
          },
          {
            text: "临邑县",
            value: "371424"
          },
          {
            text: "齐河县",
            value: "371425"
          },
          {
            text: "平原县",
            value: "371426"
          },
          {
            text: "夏津县",
            value: "371427"
          },
          {
            text: "武城县",
            value: "371428"
          },
          {
            text: "乐陵市",
            value: "371481"
          },
          {
            text: "禹城市",
            value: "371482"
          }
        ]
      },
      {
        code: 371500,
        options: [
          {
            text: "市辖区",
            value: "371501"
          },
          {
            text: "东昌府区",
            value: "371502"
          },
          {
            text: "阳谷县",
            value: "371521"
          },
          {
            text: "莘县",
            value: "371522"
          },
          {
            text: "茌平县",
            value: "371523"
          },
          {
            text: "东阿县",
            value: "371524"
          },
          {
            text: "冠县",
            value: "371525"
          },
          {
            text: "高唐县",
            value: "371526"
          },
          {
            text: "临清市",
            value: "371581"
          }
        ]
      },
      {
        code: 371600,
        options: [
          {
            text: "市辖区",
            value: "371601"
          },
          {
            text: "滨城区",
            value: "371602"
          },
          {
            text: "惠民县",
            value: "371621"
          },
          {
            text: "阳信县",
            value: "371622"
          },
          {
            text: "无棣县",
            value: "371623"
          },
          {
            text: "沾化县",
            value: "371624"
          },
          {
            text: "博兴县",
            value: "371625"
          },
          {
            text: "邹平县",
            value: "371626"
          }
        ]
      },
      {
        code: 371700,
        options: [
          {
            text: "市辖区",
            value: "371701"
          },
          {
            text: "牡丹区",
            value: "371702"
          },
          {
            text: "曹县",
            value: "371721"
          },
          {
            text: "单县",
            value: "371722"
          },
          {
            text: "成武县",
            value: "371723"
          },
          {
            text: "巨野县",
            value: "371724"
          },
          {
            text: "郓城县",
            value: "371725"
          },
          {
            text: "鄄城县",
            value: "371726"
          },
          {
            text: "定陶县",
            value: "371727"
          },
          {
            text: "东明县",
            value: "371728"
          }
        ]
      },
      {
        code: 410100,
        options: [
          {
            text: "市辖区",
            value: "410101"
          },
          {
            text: "中原区",
            value: "410102"
          },
          {
            text: "二七区",
            value: "410103"
          },
          {
            text: "管城回族区",
            value: "410104"
          },
          {
            text: "金水区",
            value: "410105"
          },
          {
            text: "上街区",
            value: "410106"
          },
          {
            text: "惠济区",
            value: "410108"
          },
          {
            text: "中牟县",
            value: "410122"
          },
          {
            text: "巩义市",
            value: "410181"
          },
          {
            text: "荥阳市",
            value: "410182"
          },
          {
            text: "新密市",
            value: "410183"
          },
          {
            text: "新郑市",
            value: "410184"
          },
          {
            text: "登封市",
            value: "410185"
          }
        ]
      },
      {
        code: 410200,
        options: [
          {
            text: "市辖区",
            value: "410201"
          },
          {
            text: "龙亭区",
            value: "410202"
          },
          {
            text: "顺河回族区",
            value: "410203"
          },
          {
            text: "鼓楼区",
            value: "410204"
          },
          {
            text: "南关区",
            value: "410205"
          },
          {
            text: "郊区",
            value: "410211"
          },
          {
            text: "杞县",
            value: "410221"
          },
          {
            text: "通许县",
            value: "410222"
          },
          {
            text: "尉氏县",
            value: "410223"
          },
          {
            text: "开封县",
            value: "410224"
          },
          {
            text: "兰考县",
            value: "410225"
          }
        ]
      },
      {
        code: 410300,
        options: [
          {
            text: "市辖区",
            value: "410301"
          },
          {
            text: "老城区",
            value: "410302"
          },
          {
            text: "西工区",
            value: "410303"
          },
          {
            text: "廛河回族区",
            value: "410304"
          },
          {
            text: "涧西区",
            value: "410305"
          },
          {
            text: "吉利区",
            value: "410306"
          },
          {
            text: "洛龙区",
            value: "410307"
          },
          {
            text: "孟津县",
            value: "410322"
          },
          {
            text: "新安县",
            value: "410323"
          },
          {
            text: "栾川县",
            value: "410324"
          },
          {
            text: "嵩县",
            value: "410325"
          },
          {
            text: "汝阳县",
            value: "410326"
          },
          {
            text: "宜阳县",
            value: "410327"
          },
          {
            text: "洛宁县",
            value: "410328"
          },
          {
            text: "伊川县",
            value: "410329"
          },
          {
            text: "偃师市",
            value: "410381"
          }
        ]
      },
      {
        code: 410400,
        options: [
          {
            text: "市辖区",
            value: "410401"
          },
          {
            text: "新华区",
            value: "410402"
          },
          {
            text: "卫东区",
            value: "410403"
          },
          {
            text: "石龙区",
            value: "410404"
          },
          {
            text: "湛河区",
            value: "410411"
          },
          {
            text: "宝丰县",
            value: "410421"
          },
          {
            text: "叶县",
            value: "410422"
          },
          {
            text: "鲁山县",
            value: "410423"
          },
          {
            text: "郏县",
            value: "410425"
          },
          {
            text: "舞钢市",
            value: "410481"
          },
          {
            text: "汝州市",
            value: "410482"
          }
        ]
      },
      {
        code: 410500,
        options: [
          {
            text: "市辖区",
            value: "410501"
          },
          {
            text: "文峰区",
            value: "410502"
          },
          {
            text: "北关区",
            value: "410503"
          },
          {
            text: "殷都区",
            value: "410505"
          },
          {
            text: "龙安区",
            value: "410506"
          },
          {
            text: "安阳县",
            value: "410522"
          },
          {
            text: "汤阴县",
            value: "410523"
          },
          {
            text: "滑县",
            value: "410526"
          },
          {
            text: "内黄县",
            value: "410527"
          },
          {
            text: "林州市",
            value: "410581"
          }
        ]
      },
      {
        code: 410600,
        options: [
          {
            text: "市辖区",
            value: "410601"
          },
          {
            text: "鹤山区",
            value: "410602"
          },
          {
            text: "山城区",
            value: "410603"
          },
          {
            text: "淇滨区",
            value: "410611"
          },
          {
            text: "浚县",
            value: "410621"
          },
          {
            text: "淇县",
            value: "410622"
          }
        ]
      },
      {
        code: 410700,
        options: [
          {
            text: "市辖区",
            value: "410701"
          },
          {
            text: "红旗区",
            value: "410702"
          },
          {
            text: "卫滨区",
            value: "410703"
          },
          {
            text: "凤泉区",
            value: "410704"
          },
          {
            text: "牧野区",
            value: "410711"
          },
          {
            text: "新乡县",
            value: "410721"
          },
          {
            text: "获嘉县",
            value: "410724"
          },
          {
            text: "原阳县",
            value: "410725"
          },
          {
            text: "延津县",
            value: "410726"
          },
          {
            text: "封丘县",
            value: "410727"
          },
          {
            text: "长垣县",
            value: "410728"
          },
          {
            text: "卫辉市",
            value: "410781"
          },
          {
            text: "辉县市",
            value: "410782"
          }
        ]
      },
      {
        code: 410800,
        options: [
          {
            text: "市辖区",
            value: "410801"
          },
          {
            text: "解放区",
            value: "410802"
          },
          {
            text: "中站区",
            value: "410803"
          },
          {
            text: "马村区",
            value: "410804"
          },
          {
            text: "山阳区",
            value: "410811"
          },
          {
            text: "修武县",
            value: "410821"
          },
          {
            text: "博爱县",
            value: "410822"
          },
          {
            text: "武陟县",
            value: "410823"
          },
          {
            text: "温县",
            value: "410825"
          },
          {
            text: "济源市",
            value: "410881"
          },
          {
            text: "沁阳市",
            value: "410882"
          },
          {
            text: "孟州市",
            value: "410883"
          }
        ]
      },
      {
        code: 410900,
        options: [
          {
            text: "市辖区",
            value: "410901"
          },
          {
            text: "华龙区",
            value: "410902"
          },
          {
            text: "清丰县",
            value: "410922"
          },
          {
            text: "南乐县",
            value: "410923"
          },
          {
            text: "范县",
            value: "410926"
          },
          {
            text: "台前县",
            value: "410927"
          },
          {
            text: "濮阳县",
            value: "410928"
          }
        ]
      },
      {
        code: 411000,
        options: [
          {
            text: "市辖区",
            value: "411001"
          },
          {
            text: "魏都区",
            value: "411002"
          },
          {
            text: "许昌县",
            value: "411023"
          },
          {
            text: "鄢陵县",
            value: "411024"
          },
          {
            text: "襄城县",
            value: "411025"
          },
          {
            text: "禹州市",
            value: "411081"
          },
          {
            text: "长葛市",
            value: "411082"
          }
        ]
      },
      {
        code: 411100,
        options: [
          {
            text: "市辖区",
            value: "411101"
          },
          {
            text: "源汇区",
            value: "411102"
          },
          {
            text: "郾城区",
            value: "411103"
          },
          {
            text: "召陵区",
            value: "411104"
          },
          {
            text: "舞阳县",
            value: "411121"
          },
          {
            text: "临颍县",
            value: "411122"
          }
        ]
      },
      {
        code: 411200,
        options: [
          {
            text: "市辖区",
            value: "411201"
          },
          {
            text: "湖滨区",
            value: "411202"
          },
          {
            text: "渑池县",
            value: "411221"
          },
          {
            text: "陕县",
            value: "411222"
          },
          {
            text: "卢氏县",
            value: "411224"
          },
          {
            text: "义马市",
            value: "411281"
          },
          {
            text: "灵宝市",
            value: "411282"
          }
        ]
      },
      {
        code: 411300,
        options: [
          {
            text: "市辖区",
            value: "411301"
          },
          {
            text: "宛城区",
            value: "411302"
          },
          {
            text: "卧龙区",
            value: "411303"
          },
          {
            text: "南召县",
            value: "411321"
          },
          {
            text: "方城县",
            value: "411322"
          },
          {
            text: "西峡县",
            value: "411323"
          },
          {
            text: "镇平县",
            value: "411324"
          },
          {
            text: "内乡县",
            value: "411325"
          },
          {
            text: "淅川县",
            value: "411326"
          },
          {
            text: "社旗县",
            value: "411327"
          },
          {
            text: "唐河县",
            value: "411328"
          },
          {
            text: "新野县",
            value: "411329"
          },
          {
            text: "桐柏县",
            value: "411330"
          },
          {
            text: "邓州市",
            value: "411381"
          }
        ]
      },
      {
        code: 411400,
        options: [
          {
            text: "市辖区",
            value: "411401"
          },
          {
            text: "梁园区",
            value: "411402"
          },
          {
            text: "睢阳区",
            value: "411403"
          },
          {
            text: "民权县",
            value: "411421"
          },
          {
            text: "睢县",
            value: "411422"
          },
          {
            text: "宁陵县",
            value: "411423"
          },
          {
            text: "柘城县",
            value: "411424"
          },
          {
            text: "虞城县",
            value: "411425"
          },
          {
            text: "夏邑县",
            value: "411426"
          },
          {
            text: "永城市",
            value: "411481"
          }
        ]
      },
      {
        code: 411500,
        options: [
          {
            text: "市辖区",
            value: "411501"
          },
          {
            text: "浉河区",
            value: "411502"
          },
          {
            text: "平桥区",
            value: "411503"
          },
          {
            text: "罗山县",
            value: "411521"
          },
          {
            text: "光山县",
            value: "411522"
          },
          {
            text: "新县",
            value: "411523"
          },
          {
            text: "商城县",
            value: "411524"
          },
          {
            text: "固始县",
            value: "411525"
          },
          {
            text: "潢川县",
            value: "411526"
          },
          {
            text: "淮滨县",
            value: "411527"
          },
          {
            text: "息县",
            value: "411528"
          }
        ]
      },
      {
        code: 411600,
        options: [
          {
            text: "市辖区",
            value: "411601"
          },
          {
            text: "川汇区",
            value: "411602"
          },
          {
            text: "扶沟县",
            value: "411621"
          },
          {
            text: "西华县",
            value: "411622"
          },
          {
            text: "商水县",
            value: "411623"
          },
          {
            text: "沈丘县",
            value: "411624"
          },
          {
            text: "郸城县",
            value: "411625"
          },
          {
            text: "淮阳县",
            value: "411626"
          },
          {
            text: "太康县",
            value: "411627"
          },
          {
            text: "鹿邑县",
            value: "411628"
          },
          {
            text: "项城市",
            value: "411681"
          }
        ]
      },
      {
        code: 411700,
        options: [
          {
            text: "</li><li data-action=\"xian\" code=\"411702\">驿城区",
            value: "411701"
          },
          {
            text: "西平县",
            value: "411721"
          },
          {
            text: "上蔡县",
            value: "411722"
          },
          {
            text: "平舆县",
            value: "411723"
          },
          {
            text: "正阳县",
            value: "411724"
          },
          {
            text: "确山县",
            value: "411725"
          },
          {
            text: "泌阳县",
            value: "411726"
          },
          {
            text: "汝南县",
            value: "411727"
          },
          {
            text: "遂平县",
            value: "411728"
          },
          {
            text: "新蔡县",
            value: "411729"
          }
        ]
      },
      {
        code: 420100,
        options: [
          {
            text: "市辖区",
            value: "420101"
          },
          {
            text: "江岸区",
            value: "420102"
          },
          {
            text: "江汉区",
            value: "420103"
          },
          {
            text: "硚口区",
            value: "420104"
          },
          {
            text: "汉阳区",
            value: "420105"
          },
          {
            text: "武昌区",
            value: "420106"
          },
          {
            text: "青山区",
            value: "420107"
          },
          {
            text: "洪山区",
            value: "420111"
          },
          {
            text: "东西湖区",
            value: "420112"
          },
          {
            text: "汉南区",
            value: "420113"
          },
          {
            text: "蔡甸区",
            value: "420114"
          },
          {
            text: "江夏区",
            value: "420115"
          },
          {
            text: "黄陂县",
            value: "420116"
          },
          {
            text: "新洲县",
            value: "420117"
          }
        ]
      },
      {
        code: 420200,
        options: [
          {
            text: "市辖区",
            value: "420201"
          },
          {
            text: "黄石港区",
            value: "420202"
          },
          {
            text: "石灰窑区",
            value: "420203"
          },
          {
            text: "下陆区",
            value: "420204"
          },
          {
            text: "铁山区",
            value: "420205"
          },
          {
            text: "阳新县",
            value: "420222"
          },
          {
            text: "大冶市",
            value: "420281"
          }
        ]
      },
      {
        code: 420300,
        options: [
          {
            text: "市辖区",
            value: "420301"
          },
          {
            text: "茅箭区",
            value: "420302"
          },
          {
            text: "张湾区",
            value: "420303"
          },
          {
            text: "郧县",
            value: "420321"
          },
          {
            text: "郧西县",
            value: "420322"
          },
          {
            text: "竹山县",
            value: "420323"
          },
          {
            text: "竹溪县",
            value: "420324"
          },
          {
            text: "房县",
            value: "420325"
          },
          {
            text: "丹江口市",
            value: "420381"
          }
        ]
      },
      {
        code: 420500,
        options: [
          {
            text: "市辖区",
            value: "420501"
          },
          {
            text: "西陵区",
            value: "420502"
          },
          {
            text: "伍家岗区",
            value: "420503"
          },
          {
            text: "点军区",
            value: "420504"
          },
          {
            text: "猇亭区",
            value: "420505"
          },
          {
            text: "夷陵区",
            value: "420506"
          },
          {
            text: "远安县",
            value: "420525"
          },
          {
            text: "兴山县",
            value: "420526"
          },
          {
            text: "秭归县",
            value: "420527"
          },
          {
            text: "长阳土家族自治县",
            value: "420528"
          },
          {
            text: "五峰土家族自治县",
            value: "420529"
          },
          {
            text: "宜都区",
            value: "420581"
          },
          {
            text: "当阳市",
            value: "420582"
          },
          {
            text: "枝江市",
            value: "420583"
          }
        ]
      },
      {
        code: 420600,
        options: [
          {
            text: "市辖区",
            value: "420601"
          },
          {
            text: "襄城区",
            value: "420602"
          },
          {
            text: "樊城区",
            value: "420606"
          },
          {
            text: "襄阳县",
            value: "420607"
          },
          {
            text: "南漳县",
            value: "420624"
          },
          {
            text: "谷城县",
            value: "420625"
          },
          {
            text: "保康县",
            value: "420626"
          },
          {
            text: "老河口市",
            value: "420682"
          },
          {
            text: "枣阳市",
            value: "420683"
          },
          {
            text: "宜城市",
            value: "420684"
          }
        ]
      },
      {
        code: 420700,
        options: [
          {
            text: "市辖区",
            value: "420701"
          },
          {
            text: "梁子湖区",
            value: "420702"
          },
          {
            text: "华容区",
            value: "420703"
          },
          {
            text: "鄂城区",
            value: "420704"
          }
        ]
      },
      {
        code: 420800,
        options: [
          {
            text: "市辖区",
            value: "420801"
          },
          {
            text: "东宝区",
            value: "420802"
          },
          {
            text: "掇刀区",
            value: "420804"
          },
          {
            text: "京山县",
            value: "420821"
          },
          {
            text: "沙洋区",
            value: "420822"
          },
          {
            text: "钟祥市",
            value: "420881"
          }
        ]
      },
      {
        code: 420900,
        options: [
          {
            text: "市辖区",
            value: "420901"
          },
          {
            text: "孝南区",
            value: "420902"
          },
          {
            text: "孝昌县",
            value: "420921"
          },
          {
            text: "大悟县",
            value: "420922"
          },
          {
            text: "云梦县",
            value: "420923"
          },
          {
            text: "应城市",
            value: "420981"
          },
          {
            text: "安陆市",
            value: "420982"
          },
          {
            text: "汉川市",
            value: "420984"
          }
        ]
      },
      {
        code: 421000,
        options: [
          {
            text: "市辖区",
            value: "421001"
          },
          {
            text: "沙市区",
            value: "421002"
          },
          {
            text: "荆州区",
            value: "421003"
          },
          {
            text: "公安县",
            value: "421022"
          },
          {
            text: "监利县",
            value: "421023"
          },
          {
            text: "江陵县",
            value: "421024"
          },
          {
            text: "石首市",
            value: "421081"
          },
          {
            text: "洪湖市",
            value: "421083"
          },
          {
            text: "松滋市",
            value: "421087"
          }
        ]
      },
      {
        code: 421100,
        options: [
          {
            text: "市辖区",
            value: "421101"
          },
          {
            text: "黄州区",
            value: "421102"
          },
          {
            text: "团风县",
            value: "421121"
          },
          {
            text: "红安县",
            value: "421122"
          },
          {
            text: "罗田县",
            value: "421123"
          },
          {
            text: "英山县",
            value: "421124"
          },
          {
            text: "浠水县",
            value: "421125"
          },
          {
            text: "蕲春县",
            value: "421126"
          },
          {
            text: "黄梅县",
            value: "421127"
          },
          {
            text: "麻城市",
            value: "421181"
          },
          {
            text: "武穴市",
            value: "421182"
          }
        ]
      },
      {
        code: 421200,
        options: [
          {
            text: "市辖区",
            value: "421201"
          },
          {
            text: "咸安区",
            value: "421202"
          },
          {
            text: "嘉鱼县",
            value: "421221"
          },
          {
            text: "通城县",
            value: "421222"
          },
          {
            text: "崇阳县",
            value: "421223"
          },
          {
            text: "通山县",
            value: "421224"
          },
          {
            text: "赤壁市",
            value: "421281"
          }
        ]
      },
      {
        code: 421300,
        options: [
          {
            text: "市辖区",
            value: "421301"
          },
          {
            text: "曾都区",
            value: "421302"
          },
          {
            text: "广水市",
            value: "421381"
          }
        ]
      },
      {
        code: 422800,
        options: [
          {
            text: "恩施市",
            value: "422801"
          },
          {
            text: "利川市",
            value: "422802"
          },
          {
            text: "建始县",
            value: "422822"
          },
          {
            text: "巴东县",
            value: "422823"
          },
          {
            text: "宣恩县",
            value: "422825"
          },
          {
            text: "咸丰县",
            value: "422826"
          },
          {
            text: "来凤县",
            value: "422827"
          },
          {
            text: "鹤峰县",
            value: "422828"
          }
        ]
      },
      {
        code: 429000,
        options: [
          {
            text: "仙桃市",
            value: "429004"
          },
          {
            text: "潜江市",
            value: "429005"
          },
          {
            text: "天门市",
            value: "429006"
          },
          {
            text: "神农架林区",
            value: "429021"
          }
        ]
      },
      {
        code: 430100,
        options: [
          {
            text: "市辖区",
            value: "430101"
          },
          {
            text: "芙蓉区",
            value: "430102"
          },
          {
            text: "天心区",
            value: "430103"
          },
          {
            text: "岳麓区",
            value: "430104"
          },
          {
            text: "开福区",
            value: "430105"
          },
          {
            text: "雨花区",
            value: "430111"
          },
          {
            text: "长沙县",
            value: "430121"
          },
          {
            text: "望城县",
            value: "430122"
          },
          {
            text: "宁乡县",
            value: "430124"
          },
          {
            text: "浏阳市",
            value: "430181"
          }
        ]
      },
      {
        code: 430200,
        options: [
          {
            text: "市辖区",
            value: "430201"
          },
          {
            text: "荷塘区",
            value: "430202"
          },
          {
            text: "芦淞区",
            value: "430203"
          },
          {
            text: "石峰区",
            value: "430204"
          },
          {
            text: "天元区",
            value: "430211"
          },
          {
            text: "株洲县",
            value: "430221"
          },
          {
            text: "攸县",
            value: "430223"
          },
          {
            text: "茶陵县",
            value: "430224"
          },
          {
            text: "炎陵县",
            value: "430225"
          },
          {
            text: "醴陵市",
            value: "430281"
          }
        ]
      },
      {
        code: 430300,
        options: [
          {
            text: "市辖区",
            value: "430301"
          },
          {
            text: "雨湖区",
            value: "430302"
          },
          {
            text: "岳塘区",
            value: "430304"
          },
          {
            text: "湘潭县",
            value: "430321"
          },
          {
            text: "湘乡市",
            value: "430381"
          },
          {
            text: "韶山市",
            value: "430382"
          }
        ]
      },
      {
        code: 430400,
        options: [
          {
            text: "市辖区",
            value: "430401"
          },
          {
            text: "珠晖市",
            value: "430405"
          },
          {
            text: "雁峰市",
            value: "430406"
          },
          {
            text: "石鼓市",
            value: "430407"
          },
          {
            text: "蒸湘市",
            value: "430408"
          },
          {
            text: "南岳区",
            value: "430412"
          },
          {
            text: "衡阳县",
            value: "430421"
          },
          {
            text: "衡南县",
            value: "430422"
          },
          {
            text: "衡山县",
            value: "430423"
          },
          {
            text: "衡东县",
            value: "430424"
          },
          {
            text: "祁东县",
            value: "430426"
          },
          {
            text: "耒阳市",
            value: "430481"
          },
          {
            text: "常宁市",
            value: "430482"
          }
        ]
      },
      {
        code: 430500,
        options: [
          {
            text: "市辖区",
            value: "430501"
          },
          {
            text: "双清区",
            value: "430502"
          },
          {
            text: "大祥区",
            value: "430503"
          },
          {
            text: "北塔区",
            value: "430511"
          },
          {
            text: "邵东县",
            value: "430521"
          },
          {
            text: "新邵县",
            value: "430522"
          },
          {
            text: "邵阳县",
            value: "430523"
          },
          {
            text: "隆回县",
            value: "430524"
          },
          {
            text: "洞口县",
            value: "430525"
          },
          {
            text: "绥宁县",
            value: "430527"
          },
          {
            text: "新宁县",
            value: "430528"
          },
          {
            text: "城步苗族自治县",
            value: "430529"
          },
          {
            text: "武冈市",
            value: "430581"
          }
        ]
      },
      {
        code: 430600,
        options: [
          {
            text: "市辖区",
            value: "430601"
          },
          {
            text: "岳阳楼区",
            value: "430602"
          },
          {
            text: "云溪区",
            value: "430603"
          },
          {
            text: "君山区",
            value: "430611"
          },
          {
            text: "岳阳县",
            value: "430621"
          },
          {
            text: "华容县",
            value: "430623"
          },
          {
            text: "湘阴县",
            value: "430624"
          },
          {
            text: "平江县",
            value: "430626"
          },
          {
            text: "汨罗市",
            value: "430681"
          },
          {
            text: "临湘市",
            value: "430682"
          }
        ]
      },
      {
        code: 430700,
        options: [
          {
            text: "市辖区",
            value: "430701"
          },
          {
            text: "武陵区",
            value: "430702"
          },
          {
            text: "鼎城区",
            value: "430703"
          },
          {
            text: "安乡县",
            value: "430721"
          },
          {
            text: "汉寿县",
            value: "430722"
          },
          {
            text: "澧县",
            value: "430723"
          },
          {
            text: "临澧县",
            value: "430724"
          },
          {
            text: "桃源县",
            value: "430725"
          },
          {
            text: "石门县",
            value: "430726"
          },
          {
            text: "津市市",
            value: "430781"
          }
        ]
      },
      {
        code: 430800,
        options: [
          {
            text: "市辖区",
            value: "430801"
          },
          {
            text: "永定区",
            value: "430802"
          },
          {
            text: "武陵源区",
            value: "430811"
          },
          {
            text: "慈利县",
            value: "430821"
          },
          {
            text: "桑植县",
            value: "430822"
          }
        ]
      },
      {
        code: 430900,
        options: [
          {
            text: "市辖区",
            value: "430901"
          },
          {
            text: "资阳区",
            value: "430902"
          },
          {
            text: "赫山区",
            value: "430903"
          },
          {
            text: "南县",
            value: "430921"
          },
          {
            text: "桃江县",
            value: "430922"
          },
          {
            text: "安化县",
            value: "430923"
          },
          {
            text: "沅江市",
            value: "430981"
          }
        ]
      },
      {
        code: 431000,
        options: [
          {
            text: "市辖区",
            value: "431001"
          },
          {
            text: "北湖区",
            value: "431002"
          },
          {
            text: "苏仙区",
            value: "431003"
          },
          {
            text: "桂阳县",
            value: "431021"
          },
          {
            text: "宜章县",
            value: "431022"
          },
          {
            text: "永兴县",
            value: "431023"
          },
          {
            text: "嘉禾县",
            value: "431024"
          },
          {
            text: "临武县",
            value: "431025"
          },
          {
            text: "汝城县",
            value: "431026"
          },
          {
            text: "桂东县",
            value: "431027"
          },
          {
            text: "安仁县",
            value: "431028"
          },
          {
            text: "资兴市",
            value: "431081"
          }
        ]
      },
      {
        code: 431100,
        options: [
          {
            text: "市辖区",
            value: "431101"
          },
          {
            text: "芝山区",
            value: "431102"
          },
          {
            text: "冷水滩区",
            value: "431103"
          },
          {
            text: "祁阳县",
            value: "431121"
          },
          {
            text: "东安县",
            value: "431122"
          },
          {
            text: "双牌县",
            value: "431123"
          },
          {
            text: "道县",
            value: "431124"
          },
          {
            text: "江永县",
            value: "431125"
          },
          {
            text: "宁远县",
            value: "431126"
          },
          {
            text: "蓝山县",
            value: "431127"
          },
          {
            text: "新田县",
            value: "431128"
          },
          {
            text: "江华瑶族自治县",
            value: "431129"
          }
        ]
      },
      {
        code: 431200,
        options: [
          {
            text: "市辖区",
            value: "431201"
          },
          {
            text: "鹤城区",
            value: "431202"
          },
          {
            text: "中方县",
            value: "431221"
          },
          {
            text: "沅陵县",
            value: "431222"
          },
          {
            text: "辰溪县",
            value: "431223"
          },
          {
            text: "溆浦县",
            value: "431224"
          },
          {
            text: "会同县",
            value: "431225"
          },
          {
            text: "麻阳苗族自治县",
            value: "431226"
          },
          {
            text: "新晃侗族自治县",
            value: "431227"
          },
          {
            text: "芷江侗族自治县",
            value: "431228"
          },
          {
            text: "靖州苗族侗族自治县",
            value: "431229"
          },
          {
            text: "通道侗族自治县",
            value: "431230"
          },
          {
            text: "洪江市",
            value: "431281"
          }
        ]
      },
      {
        code: 431300,
        options: [
          {
            text: "市辖区",
            value: "431301"
          },
          {
            text: "娄星区",
            value: "431302"
          },
          {
            text: "双峰县",
            value: "431321"
          },
          {
            text: "新化县",
            value: "431322"
          },
          {
            text: "冷水江市",
            value: "431381"
          },
          {
            text: "涟源市",
            value: "431382"
          }
        ]
      },
      {
        code: 433100,
        options: [
          {
            text: "吉首市",
            value: "433101"
          },
          {
            text: "泸溪县",
            value: "433122"
          },
          {
            text: "凤凰县",
            value: "433123"
          },
          {
            text: "花垣县",
            value: "433124"
          },
          {
            text: "保靖县",
            value: "433125"
          },
          {
            text: "古丈县",
            value: "433126"
          },
          {
            text: "永顺县",
            value: "433127"
          },
          {
            text: "龙山县",
            value: "433130"
          }
        ]
      },
      {
        code: 440100,
        options: [
          {
            text: "市辖区",
            value: "440101"
          },
          {
            text: "东山区",
            value: "440102"
          },
          {
            text: "荔湾区",
            value: "440103"
          },
          {
            text: "越秀区",
            value: "440104"
          },
          {
            text: "海珠区",
            value: "440105"
          },
          {
            text: "天河区",
            value: "440106"
          },
          {
            text: "芳村区",
            value: "440107"
          },
          {
            text: "白云区",
            value: "440111"
          },
          {
            text: "黄埔区",
            value: "440112"
          },
          {
            text: "番禺区",
            value: "440113"
          },
          {
            text: "花都区",
            value: "440114"
          },
          {
            text: "增城市",
            value: "440183"
          },
          {
            text: "从化市",
            value: "440184"
          }
        ]
      },
      {
        code: 440200,
        options: [
          {
            text: "市辖区",
            value: "440201"
          },
          {
            text: "武江区",
            value: "440203"
          },
          {
            text: "浈江区",
            value: "440204"
          },
          {
            text: "曲江区",
            value: "440205"
          },
          {
            text: "始兴县",
            value: "440222"
          },
          {
            text: "仁化县",
            value: "440224"
          },
          {
            text: "翁源县",
            value: "440229"
          },
          {
            text: "乳源瑶族自治县",
            value: "440232"
          },
          {
            text: "新丰县",
            value: "440233"
          },
          {
            text: "乐昌市",
            value: "440281"
          },
          {
            text: "南雄市",
            value: "440282"
          }
        ]
      },
      {
        code: 440300,
        options: [
          {
            text: "市辖区",
            value: "440301"
          },
          {
            text: "罗湖区",
            value: "440303"
          },
          {
            text: "福田区",
            value: "440304"
          },
          {
            text: "南山区",
            value: "440305"
          },
          {
            text: "宝安区",
            value: "440306"
          },
          {
            text: "龙岗区",
            value: "440307"
          },
          {
            text: "盐田区",
            value: "440308"
          }
        ]
      },
      {
        code: 440400,
        options: [
          {
            text: "市辖区",
            value: "440401"
          },
          {
            text: "香洲区",
            value: "440402"
          },
          {
            text: "斗门县",
            value: "440403"
          },
          {
            text: "金湾区",
            value: "440404"
          }
        ]
      },
      {
        code: 440500,
        options: [
          {
            text: "市辖区",
            value: "440501"
          },
          {
            text: "龙湖区",
            value: "440507"
          },
          {
            text: "金平区",
            value: "440511"
          },
          {
            text: "濠江区",
            value: "440512"
          },
          {
            text: "潮阳区",
            value: "440513"
          },
          {
            text: "潮南区",
            value: "440514"
          },
          {
            text: "澄海区",
            value: "440515"
          },
          {
            text: "南澳县",
            value: "440523"
          }
        ]
      },
      {
        code: 440600,
        options: [
          {
            text: "市辖区",
            value: "440601"
          },
          {
            text: "禅城区",
            value: "440604"
          },
          {
            text: "南海区",
            value: "440605"
          },
          {
            text: "顺德区",
            value: "440606"
          },
          {
            text: "三水区",
            value: "440607"
          },
          {
            text: "高明区",
            value: "440608"
          }
        ]
      },
      {
        code: 440700,
        options: [
          {
            text: "市辖区",
            value: "440701"
          },
          {
            text: "蓬江区",
            value: "440703"
          },
          {
            text: "江海区",
            value: "440704"
          },
          {
            text: "新会区",
            value: "440705"
          },
          {
            text: "台山市",
            value: "440781"
          },
          {
            text: "开平市",
            value: "440783"
          },
          {
            text: "鹤山市",
            value: "440784"
          },
          {
            text: "恩平市",
            value: "440785"
          }
        ]
      },
      {
        code: 440800,
        options: [
          {
            text: "市辖区",
            value: "440801"
          },
          {
            text: "赤坎区",
            value: "440802"
          },
          {
            text: "霞山区",
            value: "440803"
          },
          {
            text: "坡头区",
            value: "440804"
          },
          {
            text: "麻章区",
            value: "440811"
          },
          {
            text: "遂溪县",
            value: "440823"
          },
          {
            text: "徐闻县",
            value: "440825"
          },
          {
            text: "廉江市",
            value: "440881"
          },
          {
            text: "雷州市",
            value: "440882"
          },
          {
            text: "吴川市",
            value: "440883"
          }
        ]
      },
      {
        code: 440900,
        options: [
          {
            text: "市辖区",
            value: "440901"
          },
          {
            text: "茂南区",
            value: "440902"
          },
          {
            text: "茂港区",
            value: "440903"
          },
          {
            text: "电白县",
            value: "440923"
          },
          {
            text: "高州市",
            value: "440981"
          },
          {
            text: "化州市",
            value: "440982"
          },
          {
            text: "信宜市",
            value: "440983"
          }
        ]
      },
      {
        code: 441200,
        options: [
          {
            text: "市辖区",
            value: "441201"
          },
          {
            text: "端州区",
            value: "441202"
          },
          {
            text: "鼎湖区",
            value: "441203"
          },
          {
            text: "广宁县",
            value: "441223"
          },
          {
            text: "怀集县",
            value: "441224"
          },
          {
            text: "封开县",
            value: "441225"
          },
          {
            text: "德庆县",
            value: "441226"
          },
          {
            text: "高要市",
            value: "441283"
          },
          {
            text: "四会市",
            value: "441284"
          }
        ]
      },
      {
        code: 441300,
        options: [
          {
            text: "市辖区",
            value: "441301"
          },
          {
            text: "惠城区",
            value: "441302"
          },
          {
            text: "惠阳区",
            value: "441303"
          },
          {
            text: "博罗县",
            value: "441322"
          },
          {
            text: "惠东县",
            value: "441323"
          },
          {
            text: "龙门县",
            value: "441324"
          }
        ]
      },
      {
        code: 441400,
        options: [
          {
            text: "市辖区",
            value: "441401"
          },
          {
            text: "梅江区",
            value: "441402"
          },
          {
            text: "梅县",
            value: "441421"
          },
          {
            text: "大埔县",
            value: "441422"
          },
          {
            text: "丰顺县",
            value: "441423"
          },
          {
            text: "五华县",
            value: "441424"
          },
          {
            text: "平远县",
            value: "441426"
          },
          {
            text: "蕉岭县",
            value: "441427"
          },
          {
            text: "兴宁市",
            value: "441481"
          }
        ]
      },
      {
        code: 441500,
        options: [
          {
            text: "市辖区",
            value: "441501"
          },
          {
            text: "城区",
            value: "441502"
          },
          {
            text: "海丰县",
            value: "441521"
          },
          {
            text: "陆河县",
            value: "441523"
          },
          {
            text: "陆丰市",
            value: "441581"
          }
        ]
      },
      {
        code: 441600,
        options: [
          {
            text: "市辖区",
            value: "441601"
          },
          {
            text: "源城区",
            value: "441602"
          },
          {
            text: "紫金县",
            value: "441621"
          },
          {
            text: "龙川县",
            value: "441622"
          },
          {
            text: "连平县",
            value: "441623"
          },
          {
            text: "和平县",
            value: "441624"
          },
          {
            text: "东源县",
            value: "441625"
          }
        ]
      },
      {
        code: 441700,
        options: [
          {
            text: "市辖区",
            value: "441701"
          },
          {
            text: "江城区",
            value: "441702"
          },
          {
            text: "阳西县",
            value: "441721"
          },
          {
            text: "阳东县",
            value: "441723"
          },
          {
            text: "阳春市",
            value: "441781"
          }
        ]
      },
      {
        code: 441800,
        options: [
          {
            text: "市辖区",
            value: "441801"
          },
          {
            text: "清城区",
            value: "441802"
          },
          {
            text: "佛冈县",
            value: "441821"
          },
          {
            text: "阳山县",
            value: "441823"
          },
          {
            text: "连山壮族瑶族自治县",
            value: "441825"
          },
          {
            text: "连南瑶族自治县",
            value: "441826"
          },
          {
            text: "清新县",
            value: "441827"
          },
          {
            text: "英德市",
            value: "441881"
          },
          {
            text: "连州市",
            value: "441882"
          }
        ]
      },
      {
        code: 445100,
        options: [
          {
            text: "市辖区",
            value: "445101"
          },
          {
            text: "湘桥区",
            value: "445102"
          },
          {
            text: "潮安县",
            value: "445121"
          },
          {
            text: "饶平县",
            value: "445122"
          }
        ]
      },
      {
        code: 445200,
        options: [
          {
            text: "市辖区",
            value: "445201"
          },
          {
            text: "榕城区",
            value: "445202"
          },
          {
            text: "揭东县",
            value: "445221"
          },
          {
            text: "揭西县",
            value: "445222"
          },
          {
            text: "惠来县",
            value: "445224"
          },
          {
            text: "普宁市",
            value: "445281"
          }
        ]
      },
      {
        code: 445300,
        options: [
          {
            text: "市辖区",
            value: "445301"
          },
          {
            text: "云城区",
            value: "445302"
          },
          {
            text: "新兴县",
            value: "445321"
          },
          {
            text: "郁南县",
            value: "445322"
          },
          {
            text: "云安县",
            value: "445323"
          },
          {
            text: "罗定市",
            value: "445381"
          }
        ]
      },
      {
        code: 450100,
        options: [
          {
            text: "市辖区",
            value: "450101"
          },
          {
            text: "兴宁区",
            value: "450102"
          },
          {
            text: "青秀区",
            value: "450103"
          },
          {
            text: "江南区",
            value: "450105"
          },
          {
            text: "西乡塘区",
            value: "450107"
          },
          {
            text: "良庆区",
            value: "450108"
          },
          {
            text: "邕宁区",
            value: "450109"
          },
          {
            text: "武鸣县",
            value: "450122"
          },
          {
            text: "隆安县",
            value: "450123"
          },
          {
            text: "马山县",
            value: "450124"
          },
          {
            text: "上林县",
            value: "450125"
          },
          {
            text: "宾阳县",
            value: "450126"
          },
          {
            text: "横县",
            value: "450127"
          }
        ]
      },
      {
        code: 450200,
        options: [
          {
            text: "市辖区",
            value: "450201"
          },
          {
            text: "城中区",
            value: "450202"
          },
          {
            text: "鱼峰区",
            value: "450203"
          },
          {
            text: "柳南区",
            value: "450204"
          },
          {
            text: "柳北区",
            value: "450205"
          },
          {
            text: "柳江县",
            value: "450221"
          },
          {
            text: "柳城县",
            value: "450222"
          },
          {
            text: "鹿寨县",
            value: "450223"
          },
          {
            text: "融安县",
            value: "450224"
          },
          {
            text: "融水苗族自治县",
            value: "450225"
          },
          {
            text: "三江侗族自治县",
            value: "450226"
          }
        ]
      },
      {
        code: 450300,
        options: [
          {
            text: "市辖区",
            value: "450301"
          },
          {
            text: "秀峰区",
            value: "450302"
          },
          {
            text: "叠彩区",
            value: "450303"
          },
          {
            text: "象山区",
            value: "450304"
          },
          {
            text: "七星区",
            value: "450305"
          },
          {
            text: "雁山区",
            value: "450311"
          },
          {
            text: "阳朔县",
            value: "450321"
          },
          {
            text: "临桂县",
            value: "450322"
          },
          {
            text: "灵川县",
            value: "450323"
          },
          {
            text: "全州县",
            value: "450324"
          },
          {
            text: "兴安县",
            value: "450325"
          },
          {
            text: "永福县",
            value: "450326"
          },
          {
            text: "灌阳县",
            value: "450327"
          },
          {
            text: "龙胜各族自治县",
            value: "450328"
          },
          {
            text: "资源县",
            value: "450329"
          },
          {
            text: "平乐县",
            value: "450330"
          },
          {
            text: "荔浦县",
            value: "450331"
          },
          {
            text: "恭城瑶族自治县",
            value: "450332"
          }
        ]
      },
      {
        code: 450400,
        options: [
          {
            text: "市辖区",
            value: "450401"
          },
          {
            text: "万秀区",
            value: "450403"
          },
          {
            text: "蝶山区",
            value: "450404"
          },
          {
            text: "长洲区",
            value: "450405"
          },
          {
            text: "苍梧县",
            value: "450421"
          },
          {
            text: "藤县",
            value: "450422"
          },
          {
            text: "蒙山县",
            value: "450423"
          },
          {
            text: "岑溪市",
            value: "450481"
          }
        ]
      },
      {
        code: 450500,
        options: [
          {
            text: "市辖区",
            value: "450501"
          },
          {
            text: "海城区",
            value: "450502"
          },
          {
            text: "银海区",
            value: "450503"
          },
          {
            text: "铁山港区",
            value: "450512"
          },
          {
            text: "合浦县",
            value: "450521"
          }
        ]
      },
      {
        code: 450600,
        options: [
          {
            text: "市辖区",
            value: "450601"
          },
          {
            text: "港口区",
            value: "450602"
          },
          {
            text: "防城区",
            value: "450603"
          },
          {
            text: "上思县",
            value: "450621"
          },
          {
            text: "东兴市",
            value: "450681"
          }
        ]
      },
      {
        code: 450700,
        options: [
          {
            text: "市辖区",
            value: "450701"
          },
          {
            text: "钦南区",
            value: "450702"
          },
          {
            text: "钦北区",
            value: "450703"
          },
          {
            text: "灵山县",
            value: "450721"
          },
          {
            text: "浦北县",
            value: "450722"
          }
        ]
      },
      {
        code: 450800,
        options: [
          {
            text: "市辖区",
            value: "450801"
          },
          {
            text: "港北区",
            value: "450802"
          },
          {
            text: "港南区",
            value: "450803"
          },
          {
            text: "平南县",
            value: "450821"
          },
          {
            text: "桂平市",
            value: "450881"
          }
        ]
      },
      {
        code: 450900,
        options: [
          {
            text: "市辖区",
            value: "450901"
          },
          {
            text: "玉州区",
            value: "450902"
          },
          {
            text: "容县",
            value: "450921"
          },
          {
            text: "陆川县",
            value: "450922"
          },
          {
            text: "博白县",
            value: "450923"
          },
          {
            text: "兴业县",
            value: "450924"
          },
          {
            text: "北流市",
            value: "450981"
          }
        ]
      },
      {
        code: 451000,
        options: [
          {
            text: "市辖区",
            value: "451001"
          },
          {
            text: "右江区",
            value: "451002"
          },
          {
            text: "田阳县",
            value: "451021"
          },
          {
            text: "田东县",
            value: "451022"
          },
          {
            text: "平果县",
            value: "451023"
          },
          {
            text: "德保县",
            value: "451024"
          },
          {
            text: "靖西县",
            value: "451025"
          },
          {
            text: "那坡县",
            value: "451026"
          },
          {
            text: "凌云县",
            value: "451027"
          },
          {
            text: "乐业县",
            value: "451028"
          },
          {
            text: "西林县",
            value: "451030"
          },
          {
            text: "隆林各族自治县",
            value: "451031"
          },
          {
            text: "田林县",
            value: "451039"
          }
        ]
      },
      {
        code: 451100,
        options: [
          {
            text: "市辖区",
            value: "451101"
          },
          {
            text: "八步区",
            value: "451102"
          },
          {
            text: "昭平县",
            value: "451121"
          },
          {
            text: "钟山县",
            value: "451122"
          },
          {
            text: "富川瑶族自治县",
            value: "451123"
          }
        ]
      },
      {
        code: 451200,
        options: [
          {
            text: "市辖区",
            value: "451201"
          },
          {
            text: "金城江区",
            value: "451202"
          },
          {
            text: "南丹县",
            value: "451221"
          },
          {
            text: "天峨县",
            value: "451222"
          },
          {
            text: "凤山县",
            value: "451223"
          },
          {
            text: "东兰县",
            value: "451224"
          },
          {
            text: "罗城么佬族自治县",
            value: "451225"
          },
          {
            text: "环江毛南族自治县",
            value: "451226"
          },
          {
            text: "巴马瑶族自治县",
            value: "451227"
          },
          {
            text: "都安瑶族自治县",
            value: "451228"
          },
          {
            text: "大化瑶族自治县",
            value: "451229"
          },
          {
            text: "宜州市",
            value: "451281"
          }
        ]
      },
      {
        code: 451300,
        options: [
          {
            text: "市辖区",
            value: "451301"
          },
          {
            text: " 兴宾区",
            value: "451302"
          },
          {
            text: "忻城县",
            value: "451321"
          },
          {
            text: "象州县",
            value: "451322"
          },
          {
            text: "武宣县",
            value: "451323"
          },
          {
            text: "金秀瑶族自治县",
            value: "451324"
          },
          {
            text: "合山市",
            value: "451381"
          }
        ]
      },
      {
        code: 451400,
        options: [
          {
            text: "市辖区",
            value: "451401"
          },
          {
            text: "江洲区",
            value: "451402"
          },
          {
            text: "扶绥县",
            value: "451421"
          },
          {
            text: "宁明县",
            value: "451422"
          },
          {
            text: "龙州县",
            value: "451423"
          },
          {
            text: "大新县",
            value: "451424"
          },
          {
            text: "天等县",
            value: "451425"
          },
          {
            text: "凭祥市",
            value: "451481"
          }
        ]
      },
      {
        code: 460100,
        options: [
          {
            text: "市辖区",
            value: "460101"
          },
          {
            text: "秀英区",
            value: "460105"
          },
          {
            text: "龙华区",
            value: "460106"
          },
          {
            text: "琼山区",
            value: "460107"
          },
          {
            text: "美兰区",
            value: "460108"
          }
        ]
      },
      {
        code: 460200,
        options: [
          {
            text: "市辖区",
            value: "460201"
          }
        ]
      },
      {
        code: 469000,
        options: [
          {
            text: "五指山市",
            value: "469001"
          },
          {
            text: "琼海市",
            value: "469002"
          },
          {
            text: "儋州市",
            value: "469003"
          },
          {
            text: "文昌市",
            value: "469005"
          },
          {
            text: "万宁市",
            value: "469006"
          },
          {
            text: "东方市",
            value: "469007"
          },
          {
            text: "定安县",
            value: "469025"
          },
          {
            text: "屯昌县",
            value: "469026"
          },
          {
            text: "澄迈县",
            value: "469027"
          },
          {
            text: "临高县",
            value: "469028"
          },
          {
            text: "白沙黎族自治县",
            value: "469030"
          },
          {
            text: "昌江黎族自治县",
            value: "469031"
          },
          {
            text: "乐东黎族自治县",
            value: "469033"
          },
          {
            text: "陵水黎族自治县",
            value: "469034"
          },
          {
            text: "保亭黎族苗族自治县",
            value: "469035"
          },
          {
            text: "琼中黎族苗族自治县",
            value: "469036"
          },
          {
            text: "西沙群岛",
            value: "469037"
          },
          {
            text: "南沙群岛",
            value: "469038"
          },
          {
            text: "中沙群岛的岛礁及其海域",
            value: "469039"
          }
        ]
      },
      {
        code: 510100,
        options: [
          {
            text: "市辖区",
            value: "510101"
          },
          {
            text: "锦江区",
            value: "510104"
          },
          {
            text: "青羊区",
            value: "510105"
          },
          {
            text: "金牛区",
            value: "510106"
          },
          {
            text: "武候区",
            value: "510107"
          },
          {
            text: "成华区",
            value: "510108"
          },
          {
            text: "龙泉驿区",
            value: "510112"
          },
          {
            text: "青白江区",
            value: "510113"
          },
          {
            text: "新都区",
            value: "510114"
          },
          {
            text: "温江区",
            value: "510115"
          },
          {
            text: "金堂县",
            value: "510121"
          },
          {
            text: "双流县",
            value: "510122"
          },
          {
            text: "郫县",
            value: "510124"
          },
          {
            text: "大邑县",
            value: "510129"
          },
          {
            text: "浦江县",
            value: "510131"
          },
          {
            text: "新津县",
            value: "510132"
          },
          {
            text: "都江堰市",
            value: "510181"
          },
          {
            text: "彭州市",
            value: "510182"
          },
          {
            text: "邛崃市",
            value: "510183"
          },
          {
            text: "崇州市",
            value: "510184"
          }
        ]
      },
      {
        code: 510300,
        options: [
          {
            text: "市辖区",
            value: "510301"
          },
          {
            text: "自流井区",
            value: "510302"
          },
          {
            text: "贡井区",
            value: "510303"
          },
          {
            text: "大安区",
            value: "510304"
          },
          {
            text: "沿滩区",
            value: "510311"
          },
          {
            text: "荣县",
            value: "510321"
          },
          {
            text: "富顺县",
            value: "510322"
          }
        ]
      },
      {
        code: 510400,
        options: [
          {
            text: "市辖区",
            value: "510401"
          },
          {
            text: "东区",
            value: "510402"
          },
          {
            text: "西区",
            value: "510403"
          },
          {
            text: "仁和区",
            value: "510411"
          },
          {
            text: "米易县",
            value: "510421"
          },
          {
            text: "盐边县",
            value: "510422"
          }
        ]
      },
      {
        code: 510500,
        options: [
          {
            text: "市辖区",
            value: "510501"
          },
          {
            text: "江阳区",
            value: "510502"
          },
          {
            text: "纳溪区",
            value: "510503"
          },
          {
            text: "龙马潭区",
            value: "510504"
          },
          {
            text: "泸县",
            value: "510521"
          },
          {
            text: "合江县",
            value: "510522"
          },
          {
            text: "叙永县",
            value: "510524"
          },
          {
            text: "古蔺县",
            value: "510525"
          }
        ]
      },
      {
        code: 510600,
        options: [
          {
            text: "市辖区",
            value: "510601"
          },
          {
            text: "旌阳区",
            value: "510603"
          },
          {
            text: "中江县",
            value: "510623"
          },
          {
            text: "罗江县",
            value: "510626"
          },
          {
            text: "广汉市",
            value: "510681"
          },
          {
            text: "什邡市",
            value: "510682"
          },
          {
            text: "绵竹市",
            value: "510683"
          }
        ]
      },
      {
        code: 510700,
        options: [
          {
            text: "市辖区",
            value: "510701"
          },
          {
            text: "涪城区",
            value: "510703"
          },
          {
            text: "游仙区",
            value: "510704"
          },
          {
            text: "三台县",
            value: "510722"
          },
          {
            text: "盐亭县",
            value: "510723"
          },
          {
            text: "安县",
            value: "510724"
          },
          {
            text: "梓潼县",
            value: "510725"
          },
          {
            text: "北川羌族自治县",
            value: "510726"
          },
          {
            text: "平武县",
            value: "510727"
          },
          {
            text: "江油市",
            value: "510781"
          }
        ]
      },
      {
        code: 510800,
        options: [
          {
            text: "市辖区",
            value: "510801"
          },
          {
            text: "市中区",
            value: "510802"
          },
          {
            text: "元坝区",
            value: "510811"
          },
          {
            text: "朝天区",
            value: "510812"
          },
          {
            text: "旺苍县",
            value: "510821"
          },
          {
            text: "青川县",
            value: "510822"
          },
          {
            text: "剑阁县",
            value: "510823"
          },
          {
            text: "苍溪县",
            value: "510824"
          }
        ]
      },
      {
        code: 510900,
        options: [
          {
            text: "市辖区",
            value: "510901"
          },
          {
            text: "船山区",
            value: "510903"
          },
          {
            text: "安居区",
            value: "510904"
          },
          {
            text: "蓬溪县",
            value: "510921"
          },
          {
            text: "射洪县",
            value: "510922"
          },
          {
            text: "大英县",
            value: "510923"
          }
        ]
      },
      {
        code: 511000,
        options: [
          {
            text: "市辖区",
            value: "511001"
          },
          {
            text: "市中区",
            value: "511002"
          },
          {
            text: "东兴区",
            value: "511011"
          },
          {
            text: "威远县",
            value: "511024"
          },
          {
            text: "资中县",
            value: "511025"
          },
          {
            text: "隆昌县",
            value: "511028"
          }
        ]
      },
      {
        code: 511100,
        options: [
          {
            text: "市辖区",
            value: "511101"
          },
          {
            text: "市中区",
            value: "511102"
          },
          {
            text: "沙湾区",
            value: "511111"
          },
          {
            text: "五通桥区",
            value: "511112"
          },
          {
            text: "金口河区",
            value: "511113"
          },
          {
            text: "犍为县",
            value: "511123"
          },
          {
            text: "井研县",
            value: "511124"
          },
          {
            text: "夹江县",
            value: "511126"
          },
          {
            text: "沐川县",
            value: "511129"
          },
          {
            text: "峨边彝族自治县",
            value: "511132"
          },
          {
            text: "马边彝族自治县",
            value: "511133"
          },
          {
            text: "峨眉山市",
            value: "511181"
          }
        ]
      },
      {
        code: 511300,
        options: [
          {
            text: "市辖区",
            value: "511301"
          },
          {
            text: "顺庆区",
            value: "511302"
          },
          {
            text: "高坪区",
            value: "511303"
          },
          {
            text: "嘉陵区",
            value: "511304"
          },
          {
            text: "南部县",
            value: "511321"
          },
          {
            text: "营山县",
            value: "511322"
          },
          {
            text: "蓬安县",
            value: "511323"
          },
          {
            text: "仪陇县",
            value: "511324"
          },
          {
            text: "西充县",
            value: "511325"
          },
          {
            text: "阆中市",
            value: "511381"
          }
        ]
      },
      {
        code: 511400,
        options: [
          {
            text: "市辖区",
            value: "511401"
          },
          {
            text: "东坡区",
            value: "511402"
          },
          {
            text: "仁寿县",
            value: "511421"
          },
          {
            text: "彭山县",
            value: "511422"
          },
          {
            text: "洪雅县",
            value: "511423"
          },
          {
            text: "丹棱县",
            value: "511424"
          },
          {
            text: "青神县",
            value: "511425"
          }
        ]
      },
      {
        code: 511500,
        options: [
          {
            text: "市辖区",
            value: "511501"
          },
          {
            text: "翠屏区",
            value: "511502"
          },
          {
            text: "宜宾县",
            value: "511521"
          },
          {
            text: "南溪县",
            value: "511522"
          },
          {
            text: "江安县",
            value: "511523"
          },
          {
            text: "长宁县",
            value: "511524"
          },
          {
            text: "高县",
            value: "511525"
          },
          {
            text: "珙县",
            value: "511526"
          },
          {
            text: "筠连县",
            value: "511527"
          },
          {
            text: "兴文县",
            value: "511528"
          },
          {
            text: "屏山县",
            value: "511529"
          }
        ]
      },
      {
        code: 511600,
        options: [
          {
            text: "市辖区",
            value: "511601"
          },
          {
            text: "广安区",
            value: "511602"
          },
          {
            text: "岳池县",
            value: "511621"
          },
          {
            text: "武胜县",
            value: "511622"
          },
          {
            text: "邻水县",
            value: "511623"
          },
          {
            text: "华蓥市",
            value: "511681"
          }
        ]
      },
      {
        code: 511700,
        options: [
          {
            text: "市辖区",
            value: "511701"
          },
          {
            text: "通川区",
            value: "511702"
          },
          {
            text: "宣汉县",
            value: "511722"
          },
          {
            text: "开江县",
            value: "511723"
          },
          {
            text: "大竹县",
            value: "511724"
          },
          {
            text: "渠县",
            value: "511725"
          },
          {
            text: "万源市",
            value: "511781"
          }
        ]
      },
      {
        code: 511800,
        options: [
          {
            text: "市辖区",
            value: "511801"
          },
          {
            text: "雨城区",
            value: "511802"
          },
          {
            text: "名山县",
            value: "511821"
          },
          {
            text: "荥经县",
            value: "511822"
          },
          {
            text: "汉源县",
            value: "511823"
          },
          {
            text: "石棉县",
            value: "511824"
          },
          {
            text: "天全县",
            value: "511825"
          },
          {
            text: "芦山县",
            value: "511826"
          },
          {
            text: "宝兴县",
            value: "511827"
          }
        ]
      },
      {
        code: 511900,
        options: [
          {
            text: "市辖区",
            value: "511901"
          },
          {
            text: "巴州区",
            value: "511902"
          },
          {
            text: "通江县",
            value: "511921"
          },
          {
            text: "南江县",
            value: "511922"
          },
          {
            text: "平昌县",
            value: "511923"
          }
        ]
      },
      {
        code: 512000,
        options: [
          {
            text: "市辖区",
            value: "512001"
          },
          {
            text: "雁江区",
            value: "512002"
          },
          {
            text: "安岳县",
            value: "512021"
          },
          {
            text: "乐至县",
            value: "512022"
          },
          {
            text: "简阳市",
            value: "512081"
          }
        ]
      },
      {
        code: 513200,
        options: [
          {
            text: "汶川县",
            value: "513221"
          },
          {
            text: "理县",
            value: "513222"
          },
          {
            text: "茂县",
            value: "513223"
          },
          {
            text: "松潘县",
            value: "513224"
          },
          {
            text: "九寨沟县",
            value: "513225"
          },
          {
            text: "金川县",
            value: "513226"
          },
          {
            text: "小金县",
            value: "513227"
          },
          {
            text: "黑水县",
            value: "513228"
          },
          {
            text: "马尔康县",
            value: "513229"
          },
          {
            text: "壤塘县",
            value: "513230"
          },
          {
            text: "阿坝县",
            value: "513231"
          },
          {
            text: "若尔盖县",
            value: "513232"
          },
          {
            text: "红原县",
            value: "513233"
          }
        ]
      },
      {
        code: 513300,
        options: [
          {
            text: "康定县",
            value: "513321"
          },
          {
            text: "泸定县",
            value: "513322"
          },
          {
            text: "丹巴县",
            value: "513323"
          },
          {
            text: "九龙县",
            value: "513324"
          },
          {
            text: "雅江县",
            value: "513325"
          },
          {
            text: "道孚县",
            value: "513326"
          },
          {
            text: "炉霍县",
            value: "513327"
          },
          {
            text: "甘孜县",
            value: "513328"
          },
          {
            text: "新龙县",
            value: "513329"
          },
          {
            text: "德格县",
            value: "513330"
          },
          {
            text: "白玉县",
            value: "513331"
          },
          {
            text: "石渠县",
            value: "513332"
          },
          {
            text: "色达县",
            value: "513333"
          },
          {
            text: "理塘县",
            value: "513334"
          },
          {
            text: "巴塘县",
            value: "513335"
          },
          {
            text: "乡城县",
            value: "513336"
          },
          {
            text: "稻城县",
            value: "513337"
          },
          {
            text: "得荣县",
            value: "513338"
          }
        ]
      },
      {
        code: 513400,
        options: [
          {
            text: "西昌市",
            value: "513401"
          },
          {
            text: "木里藏族自治县",
            value: "513422"
          },
          {
            text: "盐源县",
            value: "513423"
          },
          {
            text: "德昌县",
            value: "513424"
          },
          {
            text: "会理县",
            value: "513425"
          },
          {
            text: "会东县",
            value: "513426"
          },
          {
            text: "宁南县",
            value: "513427"
          },
          {
            text: "普格县",
            value: "513428"
          },
          {
            text: "布拖县",
            value: "513429"
          },
          {
            text: "金阳县",
            value: "513430"
          },
          {
            text: "昭觉县",
            value: "513431"
          },
          {
            text: "喜德县",
            value: "513432"
          },
          {
            text: "冕宁县",
            value: "513433"
          },
          {
            text: "越西县",
            value: "513434"
          },
          {
            text: "甘洛县",
            value: "513435"
          },
          {
            text: "美姑县",
            value: "513436"
          },
          {
            text: "雷波县",
            value: "513437"
          }
        ]
      },
      {
        code: 520100,
        options: [
          {
            text: "市辖区",
            value: "520101"
          },
          {
            text: "南明区",
            value: "520102"
          },
          {
            text: "云岩区",
            value: "520103"
          },
          {
            text: "花溪区",
            value: "520111"
          },
          {
            text: "乌当区",
            value: "520112"
          },
          {
            text: "白云区",
            value: "520113"
          },
          {
            text: "小河区",
            value: "520114"
          },
          {
            text: "开阳县",
            value: "520121"
          },
          {
            text: "息烽县",
            value: "520122"
          },
          {
            text: "修文县",
            value: "520123"
          },
          {
            text: "清镇市",
            value: "520181"
          }
        ]
      },
      {
        code: 520200,
        options: [
          {
            text: "钟山区",
            value: "520201"
          },
          {
            text: "六枝特区",
            value: "520203"
          },
          {
            text: "水城县",
            value: "520221"
          },
          {
            text: "盘县",
            value: "520222"
          }
        ]
      },
      {
        code: 520300,
        options: [
          {
            text: "市辖区",
            value: "520301"
          },
          {
            text: "红花岗区",
            value: "520302"
          },
          {
            text: "遵义县",
            value: "520321"
          },
          {
            text: "桐梓县",
            value: "520322"
          },
          {
            text: "绥阳县",
            value: "520323"
          },
          {
            text: "正安县",
            value: "520324"
          },
          {
            text: "道真仡佬族苗族自治县",
            value: "520325"
          },
          {
            text: "务川仡佬族苗族自治县",
            value: "520326"
          },
          {
            text: "凤冈县",
            value: "520327"
          },
          {
            text: "湄潭县",
            value: "520328"
          },
          {
            text: "余庆县",
            value: "520329"
          },
          {
            text: "习水县",
            value: "520330"
          },
          {
            text: "赤水市",
            value: "520381"
          },
          {
            text: "仁怀市",
            value: "520382"
          }
        ]
      },
      {
        code: 520400,
        options: [
          {
            text: "市辖区",
            value: "520401"
          },
          {
            text: "西秀区",
            value: "520402"
          },
          {
            text: "平坝县",
            value: "520421"
          },
          {
            text: "普定县",
            value: "520422"
          },
          {
            text: "关岭布依族苗族自治县",
            value: "520423"
          },
          {
            text: "镇宁布依族苗族自治县",
            value: "520424"
          },
          {
            text: "紫云苗族布依族自治县",
            value: "520425"
          }
        ]
      },
      {
        code: 522200,
        options: [
          {
            text: "铜仁市",
            value: "522201"
          },
          {
            text: "江口县",
            value: "522222"
          },
          {
            text: "玉屏侗族自治县",
            value: "522223"
          },
          {
            text: "石阡县",
            value: "522224"
          },
          {
            text: "恩南县",
            value: "522225"
          },
          {
            text: "印江土家族苗族自治县",
            value: "522226"
          },
          {
            text: "德江县",
            value: "522227"
          },
          {
            text: "沿河土家族自治县",
            value: "522228"
          },
          {
            text: "松桃苗族自治县",
            value: "522229"
          },
          {
            text: "万山特区",
            value: "522230"
          }
        ]
      },
      {
        code: 522300,
        options: [
          {
            text: "兴义市",
            value: "522301"
          },
          {
            text: "兴仁县",
            value: "522322"
          },
          {
            text: "普安县",
            value: "522323"
          },
          {
            text: "睛隆县",
            value: "522324"
          },
          {
            text: "贞丰县",
            value: "522325"
          },
          {
            text: "望谟县",
            value: "522326"
          },
          {
            text: "册亨县",
            value: "522327"
          },
          {
            text: "安龙县",
            value: "522328"
          }
        ]
      },
      {
        code: 522400,
        options: [
          {
            text: "毕节市",
            value: "522401"
          },
          {
            text: "大方县",
            value: "522422"
          },
          {
            text: "黔西县",
            value: "522423"
          },
          {
            text: "金沙县",
            value: "522424"
          },
          {
            text: "织金县",
            value: "522425"
          },
          {
            text: "纳雍县",
            value: "522426"
          },
          {
            text: "威宁彝族回族苗族自治县",
            value: "522427"
          },
          {
            text: "赫章县",
            value: "522428"
          }
        ]
      },
      {
        code: 522600,
        options: [
          {
            text: "凯里市",
            value: "522601"
          },
          {
            text: "黄平县",
            value: "522622"
          },
          {
            text: "施秉县",
            value: "522623"
          },
          {
            text: "三穗县",
            value: "522624"
          },
          {
            text: "镇远县",
            value: "522625"
          },
          {
            text: "岑巩县",
            value: "522626"
          },
          {
            text: "天柱县",
            value: "522627"
          },
          {
            text: "锦屏县",
            value: "522628"
          },
          {
            text: "剑河县",
            value: "522629"
          },
          {
            text: "台江县",
            value: "522630"
          },
          {
            text: "黎平县",
            value: "522631"
          },
          {
            text: "榕江县",
            value: "522632"
          },
          {
            text: "从江县",
            value: "522633"
          },
          {
            text: "雷山县",
            value: "522634"
          },
          {
            text: "麻江县",
            value: "522635"
          },
          {
            text: "丹寨县",
            value: "522636"
          }
        ]
      },
      {
        code: 522700,
        options: [
          {
            text: "都匀市",
            value: "522701"
          },
          {
            text: "福泉县",
            value: "522702"
          },
          {
            text: "荔波县",
            value: "522722"
          },
          {
            text: "贵定县",
            value: "522723"
          },
          {
            text: "瓮安县",
            value: "522725"
          },
          {
            text: "独山县",
            value: "522726"
          },
          {
            text: "平塘县",
            value: "522727"
          },
          {
            text: "罗甸县",
            value: "522728"
          },
          {
            text: "长顺县",
            value: "522729"
          },
          {
            text: "龙里县",
            value: "522730"
          },
          {
            text: "惠水县",
            value: "522731"
          },
          {
            text: "三都水族自治县",
            value: "522732"
          }
        ]
      },
      {
        code: 530100,
        options: [
          {
            text: "市辖区",
            value: "530101"
          },
          {
            text: "五华区",
            value: "530102"
          },
          {
            text: "盘龙区",
            value: "530103"
          },
          {
            text: "官渡区",
            value: "530111"
          },
          {
            text: "西山区",
            value: "530112"
          },
          {
            text: "东川区",
            value: "530113"
          },
          {
            text: "呈贡县",
            value: "530121"
          },
          {
            text: "晋宁县",
            value: "530122"
          },
          {
            text: "富民县",
            value: "530124"
          },
          {
            text: "宜良县",
            value: "530125"
          },
          {
            text: "石林彝族自治县",
            value: "530126"
          },
          {
            text: "嵩明县",
            value: "530127"
          },
          {
            text: "禄劝彝族苗族自治县",
            value: "530128"
          },
          {
            text: "寻甸回族彝族自治县",
            value: "530129"
          },
          {
            text: "安宁市",
            value: "530181"
          }
        ]
      },
      {
        code: 530300,
        options: [
          {
            text: "市辖区",
            value: "530301"
          },
          {
            text: "麒麟区",
            value: "530302"
          },
          {
            text: "马龙县",
            value: "530321"
          },
          {
            text: "陆良县",
            value: "530322"
          },
          {
            text: "师宗县",
            value: "530323"
          },
          {
            text: "罗平县",
            value: "530324"
          },
          {
            text: "富源县",
            value: "530325"
          },
          {
            text: "会泽县",
            value: "530326"
          },
          {
            text: "沾益县",
            value: "530328"
          },
          {
            text: "宣威市",
            value: "530381"
          }
        ]
      },
      {
        code: 530400,
        options: [
          {
            text: "市辖区",
            value: "530401"
          },
          {
            text: "红塔区",
            value: "530402"
          },
          {
            text: "江川县",
            value: "530421"
          },
          {
            text: "澄江县",
            value: "530422"
          },
          {
            text: "通海县",
            value: "530423"
          },
          {
            text: "华宁县",
            value: "530424"
          },
          {
            text: "易门县",
            value: "530425"
          },
          {
            text: "峨山彝族自治县",
            value: "530426"
          },
          {
            text: "新平彝族傣族自治县",
            value: "530427"
          },
          {
            text: "元江哈尼族彝族傣族自治县",
            value: "530428"
          }
        ]
      },
      {
        code: 530500,
        options: [
          {
            text: "市辖区",
            value: "530501"
          },
          {
            text: "隆阳区",
            value: "530502"
          },
          {
            text: "施甸县",
            value: "530521"
          },
          {
            text: "腾冲县",
            value: "530522"
          },
          {
            text: "龙陵县",
            value: "530523"
          },
          {
            text: "昌宁县",
            value: "530524"
          }
        ]
      },
      {
        code: 530600,
        options: [
          {
            text: "市辖区",
            value: "530601"
          },
          {
            text: "昭阳区",
            value: "530602"
          },
          {
            text: "鲁甸县",
            value: "530621"
          },
          {
            text: "巧家县",
            value: "530622"
          },
          {
            text: "盐津县",
            value: "530623"
          },
          {
            text: "大关县",
            value: "530624"
          },
          {
            text: "永善县",
            value: "530625"
          },
          {
            text: "绥江县",
            value: "530626"
          },
          {
            text: "镇雄县",
            value: "530627"
          },
          {
            text: "彝良县",
            value: "530628"
          },
          {
            text: "威信县",
            value: "530629"
          },
          {
            text: "水富县",
            value: "530630"
          }
        ]
      },
      {
        code: 530700,
        options: [
          {
            text: "市辖区",
            value: "530701"
          },
          {
            text: " 古城区",
            value: "530702"
          },
          {
            text: "玉龙纳西族自治县",
            value: "530721"
          },
          {
            text: "永胜县",
            value: "530722"
          },
          {
            text: "华坪县",
            value: "530723"
          },
          {
            text: "市宁蒗彝族自治县",
            value: "530724"
          }
        ]
      },
      {
        code: 530800,
        options: [
          {
            text: "市辖区",
            value: "530801"
          },
          {
            text: " 翠云区",
            value: "530802"
          },
          {
            text: "普洱哈尼族彝族自治县",
            value: "530821"
          },
          {
            text: "墨江哈尼族自治县",
            value: "530822"
          },
          {
            text: "景东彝族自治县",
            value: "530823"
          },
          {
            text: "景谷傣族彝族自治县",
            value: "530824"
          },
          {
            text: "镇沅彝族哈尼族拉祜族自",
            value: "530825"
          },
          {
            text: "江城哈尼族彝族自治县",
            value: "530826"
          },
          {
            text: "孟连傣族拉祜族佤族自治",
            value: "530827"
          },
          {
            text: "澜沧拉祜族自治县",
            value: "530828"
          },
          {
            text: "西盟佤族自治县",
            value: "530829"
          }
        ]
      },
      {
        code: 530900,
        options: [
          {
            text: "市辖区",
            value: "530901"
          },
          {
            text: "临翔区",
            value: "530902"
          },
          {
            text: "凤庆县",
            value: "530921"
          },
          {
            text: "云县",
            value: "530922"
          },
          {
            text: "永德县",
            value: "530923"
          },
          {
            text: "镇康县",
            value: "530924"
          },
          {
            text: "双江拉祜族佤族布郎族傣族自治县",
            value: "530925"
          },
          {
            text: "耿马傣族佤族自治县",
            value: "530926"
          },
          {
            text: "沧源佤族自治县",
            value: "530927"
          }
        ]
      },
      {
        code: 532300,
        options: [
          {
            text: "楚雄市",
            value: "532301"
          },
          {
            text: "双柏县",
            value: "532322"
          },
          {
            text: "牟定县",
            value: "532323"
          },
          {
            text: "南华县",
            value: "532324"
          },
          {
            text: "姚安县",
            value: "532325"
          },
          {
            text: "大姚县",
            value: "532326"
          },
          {
            text: "永仁县",
            value: "532327"
          },
          {
            text: "元谋县",
            value: "532328"
          },
          {
            text: "武定县",
            value: "532329"
          },
          {
            text: "禄丰县",
            value: "532331"
          }
        ]
      },
      {
        code: 532500,
        options: [
          {
            text: "红河州个旧市",
            value: "532501"
          },
          {
            text: "红河州开远市",
            value: "532502"
          },
          {
            text: "红河州蒙自县",
            value: "532522"
          },
          {
            text: "红河州屏边苗族自治县",
            value: "532523"
          },
          {
            text: "红河州建水县",
            value: "532524"
          },
          {
            text: "红河州石屏县",
            value: "532525"
          },
          {
            text: "红河州弥勒县",
            value: "532526"
          },
          {
            text: "红河州泸西县",
            value: "532527"
          },
          {
            text: "红河州元阳县",
            value: "532528"
          },
          {
            text: "红河州红河县",
            value: "532529"
          },
          {
            text: "金平苗族瑶族傣族自治县",
            value: "532530"
          },
          {
            text: "红河州绿春县",
            value: "532531"
          },
          {
            text: "红河州河口瑶族自治县",
            value: "532532"
          }
        ]
      },
      {
        code: 532600,
        options: [
          {
            text: "文山县",
            value: "532621"
          },
          {
            text: "砚山县",
            value: "532622"
          },
          {
            text: "西畴县",
            value: "532623"
          },
          {
            text: "麻栗坡县",
            value: "532624"
          },
          {
            text: "马关县",
            value: "532625"
          },
          {
            text: "丘北县",
            value: "532626"
          },
          {
            text: "广南县",
            value: "532627"
          },
          {
            text: "富宁县",
            value: "532628"
          }
        ]
      },
      {
        code: 532800,
        options: [
          {
            text: "景洪市",
            value: "532801"
          },
          {
            text: "勐海县",
            value: "532822"
          },
          {
            text: "勐腊县",
            value: "532823"
          }
        ]
      },
      {
        code: 532900,
        options: [
          {
            text: "大理市",
            value: "532901"
          },
          {
            text: "漾濞彝族自治县",
            value: "532922"
          },
          {
            text: "祥云县",
            value: "532923"
          },
          {
            text: "宾川县",
            value: "532924"
          },
          {
            text: "弥渡县",
            value: "532925"
          },
          {
            text: "南涧彝族自治县",
            value: "532926"
          },
          {
            text: "巍山彝族回族自治县",
            value: "532927"
          },
          {
            text: "永平县",
            value: "532928"
          },
          {
            text: "云龙县",
            value: "532929"
          },
          {
            text: "洱源县",
            value: "532930"
          },
          {
            text: "剑川县",
            value: "532931"
          },
          {
            text: "鹤庆县",
            value: "532932"
          }
        ]
      },
      {
        code: 533100,
        options: [
          {
            text: "瑞丽市",
            value: "533102"
          },
          {
            text: "潞西市",
            value: "533103"
          },
          {
            text: "粱河县",
            value: "533122"
          },
          {
            text: "盈江县",
            value: "533123"
          },
          {
            text: "陇川县",
            value: "533124"
          }
        ]
      },
      {
        code: 533300,
        options: [
          {
            text: "泸水县",
            value: "533321"
          },
          {
            text: "福贡县",
            value: "533323"
          },
          {
            text: "贡山独龙族怒族自治县",
            value: "533324"
          },
          {
            text: "兰坪白族普米族自治县",
            value: "533325"
          }
        ]
      },
      {
        code: 533400,
        options: [
          {
            text: "香格里拉县",
            value: "533421"
          },
          {
            text: "德钦县",
            value: "533422"
          },
          {
            text: "维西傈僳族自治县",
            value: "533423"
          }
        ]
      },
      {
        code: 540100,
        options: [
          {
            text: "市辖区",
            value: "540101"
          },
          {
            text: "城关区",
            value: "540102"
          },
          {
            text: "林周县",
            value: "540121"
          },
          {
            text: "当雄县",
            value: "540122"
          },
          {
            text: "尼木县",
            value: "540123"
          },
          {
            text: "曲水县",
            value: "540124"
          },
          {
            text: "堆龙德庆县",
            value: "540125"
          },
          {
            text: "达孜县",
            value: "540126"
          },
          {
            text: "墨竹工卡县",
            value: "540127"
          }
        ]
      },
      {
        code: 542100,
        options: [
          {
            text: "昌都县",
            value: "542121"
          },
          {
            text: "江达县",
            value: "542122"
          },
          {
            text: "贡觉县",
            value: "542123"
          },
          {
            text: "类乌齐县",
            value: "542124"
          },
          {
            text: "丁青县",
            value: "542125"
          },
          {
            text: "察雅县",
            value: "542126"
          },
          {
            text: "八宿县",
            value: "542127"
          },
          {
            text: "左贡县",
            value: "542128"
          },
          {
            text: "芒康县",
            value: "542129"
          },
          {
            text: "洛隆县",
            value: "542132"
          },
          {
            text: "边坝县",
            value: "542133"
          }
        ]
      },
      {
        code: 542200,
        options: [
          {
            text: "乃东县",
            value: "542221"
          },
          {
            text: "扎襄县",
            value: "542222"
          },
          {
            text: "贡嘎县",
            value: "542223"
          },
          {
            text: "桑日县",
            value: "542224"
          },
          {
            text: "琼结县",
            value: "542225"
          },
          {
            text: "曲松县",
            value: "542226"
          },
          {
            text: "措美县",
            value: "542227"
          },
          {
            text: "洛扎县",
            value: "542228"
          },
          {
            text: "加查县",
            value: "542229"
          },
          {
            text: "隆子县",
            value: "542231"
          },
          {
            text: "错那县",
            value: "542232"
          },
          {
            text: "浪卡子县",
            value: "542233"
          }
        ]
      },
      {
        code: 542300,
        options: [
          {
            text: "日喀则市",
            value: "542301"
          },
          {
            text: "南木林县",
            value: "542322"
          },
          {
            text: "江孜县",
            value: "542323"
          },
          {
            text: "定日县",
            value: "542324"
          },
          {
            text: "萨迦县",
            value: "542325"
          },
          {
            text: "拉孜县",
            value: "542326"
          },
          {
            text: "昂仁县",
            value: "542327"
          },
          {
            text: "谢通门县",
            value: "542328"
          },
          {
            text: "白朗县",
            value: "542329"
          },
          {
            text: "仁布县",
            value: "542330"
          },
          {
            text: "康马县",
            value: "542331"
          },
          {
            text: "定结县",
            value: "542332"
          },
          {
            text: "仲巴县",
            value: "542333"
          },
          {
            text: "亚东县",
            value: "542334"
          },
          {
            text: "吉隆县",
            value: "542335"
          },
          {
            text: "聂拉木县",
            value: "542336"
          },
          {
            text: "萨嘎县",
            value: "542337"
          },
          {
            text: "岗巴县",
            value: "542338"
          }
        ]
      },
      {
        code: 542400,
        options: [
          {
            text: "那曲县",
            value: "542421"
          },
          {
            text: "嘉黎县",
            value: "542422"
          },
          {
            text: "比如县",
            value: "542423"
          },
          {
            text: "聂荣县",
            value: "542424"
          },
          {
            text: "安多县",
            value: "542425"
          },
          {
            text: "申扎县",
            value: "542426"
          },
          {
            text: "索县",
            value: "542427"
          },
          {
            text: "班戈县",
            value: "542428"
          },
          {
            text: "巴青县",
            value: "542429"
          },
          {
            text: "尼玛县",
            value: "542430"
          }
        ]
      },
      {
        code: 542500,
        options: [
          {
            text: "普兰县",
            value: "542521"
          },
          {
            text: "札达县",
            value: "542522"
          },
          {
            text: "噶尔县",
            value: "542523"
          },
          {
            text: "日土县",
            value: "542524"
          },
          {
            text: "革吉县",
            value: "542525"
          },
          {
            text: "改则县",
            value: "542526"
          },
          {
            text: "措勤县",
            value: "542527"
          }
        ]
      },
      {
        code: 542600,
        options: [
          {
            text: "林芝县",
            value: "542621"
          },
          {
            text: "工布江达县",
            value: "542622"
          },
          {
            text: "米林县",
            value: "542623"
          },
          {
            text: "墨脱县",
            value: "542624"
          },
          {
            text: "波密县",
            value: "542625"
          },
          {
            text: "察隅县",
            value: "542626"
          },
          {
            text: "朗县",
            value: "542627"
          }
        ]
      },
      {
        code: 610100,
        options: [
          {
            text: "市辖区",
            value: "610101"
          },
          {
            text: "新城区",
            value: "610102"
          },
          {
            text: "碑林区",
            value: "610103"
          },
          {
            text: "莲湖区",
            value: "610104"
          },
          {
            text: "灞桥区",
            value: "610111"
          },
          {
            text: "未央区",
            value: "610112"
          },
          {
            text: "雁塔区",
            value: "610113"
          },
          {
            text: "阎良区",
            value: "610114"
          },
          {
            text: "临潼区",
            value: "610115"
          },
          {
            text: "长安区",
            value: "610116"
          },
          {
            text: "蓝田县",
            value: "610122"
          },
          {
            text: "周至县",
            value: "610124"
          },
          {
            text: "户县",
            value: "610125"
          },
          {
            text: "高陵县",
            value: "610126"
          }
        ]
      },
      {
        code: 610200,
        options: [
          {
            text: "市辖区",
            value: "610201"
          },
          {
            text: "王益区",
            value: "610202"
          },
          {
            text: "印台区",
            value: "610203"
          },
          {
            text: "耀州区",
            value: "610204"
          },
          {
            text: "宜君县",
            value: "610222"
          }
        ]
      },
      {
        code: 610300,
        options: [
          {
            text: "市辖区",
            value: "610301"
          },
          {
            text: "渭滨区",
            value: "610302"
          },
          {
            text: "金台区",
            value: "610303"
          },
          {
            text: "陈仓区",
            value: "610304"
          },
          {
            text: "凤翔县",
            value: "610322"
          },
          {
            text: "岐山县",
            value: "610323"
          },
          {
            text: "扶风县",
            value: "610324"
          },
          {
            text: "眉县",
            value: "610326"
          },
          {
            text: "陇县",
            value: "610327"
          },
          {
            text: "千阳县",
            value: "610328"
          },
          {
            text: "麟游县",
            value: "610329"
          },
          {
            text: "凤县",
            value: "610330"
          },
          {
            text: "太白县",
            value: "610331"
          }
        ]
      },
      {
        code: 610400,
        options: [
          {
            text: "市辖区",
            value: "610401"
          },
          {
            text: "秦都区",
            value: "610402"
          },
          {
            text: "杨凌区",
            value: "610403"
          },
          {
            text: "渭城区",
            value: "610404"
          },
          {
            text: "三原县",
            value: "610422"
          },
          {
            text: "泾阳县",
            value: "610423"
          },
          {
            text: "乾县",
            value: "610424"
          },
          {
            text: "礼泉县",
            value: "610425"
          },
          {
            text: "永寿县",
            value: "610426"
          },
          {
            text: "彬县",
            value: "610427"
          },
          {
            text: "长武县",
            value: "610428"
          },
          {
            text: "旬邑县",
            value: "610429"
          },
          {
            text: "淳化县",
            value: "610430"
          },
          {
            text: "武功县",
            value: "610431"
          },
          {
            text: "兴平市",
            value: "610481"
          }
        ]
      },
      {
        code: 610500,
        options: [
          {
            text: "市辖区",
            value: "610501"
          },
          {
            text: "临渭区",
            value: "610502"
          },
          {
            text: "华县",
            value: "610521"
          },
          {
            text: "潼关县",
            value: "610522"
          },
          {
            text: "大荔县",
            value: "610523"
          },
          {
            text: "合阳县",
            value: "610524"
          },
          {
            text: "澄城县",
            value: "610525"
          },
          {
            text: "蒲城县",
            value: "610526"
          },
          {
            text: "白水县",
            value: "610527"
          },
          {
            text: "富平县",
            value: "610528"
          },
          {
            text: "韩城市",
            value: "610581"
          },
          {
            text: "华阴市",
            value: "610582"
          }
        ]
      },
      {
        code: 610600,
        options: [
          {
            text: "市辖区",
            value: "610601"
          },
          {
            text: "宝塔区",
            value: "610602"
          },
          {
            text: "延长县",
            value: "610621"
          },
          {
            text: "延川县",
            value: "610622"
          },
          {
            text: "子长县",
            value: "610623"
          },
          {
            text: "安塞县",
            value: "610624"
          },
          {
            text: "志丹县",
            value: "610625"
          },
          {
            text: "吴旗县",
            value: "610626"
          },
          {
            text: "甘泉县",
            value: "610627"
          },
          {
            text: "富县",
            value: "610628"
          },
          {
            text: "洛川县",
            value: "610629"
          },
          {
            text: "宜川县",
            value: "610630"
          },
          {
            text: "黄龙县",
            value: "610631"
          },
          {
            text: "黄陵县",
            value: "610632"
          }
        ]
      },
      {
        code: 610700,
        options: [
          {
            text: "市辖区",
            value: "610701"
          },
          {
            text: "汉台区",
            value: "610702"
          },
          {
            text: "南郑县",
            value: "610721"
          },
          {
            text: "城固县",
            value: "610722"
          },
          {
            text: "洋县",
            value: "610723"
          },
          {
            text: "西乡县",
            value: "610724"
          },
          {
            text: "勉县",
            value: "610725"
          },
          {
            text: "宁强县",
            value: "610726"
          },
          {
            text: "略阳县",
            value: "610727"
          },
          {
            text: "镇巴县",
            value: "610728"
          },
          {
            text: "留坝县",
            value: "610729"
          },
          {
            text: "佛坪县",
            value: "610730"
          }
        ]
      },
      {
        code: 610800,
        options: [
          {
            text: "市辖区",
            value: "610801"
          },
          {
            text: "榆阳区",
            value: "610802"
          },
          {
            text: "神木县",
            value: "610821"
          },
          {
            text: "府谷县",
            value: "610822"
          },
          {
            text: "横山县",
            value: "610823"
          },
          {
            text: "靖边县",
            value: "610824"
          },
          {
            text: "定边县",
            value: "610825"
          },
          {
            text: "绥德县",
            value: "610826"
          },
          {
            text: "米脂县",
            value: "610827"
          },
          {
            text: "佳县",
            value: "610828"
          },
          {
            text: "吴堡县",
            value: "610829"
          },
          {
            text: "清涧县",
            value: "610830"
          },
          {
            text: "子洲县",
            value: "610831"
          }
        ]
      },
      {
        code: 610900,
        options: [
          {
            text: "市辖区",
            value: "610901"
          },
          {
            text: "汉滨区",
            value: "610902"
          },
          {
            text: "汉阴县",
            value: "610921"
          },
          {
            text: "石泉县",
            value: "610922"
          },
          {
            text: "宁陕县",
            value: "610923"
          },
          {
            text: "紫阳县",
            value: "610924"
          },
          {
            text: "岚皋县",
            value: "610925"
          },
          {
            text: "平利县",
            value: "610926"
          },
          {
            text: "镇坪县",
            value: "610927"
          },
          {
            text: "旬阳县",
            value: "610928"
          },
          {
            text: "白河县",
            value: "610929"
          }
        ]
      },
      {
        code: 611000,
        options: [
          {
            text: "市辖区",
            value: "611001"
          },
          {
            text: "商州区",
            value: "611002"
          },
          {
            text: "洛南县",
            value: "611021"
          },
          {
            text: "丹凤县",
            value: "611022"
          },
          {
            text: "商南县",
            value: "611023"
          },
          {
            text: "山阳县",
            value: "611024"
          },
          {
            text: "镇安县",
            value: "611025"
          },
          {
            text: "柞水县",
            value: "611026"
          }
        ]
      },
      {
        code: 620100,
        options: [
          {
            text: "市辖区",
            value: "620101"
          },
          {
            text: "城关区",
            value: "620102"
          },
          {
            text: "七里河区",
            value: "620103"
          },
          {
            text: "西固区",
            value: "620104"
          },
          {
            text: "安宁区",
            value: "620105"
          },
          {
            text: "红古区",
            value: "620111"
          },
          {
            text: "永登县",
            value: "620121"
          },
          {
            text: "皋兰县",
            value: "620122"
          },
          {
            text: "榆中县",
            value: "620123"
          }
        ]
      },
      {
        code: 620200,
        options: [
          {
            text: "市辖区",
            value: "620201"
          }
        ]
      },
      {
        code: 620300,
        options: [
          {
            text: "市辖区",
            value: "620301"
          },
          {
            text: "金川区",
            value: "620302"
          },
          {
            text: "永昌县",
            value: "620321"
          }
        ]
      },
      {
        code: 620400,
        options: [
          {
            text: "市辖区",
            value: "620401"
          },
          {
            text: "白银区",
            value: "620402"
          },
          {
            text: "平川区",
            value: "620403"
          },
          {
            text: "靖远县",
            value: "620421"
          },
          {
            text: "会宁县",
            value: "620422"
          },
          {
            text: "景泰县",
            value: "620423"
          }
        ]
      },
      {
        code: 620500,
        options: [
          {
            text: "市辖区",
            value: "620501"
          },
          {
            text: "秦城区",
            value: "620502"
          },
          {
            text: "北道区",
            value: "620503"
          },
          {
            text: "清水县",
            value: "620521"
          },
          {
            text: "秦安县",
            value: "620522"
          },
          {
            text: "甘谷县",
            value: "620523"
          },
          {
            text: "武山县",
            value: "620524"
          },
          {
            text: "张家川回族自治县",
            value: "620525"
          }
        ]
      },
      {
        code: 620600,
        options: [
          {
            text: "市辖区",
            value: "620601"
          },
          {
            text: "凉州区",
            value: "620602"
          },
          {
            text: "民勤县",
            value: "620621"
          },
          {
            text: "古浪县",
            value: "620622"
          },
          {
            text: "天祝藏族自治县",
            value: "620623"
          }
        ]
      },
      {
        code: 620700,
        options: [
          {
            text: "市辖区",
            value: "620701"
          },
          {
            text: " 甘州区",
            value: "620702"
          },
          {
            text: "肃南裕固族自治县",
            value: "620721"
          },
          {
            text: "民乐县",
            value: "620722"
          },
          {
            text: "临泽县",
            value: "620723"
          },
          {
            text: "高台县",
            value: "620724"
          },
          {
            text: "山丹县",
            value: "620725"
          }
        ]
      },
      {
        code: 620800,
        options: [
          {
            text: "市辖区",
            value: "620801"
          },
          {
            text: " 崆峒区",
            value: "620802"
          },
          {
            text: "泾川县",
            value: "620821"
          },
          {
            text: "灵台县",
            value: "620822"
          },
          {
            text: "崇信县",
            value: "620823"
          },
          {
            text: "华亭县",
            value: "620824"
          },
          {
            text: "庄浪县",
            value: "620825"
          },
          {
            text: "静宁县",
            value: "620826"
          }
        ]
      },
      {
        code: 620900,
        options: [
          {
            text: "市辖区",
            value: "620901"
          },
          {
            text: " 肃州市",
            value: "620902"
          },
          {
            text: "金塔县",
            value: "620921"
          },
          {
            text: "安西县",
            value: "620922"
          },
          {
            text: "肃北蒙古族自治县",
            value: "620923"
          },
          {
            text: "阿克塞哈萨克族自治县",
            value: "620924"
          },
          {
            text: "玉门市",
            value: "620981"
          },
          {
            text: "敦煌市",
            value: "620982"
          }
        ]
      },
      {
        code: 621000,
        options: [
          {
            text: "市辖区",
            value: "621001"
          },
          {
            text: "西峰区",
            value: "621002"
          },
          {
            text: "庆城县",
            value: "621021"
          },
          {
            text: "环县",
            value: "621022"
          },
          {
            text: "华池县",
            value: "621023"
          },
          {
            text: "合水县",
            value: "621024"
          },
          {
            text: "正宁县",
            value: "621025"
          },
          {
            text: "宁县",
            value: "621026"
          },
          {
            text: "镇原县",
            value: "621027"
          }
        ]
      },
      {
        code: 621100,
        options: [
          {
            text: "市辖区",
            value: "621101"
          },
          {
            text: " 安定区",
            value: "621102"
          },
          {
            text: "通渭县",
            value: "621121"
          },
          {
            text: "陇西县",
            value: "621122"
          },
          {
            text: "渭源县",
            value: "621123"
          },
          {
            text: "临洮县",
            value: "621124"
          },
          {
            text: "漳县",
            value: "621125"
          },
          {
            text: "岷县",
            value: "621126"
          }
        ]
      },
      {
        code: 621200,
        options: [
          {
            text: "市辖区",
            value: "621201"
          },
          {
            text: "武都区",
            value: "621202"
          },
          {
            text: "成县",
            value: "621221"
          },
          {
            text: "文县",
            value: "621222"
          },
          {
            text: "宕昌县",
            value: "621223"
          },
          {
            text: "康县",
            value: "621224"
          },
          {
            text: "西和县",
            value: "621225"
          },
          {
            text: "礼县",
            value: "621226"
          },
          {
            text: "徽县",
            value: "621227"
          },
          {
            text: "两当县",
            value: "621228"
          }
        ]
      },
      {
        code: 622900,
        options: [
          {
            text: "临夏市",
            value: "622901"
          },
          {
            text: "临夏县",
            value: "622921"
          },
          {
            text: "康乐县",
            value: "622922"
          },
          {
            text: "永靖县",
            value: "622923"
          },
          {
            text: "广河县",
            value: "622924"
          },
          {
            text: "和政县",
            value: "622925"
          },
          {
            text: "东乡族自治县",
            value: "622926"
          },
          {
            text: "积石山保安族东乡族撒拉族自治县",
            value: "622927"
          }
        ]
      },
      {
        code: 623000,
        options: [
          {
            text: "合作市",
            value: "623001"
          },
          {
            text: "临潭县",
            value: "623021"
          },
          {
            text: "卓尼县",
            value: "623022"
          },
          {
            text: "舟曲县",
            value: "623023"
          },
          {
            text: "迭部县",
            value: "623024"
          },
          {
            text: "玛曲县",
            value: "623025"
          },
          {
            text: "碌曲县",
            value: "623026"
          },
          {
            text: "夏河县",
            value: "623027"
          }
        ]
      },
      {
        code: 630100,
        options: [
          {
            text: "市辖区",
            value: "630101"
          },
          {
            text: "城东区",
            value: "630102"
          },
          {
            text: "城中区",
            value: "630103"
          },
          {
            text: "城西区",
            value: "630104"
          },
          {
            text: "城北区",
            value: "630105"
          },
          {
            text: "大通回族土族自治县",
            value: "630121"
          },
          {
            text: "湟中县",
            value: "630122"
          },
          {
            text: "湟源县",
            value: "630123"
          }
        ]
      },
      {
        code: 632100,
        options: [
          {
            text: "平安县",
            value: "632121"
          },
          {
            text: "民和回族土族自治县",
            value: "632122"
          },
          {
            text: "乐都县",
            value: "632123"
          },
          {
            text: "互助土族自治县",
            value: "632126"
          },
          {
            text: "化隆回族自治县",
            value: "632127"
          },
          {
            text: "循化撒拉族自治县",
            value: "632128"
          }
        ]
      },
      {
        code: 632200,
        options: [
          {
            text: "门源回族自治县",
            value: "632221"
          },
          {
            text: "祁连县",
            value: "632222"
          },
          {
            text: "海晏县",
            value: "632223"
          },
          {
            text: "刚察县",
            value: "632224"
          }
        ]
      },
      {
        code: 632300,
        options: [
          {
            text: "同仁县",
            value: "632321"
          },
          {
            text: "尖扎县",
            value: "632322"
          },
          {
            text: "泽库县",
            value: "632323"
          },
          {
            text: "河南蒙古族自治县",
            value: "632324"
          }
        ]
      },
      {
        code: 632500,
        options: [
          {
            text: "共和县",
            value: "632521"
          },
          {
            text: "同德县",
            value: "632522"
          },
          {
            text: "贵德县",
            value: "632523"
          },
          {
            text: "兴海县",
            value: "632524"
          },
          {
            text: "贵南县",
            value: "632525"
          }
        ]
      },
      {
        code: 632600,
        options: [
          {
            text: "玛沁县",
            value: "632621"
          },
          {
            text: "班玛县",
            value: "632622"
          },
          {
            text: "甘德县",
            value: "632623"
          },
          {
            text: "达日县",
            value: "632624"
          },
          {
            text: "久治县",
            value: "632625"
          },
          {
            text: "玛多县",
            value: "632626"
          }
        ]
      },
      {
        code: 632700,
        options: [
          {
            text: "玉树县",
            value: "632721"
          },
          {
            text: "杂多县",
            value: "632722"
          },
          {
            text: "称多县",
            value: "632723"
          },
          {
            text: "治多县",
            value: "632724"
          },
          {
            text: "囊谦县",
            value: "632725"
          },
          {
            text: "曲麻莱县",
            value: "632726"
          }
        ]
      },
      {
        code: 632800,
        options: [
          {
            text: "格尔木市",
            value: "632801"
          },
          {
            text: "德令哈市",
            value: "632802"
          },
          {
            text: "乌兰县",
            value: "632821"
          },
          {
            text: "都兰县",
            value: "632822"
          },
          {
            text: "天峻县",
            value: "632823"
          }
        ]
      },
      {
        code: 640100,
        options: [
          {
            text: "市辖区",
            value: "640101"
          },
          {
            text: "兴庆区",
            value: "640104"
          },
          {
            text: "西复区",
            value: "640105"
          },
          {
            text: "金凤区",
            value: "640106"
          },
          {
            text: "永宁县",
            value: "640121"
          },
          {
            text: "贺兰县",
            value: "640122"
          },
          {
            text: "灵武市",
            value: "640181"
          }
        ]
      },
      {
        code: 640200,
        options: [
          {
            text: "市辖区",
            value: "640201"
          },
          {
            text: "大武口区",
            value: "640202"
          },
          {
            text: "惠农区",
            value: "640205"
          },
          {
            text: "平罗县",
            value: "640221"
          }
        ]
      },
      {
        code: 640300,
        options: [
          {
            text: "市辖区",
            value: "640301"
          },
          {
            text: "利通区",
            value: "640302"
          },
          {
            text: "盐池县",
            value: "640323"
          },
          {
            text: "同心县",
            value: "640324"
          },
          {
            text: "青铜峡市",
            value: "640381"
          }
        ]
      },
      {
        code: 640400,
        options: [
          {
            text: "市辖区",
            value: "640401"
          },
          {
            text: "原州区",
            value: "640402"
          },
          {
            text: "西吉县",
            value: "640422"
          },
          {
            text: "隆德县",
            value: "640423"
          },
          {
            text: "泾源县",
            value: "640424"
          },
          {
            text: "彭阳县",
            value: "640425"
          }
        ]
      },
      {
        code: 640500,
        options: [
          {
            text: "市辖区",
            value: "640501"
          },
          {
            text: " 沙坡头区",
            value: "640502"
          },
          {
            text: "中宁县",
            value: "640521"
          },
          {
            text: "海原县",
            value: "640522"
          }
        ]
      },
      {
        code: 650100,
        options: [
          {
            text: "辖区",
            value: "650101"
          },
          {
            text: "天山区",
            value: "650102"
          },
          {
            text: "沙依巴克区",
            value: "650103"
          },
          {
            text: "新市区",
            value: "650104"
          },
          {
            text: "水磨沟区",
            value: "650105"
          },
          {
            text: "头屯河区",
            value: "650106"
          },
          {
            text: "达坂城区",
            value: "650107"
          },
          {
            text: "东山区",
            value: "650108"
          },
          {
            text: "乌鲁木齐县",
            value: "650121"
          }
        ]
      },
      {
        code: 650200,
        options: [
          {
            text: "辖区",
            value: "650201"
          },
          {
            text: "独山子区",
            value: "650202"
          },
          {
            text: "克拉玛依区",
            value: "650203"
          },
          {
            text: "白碱滩区",
            value: "650204"
          },
          {
            text: "乌尔禾区",
            value: "650205"
          }
        ]
      },
      {
        code: 652100,
        options: [
          {
            text: "吐鲁番市",
            value: "652101"
          },
          {
            text: "鄯善市",
            value: "652122"
          },
          {
            text: "托克逊县",
            value: "652123"
          }
        ]
      },
      {
        code: 652200,
        options: [
          {
            text: "哈密市",
            value: "652201"
          },
          {
            text: "巴里坤哈萨克自治县",
            value: "652222"
          },
          {
            text: "伊吾县",
            value: "652223"
          }
        ]
      },
      {
        code: 652300,
        options: [
          {
            text: "昌吉市",
            value: "652301"
          },
          {
            text: "阜康市",
            value: "652302"
          },
          {
            text: "米泉市",
            value: "652303"
          },
          {
            text: "呼图壁县",
            value: "652323"
          },
          {
            text: "玛纳斯县",
            value: "652324"
          },
          {
            text: "奇台县",
            value: "652325"
          },
          {
            text: "吉木萨尔县",
            value: "652327"
          },
          {
            text: "木垒哈萨克自治县",
            value: "652328"
          }
        ]
      },
      {
        code: 652700,
        options: [
          {
            text: "博乐市",
            value: "652701"
          },
          {
            text: "精河县",
            value: "652722"
          },
          {
            text: "温泉县",
            value: "652723"
          },
          {
            text: "阿拉山口",
            value: "652799"
          }
        ]
      },
      {
        code: 652800,
        options: [
          {
            text: "库尔勒市",
            value: "652801"
          },
          {
            text: "轮台县",
            value: "652822"
          },
          {
            text: "尉犁县",
            value: "652823"
          },
          {
            text: "若羌县",
            value: "652824"
          },
          {
            text: "且末县",
            value: "652825"
          },
          {
            text: "焉耆回族自治县",
            value: "652826"
          },
          {
            text: "和静县",
            value: "652827"
          },
          {
            text: "和硕县",
            value: "652828"
          },
          {
            text: "博湖县",
            value: "652829"
          }
        ]
      },
      {
        code: 652900,
        options: [
          {
            text: "阿克苏市",
            value: "652901"
          },
          {
            text: "温宿县",
            value: "652922"
          },
          {
            text: "库车县",
            value: "652923"
          },
          {
            text: "沙雅县",
            value: "652924"
          },
          {
            text: "新和县",
            value: "652925"
          },
          {
            text: "拜城县",
            value: "652926"
          },
          {
            text: "乌什县",
            value: "652927"
          },
          {
            text: "阿瓦提县",
            value: "652928"
          },
          {
            text: "柯坪县",
            value: "652929"
          }
        ]
      },
      {
        code: 653000,
        options: [
          {
            text: "阿图什市",
            value: "653001"
          },
          {
            text: "阿克陶县",
            value: "653022"
          },
          {
            text: "阿合奇县",
            value: "653023"
          },
          {
            text: "乌恰县",
            value: "653024"
          }
        ]
      },
      {
        code: 653100,
        options: [
          {
            text: "喀什市",
            value: "653101"
          },
          {
            text: "疏附县",
            value: "653121"
          },
          {
            text: "疏勒县",
            value: "653122"
          },
          {
            text: "英吉沙县",
            value: "653123"
          },
          {
            text: "泽普县",
            value: "653124"
          },
          {
            text: "莎车县",
            value: "653125"
          },
          {
            text: "叶城县",
            value: "653126"
          },
          {
            text: "麦盖提县",
            value: "653127"
          },
          {
            text: "岳普湖县",
            value: "653128"
          },
          {
            text: "伽师县",
            value: "653129"
          },
          {
            text: "巴楚县",
            value: "653130"
          },
          {
            text: "塔什库尔干塔吉克自治县",
            value: "653131"
          }
        ]
      },
      {
        code: 653200,
        options: [
          {
            text: "和田市",
            value: "653201"
          },
          {
            text: "和田县",
            value: "653221"
          },
          {
            text: "墨玉县",
            value: "653222"
          },
          {
            text: "皮山县",
            value: "653223"
          },
          {
            text: "洛浦县",
            value: "653224"
          },
          {
            text: "策勒县",
            value: "653225"
          },
          {
            text: "于田县",
            value: "653226"
          },
          {
            text: "民丰县",
            value: "653227"
          }
        ]
      },
      {
        code: 654000,
        options: [
          {
            text: "伊犁地区伊宁市",
            value: "654002"
          },
          {
            text: "奎屯市",
            value: "654003"
          },
          {
            text: "伊犁地区伊宁县",
            value: "654021"
          },
          {
            text: "察布查尔锡伯自治县",
            value: "654022"
          },
          {
            text: "伊犁地区霍城县",
            value: "654023"
          },
          {
            text: "伊犁地区巩留县",
            value: "654024"
          },
          {
            text: "伊犁地区新源县",
            value: "654025"
          },
          {
            text: "伊犁地区昭苏县",
            value: "654026"
          },
          {
            text: "伊犁地区特克斯县",
            value: "654027"
          },
          {
            text: "伊犁地区尼勒克县",
            value: "654028"
          }
        ]
      },
      {
        code: 654200,
        options: [
          {
            text: "塔城市",
            value: "654201"
          },
          {
            text: "乌苏市",
            value: "654202"
          },
          {
            text: "额敏县",
            value: "654221"
          },
          {
            text: "沙湾",
            value: "654223"
          },
          {
            text: "托里县",
            value: "654224"
          },
          {
            text: "裕民县",
            value: "654225"
          },
          {
            text: "和布克赛尔蒙古自治县",
            value: "654226"
          }
        ]
      },
      {
        code: 654300,
        options: [
          {
            text: "阿勒泰市",
            value: "654301"
          },
          {
            text: "布尔津县",
            value: "654321"
          },
          {
            text: "富蕴县",
            value: "654322"
          },
          {
            text: "福海县",
            value: "654323"
          },
          {
            text: "哈巴河县",
            value: "654324"
          },
          {
            text: "青河县",
            value: "654325"
          },
          {
            text: "吉木乃县",
            value: "654326"
          }
        ]
      },
      {
        code: 659000,
        options: [
          {
            text: "石河子市",
            value: "659001"
          },
          {
            text: "阿拉尔市",
            value: "659002"
          },
          {
            text: "图木舒克市",
            value: "659003"
          },
          {
            text: "五家渠市",
            value: "659004"
          }
        ]
      }
    ]
  },

  //获取对应的市县
  getItems:function(list,code){
    var arr= $.grep(list, function (item, i) {
      item.code = item.code || item.value;
      return item.code + '' === '' + code && item;
    });

    return arr&&arr.length?arr[0].options:[];

  }


};
