/** @format */

const email = document.getElementById("email_cd");
const password = document.getElementById("password_cd");
const passwordVerify = document.getElementById("password_verify");
const saveUser = document.getElementById("saveUser");

function createNewUser() {
	saveUser.addEventListener("click", () => {
		const emailValue = email.value;
		const passwordValue = password.value;
		const verifyValue = passwordVerify.value;

		if (emailValue != "" && passwordValue != "" && verifyValue != "") {
			console.log("todos campos completos");
			if (emailValue.indexOf("@") !== -1) {
				console.log("campo com @");
				if (passwordValue.length >= 4 && verifyValue.length >= 4) {
					console.log("os campos de senha tem mais de 4 digitos");
					if (passwordValue === verifyValue) {
						console.log("as senhas sao iguais");
						const idDateExclusive = Date.now();
						const accountNewValues = {
							email: emailValue,
							password: passwordValue,
							verify: verifyValue,
						};

						localStorage.setItem(
							`account_${idDateExclusive}`,
							JSON.stringify(accountNewValues)
						);
					}
				}
			}
		}
	});
}
createNewUser();

const emailLogin = document.getElementById("email_login");
const passwordLogin = document.getElementById("password_login");
const toDoLogin = document.getElementById("login");
const idDateExclusive = Date.now();
function newLogin(idDateExclusive) {
	const emailLoginValue = emailLogin.value;
	const passwordLoginValue = passwordLogin.value;

	toDoLogin.addEventListener("click", () => {
		const storedAccount = JSON.parse(
			localStorage.getItem(`account_${idDateExclusive}`)
		);
		if (storedAccount && emailLoginValue === storedAccount.email) {
			alert("email esta correta");
			if (storedAccount && passwordLoginValue === storedAccount.password) {
				console.log("senha correta");
			} else {
				console.log("senha errada");
			}
		} else {
			alert("email nao existe");
		}
	});
}
newLogin();
