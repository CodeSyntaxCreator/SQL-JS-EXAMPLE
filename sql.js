////////////////////////FOR PASSWORD////////////////////////////////
var restrict_P=new Array();
restrict_P[0]="run ";
restrict_P[1]="help";
restrict_P[2]="create";
restrict_P[3]="\\";
restrict_P[4]="exec";
restrict_P[5]=" drop";
restrict_P[6]="delete";
restrict_P[7]="select";
restrict_P[8]="alter";
restrict_P[9]="update";
restrict_P[10]="<script>";
restrict_P[11]="create";
restrict_P[12]="exec";
 
function passwordSql(d)
{
 var id=d.split("|");
 var i=0;
while(i<id.length)
{
    obj=document.getElementById(id[i]).value;
    for(j=0;j<restrict_P.length;j++)
    {
        var x=obj.toUpperCase();
       
        if(x.indexOf(restrict_P[j].toUpperCase())!=-1)
        {
            alert("Invalid Password!!");
            document.getElementById(id[i]).value="";
            document.getElementById(id[i]).focus();
            document.getElementById(id[i]).style.backgroundColor = "rgb(250, 255, 189)";
            return false;
        }
    }
    i++;
}
 
return true;
}
///////////////////////////////////////////////////////////////////
 
// JScript File
 
 
var restrict=new Array();
restrict[0]="\\";
restrict[1]=" help ";
restrict[2]="select *";
//restrict[3]="\'";
restrict[4]="create";
restrict[5]=">";
restrict[6]="<";
restrict[7]=">";
restrict[8]="exec";
//restrict[9]=";";
restrict[9]="%";
//restrict[11]="#";
restrict[10]=" drop ";
restrict[11]="delete";
restrict[12]="select";
restrict[13]="alter";
restrict[14]="update";
//restrict[17]="$";
restrict[15]="&&";
//restrict[19]="(";
//restrict[20]=")";
restrict[16]="<script>";
restrict[17]="?";
restrict[18]="=";
restrict[19]="|";
restrict[20]="!";
//restrict[26]=":";
restrict[21]="{";
restrict[22]="`";
restrict[23]="^";
restrict[24]="~";
restrict[25]="}";
restrict[26]=" DROP ";
restrict[27]="DELETE";
restrict[28]="SELECT";
restrict[29]="ALERT";
restrict[30]="UPDATE";
restrict[31]="EXEC";
restrict[32]="<SCRIPT>";
restrict[33]=" HELP ";
restrict[34]="SELECT *";
restrict[35]="CREATE";
//restrict[36]=",,";
restrict[36]="&";
restrict[37]="*";
restrict[38]="+";
restrict[39]="[";
restrict[40]="]";
//restrict[48]="--";
restrict[41]="..";
restrict[42]="@@";
restrict[43]="\"";
//restrict[52]=",";
 
 
//restrict[28]="create";
//restrict[29]="exec";
 
 
 
 
function handleSql(d)
{
 
var id=d.split("|");
 
var i=0;
 
while(i<id.length)
{
obj=document.getElementById(id[i]).value;
 
for(j=0;j<restrict.length;j++)
{
if(obj.indexOf(restrict[j])!=-1)
{
//alert("Special Characters are not allowed!");
swal("Alert!", "Special Characters are not allowed!");
document.getElementById(id[i]).value="";
document.getElementById(id[i]).focus();
document.getElementById(id[i]).style.backgroundColor = "rgb(250, 255, 189)";
return false;
}
}
i++;
}
return true;
}
 
var checkno=/^\d{10}$/;
 
