<style scoped>
.my-nav-tab li:hover {
	margin-bottom: -4px;
	border-bottom: 4px solid #00a664;
}

.my-nav-tab {
	display: flex;
	justify-content: center;
	flex-direction: unset;
}
.gd-title {
	height: 4em;
	width: fit-content;
	overflow: hidden;
	text-overflow: ellipsis;
}
.store img {
	width: 100%;
	padding: 10px;
}
.b-stroe {
	border: 1px rgb(201, 201, 201) dashed;
}
.b-bank {
	border: 1px rgb(146 191 255) solid;
}

@media (max-width: 576px) {
	.col-xs-6 {
		flex: 0 0 50%;
		max-width: 50%;
	}
	.xs-100 {
		display: block;
		width: 100%;
	}
	.xs-title {
		font-size: 3rem;
	}
}
</style>
<template>
	<div>
		<header id="toptop">
			<div class="jumbotron jumbotron-fluid mb-0 pb-5 bg-primary">
				<div class="container-fluid text-white h-100">
					<div class="d-lg-flex align-items-center justify-content-between text-center pl-lg-5">
						<div class="col pt-4 pb-4">
							<h1 class="display-4 xs-title">
								<span class="xs-100">家居卖场</span>
								<strong class="xs-100 col-md-6 col-sm-12 p-0">智慧商场</strong>
								<div class="xs-100 col-md-12">解决方案</div>
							</h1>
							<span>SMART MALL SOLUTIONS FOR HOME STORES</span>
							<h5 class="font-weight-light mb-4">专注家居卖场的软件服务商</h5>
							<a href="#khjz" class="btn btn-lg btn-outline-white btn-round">查看案例</a>
						</div>
						<div class="col align-self-bottom align-items-right text-right h-max-380 h-xl-560 position-relative z-index-1">
							<img src="/img/demo/dashb-syb.png" class="rounded img-fluid" />
						</div>
					</div>
				</div>
			</div>
			<svg style="-webkit-transform: rotate(-180deg); -moz-transform: rotate(-180deg); -o-transform: rotate(-180deg); transform: rotate(-180deg); margin-top: -1px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1440 126" xml:space="preserve">
				<path class="bg-primary" d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z"></path>
			</svg>
		</header>

		<main class="container">
			<section class="pt-5 pb-5" data-aos="fade-up">
				<div class="row">
					<div class="col-md-12" style="font-size: 20px">
						<nav class="navbar navbar-expand-lg navbar-light bg-white">
							<div class="container justify-content-center">
								<ul class="navbar-nav my-nav-tab">
									<li class="nav-item"><a class="nav-link" @click="customScroll('jjfa', 'start')">解决方案</a></li>
									<li class="nav-item"><a class="nav-link" @click="customScroll('hygd')">行业观点</a></li>
									<li class="nav-item"><a class="nav-link" @click="customScroll('khjz')">客户见证</a></li>
									<li class="nav-item"><a class="nav-link" @click="customScroll('hdzx')">活动资讯</a></li>
									<li class="nav-item"><a class="nav-link" @click="customScroll('store')">合作卖场</a></li>
									<li class="nav-item"><a class="nav-link" @click="customScroll('hzjg')">合作机构</a></li>
								</ul>
							</div>
						</nav>
						<hr id="jjfa" />
					</div>
				</div>
			</section>
			<section class="pt-3 pb-3" data-aos="fade-up" v-for="pro in productData">
				<h3 class="h5 mb-2 font-weight-bold">{{ pro.name }}</h3>
				<div class="card-deck card-pricing text-center">
					<Product v-for="item in pro.data" :path="item.path" :title="item.title" :desc="item.desc" :desc2="item.desc2" :icon="item.icon"></Product>
				</div>
			</section>
			<div v-for="card in industryData">
				<section :id="card.target" class="pt-5" data-aos="fade-up">
					<h3 class="h5 mb-4 font-weight-bold">{{ card.title }}</h3>
					<div class="row">
						<div v-for="item in card.data" class="col-xs-6 col-sm-6 col-md-4 col-lg-3 transition-3d-hover mt-4">
							<NuxtLink :to="item.path">
								<div class="card border-0 shadow-sm">
									<div class="card-header p-0">
										<img :src="item.icon" height="150" class="w-100" />
									</div>
									<div class="card-body text-dark">
										<div class="mb-4 gd-title">
											<h6>{{ item.title }}</h6>
										</div>
										<div class="row">
											<div class="col">{{ item.class }}</div>
											<div class="col">{{ item.time }}</div>
										</div>
									</div>
								</div>
							</NuxtLink>
						</div>
					</div>
				</section>
			</div>
			<section id="store" class="mt-5 pb-2" data-aos="fade-up">
				<h3 class="h5 mb-4 font-weight-bold">合作家居卖场</h3>
				<div class="row text-white">
					<div class="col-2 col-xs-6" data-aos="flip-right" v-for="item in furnitureStore">
						<div class="bg-white store">
							<img class="b-stroe" :src="item.src" height="60" :alt="item.name" srcset="" />
							<span>{{ item.name }}</span>
						</div>
					</div>
				</div>
			</section>
			<section id="hzjg" class="pt-2 pb-2" data-aos="flip-right">
				<h3 class="h5 mb-4 font-weight-bold">合作金融机构</h3>
				<div class="row text-white">
					<div class="col-2 col-xs-6" v-for="item in bank">
						<div class="bg-white store">
							<img class="b-bank" :src="item.src" width="200" height="60" alt="" srcset="" />
							<span>{{ item.name }}</span>
						</div>
					</div>
				</div>
			</section>
			<section class="pt-2 mb-5" data-aos="fade-up">
				<h3 class="h5 mb-4 font-weight-bold">其他合作伙伴</h3>
				<div class="row text-white align-items-center text-center">
					<div class="col-2 col-xs-6" v-for="item in other">
						<div class="bg-white">
							<img :src="item.src" width="200" height="60" alt="" srcset="" />
							<span>{{ item.name }}</span>
						</div>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup>
