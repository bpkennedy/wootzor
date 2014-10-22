(function () {
  var app = angular.module('gemStore', []);

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(imageNumber){
      this.current = imageNumber || 0;
    };
  });

  app.controller('StoreController', function() {
    this.products = gems;
  });

  app.controller("TabController", function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });
  app.controller('DriverController', function () {
      this.individuals = drivers;
  });
  

  app.controller("ReviewController", function(){

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };

  });

  app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "product-description.html"
    };
  });

  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "product-reviews.html"
    };
  });

  app.directive("productSpecs", function() {
    return {
      restrict:"A",
      templateUrl: "product-specs.html"
    };
  });

  function test(name) {
      console.log(name);
      var y;
      $.ajax({
          type: "GET",
          async: false,
          url: "/api/reviews/" + name,
          //contentType: "application/json",
          //data: JSON.stringify(newItem)

      }).done(function (xData, result) {
          y = xData
      });
      return y;
  }

  var gems = [
    {
      name: 'Azurite',
      description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
      shine: 8,
      price: 110.50,
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: [
        "images/gem-02.gif",
        "images/gem-05.gif",
        "images/gem-09.gif"
      ],
      reviews: test("Azurite")
    }, {
      name: 'Bloodstone',
      description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
      shine: 9,
      price: 22.90,
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: [
        "images/gem-01.gif",
        "images/gem-03.gif",
        "images/gem-04.gif"
      ],
      reviews: test(this.name)
      }, {
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        faces: 6,
        images: [
          "images/gem-06.gif",
          "images/gem-07.gif",
          "images/gem-08.gif"
        ],
        reviews: [{
          stars: 1,
          body: "This gem is WAY too expensive for its rarity value.",
          author: "turtleguyy@example.org"
        }, {
          stars: 1,
          body: "BBW: High Shine != High Quality.",
          author: "LouisW407@example.org"
        }, {
          stars: 1,
          body: "Don't waste your rubles!",
          author: "nat@example.org"
        }]
    }
  ];

  var drivers = [
  {
      firstName: 'John',
      lastName: 'Smith',
      location: '123 Alfred St.',
      deliveryRadius: '5',
      likesReceived: '12',
      jobsReceived: '13',
      dateStarted: '10-01-2014',
      profilePic: "images/js.jpg"
  }, {
      firstName: 'Fred',
      lastName: 'Wootzen',
      location: '123 Diggidy St.',
      deliveryRadius: '10',
      likesReceived: '5',
      jobsReceived: '30',
      dateStarted: '5-09-2014',
      profilePic: "images/fw.jpg"
  }, {
      firstName: 'Charles',
      lastName: 'BoonDoggle',
      location: '555 Usher St.',
      deliveryRadius: '6',
      likesReceived: '7',
      jobsReceived: '7',
      dateStarted: '09-01-2014',
      profilePic: "images/cb.jpg"
  }, {
      firstName: 'Fezic',
      lastName: 'Giante',
      location: '999 Row St.',
      deliveryRadius: '8',
      likesReceived: '5',
      jobsReceived: '5',
      dateStarted: '02-01-2014',
      profilePic: "images/fg.jpg"
  }, {
      firstName: 'Sarah',
      lastName: 'Johnson',
      location: '509 Morisson St.',
      deliveryRadius: '9',
      likesReceived: '30',
      jobsReceived: '27',
      dateStarted: '04-14-2014',
      profilePic: "images/sj.jpeg"
  }, {
      firstName: 'Jennifer',
      lastName: 'Amble',
      location: '476 Neary St.',
      deliveryRadius: '10',
      likesReceived: '18',
      jobsReceived: '18',
      dateStarted: '07-21-2014',
      profilePic: "images/ja.jpg"
  },
  ];
})();
