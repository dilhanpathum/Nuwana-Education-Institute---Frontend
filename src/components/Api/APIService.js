
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
  static GetAttendennce(token,body){

    return fetch(baseUrl+'attendence', {
     'method' : 'POST',
     headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
     },
     body:JSON.stringify(body)
    }).then(resp => resp.json())
  }

  static Enroll(token,body){

    return fetch(baseUrl+'enroll', {
     'method' : 'POST',
     headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
     },
     body:JSON.stringify(body)
    }).then(resp => resp.json())

  }


  static Pending(token){

    return fetch(baseUrl+'students', {
     'method' : 'GET',
     headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
     },
    }).then(resp => resp.json())
    
  }

  static updateStatus(token,body){

    return fetch(baseUrl+'updateStatus', {
     'method' : 'PUT',
     headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
     },
     body:JSON.stringify(body)
    }).then(resp => resp.json())
  }

  static GetEnrollStudents(token){

    return fetch(baseUrl+'acceptStudents', {
     'method' : 'GET',
     headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
     },
    }).then(resp => resp.json())
  }

  static GetAllTeachers(token){

    return fetch(baseUrl+'teachers', {
     'method' : 'GET',
     headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
     },
    }).then(resp => resp.json())
  }

  static GetAllStudents(token){

    return fetch(baseUrl+'allStudents', {
     'method' : 'GET',
     headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
     },
    }).then(resp => resp.json())
  }

  static updateUser(token,body){

    return fetch(baseUrl+'edit', {
     'method' : 'PUT',
     headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
     },
     body:JSON.stringify(body)
    }).then(resp => resp.json())
  }


  static payment(token){

    return fetch(baseUrl+'payment', {
     'method' : 'GET',
     headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
     },
    }).then(resp => resp.json())
  }

  static feedback(token,score){
    
    console.log(score)
    return fetch(baseUrl+`chat?prompt=${score}`, {
     'method' : 'GET',
     headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
     },
    }).then(resp => resp.json())
  }

  static saveMarks(token,body){
    console.log(body)

    return fetch(baseUrl+'saveMarks', {
     'method' : 'Post',
     headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${token}`
     },
     body:JSON.stringify(body)
    }).then(resp => resp.json())
  }

  static getMarks(token){
    
    return fetch(baseUrl+'getMarks', {
     'method' : 'GET',
     headers:{
        'Content-Type' : 'application/json',

     },
    }).then(resp => resp.json())
  }
}