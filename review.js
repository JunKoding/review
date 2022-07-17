"use strict";

console.log('1');
//setTimeout(() => console.log('2'), 2000);
console.log('3');

function printImmediately(print) {
  print();
};
printImmediately(() => console.log('hello world~'));

function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
};
printWithDelay(() => console.log('async callback'), 2000);

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if(
        (id === 'jun') && (password === 'seony') ||
        (id === 'seony') && (password === 'jun')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(users, onSuccess, onError) {
    setTimeout(() => {
      if(user === 'jun') {
        onSuccess({name: 'jun', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStroage = new UserStorage();
const id = prompt('아이디를 입력하시오');
const password = prompt('비밀번호를 입력하시오');

userStroage.loginUser(
  id,
  password,
  user => {
    userStroage.getRoles(
      user,
      userWithRole => {
        alert('안녕하세요 ${name}님, 당신은 ${userWithRole.role} 역할입니다.');
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);