import { onMounted } from "vue";
// 产品
const productData = [
	{
		name: "消费者口碑服务平台",
		data: [
			{
				title: "会员宝",
				path: "/product/hyb",
				desc: "增强消费者粘性",
				desc2: "消费跟踪、多渠道引流、积分管理",
				icon: "/img/product/hyb.png",
			},
			{
				title: "收银宝",
				path: "/product/syb",
				desc: "精细化客户管理",
				desc2: "通过数据分析，了解消费者需求",
				icon: "/img/product/syb.png",
			},
			{
				title: "晒单宝",
				path: "/product/sdb",
				desc: "提升客户满意度",
				desc2: "消费者客诉评价、晒单口碑宣传",
				icon: "/img/product/sdb.png",
			},
		],
	},
	{
		name: "商户管理服务平台",
		data: [
			{
				title: "营运宝",
				path: "/product/yyb",
				desc: "规范化管理",
				desc2: "日常经营，管控，提升商户能力",
				icon: "/img/product/yyb.png",
			},
			{
				title: "评价宝",
				path: "/product/pjb",
				desc: "多维度综合考核,星级评定",
				desc2: "数据化更客观，提升消费者体验",
				icon: "/img/product/pjb.png",
			},
			{
				title: "合同宝",
				path: "/product/htb",
				desc: "主营收入管控,自动计算租金费用",
				desc2: "展帐单收费准确、及时、便捷",
				icon: "/img/product/htb.png",
			},
		],
	},
	{
		name: "卖场经营数据平台",
		data: [
			{
				title: "家居驾驶舱",
				path: "/product/jsc",
				desc: "实时监控",
				desc2: "图表展示卖场经营数据",
				icon: "/img/product/jsc.png",
			},
			{
				title: "数据大屏",
				path: "/product/sjdp",
				desc: "可视化展示",
				desc2: "智能分析,趋势预测,决策支持",
				icon: "/img/product/sjdp.png",
			},
			{
				title: "none",
			},
		],
	},
];

