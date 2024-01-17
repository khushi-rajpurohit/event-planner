import './login.css';

export default function Login(){
    return (<><div class="form">
    <h2>Login Here</h2>
    <input type="email" name="email" placeholder="Enter Email Here"/>
    <input type="password" name="" placeholder="Enter Password Here"/>
    <button class="btnn"><a href="#">Login</a></button>

    <p class="link">Don't have an account</p><br/>
    <p>Sign up  here </p>
    <p class="liw">Log in with</p>

    <div class="icons">
        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
        <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
        <a href="#"><ion-icon name="logo-google"></ion-icon></a>
        <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
    </div>
    </div>

        
        </>)
}

