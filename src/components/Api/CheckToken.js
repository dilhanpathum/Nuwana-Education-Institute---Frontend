import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import APIService from './APIService';
import { jwtDecode } from "jwt-decode";

export default function CheckToken() {
    const [token, setToken, removeToken] = useCookies(["mytoken"]);
    const navigate = useNavigate();

    useEffect(() => {
        if (token["mytoken"] != null) {
          const emailToken = (jwtDecode(token["mytoken"]).sub);
    
    
          APIService.GetUserDetails(token["mytoken"],{email: emailToken})
            .then((resp) => {
              console.log(resp)
              navigate('/home')

            })
            .catch((error) => 
    
              removeToken(["mytoken"])
          );
        }
      }, []);
}
