 function date1() 
 {
day=new Date();
document.getElementById("p1").innerHTML +=day ;
 }
 function fun()
 {
     x=f1.z.value;
    if(x>=90)
  document.getElementById("p2").innerHTML +="ممتاز";
    else if (x>=80)
    document.getElementById("p2").innerHTML +="جيدجدا";
    else if (x>=70)
    document.getElementById("p2").innerHTML +="جيد";
    else if (x>=60)
    document.getElementById("p2").innerHTML +="مقبول";
    else if (x>=50)
    document.getElementById("p2").innerHTML  ="ضعيف";
    else 
    document.getElementById("p2").innerHTML ="راسب";
 
 }
 function Calculator()
{
    x=parseInt(document.f2.num1.value);
    y=parseInt(document.f2.num2.value);
    operation = document.f2.op.value;
    switch(operation)
    
    {
        case'+':z=x+y;break;
        case'-':z=x-y;break;
        case'/':z=x/y;break;
        case'*':z=x*y;break;


    }
    
     document.getElementById("g").innerHTML +=z;
   }
   function checkuser()
        {
            username =document.f11.username.value;
            pass =document.f11.pass.value;
            if(username=="ali"&& pass=="123")
            window.open("ali.html")
            else
            if(username!="ali" && pass!="123")
            window.open("error.html")


        }
        function chingeImg(y) {

   
            imgN= Math.round(10*Math.random(),0)+1;
              url="amg/"+imgN+".png";
               y.src=url;
            }
           
