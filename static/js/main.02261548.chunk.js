(this["webpackJsonpcolors-app"]=this["webpackJsonpcolors-app"]||[]).push([[0],{228:function(e,a,t){e.exports=t.p+"static/media/bg.8268f64e.svg"},252:function(e,a,t){e.exports=t(496)},257:function(e,a,t){},495:function(e,a,t){},496:function(e,a,t){"use strict";t.r(a);var o,n=t(0),r=t.n(n),l=t(9),c=t.n(l),i=(t(257),t(29)),m=t(25),s=t(13),d=t(59),u=t(557),p=t(555),f=t(6),h=t(5),g=t(223),b=t(15),E=t.n(b),v=t(37),x=t.n(v),C=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1400px"}[e],")")},y={ColorBox:(o={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:1}},Object(h.a)(o,C("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.333%"}}),Object(h.a)(o,C("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(h.a)(o,C("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),o),copyText:{color:function(e){return x()(e.background).luminance()>=.5?"black":"white"}},colorName:{color:function(e){return x()(e.background).luminance()<=.06?"white":"black"}},seeMore:{color:function(e){return x()(e.background).luminance()>=.5?"black":"white"},position:"absolute",background:"rgba(255,255,255,0.3)",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return x()(e.background).luminance()>=.5?"rgba(0,0,0,0.6)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",position:"absolute",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10"},copyMsg:{position:"fixed",left:"0",bottom:"0",right:"0",top:"0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":Object(h.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255,255,255,0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},C("xs"),{fontSize:"6rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showMsg:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}};var w=Object(f.a)(y)((function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),o=t[0],l=t[1],c=e.background,m=e.name,d=e.paletteId,u=e.colorId,p=e.showingFullPalette,f=e.classes;return r.a.createElement(g.CopyToClipboard,{text:c,onCopy:function(){l(!0),setTimeout((function(){return l(!1)}),1500)}},r.a.createElement("div",{style:{background:c},className:f.ColorBox},r.a.createElement("div",{style:{background:c},className:E()(f.copyOverlay,Object(h.a)({},f.showOverlay,o))}),r.a.createElement("div",{className:E()(f.copyMsg,Object(h.a)({},f.showMsg,o))},r.a.createElement("h1",null,"copied!"),r.a.createElement("p",{className:f.copyText},c)),r.a.createElement("div",null,r.a.createElement("div",{className:f.boxContent},r.a.createElement("span",{className:f.colorName},m)),r.a.createElement("button",{className:f.copyButton},"Copy")),p&&r.a.createElement(i.b,{to:"/palette/".concat(d,"/").concat(u),onClick:function(e){return e.stopPropagation()}},r.a.createElement("span",{className:f.seeMore},"MORE"))))})),j=t(236),k=(t(319),t(554)),N=t(540),O=t(556),S=t(541),B=t(120),P=t.n(B),F={Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(h.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},C("xs"),{display:"none"}),slider:Object(h.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus, .rc-slider-handle":{backgroundColor:"black",outline:"none",border:"2px solid black",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},C("sm"),{width:"150px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"}};var D=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=Object(n.useState)(e),t=Object(s.a)(a,2),o=t[0],r=t[1],l=function(){r(!o)};return[o,l]};var I=Object(f.a)(F)((function(e){var a=Object(n.useState)("hex"),t=Object(s.a)(a,2),o=t[0],l=t[1],c=D(!1),m=Object(s.a)(c,2),d=m[0],u=m[1],p=function(){u()},f=e.level,h=e.changeLevel,g=e.showLevel,b=e.classes;return r.a.createElement("header",{className:b.Navbar},r.a.createElement("div",{className:b.logo},r.a.createElement(i.b,{to:"/"},"reactcolorpicker")),g&&r.a.createElement("div",null,r.a.createElement("span",null,"Level: ",f),r.a.createElement("div",{className:b.slider},r.a.createElement(j.a,{defaultValue:f,min:100,max:900,onAfterChange:h,step:100}))),r.a.createElement("div",{className:b.selectContainer},r.a.createElement(k.a,{value:o,onChange:function(a){l(a.target.value),u(),e.handleChange(a.target.value)}},r.a.createElement(N.a,{value:"hex"},"HEX - #ffffff"),r.a.createElement(N.a,{value:"rgb"},"RGB - rgb(255,255,255)"),r.a.createElement(N.a,{value:"rgba"},"RGBA - rgb(255,255,255,1.0)"))),r.a.createElement(O.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:d,autoHideDuration:3e3,message:r.a.createElement("spam",{id:"message-id"},"Format Changed to ",o.toUpperCase(),"!"),ContentProps:{"aria-describedby":"message-id"},onClose:p,action:[r.a.createElement(S.a,{onClick:p,color:"inherit",key:"close","aria-label":"close"},r.a.createElement(P.a,null))]}))}));var A,G=Object(f.a)({PaletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})((function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return r.a.createElement("footer",{className:o.PaletteFooter},a,r.a.createElement("span",{className:o.emoji},t))})),L={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(A={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(h.a)(A,C("lg"),{width:"25%",height:"33.333%"}),Object(h.a)(A,C("md"),{width:"50%",height:"20%"}),Object(h.a)(A,C("xs"),{width:"100%",height:"10%"}),A)};var T=Object(f.a)(L)((function(e){var a=Object(n.useState)(500),t=Object(s.a)(a,2),o=t[0],l=t[1],c=Object(n.useState)("hex"),i=Object(s.a)(c,2),m=i[0],d=i[1],u=e.classes,p=e.palette,f=p.colors,h=p.paletteName,g=p.emoji,b=p.id,E=f[o].map((function(e){return r.a.createElement(w,{background:e[m],name:e.name,key:e.name,paletteId:b,colorId:e.id,showingFullPalette:!0})}));return r.a.createElement("div",{className:u.Palette},r.a.createElement(I,{level:o,changeLevel:function(e){return l(e)},handleChange:function(e){return d(e)},showLevel:!0}),r.a.createElement("div",{className:u.colors},E),r.a.createElement(G,{paletteName:h,emoji:g}))})),R=t(542),M=t(543),z=t(497),H=t(544),U=t(545),V=t(229),W=t.n(V),q=t(558),J=t(162),Y=t.n(J),K=t(163),Q=t.n(K),X=t(121),$=t.n(X);var Z,_=Object(n.memo)(Object(f.a)({root:{backgroundColor:"white",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:10,opacity:0}})((function(e){var a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors.map((function(e){return r.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})}));return r.a.createElement("div",{className:a.root,onClick:function(){return e.goToPalette(e.id)}},r.a.createElement($.a,{className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:function(a){a.stopPropagation(),e.openDialog(e.id)}}),r.a.createElement("div",{className:a.colors},n),r.a.createElement("h5",{className:a.title},t," ",r.a.createElement("spam",{className:a.emoji},o)))}))),ee=t(228),ae={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#ff7700",backgroundImage:"url(".concat(t.n(ee).a,")"),overflow:"scroll"},title:{fontSize:"2rem"},container:Object(h.a)({width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},C("xl"),{width:"80%"}),nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white",alignItems:"center","& a":{color:"white",textDecoration:"none"}},palettes:(Z={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2rem"},Object(h.a)(Z,C("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(h.a)(Z,C("xs"),{gridTemplateColumns:"repeat(1, 100%)"}),Z)};var te=Object(f.a)(ae)((function(e){var a=D(!1),t=Object(s.a)(a,2),o=t[0],l=t[1],c=Object(n.useState)(),m=Object(s.a)(c,2),d=m[0],f=m[1],h=function(e){l(),f(e)},g=function(){return l()},b=function(a){return e.history.push("/palette/".concat(a))},E=e.palettes,v=e.classes;return r.a.createElement("div",{className:v.root},r.a.createElement("div",{className:v.container},r.a.createElement("nav",{className:v.nav},r.a.createElement("h1",{className:v.title},"React Colors"),r.a.createElement(i.b,{to:"/palette/new"},"Create Palette ")),r.a.createElement(u.a,{className:v.palettes},E.map((function(e){return r.a.createElement(p.a,{key:e.id,classNames:"fade",timeout:500},r.a.createElement(_,Object.assign({},e,{goToPalette:b,openDialog:h,key:e.id,id:e.id})))})))),r.a.createElement(R.a,{open:o,"aria-labelledby":"delete-dialog-title",onClose:g},r.a.createElement(M.a,{id:"delete-dialog-title"},"Delete this Palette?"),r.a.createElement(z.a,{button:!0,onClick:function(){e.deletePalette(d),g()}},r.a.createElement(H.a,null,r.a.createElement(q.a,{style:{backgroundColor:Y.a[100],color:Y.a[600]}},r.a.createElement(W.a,null))),r.a.createElement(U.a,{primary:"Delete"})),r.a.createElement(z.a,{button:!0,onClick:g},r.a.createElement(H.a,null,r.a.createElement(q.a,{style:{backgroundColor:Q.a[100],color:Q.a[600]}},r.a.createElement(P.a,null))),r.a.createElement(U.a,{primary:"Cancel"}))))}));var oe=Object(f.a)(L)((function(e){var a=Object(n.useState)("hex"),t=Object(s.a)(a,2),o=t[0],l=t[1],c=function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter((function(e){return e.id===a})));return t.slice(1)}(e.palette,e.colorId),m=e.palette,d=m.paletteName,u=m.emoji,p=m.id,f=e.classes,h=c.map((function(e){return r.a.createElement(w,{key:e.id,name:e.name,background:e[o],showingFullPalette:!1})}));return r.a.createElement("div",{className:f.Palette},r.a.createElement(I,{handleChange:function(e){return l(e)},showLevel:!1}),r.a.createElement("h1",null,"Single Color Palette"),r.a.createElement("div",{className:f.colors},h,r.a.createElement("div",{className:f.goBack},r.a.createElement(i.b,{to:"/palette/".concat(p),className:"back-button"},"Go Back"))),r.a.createElement(G,{paletteName:d,emoji:u}))})),ne=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],re=[50,100,200,300,400,500,600,700,800,900];function le(e){var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=!0,o=!1,n=void 0;try{for(var r,l=re[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var c=r.value;a.colors[c]=[]}}catch(E){o=!0,n=E}finally{try{t||null==l.return||l.return()}finally{if(o)throw n}}var i,m,s=!0,d=!1,u=void 0;try{for(var p,f=e.colors[Symbol.iterator]();!(s=(p=f.next()).done);s=!0){var h=p.value,g=(i=h.color,m=10,x.a.scale(function(e){return[x()(e).darken(1.4).hex(),e,"#fff"]}(i)).mode("lab").colors(m)).reverse();for(var b in g)a.colors[re[b]].push({name:"".concat(h.name," ").concat(re[b]),id:h.name.toLowerCase().replace(/ /g,"-"),hex:g[b],rgb:x()(g[b]).css(),rgba:x()(g[b]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(E){d=!0,u=E}finally{try{s||null==f.return||f.return()}finally{if(d)throw u}}return a}var ce,ie=t(559),me=t(84),se=t(552),de=t(235),ue=t.n(de),pe=t(549),fe=t(81),he={root:(ce={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.4)"}},Object(h.a)(ce,C("lg"),{width:"25%",height:"20%"}),Object(h.a)(ce,C("md"),{width:"50%",height:"10%"}),Object(h.a)(ce,C("sm"),{width:"100%",height:"5%"}),ce),boxContent:{position:"absolute",width:"100%",left:"0px",color:function(e){return x()(e.color).luminance()<=.06?"white":"black"},bottom:"0px",padding:"10px",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},DeleteIcon:{transition:"all 0.3s ease-in-out"}},ge=Object(fe.b)((function(e){var a=e.classes,t=e.color,o=e.name,n=e.handleClick;return r.a.createElement("div",{className:a.root,style:{backgroundColor:t}},r.a.createElement("div",{className:a.boxContent},r.a.createElement("span",null,o),r.a.createElement($.a,{className:a.DeleteIcon,onClick:n})))})),be=Object(f.a)(he)(ge),Ee=Object(fe.a)((function(e){var a=e.colors,t=e.removeDraggableColorBox;return r.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return r.a.createElement(be,{index:a,color:e.color,key:e.name,name:e.name,handleClick:function(){return t(e.name)}})})))})),ve=t(560),xe=t(550),Ce=t(551),ye=t(232),we=t.n(ye),je=t(548),ke=t(546),Ne=t(547),Oe=t(51),Se=t(237),Be=(t(332),function(e){var a=Object(n.useState)(e),t=Object(s.a)(a,2),o=t[0],r=t[1];return[o,function(e){r(e.target.value)},function(){r("")}]});var Pe=function(e){var a=Object(n.useState)("form"),t=Object(s.a)(a,2),o=t[0],l=t[1],c=Be(),i=Object(s.a)(c,2),m=i[0],d=i[1];Object(n.useEffect)((function(){Oe.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))}))}),[m,e.palettes]);var u=e.hideForm;return r.a.createElement("div",null,r.a.createElement(R.a,{open:"emoji"===o,onClose:u},r.a.createElement(M.a,{id:"form-dialog-title"},"Pick a Palette Emoji"),r.a.createElement(Se.a,{onSelect:function(a){var t={paletteName:m,emoji:a.native};e.handleSubmit(t),l("")},title:"Pick a Palette Emoji"})),r.a.createElement(R.a,{open:"form"===o,onClose:u,"aria-labelledby":"form-dialog-title"},r.a.createElement(M.a,{id:"form-dialog-title"},"Choose a Palette Name"),r.a.createElement(Oe.ValidatorForm,{onSubmit:function(){return l("emoji")}},r.a.createElement(ke.a,null,r.a.createElement(Ne.a,null,"Enter a name for this new Palette. Please make sure it's unique!"),r.a.createElement(Oe.TextValidator,{placeholder:"Palette Name",value:m,onChange:d,fullWidth:!0,margin:"normal",name:"newPaletteName",validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Palette Name already taken"]})),r.a.createElement(je.a,null,r.a.createElement(pe.a,{onClick:u,color:"primary"},"Cancel"),r.a.createElement(pe.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))},Fe=function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},navBtns:Object(h.a)({marginRight:"1rem","& a":{textDecoration:"none"}},C("xs"),{marginRight:"0.5rem"}),button:Object(h.a)({margin:"0 0.5rem","& a":{textDecoration:"none"}},C("xs"),{margin:"0 0.2rem",padding:"0.3rem"})}};var De=Object(f.a)(Fe,{withTheme:!0})((function(e){var a=D(!1),t=Object(s.a)(a,2),o=t[0],n=t[1],l=e.classes,c=e.open,m=e.palettes,d=e.handleSubmit,u=e.handleDrawerOpen;return r.a.createElement("div",{className:l.root},r.a.createElement(ve.a,null),r.a.createElement(xe.a,{position:"fixed",color:"default",className:E()(l.appBar,Object(h.a)({},l.appBarShift,c))},r.a.createElement(Ce.a,{disableGutters:!c},r.a.createElement(S.a,{color:"inherit","aria-label":"Open drawer",onClick:u,className:E()(l.menuButton,c&&l.hide)},r.a.createElement(we.a,null)),r.a.createElement(me.a,{variant:"h6",color:"inherit",noWrap:!0},"Create A Palette")),r.a.createElement("div",{className:l.navBtns},r.a.createElement(i.b,{to:"/"},r.a.createElement(pe.a,{variant:"contained",color:"secondary",className:l.button},"Go Back")),r.a.createElement(pe.a,{variant:"contained",color:"primary",onClick:n},"Save"))),o&&r.a.createElement(Pe,{palettes:m,handleSubmit:d,className:l.button,hideForm:n}))})),Ie=t(233),Ae={picker:{width:"100% !important",marginTop:"2rem"},addNewColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",heigth:"70px"}};var Ge=Object(f.a)(Ae)((function(e){var a=Object(n.useState)("black"),t=Object(s.a)(a,2),o=t[0],l=t[1],c=Be(""),i=Object(s.a)(c,3),m=i[0],d=i[1],u=i[2],p=e.paletteIsFull,f=e.classes;return Object(n.useEffect)((function(){Oe.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),Oe.ValidatorForm.addValidationRule("isColorUnique",(function(a){return e.colors.every((function(e){return e.color!==o}))}))})),r.a.createElement("div",null,r.a.createElement(Ie.ChromePicker,{color:o,onChangeComplete:function(e){return l(e.hex)},className:f.picker}),r.a.createElement(Oe.ValidatorForm,{onSubmit:function(){var a={color:o,name:m};e.addNewColor(a),u()},useRef:"form",instantValidate:!1},r.a.createElement(Oe.TextValidator,{value:m,variant:"filled",margin:"normal",placeholder:"Color Name",onChange:d,className:f.colorNameInput,name:"newColorName",validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a Color Name","Color name already taken","Color already used"]}),r.a.createElement(pe.a,{variant:"contained",color:"primary",className:f.addNewColor,style:{backgroundColor:p?"gray":o},type:"submit",disabled:p},p?"Palette Full":"Add Color")))})),Le=t(234),Te=function(e){return{root:{display:"flex"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(Le.a)({display:"flex",alignItems:"center",padding:"0 8px",width:"100%"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{height:"100%",width:"90%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}};function Re(e){var a=D(!0),t=Object(s.a)(a,2),o=t[0],l=t[1],c=Object(n.useState)(ne[0].colors),i=Object(s.a)(c,2),d=i[0],u=i[1],p=e.maxColors,f=e.classes,g=e.palettes,b=d.length>=p;return r.a.createElement("div",{className:f.root},r.a.createElement(De,{open:o,palettes:g,handleSubmit:function(a){a.id=a.paletteName.toLowerCase().replace(/ /g,"-"),a.colors=d,e.savePalette(a),e.history.push("/")},handleDrawerOpen:l}),r.a.createElement(ie.a,{className:f.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:f.drawerPaper}},r.a.createElement("div",{className:f.drawerHeader},r.a.createElement(S.a,{onClick:l},r.a.createElement(ue.a,null))),r.a.createElement(se.a,null),r.a.createElement("div",{className:f.container},r.a.createElement(me.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),r.a.createElement("div",{className:f.buttons},r.a.createElement(pe.a,{variant:"contained",color:"secondary",onClick:function(){return u([])},className:f.button},"Clear Palette"),r.a.createElement(pe.a,{variant:"contained",color:"primary",onClick:l,disabled:b,className:f.button},"Random Color")),r.a.createElement(Ge,{paletteIsFull:b,addNewColor:function(e){return u([].concat(Object(m.a)(d),[e]))},colors:d}))),r.a.createElement("main",{className:E()(f.content,Object(h.a)({},f.contentShift,o))},r.a.createElement("div",{className:f.drawerHeader}),r.a.createElement(Ee,{colors:d,removeDraggableColorBox:function(e){u(d.filter((function(a){return a.name!==e})))},axis:"xy",onSortEnd:function(e){var a=e.oldIndex,t=e.newIndex;u(Object(fe.c)(d,a,t))},distance:20})))}Re.defaultProps={maxColors:20};var Me=Object(f.a)(Te,{withTheme:!0})(Re);t(495);var ze=function(e){var a=e.children;return r.a.createElement("section",{className:"page"},a)};var He=function(){var e=JSON.parse(window.localStorage.getItem("palettes")),a=Object(n.useState)(e||ne),t=Object(s.a)(a,2),o=t[0],l=t[1];Object(n.useEffect)((function(){window.localStorage.setItem("palettes",JSON.stringify(o))}),[o]);var c=function(e){return o.find((function(a){return a.id===e}))},i=function(e){return l([].concat(Object(m.a)(o),[e]))},f=function(e){return l(o.filter((function(a){return a.id!==e})))};return r.a.createElement(d.a,{render:function(e){var a=e.location;return r.a.createElement(u.a,null,r.a.createElement(p.a,{key:a.key,classNames:"fade",timeout:500},r.a.createElement(d.c,{location:a},r.a.createElement(d.a,{exact:!0,path:"/palette/new",render:function(e){return r.a.createElement(ze,null,r.a.createElement(Me,Object.assign({palettes:o,savePalette:i},e)))}}),r.a.createElement(d.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(ze,null,r.a.createElement(te,Object.assign({palettes:o,deletePalette:f},e)))}}),r.a.createElement(d.a,{exact:!0,path:"/palette/:id",render:function(e){return r.a.createElement(ze,null,r.a.createElement(T,{palette:le(c(e.match.params.id))}))}}),r.a.createElement(d.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(e){return r.a.createElement(ze,null,r.a.createElement(oe,{palette:le(c(e.match.params.paletteId)),colorId:e.match.params.colorId}))}}),r.a.createElement(d.a,{render:function(e){return r.a.createElement(ze,null,r.a.createElement(te,Object.assign({palettes:o,deletePalette:f},e)))}}))))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,null,r.a.createElement(He,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[252,1,2]]]);
//# sourceMappingURL=main.02261548.chunk.js.map