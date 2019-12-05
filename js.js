 
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

 function forr()
    {
    document.getElementById("ValueFor").innerHTML="";
     for (i=1 ;i<10;i++)
     document.getElementById("ValueFor").innerHTML+=i;
    }
    function whilee()
    {
        i=1
        while (i<=10) {

        document.getElementById("ValueWhile").innerHTML+=i;
        i++   
        }


    }
   
    function DoWhile()
    {
        i=1;
        do{
            document.getElementById("ValueDo").innerHTML+=i;
            i++;
        }
        while (i<=10) ;
            
        
    }
    function arry() {
        
        x=[]
        n=prompt("ادخل عدد المصفوفه" )
        n=parseInt(n);
        
            for(i=1;i<=n;i++)
            {
            k =prompt("ادخل قيم المصفوفه")
            x[i]= parseInt(k)
            }
        
        document.getElementById("Lope").innerHTML+=x;

    }

        function checkuser()
        {
            username =document.f11.username.value;
            pass =document.f11.pass.value;
            if(username=="ali"&& pass=="123")
            window.open("https://www.google.com")
            else
            if(username=="sultan" && pass=="123")
            window.open("https://www.salhowaymel.info")


        }
    function resetImg(x)
    {
x.style.width="200"
x.style.height="200"


    }
    function bigImg(x) {

        x.style.width="150"
    x.style.height="150"

    }
   
 
 function o(x) {
 
    x.src="css.png"
 } 
 function chingeImg(y) {

   
 imgN= Math.round(10*Math.random(),0)+1;
   url=""+imgN+ ".png";
    y.src=url;
 }
function array1(){

    //x=[1,2,5,6,8,66,10];
    m=prompt("ادخل الاسم الذسي تريد اضافتة في المصفوفه");
    stname=[sultan, abdullah,mohamad,kaled];

    stname.push(m);
    document.getElementById("newarray")innerHTML +=stname;
}