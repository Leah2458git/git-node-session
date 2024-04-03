import { jwtDecode } from 'jwt-decode'

const DecodeToken = () => {
    const token = localStorage.getItem("token")
    
    
    if (token) {
        const userDecode = jwtDecode(token)
        // const {id}=userDecode
        const {roles,_id} = userDecode
        return {roles,_id}
    }
    return token
}

export default DecodeToken