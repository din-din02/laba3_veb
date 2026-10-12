// 1
// function isPositive(number) {
//     return number >= 0;
// }
// console.log(isPositive(10))

// 2
// function getMaxNumber(a, b, c) {
//     let max = a;

//     if (b > max) {
//         max = b;
//     }
//     if (c > max) {
//         max = c;
//     }

//     return max;
// }
// console.log(getMaxNumber(-5,0,5))

// 3
// function canQueenCaptureKing(queen, king) {
//    // Проверка по горизонтали или вертикали
//     if (queen.x === king.x || queen.y === king.y) {
//         return true;
//     }

//     // Проверка по обеим диагоналям
//     if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
//         return true;
//     }

//     return false;
// }
// console.log(canQueenCaptureKing({x: 1, y: 1}, {x: 2, y: 8}))

// 4
// function isIsoscelesTriangle(a, b, c) {
//     //Проверяем существование треугольника
//     if (a + b <= c || a + c <= b || b + c <= a) {
//         return false;
//     }

//     //Проверяем, равны ли хотя бы две стороны между собой
//     return a === b || b === c || a === c;
// }
// console.log(isIsoscelesTriangle(1,2,3))

// 5
// function convertToRomanNumerals(num) {
//     let result = '';

//     // Обрабатываем десятки
//     let tens = (num - (num % 10)) / 10;
//     if (tens === 1) result += 'X';
//     if (tens === 2) result += 'XX';
//     if (tens === 3) result += 'XXX';

//     // Получаем единицы
//     let ones = num % 10;

//     //Обрабатываем единицы 
//     switch (ones) {
//         case 1: result += 'I'; break;
//         case 2: result += 'II'; break;
//         case 3: result += 'III'; break;
//         case 4: result += 'IV'; break;
//         case 5: result += 'V'; break;
//         case 6: result += 'VI'; break;
//         case 7: result += 'VII'; break;
//         case 8: result += 'VIII'; break;
//         case 9: result += 'IX'; break;
//         default: break; // для 0 ничего 
//     }

//     return result;
// }
// console.log(convertToRomanNumerals(26))

// 6
// function convertNumberToString(numberStr) {
//     let result = '';

//     for (let i = 0; i < numberStr.length; i += 1) {
//         const char = numberStr[i];
//         let word;

//         switch (char) {
//             case '0': word = 'zero'; break;
//             case '1': word = 'one'; break;
//             case '2': word = 'two'; break;
//             case '3': word = 'three'; break;
//             case '4': word = 'four'; break;
//             case '5': word = 'five'; break;
//             case '6': word = 'six'; break;
//             case '7': word = 'seven'; break;
//             case '8': word = 'eight'; break;
//             case '9': word = 'nine'; break;
//             case '-': word = 'minus'; break;
//             case '.':
//             case ',': word = 'point'; break;
//             default: word = undefined; // Если символа нет в списке
//         }

//         // Если символ распознан, добавляем слово в результат
//         if (word !== undefined) {
//             if (result === '') {
//                 result += word;
//             } else {
//                 result += ' ' + word;
//             }
//         }
//     }

//     return result;
// }
// console.log(convertNumberToString('-10'))

// 7
// function isPalindrome(str) {
//     let start = 0;
//     let end = str.length - 1;

//     while (start < end) {
//         // Если символы на концах не равны, это не палиндром
//         if (str[start] !== str[end]) {
//         return false;
//         }
//         // Сдвигаем указатели к центру
//         start += 1;
//         end -= 1;
//     }

//     return true;
// }
// console.log(isPalindrome('qweqwe'))

// 8
// function getIndexOf(str, letter) {
//     for (let i = 0; i < str.length; i += 1) {
//         // Если текущий символ совпадает с искомой буквой, сразу возвращаем его индекс
//         if (str[i] === letter) {
//         return i;
//         }
//     }

//     // Если цикл завершился и буква не была найдена, возвращаем -1
//     return -1;
// }
// console.log(getIndexOf('qwerty', 't'))

// 9
// function isContainNumber(num, digit) {
//     // Если передано число 0
//     if (num === 0) {
//         return digit === 0;
//     }

