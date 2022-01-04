var qrCodeCert = 0;

function generateCert()
{
	var usCert = document.getElementById("certid").value;
	var usNameRus = document.getElementById("name_ru").value;
	var usNameEng = document.getElementById("name_eng").value;
	var usValidUntilDate = document.getElementById("validuntildate").value;
	var usBirthdayDate = document.getElementById("birthdaydate").value;
	var usNationalPass = document.getElementById("nationalpass").value;

  if(usCert.length <= 0) {
    alert('Введите айди сертификата!');
    return;
  }

  if(usNameRus.length <= 0) {
    alert('Введите ФИО на русском!');
    return;
  }

  if(usNameEng.length <= 0) {
    alert('Введите ФИО на английском!');
    return;
  }

  if(usValidUntilDate.length <= 0) {
    alert('Введите дата окончания сертификата!');
    return;
  }

  if(usBirthdayDate.length <= 0) {
    alert('Введите дату рождения!');
    return;
  }

  if(usNationalPass.length <= 0) {
    alert('Введите паспортные данные!');
    return;
  }

	var finalResultLink = 'https://gosulslugi-covid-cert-status.nasukongalolo.workers.dev/?certid=' + usCert + '&name_ru=' + usNameRus + '&name_eng=' + usNameEng + '&validuntil=' + usValidUntilDate + '&birthday=' + usBirthdayDate + '&nationalpass=' + usNationalPass + '';

  document.getElementById("qrcode").innerHTML = "";
  qrCodeCert = new QRCode(document.getElementById("qrcode"), encodeURI(finalResultLink));

	document.getElementById("qrinfo").innerHTML = "<p>Ваш QR Code:</p>"; 
	document.getElementById("qroriglink").innerHTML = "<p>Прямая ссылка: <a href='" + finalResultLink + "'>" + finalResultLink + "</a></p>";
}

function randomIntFromInterval(min, max) { // min and max included 
		return Math.floor(Math.random() * (max - min + 1) + min)
}

function genCertId()
{
	document.getElementById("certid").value = "";
	document.getElementById("certid").value += randomIntFromInterval(1111, 9999);
	document.getElementById("certid").value += " ";
	document.getElementById("certid").value += randomIntFromInterval(1111, 9999);
	document.getElementById("certid").value += " ";
	document.getElementById("certid").value += randomIntFromInterval(1111, 9999);
	document.getElementById("certid").value += " ";
	document.getElementById("certid").value += randomIntFromInterval(1111, 9999);
}