var bst_placeHolder='Enter domains in a row';
var bst_DL_ED_WG=0;
var bst_SyncEDCB='<span> + sync expiration</span><input id="syncExpiration" type="checkbox">';
var bst_pS_tID_oID='<div><span>Payment Status: </span><input id="paymentStatus" type="text" placeholder="Fill in to sync or leave blank"></div><div><span>Transaction ID: </span><input id="transactionId" type="text" placeholder="Fill in to sync or leave blank"></div><div><span>Order ID: </span><input id="orderId" type="text" placeholder="Fill in to sync or leave blank"></div>';
var dataDomains=[];
var paymentStatus='';
var transactionId='';
var orderId='';
var tempUserName;
var tempDomainName;

if(window.location.href.search('https://secure.namecheap.com/NCAdmin/domains/domainlist.aspx')>=0){
 bst_placeHolder='Enter user-tab-domain or user-space-domain in each row';
 bst_DL_ED_WG=1;
/*Introduce a few more variables to change contacts for function newSyncScript*/
}
if(window.location.href.search('https://secure.namecheap.com/NCAdmin/asp/domedit.asp')>=0){
 bst_DL_ED_WG=2;
}
if(window.location.href.search('https://secure.namecheap.com/NCAdmin/asp/Synch-expirydate.asp')>=0){
 bst_DL_ED_WG=3;
 bst_pS_tID_oID='';
 bst_SyncEDCB='';
}


/*Admin Integration Part*/var addSyncExpDateFrameVar='';
document.body.innerHTML+='<input type="button" value="Bulk Sync" onclick="addSyncExpDateFrame();" onkeyup="addSyncExpDateFrame();" style="position:absolute;right:6px;top:6px;">';
document.head.getElementsByTagName('style')[0].innerHTML+='@keyframes synctableadd {from {opacity:0;}to{opacity:1;}} @keyframes synctableremove {from {opacity:1;}to{opacity:0;}}#addSyncExpDateFrame form div {padding:3px 0 4px 0;} #addSyncExpDateFrame input[type="text"] {position: absolute;left:85px;margin-top:-3px;}';
function addSyncExpDateFrame(){setTimeout(function(){document.body.innerHTML+='<div id="addSyncExpDateFrame" style="position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(100,100,100,0.4);"><div style="padding:5px;animation:synctableadd 0.3s linear 0s;border:black solid 1px;background-color:white;height:300px;width:300px;position:absolute;right:50%;top:50%;margin-top:-150px;margin-right:-150px;"><form><div><p><span>Domains: </span></p><textarea id="syncExpDateText" placeholder="" style="max-width: 295px; max-height: 195px;"></textarea></div>'+bst_pS_tID_oID+'<div><input type="button" value="Update" onclick="newSyncScript()" onkeyup="newSyncScript()">'+bst_SyncEDCB+'</div></form></div></div>';document.getElementById('syncExpDateText').setAttribute('placeholder',bst_placeHolder)},1)}
function removeSyncExpDateFrame(){if(document.getElementById('addSyncExpDateFrame')!=null){document.getElementById('addSyncExpDateFrame').firstChild.setAttribute('style','padding:5px;animation:synctableremove 0.3s linear 0s;border:black solid 1px;background-color:white;height:300px;width:300px;position:absolute;right:50%;top:50%;margin-top:-150px;margin-right:-150px;');setTimeout(function(){document.getElementById('addSyncExpDateFrame').remove()},300)}}
document.onclick=function(event){addSyncExpDateFrameVar=document.getElementById('addSyncExpDateFrame');
if(event.target==addSyncExpDateFrameVar){removeSyncExpDateFrame()}}/*Admin Integration Part*//*Edit Domain Info Part*/


