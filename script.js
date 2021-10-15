// function prom(x){
// 	return promise = new Promise(function(resolve,reject){
// 		setTimeout(function(){
// 			if(x%2!=0){
// 				return resolve("even number");
// 			}else{
// 				return reject(new Error("odd number"));
// 			}
// 		},1000)
// 	}).then((resolve)=>console.log(resolve),
// 			(reject)=>console.log(reject));
// }
// console.log(prom(3))

/////////////////////////////////////

// ?????
function resolve(){
  return 5;
}

var a  = resolve();
var b = -44;

var c =  new Promise((resolve, reject) => {
    setTimeout(() => resolve(100), 1000);
    setTimeout(() => resolve(7), 2000);
  });

Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(a), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(b), 1500)),
  new Promise((resolve, reject) => setTimeout(() => resolve(c), 2000)),
]).then(console.log);


////////////////////////////////////////

// function f(a){
// 	return new Promise((resolve)=>{
// 		setTimeout(function(){
// 			return resolve(a*2);
// 		},1000)
// 	}).then((res)=>console.log(res));
// }
// console.log(f(6));





//////////////////////date
/*
let date =new Date();
console.log(date);
console.log(+date)
//+date 1970i hunvari 1ic minjew aysorwa jamanakahatwac@ miliwayrkyanow
console.log(date.getFullYear());
//getFullYear stanum enq ayd tarwa taretiv@ 
console.log(date.getMonth()+1);
//weradardnum e amsativ@ twow ete +1 chenq anum 0ic e sksum
console.log(date.getDate());
//weradardnum e amsatiw
console.log(date.getDay());
//weradardznum e shabatwa or@ twow
console.log(date.getHours());
//weradardznum e jam@
console.log(date.getMinutes());
//cuyc e talis ropen
console.log(date.getSeconds());
//cuyc e talis wayrkyan@
console.log(date.getMilliseconds());
//cuyc e talis miliwayrkyan
*/

/*
let date=new Date(2018,2,15,18,35,55,999);
//menq enq stexcumm amis amsatiw tari 
// let date=new Date(2018,2,15);
console.log(date)
*/

/*
let date=new Date();
date.setFullYear(2000);
//setow poxumenq taretiv@
date.setMonth(3);
//aystex amsatiw@
date.setDate(20);
date.setHours(20);
date.setMinutes(35);
date.setSeconds(38);
date.setMilliseconds(55);
//karoxenq miangamic bolorn poxel orinak fullyeari mej u aydpes yuraqanchuyric heto irenic poqrn karoxenq grel orinak setMonth(3,14) amisn u orn
console.log(date)
*/

let div=document.getElementsByTagName('div')[0];
setInterval(function(){
 let date=new Date();
 let h=(date.getHours()<10)? `0${date.getHours()}`:date.getHours();
 let m=(date.getMinutes()<10)? `0${date.getMinutes()}`:date.getMinutes();
 let s=(date.getSeconds()<10)? `0${date.getSeconds()}`:date.getSeconds();
 div.innerHTML=${h}:${m}:${s}

},1000);