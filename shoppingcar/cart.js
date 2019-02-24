var List=new Vue({
	el: "#page-list",
	data:{
		cate_index:0,//商品类别下标
		filter_index:0,//排序方法类别下标
		price_isAsc:false,//是否按照价格排序
		//商品分类列表
		cate:[
			{ id: 0, des: '推荐' },
			{ id: 1, des: '母婴' },
			{ id: 2, des: '鞋包饰品' },
			{ id: 3, des: '食品' },
			{ id: 4, des: '数码家电' },
			{ id: 5, des: '居家百货' }
		],
		//排序方法
		sortMethods:[
			{name:'综合排序',method:'setList'},
			{name:'销量优先',method:'sortSales'},
			{name:'价格',method:'sortPrice'}
		],
		//货物信息
		goods:[
			{
			    id: 1001,
			    name: 'Beats EP头戴式耳机',
			    price: 558,
			    type: 4,
			    stock: 128,
			    sales: 1872,
			    img: 'http://img11.360buyimg.com/n1/s528x528_jfs/t3109/194/2435573156/46587/e0e867ac/57e10978N87220944.jpg!q70.jpg'
			}, {
			    id: 1002,
			    name: '雀巢（Nestle）高钙成人奶粉',
			    price: 60,
			    type: 3,
			    stock: 5,
			    sales: 2374,
			    img: 'http://m.360buyimg.com/babel/jfs/t5197/28/400249159/97561/304ce550/58ff0dbeN88884779.jpg!q50.jpg.webp'
			}, {
			    id: 1003,
			    name: '煎炒烹炸一锅多用',
			    price: 216,
			    type: 5,
			    stock: 2,
			    sales: 351,
			    ishot: true,
			    img: 'http://gw.alicdn.com/tps/TB19OfQRXXXXXbmXXXXL6TaGpXX_760x760q90s150.jpg_.webp'
			}, {
			    id: 1004,
			    name: 'ANNE KLEIN 潮流经典美式轻奢',
			    price: 585,
			    type: 2,
			    stock: 465,
			    sales: 8191,
			    img: 'http://gw.alicdn.com/tps/TB1l5psQVXXXXcXaXXXL6TaGpXX_760x760q90s150.jpg_.webp'
			}, {
			    id: 1005,
			    name: '乐高EV3机器人积木玩具',
			    price: 3099,
			    type: 1,
			    stock: 154,
			    sales: 165,
			    img: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t6490/168/1052550216/653858/9eef28d1/594922a8Nc3afa743.jpg!q50.jpg'
			}, {
			    id: 1006,
			    name: '全球购 路易威登（Louis Vuitton）新款女士LV印花手袋 M41112',
			    price: 10967,
			    type: 2,
			    stock: 12,
			    sales: 6,
			    img: 'https://m.360buyimg.com/n1/s220x220_jfs/t1429/17/1007119837/464370/310392f4/55b5e5bfN75daf703.png!q70.jpg'
			}, {
			    id: 1007,
			    name: 'Kindle Paperwhite3 黑色经典版电纸书',
			    price: 805,
			    type: 4,
			    stock: 3,
			    sales: 395,
			    img: 'http://img12.360buyimg.com/n1/s528x528_jfs/t4954/76/635213328/51972/ec4a3c3c/58e5f717N4031d162.jpg!q70.jpg'
			}, {
			    id: 1008,
			    name: 'DELSEY 男士双肩背包',
			    price: 269,
			    type: 2,
			    stock: 18,
			    sales: 69,
			    ishot: true,
			    img: 'http://gw.alicdn.com/tps/LB1HL0mQVXXXXbzXVXXXXXXXXXX.png'
			}, {
			    id: 1009,
			    name: '荷兰 天赋力 Herobaby 婴儿配方奶粉 4段 1岁以上700g',
			    price: 89,
			    type: 1,
			    stock: 36,
			    sales: 1895,
			    img: 'http://m.360buyimg.com/babel/s330x330_jfs/t4597/175/4364374663/125149/4fbbaf21/590d4f5aN0467dc26.jpg!q50.jpg.webp'
			}, {
			    id: 1010,
			    name: '【全球购】越南acecook河粉牛肉河粉特产 速食即食方便面粉丝 牛肉河粉米粉65克*5袋',
			    price: 19.9,
			    type: 3,
			    stock: 353,
			    sales: 3041,
			    ishot: true,
			    img: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t3169/228/5426689121/95568/d463e211/586dbf56N37fcd503.jpg!q50.jpg'
			}, {
			    id: 1011,
			    name: '正品FENDI/芬迪女包钱包女长款 百搭真皮钱夹 女士小怪兽手拿包',
			    price: 3580,
			    type: 2,
			    stock: 5,
			    sales: 18,
			    img: 'http://img.alicdn.com/imgextra/i3/TB16avCQXXXXXcsXpXXXXXXXXXX_!!0-item_pic.jpg_400x400q60s30.jpg_.webp'
			}
		],
		list:[]
	},
	
	// 生命周期钩子函数
	created:function(){
		this.setList();//默认的列表展示
	},
	
	methods:{
		//设置商品信息列表
		//给list数组设置值
		setList:function(){
			var self=this;
			//为什么不直接是goods数组
            this.list = this.goods.filter(function (item) {
                return self.cate_index !== 0//用户点击了分类
                    ? item.type === self.cate_index //这里进行分类存值
                    : item//用户未点击分类将所有的数据检索出来
            });
		},
		
		/**
		 * @method 切换分类
		 * @param {Number} index 需要切换类目的数组下标
		 */
		toggleCate: function (index) {
			this.cate_index=index;
			this.setList();
			
			var filterIindex=this.filter_index;
			(filterIindex===2)&&(this.price_isAsc=!this.price_isAsc);
			this.sortBy(this.sortMethods[filterIindex].method);
		},
		
		/**
		 * 根据属性值进行升序或降序的比较器
		 * 
		 * @method 属性比较器
		 * @param {String} prop 属性名
		 * @param {String} type 排序方法 (desc: 降序, asc: 升序)
		 */
		compare: function (prop,type) {
			type=type||'desc';//排序方法存在就用排序方法，不存在就默认使用降序。
			
			var flag1,flag2;
			if(type==='desc'){
				flag1=-1;//负数表示顺序符合要求不进行交换
				flag2=1;
			}else if(type==='asc'){
				flag1=1;
				flag2=-1;
			}
			
			return function(obj1,obj2){
				var val1=obj1[prop];
				var val2=obj2[prop];
				if(val2<val1){
					return flag1;//降序排列时符合，不进行操作。
				}
				else if(val2>val1){
					return flag2;
				}else{
					return 0;
				}
			}
		},
		
		/**
		 * @method 按销量排序
		 */
		sortSales: function () {
			this.list.sort(this.compare('sales'));//属性值为什么不用加this，直接可以访问到。
		},
		
		/**
		 * @method 按价格排序
		 */
		sortPrice: function () {
			var type=this.price_isAsc? 'desc':'asc';
			this.list.sort(this.compare('price',type));
			this.price_isAsc=!this.price_isAsc;//将价格排序状态初始化为相反的状态
		},
		
		/**
		 * @method 排序调度器
		 * @param {String} method 方法名
		 */
		sortBy: function (method) {
			this.filter_index=this.sortMethods.findIndex(function(item){
				return item.method===method;//查找下标的条件
			});
			method=method||'setList';//短路表达式，如果method存在就取method的值，不存在就选择setlist方法。
			method!=='sortPrice'&&(this.price_isAsc=false);
			this[method]();//这里是一个关键点
		},
		
		/**
		 * @method 添加到购物车
		 * @param {Object} goods 商品
		 */
		addToCart: function (goods) {
			//判断当前选择的商品是否已经存在在购物车中
			var alreadyIndex=Cart.cart.findIndex(function(item,index){
				return item.id===goods.id;
			});
			
			//当前商品为首次添加，创建首次添加逻辑
			if(alreadyIndex===-1){
				var cartIndex=Cart.cart.length;//数组末尾的元素
				
				Cart.cart.push(goods);//调用到Cart实例的cart数组
				Cart.$set(Cart.cart[cartIndex],'quantity',1);//设置货物的数量为1
				Cart.$set(Cart.cart[cartIndex],'subtotal',goods.price.toFixed(1));//设置该商品在购物车中的总价
				Cart.$set(Cart.cart[cartIndex],'checked',false);//设置前面的元素是否被选中
				
				Cart.checkAllFlag=false;
				return;//返回值为空的函数
			}
			
			//商品在购物车中已经存在，应该在原有数量上直接添加
			var alreadyGoods=Cart.cart[alreadyIndex];//已经存在的商品
			var num=alreadyGoods.quantity,stock=alreadyGoods.stock;//获取到已经存在商品的数量和库存。
			//选择数量小于库存，商品为可添加状态
			if(num<stock){
				Cart.$set(alreadyGoods,'quantity',++alreadyGoods.quantity);//设置数量加一
				Cart.$set(alreadyGoods,'subtotal',(alreadyGoods.quantity*alreadyGoods.price).toFixed(1));//修改商品总价
			}
			else{
				alert("商品库存不足！");
			}
		},
	}
});

