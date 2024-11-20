<style>
html {
	scroll-behavior: smooth;
}
@keyframes beat-scale {
	0% {
		opacity: 1;
		transform: scale(0.7);
	}
	100% {
		opacity: 0;
		transform: scale(1.2);
	}
}
.phone-ani {
	transform-origin: 55% 50%;
	animation: beat-scale 2s linear infinite;
}
</style>
<template>
	<div>
		<nav class="topnav navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
			<div class="container-fluid">
				<a class="navbar-brand" href="/">
					<i class="fas fa-anchor mr-2"></i>
					<img width="128" src="/img/demo/logo-w.png" alt="logo" srcset="" />
				</a>
				<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"> </span>
				</button>
				<div class="navbar-collapse collapse" id="navbarColor02" style="">
					<ul class="navbar-nav mr-auto d-flex align-items-center">
						<li class="nav-item dropdown li-dropdown" v-for="item in navList">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> {{ item.title }}</a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<a v-for="nav in item.childen" class="dropdown-item" :href="nav.href">{{ nav.name }}</a>
							</div>
						</li>
						<li class="nav-item">
							<NuxtLink class="nav-link" to="/about">关于我们</NuxtLink>
						</li>
					</ul>
					<ul class="navbar-nav ml-auto d-flex align-items-center">
						<li class="nav-item">
							<span class="nav-link" href="#">
								<a class="btn btn-info btn-round shadow-sm" href="#" data-toggle="modal" data-target="#exampleModalCenter">服务咨询</a>
							</span>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<div style="position: fixed; bottom: 20px; right: 20px; z-index: 9">
			<a href="#toptop" v-if="toTop" data-aos="fade-up">
				<div class="rounded-circle shadow-lg p-1 bg-white" data-toggle="tooltip" data-placement="top" title="" data-original-title="返回顶部">
					<svg t="1695895398121" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1470" width="50" height="50">
						<path
							d="M739.2 446.51c4-258.84-210.12-376.12-224.51-383.71v-0.4l-0.38 0.2-0.38-0.2v0.4c-14.4 7.58-228.53 124.86-224.52 383.71-43.6 28-89.28 77.86-82 164s91.35 143.29 123.53 140.17 22.84-27 22.84-27l11-44.64s47.45 71.77 62.67 71.75c13.66-1.09 78.66-0.12 86.44 0h0.77c7.77-0.12 72.78-1.09 86.44 0 15.23 0 62.67-71.75 62.67-71.75l11 44.64s-9.34 23.88 22.84 27 116.27-54 123.54-140.15-38.35-135.99-81.95-164.02z m-224.9-3.81c-6.09-0.09-85.73-3-93-95.51 2.67-87.95 86.78-95.72 93-96.17 6.27 0.46 90.38 8.22 93 96.17-7.3 92.52-86.9 95.42-93 95.51zM467.28 888.75a19 19 0 0 1-19 19 19 19 0 0 1-19-19v-94.12a19 19 0 0 1 19-19 19 19 0 0 1 19 19zM537.18 939.71A19.29 19.29 0 0 1 517.89 959a19.29 19.29 0 0 1-19.29-19.29v-140a19.29 19.29 0 0 1 19.29-19.29 19.29 19.29 0 0 1 19.29 19.29zM601.55 866.61a19 19 0 0 1-19 19 19 19 0 0 1-19-19v-67.14a19 19 0 0 1 19-19 19 19 0 0 1 19 19z"
							fill="#7832e2"
							p-id="1471"
						></path>
					</svg>
				</div>
			</a>
			<div class="rounded-circle shadow-lg p-1 my-4 bg-white" data-toggle="modal" data-target="#exampleModalCenter">
				<svg t="1697447541633" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4208" width="50" height="50">
					<path
						d="M677.63 889.8c-12.67 0-24.44-1.81-34.39-5.43h-0.91c-13.57-3.62-135.75-41.63-296.85-202.73-155.66-157.48-196.39-281.47-201.82-297.76-14.48-35.29-3.62-86 23.53-114l62.45-62.45a67.32 67.32 0 0 1 47.06-19.91c19.91 0 38.92 10 51.59 26.25l91.4 117.65c13.58 17.2 14.49 45.26 3.62 63.36l-46.15 76.92c2.72 10.86 15.38 48.87 70.59 107.7 60.64 57 96.84 67.88 106.8 70.6l76.92-46.16c10-6.34 20.82-7.24 28.06-7.24 13.58 0 26.25 3.62 35.3 10.86l117.65 91.4c15.39 12.67 25.34 29 26.24 48s-5.42 37.11-19.9 50.68L757.27 859c-19 19-49.77 30.77-79.64 30.77z"
						fill="#7832e2"
						p-id="4209"
					></path>
					<path class="phone-ani" d="M792.69 605.49a27 27 0 0 1-19.26-46c79.68-81 78.76-211.81-2.06-291.66-81-80-212-79.22-292 1.76l-0.27 0.27a27 27 0 0 1-38.47-38l0.2-0.19a0.38 0.38 0 0 1 0.09-0.09 260.5 260.5 0 0 1 371 365.8 27 27 0 0 1-19.23 8.11z" fill="#FF9600" p-id="4210"></path>
					<path class="phone-ani" d="M713.45 524.63a27 27 0 0 1-18.76-46.48A84.06 84.06 0 0 0 578 357.09l-0.42 0.4a27 27 0 0 1-37.46-39l0.4-0.38a138.09 138.09 0 0 1 195.27 3.67c52.82 54.83 51.2 142.42-3.6 195.25a26.94 26.94 0 0 1-18.74 7.6z" fill="#FF9600" p-id="4211"></path>
				</svg>
			</div>
		</div>
		<!--- END HEADER -->
		<div class="pt-5">
			<slot />
		</div>
		<div class="w-100">
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 1440 126" style="enable-background: new 0 0 1440 126" xml:space="preserve">
				<path class="bg-black" d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z" />
			</svg>
		</div>
		<footer class="bg-black pb-5 foot">
			<div class="container">
				<div class="row">
					<div class="col-6 col-md" v-for="nav in navList">
						<h5 class="mb-4 text-white">{{ nav.title }}</h5>
						<ul class="list-unstyled text-small">
							<li v-for="item in nav.childen">
								<a class="text-muted" :href="item.href">{{ item.name }}</a>
							</li>
						</ul>
					</div>
					<div class="col-6 col-md">
						<h5 class="mb-4 text-white">关于我们</h5>
						<ul class="list-unstyled text-small">
							<li><a class="text-muted">地址: 上海市闵行区七宝镇新龙路1333弄万科七宝国际28幢216</a></li>
							<li><a class="text-muted">公众号: 澜申科技</a></li>
							<li><a class="text-muted">邮箱: xiedi@lineshen.com</a></li>
							<li><a class="text-muted">联系电话: 021-54437686</a></li>
							<li><a class="text-muted">联系电话: 18621918993</a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
		<ConsultModal></ConsultModal>
	</div>
</template>
<script setup>
const navList = [
	{
		title: "消费者口碑服务平台",
		childen: [
			{
				name: "会员宝",
				href: "",
			},
			{
				name: "收银宝",
				href: "/product/syb",
			},
			{
				name: "晒单宝",
				href: "",
			},
		],
	},
	{
		title: "商户管理服务平台",
		childen: [
			{
				name: "营运宝",
				href: "",
			},
			{
				name: "评价宝",
				href: "",
			},
			{
				name: "合同宝",
				href: "",
			},
		],
	},
	{
		title: "卖场经营数据平台",
		childen: [
			{
				name: "家居驾驶舱",
				href: "",
			},
			{
				name: "数据大屏",
				href: "",
			},
		],
	},
];

const toTop = ref(false);

onMounted(() => {
	window.addEventListener("scroll", (e) => {
		toTop.value = document.scrollingElement.scrollTop > 200;
	});
});
</script>

<style>
.foot {
	margin-top: -1px;
}
</style>