function newSyncScript(){

dataDomains=document.getElementById('syncExpDateText').value.split('\n');
for(i=0;i<dataDomains.length;i++){
 if(dataDomains[i]==''){
  dataDomains.splice(i,1);
  i--
 }else{
  if(bst_DL_ED_WG==1){
   dataDomains[i]=dataDomains[i].split(/\t|\ /);
   dataDomains[i][0]=dataDomains[i][0].trim();
   dataDomains[i][1]=dataDomains[i][1].trim();
   dataDomains[i].splice(2,999)
  }else{
   dataDomains[i]=dataDomains[i].trim()
  }
 }
}
if(bst_DL_ED_WG!=3){var syncExpiration=document.getElementById('syncExpiration').checked;paymentStatus=document.getElementById('paymentStatus').value;transactionId=document.getElementById('transactionId').value;orderId=document.getElementById('orderId').value;}

var toC1=7500;
var toC2=3500;


if(bst_DL_ED_WG==1){
 if(syncExpiration==true){
  toC1=25000;
  toC2=13000
 }else{
  toC1=20000;
  toC2=5500
 }
}
if(bst_DL_ED_WG==2){
 if(syncExpiration==true){
  toC1=10000;
  toC2=7000
 }else{
  toC1=7500;
  toC2=3500
 }
}
if(bst_DL_ED_WG==3){
  toC1=5000;
  toC2=2500
 }

document.body.innerHTML='';
var syncExpDateDOM=document.createElement('FRAMESET');


function setNewURL(tempDomainName,tempUserName){
if(bst_DL_ED_WG==1){syncExpDateDOM.innerHTML='<frame id="syncExpDateFrame" src="https://secure.namecheap.com/NCAdmin/domains/DomainEdit.aspx?domainname='+tempDomainName+'&domainuser='+tempUserName+'">'}
if(bst_DL_ED_WG==2){syncExpDateDOM.innerHTML='<frame id="syncExpDateFrame" src="https://secure.namecheap.com/NCAdmin/asp/domedit.asp?d='+tempDomainName+'">'}
if(bst_DL_ED_WG==3){syncExpDateDOM.innerHTML='<frame id="syncExpDateFrame" src="https://secure.namecheap.com/NCAdmin/asp/Synch-expirydate.asp?domainname='+tempDomainName+'">'}
}


if(bst_DL_ED_WG==1){
for(i=0;i<dataDomains.length;i++){tempDomainName=dataDomains[i][1];tempUserName=dataDomains[i][0];
if(i==0){
 syncExpDateDOM.innerHTML='<frame id="syncExpDateFrame" src="https://secure.namecheap.com/NCAdmin/domains/DomainEdit.aspx?domainname='+tempDomainName+'&domainuser='+tempUserName+'">';
document.body.appendChild(syncExpDateDOM)
}else{
setTimeout(setNewURL,(i*toC1),tempDomainName,tempUserName)}
if(syncExpiration==true){setTimeout(function(){document.getElementById('syncExpDateFrame').contentWindow.document.getElementById('ctl00_cphMain_ncGeneral_ibSetExpiraton').click()},(i*toC1+5500));
setTimeout(function(){document.getElementById('syncExpDateFrame').contentWindow.document.getElementById('ctl00_cphMain_ncGeneral_ibCalculateYears').click()},(i*toC1+9500))}
if(paymentStatus!=''){setTimeout(function(){document.getElementById('syncExpDateFrame').contentWindow.document.getElementById('ctl00_cphMain_ncGeneral_tbPayStatus').setAttribute('value',paymentStatus)},(i*toC1+toC2))}
if(transactionId!=''){setTimeout(function(){document.getElementById('syncExpDateFrame').contentWindow.document.getElementById('ctl00_cphMain_ncGeneral_tbTransId').setAttribute('value',transactionId)},(i*toC1+toC2+100))}
if(orderId!=''){setTimeout(function(){document.getElementById('syncExpDateFrame').contentWindow.document.getElementById('ctl00_cphMain_ncGeneral_tbOrderId').setAttribute('value',orderId)},(i*toC1+toC2+200))}
setTimeout(function(){document.getElementById('syncExpDateFrame').contentWindow.document.getElementById('ctl00_cphMain_btnOk').click()},(i*toC1+toC2+500));
}
}

if(bst_DL_ED_WG==2){
for(i=0;i<dataDomains.length;i++){tempDomainName=dataDomains[i];
 if(i==0){
  syncExpDateDOM.innerHTML='<frame id="syncExpDateFrame" src="https://secure.namecheap.com/NCAdmin/asp/domedit.asp?d='+tempDomainName+'">';
  document.body.appendChild(syncExpDateDOM)
 } else {
  setTimeout(setNewURL,(i*toC1),tempDomainName)}
  if(syncExpiration==true){setTimeout(function(){document.getElementById('syncExpDateFrame').contentWindow.document.getElementsByName('auto')[0].click()},(i*toC1+3500))}
  if(paymentStatus!=''){setTimeout(function(){document.getElementById('syncExpDateFrame').contentWindow.document.getElementsByName('paystatus')[0].setAttribute('value',paymentStatus)},(i*toC1+toC2))}
  if(transactionId!=''){setTimeout(function(){document.getElementById('syncExpDateFrame').contentWindow.document.getElementsByName('transid')[0].setAttribute('value',transactionId)},(i*toC1+toC2+100))}
  if(orderId!=''){setTimeout(function(){document.getElementById('syncExpDateFrame').contentWindow.document.getElementsByName('orderid')[0].setAttribute('value',orderId)},(i*toC1+toC2+200))}
  setTimeout(function(){document.getElementById('syncExpDateFrame').contentWindow.document.getElementsByName('editdomain')[0].click()},(i*toC1+toC2+500))
}
}

if(bst_DL_ED_WG==3){
 for(i=0;i<dataDomains.length;i++){tempDomainName=dataDomains[i];
  if(i==0){syncExpDateDOM.innerHTML='<frame id="syncExpDateFrame" src="https://secure.namecheap.com/NCAdmin/asp/Synch-expirydate.asp?domainname='+tempDomainName+'">';
  document.body.appendChild(syncExpDateDOM)}else{
   setTimeout(setNewURL,(i*toC1),tempDomainName)
  }
  setTimeout(function(){document.getElementById('syncExpDateFrame').contentWindow.document.getElementsByName('Submit')[0].click()},(i*toC1+toC2+100));
  setTimeout(function(){document.getElementById('syncExpDateFrame').contentWindow.document.getElementsByName('slotid')[0].click()},(i*toC1+toC2+1100));
  setTimeout(function(){document.getElementById('syncExpDateFrame').contentWindow.document.getElementsByName('Submit')[1].click()},(i*toC1+toC2+1200));
 }

}
}
