import React from 'react'
import {GoogleLogout} from 'react-google-login'
const clientId = "275676399174-b3h7agfuofkjp4h0qlkj86g145dbvmdg.apps.googleusercontent.com"

export default function logout (){

    const onSuccess = () =>{
        console.log("Logout successfully")
    }

    return(
        <div id='signOutButton'>
            <GoogleLogout
            clientId={clientId}
            buttonText={'Logout'}
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
}