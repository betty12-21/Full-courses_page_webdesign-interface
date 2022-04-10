angular.module("myApp",["ui.router"])
   .config(function ($stateProvider,$urlRouterProvider) {
        $stateProvider
            .state("home",{
                url:"/",
                views:{
                    main:{
                        template:"<h1>Home</h1>"
                    }
                }
            })
            .state("fourm",{
                url:"/fourm",
                views:{
                    main:{
                        template:"<h1>Fourm</h1>"
                    }
                }
            })
            .state("store",{
                url:"/store",
                views:{
                    main:{
                        templateUrl:"templates/store.html",
                        controller:"storeCtrl"
                    }
                }
            })
            .state("store.elect",{
                url:"/elect",
                views:{
                    sub:{
                        templateUrl:"templates/elect.html"
                    }
                }
            })
            .state("store.cloth",{
                url:"/cloth",
                views:{
                    sub:{
                        templateUrl:"templates/cloth.html"
                    }
                }
            })

            .state("store.food",{
                url:"/food",
                views:{
                    sub:{
                        templateUrl:"templates/food.html"
                    }
                }
            })
       $urlRouterProvider.otherwise("/")
   })
    .controller("storeCtrl",function ($scope,$rootScope,$state,$timeout,$interval) {
        $scope.elect=[
            {name:"Samsung Galaxy A80",img:'phones/e1.png',price:85000, company:"samsung",condition:"New"},
            {name:"Huawei Mate 30" ,img: 'phones/e2.jpg',price:45000, company:"huawei",condition:"New"},
            {name:"Iphone 11" ,img:'phones/e3.jpg',price:90000,company:"iphone",condition:"New"},
            {name:"Samsung Note20" ,img:'phones/e4.png',price:90000,company:"samsung",condition:"New"},
            {name:"Huawei MateX",img:'phones/e5.jpg',price:750000,company:"huawei",condition:"New"},
            {name:"Iphone12",img:'phones/e6.jpg',price:99500,company:"iphone",condition:"New"},
            {name:"Samsung Galaxy Fold2",img: 'phones/e7.jpg',price:80000,company:"samsung",condition:"New"},
            {name:"Huawei p40",img:'phones/e8.jpg',price:60000,company:"huawei",condition:"New"},
            {name:"Iphone7",img:'phones/m1.jpg',price:25000,company:"iphone",condition:"New"},
            {name:"Iphone Mini",img:'phones/m2.jpg',price:16000,company:"iphone",condition:"New"},
            {name:"Samsung Galaxy S9",img:'phones/m3.jpg',price:37000,company:"samsung",condition:"New"},
            {name:"Samsung Galaxy s10",img:'phones/m4.jpg',price:39500,company:"samsung",condition:"New"},
            {name:"Iphone Xr",img:'phones/m5.jpg',price:39550,company:"iphone",condition:"New"},
            {name:"Huawei Y9",img:'phones/m6.jpg',price:39000,company:"huawei",condition:"New"},
            {name:"Iphone X",img:'phones/m7.jpg',price:30000,company:"iphone",condition:"New"},
            {name:"Samsung Galaxy Note8",img:'phones/m8.jpeg',price:39500,company:"samsung",condition:"New"},
            {name:"Huawei Y7",img:'phones/c1.webp',price:19700,company:"huawei",condition:"New"},
            {name:"Iphone Mini",img:'phones/c2.jpg',price:15400,company:"iphone",condition:"New"},
            {name:"Samsung Galaxy J3",img:'phones/c3.jpg',price:12500,company:"samsung",condition:"New"},
            {name:"Huawei Nove5",img:'phones/c4.webp',price:19999,company:"huawei",condition:"New"},
            {name:"Iphone Se",img:'phones/c5.jpg',price:11940,company:"iphone",condition:"New"},
            {name:"Samsung J7",img:'phones/c6.jpg',price:18999,company:"samsung",condition:"New"},
            {name:"Huawei P20",img:'phones/c7.jpg',price:15900,company:"huawei",condition:"New"},
            {name:"Iphone 6S+",img:'phones/c8.webp',price:18999,company:"iphone",condition:"New"}
        ]
        $scope.clothes=[
            {name:"T-Shirt",img:"clothes/1.jpg",price:8500, company:"samsung",condition:"New"},
            {name:"Trousres" ,img: 'clothes/2.jpg',price:4500, company:"huawei",condition:"New"},
            {name:"Shirt" ,img:'clothes/3.jpg',price:9000,company:"iphone",condition:"New"},
        ]
        $scope.food=[
            {name:"Broast",img:"food/1.jpg",price:2500, company:"samsung",condition:"New"},
            {name:"Pepsi" ,img: 'food/2.jpg',price:450, company:"huawei",condition:"New"},
            {name:"Pizza" ,img:'food/3.jpg',price:3000,company:"iphone",condition:"New"},
            {name:"Berger" ,img:'food/4.jpg',price:900,company:"iphone",condition:"New"},
        ]
    })

