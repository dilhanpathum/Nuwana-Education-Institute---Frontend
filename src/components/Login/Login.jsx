import React from 'react'
import { useState,useEffect} from 'react';
import Logo from "../../assets/logo/logo2.png"
import "../../styles/login.css"
import Header from '../Navbar/Header'
import Footer from '../Footer/Footer'
import { useCookies } from 'react-cookie';
import APIService from '../Api/APIService'
import toast from 'react-hot-toast'
const Login = () => {
    const [email,setEmail] =useState('')
    const [password,setPassword] = useState('')
    //set token
    const [token, setToken] = useCookies(['mytoken'])
     const [error,setError] = useState('')

     const loginBtn = () => {
        APIService.LoginUser({email, password})
        .then((resp) => {if(resp.token){
          setToken('mytoken',resp.token)
        }else{
            console.log(resp)
            setError(resp.message)
            if(resp.email!=null){
                toast.error(resp.email)
            }
            if(resp.password!=null){
                toast.error(resp.password)
            }
            if(resp.message!=null){
                toast.error(resp.message)
            }
            setPassword("")
            setEmail("")
        }})
        // .then((resp) => {setToken('mytoken',resp.token))})
        .then(error => console.log(error))
      }
  return (
    <>
  <Header/>
    <section class="bg-gray-50 background dark:bg-gray-900 ">
    <div class=" flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0 ">
        <a href="#" class="flex items-center mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-60 h-41 mr-2" src={Logo} alt="logo"/>
            
        </a>
        <div class="w-full bg-white rounded-lg shadow dark:border lg:mb-20 md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 pb-10">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>

                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required=""/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                            </div>
                            <div class="ml-3 text-sm">
                              <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                    </div>
                    <button type="submit"  onClick={loginBtn} class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                    </p>

            </div>
        </div>
    </div>
  </section>
  <Footer/>

  </>
  )
}

export default Login

