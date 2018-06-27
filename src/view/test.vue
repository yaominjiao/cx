<template>
	<div>
		<div class="test">test</div>
	</div>
</template>
<script>
	import cxHeader from "@/components/header/header"
	import loader from "@/components/loading/loading"
	import { Group, Cell } from 'vux'
	export default{
		components:{
			loader,
			cxHeader,
			Group,
    		Cell
		},
		data(){
			return {
				a:"1"
			}
		}
	}
</script>
<style scoped>
	.test{
		background: red;
		width: 100px;
		height: 200px;
		border: 1px solid red;
	}
</style>