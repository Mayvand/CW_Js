/**
 * Note - описание одной заметки
 * Notes - класс для работы с заметками
 * NoteUI - класс для определения графического интерфейса
 */

// const note = new Note({title: 'title1', content: 'content1'});

// [...[1, 2, 3,], ...[4, 5, 6]] -> [1, 2, 3, 4, 5, 6]

import NoteUI, { a as a1, b1 } from './NoteUI.js';

// const notes = new Notes();

new NoteUI('#root');

console.log(a1, b1);

// let f = 20;

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(30), 3000);
//     setTimeout(() => reject(40), 4000);
// });

// promise
//     .then((res) => new Promise ((resolve, rej) => {
//         setTimeout(resolve(res + 40), 4000)
//     }))
//     .then(res => f = res)
//     .catch((err) => f = err)
//     .finally(() => console.log('Промис выполнен'))

// console.log(promise);
// console.log(f);

// const xmlHTTPPromise = (url, method = 'GET') => {
//     return new Promise((res, rej) => {
//         let xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.send();
//         xhr.onload = function () {
//             if (xhr.status !== 200) {
//                 rej(new Error(`${xhr.status}: ${xhr.statusText}`))
//             } else {
//                 res (xhr.response)
//             }
//         }
//         xhr.onprogress = function(event){
//             if (event.lengthComputable){
//                 console.log(`${event.loaded / event.total * 100}%`);
//             } else {
//                 console.log(`100%`);
//             }
//         }
//         xhr.onerror = function () {
//             rej('Запрос не удался');
//         }
//     })
// }

// const resp = xmlHTTPPromise('https://jsonplaceholder.typicode.com/todos1');

// resp
//     .then((res) => {
//         console.log(JSON.parse(res));
//     })
//     .catch(err => {
//         console.log(err);
//     })

// const p1 = new Promise((res, rej) => {
//     setTimeout(() => res(1), 3000);
// });
// const p2 = new Promise((res, rej) => {
//     setTimeout(() => res(2), 5000);
// });
// const p3 = new Promise((res, rej) => {
//     setTimeout(() => res(3), 2000);
// });

// Promise.all([p1, p2, p3])
//     .then(res => console.log(res))
//     .catch(res => console.log(res));
// Promise.race([p1, p2, p3])
//     .then(res => console.log(res))
//     .catch(res => console.log(res));
// Promise.resolve();
// Promise.reject();

// async function f(){
//     return 34;
// }

// const a = f();
