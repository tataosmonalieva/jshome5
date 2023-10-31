//Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
//let arr = [1,2,3,0,4,5,6]
//console.log(arr.map(el => el * 2))

//Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
//let arr = [1, 2, 3, 0, 4, 5, 6]
//console.log(arr.filter(el => el > 0))


//Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
//let arr = [1, 2, -3, 0, 4, -5, 6]
//console.log((arr.filter(el => el < 0, el = 'true'))) -

//Дан массив с числами. Оставьте в нем только отрицательные числа.
//let arr = [1, 2, -3, 0, 4, 5, -6]
//console.log(arr.filter(el => el < 0))

//Дан массив с числами. Оставьте в нем только четные числа. 
//let arr = [1, -2, 3, 0, 4, -5, 6]
//console.log(arr.filter(el => el > 0))

//Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
//let str = ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']
//console.log(str.filter(item => item.length >= 5 ))

//Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
//let arr = [1, 2, -3, 0, -4, 5, -6]
//console.log(arr.filter(el => el < 0))

// [1,2,3,4], ['a','b','c','d'] => [1, 2, 3, 4, 'a', 'b', 'c', 'd']
//let num = [1,2,3,4,] 
//let str = ['a','b','c','d']
//console.log([num + str.join(',')])

// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'hello world']
//let num = [2, 3, 4, 5]
//let str = ' hello world'
//console.log([num + str])

// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
//let num = [2, 3, 4, 5]
//let str = ' hello world'
//console.log([num + str.split('')])

// [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 2, 3, 4, 5]
 //let num = [2, 3, 4, 5]
 //let str = ' hello world '
//console.log([num + str.split('') + num])

//FizzBuzz
//Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
//Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.


    //for (let i = 0; i <=100; i++) { 
        //if (i % 3 === 0 && i % 5 === 0) {
           // console.log('FizzBuzz');
        //} else if (i % 3 === 0) {
            //console.log('Fizz');
        //} else if (i % 5 === 0) {
           // console.log('Buzz');
        //} else {
            //console.log(i)
        //}
    //}
    


    
      


