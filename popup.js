document.addEventListener('DOMContentLoaded', function(){
    
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function(){
        chrome.tabs.getSelected(null, function(tab){
            d=document;
            
            var f = d.createElement('form');
            f.action = 'http://gtmetrix.com/analyze.html?bm';
            f.method = 'post';
            var i = d.createElement('input');
            i.type = 'hidden';
            i.name = 'url';
            i.value = tab.url;
            f.appendChild(i);
            d.body.appendChild(f);
            f.submit();
        });
    },false);
    
    var btnNotification = document.getElementById('notification');
    btnNotification.addEventListener('click', function(){
        var opt = {
            type: "basic",
            title: "Deploy",
            message: "It worked!",
            iconUrl: "icon.png"
        };
        
        var opt2 = {
            type: "basic",
            title: "Notificacion2",
            message: "Hay Vamos!",
            iconUrl: "icon.png"
        };
            
        var notification = chrome.notifications.create("", opt, function(id) {
            console.error(chrome.runtime.lastError);
        });
        
        var notification2 = chrome.notifications.create("", opt2, function(id){
           console.error(chrome.runtine.lastError); 
        });
        
        notification.show();
        notification2.show();
        
    },false);
    
}, false);