//     // Инициализируем currentNum и берем модуль на случай отрицательных чисел
//     let currentNum = Math.abs(num);

//     // Проверяем каждую цифру числа с конца
//     while (currentNum > 0) {
//         let lastDigit = currentNum % 10; // Получаем последнюю цифру

//         if (lastDigit === digit) {
//             return true;
//         }
        
//         // Отбрасываем последнюю цифру через округление вниз
//         currentNum = Math.floor(currentNum / 10);
//     }

//     return false;
// }

// // Теперь этот вызов вернет true
// console.log(isContainNumber(123450, 5)); 

// 10
// function getBalanceIndex(arr) {
//     let totalSum = 0;

//     //Находим полную сумму
//     for (let i = 0; i < arr.length; i += 1) {
//         totalSum += arr[i];
//     }

//     let leftSum = 0;

//     // Ищем среднюю точку 
//     for (let i = 0; i < arr.length; i += 1) {
//         // Правая сумма — это общая сумма минус левая сумма и минус сам текущий элемент
//         const rightSum = totalSum - leftSum - arr[i];

//         // Если суммы слева и справа равны, возвращаем текущий индекс
//         if (leftSum === rightSum) {
//         return i;
//         }

//         // Если не равны, добавляем текущий элемент к левой сумме для следующей итерации
//         leftSum += arr[i];
//     }

//     // Если точка баланса не найдена
//     return -1;
// }
// console.log(getBalanceIndex([2, 3, 9, 5]))

// 11
// function getSpiralMatrix(size) {
//     //пустую матрицу нужного размера 
//     let matrix = [];
//     for (let i = 0; i < size; i += 1) {
//         matrix[i] = [];
//     }

//     //Определяем начальные границы и счетчик
//     let top = 0;
//     let bottom = size - 1;
//     let left = 0;
//     let right = size - 1;
//     let count = 1;

//     //Запускаем цикл сужения границ
//     while (top <= bottom && left <= right) {
//         // Движение влево,вправо по верхней строке
//         for (let i = left; i <= right; i += 1) {
//         matrix[top][i] = count;
//         count += 1;
//         }
//         top += 1; // верхняя граница смещается вниз

//         // Движение сверху, вниз по правому столбцу
//         for (let i = top; i <= bottom; i += 1) {
//         matrix[i][right] = count;
//         count += 1;
//         }
//         right -= 1; // правая граница смещается влево

//         // Движение вправо, влево по нижней строке (если строки еще остались)
//         if (top <= bottom) {
//         for (let i = right; i >= left; i -= 1) {
//             matrix[bottom][i] = count;
//             count += 1;
//         }
//         bottom -= 1; // нижняя граница смещается вверх
//         }

//         // Движение снизу, вверх по левому столбцу (если столбцы еще остались)
//         if (left <= right) {
//         for (let i = bottom; i >= top; i -= 1) {
//             matrix[i][left] = count;
//             count += 1;
//         }
//         left += 1; // левая граница смещается вправо
//         }
//     }

//     return matrix;
// }
// console.log(getSpiralMatrix(4))

// 12
// function rotateMatrix(matrix) {
//     let n = matrix.length;

//     // 1. Транспонируем матрицу (меняем элементы по диагонали)
//     for (let i = 0; i < n; i += 1) {
//         for (let j = i + 1; j < n; j += 1) {
//         let temp = matrix[i][j];
//         matrix[i][j] = matrix[j][i];
//         matrix[j][i] = temp;
//         }
//     }

//     // 2. Отражаем каждую строку горизонтально (разворачиваем строки без методов Array)
//     for (let i = 0; i < n; i += 1) {
//         let start = 0;
//         let end = n - 1;
//         while (start < end) {
//         let temp = matrix[i][start];
//         matrix[i][start] = matrix[i][end];
//         matrix[i][end] = temp;
        
//         start += 1;
//         end -= 1;
//         }
//     }

//     return matrix;
// }
// console.log(rotateMatrix([                 
//     [1, 2, 3],       
//     [4, 5, 6], 
//     [7, 8, 9]     
// ]  ))

