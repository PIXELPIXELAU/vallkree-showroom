
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
    ["4658199494702","the-belt-drive","belt-drive_matt-black",131,'very+black+-+matte'],
    ["4658199494702","the-belt-drive--matt-black","belt-drive_matt-black",131,'very+black+-+matte'],
    ["4658199494702","the-belt-drive--army-green","belt-drive_army-green",137,'planet+green+-+matte'],

    

    ["4649764585518","the-war-child-dragster","dragster_matt-black",178],
    ["4649764585518","the-war-child-dragster--matt-black","dragster_matt-black",178],

    ["4649764487214","the-moon-dog-twin-seat","happy-good_blue-grey--gloss",133,"blue+moon+-+gloss"],
    ["4649764487214","the-moon-dog-twin-seat--matt-black","happy-good_matt-black",125,"very+black+-+matte"],
    ["4649764487214","the-moon-dog-twin-seat--gold","happy-good_gold",171,"amber+gold-++gloss"],
    ["4649764487214","the-moon-dog-twin-seat--military-beige","happy-good_military-beige",109,"desert+storm+-+matte"],
    ["4649764487214","the-moon-dog-twin-seat--silver","happy-good_silver",168,"silver+bullet+-+gloss"],
    ["4649764487214","the-moon-dog-twin-seat--blue-grey-gloss","happy-good_blue-grey--gloss",133,"blue+moon+-+gloss"],
    ["4649764487214","the-moon-dog-twin-seat--planet-green-matte","happy-good__planet-green--matte",1,"planet+green+-+matte"],

    ["4649764782126","the-penny-lane-street-gypsie","ladies_red--gloss",118,"ladies_red--gloss"],
    ["4649764782126","the-penny-lane-street-gypsie--black-gloss","ladies_black--gloss",143,"gloss+black"],
    ["4649764782126","the-penny-lane-street-gypsie--red-gloss","ladies_red--gloss",118,"gloss+red"],

    ["4351754010670","the-drifter","drifter_silver",118,"silver+bullet+-+gloss"],
    ["4351754010670","the-drifter--very-matt-black","drifter_matt-black",133,"very+black+-+matte"],
    ["4351754010670","the-drifter--planet-green-matte","drifter_army-green",109,"planet+green+-+matte"],
    ["4351754010670","the-drifter--blue-moon-gloss","drifter_gloss-blue-gray",120,"blue+moon+-+gloss"],
    ["4351754010670","the-drifter--desert-storm-matte","drifter_military-beige",134,"desert+storm+-+matte"],
    ["4351754010670","the-drifter--silver-bullet-gloss","drifter_silver",118,"silver+bullet+-+gloss"],
    ["4351754010670","the-drifter--silver-alt","drifter_silver-alt",152,"silver+bullet+-+gloss"],

    
    ["4649764061230","the-yakuza-mini-drifter","mini-drifter_silver",122,"silver"],
    ["4649764061230","the-yakuza-mini-drifter--silver","mini-drifter_silver",122,"silver"],
    ["4649764061230","the-yakuza-mini-drifter--matt-black","mini-drifter__matt-black",1,"matt+black"],

    ["4649602875438","the-terremotto-scrambler","scramber_army-green",115,"planet+green+-+matte"],
    ["4649602875438","the-terremotto-scrambler--matt-black","scramber_matt-black",117,"very+black+-+matte"],
    ["4649602875438","the-terremotto-scrambler--army-green","scramber_army-green",115,"planet+green+-+matte"],


    ["4658246975534","vallkree-sidecar","sidecar",135,"sidecar"],

    
    // ["4649764814894","the-mechanism-24","dual-motors_military-beige",102,"military+beige"],
    // ["4649764814894","the-mechanism-24","dual-motors_military-beige",102,"military+beige"],
    ["4649764814894","the-mechanism-24","dual-motors__very-black--matte",1,"military+beige"],
    // https://showroom.vallkree.com/?bike=the-mechanism-24&productid=4649764814894
    ["4649764814894","the-mechanism-24--military-beige","dual-motors__military-beige",1,"military+beige"],
    // https://showroom.vallkree.com/?v=1625526989&productid=4649764814894&productcolour=desert+storm+-+matte
    ["4649764814894","the-mechanism-24--desert-storm-matte","dual-motors__desert-storm-matte",1,"desert+storm+-+matte"],
    // https://showroom.vallkree.com/?v=1625527009&productid=4649764814894&productcolour=very+black+-+matte
    ["4649764814894","the-mechanism-24--very-black-matte","dual-motors__very-black--matte",1,"very+black+-+matte"],
    // https://showroom.vallkree.com/?v=1625527023&productid=4649764814894&productcolour=planet+green+-+matte
    ["4649764814894","the-mechanism-24--planet-green-matte","dual-motors__planet-green--matte",1,"planet+green+-+matte"],
    // https://showroom.vallkree.com/?v=1625527034&productid=4649764814894&productcolour=silver+bullet+-+gloss
    ["4649764814894","the-mechanism-24--silver-bullet-gloss","dual-motors__silver-bullet--gloss",1,"silver+bullet+-+gloss"],
    //https://showroom.vallkree.com/?v=1625527044&productid=4649764814894%20disabled&productcolour=airforce+grey+-+matte
    ["4649764814894","the-mechanism-24--airforce-gray-matte","dual-motors__airforce-grey-matte",1,"airforce+grey+-+matte"],
    
    ["6548399456302","the-mechanism-26","mechanism-26_matt-grey",1,"matt+grey"],
    ["6548399456302","the-mechanism-26--desert-storm-matt","mechanism-26_desert-storm-matt",1,"desert+storm+-+matte"],
    ["6548399456302","the-mechanism-26--matt-grey","mechanism-26_matt-grey",1,"matt+grey"],
    ["6548399456302","the-mechanism-26--musk","mechanism-26_musk",1,"musk"],
    ["6548399456302","the-mechanism-26--planet-green","mechanism-26_planet-green",1,"planet+green+matte"],
    ["6548399456302","the-mechanism-26--very-black-matt","mechanism-26_very-black-matt",1,"very+black+matte"],
    ["6548399456302","the-mechanism-26--silver","mechanism-26__silver",1,"silver"],

    // ["6548399456302","the-drifter","drifter_silver",118,"silver+bullet+-+gloss"],
    // ["6548399456302","the-drifter","drifter_military-beige",134,"desert+storm+-+matte"],
    // ["6548399456302","the-drifter--very-matt-black","drifter_matt-black",133,"very+black+-+matte"],
    // ["6548399456302","the-drifter--planet-green-matte","drifter_army-green",109,"planet+green+-+matte"],
    // ["6548399456302","the-drifter--blue-moon-gloss","drifter_gloss-blue-gray",120,"blue+moon+-+gloss"],
    // ["6548399456302","the-drifter--desert-storm-matte","drifter_military-beige",134,"desert+storm+-+matte"],
    // ["6548399456302","the-drifter--silver-bullet-gloss","drifter_silver",118,"silver+bullet+-+gloss"],
    // ["6548399456302","the-drifter--silver-alt","drifter_silver-alt",152,"silver+bullet+-+gloss"],

    
  

    ["4713965715502","dope-lemon","dual-motors_dope-lemon",102,"dope+lemon"],
    ["4713965715502","the-mechanism--ultra-dope-lemon-mega-plus","dual-motors_dope-lemon-alt",102,"dope+lemon"],
    ["4713965715502","the-mechanism","dual-motors_dope-lemon",131,"dope+lemon"],
    ["4713965715502","dope-lemon--very-black-matte","dope-lemon__very-black-matte",1,"very+black+-+matte"], //https://showroom.vallkree.com/?v=1627957720&productid=4713965715502&productcolour=very+black+-+matte
    
    
    ["4649764618286","the-bodhi-surf-bike","surf-bike_military-beige",170,"desert+storm+-+matte"],
    ["4649764618286","the-bodhi-surf-bike--very-matt-black","surf-bike_matt-black",115,"very+black+-+matte"],
    ["4649764618286","the-bodhi-surf-bike--desert-storm","surf-bike_military-beige",170,"desert+storm+-+matte"],

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
  console.log('*****',params.productid)
  const productid = (!!params.productid) ? params.productid.split(' ')[0] : '';
  bike = bikes.filter((v)=>v.id==productid);
  if (bike.length > 0) {
    console.log('2')
    if (params.productcolour && params.productcolour !="") {
      console.log('3')
      //let colour = bike = params.colour
      var result = bike.filter((v)=>v.colour==params.productcolour);
      if (result.length > 0) bike = result
    }
    console.log('4')
    bike = bike[0]
  } else {
    console.log('5')
    bike = bikes.filter((v)=>v.name=="demo")[0]  
  }
  console.log('6')

  // var $a = document.getElementById(bike.slug);
  // $a.setAttribute('style',"font-weight:bold;")
} else {
  console.log('7')
  // alert('not here');
  // bike = bikes['demo'];
  bike = bikes.filter((v)=>v.name=="demo")[0]
}
console.log(bike);
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
