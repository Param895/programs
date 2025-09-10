function userDataFetch(userId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (userId === 1) {
                resolve({id:1,name:"param",email:"paramjat895"});
            }
            else{
                reject("User Not Found")
            }
        },2000)
    })
}
async function getUser() {
  try {
    console.log("Fetching user data...");
    const user = await userDataFetch(1);
    console.log("User data received:", user);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

getUser();
   
