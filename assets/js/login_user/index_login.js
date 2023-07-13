/** @format */
export { bodyElement };
const bodyElement = document.body;

function createFormLogin() {
	bodyElement.innerHTML += `
    <section class="form_login_user">
        <div class="content_form_login">
            <input id="email_login" placeHolder="Seu email" type="email">
            <input id="password_login" placeHolder="Sua senha" type="password">
            <button id="login">Login</button> 
        </div>
    </section>
    `;
}
createFormLogin();
