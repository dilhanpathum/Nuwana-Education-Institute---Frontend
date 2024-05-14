import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import place1 from "../../assets/medal/1.png"
import place2 from "../../assets/medal/2.png"
import place3 from "../../assets/medal/3.png"
import place4 from "../../assets/medal/4.png"
import place5 from "../../assets/medal/5.png"
export default function Leaderboard() {
    return (
        <>
        <MDBContainer className="py-5">
          <MDBRow>
          <MDBCol md="12" xl="8">

                <div class="container flex flex-col items-center justify-center w-full mx-auto">
                    <ul class="flex flex-col md:w-full">
                        <li class="flex flex-row mb-2 border-gray-400">
                            <div class="shadow border select-none cursor-pointer bg-yellow-400 dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                    <a href="#" class="relative block">
                                        <img alt="profil" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" class="mx-auto object-cover rounded-full border-white  h-10 w-10 " />
                                    </a>
                                </div>
                                <div class="flex-1 pl-1 md:mr-16">
                                    <div class="text-lg text-white">
                                        Dilhan Pathum
                                    </div>
                                    
                                </div>
                                <div class="text-lg text-white">
                                    100
                                </div>
                                <div class=" items-center flex   justify-end h-12 w-12   ml-4">

                                        <img alt="profil" src={place1} class="mx-auto object-cover h-12 w-12" />
                                    
                                </div>
                            </div>
                        </li>

                    </ul>
                

                    <ul class="flex flex-col md:w-full">
                        <li class="flex flex-row mb-2 border-gray-400">
                            <div class="shadow border select-none cursor-pointer bg-gray-700 dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                    <a href="#" class="relative block">
                                        <img alt="profil" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" class="mx-auto object-cover rounded-full border-white  h-10 w-10 " />
                                    </a>
                                </div>
                                <div class="flex-1 pl-1 md:mr-16">
                                    <div class="text-lg text-white">
                                        Dilhan Pathum
                                    </div>
                                    
                                </div>
                                <div class="text-lg text-white">
                                    100
                                </div>
                                <div class=" items-center flex   justify-end h-12 w-12   ml-4">

                                        <img alt="profil" src={place2} class="mx-auto object-cover h-12 w-12" />
                                    
                                </div>
                            </div>
                        </li>

                    </ul>

                    <ul class="flex flex-col md:w-full">
                        <li class="flex flex-row mb-2 border-gray-400">
                            <div class="shadow border select-none cursor-pointer bg-red-800 dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                    <a href="#" class="relative block">
                                        <img alt="profil" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" class="mx-auto object-cover rounded-full border-white  h-10 w-10 " />
                                    </a>
                                </div>
                                <div class="flex-1 pl-1 md:mr-16">
                                    <div class="text-lg text-white">
                                        Dilhan Pathum
                                    </div>
                                    
                                </div>
                                <div class="text-lg text-white">
                                    100
                                </div>
                                <div class=" items-center flex   justify-end h-12 w-12   ml-4">

                                        <img alt="profil" src={place3} class="mx-auto object-cover h-12 w-12" />
                                    
                                </div>
                            </div>
                        </li>

                    </ul>

                    <ul class="flex flex-col md:w-full">
                        <li class="flex flex-row mb-2 border-gray-400">
                            <div class="shadow border select-none cursor-pointer bg-gray-200 dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                    <a href="#" class="relative block">
                                        <img alt="profil" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" class="mx-auto object-cover rounded-full border-white  h-10 w-10 " />
                                    </a>
                                </div>
                                <div class="flex-1 pl-1 md:mr-16">
                                    <div class="text-lg text-black">
                                        Dilhan Pathum
                                    </div>
                                    
                                </div>
                                <div class="text-lg text-black">
                                    100
                                </div>
                                <div class=" items-center flex   justify-end h-12 w-12   ml-4">

                                        <img alt="profil" src={place4} class="mx-auto object-cover h-12 w-12" />
                                    
                                </div>
                            </div>
                        </li>

                    </ul>

                    <ul class="flex flex-col md:w-full">
                        <li class="flex flex-row mb-2 border-gray-400">
                            <div class="shadow border select-none cursor-pointer bg-gray-200 dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                    <a href="#" class="relative block">
                                        <img alt="profil" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp" class="mx-auto object-cover rounded-full border-white  h-10 w-10 " />
                                    </a>
                                </div>
                                <div class="flex-1 pl-1 md:mr-16">
                                    <div class="text-lg text-black">
                                        Dilhan Pathum
                                    </div>
                                    
                                </div>
                                <div class="text-lg text-black">
                                    100
                                </div>
                                <div class=" items-center flex   justify-end h-12 w-12   ml-4">

                                        <img alt="profil" src={place5} class="mx-auto object-cover h-12 w-12" />
                                    
                                </div>
                            </div>
                        </li>

                    </ul>
                    </div>

                </MDBCol >

                <MDBCol md="12" xl="4">
                <div class="container flex flex-col items-center justify-center w-full mx-auto">

            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4 flex justify-content-center">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Julie L. Arsenault</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  @Programmer <span className="mx-2">|</span> <a href="#!">mdbootstrap.com</a>
                </MDBCardText>
                <div className="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="facebook" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating className="mx-1">
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="skype" size="lg" />
                  </MDBBtn>
                </div>
                <MDBBtn rounded size="lg">
                  Message now
                </MDBBtn>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">8471</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Wallets Balance</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">8512</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">4751</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Total Transactions</MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
            </div>
          </MDBCol >
    
            
          </MDBRow>
          </MDBContainer>
          
         </>
    )
}
