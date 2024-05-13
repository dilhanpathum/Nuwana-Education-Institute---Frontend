import React from "react";

import { Button } from "flowbite-react";
function Test4() {
  return (
    <div class="container max-w-3xl px-4 mx-auto sm:px-8">
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
                <tr>
                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">1</p>
                  </td>

                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <div class="flex items-center">
                      <div class="flex-shrink-0">
                        <a href="#" class="relative block">
                          <img
                            alt="profil"
                            src="/images/person/6.jpg"
                            class="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                    </div>
                  </td>
                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">Dilhan</p>
                  </td>
                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">Pathum</p>
                  </td>
                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">
                      dilhan@gmail.com
                    </p>
                  </td>
                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">Male</p>
                  </td>
                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">Maths</p>
                  </td>
                  <td class="px-3 py-5 text-sm bg-white border-b border-gray-200">
                    <p class="text-gray-900 whitespace-no-wrap">10</p>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test4;
