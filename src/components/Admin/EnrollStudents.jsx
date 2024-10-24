import React,{useState,useEffect} from "react";
import Image from "../../assets/profile/p4.png"
import Content from "./Content";
import { useCookies } from "react-cookie";
import APIService from "../Api/APIService";
function EnrollStudents() {

  const [token, setToken, removeToken] = useCookies(["mytoken"]);
  const [students, setStudents] = useState([]);
  const [status, setStatus] = useState();

  useEffect(() => {
    APIService.GetEnrollStudents(token["mytoken"])
  .then((resp) => {
    console.log(resp)
    setStudents(resp)

  })
  .catch((error) => 

    removeToken(["mytoken"])
);
}, []);
  return (
    <>

    <div class="container  px-1 mx-auto sm:px-1">
      <div class="py-8">
        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-3 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Profile Photo
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Gender
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Subject
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    Grade
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    status
                  </th>
                  
                </tr>
              </thead>
              <tbody>
              {students.map((student) => (
                <tr  key={student.id}>
                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">{student.id}</p>
                  </td>

                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt=""
                            src={Image}
                            class="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">{student.firstname}</p>
                  </td>
                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">{student.lastname}</p>
                  </td>
                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">
                    {student.email}
                    </p>
                  </td>
                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">{student.gender}</p>
                  </td>
                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">{student.subject}</p>
                  </td>
                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">{student.grade}</p>
                  </td>
                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        class="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span class="relative">Active</span>
                    </span>
                  </td>

                 
                </tr>
                 ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default EnrollStudents;
