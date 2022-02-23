// function getTime(s) {
//   // console.log("fuck")
//   const letters = s.split("");
//   //   let initial = 0;
//   let time = 0;
//   const closest = [];
//   let closestRange = 25;
//   for (let i = 0; i < letters.length; i++) {
//     console.log(i);
//     for (let j = 0; j < letters.length; j++) {
//       if (Math.abs(s.charCodeAt(i) - s.charCodeAt(j)) < closestRange)
//         closestRange = s.charCodeAt(i) - s.charCodeAt(j) < closestRange;
//       closest.pop();
//       closest.pop();
//       closest.push(letters[i]);
//       closest.push[letters[j]];
//     }
//     letters.splice(closest[0], 1);
//     letters.splice(closest[1], 1);
//     time += closestRange;
//     closestRange = 25;
//     s = letters.join("");
//   }
//   return time;
// }

// const getTime2 = (str) => {
//   let position = 0;
//   let time = 0;
//   let rangeOption1;
//   let rangeOption2;
//   time +=
//     str.charCodeAt(0) - 65 < Math.abs(str.charCodeAt(0) - 91)
//       ? str.charCodeAt(0) - 65
//       : Math.abs(str.charCodeAt(0) - 91);

//   for (let i = 0; i < str.length - 1; i++) {
//     if (str[i] < str[i + 1]) {
//       rangeOption1 = str.charCodeAt(i + 1) - str.charCodeAt(i);
//       rangeOption2 = Math.abs(str.charCodeAt(i + 1) - (str.charCodeAt(i) + 26));
//       console.log(rangeOption1 < rangeOption2 ? rangeOption1 : rangeOption2);
//       time += rangeOption1 < rangeOption2 ? rangeOption1 : rangeOption2;
//     } else {
//       rangeOption1 = str.charCodeAt(i) - str.charCodeAt(i + 1);
//       rangeOption2 = Math.abs(str.charCodeAt(i) - (str.charCodeAt(i + 1) + 26));
//       console.log(rangeOption1 < rangeOption2 ? rangeOption1 : rangeOption2);
//       time += rangeOption1 < rangeOption2 ? rangeOption1 : rangeOption2;
//     }
//   }
//   console.log(str);
//   console.log(time);
//   return time;
// };

// const optimalPoint = (magic, dist) => {
//   let index = 0;
//   const isValidPath = (magic, dist, index) =>
//     magic.reduce((a, c, i) => (a + c - dist[i] < 0 ? NaN : a + c - dist[i]), 0);
//   while (!isValidPath(magic, dist) && index < magic.length) {
//     index += 1;
//     magic = magic.slice(1);
//     dist = dist.slice(1);
//   }

//   return index >= magic.length ? -1 : index;
// };

// const strokesRequired = (picture) => {
//   let fills = 1;
//   const letterInfirstRow = [];
//   for (let i = 0; i < picture.length; i++) {
//     for (let j = 0; j < picture[i].length - 1; j++) {
//       if (picture[i][j] !== picture[i][j + 1]) {
//         if (i === 0 && !letterInfirstRow.includes(picture[i][j + 1])) {
//           letterInfirstRow.push(picture[i][j + 1]);
//           fills += 1;
//         } else {
//           if (picture[i][j + 1] !== picture[i - 1][j + 1]) {
//             console.log(i, j, picture[i][j]);

//             if (
//               !(
//                 picture[i][j + 2] &&
//                 picture[i][j + 1] === picture[i][j + 2] &&
//                 picture[i][j + 2] === picture[i - 1][j + 2]
//               )
//             )
//               fills += 1;
//           }
//         }
//       }
//     }
//   }
//   return fills;
// };

// const magic = [0, 5, 5, 4];
// const dist = [2, 3, 4, 2];

// console.log(strokesRequired(["bbba", "abba", "acaa", "aaac"]));
