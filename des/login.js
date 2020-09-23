var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "user_ocpl" && password == "08123717" || username == "aungkham" && password == "aungkham"){
alert ("Warnning...<br> စာအုပ်များအား ခွင့်ပြုချက်မရပဲ screenshot ဖြင့်ဖြစ်စေ၊တခြားနည်းလမ်းဖြင့်ဖြစ်စေ ရယူပြီး Print ထုတ်ကာ ဖြန့်ဖြူး ရောင်းချပါက၊ အရေးယူခြင်းခံယူရပါမည်၊၊");
window.location = "https://onlinecivil.github.io/des/2.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}
