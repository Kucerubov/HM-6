loginUser = () => {
    const login = 'admin@test.io';
    const password = 'admin1234';

    const enterLogin = prompt("Введите логин" ) ;
    if (enterLogin !== login){
        alert("Неверный логин");
        return;
    }

    const enterPassword = prompt("Введите пароль");

    if (enterPassword !== password){
        alert("Неверный пароль");
        return;
    }

    alert("Успешный вход ");
}

loginUser();