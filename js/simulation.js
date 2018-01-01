$(document).ready(function(){
    $(".step1 button").click(createPrime);

})

function createPrime(){
    var htmlObj = $.ajax({
        url:"http://localhost:8002/createPrime",
        contentType:"application/x-www-form-urlencoded",
        data:"{status:prime}",
        dataType:"xml",
        success:function(html){
            // 解析传来的xml数据
            // 将相应内容渲染到网页上
        }
    })
}