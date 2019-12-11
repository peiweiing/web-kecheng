var btn = document.getElementsByClassName('close');
var zhezhao = document.getElementsByClassName('zhezhao'); 
var kuang = document.getElementsByClassName('kuang'); 
   
// 点击 btn 显示或隐藏弹窗   
btn.onclick = function()  {  
    // if(zhezhao.style.display === "none")  {
    //     zhezhao.style.display = "flex";  
    // } else  {  
    //     zhezhao.style.display = "none";  
    // }  
}  
   
// 点击整个界面关闭弹窗 
document.onclick = function()  {
    zhezhao.style.display = "none";  
}  
   
// 防止点击弹窗也关闭弹窗，需要防止其关闭
kuang.onclick = function()  {
    return false;  
}