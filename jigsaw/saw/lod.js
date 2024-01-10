const loadAssets = () => {

 const diir='static/media/'; document.getElementById('preload-container').innerHTML = '<h1>LOADING... <span id="loading-percent">' + 0 + '</span>%</h1>';

  const queue = new createjs.LoadQueue();

  queue.on("progress", handleProgress, this);
  queue.on("complete", handleComplete, this);

  queue.loadManifest([
{id:'img1',src:diir+'Pirate_Cove-1.webp'},
{id:'img2',src:'static/media/East_Hall-f.webp'},
{id:'img3',src:diir+'East_Hall-c.webp'},
{id:'img4',src:diir+'Freddy-Jumpscare1.gif'},
{id:'img5',src:diir+'Restrooms2.webp'},
{id:'img6',src:diir+'RD_RL.webp'},
{id:'img7',src:diir+'EHallCorner-c.webp'},
{id:'img8',src:diir+'EHallCorner-f.webp'},
{id:'img9',src:diir+'East_Hall-c-f.webp'},
{id:'img10',src:diir+'Pirate_Cove-2.webp'},
{id:'img11',src:diir+'LD_RL_CHICA.webp'},
{id:'img12',src:diir+'Bonnie-Jumpscare.webp'},
{id:'img13',src:diir+'Chica-Jumpscare.webp'},
{id:'img14',src:diir+'Foxy-Jumpscare.gif'},
{id:'img15',src:diir+'Foxy-Jumpscare.gif'},
{id:'img16',src:diir+'Backstage-b.webp'},
{id:'img17',src:diir+'West_Hall-b.webp'},
{id:'img18',src:diir+'Pirate_Cove-3.webp'},
{id:'img19',src:diir+'hello.mp3'},
{id:'img20',src:diir+'ss/bgm21.mp3'},
{id:'img21',src:diir+'ss/bgm22.mp3'}
  ]);

  queue.load();
};



const handleProgress = (e) => {

  let percent = Math.round(e.progress * 100);

  document.getElementById('loading-percent').innerHTML = percent;
};



const handleComplete = () => {

  document.getElementById('preload-container').innerHTML = '<h1>COMPLETE!</h1>';
setTimeout(function(){
   
location=("/index.html");

 },3000)
};
