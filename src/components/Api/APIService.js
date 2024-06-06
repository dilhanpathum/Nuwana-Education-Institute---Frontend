
const baseUrl = "http://127.0.0.1:8080/api/v1/";
export default class APIService {
//login user & get token
  static LoginUser(body){

    return fetch(baseUrl+"login", {
     'method' : 'POST',
     headers:{
        'Content-Type' : 'application/json',
     },
     body:JSON.stringify(body)
    }).then(resp => resp.json())
    .catch(error => console.log(error))
  }
//register user and pass the data to backend
  static RegisterUser(body){

    return fetch(baseUrl+'register', {
     'method' : 'POST',
     headers:{
        'Content-Type' : 'application/json',
     },
     body:JSON.stringify(body)
    }).then(resp => resp.json())

  }
//get loged user datails by token
  static GetUserDetails(token,body){

    return fetch(baseUrl+'user', {
     'method' : 'POST',
     headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
     },
     body:JSON.stringify(body)
    }).then(resp => resp.json())
  }
}