// 13
// function sortByAsc(arr) {
//     // Вспомогательная функция
//     function quickSort(left, right) {
//         if (left >= right) return;

//         let i = left;
//         let j = right;
        
//         let pivotIndex = (left + right) - ((left + right) % 2);
//         let pivot = arr[pivotIndex / 2];

//         // Разделение массива на две части вокруг опорного элемента
//         while (i <= j) {
//         while (arr[i] < pivot) {
//             i += 1;
//         }
//         while (arr[j] > pivot) {
//             j -= 1;
//         }
        
//         if (i <= j) {
//             // Меняем элементы местами на месте 
//             const temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
            
//             i += 1;
//             j -= 1;
//         }
//         }

//         //сортируем левую и правую части
//         quickSort(left, j);
//         quickSort(i, right);
//     }

//     //сортировка для всего массива
//     quickSort(0, arr.length - 1);
//     return arr;
// }
// console.log(sortByAsc([-2, 9, 5, -3]))

// 14
// function shuffleChar(str, iterations) {
//     if (str.length <= 2 || iterations === 0) {
//         return str;
//     }

//     function func(currentStr) {
//         let evenChars = '';
//         let oddChars = '';
//         for (let i = 0; i < currentStr.length; i += 1) {
//             if (i % 2 === 0) {
//                 evenChars += currentStr[i];
//             } else {
//                 oddChars += currentStr[i];
//             }
//         }
//         return evenChars + oddChars;
//     }

//     let current = str;

//     for (let i = 1; i <= iterations; i += 1) {
//         current = func(current);

//         // Если строка вернулась в исходное состояние — нашли период
//         if (current === str) {
//             // Вычисляем, сколько шагов осталось сделать внутри этого периода
//             const remainingIterations = iterations % i;
            
//             // Докручиваем оставшиеся шаги
//             for (let j = 0; j < remainingIterations; j += 1) {
//                 current = func(current);
//             }
//             return current;
//         }
//     }

//     return current;
// }
// console.log(shuffleChar('qwerty', 1))

// 15
// function getNearestBigger(number) {
//     let digits = [];
//     let temp = number;

//     // Разбиваем число на массив цифр в обратном порядке
//     while (temp > 0) {
//         let digit = temp % 10;
//         digits[digits.length] = digit;
//         temp = (temp - digit) / 10;
//     }

//     // Разворачиваем массив цифр, чтобы они шли в правильном порядке
//     let left = 0;
//     let right = digits.length - 1;
//     while (left < right) {
//         let t = digits[left];
//         digits[left] = digits[right];
//         digits[right] = t;
//         left += 1;
//         right -= 1;
//     }

//     let n = digits.length;
//     let pivot = -1;

//     //Ищем первый спад справа налево
//     for (let i = n - 2; i >= 0; i -= 1) {
//         if (digits[i] < digits[i + 1]) {
//         pivot = i;
//         break;
//         }
//     }

//     // Если спад не найден, значит число максимальное из возможных
//     if (pivot === -1) {
//         return number;
//     }

//     //Ищем цифру справа, которая больше digits[pivot], но минимальна среди них
//     let successor = -1;
//     for (let i = n - 1; i > pivot; i -= 1) {
//         if (digits[i] > digits[pivot]) {
//         successor = i;
//         break;
//         }
//     }

//     // Меняем местами pivot и successor
//     let t = digits[pivot];
//     digits[pivot] = digits[successor];
//     digits[successor] = t;

//     //Разворачиваем всю оставшуюся часть после pivot справа налево
//     let start = pivot + 1;
//     let end = n - 1;
//     while (start < end) {
//         let tmp = digits[start];
//         digits[start] = digits[end];
//         digits[end] = tmp;
//         start += 1;
//         end -= 1;
//     }

//     //Собираем массив цифр обратно в число
//     let result = 0;
//     for (let i = 0; i < n; i += 1) {
//         result = result * 10 + digits[i];
//     }

//     return result;
// }
// console.log(getNearestBigger(321321))