import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import {data} from './CForm'
import firebase from "firebase"
import NoData from '../images/undraw_No_data_re_kwbl.svg'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


const config = {
  apiKey: "AIzaSyBe5q0rg76lSKBz1CQOb_6t90zBGAqPdKI",
  authDomain: "authentication-ea753.firebaseapp.com"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess: () => false
  }
}


function LandingPage() {

    const [isSigned, setisSigned] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
          setisSigned(!!user)
            console.log("user", user)
    })
  }, [])

  const signout=(()=>{
    firebase.auth().signOut();
    data.splice(0, data.length);
  })

    return (
        <>
        {isSigned ? (
            <div className="bg-blue-900 md:bg-blue-50 w-full min-h-screen max-h-auto justify-center">
            <div className="p-4 pr-12 text-white bg-blue-900 md:bg-white">
                <div className="flex flex-row justify-end">
                <Link className="bg-red-400 w-max h-max p-3 text-sm" to="/form">Create Campaign</Link>
                <Link className="ml-3 bg-red-400 w-max h-max p-3 text-sm" onClick={signout}>Sign out!</Link>
                </div>    
            </div>
            
            <div className="p-0 md:p-16 mt-4 md:mt-0 flex flex-col md:flex-row flex-wrap">
                {data.length>0?data.map((item,index) => {
                    return (
                        <Card
                        id={index}       
                        name={item.name}
                        description={item.description}
                        followers={item.followers}
                        budgetMin={item.budgetMin}
                        budgetMax={item.budgetMax}
                        location={item.location}
                        category={item.category}
                        />    
                    );
            }):<div  className="p-24 md:p-10 h-64 w-auto sm:h-96 md:w-96 mx-auto mt-5 text-white md:text-blue-900 font-bold md:mx-auto">
                <figure className="px-auto">
                    <img src={NoData} className="bg-white p-4 sm:bg-transparent h-auto" />
                    <figcaption className="ml-0 mt-8 text-center text-lg sm:text-2xl" >No campaign..</figcaption>
                </figure>
            </div>
        }
            </div>
        </div>
          ) : (
            <div className="flex flex-col bg-blue-50 h-screen py-52">
              <h1 className="mx-auto mb-3 text-red-400 text-2xl sm:text-4xl">Welcome to Campaign App</h1>
              <h3 className="mx-auto mb-4 text-red-400 text-base sm:text-2xl"> Signin to create your campaigns</h3>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          )}
          </>   
    )
}

export default LandingPage