var Cart = new Vue({
    el: '#page-cart',
    data: {
        checkAllFlag: false,
        selectedNum: 0,
        delFlag: false,
//         cart: [{
//             id: 1001,
//             name: 'Beats EP头戴式耳机',
//             price: 558,
//             type: 4,
//             quantity: 1,
//             subtotal: 558,
//             stock: 128,
//             checked: false,
//             sales: 1872,
//             img: 'http://img11.360buyimg.com/n1/s528x528_jfs/t3109/194/2435573156/46587/e0e867ac/57e10978N87220944.jpg!q70.jpg'
//         }]
        cart: []
    },
    methods: {

        /**
         * @method 增减单品数量
         * @param {Boolean} isAdd 是否增加
         * @param {Number} index 商品下标
         */
        changeQty: function (isAdd, item) {
			var num=item.quantity,stock=item.stock;
			if(isAdd && num<stock){
				this.$set(item, 'quantity',++num);//点击增加按钮
			}else if(!isAdd&num>1){
				this.$set(item, 'quantity',--num);//点击减少按钮
			}
			
			this.$set(item, 'subtotal',(item.price*num).toFixed(1));//修改该商品在购物车上的总价
			//关于总价的逻辑可以在结算时候在进行计算，而这里采用的是随时计算，作为商品中的一个字段，这样更加方便。
			
        },

        /**
         * @method 选择商品
         * @param {Object} item 商品对象
         */
        selectGoods: function (item) {
			item.checked=!item.checked;//点击两次改变选择状态
			item.checked?++this.selectedNum:--this.selectedNum;//如果被选择就增加选择项目总数
			//设置全选
			this.selectedNum===this.cart.length?this.checkAllFlag=true:this.checkAllFlag=false;//在被选择数目与所有项目数相等的时候，点亮全选按钮
			
        },

        /**
         * @method 全选
         */
        checkAll: function () {
			var self=this;//在this里还有this时候需要关注this指向的问题
			//在有嵌套的函数里要时刻关注this的指向问题
			this.checkAllFlag=!this.checkAllFlag;
			this.cart.forEach(function(item){
				if(self.checkAllFlag){
					item.checked=true;
					self.selectedNum=this.cart.length;
				}else{
					item.checked=false;
					self.selectedNum=0;
				}
			});
        },

        /**
         * @method 切换删除按钮
         */
        toggleDelBtn: function () {
			this.delFlag=!this.delFlag;
        },

        /**
         * @method 删除商品
         */
        delGoods: function () {
			var cart=this.cart;
			this.cart=cart.filter(function(item){
				return !item.checked;
			});
			
			this.selectedNum=0;
			this.delFlag=!this.delFlag;
			this.checkAllFlag=false;
		}
    },
    computed: {
        /**
         * @method 已选商品的总额
         */
		totalPrice:function(){
			var num=0;
			this.cart.forEach(function(item){
				item.checked && (num+=parseFloat(item.subtotal));
			});
			return num;
		}
    }
});


//自定义排序函数
//使用函数和计算属性的区别
//组件化开发
