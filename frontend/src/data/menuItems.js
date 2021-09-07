const menuItems = [
  {
    _id: '1',
    image: '/images/pizza.jpg',
    description: 'CHOOSE YOUR FAVORITE PIZZA TOPPINGS.',
    item: 'PIZZAS',
    name: '9in. PIZZA',
    extra_topping: false,
  },
  {
    _id: '2',
    image: '/images/pasta.jpg',
    description: 'CHECKOUT OUR FAVORITE PASTA SELECTIONS.',
    item: 'PASTAS',
  },
  {
    _id: '3',
    image: '/images/wings.jpg',
    description: 'NEED SOME APPS. WE GOT THE APPS. VIEW HERE.',
    item: 'APPETIZERS',
  },
  {
    _id: '4',
    image: '/images/salad.jpg',
    description: 'CEASAR SALAD? CHEFS SALAD? WE GOT YOU COVERED.',
    item: 'SALADS',
  },
  {
    _id: '5',
    image: '/images/sandwhich.jpg',
    description: 'FRESH SANDWHICHES MADE FOR YOU. SERVED HOT OR COLD.',
    item: 'SANDWHICHES',
  },

  {
    _id: '6',
    image: '/images/pepsi.jpg',
    description: 'CHECKOUT OUR DRINK OPTIONS TO GO WITH YOUR ORDER.',
    item: 'DRINKS & DESSERTS',
  },
  {
    _id: '7',
    image: '/images/Deluxe.png',
    description:
      'TRY OUT OUR FAMOUS DELUXE PIZZA. NOTHING BEATS A FRESH PIZZA WITH VEGGIES.',
    text: "Our famous Elicia's deluxe. Perfected thin crust dough drenched in our flavorful sauce, topped and loaded with sausage, pepperoni, onion, green peppers, mushrooms, and our special three cheese blend!",
    ingredients:
      'Sausage, Pepperoni, Onion, Mushroom, Green Pepper, and Mushrooms',
    item: 'ELICIAS DELUXE PIZZA',
    size: 'small',
    price: 10.0,
  },
  {
    _id: '8',
    image: '/images/anti-veggie.png',
    description:
      'NEED SOME PROTIEN? LOOK NO FURTHER. THIS IS THE CHOICE FOR YOU.',
    text: 'Quickly becoming a favorite with the carnivores. Awesome thin crust dough slathered with our mouth watering sauce, topped with sausage, hamburger, pepperoni, ham, bacon, and loaded up with our special three cheese blend!',
    ingredients: 'Sausage, Hamburger, Pepperoni, Ham, and Bacon',
    item: 'ELICIAS ANTI-VEGGIE PIZZA',
    size: 'small',
    price: 10.0,
  },
  {
    _id: '9',
    image: '/images/hamburger.png',
    description:
      'WHOEVER INVENTED THE COMBINATION OF PIZZA AND CHEESEBURGER NEEDS A RAISE.',
    text: 'Another fan favorite for the carnivores. Mouth watering thin crust dough slathered with our fresh sauce, topped with hamburger, extra cheese, onion, bacon, and pickles.',
    ingredients: 'Hamburger, Extra Cheese, Onion, Bacon, and Pickles.',
    item: 'ELICIAS CHEESEBURGER PIZZA',
    size: 'small',
    price: 10.0,
  },
  {
    _id: '10',
    image: '/images/pro-veggie.png',
    description:
      'PIZZA MADE SPECIFICALLY FOR THE VEGGIE LOVERS OUT THERE. WAIT TIL YOU TRY THESE INGREDIENTS!',
    text: 'Skip the meat and you still have the same great pizza. Onions, green peppers, mushrooms and black olives. All sliced by us. Options: Tomato and Pineapple. (Our sauce is meatless)',
    ingredients:
      'Three cheese blend topped with onion, green pepper, mushroom, and black olives',
    item: 'ELICIAS PRO-VEGGIE PIZZA',
    size: 'small',
    price: 10.0,
  },
  {
    _id: '11',
    image: '/images/traditional.jpg',
    description:
      'TRAVELING TO HAWAII? NO NEED. LET THIS HAWAIIAN PIZZA TRAVEL INTO YOUR MOUTH.',
    text: 'A taste of hawaii here in Saint Louis. Ham, bacon, onion, and pineapple, all on our famous crust and topped with our three cheese blend.',
    ingredients: 'Ham, pineapple, onion, and bacon',
    item: 'ELICIAS HAWAIIAN',
    size: 'small',
    price: 10.0,
  },
  {
    _id: '12',
    image: '/images/cordonbleu.png',
    description:
      "CHICKEN, HAM, CRISPY BACON... EEEAAASY EEEAAAASY YOU'RE DROOLING ALL OVER THE KEYBOARD.",
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'ELICIAS CORDON BLEU PIZZA',
    size: 'small',
    price: 10.0,
  },
  {
    _id: '13',
    image: '/images/Deluxe.PNG',
    name: 'SMALL - 9in. PIZZA',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Additional toppings: $1.00',
    price: 4.99,
  },
  {
    _id: '14',
    image: '/images/anti-veggie.PNG',
    name: 'MEDIUM - 12in. PIZZA',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Additional toppings: $1.75',
    price: 8.99,
  },
  {
    _id: '15',
    image: '/images/hamburger.PNG',
    name: 'LARGE - 14in. PIZZA',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Additional toppings: $1.95',
    price: 12.34,
  },
  {
    _id: '16',
    image: '/images/pizza.jpg',
    name: 'X-LARGE - 16in. PIZZA',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Additional toppings: $2.20',
    price: 15.19,
  },
  {
    _id: '17',
    image: '/images/chickenstrips.jpg',
    name: 'CHICKEN STRIPS',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Chicken tenders with your choice of sauce.',
    price: 7.99,
  },
  {
    _id: '18',
    image: '/images/raviolis.PNG',
    name: 'RAVIOLI',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '12 piece of ravioli with a side of meat sauce.',
    price: 6.99,
  },
  {
    _id: '19',
    image: '/images/raviolis.PNG',
    name: 'RAVIOLI TUB',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '36 piece tub of ravioli with meat sauce on the side.',
    price: 18.49,
  },
  {
    _id: '20',
    image: '/images/boscosticks.PNG',
    name: 'BOSCO STICKS',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      '3 baked bosco sticks. Served with a side of meat and garlic sauce.',
    price: 4.65,
  },
  {
    _id: '21',
    image: '/images/breadsticks.PNG',
    name: 'BREAD STICKS',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '4 breadsticks served with meat and garlic sauce.',
    price: 3.99,
  },

  {
    _id: '22',
    image: '/images/garlicbread.jpg',
    name: 'HALF GARLIC CHEESE BREAD - 6 IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Garlic cheese bread with our three blend pizza cheese served with meat sauce.',
    price: 3.99,
  },
  {
    _id: '23',
    image: '/images/garlicbread.jpg',
    name: 'WHOLE GARLIC CHEESE BREAD - 12 inch',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Garlic cheese bread with our three blend pizza cheese served with meat sauce.',
    price: 5.49,
  },
  {
    _id: '24',
    image: '/images/jalapeno_poppers.PNG',
    name: 'Jalapeno Poppers',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Jalapeno poppers in cream cheese served with ranch sauce.',
    price: 6.99,
  },
  {
    _id: '25',
    image: '/images/fries.PNG',
    name: 'FRENCH FRIES',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Crinkle cut french fries.',
    price: 2.25,
  },
  {
    _id: '26',
    image: '/images/fries_cheese.PNG',
    name: 'FRENCH FRIES WITH CHEESE',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Crinkle cut french fries served with a side of cheddar nacho cheese.',
    price: 3.5,
  },
  {
    _id: '27',
    image: '/images/hot_wings.jpg',
    name: 'HOT WINGS',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Order of 6 hot wings.',
    price: 7.99,
  },
  {
    _id: '28',
    image: '/images/hot_wings.jpg',
    name: 'HOT WINGS',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Order of 12 hot wings.',
    price: 12.99,
  },
  {
    _id: '39',
    image: '/images/mild_wings.PNG',
    name: 'MILD WINGS',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Order of 6 mild wings.',
    price: 7.99,
  },
  {
    _id: '30',
    image: '/images/mild_wings.PNG',
    name: 'MILD WINGS',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Order of 12 mild wings.',
    price: 12.99,
  },
  {
    _id: '31',
    image: '/images/bbqwings.PNG',
    name: 'BBQ WINGS',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Order of 6 bbq wings.',
    price: 7.99,
  },
  {
    _id: '32',
    image: '/images/bbqwings.PNG',
    name: 'BBQ WINGS',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Order of 12 bbq wings.',
    price: 12.99,
  },
  {
    _id: '33',
    image: '/images/honeymustard_wings.PNG',
    name: 'HONEY MUSTARD WINGS',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Order of 6 honey mustard wings.',
    price: 7.99,
  },
  {
    _id: '34',
    image: '/images/honeymustard_wings.PNG',
    name: 'HONEY MUSTARD WINGS',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Order of 12 honey mustard wings.',
    price: 12.99,
  },
  {
    _id: '35',
    image: '/images/bbqwings.PNG',
    name: 'TERIYAKI WINGS',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Order of 6 teriyaki wings.',
    price: 7.99,
  },
  {
    _id: '36',
    image: '/images/bbqwings.PNG',
    name: 'TERIYAKI WINGS',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Order of 12 teriyaki wings.',
    price: 12.99,
  },
  {
    _id: '37',
    image: '/images/wings.jpg',
    name: 'PLAIN WINGS',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Order of 6 plain wings.',
    price: 7.99,
  },
  {
    _id: '38',
    image: '/images/wings.jpg',
    name: 'PLAIN WINGS',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Order of 12 plain wings.',
    price: 12.99,
  },
  {
    _id: '39',
    image: '/images/special.PNG',
    name: 'ELICIAS SPECIAL SUB - 6IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Six inch sub with roast beef, ham, salami, and our 3 cheese blend. Hot unless otherwise specified.',
    price: 5.99,
  },
  {
    _id: '40',
    image: '/images/special.PNG',
    name: 'ELICIAS SPECIAL SUB - 12IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'FootLong sub with roast beef, ham, salami, and our 3 cheese blend. Hot unless otherwise specified.',
    price: 8.99,
  },
  {
    _id: '41',
    image: '/images/sandwhich.jpg',
    name: 'ROAST BEEF SUB - 6IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Six inch sub with our special three cheese blend. Hot unless otherwise specified.',
    price: 5.99,
  },
  {
    _id: '42',
    image: '/images/sandwhich.jpg',
    name: 'ROAST BEEF SUB - 12IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'FootLong sub with our special three cheese blend. Hot unless otherwise specified.',
    price: 8.99,
  },
  {
    _id: '43',
    image: '/images/sandwhich.jpg',
    name: 'HAM SUB - 6IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Six inch ham sub with our special three cheese blend. Hot unless otherwise specified.',
    price: 5.5,
  },
  {
    _id: '44',
    image: '/images/sandwhich.jpg',
    name: 'HAM SUB - 12IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'FootLong ham sub with our special three cheese blend. Hot unless otherwise specified.',
    price: 8.49,
  },
  {
    _id: '45',
    image: '/images/special.PNG',
    name: 'TURKEY AND CHEESE - 6IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Six inch turkey sub with our special three cheese blend. Hot unless otherwise specified.',
    price: 5.5,
  },
  {
    _id: '46',
    image: '/images/special.PNG',
    name: 'TURKEY AND CHEESE SUB - 12IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'FootLong turkey sub with our special three cheese blend. Hot unless otherwise specified.',
    price: 8.5,
  },
  {
    _id: '47',
    image: '/images/special.PNG',
    name: 'TURKEY CLUB SUB - 6IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Six inch turkey sub with our special three cheese blend and a bacon strip. Hot unless otherwise specified.',
    price: 5.99,
  },
  {
    _id: '48',
    image: '/images/special.PNG',
    name: 'TURKEY CLUB SUB - 12IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'FootLong turkey sub with our special three cheese blend and a bacon strip. Hot unless otherwise specified.',
    price: 8.99,
  },
  {
    _id: '49',
    image: '/images/meatball.PNG',
    name: 'MEATBALL SUB - 6IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Six inch hot meatball sub in our special meat sauce, topped with our three cheese blend.',
    price: 5.99,
  },
  {
    _id: '50',
    image: '/images/meatball.PNG',
    name: 'MEATBALL SUB - 12IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Footlong hot meatball sub in our special meat sauce, topped with our three cheese blend.',
    price: 8.99,
  },
  {
    _id: '51',
    image: '/images/special.PNG',
    name: 'SALAMI AND CHEESE SUB - 6IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Six inch salami sub and our three blend cheese. Hot unless otherwise specified.',
    price: 5.5,
  },
  {
    _id: '52',
    image: '/images/special.PNG',
    name: 'SALAMI AND CHEESE SUB - 12IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Footlong salami sub and our three blend cheese. Hot unless otherwise specified.',
    price: 8.5,
  },
  {
    _id: '53',
    image: '/images/special.PNG',
    name: 'BLT SUB - 6IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Six inch bacon, lettuce, and tomato sub.',
    price: 5.99,
  },
  {
    _id: '54',
    image: '/images/special.PNG',
    name: 'BLT SUB - 12IN.',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Footlong bacon, lettuce, and tomato sub.',
    price: 8.99,
  },

  {
    _id: '55',
    image: '/images/dinnersalad.PNG',
    name: 'DINNER SALAD',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Lettuce salad mix, cheese, and pepperoni.',
    price: 3.99,
  },
  {
    _id: '56',
    image: '/images/chefsalad.PNG',
    name: 'CHEF SALAD',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Lettuce salad mix, turkey, ham, cheese, and tomatoes.',
    price: 5.79,
  },
  {
    _id: '57',
    image: '/images/veggiesalad.PNG',
    name: 'VEGGIE SALAD',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Lettuce salad mix, cheese, onion, green pepper, mushrooms, and black olives.',
    price: 5.79,
  },
  {
    _id: '58',
    image: '/images/chickensalad.PNG',
    name: 'CHICKEN SALAD',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Lettuce salad mix, cheese, fajita chicken strips, and tomatoes.',
    price: 5.49,
  },
  {
    _id: '59',
    image: '/images/deluxesalad.PNG',
    name: 'DELUXE SALAD',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Lettuce salad mix, cheese, pepperoni, pepperchini, onions, and tomatoes.',
    price: 4.99,
  },
  {
    _id: '60',
    image: '/images/dinnersalad.PNG',
    name: 'HALF SIZE DINNER SALAD',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Small half size salad with lettuce salad mix, cheese, and pepperoni.',
    price: 1.99,
  },
  {
    _id: '61',
    image: '/images/mostaccioli.jpg',
    name: 'BAKED MOSTACCIOLI',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Noodles and cheese baked in Elicias famous meat sauce.',
    price: 6.99,
  },
  {
    _id: '62',
    image: '/images/canneloni.jpg',
    name: 'BAKED CANNELONI',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Two meat cannelonis in our famous Elicias meat sauce with our three blend cheese.',
    price: 6.99,
  },
  {
    _id: '63',
    image: '/images/canneloni.jpg',
    name: 'LARGE BAKED CANNELONI',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Three meat cannelonis in our famous Elicias meat sauce with our three blend cheese.',
    price: 8.25,
  },
  {
    _id: '64',
    image: '/images/chickenalfredo.jpg',
    name: 'CHICKEN ALFREDO',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description:
      'Chicken alfredo topped with our three blend cheese. Two breadsticks come on the side.',
    price: 8.25,
  },
  {
    _id: '65',
    image: '/images/alfredopasta.jpg',
    name: 'ALFREDO PASTA WITH CHEESE',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Pasta alfredo with cheese. Two breadsticks come on the side.',
    price: 6.99,
  },
  {
    _id: '66',
    image: '/images/pepsi.jpg',
    name: 'PEPSI',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '12oz pepsi can.',
    price: 0.82,
  },
  {
    _id: '67',
    image: '/images/dietpepsi.jpg',
    name: 'DIET PEPSI',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '12oz diet pepsi can.',
    price: 0.82,
  },
  {
    _id: '68',
    image: '/images/mountaindew.jpg',
    name: 'MOUNTAIN DEW',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '12oz mountain dew can.',
    price: 0.82,
  },
  {
    _id: '69',
    image: '/images/mountaindew.jpg',
    name: 'DIET MOUNTAIN DEW',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '12oz diet mountain dew can.',
    price: 0.82,
  },
  {
    _id: '70',
    image: '/images/7up.jpg',
    name: '7UP',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '12oz 7up can.',
    price: 0.82,
  },
  {
    _id: '71',
    image: '/images/pepsi.jpg',
    name: 'ORANGE CRUSH',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '12oz Orange Crush can.',
    price: 0.82,
  },
  {
    _id: '72',
    image: '/images/pepsi.jpg',
    name: 'DR. PEPPER',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '12oz Dr. Pepper can.',
    price: 0.82,
  },
  {
    _id: '73',
    image: '/images/pepsi.jpg',
    name: 'DIET DR. PEPPER',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '12oz Diet Dr. Pepper can.',
    price: 0.82,
  },
  {
    _id: '74',
    image: '/images/pepsi.jpg',
    name: 'PEPSI',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '2-Liter Pepsi bottle.',
    price: 2.69,
  },
  {
    _id: '75',
    image: '/images/wings.jpg',
    name: 'DIET PEPSI',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '2-Liter Diet Pepsi bottle.',
    price: 2.69,
  },
  {
    _id: '76',
    image: '/images/wings.jpg',
    name: 'MOUNTAIN DEW',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '2-Liter Mountain Dew bottle.',
    price: 2.69,
  },
  {
    _id: '77',
    image: '/images/wings.jpg',
    name: '7UP',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '2-Liter 7UP bottle.',
    price: 2.69,
  },
  {
    _id: '78',
    image: '/images/wings.jpg',
    name: 'DR. PEPPER',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '2-Liter Dr. Pepper bottle.',
    price: 2.69,
  },
  {
    _id: '79',
    image: '/images/wings.jpg',
    name: 'DIET DR. PEPPER',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '2-Liter DIET Dr. Pepper bottle.',
    price: 2.69,
  },
  {
    _id: '80',
    image: '/images/wings.jpg',
    name: 'ORANGE CRUSH',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '2-Liter Orange Crush bottle.',
    price: 2.69,
  },
  {
    _id: '81',
    image: '/images/chocolatechipcookie.PNG',
    name: 'CHOCOLATE CHIP COOKIE',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: '8in. oven baked chocolate chip cookie.',
    price: 5.99,
  },
  {
    _id: '82',
    image: '/images/chocolatecake.PNG',
    name: 'CHOCOLATE CAKE',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Slice of chocolate cake.',
    price: 4.5,
  },
  {
    _id: '83',
    image: '/images/cheesecake.PNG',
    name: 'CHEESECAKE',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Slice of cheese cake topped with rasberry sauce.',
    price: 3.99,
  },
  {
    _id: '84',
    image: '/images/chocolateicecream.PNG',
    name: 'TED DREWES',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Mini chocolate concrete ice cream.',
    price: 3.5,
  },
  {
    _id: '85',
    image: '/images/vanillaicecream.PNG',
    name: 'TED DREWES',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Mini vanilla concrete ice cream.',
    price: 3.5,
  },
  {
    _id: '86',
    image: '/images/strawberryicecream.PNG',
    name: 'TED DREWES',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Mini strawberry concrete ice cream.',
    price: 3.5,
  },
  {
    _id: '87',
    image: '/images/vanillaicecream.PNG',
    name: 'TED DREWES',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Mini oreo concrete ice cream.',
    price: 3.75,
  },
  {
    _id: '88',
    image: '/images/wings.jpg',
    name: 'CRUSHED RED PEPPER',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Crushed red pepper packet.',
    price: 0.4,
  },
  {
    _id: '89',
    image: '/images/wings.jpg',
    name: 'PARMESAN',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Parmesan cheese packet.',
    price: 0.4,
  },
  {
    _id: '90',
    image: '/images/wings.jpg',
    name: 'MAYO PACKET',
    text: 'A savory blend of diced chicken covered with extra cheese, then topped with crispy bacon and delicios ham.',
    ingredients:
      'Three cheese blend with ham, chicken, extra cheese, and bacon',
    item: 'SMALL - 9in. PIZZA',
    size: 'small',
    description: 'Packet of mayo.',
    price: 0.1,
  },
];

export default menuItems;