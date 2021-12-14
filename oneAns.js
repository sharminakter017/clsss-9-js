// student info..

const students = [


      {

         id        : 01 ,
         name      : 'Dihan',
         district  : 'chandpur',
         gender    : 'male',
         gpa       : 5.00,
         grade     : 'A+',

         


      },
      {

        id        : 02 ,
        name      : 'Dihan',
        district  : 'chandpur',
        gender    : 'male',
        gpa       : 5.00,
        grade     : 'A+',

        


     },
     {

        id        : 03 ,
        name      : 'Dihan',
        district  : 'chandpur',
        gender    : 'male',
        gpa       : 5.00,
        grade     : 'A+',

        


     },
     {

        id        : 04 ,
        name      : 'Dihan',
        district  : 'chandpur',
        gender    : 'male',
        gpa       : 5.00,
        grade     : 'A+',

        


     },
     {

        id        : 05 ,
        name      : 'Dihan',
        district  : 'chandpur',
        gender    : 'male',
        gpa       : 5.00,
        grade     : 'A+',

        


     },
     {

        id        : 06 ,
        name      : 'Dihan',
        district  : 'chandpur',
        gender    : 'male',
        gpa       : 5.00,
        grade     : 'A+',

        


     },
     {

        id        : 07,
        name      : 'Dihan',
        district  : 'chandpur',
        gender    : 'male',
        gpa       : 5.00,
        grade     : 'A+',

        


     },
     {

        id        : 08 ,
        name      : 'Dihan',
        district  : 'chandpur',
        gender    : 'male',
        gpa       : 5.00,
        grade     : 'A+',

        


     },
     {

        id        : 09 ,
        name      : 'Dihan',
        district  : 'chandpur',
        gender    : 'male',
        gpa       : 5.00,
        grade     : 'A+',

        


     },
     {

        id        : 10 ,
        name      : 'Dihan',
        district  : 'chandpur',
        gender    : 'male',
        gpa       : 5.00,
        grade     : 'A+',

        


     },




];


let studentsinfo = JSON.stringify (students);
localStorage.setItem('students',studentsinfo);


//  familydata 



const familydata = [

   {
      id      : 0 ,
      name    : 'Sharmin',
      age     : 21,
      skill   : 'wordpress developer',
      phone   : '01790166449',
      gender  : 'Female',
      district: 'chandpur',


   },
   {
       id      : 1 ,
       name    : 'Sharmin',
       age     : 21,
       skill   : 'wordpress developer',
       phone   : '01790166449',
       gender  : 'Female',
       district: 'chandpur',


    },
    {
       id      : 2 ,
       name    : 'Sharmin',
       age     : 21,
       skill   : 'wordpress developer',
       phone   : '01790166449',
       gender  : 'Female',
       district: 'chandpur',


    },
    {
       id      : 3,
       name    : 'Sharmin',
       age     : 21,
       skill   : 'wordpress developer',
       phone   : '01790166449',
       gender  : 'Female',
       district: 'chandpur',


    },
    {
       id      : 4 ,
       name    : 'Sharmin',
       age     : 21,
       skill   : 'wordpress developer',
       phone   : '01790166449',
       gender  : 'Female',
       district: 'chandpur',


    },
    {
       id      : 5 ,
       name    : 'Sharmin',
       age     : 21,
       skill   : 'wordpress developer',
       phone   : '01790166449',
       gender  : 'Female',
       district: 'chandpur',


    },
    {
       id      : 6 ,
       name    : 'Sharmin',
       age     : 21,
       skill   : 'wordpress developer',
       phone   : '01790166449',
       gender  : 'Female',
       district: 'chandpur',


    },
    {
       id      : 7 ,
       name    : 'Sharmin',
       age     : 21,
       skill   : 'wordpress developer',
       phone   : '01790166449',
       gender  : 'Female',
       district: 'chandpur',


    },
    {
       id      : 8 ,
       name    : 'Sharmin',
       age     : 21,
       skill   : 'wordpress developer',
       phone   : '01790166449',
       gender  : 'Female',
       district: 'chandpur',


    },
    {
       id      : 9 ,
       name    : 'Sharmin',
       age     : 21,
       skill   : 'wordpress developer',
       phone   : '01790166449',
       gender  : 'Female',
       district: 'chandpur',


    },
    {
       id      : 10 ,
       name    : 'Sharmin',
       age     : 21,
       skill   : 'wordpress developer',
       phone   : '01790166449',
       gender  : 'Female',
       district: 'chandpur',


    },






];

let info = JSON.stringify(familydata);
localStorage.setItem('familyInfo',info);





// devs info



