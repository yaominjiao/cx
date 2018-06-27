<template>
	<div>
		<group>
	      <cell title="title" value="value"></cell>
	    </group>
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