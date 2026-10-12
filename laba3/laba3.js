/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**1
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
    return number >= 0;
}

/**2
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
    let max = a;

    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }

    return max;
}

/**3
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
   // Проверка по горизонтали или вертикали
    if (queen.x === king.x || queen.y === king.y) {
        return true;
    }

    // Проверка по обеим диагоналям
    if (Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)) {
        return true;
    }

    return false;
}


/**4
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
    //Проверяем существование треугольника
    if (a + b <= c || a + c <= b || b + c <= a) {
        return false;
    }

    //Проверяем, равны ли хотя бы две стороны между собой
    return a === b || b === c || a === c;
}

/**5
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
    let result = '';

    //Обрабатываем десятки
    let tens = (num - (num % 10)) / 10;
    if (tens === 1) result += 'X';
    if (tens === 2) result += 'XX';
    if (tens === 3) result += 'XXX';

    //Получаем единицы
    let ones = num % 10;

    //Обрабатываем единицы 
    switch (ones) {
        case 1: result += 'I'; break;
        case 2: result += 'II'; break;
        case 3: result += 'III'; break;
        case 4: result += 'IV'; break;
        case 5: result += 'V'; break;
        case 6: result += 'VI'; break;
        case 7: result += 'VII'; break;
        case 8: result += 'VIII'; break;
        case 9: result += 'IX'; break;
        default: break; // для 0 ничего 
    }

    return result;
}

/**6
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
    let result = '';

    for (let i = 0; i < numberStr.length; i += 1) {
        const char = numberStr[i];
        let word;

        switch (char) {
            case '0': word = 'zero'; break;
            case '1': word = 'one'; break;
            case '2': word = 'two'; break;
            case '3': word = 'three'; break;
            case '4': word = 'four'; break;
            case '5': word = 'five'; break;
            case '6': word = 'six'; break;
            case '7': word = 'seven'; break;
            case '8': word = 'eight'; break;
            case '9': word = 'nine'; break;
            case '-': word = 'minus'; break;
            case '.':
            case ',': word = 'point'; break;
            default: word = undefined; // Если символа нет в списке
        }

        // Если символ распознан, добавляем слово в результат
        if (word !== undefined) {
            if (result === '') {
                result += word;
            } else {
                result += ' ' + word;
            }
        }
    }

    return result;
}


/**7
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        // Если символы на концах не равны, это не палиндром
        if (str[start] !== str[end]) {
        return false;
        }
        // Сдвигаем указатели к центру
        start += 1;
        end -= 1;
    }

    return true;
}

/**8
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
    for (let i = 0; i < str.length; i += 1) {
        // Если текущий символ совпадает с искомой буквой, сразу возвращаем его индекс
        if (str[i] === letter) {
        return i;
        }
    }

    // Если цикл завершился и буква не была найдена, возвращаем -1
    return -1;
}

/**9
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
    // Если передано число 0
    if (num === 0) {
        return digit === 0;
    }

    // на случай отрицательных чисел
    let currentNum = Math.abs(num);

    // Проверяем каждую цифру числа с конца
    while (currentNum > 0) {
        let lastDigit = currentNum % 10; // Получаем последнюю цифру

        if (lastDigit === digit) {
            return true;
        }
        
        // Отбрасываем последнюю цифру через округление вниз
        currentNum = Math.floor(currentNum / 10);
    }

    return false;
}

/**10
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
    let totalSum = 0;

    //Находим полную сумму
    for (let i = 0; i < arr.length; i += 1) {
        totalSum += arr[i];
    }

    let leftSum = 0;

    // Ищем точку баланса
    for (let i = 0; i < arr.length; i += 1) {
        // Правая сумма — это общая сумма минус левая сумма и минус сам текущий элемент
        const rightSum = totalSum - leftSum - arr[i];

        // Если суммы слева и справа равны, возвращаем текущий индекс
        if (leftSum === rightSum) {
        return i;
        }

        // Если не равны, добавляем текущий элемент к левой сумме для следующей итерации
        leftSum += arr[i];
    }

    // Если точка баланса не найдена
    return -1;
}

/**11
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
    //пустую матрицу нужного размера 
    let matrix = [];
    for (let i = 0; i < size; i += 1) {
        matrix[i] = [];
    }

    //Определяем начальные границы и счетчик
    let top = 0;
    let bottom = size - 1;
    let left = 0;
    let right = size - 1;
    let count = 1;

    //Запускаем цикл сужения границ
    while (top <= bottom && left <= right) {
        // Движение влево,вправо по верхней строке
        for (let i = left; i <= right; i += 1) {
        matrix[top][i] = count;
        count += 1;
        }
        top += 1; // верхняя граница смещается вниз

        // Движение сверху, вниз по правому столбцу
        for (let i = top; i <= bottom; i += 1) {
        matrix[i][right] = count;
        count += 1;
        }
        right -= 1; // правая граница смещается влево

        // Движение вправо, влево по нижней строке (если строки еще остались)
        if (top <= bottom) {
        for (let i = right; i >= left; i -= 1) {
            matrix[bottom][i] = count;
            count += 1;
        }
        bottom -= 1; // нижняя граница смещается вверх
        }

        // Движение снизу, вверх по левому столбцу (если столбцы еще остались)
        if (left <= right) {
        for (let i = bottom; i >= top; i -= 1) {
            matrix[i][left] = count;
            count += 1;
        }
        left += 1; // левая граница смещается вправо
        }
    }

    return matrix;
}

/**12
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
    let n = matrix.length;

    // 1. Транспонируем матрицу (меняем элементы по диагонали)
    for (let i = 0; i < n; i += 1) {
        for (let j = i + 1; j < n; j += 1) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
        }
    }

    // 2. Отражаем каждую строку горизонтально (разворачиваем строки без методов Array)
    for (let i = 0; i < n; i += 1) {
        let start = 0;
        let end = n - 1;
        while (start < end) {
        let temp = matrix[i][start];
        matrix[i][start] = matrix[i][end];
        matrix[i][end] = temp;
        
        start += 1;
        end -= 1;
        }
    }

    return matrix;
}

/**13
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
    // Вспомогательная функция
    function quickSort(left, right) {
        if (left >= right) return;

        let i = left;
        let j = right;
        
        let pivotIndex = (left + right) - ((left + right) % 2);
        let pivot = arr[pivotIndex / 2];

        // Разделение массива на две части вокруг опорного элемента
        while (i <= j) {
        while (arr[i] < pivot) {
            i += 1;
        }
        while (arr[j] > pivot) {
            j -= 1;
        }
        
        if (i <= j) {
            // Меняем элементы местами на месте 
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            
            i += 1;
            j -= 1;
        }
        }

        //сортируем левую и правую части
        quickSort(left, j);
        quickSort(i, right);
    }

    //сортировка для всего массива
    quickSort(0, arr.length - 1);
    return arr;
}

/**14
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
    if (str.length <= 2 || iterations === 0) {
        return str;
    }

    function func(currentStr) {
        let evenChars = '';
        let oddChars = '';
        for (let i = 0; i < currentStr.length; i += 1) {
            if (i % 2 === 0) {
                evenChars += currentStr[i];
            } else {
                oddChars += currentStr[i];
            }
        }
        return evenChars + oddChars;
    }

    let current = str;

    for (let i = 1; i <= iterations; i += 1) {
        current = func(current);

        // Если строка вернулась в исходное состояние — нашли период
        if (current === str) {
            // Вычисляем, сколько шагов осталось сделать внутри этого периода
            const remainingIterations = iterations % i;
            
            // Докручиваем оставшиеся шаги
            for (let j = 0; j < remainingIterations; j += 1) {
                current = func(current);
            }
            return current;
        }
    }

    return current;
}

/**15
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
function getNearestBigger(number) {
    let digits = [];
    let temp = number;

    // Разбиваем число на массив цифр в обратном порядке
    while (temp > 0) {
        let digit = temp % 10;
        digits[digits.length] = digit;
        temp = (temp - digit) / 10;
    }

    // Разворачиваем массив цифр, чтобы они шли в правильном порядке
    let left = 0;
    let right = digits.length - 1;
    while (left < right) {
        let t = digits[left];
        digits[left] = digits[right];
        digits[right] = t;
        left += 1;
        right -= 1;
    }

    let n = digits.length;
    let pivot = -1;

    //Ищем первый спад справа налево
    for (let i = n - 2; i >= 0; i -= 1) {
        if (digits[i] < digits[i + 1]) {
        pivot = i;
        break;
        }
    }

    // Если спад не найден, значит число максимальное из возможных
    if (pivot === -1) {
        return number;
    }

    //Ищем цифру справа, которая больше digits[pivot], но минимальна среди них
    let successor = -1;
    for (let i = n - 1; i > pivot; i -= 1) {
        if (digits[i] > digits[pivot]) {
        successor = i;
        break;
        }
    }

    // Меняем местами pivot и successor
    let t = digits[pivot];
    digits[pivot] = digits[successor];
    digits[successor] = t;

    //Разворачиваем всю оставшуюся часть после pivot справа налево
    let start = pivot + 1;
    let end = n - 1;
    while (start < end) {
        let tmp = digits[start];
        digits[start] = digits[end];
        digits[end] = tmp;
        start += 1;
        end -= 1;
    }

    //Собираем массив цифр обратно в число
    let result = 0;
    for (let i = 0; i < n; i += 1) {
        result = result * 10 + digits[i];
    }

    return result;
}

