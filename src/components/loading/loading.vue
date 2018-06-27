<template>
	<div>
		<div class="mask flex flex-v flex-align-center flex-pack-center" id="cpic_ui_loading" v-show="getLoading">
			<div class="load">
				<h2 class="load-title">太平洋保险</h2>
				<p class="load-subtitle">官方直销</p>
				<p class="load-text">查询中，请稍后</p>
				<div class="dots">
					<span class="dot dot1"></span>
					<span class="dot dot2"></span>
					<span class="dot dot3"></span>
					<span class="dot dot4"></span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		computed: {
			getLoading(){
				return this.$store.state.loading;
			}
		}
	}
</script>
<style>
	.flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex }
	.flex-v { -webkit-box-orient: vertical; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column }
	.flex-1 { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1 }
	.flex-align-center { -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center }
	.flex-pack-center { -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center }
	.flex-pack-justify { -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between }
	.flex-box { display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex; -moz-box-orient: horizontal; -webkit-box-orient: horizontal; -o-box-orient: horizontal; box-orient: horizontal }
	.mask {position: fixed; width: 100%; height: 100%; left: 0; top: 0; bottom: 0; background-color: rgba(0, 0, 0, .8); z-index: 999 }
	.load { width: 2rem; height: 1.65rem; background: #fff; border-radius: 10px; text-align: center }
	.load .dots { margin-top: -.04rem }
	.load .dot { display: inline-block; width: .06rem; height: .06rem; background: #c5c7c4; border-radius: 1000px; margin: 0 .05rem }
	.load .dot1 { -webkit-animation: loadingDot1 1s infinite; animation: loadingDot1 1s infinite }
	.load .dot2 { -webkit-animation: loadingDot2 1s infinite; animation: loadingDot2 1s infinite }
	.load .dot3 { -webkit-animation: loadingDot3 1s infinite; animation: loadingDot3 1s infinite }
	.load .dot4 { -webkit-animation: loadingDot4 1s infinite; animation: loadingDot4 1s infinite }
	@-webkit-keyframes loadingDot1 {
	    100%, 25% { background: #c5c7c4 }
	    0%, 25% { background: #005bac }
	}
	@keyframes loadingDot1 {
	    100%, 25% { background: #c5c7c4 }
	    0%, 25% { background: #005bac }
	}
	@-webkit-keyframes loadingDot2 {
	    0%, 25%, 50% { background: #c5c7c4 }
	    25%, 50% { background: #005bac }
	}
	@keyframes loadingDot2 {
	    0%, 25%, 50% { background: #c5c7c4 }
	    25%, 50% { background: #005bac }
	}
	@-webkit-keyframes loadingDot3 {
	    0%, 25%, 50%, 75% { background: #c5c7c4 }
	    50%, 75% { background: #005bac }
	}
	@keyframes loadingDot3 {
	    0%, 25%, 50%, 75% { background: #c5c7c4 }
	    50%, 75% { background: #005bac }
	}
	@-webkit-keyframes loadingDot4 {
	    0%, 100%, 25%, 50%, 75% { background: #c5c7c4 }
	    100%, 75% { background: #005bac }
	}
	@keyframes loadingDot4 {
	    0%, 100%, 25%, 50%, 75% { background: #c5c7c4 }
	    100%, 75% { background: #005bac }
	}
	.load-title { font-size: 0.2rem; color: #333; line-height: .8rem }
	.load-subtitle { font-size: .16rem; margin: -.2rem 0 .3rem }
	.load-text { font-size: .14rem; color: #888 }	
</style>