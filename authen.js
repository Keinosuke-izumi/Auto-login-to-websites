var TOHOKULINKS_url = 'https://tohokulinks.herokuapp.com/relogin.html#'

var now_url = location.href

window.onload = function(){

  if(now_url==TOHOKULINKS_url){
    //TOHOKU LINKS
    document.getElementsByName('username')[0].value=""
    document.getElementsByName('password')[0].value=""

    document.forms[0].submit()
    // document.evaluate('//input[3]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null ).snapshotItem(0).click()
  }
}