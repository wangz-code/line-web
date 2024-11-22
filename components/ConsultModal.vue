<template>
	<div v-if="show">
		<div class="modal-backdrop fade show"></div>
		<div class="modal fade show" tabindex="-1" style="display: block">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header border-0">
						<h4>服务咨询</h4>
						<button type="button" class="close" @click="closeModal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<form class="form">
							<div class="form-group">
								<input type="text" class="form-control" v-model="form.custname" aria-describedby="emailHelp" placeholder="姓名" required="true" />
							</div>
							<div class="form-group">
								<input type="text" class="form-control" v-model="form.custphone" placeholder="手机" required="true" />
							</div>
							<div class="form-group">
								<input type="text" class="form-control" v-model="form.custcompany" placeholder="公司" required="true" />
							</div>
							<div class="form-group">
								<textarea class="form-control" v-model="form.custmessage" placeholder="咨询内容" rows="6"></textarea>
							</div>
							<button type="button" class="btn btn-primary btn-round mr-1" @click="onSubmit">立即提交</button>
							<span> 提交成功后工作人员会及时与您联系 谢谢!</span>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import queryString from "query-string";
import { toRaw } from "vue";
function JaM(before = "") {
	let after = "";
	let key = "";
	let k1 = "";
	let k2 = 0;

	let strs = new Array();
	strs = before.split("");

	for (let i = 1; i < strs.length; i += 2) {
		after = after.concat(strs[i] + strs[i - 1]);
		key = key.concat(strs[i - 1]);
		k1 = k1.concat(strs[i]);
	}
	after = after.concat(strs[strs.length - 1]);
	k1 = k1.concat(strs[strs.length - 1]);
	k2 = k1 ^ key;
	return k2 - key + "|" + key;
}
const modal = ref(false);

const props = defineProps(["show"]);
const emit = defineEmits(["onClose"]);
const form = ref({
	custmessage: "",
	custname: "",
	custphone: "",
	custcompany: "",
});

function isMobile(mobile = "") {
	return /^1[3-9]\d{9}$/.test(mobile);
}

const closeModal = () => {
	emit("update", false);
};
const onSubmit = function () {
	const params = toRaw(form.value);
	if (!params.custmessage) {
		alert("请输入留言内容!");
		return;
	}
	if (!params.custname) {
		alert("请输入联系人姓名!");
		return;
	}
	if (!isMobile(params.custphone)) {
		alert("请输入手机号!");
		return;
	}

	const before = Date.now().toString();
	const session_sign = JaM(before);
	const jsonStr = JSON.stringify(params); //转为JSON字符串
	fetch("/rtapitwo/custcenter/center/api/cc/cust/feedback/addcustfeedback?session_token=&session_sign=" + session_sign, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: queryString.stringify({ data: jsonStr }),
	})
		.then((response) => response.json())
		.then((res) => {
			if (res.status !== "success") {
				alert(res.message.info);
				return;
			}
			closeModal();
			alert("提交成功!,我们会尽快和您联系,  请注意查看短信通知。");
		})
		.catch((err) => {
			// 错误处理
			alert(err);
		});
};
</script>
