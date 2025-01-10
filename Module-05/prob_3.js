// searching for largest name 
var nm=["Ananda das","Jihlas","kiha","litsi","wukue","atlio"]
var mx=nm[0]
for(var i=0;i<nm.length;i++)
{
    if(nm[i].length>mx.length)
    {
        mx=nm[i];
    }
}
console.log(mx);