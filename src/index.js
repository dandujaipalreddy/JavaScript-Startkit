import {getUsers} from './api/userApi'

getUsers().then(result=>{
  let userBody ="";
  result.forEach(user=>{
  userBody+=`<tr><td>${user.id}</td><td>${user.branch}</td></tr>`
  });
  global.document.getElementById('users').innerHTML=userBody;
})
