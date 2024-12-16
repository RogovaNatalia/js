'use strict';

//filter

        // const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

        // const shortNames = names.filter(function(name) {
        //     return name.length < 5;
        // });

        // console.log(shortNames);

//map изменить каждый элемент внутри исходного массива

        // const answers = ['IvAn', 'AnnA', 'Hello'];

        // const result = answers.map(item => item.toLowerCase());

        // console.log(result);

                        // let answers = ['IvAn', 'AnnA', 'Hello'];

                        // answers = answers.map(item => item.toLowerCase());

                        // console.log(answers);

//every (true если все элементы выполняют условия то true)   /some (переберает массив и если хотя бы один элемент подходит условию то вернет true)

                    // const some = [4, 1, 'eeff'];
                    // // console.log(some.some(item => typeof(item) === 'number'));
                    // console.log(some.every(item => typeof(item) === 'number'));


//reduce что бы собирать массив в одно целое

        // const arr = [4, 5, 1, 3, 2, 6];

        // const res = arr.reduce((sum, current) => sum + current);

        // console.log(res);


        // const arr = ['apple', 'pear', 'plum'];

        // // const res = arr.reduce((sum, current) => sum + ', ' + current);
        // const res = arr.reduce((sum, current) => `${sum}, ${current}`);

        // console.log(res);

                        // const arr = [4, 5, 1, 3, 2, 6];

                        // const res = arr.reduce((sum, current) => sum + current, 3);

                        // console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);
