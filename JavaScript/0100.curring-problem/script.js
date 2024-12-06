// function curry(func) {
//     return function curried(...args) {
//         if (args.length >= func.length) {
//             return func.apply(this, args);
//         } else {
//             return function (...args2) {
//                 return curried.apply(this, args2);
//             }
//         }
//     };
// };
// const sum = (x,y,z,j) => x+y+z+j;
// const curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3)(4));

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                // apply는 호출 시마다 새로운 인자들만 넘겨주는 방식이기 때문에, 기존의 인자들을 계속해서 누적하려면 args와 args2를 합쳐서 넘겨줘야 한다
                return curried.apply(this, [...args, ...args2]);
            }
        }
    };
};
const sum = (x,y,z,j) => x+y+z+j;
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)(4));