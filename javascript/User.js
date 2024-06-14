function checkLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    if (username === 'Zwy' && password === '123') {
        window.open('zwy.html', '_blank');
    } else {
        alert("账号密码错误");
    }
  }
  