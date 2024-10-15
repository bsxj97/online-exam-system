const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot63s2pjm2/",
            name: "springboot63s2pjm2",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot63s2pjm2/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "线上考试系统的设计与实现"
        } 
    }
}
export default base
