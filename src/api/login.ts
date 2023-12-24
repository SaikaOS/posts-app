export async function setLogin(u:string, p: string) {
async function getData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const getUsers = async() => {
  const users:any[] = await getData()
  return users
} 

const users = await getUsers()

 const login = (username: string, password: string) => {
  const user = users.find((u) => u.username === username, password === 'password');
  return user ? alert('Success')
   : alert('Failed');
};

return login(u, p)
}