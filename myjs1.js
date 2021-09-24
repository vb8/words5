document.getElementById("spared").innerText = "777"


//myf1 = { myprop1: "444" };
function myf2(words1) {
  /*
  document.getElementById("first").innerHTML = 12333;
  var d = document.createElement("div");
  d.id = 333;
  let count = 0;
  while (count < 18) {
    console.log(count);
    count++;
    var d = document.createElement("div");
    d.id = count;
    document.getElementById("spared").appendChild(d);
    document.getElementById(count).innerHTML = count;
  }*/
  var words1 = {
    workaround:"обходой_путь",
    retrive: "retrive",
    spared:  "пощадил" ,
    jovially: '33decend',
    windfall: 1,
    grossed: 1,
    occasional: 1,
    grocer: 1,
    dug_up: 555551,
    myprop1: "retrive",
    spared: 'decend',
    jovially: '33decend',
    windfall: 1,
    grossed: 1,
    occasional: 1,
    grocer2: 1,
    dug_up2: 555551,
    departure:"отъезд",
    bogus:"фальшивка",
    approach:"подход",
    fastening:"крепление",
    fuming:"дымящийся",
    spluttered_out:"выплеснулся",
    though:"хотя",
    supervise:"контролировать",
    either :"любой",
    unremitting:"упорный",
    exasperation:"раздражение",
  };
 var my7; var count2=0;
  for (var stock in words1) {  
    my7 += " " + stock;
    var d2 = document.createElement("div");
    d2.id = count2;
    d2.className = "grid-item";
    document.getElementById("spared").appendChild(d2);
    document.getElementById(count2).innerHTML = stock;
    count2 = count2 + 1;
  

 }
 return my7;
}










  var d = document.createElement('div');
  d.className = 'div_one';
  document.body.appendChild(d);