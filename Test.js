
let students = ["ahlam","hend","omar","khalid","anas","fatima","zain","wafaa"]

var alphapetLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];
  let randomIndex = Math.floor(Math.random() * alphapetLetters.length);
  let getRandomLetter= alphapetLetters[randomIndex]


    function checkTheName(){

        for(let i = 0 ; i <students.length;i++) {

        if(students[i][0]==getRandomLetter) {

            console.log(`${i} the name ${students[i]} is starting with letter ${getRandomLetter}`)
    


    }


    }
}
 checkTheName()



