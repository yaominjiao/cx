<template>
	<div class="headVuea">
	<div class="headVue">
		<a class="header_back">
			<img src="../../common/image/back.png" alt="back">
		</a>
		<h1>太平洋移动车险</h1>
		<a class="header_goHome">
			<img src="../../common/image/home.png" alt="home">
		</a>
	</div>
	</div>
</template>
<script>
	import {test} from '@/api/api'
	export default{
		mounted(){
	      test().then(res => {
	        console.log(res)
	      }).catch(err => {
	        console.log("header:"+err);
	        console.log('请求失败')
	      })
		}
	}
</script>
<style scoped lang="less">
	@import '../../common/css/theme.less';
</style>
