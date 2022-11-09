// @ts-ignore
import _ from 'lodash-es';
var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred', 'age': 40, 'active': true }
];
// @ts-ignore
console.log(_.reject(users, function (o) { return !o.active; }));
// => objects for ['fred']
// // `_.matches` 迭代简写
// _.reject(users, { 'age': 40, 'active': true });
// // => objects for ['barney']
//
// // `_.matchesProperty` 迭代简写
// _.reject(users, ['active', false]);
// // => objects for ['fred']
//
// // `_.property` 迭代简写
// _.reject(users, 'active');
// // => objects for ['barney']
//# sourceMappingURL=lodash-collection.js.map