import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css;"

function Login() {
    return (
        <div className="login">

            <div className="Login_logo">

            </div>

            <Button type="submit" onClick={signIn}>
                S
            </Button>
            
        </div>
    )
}

export default Login
