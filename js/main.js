
//Initialise the bikes array
window.bikes = [];
const $productViewerWrapper = document.getElementById("product_viewer--wrapper")
const $productViewer = document.getElementById("product_viewer");

const debug = (window.location.host == "showroom.vallkree.com");
if (debug) {
  console.log = function() {};
  console.info = function() {};
}
var $body = document.getElementById('body');
console.log('version:',$body.getAttribute('data-version'));
function init(){
  const showroom = {
    demo : './img/demo/',
    drifter : './img/drifter_matt-black/'
  },
  model = "the-drifter",
  models = [
    ["","demo","drifter_matt-black",101],
    ["4658199494702","the-belt-drive","belt-drive_matt-black",131],
    ["4658199494702","the-belt-drive--matt-black","belt-drive_matt-black",131],
    ["","the-belt-drive--army-green","belt-drive_army-green",137],

    ["","the-war-child-dragster","dragster_matt-black",178],
    ["","the-war-child-dragster--matt-black","dragster_matt-black",178],

    ["","the-moon-dog-twin-seat","happy-good_matt-black",125],
    ["","the-moon-dog-twin-seat--matt-black","happy-good_matt-black",125],
    ["","the-moon-dog-twin-seat--gold","happy-good_gold",171],
    ["","the-moon-dog-twin-seat--military-beige","happy-good_military-beige",109],
    ["","the-moon-dog-twin-seat--silver","happy-good_silver",168],
    ["","the-moon-dog-twin-seat--blue-grey-gloss","happy-good_blue-grey--gloss",133],

    ["","the-penny-lane-street-gypsie","ladies_black--gloss",143],
    ["","the-penny-lane-street-gypsie--black-gloss","ladies_black--gloss",143],
    ["","the-penny-lane-street-gypsie--red-gloss","ladies_red--gloss",118],

    ["","the-drifter","drifter_matt-black",133],
    ["","the-drifter--very-matt-black","drifter_matt-black",133],
    ["","the-drifter--planet-green-matte","drifter_army-green",109],
    ["","the-drifter--blue-moon-gloss","drifter_gloss-blue-gray",120],
    ["","the-drifter--desert-storm-matte","drifter_military-beige",134],
    ["","the-drifter--silver-bullet-gloss","drifter_silver",118],
    ["","the-drifter--silver-alt","drifter_silver-alt",152],


    ["","the-yakuza-mini-drifter","mini-drifter_silver",122],
    ["","the-yakuza-mini-drifter--silver","mini-drifter_silver",122],

    ["4649602875438","the-terremotto-scrambler","scramber_matt-black",117,"very+black+-+matte"],
    ["4649602875438","the-terremotto-scrambler--matt-black","scramber_matt-black",117,"very+black+-+matte"],
    ["4649602875438","the-terremotto-scrambler--army-green","scramber_army-green",115,"planet+green+-+matte"],


    ["","sidecar","sidecar",135],

    ["","the-mechanism","dual-motors_dope-lemon",131],
    ["","the-mechanism--dope-lemon","dual-motors_dope-lemon",131],
    ["","the-mechanism--military-beige","dual-motors_military-beige",102],
    ["","the-mechanism--ultra-dope-lemon-mega-plus","dual-motors_dope-lemon-alt",102],

    ["","the-bodhi-surf-bike","surf-bike_matt-black",115],
    ["","the-bodhi-surf-bike--very-matt-black","surf-bike_matt-black",115],
    ["","the-bodhi-surf-bike--desert-storm","surf-bike_military-beige",170],

  ];
  models.sort(function(a,b){
    return (a[1] > b[1] ? 1 : -1);
  })
  let $bikes = document.getElementById("bikes");
  for (var i=0;i<models.length;i++){
    let bike = models[i];
    var b = {
        id : bike[0] || "",
        slug : bike[1] || "",
        name : bike[1] || "",
        path : "./img/"+bike[2]+"/",
        frames : bike[3] || 50,
        colour : bike[4] || ""
    };
    b.name = b.name.replace(/(\-|_)/gi," ");
    // var $div = document.createElement('DIV');
    // var $a = document.createElement('A');
    // $a.setAttribute('id',b.slug);
    // $a.setAttribute('href','?bike='+b.slug);
    // $a.innerHTML = b.name;
    var key = b.id == "" ? b.id : b.slug;
    bikes.push(b);
    // if ($div) 
    // $div.appendChild($a);
    // $bikes.appendChild($div);
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
      var $loading = document.getElementById('loader');
      $loading.style.opacity = 0;
      setTimeout(function(){
        $loading.parentNode.removeChild( $loading);
      },400)
  });
}

init();

var search = location.search.substring(1);
var params = false;
if (search != "") {
  params = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
}

if (params) {
  // alert('here');
  bike = bikes.filter((v)=>v.id==params.productid);
  if (bike.length > 0) {
    if (params.productcolour && params.productcolour !="") {
      //let colour = bike = params.colour
      bike = bike.filter((v)=>v.colour==params.productcolour);
    }
    bike = bike[0]
  } else {
    bike = bikes.filter((v)=>v.name=="demo")[0]  
  }

  // var $a = document.getElementById(bike.slug);
  // $a.setAttribute('style',"font-weight:bold;")
} else {
  // alert('not here');
  // bike = bikes['demo'];
  bike = bikes.filter((v)=>v.name=="demo")[0]
}

$body.setAttribute('data-productid',bike.id);
$body.setAttribute('data-productname',bike.name);
$body.setAttribute('data-productcolour',bike.colour);

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
