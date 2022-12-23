console.log("fjdl");

// console.log(str);
function func(){
    let str=document.getElementById('str').value;
    console.log("Clicked...");
    console.log(str);
    let str2=str;
    var n=str.length;
    var i=0, j=n-1;
    while(i<j)
    {
        if(str[i]!=str2[j])
        {
            document.getElementById('res').innerHTML="NO";
            return;
        }
        else{
            i++;
            j--;
        }
        document.getElementById('res').innerHTML="YES";

    }

}