const devs = [

   {
     id      :   1,
     name    : 'Asraful Haque',
     skill   : 'Mearn-stack',
     district: 'Dhaka',
     gender  : 'Male',


   },
   {
       id      :   2,
       name    : 'Jillur Rahman',
       skill   : 'Wordpress developer',
       district: 'Uttara',
       gender  : 'Male',
 
 
     },
     {
       id      :   3,
       name    : 'Akramul Adnan',
       skill   : 'Laravel',
       district: 'Bhola',
       gender  : 'Male',
 
 
     },
     {
       id      :   4,
       name    : 'Sahriar Somrat',
       skill   : 'Django',
       district: 'Barishal',
       gender  : 'Male',
 
 
     },
     {
       id      :   5,
       name    : 'Sharmin Sultana',
       skill   : 'Golan',
       district: 'Dinajpur',
       gender  : 'Female',
 
 
     },
     {
       id      :   6,
       name    : 'Tahsin',
       skill   : 'java',
       district: 'Cumilla',
       gender  : 'Male',
 
 
     },





];

let data = JSON.stringify (devs);
localStorage.setItem('devsInfo',data);



let alldata = [students, familydata, devs];
console.log(JSON.stringify(alldata));



let allinfo = '[[{"id":1,"name":"Dihan","district":"chandpur","gender":"male","gpa":5,"grade":"A+"},{"id":2,"name":"Dihan","district":"chandpur","gender":"male","gpa":5,"grade":"A+"},{"id":3,"name":"Dihan","district":"chandpur","gender":"male","gpa":5,"grade":"A+"},{"id":4,"name":"Dihan","district":"chandpur","gender":"male","gpa":5,"grade":"A+"},{"id":5,"name":"Dihan","district":"chandpur","gender":"male","gpa":5,"grade":"A+"},{"id":6,"name":"Dihan","district":"chandpur","gender":"male","gpa":5,"grade":"A+"},{"id":7,"name":"Dihan","district":"chandpur","gender":"male","gpa":5,"grade":"A+"},{"id":8,"name":"Dihan","district":"chandpur","gender":"male","gpa":5,"grade":"A+"},{"id":9,"name":"Dihan","district":"chandpur","gender":"male","gpa":5,"grade":"A+"},{"id":10,"name":"Dihan","district":"chandpur","gender":"male","gpa":5,"grade":"A+"}],[{"id":0,"name":"Sharmin","age":21,"skill":"wordpress developer","phone":"01790166449","gender":"Female","district":"chandpur"},{"id":1,"name":"Sharmin","age":21,"skill":"wordpress developer","phone":"01790166449","gender":"Female","district":"chandpur"},{"id":2,"name":"Sharmin","age":21,"skill":"wordpress developer","phone":"01790166449","gender":"Female","district":"chandpur"},{"id":3,"name":"Sharmin","age":21,"skill":"wordpress developer","phone":"01790166449","gender":"Female","district":"chandpur"},{"id":4,"name":"Sharmin","age":21,"skill":"wordpress developer","phone":"01790166449","gender":"Female","district":"chandpur"},{"id":5,"name":"Sharmin","age":21,"skill":"wordpress developer","phone":"01790166449","gender":"Female","district":"chandpur"},{"id":6,"name":"Sharmin","age":21,"skill":"wordpress developer","phone":"01790166449","gender":"Female","district":"chandpur"},{"id":7,"name":"Sharmin","age":21,"skill":"wordpress developer","phone":"01790166449","gender":"Female","district":"chandpur"},{"id":8,"name":"Sharmin","age":21,"skill":"wordpress developer","phone":"01790166449","gender":"Female","district":"chandpur"},{"id":9,"name":"Sharmin","age":21,"skill":"wordpress developer","phone":"01790166449","gender":"Female","district":"chandpur"},{"id":10,"name":"Sharmin","age":21,"skill":"wordpress developer","phone":"01790166449","gender":"Female","district":"chandpur"}],[{"id":1,"name":"Asraful Haque","skill":"Mearn-stack","district":"Dhaka","gender":"Male"},{"id":2,"name":"Jillur Rahman","skill":"Wordpress developer","district":"Uttara","gender":"Male"},{"id":3,"name":"Akramul Adnan","skill":"Laravel","district":"Bhola","gender":"Male"},{"id":4,"name":"Sahriar Somrat","skill":"Django","district":"Barishal","gender":"Male"},{"id":5,"name":"Sharmin Sultana","skill":"Golan","district":"Dinajpur","gender":"Female"},{"id":6,"name":"Tahsin","skill":"java","district":"Cumilla","gender":"Male"}]]';

localStorage.setItem('allinfo', allinfo);




