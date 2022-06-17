// import AuthService from './Services/AuthService'
import { useState ,useEffect} from 'react'

const CheckLogin = () => {
    const [login,setlogin] = useState(false)

  	useEffect(() => {
		const getData = localStorage.getItem("customerData");
        if(getData != null){
               setlogin(true)
        }

	  });

  return login
  ;
}

export default CheckLogin
