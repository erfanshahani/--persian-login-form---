document.addEventListener('DOMContentLoaded', () => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    // سوئیچ به حالت ثبت‌نام
    signUpButton.addEventListener('click', () => {
        // فعال کردن کلاس CSS که انیمیشن سوئیچ به راست را انجام می‌دهد
        container.classList.add("right-panel-active");
    });

    // سوئیچ به حالت ورود
    signInButton.addEventListener('click', () => {
        // حذف کلاس CSS برای برگشت به حالت پیش‌فرض (ورود)
        container.classList.remove("right-panel-active");
    });
});