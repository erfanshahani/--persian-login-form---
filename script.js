document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // Elements
    // ===============================

    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    const themeBtn = document.getElementById("themeBtn");

    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    const loader = document.getElementById("loader");

    // ===============================
    // Switch Forms
    // ===============================

    signUpButton.addEventListener("click", () => {

        container.classList.add("right-panel-active");

    });

    signInButton.addEventListener("click", () => {

        container.classList.remove("right-panel-active");

    });

    // ===============================
    // Show / Hide Password
    // ===============================

    document.querySelectorAll(".togglePassword").forEach(icon => {

        icon.addEventListener("click", () => {

            const input = document.getElementById(icon.dataset.target);

            if (input.type === "password") {

                input.type = "text";

                icon.classList.replace("fa-eye", "fa-eye-slash");

            } else {

                input.type = "password";

                icon.classList.replace("fa-eye-slash", "fa-eye");

            }

        });

    });

    // ===============================
    // Dark Mode
    // ===============================

    if(localStorage.getItem("theme")==="dark"){

        document.body.classList.add("dark");

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){

            localStorage.setItem("theme","dark");

            themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

        }else{

            localStorage.setItem("theme","light");

            themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

        }

    });

    // ===============================
    // Remember Me
    // ===============================

    const rememberMe=document.getElementById("rememberMe");

    const loginEmail=document.getElementById("loginEmail");

    if(localStorage.getItem("rememberEmail")){

        loginEmail.value=localStorage.getItem("rememberEmail");

        rememberMe.checked=true;

    }

    // ===============================
    // Email Validation
    // ===============================

    function validEmail(email){

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    }

    function showToast(text,color){

        Toastify({

            text:text,

            duration:2500,

            gravity:"top",

            position:"right",

            style:{
                background:color
            }

        }).showToast();


    }
    // ===============================
    // Login Validation
    // ===============================

    loginForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const password=document.getElementById("loginPassword");

        let valid=true;

        document.getElementById("loginEmailError").textContent="";
        document.getElementById("loginPasswordError").textContent="";

        if(!validEmail(loginEmail.value)){

            document.getElementById("loginEmailError").textContent="ایمیل معتبر نیست.";

            valid=false;

        }

        if(password.value.length<8){

            document.getElementById("loginPasswordError").textContent="رمز عبور باید حداقل 8 کاراکتر باشد.";

            valid=false;

        }

        if(!valid){

            showToast("اطلاعات وارد شده صحیح نیست.","#e53935");

            return;

        }

        if(rememberMe.checked){

            localStorage.setItem("rememberEmail",loginEmail.value);

        }else{

            localStorage.removeItem("rememberEmail");

        }

        const btn=document.getElementById("loginBtn");

        btn.classList.add("loading");

        loader.classList.remove("hidden");

        setTimeout(()=>{

            btn.classList.remove("loading");

            loader.classList.add("hidden");

            loginForm.classList.add("success");

            showToast("ورود با موفقیت انجام شد.","#43a047");

        },1800);

    });

    // ===============================
    // Register Validation
    // ===============================

    registerForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const name=document.getElementById("registerName");

        const email=document.getElementById("registerEmail");

        const password=document.getElementById("registerPassword");

        let valid=true;

        document.getElementById("nameError").textContent="";
        document.getElementById("registerEmailError").textContent="";
        document.getElementById("registerPasswordError").textContent="";

        if(name.value.trim().length<3){

            document.getElementById("nameError").textContent="نام باید حداقل 3 کاراکتر باشد.";

            valid=false;

        }

        if(!validEmail(email.value)){

            document.getElementById("registerEmailError").textContent="ایمیل معتبر نیست.";

            valid=false;

        }

        if(password.value.length<8){

            document.getElementById("registerPasswordError").textContent="رمز عبور باید حداقل 8 کاراکتر باشد.";

            valid=false;

        }

        if(!valid){

            showToast("لطفا اطلاعات را کامل کنید.","#e53935");

            return;

        }

        const btn=document.getElementById("registerBtn");

        btn.classList.add("loading");

        loader.classList.remove("hidden");

        setTimeout(()=>{

            btn.classList.remove("loading");

            loader.classList.add("hidden");

            registerForm.classList.add("success");

            showToast("ثبت نام با موفقیت انجام شد.","#43a047");

            container.classList.remove("right-panel-active");

        },1800);

    });

});