<template>
	<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header border-0">
					<h4>服务咨询</h4>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">×</span>
					</button>
				</div>
				<div class="modal-body">
					<form class="form">
						<div class="form-group">
							<input type="text" class="form-control" aria-describedby="emailHelp" placeholder="姓名" required="true" />
							<!-- <small class="form-text text-muted">便于后续回访</small> -->
						</div>
						<div class="form-group">
							<input type="text" class="form-control" placeholder="手机" required="true" />
						</div>
						<div class="form-group">
							<input type="text" class="form-control" placeholder="公司" required="true" />
						</div>
						<div class="form-group">
							<textarea class="form-control" placeholder="咨询内容" rows="6"></textarea>
						</div>
						<button type="submit" class="btn btn-primary btn-round mr-1">立即提交</button>
						<span> 提交成功后工作人员会及时与您联系 谢谢!</span>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
