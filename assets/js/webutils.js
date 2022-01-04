function redirect (url) {
    var ua        = navigator.userAgent.toLowerCase(),
        isIE      = ua.indexOf('msie') !== -1,
        version   = parseInt(ua.substr(4, 2), 10);

    // Internet Explorer 8 and lower
    if (isIE && version < 9) {
        var link = document.createElement('a');
        link.href = url;
        document.body.appendChild(link);
        link.click();
    }

    // All other browsers can use the standard window.location.href (they don't lose HTTP_REFERER like Internet Explorer 8 & lower does)
    else { 
        window.location.href = url; 
    }
}

var request = {};
var pairs = location.search.substring(1).split('&');
for (var i = 0; i < pairs.length; i++) {
  var pair = pairs[i].split('=');
  request[pair[0]] = pair[1];
}

function file_get_contents( url ) 
{
    var req = null;
    try { req = new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {
        try { req = new ActiveXObject("Microsoft.XMLHTTP"); } catch (e) {
            try { req = new XMLHttpRequest(); } catch(e) {}
        }
    }
    
    if (req == null) throw new Error('XMLHttpRequest not supported');
    req.open("GET", url, false);
    req.send(null);

    return req.responseText;
}

function initialForApp()
{
    document.getElementById("globalout").innerHTML = file_get_contents('content-app.html');
}

function initialForWeb()
{
    document.getElementById("aboutout").innerHTML = file_get_contents('content-header.html');
    document.getElementById("globalout").innerHTML = file_get_contents('content-web.html');
}

function initSource()
{
    if(request['app_interface'] != null) 
    {           
        initialForApp();
        return;
    }

    initialForWeb();
}
