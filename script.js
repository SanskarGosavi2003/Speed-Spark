var Pro=document.getElementById("protagonist");
//var Pro1=document.getElementById("protagonist_1");
//var Pro2=document.getElementById("protagonist_2");
var V=document.getElementById("villain");//here we created the variable of the characters playing in the game

//now creating a function that will help is to take input and make our character  jump
function jump()
{
    Pro.classList.remove("animateRun");
    
    if(n==0&&Pro.classList!="animate1")
    {
        
        Pro.classList.add("animate1");
        setTimeout(function(){
            Pro.classList.remove("animate1");
        },600);
    }
    
    if(n==1&&Pro.classList!="animate2")
    {

        Pro.classList.add("animate2");
        setTimeout(function(){
            Pro.classList.remove("animate2");
        },580);
    }
    
    if(n==2&&Pro.classList!="animate3")
    {
        Pro.classList.add("animate3");
        setTimeout(function(){
            Pro.classList.remove("animate3");
        },560);
    }
    if(n==3&&Pro.classList!="animate4")
    {
        Pro.classList.add("animate4");
        setTimeout(function(){
            Pro.classList.remove("animate4");
        },540);
    }
    if(n==4&&Pro.classList!="animate5")
    {
        Pro.classList.add("animate5");
        setTimeout(function(){
            Pro.classList.remove("animate5");
        },520);
    }
    if(n==5&&Pro.classList!="animate6")
    {
        Pro.classList.add("animate6");
        setTimeout(function(){
            Pro.classList.remove("animate6");
        },500);
    }
    if(n==6&&Pro.classList!="animate7")
    {
        Pro.classList.add("animate7");
        setTimeout(function(){
            Pro.classList.remove("animate7");
        },480);
    }
    if(n==7&&Pro.classList!="animate8")
    {
        Pro.classList.add("animate8");
        setTimeout(function(){
            Pro.classList.remove("animate8");
        },460);
    }
    if(n==8&&Pro.classList!="animate9")
    {
        Pro.classList.add("animate9");
        setTimeout(function(){
            Pro.classList.remove("animate9");
        },440);
    }
    if((n==9||n==10)&&Pro.classList!="animate10")
    {
        Pro.classList.add("animate10");
        setTimeout(function(){
            Pro.classList.remove("animate10");
        },420);
    }
   
    /*setTimeout(function(){
        Pro.classList.remove("animate");
    },600);//for smoother animation of jump*/
}
function refresh(){
    window.location.reload();
}
var i=0;
var n=0;
var updated=false;
var BDY=document.getElementById("bod");
BDY.classList.add("BGI"); 
document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
    function keyDownHandler(event)
    {
        if(event.keyCode==13||event.keyCode==32||event.keyCode==38||event.keyCode==87)//this here lets us jump using spacebar and enter and up key the keyCode can be easily found on google
        {
            jump();
        }
        if(event.keyCode==82)
        {
            refresh();
        }
        if(event.keyCode==83)
        {
            startGame();
        }

        Pro.classList.add("animateRun");
    }          
//var B=document.getElementById("JUMP");
//B.classList.add("BU1");
//here i am creating a start function which wil be represented by a button on the html file which on pressing will start moving the villain
function startGame()
{
    var someVarKey=0;
    Pro.classList.add("animateRun");
    //Pro2.classList.add("animateRun");
    var R=document.getElementById("rules");
    R.classList.add("fadingEffect");
   
    //var ProTop=parseInt(window.getComputedStyle(Pro).getPropertyValue("top"));//window.getComputedStyle(Pro) will return an object with all the properties of pro in string and so we used parseint to convert thee string to integer
    //var VLeft=parseInt(window.getComputedStyle(V).getPropertyValue("left"));
    /*setInterval(()=>{
        
    },40);*/
    setInterval(() => {
        //var VLeft=parseInt(window.getComputedStyle(V).getPropertyValue("left"));
        
        var ProTop=parseInt(window.getComputedStyle(Pro).getPropertyValue("top"));//window.getComputedStyle(Pro) will return an object with all the properties of pro in string and so we used parseint to convert thee string to integer
        var VLeft=parseInt(window.getComputedStyle(V).getPropertyValue("left"));
        var level=10;
        if(VLeft<=100&& !updated)
        {
            i++;
            updated=true;
        }
        if(VLeft>=300&& updated)
        {
            updated=false
        }
        {
            if(i==0)
            {
                n=0;
                level=1;
                BDY.classList.remove("BGI");
                BDY.classList.add("BG1");
                V.classList.add("ani1");
            }
            if(i>0&&i<2)
            {
                level=1;
                n=1
                BDY.classList.remove("BGI");
                BDY.classList.add("BG1");
                V.classList.add("ani1");
            }
            if(i>=2&&i<4)
            {
                BDY.classList.remove("BG1");
                BDY.classList.add("BG2");
                level=2;
                n=2;
                V.classList.remove("ani1");
                V.classList.add("ani2");
            }
            if(i>=4&&i<6)
            {
                BDY.classList.remove("BG2");
                BDY.classList.add("BG3");
                level=3;
                n=3;
                V.classList.remove("ani2");
                V.classList.add("ani3");
            }
            if(i>=6&&i<8)
            {
                BDY.classList.remove("BG3");
                BDY.classList.add("BG4");
                level=4;
                n=4;
                V.classList.remove("ani3");
                V.classList.add("ani4");
            }
            if(i>=8&&i<10)
            {
                BDY.classList.remove("BG4");
                BDY.classList.add("BG5");
                level=5;
                n=5;
                V.classList.remove("ani4");
                V.classList.add("ani5");
            }
            if(i>=10&&i<12)
            {
                BDY.classList.remove("BG5");
                BDY.classList.add("BG6");
                level=6;
                n=6;
                V.classList.remove("ani5");
                V.classList.add("ani6");
            }
            if(i>=12&&i<14)
            {
                BDY.classList.remove("BG6");
                BDY.classList.add("BG7");
                level=7;
                n=7;
                V.classList.remove("ani6");
                V.classList.add("ani7");
            }
            if(i>=14&&i<16)
            {
                BDY.classList.remove("BG7");
                BDY.classList.add("BG8");
                level=8;
                n=8;
                V.classList.remove("ani7");
                V.classList.add("ani8");
            }
            if(i>=16&&i<18)
            {
                BDY.classList.remove("BG8");
                BDY.classList.add("BG9");
                level=9;
                n=9;
                V.classList.remove("ani8");
                V.classList.add("ani9");
            }
            if(i>=18&&i<20)
            {
                BDY.classList.remove("BG9");
                BDY.classList.add("BG10");
                level=10;
                n=10;
                V.classList.remove("ani9");
                V.classList.add("ani10");
            }
            if(i>20)
            {
                BDY.classList.remove("BG10");
                BDY.classList.add("BGI");
                V.style.animation ="none";
                V.style.display="none";
                level=10;
                Pro.classList.remove("animateRun");
                Pro.classList.add("animateDance");
                //alert("you win");
            }
        }  
        document.getElementById("LVL").innerHTML=level;
            document.getElementById("score").innerHTML=i;
        
        if(VLeft<=360 && VLeft>=300 && ProTop>=220){
            V.style.animation ="none";
            V.style.display="none";
            Pro.style.animation="none";
            alert("huhh U LOOSE , your score:"+i);
        }
    }, 10);
    
    
    
}
