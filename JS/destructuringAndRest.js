let a, b, c, rest;

[a,b,...rest] = [1,2,3,4,5,6,7,8,9,10];

console.log(a,b,rest);

[a,b, , , ,...rest] = [1,2,3,4,5,6,7,8,9,10];

console.log(a,b,rest);

[a,b = 10, , , ,c,...rest] = [1,2,3,4,5,6,7,8,9,10];

console.log(a,b,c,rest);

[a,b = 10, , , ,c,...rest] = [1];

console.log(a,b,c,rest);//



let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(arr);
arr = [...arr,16,17,18,19,20]
console.log(arr);


//Object
let obj = {z:15,a:19,v:58,f:89,x:16};
const{x,z,...v} = obj;

console.log(z,x,v);

let obj2 = {z:15,a:19,v:58,f:89,x:16 , y:{o:5}};

const {y:{o:t}, z:opp} = obj2;
console.log(t,opp);

//Abdullah
let arr1 = [5,10,15,20,25,30,35];

[ab1,ab2,...ab3] = arr1;
// 5 10 [15,20,25,30,35]
console.log(ab1,ab2,ab3);


//Muhammed 


// 5 25 [35]
[ab1, , , ,ab2, , ...ab3] = arr1;
console.log(ab1,ab2,ab3);

//Kazim
let ar1 = [1,2,3,4];
let ar2 = [10,20,30,40];
let ar3 = [11,21,31,41];

let ar4 = [...ar1,5,6,...ar2,41,42,43,...ar3];
//[1,2,3,4,5,6,10,20,30,40,41,42,43,11,21,31,41]
console.log(ar4);

///////////////////////////
const obj3 = {ty:25 , gt:78 , att:{tta:15} , pp:{pp:{pp:{pp:33}}} , muhammed:{abdullah:{kazim:10}}}

//25 78 15 33 10

const {ty:s1, gt:s2, att:{tta:s3}, pp:{pp:{pp:{pp:s4}}}, muhammed:{abdullah:{kazim:s5}}} = obj3;
console.log(s1,s2,s3,s4,s5);


//s1 s2 s3 s4 s5 kullanarak ve sadece toplama cikarma islemi yaparak elde edilecek sayilar:

//Kazim 84

console.log(s4+s4+s4-s3)
//Abdullah 101
console.log(s4+s4-s3+s1+s1);
//Muhammed 35
console.log(s1+s5);

//Kazim 88
console.log(s2+s5);

//Abdullah 55
console.log((s2-s4)+s1+s3-s3-s3);
//Muhammed 30
console.log(s1+s3-s5);


//377
console.log(s2+s2+s2+s2+s1+s1+s3);
