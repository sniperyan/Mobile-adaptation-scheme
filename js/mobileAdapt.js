/**
 * Created by liyanb on 2016/7/13.
 */
(function (win, doc) {
    //psd 640px 宽度
    var dpr, rem, scale;
    var docEl = doc.documentElement;
    var fontEl = doc.createElement('style');
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isAndroid){
        //安卓
        rem = docEl.clientWidth  / 10;
        metaEl.setAttribute('content', 'width=' + docEl.clientWidth + ',initial-scale=' + 1 + ',maximum-scale=' + 1 + ', minimum-scale=' + 1 + ',user-scalable=no');
        docEl.firstElementChild.appendChild(fontEl);
        fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
    }else{
        //ios
        dpr = win.devicePixelRatio || 1;
        rem = docEl.clientWidth * dpr / 10;
        scale = 1 / dpr;
        metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
        docEl.setAttribute('data-dpr', dpr);
        docEl.firstElementChild.appendChild(fontEl);
        fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
    }
})(window, document);