// 行业观点
const industryData = [
	{
		title: "行业观点",
		target: "hygd",
		data: [
			{
				title: "浅谈家居卖场数字化平台建设",
				icon: "/img/hygd/szhjs.jpg",
				path: "/article/hygd/digitalconstruction",
				time: "2023-08-09",
				class: "家居市场",
			},
			{
				title: "只要数据不要钱？3.0模式才是卖场收银的未来！",
				icon: "/img/hygd/3.0.jpg",
				path: "/article/hygd/threecash",
				time: "2020-04-09",
				class: "今日家居",
			},
			{
				title: "浅论家居卖场数字化平台建设 | 内有福利！",
				icon: "/img/hygd/szh.jpg",
				path: "/article/hygd/digitalization",
				time: "2020-04-09",
				class: "家居市场",
			},
			{
				title: "如何预防和应对疫情结束后可能出现的商户逃场问题？",
				icon: "/img/hygd/shtc.jpg",
				path: "/article/hygd/prevent",
				time: "2020-02-26",
				class: "家居市场",
			},
			{
				title: "新冠疫情对2020年家居卖场经营情况影响",
				icon: "/img/hygd/dy.jpg",
				path: "/article/hygd/survey",
				time: "2020-02-26",
				class: "市场调研",
			},
			{
				title: "头条丨家居卖场的统一收银模式到底可不可行？",
				icon: "/img/hygd/tysy.jpg",
				path: "/article/hygd/unicash",
				time: "2015-11-02",
				class: "家居主流",
			},
			{
				title: "家居卖场为什么要统一收银，核心问题是这个！",
				icon: "/img/hygd/tysy.jpg",
				path: "/article/hygd/whyunicashier",
				time: "2018-06-06",
				class: "家居微新闻",
			},
		],
	},
	{
		title: "客户见证",
		target: "khjz",
		data: [
			{
				title: "富安居南宁店搭建数字平台！",
				icon: "/img/khjz/faj_ly.jpg",
				path: "/article/khjz/faj_ly",
				time: "2023-06-18",
				class: "家居卖场",
			},
			{
				title: "东亚家居数字化管理升级之路",
				icon: "/img/khjz/dy_ye.jpg",
				path: "/article/khjz/dy_ye",
				time: "2023-06-18",
				class: "家居卖场",
			},
			{
				title: "如何让您的家居卖场保持竞争力",
				icon: "/img/khjz/zmz.jpg",
				path: "/article/khjz/zmz",
				time: "2023-06-18",
				class: "家居卖场",
			},
			{
				title: "天水桥南家居建材城 “锋芒智收银”系统上线！",
				icon: "/img/khjz/tsqn.jpg",
				path: "/article/khjz/tsqn",
				time: "2022-05-06",
				class: "家居卖场",
			},
			{
				title: "万泰隆数字化平台 分布式收银成功上线!",
				icon: "/img/khjz/wtl.jpg",
				path: "/article/khjz/wtl",
				time: "2021-08-09",
				class: "家居卖场",
			},
			{
				title: "商场简讯 ▏恒大商场数字化营运系统启动",
				icon: "/img/khjz/hd.jpg",
				path: "/article/khjz/hd",
				time: "2021-06-30",
				class: "家居卖场",
			},
			{
				title: "祝贺富安居南宁店“数字化平台-分布式收银”项目上线验收",
				icon: "/img/khjz/faj_nn.jpg",
				path: "/article/khjz/faj_nn",
				time: "2020-12-11",
				class: "家居卖场",
			},
			{
				title: "最新资讯 | 广西富安居集团与建设银行签订战略合作协议",
				icon: "/img/khjz/faj_qd.jpg",
				path: "/article/khjz/faj_qd",
				time: "2020-06-18",
				class: "家居卖场",
			},
			{
				title: "银座家居营运系统上线啦!",
				icon: "/img/khjz/yz.jpg",
				path: "/article/khjz/yz",
				time: "2018-04-12",
				class: "家居卖场",
			},
			{
				title: "热烈祝贺华厦家居港营销&营运管理系统成功上线!",
				icon: "/img/khjz/hx.jpg",
				path: "/article/khjz/hx",
				time: "2017-09-26",
				class: "家居卖场",
			},
			{
				title: "嘉禾乐天国际家居收银宝上线啦!",
				icon: "/img/khjz/jhlt.jpg",
				path: "/article/khjz/jhlt",
				time: "2018-07-03",
				class: "家居卖场",
			},
			{
				title: "江豪国际 家居馆 家居收银宝、巡店宝上线！",
				icon: "/img/khjz/jhgj.jpg",
				path: "/article/khjz/jhgj",
				time: "2018-08-20",
				class: "家居卖场",
			},
			{
				title: "J+银系统收银模块明日起正式上线运营",
				icon: "/img/khjz/jswb.jpg",
				path: "/article/khjz/jswb",
				time: "2018-05-17",
				class: "家居卖场",
			},
			{
				title: "皇朝国际建材 家居营运管理系统商户动员大会 ",
				icon: "/img/khjz/hc.jpg",
				path: "/article/khjz/hc",
				time: "2019-05-17",
				class: "家居卖场",
			},
		],
	},
	{
		title: "活动资讯",
		target: "hdzx",
		data: [
			{
				title: "第六空间湖州商场携手交通银行为200＋品牌“金融赋能”！",
				icon: "/img/hdzx/dlkj.jpg",
				path: "/article/hdzx/dlkj",
				time: "2022-03-29",
				class: "家居卖场",
			},
			{
				title: "「重磅回顾」深圳市家具行业协会&中国区域 家居卖场百佳联盟·华东行完美落幕",
				icon: "/img/hdzx/hdx.jpg",
				path: "/article/hdzx/hdx",
				time: "2021-06-07",
				class: "百佳联盟",
			},
			{
				title: "现场落位20000㎡+ |百佳联盟&慕思集团对接交流会在杭圆满落幕",
				icon: "/img/hdzx/ms.jpg",
				path: "/article/hdzx/ms",
				time: "2021-04-15",
				class: "百佳联盟",
			},
			{
				title: "深度对接 强强联合 共谋未来|百佳联盟&敏华控股对接交流会议在杭圆满落幕",
				icon: "/img/hdzx/mh.jpg",
				path: "/article/hdzx/mh",
				time: "2021-04-15",
				class: "百佳联盟",
			},
			{
				title: "「深圳展会活动回顾」百佳联盟秘书长谢地、理事石东应邀出席深圳展五星品质颁奖典礼",
				icon: "/img/hdzx/szzh.jpg",
				path: "/article/hdzx/szzh",
				time: "2021-03-23",
				class: "百佳联盟",
			},
			{
				title: "后疫情时代经销商发展之道——积极应势、主动迎变，才是王道！",
				icon: "/img/hdzx/jxs.jpg",
				path: "/article/hdzx/jxs",
				time: "2021-03-23",
				class: "百佳联盟",
			},
			{
				title: "深圳家具协会×百佳联盟—强势联合，共享共赢！",
				icon: "/img/hdzx/szjj.jpg",
				path: "/article/hdzx/szjj",
				time: "2021-03-23",
				class: "百佳联盟",
			},
			{
				title: "谋远·共赢——百佳联盟浙江行第二季完美落幕",
				icon: "/img/hdzx/zjx.jpg",
				path: "/article/hdzx/zjx",
				time: "2021-03-13",
				class: "百佳联盟",
			},
			{
				title: "重磅|百佳联盟，双喜临门——百佳联盟与喜临门正式达成战略合作",
				icon: "/img/hdzx/xlm.jpg",
				path: "/article/hdzx/xlm",
				time: "2021-03-10",
				class: "百佳联盟",
			},
			{
				title: "顺势聚力，共赢发展新机遇 ——百佳联盟走进深圳家具行业协会",
				icon: "/img/hdzx/szjjxh.jpg",
				path: "/article/hdzx/szjjxh",
				time: "2021-01-08",
				class: "网易新闻",
			},
			{
				title: "再起航：百佳联盟广东行第二季完美落幕",
				icon: "/img/hdzx/gdx.jpg",
				path: "/article/hdzx/gdx",
				time: "2020-12-14",
				class: "今日头条",
			},
			{
				title: "聚势前行——敏华控股&百佳联盟达成战略合作",
				icon: "/img/hdzx/mhkg.jpg",
				path: "/article/hdzx/mhkg",
				time: "2020-12-14",
				class: "搜狐家居",
			},
			{
				title: "智领未来——恒洁卫浴&百佳联盟战略携手",
				icon: "/img/hdzx/hj.jpg",
				path: "/article/hdzx/hj",
				time: "2020-12-14",
				class: "搜狐家居",
			},
			{
				title: "百佳联盟会聚南通 携手顾家 家居达成战略合作",
				icon: "/img/hdzx/gj.jpg",
				path: "/article/hdzx/gj",
				time: "2020-09-09",
				class: "网易家居",
			},
			{
				title: "中国区域 家居卖场,百佳联盟,召开第一届理事会员大会",
				icon: "/img/hdzx/bayj.jpg",
				path: "/article/hdzx/bayj",
				time: "2020-09-09",
				class: "网易家居",
			},
			{
				title: "【对话品牌工厂，探讨行业思路】百佳联盟赴广东考察",
				icon: "/img/hdzx/gc.jpg",
				path: "/article/hdzx/gc",
				time: "2020-08-07",
				class: "百佳联盟",
			},
		],
	},
];

