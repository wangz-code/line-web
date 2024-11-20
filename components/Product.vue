<template>
	<div v-if="title == 'none'" class="col-4"></div>
	<div v-else class="card border-0 transition-3d-hover" @click="navTo">
		<div class="card-body product">
			<div class="rows">
				<div class="icon">
					<img width="65" :src="icon" alt="" srcset="" />
				</div>
				<div class="text-left desc">
					<h5>{{ title }}</h5>
					<div>{{ desc }}</div>
					<div>{{ desc2 }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.product {
	box-shadow: 0 8px 24px 0 rgba(35, 60, 128, 0.29);
	border-radius: 10px;
	margin: 10px 0px 4px 0px;
	border-radius: 10px;
	border-bottom: 4px transparent solid;
}

.product:hover {
	cursor: pointer;
	border-bottom: 4px rgb(4, 196, 4) solid;
}
.product .rows {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.icon {
	width: 80px;
	height: 80px;
}
.desc div {
	margin: 5px 0px;
	font-size: 14px;
	color: #8d91a5;
	letter-spacing: 0;
	line-height: 20px;
}
</style>
<script setup>
const props = defineProps({
	title: String,
	desc: String,
	desc2: String,
	icon: String,
	path: String,
});

const navTo = () => {
	navigateTo({ path: props.path });
};
</script>
