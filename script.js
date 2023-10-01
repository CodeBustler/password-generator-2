const inputBox = document.querySelector(".generated-password"),
	copyPassword = document.querySelector(".fa-copy"),
	generatePassword = document.querySelector(".generatePassword"),
	length = 20;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	lowerCase = "abcdefghijklmnopqrstuvwxyz",
	numbers = "0123456789",
	symbols = "!@#$%^&*()_+?><,.~|?/`";

const allCharacter = upperCase + lowerCase + numbers + symbols;

function randomPassword() {
	let password = "";
	password += upperCase[Math.floor(Math.random() * upperCase.length)];
	password += lowerCase[Math.floor(Math.random() * upperCase.length)];
	password += numbers[Math.floor(Math.random() * numbers.length)];
	password += numbers[Math.floor(Math.random() * numbers.length)];
	password += symbols[Math.floor(Math.random() * symbols.length)];

	while (password.length < length) {
		password +=
			allCharacter[Math.floor(Math.random() * allCharacter.length)];
	}
	inputBox.value = password;
}

function copyToClipboard() {
	inputBox.select();
	document.execCommand("copy");
	alert("Password copied to clipboard");
}

generatePassword.addEventListener("click", randomPassword);
copyPassword.addEventListener("click", copyToClipboard);
