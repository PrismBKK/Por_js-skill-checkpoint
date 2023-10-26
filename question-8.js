// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let getData= async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await new Promise(resolve => setTimeout(() => resolve(response.json()), 500));
    return data
}
async function getUserData(){
    const Users=await getData();
    let newUsers=[];
    for(let userData of Users){
        newUsers.push(userData.name)
    }
    console.log(newUsers)
    return newUsers
}

getUserData()