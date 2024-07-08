
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


  static GetStudents(token){

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

  static GetStudents(token){

    return fetch(baseUrl+'allClassStudents', {
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
}