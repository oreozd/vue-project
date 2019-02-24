<template>
	<div>
		<span class="index">{{index+1}}:</span>
		<li class="item" >{{content}}</li>
		<button @click="handleDelete">删除</button>
	</div>
</template>

<script>
export default {
	props:['content','index'],
	methods:{
		handleDelete(){
			this.$emit('delete',this.index)
		}
			
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.index{
		color:#42B983;
		padding-right:10px;
	}
	.item{
		list-style-type: circle;
		display: inline-block;
		margin-top:10px;
	}
	button{
		margin-left:20px;
		outline: 2px solid lightblue;
		border:none;
		background-color: lavender;
	}
	
</style>

<!-- 子组件给父组件发送消息，需要通过$emit() -->