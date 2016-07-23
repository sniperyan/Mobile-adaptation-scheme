/**
 * Created by liyanb on 2016/7/13.
 */
(function (win, doc) {
    //psd 640px 宽度
    var dpr, rem, scale;
    var docEl = doc.documentElement;
    var fontEl = doc.createElement('style');
    var metaEl = doc.querySelector('meta[name="viewport"]');
    dpr = win.devicePixelRatio || 1;
    rem = docEl.clientWidth * dpr / 40;
    scale = 1 / dpr;
    metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
    docEl.setAttribute('data-dpr', dpr);
    docEl.firstElementChild.appendChild(fontEl);
    fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
})(window, document);
