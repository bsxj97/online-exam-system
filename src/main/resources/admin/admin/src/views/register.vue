<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231210/0fee9409214b41bfb94d032d3e1d9dbc.webp)","display":"flex","width":"100%","backgroundSize":"100% 100%","backgroundPosition":"center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"border":"10px solid #39b6e2","padding":"90px 60px 40px","boxShadow":"0px 1px 9px #21667f80","margin":"60px 0 20px","borderRadius":"30px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20231218/84c7bb0e65334a18b669a33041d75403.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20231218/83bfa299c46a43d48aade06fcb1d9431.png) no-repeat center bottom / 100% auto,url(http://codegen.caihongy.cn/20231218/67cb8922dcdb4603ae570289e0708697.png) repeat-y center 10px / 100% auto,#fff","display":"flex","width":"900px","position":"relative","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm" :rules="rules">
				<div v-if="true" :style='{"margin":"0 auto","color":"#000000","top":"-33px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20231218/a7b3487a278d4db6990f0207171527db.png) no-repeat center top / 100%  100% ","width":"800px","lineHeight":"90px","fontSize":"22px","position":"absolute","fontWeight":"600","height":"89px"}' class="title">线上考试系统的设计与实现注册</div>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('xuehao')?'required':''">学号：</div>
					<el-input  v-model="ruleForm.xuehao"  autocomplete="off" placeholder="学号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('xingming')?'required':''">姓名：</div>
					<el-input  v-model="ruleForm.xingming"  autocomplete="off" placeholder="姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in xueshengxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('shouji')?'required':''">手机：</div>
					<el-input  v-model="ruleForm.shouji"  autocomplete="off" placeholder="手机"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="xueshengtouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('pquestion')?'required':''">密保问题：</div>
					<el-input  v-model="ruleForm.pquestion"  autocomplete="off" placeholder="密保问题"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('panswer')?'required':''">密保答案：</div>
					<el-input  v-model="ruleForm.panswer"  autocomplete="off" placeholder="密保答案"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('jiaoshigonghao')?'required':''">教师工号：</div>
					<el-input  v-model="ruleForm.jiaoshigonghao"  autocomplete="off" placeholder="教师工号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('jiaoshixingming')?'required':''">教师姓名：</div>
					<el-input  v-model="ruleForm.jiaoshixingming"  autocomplete="off" placeholder="教师姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in jiaoshixingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('zhicheng')?'required':''">职称：</div>
					<el-input  v-model="ruleForm.zhicheng"  autocomplete="off" placeholder="职称"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('dianhua')?'required':''">电话：</div>
					<el-input  v-model="ruleForm.dianhua"  autocomplete="off" placeholder="电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"width":"50%","padding":"0 0  0 80px","margin":"0 auto 15px","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"padding":"0 5px 0 0","color":"#818181","top":"0","left":"-130px","textAlign":"right","width":"130px","lineHeight":"44px","fontSize":"14px","position":"absolute"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="jiaoshitouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px auto 5px","outline":"none","color":"#fff","borderRadius":"8px","background":"#5CE5FB","display":"block","width":"60%","fontSize":"16px","height":"44px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0 10%","margin":"10px auto","color":"rgba(159, 159, 159, 1)","textAlign":"center","display":"inline-block","width":"60%","lineHeight":"1","fontSize":"12px"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
			},
			forgetForm: {},
            pageFlag : '',
			tableName:"",
			rules: {},
            xueshengxingbieOptions: [],
            jiaoshixingbieOptions: [],
		};
	},
	mounted(){
		this.pageFlag = this.$route.query.pageFlag
		if(this.$route.query.pageFlag=='register'){
			
			let table = this.$storage.get("loginTable");
			this.tableName = table;
			if(this.tableName=='xuesheng'){
				this.ruleForm = {
					xuehao: '',
					xingming: '',
					mima: '',
					xingbie: '',
					shouji: '',
					touxiang: '',
					pquestion: '',
					panswer: '',
				}
			}
			if(this.tableName=='jiaoshi'){
				this.ruleForm = {
					jiaoshigonghao: '',
					mima: '',
					jiaoshixingming: '',
					xingbie: '',
					zhicheng: '',
					dianhua: '',
					touxiang: '',
				}
			}
			if ('xuesheng' == this.tableName) {
				this.rules.xuehao = [{ required: true, message: '请输入学号', trigger: 'blur' }]
			}
			if ('xuesheng' == this.tableName) {
				this.rules.xingming = [{ required: true, message: '请输入姓名', trigger: 'blur' }]
			}
			if ('xuesheng' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.rules.jiaoshigonghao = [{ required: true, message: '请输入教师工号', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.rules.jiaoshixingming = [{ required: true, message: '请输入教师姓名', trigger: 'blur' }]
			}
			if ('jiaoshi' == this.tableName) {
				this.rules.dianhua = [{ required: true, message: '请输入电话', trigger: 'blur' }]
			}
			this.xueshengxingbieOptions = "男,女".split(',')
			this.jiaoshixingbieOptions = "男,女".split(',')
		}
	},
	created() {
	},
	destroyed() {
		  	},
	methods: {
		changeRules(name){
			if(this.rules[name]){
				return true
			}
			return false
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        xueshengtouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        jiaoshitouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.xuehao) && `xuesheng` == this.tableName){
						this.$message.error(`学号不能为空`);
						return
					}
					if((!this.ruleForm.xingming) && `xuesheng` == this.tableName){
						this.$message.error(`姓名不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `xuesheng` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `xuesheng` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if(`xuesheng` == this.tableName && this.ruleForm.shouji &&(!this.$validate.isMobile(this.ruleForm.shouji))){
						this.$message.error(`手机应输入手机格式`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
				if(`xuesheng` == this.tableName && this.ruleForm.pquestion==''){
					this.$message.error(`密保问题不能为空`);
				    return
				}
				if(`xuesheng` == this.tableName && this.ruleForm.panswer==''){
					this.$message.error(`密保答案不能为空`);
				    return
				}
					if((!this.ruleForm.jiaoshigonghao) && `jiaoshi` == this.tableName){
						this.$message.error(`教师工号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `jiaoshi` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `jiaoshi` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.jiaoshixingming) && `jiaoshi` == this.tableName){
						this.$message.error(`教师姓名不能为空`);
						return
					}
					if((!this.ruleForm.dianhua) && `jiaoshi` == this.tableName){
						this.$message.error(`电话不能为空`);
						return
					}
					if(`jiaoshi` == this.tableName && this.ruleForm.dianhua &&(!this.$validate.isMobile(this.ruleForm.dianhua))){
						this.$message.error(`电话应输入手机格式`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20231210/0fee9409214b41bfb94d032d3e1d9dbc.webp);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 1px solid #D7D7D7;
						border-radius: 8px;
						padding: 0 10px;
						color: #818181;
						width: 250px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 1px solid #D7D7D7;
						border-radius: 8px;
						padding: 0 10px;
						color: #818181;
						width: 250px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #D7D7D7;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						color: #818181;
						width: 250px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #D7D7D7;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						color: #818181;
						width: 250px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px dashed #D7D7D7;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #aaa;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px dashed #D7D7D7;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #aaa;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px dashed #D7D7D7;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #aaa;
		  		  width: 100px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				top: 4px;
				position: absolute;
				right: 5px;
				content: "*";
			}
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
