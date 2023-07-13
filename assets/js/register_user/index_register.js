/** @format */
import { bodyElement } from "../login_user/index_login.js";
function createFormRegister() {
	bodyElement.innerHTML += `
    <section class="form_register_user">
        <div class="content-form-register">
            <input id="email_cd" placeHolder="Seu email" type="email">
            <input id="password_cd" placeHolder="Crie uma senha" type="password">
            <input id="password_verify" placeHolder="Repita sua senha" type="password">
            <button id="saveUser">Save user</button>
        </div>
    </section>
    `;
}
createFormRegister();