const furnitureStore = [
	{
		name: "第六空间",
		src: "/img/store/lk.png",
	},
	{
		name: "大明宫建材家居",
		src: "/img/store/dmg.png",
	},
	{
		name: "华厦家居港",
		src: "/img/store/hx.png",
	},
	{
		name: "升辉家居",
		src: "/img/store/sh.png",
	},
	{
		name: "富安居",
		src: "/img/store/faj.png",
	},
	{
		name: "莘潮国际家居",
		src: "/img/store/xc.png",
	},
	{
		name: "嘉禾乐天",
		src: "/img/store/jhlt.png",
	},
	{
		name: "宜家美国际家居",
		src: "/img/store/yjm.png",
	},
	{
		name: "恒大建材家居",
		src: "/img/store/hdjc.png",
	},
	{
		name: "桥南家居建材城",
		src: "/img/store/qn.png",
	},
	{
		name: "华洋家居广场",
		src: "/img/store/hy.png",
	},
	{
		name: "天丽家居",
		src: "/img/store/tljj.png",
	},
	{
		name: "德克德家",
		src: "/img/store/dkdj.png",
	},
	{
		name: "江豪建材家居城",
		src: "/img/store/jhgj.png",
	},
	{
		name: "东亚家居",
		src: "/img/store/dyjj.png",
	},
	{
		name: "惠州万饰城",
		src: "/img/store/hzwsc.png",
	},
	{
		name: "保利博皇",
		src: "/img/store/blbh.png",
	},
	{
		name: "万泰隆家居建材市场",
		src: "/img/store/wantailong.png",
	},

	{
		name: "大商汇",
		src: "/img/store/dsh.png",
	},
	{
		name: "华洲家居",
		src: "/img/store/hzjj.png",
	},
	{
		name: "星艺佳",
		src: "/img/store/xyj.png",
	},
	{
		name: "银座家居",
		src: "/img/store/yzjj.png",
	},
	{
		name: "博美装饰城",
		src: "/img/store/bm.png",
	},
	{
		name: "领航国贸",
		src: "/img/store/lhgm.png",
	},
	{
		name: "红星美家",
		src: "/img/store/hxmj.png",
	},
	{
		name: "清丰国际家居",
		src: "/img/store/qfgjjj.png",
	},
	{
		name: "建配龙家居建材",
		src: "/img/store/jpl.png",
	},
	{
		name: "荆门大家装",
		src: "/img/store/jmdjz.png",
	},
	{
		name: "皇朝国际建材家居",
		src: "/img/store/hc.png",
	},
	{
		name: "吉盛伟邦",
		src: "/img/store/jswb.png",
	},
	{
		name: "家汇生活广场",
		src: "/img/store/jh.png",
	},
	{
		name: "国邦集团",
		src: "/img/store/gb.png",
	},
	{
		name: "e家天下家居",
		src: "/img/store/yjtx.png",
	},
	{
		name: "居易空间",
		src: "/img/store/jykj.png",
	},
];

