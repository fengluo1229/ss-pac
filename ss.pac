// Generated by gfwlist2pac
// https://github.com/clowwindy/gfwlist2pac

var proxy = "SOCKS5 127.0.0.1:1080;";

var domains = {
  "github.com": 1, 
  "wikipedia.org": 1, 
  "google.com": 1, 
  "co.uk": 1, 
  "googlesyndication.com": 1, 
  "google.co.jp": 1, 
  "co.hk": 1, 
  "googleapis.com": 1
};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    pos = host.lastIndexOf('.', pos - 1);
    while(1) {
        if (pos <= 0) {
            if (hasOwnProperty.call(domains, host)) {
                return proxy;
            } else {
                return direct;
            }
        }
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
}
