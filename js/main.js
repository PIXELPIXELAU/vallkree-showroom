
//Initialise the bikes array
window.bikes = {};
const $productViewerWrapper = document.getElementById("product_viewer--wrapper")
const $productViewer = document.getElementById("product_viewer");
const debug = !(window.location.host == "showroom.vallkree.com");
if (debug) {
  console.log = function() {};
  console.info = function() {};
}
function init(){
  const showroom = {
    demo : './img/demo/',
    drifter : './img/drifter_matt-black/'
  },
  model = "the-drifter",
  models = [
    ["demo","drifter_matt-black",101],

    ["belt-drive","belt-drive_matt-black",131],
    ["the-belt-drive--matt-black","belt-drive_matt-black",131],
    ["the-belt-drive--army-green","belt-drive_army-green",137],

    ["the-war-child-dragster","dragster_matt-black",178],
    ["the-war-child-dragster--matt-black","dragster_matt-black",178],

    ["happy-good","the-moon-dog-twin-seat_matt-black",125],
    ["the-moon-dog-twin-seat--matt-black","happy-good_matt-black",125],
    ["the-moon-dog-twin-seat--gold","happy-good_gold",171],
    ["the-moon-dog-twin-seat--military-beige","happy-good_military-beige",109],
    ["the-moon-dog-twin-seat--silver","happy-good_silver",168],
    ["the-moon-dog-twin-seat--blue-grey-gloss","happy-good_blue-grey--gloss",133],

    ["the-penny-lane-street-gypsie","ladies_black--gloss",143],
    ["the-penny-lane-street-gypsie--black-gloss","ladies_black--gloss",143],
    ["the-penny-lane-street-gypsie--red-gloss","ladies_red--gloss",118],

    ["the-drifter","drifter_matt-black",133],
    ["the-drifter--very-matt-black","drifter_matt-black",133],
    ["the-drifter--planet-green","drifter_army-green",109],
    ["the-drifter--blue-moon-gloss","drifter_gloss-blue-gray",120],
    ["the-drifter--desert-storm","drifter_military-beige",134],
    ["the-drifter--silver-bullet-gloss","drifter_silver",118],
    ["the-drifter--silver-alt","drifter_silver-alt",152],


    ["the-yakuza-mini-drifter","mini-drifter_silver",122],
    ["the-yakuza-mini-drifter--silver","mini-drifter_silver",122],

    ["the-terremotto-scrambler","scramber_matt-black",117],
    ["the-terremotto-scrambler--matt-black","scramber_matt-black",117],
    ["the-terremotto-scrambler--army-green","scramber_army-green",115],


    ["sidecar","sidecar",135],

    ["the-mechanism","dual-motors_dope-lemon",131],
    ["the-mechanism--dope-lemon","dual-motors_dope-lemon",131],
    ["the-mechanism--military-beige","dual-motors_military-beige",102],
    ["the-mechanism--ultra-dope-lemon-mega-plus","dual-motors_dope-lemon-alt",102],

    ["the-bodhi-surf-bike","surf-bike_matt-black",115],
    ["the-bodhi-surf-bike--very-matt-black","surf-bike_matt-black",115],
    ["the-bodhi-surf-bike--desert-storm","surf-bike_military-beige",170],

  ];
  models.sort(function(a,b){
    return (a[0] > b[0] ? 1 : -1);
  })
  let $bikes = document.getElementById("bikes");
  for (var i=0;i<models.length;i++){
    let bike = models[i];
    var b = {
        slug : bike[0] || "",
        name : bike[0] || "",
        path : "./img/"+bike[1]+"/",
        frames : bike[2] || 50,
    };
    b.name = b.name.replace(/(\-|_)/gi," ");
    var $div = document.createElement('DIV');
    var $a = document.createElement('A');
    $a.setAttribute('id',b.slug);
    $a.setAttribute('href','?bike='+b.slug);
    $a.innerHTML = b.name;
    bikes[b.slug] = b;
    $div.appendChild($a);
    $bikes.appendChild($div);
  }
  console.log(bikes);
}
function init360() {
  //Create Model viewer
  window.productViewer = new ProductViewer({
      element: $productViewer,
      imagePath: bike.path,
      //imagePath: "https://cdn.vallkree.com/360/demo/",
      filePrefix: "img_",
      fileExtension: ".jpg",
      numberOfImages:  bike.frames,
  });

  // once loaded, give it a 360 spin
  productViewer.once("loaded", function() {
      productViewer.animate360(2000);
  });
}

init();

let param = window.location.search.split('='),
  bike = bikes["demo"];
console.log(param);
if ((!!param[1]) && (!!bikes[param[1]])) {
  bike = bikes[param[1]];
  var $a = document.getElementById(bike.slug);
  $a.setAttribute('style',"font-weight:bold;")
}
//$productViewerWrapper.setAttribute('style','background-image:url("'+bike.path+'img_01.jpg")');
$productViewer.setAttribute('style','background-image:url("'+bike.path+'img_01.jpg")');
console.log(bike);

//init360(bike);
// Init
//window.addEventListener('load', init360(bike), false);

if (window.location.host == "") {
  var $bikes = document.getElementById('bikes');
  $bikes.removeAttribute('hidden');
}

init360();

console.log(bikes);