const bank = [
	{
		name: "中国银行",
		src: "/img/bank/zgyh.png",
	},
	{
		name: "中国建设银行",
		src: "/img/bank/zgjsyh.png",
	},
	{
		name: "中国工商银行",
		src: "/img/bank/zggsyh.png",
	},
	{
		name: "中国农业银行",
		src: "/img/bank/zgnyyh.png",
	},
	{
		name: "银联商务",
		src: "/img/bank/ylsw.png",
	},
	{
		name: "通联支付",
		src: "/img/bank/tlzf.png",
	},
	{
		name: "拉卡拉",
		src: "/img/bank/lkl.png",
	},
	{
		name: "兴业银行",
		src: "/img/bank/xyyh.png",
	},
	{
		name: "杭州银行",
		src: "/img/bank/hzyh.png",
	},
	{
		name: "四川农信",
		src: "/img/bank/scnx.png",
	},
	{
		name: "陕西信合",
		src: "/img/bank/sxxh.png",
	},
	{
		name: "联迪landi",
		src: "/img/bank/ld.png",
	},
	{
		name: "抚州农商银行",
		src: "/img/bank/fznsyh.png",
	},
	{
		name: "萧山农商银行",
		src: "/img/bank/xsnsyh.png",
	},
	{
		name: "升腾centerm",
		src: "/img/bank/st.png",
	},
	{
		name: "实达tart",
		src: "/img/bank/sd.png",
	},
	{
		name: "嘉联支付",
		src: "/img/bank/jlzf.png",
	},
	{
		name: "杭州联合银行",
		src: "/img/bank/hzlhyh.png",
	},
	{
		name: "甘肃银行",
		src: "/img/bank/gsyh.png",
	},
	{
		name: "百富pax",
		src: "/img/bank/bf.png",
	},
	{
		name: "交通银行",
		src: "/img/bank/jtyh.png",
	},
];

const other = [
	{
		name: "阿里云",
		src: "/img/store/aly.png",
	},
	{
		name: "腾讯云",
		src: "/img/store/txy.png",
	},
	{
		name: "有赞",
		src: "/img/store/yz.png",
	},
	{
		name: "德立云",
		src: "/img/store/dly.png",
	},
	{
		name: "停简单",
		src: "/img/store/tjd.png",
	},
];
onMounted(() => {
	AOS.init({
		duration: 700,
		once: true,
	});
});

const customScroll = (id, block = "start") => {
	const target = document.getElementById(id);
	if (!target) return;
	target.scrollIntoView({ behavior: "smooth", block });
};
</script>