function checkNo(id)
{
obj=document.getElementById(id).value;
if(obj.length==10)
{
    if(obj.search(checkno)==-1)
    {
        alert ("Instrument number must be numeric!");
        document.getElementById(id).style.backgroundColor = "rgb(250, 255, 189)";
        document.getElementById(id).focus();
        return false;
    }
}
else if(document.getElementById(id).value="")
    return false;
else
    {
        alert ("Instrument number must be 10 digit long!");
        document.getElementById(id).style.backgroundColor = "rgb(250, 255, 189)";
        document.getElementById(id).focus();
        return false;
    }
return true;
}
 
 
checkno=/^\d{10}$/;
var size=10;
function checkMobileNumber(id)
{
obj=document.getElementById(id).value;
if(obj.length==size)
{
    if(obj.search(checkno)==-1)
    {
        alert ("Must be numeric!");
        document.getElementById(id).style.backgroundColor = "rgb(250, 255, 189)";
        document.getElementById(id).focus();
        return false;
    }
}
else
    {
        alert ("Must be 10 digit long!");
        document.getElementById(id).style.backgroundColor = "rgb(250, 255, 189)";
        document.getElementById(id).focus();
        return false;
    }
return true;
}
 
 
function checkPhoneNumber(id)
{
obj=document.getElementById(id).value;
if(obj.length>=10)
{
}
else
    {
        alert ("Please Enter Valid Telephone Number !!");
        document.getElementById(id).style.backgroundColor = "rgb(250, 255, 189)";
        document.getElementById(id).focus();
        return false;
    }
return true;
}
 
checknopin=/^\d{6}$/;
sizepin=6;
function checkPinCode(id)
{
obj=document.getElementById(id).value;
if(obj.length==sizepin)
{
    if(obj.search(checknopin)==-1)
    {
        alert ("Must be numeric!");
        document.getElementById(id).style.backgroundColor = "rgb(250, 255, 189)";
        document.getElementById(id).focus();
        return false;
    }
}
else
    {
        alert ("Must be 6 digit long!");
        document.getElementById(id).style.backgroundColor = "rgb(250, 255, 189)";
        document.getElementById(id).focus();
        return false;
    }
return true;
}
 
function CheckPassword(id,id1)  
{  
    
    var password=document.getElementById(id).value;
    var strength = new Array();  
    strength[0] = "Blank";  
    strength[1] = "Very Weak";  
    strength[2] = "Weak";  
    strength[3] = "Medium";  
    strength[4] = "Strong";  
    strength[5] = "Very Strong";  
    var score = 1;  
    if (password.length < 1)
    {
     document.getElementById(id1).innerText="";
     return strength[0];
    }
          
    if (password.length < 2)  
    { 
     document.getElementById(id1).innerText="";
     return strength[1];  
    }
         
   
      if (password.match(/\d+/))  
      {
         score++;  
         if (password.match(/[a-z]/) && password.match(/[A-Z]/))
         {
          score++;  
           if (password.length >= 8)  
           {
              score++;  
              
           }
         }
      }
    
      document.getElementById(id1).innerText=strength[score];
    return score;  
    
 }  
 
function password_check(id)
{
 var password=document.getElementById(id).value;
if (password.length < 8)  
  {
    alert("Password must be greater then 8 degits");
    document.getElementById(id).value="";
    document.getElementById(id).focus();
    return false;
  }
  else
  {
        if( !password.match(/\d+/))
        {
          alert("Password Must have a special character");
          document.getElementById(id).value="";
          document.getElementById(id).focus();
          return false;
        }
        else
        {
          if ( !password.match(/[a-z]/)) 
          {
            alert("Password Must have a small latter");
            document.getElementById(id).value="";
            document.getElementById(id).focus();
            return false; 
          }
          else
          {
           if( !password.match(/[A-Z]/))
             {
              alert("Password Must have a Capital Latter");
              document.getElementById(id).value="";
              document.getElementById(id).focus();
             return false;
            }
            else
            {
             return true;
            }
         }
       }
   } 
 
}
 
 
 function checkNull(d){
var id=d.split("|");
 
var i=0;
while(i<id.length)
{
obj=document.getElementById(id[i]).value;
if(obj.length<1)
{
    swal("Alert!", "Please fill Mandatory fields!");
//alert("Please fill Mandatory fields!");
document.getElementById(id[i]).value="";
document.getElementById(id[i]).focus();
document.getElementById(id[i]).style.backgroundColor = "rgb(250, 255, 189)";
return false;
}
 
i++;
}
return true;
}
 
 
 
