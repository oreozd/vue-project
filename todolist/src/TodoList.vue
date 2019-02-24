<template>
  <div class="item" >
		<div>
			<input v-model="inputValue"/>
			<button @click="handleSubmit">提交</button>
		</div>
		<ul>
			<todo-item 
				v-for="(item,index) of list"
				:key="index"
				:content="item"
				:index="index"
				@delete="handleDelete"
			></todo-item>
		</ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem'
export default {
	// 注册组件
	components:{
		'todo-item': TodoItem
	},
	data(){
		return{
			inputValue:'',
			list:[]
		}
	},
	methods:{
		handleSubmit(){
			this.list.push(this.inputValue);
			this.inputValue='';
		},
		handleDelete(index){
			this.list.splice(index,1)
		}
	}
}
</script>

<style>
	ul{
		margin-top:0px;
		margin-left:-30px;
	}
</style>
