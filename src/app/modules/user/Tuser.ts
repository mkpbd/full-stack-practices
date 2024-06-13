

type roles = "user"| "admin"
type Tuser = {
    name: string,
    email:string,
    role: roles,
    password:string,
    phone:number,
    address:string
}


export default Tuser