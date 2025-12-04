function getUsersDetails(id){
    console.log("123");
   return new Promise((Resolve,reject)=>{
    setTimeout(()=>({Resolve:"678"},2000)
   )
   });
}
const myfun=async()=>{
   getUsersDetails().then(res=>console.log(res));
   console.log("423");
}
myfun();
// console.log("hello")