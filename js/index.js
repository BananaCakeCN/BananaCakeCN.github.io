function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
         }
     }
    return "";
} 
if(getCookie('from')==''){
    if (document.referrer=='https://t.co/'){
        if (document.cookie!='from=other'){
            document.cookie = "from=twitter; expires=" + new Date(new Date().setTime(new Date().getTime() + 730*86400000)).toUTCString() + "; path=/";
        }
    }else{
        document.cookie = "from=other; expires=" + new Date(new Date().setTime(new Date().getTime() + 730*86400000)).toUTCString() + "; path=/";
    }
}
if(getCookie('from')=='twitter'){
    var box = document.querySelector('.main-text')
    box.innerHTML = '<div class="main-text-bg"><h1>欢迎推友们，你们可以在下面举报我。</h1><iframe src="https://www.12377.cn/jbxzxq/jbxx/nmjb/nmjb.html" style="width:100%;height:800px;"></iframe></div>'
}
