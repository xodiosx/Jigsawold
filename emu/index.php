<!doctype html>
<html>
   <meta charset="UTF-8">
  <meta name = viewport content = "width = device-width, initial-scale = 1">

<style>
            body, html {

                height: 90%;
width: 100%;
            }
h1{
color: #dff;
font-weight: bold;
   font-size: 20px;

                font-family: monospace;
                font-weight: bold;                                
}
h2{
color: blue;
font-weight: bold;
   font-size: 9px;

                font-family: monospace;
                font-weight: bold;                                
}
            body {

                font-family: monospace;
                font-weight: bold;
                font-size: 20px;
                margin: 0;
                overflow: hidden;
                background-color: #222
            }

            body, #box {

                display: flex;
                align-items: center;
                justify-content: center;
            }

            #box {
background: url(ico/char.png) no-repeat  -50px 250px;
margin: 0em;
                color: #aaa;
                height: 500px;
                width: 390px;
                max-width: 80%;
                max-height: 80%;
                background-color: #333;
                border-radius: 0.4em;
                border: 2px solid #555;
                position: relative;
                flex-direction: column;
                transition-duration: 0.2s;
                overflow: hidden
            }

            #box:hover, #box[drag] {
                border-color: #38f;
                color: #ddd
            }

            #input {
                cursor: pointer;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                opacity: 0
            }

            #display {
                width: 100%;
                height: 100%
            }

            select, button {
                padding: 0.5em 0.3em;
                margin: 0em;
                width: 100px;
                max-width: 100%;
                font-family: monospace;
                font-weight: bold;
                font-size: 16px;
                background-color: #444;
                color: #aaa;
                border-radius: 0.4em;
                border: 1px solid #555;
                cursor: pointer;
                transition-duration: 0.2s
            }

            select:hover, button:hover {
                background-color: #666;
                color: #ddd
            }
#status {
 left:40%;
bottom:98%;
font-size:13px;   
 height:0px;    
color: lightgreen;
  display: fixed;
height: 0px;
  justify-content: center;
  align-items: center;
z-index:99999; !important;
position:absolute;
overflow: visible; !important;
}   
        </style>
<head>
   <meta charset="UTF-8">
   <link rel="shortcut icon" href="./favicon.ico">
   <title>مجمع الألعاب</title>

   <link rel="stylesheet" href="./.stylge.css">
   <script src="./.sorttable.js"></script>
</head>

<script type="text/javascript" src="../chk.js"></script>
    <script type="text/javascript" src="../imgon.js"></script>

<body>
 
	<p id="status"></p>
<center>
<div id = stuff>
<h1>محطة ألعاب متنوعة</h1>
</div>

	
        <div id = box>
            <input type = file id = input>
            قم بأختيارلعبة من جوالك او اسحب الملف من الحاسوب الى هنا
        </div>

        <script>
            input.onchange = async () => {
                const url = URL.createObjectURL(new Blob([input.files[0]]))
                const parts = input.files[0].name.split(".")
       
                const core = await (async (ext) => {
                    if (["fds", "nes", "unif", "unf"].includes(ext))
                        return "nes"



                    if (["smc", "fig", "sfc", "gd3", "gd7", "dx2", "bsx", "swc"].includes(ext))
                        return "snes"

                    if (["z64", "n64"].includes(ext))
                        return "n64"

                    if (["nds", "gba", "gb", "z64", "n64"].includes(ext))
                        return ext
  

                    return await new Promise(resolve => {
                        const cores = {
                            "نينتندو 64": "n64",
                            "جيم بوي": "gb",
  "اركيد ومامي": "arcade",
                            "جيم بوي ادڤانس": "gba",
                            "نينتندو دي اس DS": "nds",
                            "نينتندو عائلة": "nes",
                            "سوبر نينتندو": "snes",
                            "بلايستيشن 1": "psx",
                            "ڤرتوال بوي": "vb",
                            "سجا": "segaMD",
                            "سيجا ماستر سيستم": "segaMS",
                            "سيجا CD": "segaCD",
                            "اتاري لينكي": "lynx",
                            "سيجا 32X": "sega32x",
                            "اتاري جاقوار ": "jaguar",
                            "سيجا جيم جير": "segaGG",
                            "سيجا ساترن": "segaSaturn",
                            "اتاري 7800": "atari7800",
                            "اتاري 2600": "atari2600",
                   
                        }

                        const button = document.createElement("button")
                        const select = document.createElement("select")

                        for (const type in cores) {
                            const option = document.createElement("option")

                            option.value = cores[type]
                            option.textContent = type
                            select.appendChild(option)
                        }

                        button.onclick = () => resolve(select[select.selectedIndex].value)
                        button.textContent = "تشغيل اللعبة"
                        box.innerHTML = ""

                        box.appendChild(select)
                        box.appendChild(button)
                    })
                })(parts.pop())

                const div = document.createElement("div")
                const sub = document.createElement("div")
                const script = document.createElement("script")

                sub.id = "game"
                div.id = "display"
stuff.remove()
stuff2.remove()
                box.remove()
                div.appendChild(sub)
                document.body.appendChild(div)

                window.EJS_player = "#game"
                window.EJS_gameName = parts.shift()
EJS_language = `ar-AR`
                
            window.EJS_oldCores = true; 
                window.EJS_biosUrl = "SCPH1001.BIN"
                window.EJS_gameUrl = url
                window.EJS_core = core

                window.EJS_pathtodata = "../data/"
                window.EJS_startOnLoaded = true;

window.EJS_defaultOptions = {
    'shader':'crt-mattias.glslp',
    'save-state-slot': 4,
    'save-state-location': 'keep in browser'
}
window.EJS_CacheLimit = 1073741824

window.EJS_Buttons = {
    playPause: false,
    restart: true,
    mute: false,
    settings: true,
    fullscreen: true,
    saveState: true,
    loadState: true,
    screenRecord: false,
    gamepad: false,
    cheat: true,
    volume: true,
    quickSave: true,
    quickLoad: true,
    screenshot: false,
    cacheManager: false
}


                if (window.location.hostname === "demo.emulatorjs.org") {
                    window.EJS_AdUrl = "https://ads.emulatorjs.org/";
                }
                

                script.src = "../data/loader.js"
                document.body.appendChild(script)
            }

            box.ondragover = () => box.setAttribute("drag", true)
            box.ondragleave = () => box.removeAttribute("drag")
        </script>
  

	    </tbody>
	</table>
<div id = stuff2>
<h1>محطة ألعاب متنوعة</h1>
<h2>brought to you by XoD M.Aleiwi ©2023</h2>
</div>
	
</div>
</center>
</html>