function checkNumber(d){
var id=d.split("|");
var i=0;
while(i<id.length)
{
obj=document.getElementById(id[i]).value;
if(isNaN(obj)==true)
{
//alert("Please fill number data in numeric fields!");
swal("Alert!", "Please fill number data in numeric fields!");
document.getElementById(id[i]).value="";
document.getElementById(id[i]).focus();
return false;
}
i++;
}
return true;
}
 
function email(id1)
{
        if(document.getElementById(id1).value!="")
        {
            var email = document.getElementById(id1).value;
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!filter.test(email))
                {
                    alert('Please enter a valid email Id');
                    document.getElementById(id1).focus();
                    document.getElementById(id1).style.backgroundColor = "rgb(250, 255, 189)";
                    return false;
                }
        }
}
 
 function closeSession()
  {
    if (event.altKey==true && event.keyCode==0 )
     {
      //alert("closed1 Alt+F4")
      spyWin = open('/logout2','WindowClose','width=1,height=1,left=0,top=0,status=0');
      WindowClose.close();
     }
     var Xwidth=window.document.body.offsetWidth+window.event.clientX
     var YHeight=window.event.clientY
     if(Xwidth<=30&&YHeight<0)
      {
       spyWin = open('/logout2','WindowClose','width=1,height=1,left=0,top=0,status=0');  
       WindowClose.close();
       
       
       //document.location.href="SessionEndFile.asp";
       //window.close();
      }
     }
    function fnUnloadHandler() 
     {  
       
        spyWin = open('/logout2','WindowClose','width=1,height=1,left=0,top=0,status=0');
        WindowClose.close();
    }
 
        
 
     
var message="";
function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers)
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}
document.oncontextmenu=new Function("return false")
 
 
function onlyAlphabet(d){
var id=d.split("|");
//alert(id+"sd");
var i=0;
while(i<id.length)
{
obj=document.getElementById(id[i]).value;
if(isNaN(obj)){
return true;
}
else{
alert("Please enter only Alphabets in place of name..");
document.getElementById(id[i]).value="";
document.getElementById(id[i]).focus();
return false;
}
i++;
}
return true;
}
 
 
function AddSelection(x,y,z)
 {
 
   document.getElementById(y).value=document.getElementById(x).options[z].text
   document.getElementById(y).focus();
 }
 
 function E()
{
  if(event.keyCode==13 )
   {
     event.keyCode=9;
   }
}
function E2(f)
   {
     if(event.keyCode==13 )
      {
        document.getElementById(f).focus();
      }
   }
   
   ///function to convert Roman Numbers To Decimal///
 
var numerals = {"M":1000,"CM":900,"D":500,"CD":400,"C":100,"XC":90,"L":50,"XL":40,"X":10,"IX":9,"V":5,"IV":4,"I":1};
 
function RomanToDecimal(roman) {
  //the roman numeral value
  var _v = roman.toUpperCase();
  //this holds the decimal equivalent
  var _d = 0;
  //if the roman value contains more than the allowed letters return Not a Number
  if (!_v.match(/^[MDCLXVI]+$/)) return NaN;
  //for each roman numeral
  for (_n in numerals) {
    //while this numeral is at the front of the passed string
    while (_v.match(new RegExp("^"+_n))) {
      //add the numeral's decimal value to the decimal equivalent
      _d += numerals[_n];
      //and pop off the numeral found
      _v = _v.substr(_n.length);
    }
  }
  // still letters left. Improper sequencing. return Not a Number
  if (_v.length) return NaN;
  //otherwise, return the decimal equivalent
  else return _d;
}
 
function dropdownCheck(checkbyid,msg)
{
 if(document.getElementById(checkbyid).value=='-1')
{
//alert(msg);
 swal("Alert!", msg);
document.getElementById(checkbyid).style.backgroundColor = "rgb(250, 255, 189)";
document.getElementById(checkbyid).focus();
return false;
}
 
}