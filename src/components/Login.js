import React from 'react'
import {GoogleLogin} from 'react-google-login'
const clientId = "275676399174-b3h7agfuofkjp4h0qlkj86g145dbvmdg.apps.googleusercontent.com"



export default function Login() {

    const onSuccess = (res) =>{
        console.log("Login success! current user :", res.profileObj)
    }
    const onFailure = (res) =>{
        console.log("Login Failed: " ,res)
    }

  return (
    <div id='signInButton'>
        <GoogleLogin
        clientId={clientId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn = {true}
        />
    </div>
  )
}
