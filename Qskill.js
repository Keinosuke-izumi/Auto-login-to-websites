window.onload = function(){

  if(document.URL.match("https://q3e.oxfordonlinepractice.com/app/")){
    // document.evaluate('//*[@id="password"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null ).snapshotItem(0).click()
    document.getElementById('oxfordId').value= "izumi.keinosuke.p1@dc.tohoku.ac.jp"
    document.getElementsByName('password')[0].value= "M4c.5y8Bs3Mb8mg"
    // document.evaluate('//*[@id="password"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null ).snapshotItem(0).click()

    let button = document.evaluate('//*[@id="app"]/div/main/div/div[2]/div/section[2]/div/div[1]/div/form/div[4]/button', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null )
    button.snapshotItem(0).click()
  
  }
}