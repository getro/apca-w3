function e(e){if("string"==typeof e)return function(e="#abcdef"){e=(e=e.replace(/[^\w,.#%()\/ -]/g,"")).toLowerCase();let a=!1,r=[0,0,0,0,a,"sRGB"];if(e.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)){let f={gray0:"000000",gray1:"111111",gray2:"222222",gray3:"333333",gray4:"444444",gray5:"555555",gray6:"666666",gray7:"777777",gray8:"888888",gray9:"999999",graya:"aaaaaa",grayb:"bbbbbb",grayc:"cccccc",grayd:"dddddd",graye:"eeeeee",grayf:"ffffff",midgray:"a0a0a0",grey0:"000000",grey1:"111111",grey2:"222222",grey3:"333333",grey4:"444444",grey5:"555555",grey6:"666666",grey7:"777777",grey8:"888888",grey9:"999999",greya:"aaaaaa",greyb:"bbbbbb",greyc:"cccccc",greyd:"dddddd",greye:"eeeeee",greyf:"ffffff",midgrey:"a0a0a0",aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"778899",lightslategrey:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"};for(let o in f)if(e==o){let e={rex:/^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,sprig:function(e){for(let a=0;a<3;a++)r[a]=parseInt(e[a+1],16);return r[3]=1,!0}},t=e.rex.exec(f[o]);return r[4]=a=e.sprig(t),r}}let f={rex:/(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,parsley:function(e){let a=0,f=0,o=10,t=100,d="1";e[23]&&(d=e[23],delete e[23]),r[3]=d.match(/%/g)?parseFloat(d)/t:parseFloat(d);for(let n=1;n<e.length;n++)e[n]&&(a=a||n,f=n);switch(f){case 4:o=16,t=15,r[3]=parseInt(e[f],o)/t;case 3:o=16;for(let i=0;i<3;i++)r[i]=parseInt(e[a+i]+e[a+i],o);break;case 5:o=16;case 9:r[0]=r[1]=r[2]=10==o?parseFloat(e[f]):parseInt(e[f],o);break;case 12:r[0]=r[1]=r[2]=2.55*parseFloat(e[f]);break;case 8:o=16,t=255,r[3]=parseInt(e[8],o)/t;case 7:o=16;case 11:for(let c=0;c<3;c++)r[c]=10==o?parseFloat(e[a+c]):parseInt(e[a+c],o);break;case 14:for(let s=0;s<3;s++)r[s]=2.55*parseFloat(e[a+s]);break;case 18:r[5]=e[15];for(let b=0;b<3;b++)a++,r[b]=e[a].match(/%/g)?2.55*parseFloat(e[a]):255*parseFloat(e[a]);break;case 22:r[5]=e[a];for(let g=0;g<3;g++)a++,r[g]=e[a]?e[a].match(/%/g)?parseFloat(e[a])/t:parseFloat(e[a]):0;if(r[5].match(/^(?:hsla?|hwba?)/i)){let u,h,p,m,y,k=r[0]%360;if(k<0&&(k+=360),r[5].match(/^hsla?/i))u=r[1],h=r[2],p=0,y=1;else if(r[5].match(/^hwba?/i)){if(p=r[1],m=r[2],p+m>=1){r[0]=r[1]=r[2]=p/(p+m),r[5]="sRGB";break}u=1,h=.5,y=1-p-m}function l(e){let a=(e+k/30)%12,r=u*Math.min(h,1-h);return h-r*Math.max(-1,Math.min(a-3,9-a,1))}r[0]=Math.round(255*(l(0)*y+p)),r[1]=Math.round(255*(l(8)*y+p)),r[2]=Math.round(255*(l(4)*y+p)),r[5]="sRGB"}}return!0}},o=f.rex.exec(e);return o?(r[4]=a=f.parsley(o),r):(a=!1,console.log("colorParsley error: unable to parse string"),[0,0,0,0,a,"parsleyError"])}(e);if("number"==typeof e)return[(16711680&e)>>16,(65280&e)>>8,255&e,1,!0,"unknown"];if("object"==typeof e){if(Array.isArray(e))return e;if(!isNaN(e.r)||!isNaN(e.red)){let a=[0,0,0,0,!1,"unknown"];return a[0]=e.r?e.r:!!e.red&&e.red,a[1]=e.g?e.g:!!e.green&&e.green,a[2]=e.b?e.b:!!e.blue&&e.blue,a[3]=e.a?e.a:e.alpha?e.alpha:1,a[4]=!!(a[0]&&a[1]&&a[2]),a[5]=e.space?e.space:e.colorSpace?e.colorSpace:e.colorspace?e.colorspace:"unknown",a}}return console.log("colorParsley error: invalid input"),[0,0,0,0,!1,"inputError"]}var a={mainTRC:2.4,get mainTRCencode(){return 1/this.mainTRC},sRco:.2126729,sGco:.7151522,sBco:.072175,normBG:.56,normTXT:.57,revTXT:.62,revBG:.65,blkThrs:.022,blkClmp:1.414,scaleBoW:1.14,scaleWoB:1.14,loBoWoffset:.027,loWoBoffset:.027,deltaYmin:5e-4,loClip:.1,mFactor:1.9468554433171,get mFactInv(){return 1/this.mFactor},mOffsetIn:.0387393816571401,mExpAdj:.283343396420869,get mExp(){return this.mExpAdj/this.blkClmp},mOffsetOut:.312865795870758};function r(e,r,f){void 0===f&&(f=-1);var o=[0,1.1];if(isNaN(e)||isNaN(r)||Math.min(e,r)<o[0]||Math.max(e,r)>o[1])return 0;var t=0,d=0,l="BoW";return e=e>a.blkThrs?e:e+Math.pow(a.blkThrs-e,a.blkClmp),r=r>a.blkThrs?r:r+Math.pow(a.blkThrs-r,a.blkClmp),Math.abs(r-e)<a.deltaYmin?0:(r>e?d=(t=(Math.pow(r,a.normBG)-Math.pow(e,a.normTXT))*a.scaleBoW)<a.loClip?0:t-a.loBoWoffset:(l="WoB",d=(t=(Math.pow(r,a.revBG)-Math.pow(e,a.revTXT))*a.scaleWoB)>-a.loClip?0:t+a.loWoBoffset),f<0?100*d:0==f?Math.round(100*Math.abs(d))+"<sub>"+l+"</sub>":Number.isInteger(f)?(100*d).toFixed(f):0)}function f(e){function r(e){return Math.pow(e/255,a.mainTRC)}return void 0===e&&(e=[0,0,0]),a.sRco*r(e[0])+a.sGco*r(e[1])+a.sBco*r(e[2])}function o(e,a,r){void 0===e&&(e=[0,0,0,1]),void 0===a&&(a=[0,0,0]),void 0===r&&(r=!0),e[3]=Math.max(Math.min(e[3],1),0);for(var f=1-e[3],o=[0,0,0,1,!0],t=0;t<3;t++)o[t]=a[t]*f+e[t]*e[3],r&&(o[t]=Math.min(Math.round(o[t]),255));return o}exports.APCAcontrast=r,exports.adobeRGBtoY=function(e){function a(e){return Math.pow(e/255,2.35)}return void 0===e&&(e=[0,0,0]),.297355022711381*a(e[0])+.627372749714528*a(e[1])+.0752722275740913*a(e[2])},exports.alphaBlend=o,exports.calcAPCA=function(a,t,d,l){void 0===d&&(d=-1),void 0===l&&(l=!0);var n=e(t),i=e(a);return""!=i[3]&&1!=i[3]&&(i=o(i,n,l)),r(f(i),f(n),d)},exports.displayP3toY=function(e){function a(e){return Math.pow(e,2.4)}return void 0===e&&(e=[0,0,0]),.228982959480578*a(e[0])+.691749262585238*a(e[1])+.0792677779341829*a(e[2])},exports.fontLookupAPCA=function(e,a){void 0===a&&(a=2);var r=[["Lc",100,200,300,400,500,600,700,800,900],[0,999,999,999,999,999,999,999,999,999],[10,999,999,999,999,999,999,999,999,999],[15,777,777,777,777,777,777,777,777,777],[20,777,777,777,777,777,777,777,777,777],[25,777,777,777,120,120,108,96,96,96],[30,777,777,120,108,108,96,72,72,72],[35,777,120,108,96,72,60,48,48,48],[40,120,108,96,60,48,42,32,32,32],[45,108,96,72,42,32,28,24,24,24],[50,96,72,60,32,28,24,21,21,21],[55,80,60,48,28,24,21,18,18,18],[60,72,48,42,24,21,18,16,16,18],[65,68,46,32,21.75,19,17,15,16,18],[70,64,44,28,19.5,18,16,14.5,16,18],[75,60,42,24,18,16,15,14,16,18],[80,56,38.25,23,17.25,15.81,14.81,14,16,18],[85,52,34.5,22,16.5,15.625,14.625,14,16,18],[90,48,32,21,16,15.5,14.5,14,16,18],[95,45,28,19.5,15.5,15,14,13.5,16,18],[100,42,26.5,18.5,15,14.5,13.5,13,16,18],[105,39,25,18,14.5,14,13,12,16,18],[110,36,24,18,14,13,12,11,16,18],[115,34.5,22.5,17.25,12.5,11.875,11.25,10.625,14.5,16.5],[120,33,21,16.5,11,10.75,10.5,10.25,13,15],[125,32,20,16,10,10,10,10,12,14]],f=[["∆Lc",100,200,300,400,500,600,700,800,900],[0,0,0,0,0,0,0,0,0,0],[10,0,0,0,0,0,0,0,0,0],[15,0,0,0,0,0,0,0,0,0],[20,0,0,0,0,0,0,0,0,0],[25,0,0,0,12,12,12,24,24,24],[30,0,0,12,12,36,36,24,24,24],[35,0,12,12,36,24,18,16,16,16],[40,12,12,24,18,16,14,8,8,8],[45,12,24,12,10,4,4,3,3,3],[50,16,12,12,4,4,3,3,3,3],[55,8,12,6,4,3,3,2,2,0],[60,4,2,10,2.25,2,1,1,0,0],[65,4,2,4,2.25,1,1,.5,0,0],[70,4,2,4,1.5,2,1,.5,0,0],[75,4,3.75,1,.75,.188,.188,0,0,0],[80,4,3.75,1,.75,.188,.188,0,0,0],[85,4,2.5,1,.5,.125,.125,0,0,0],[90,3,4,1.5,.5,.5,.5,.5,0,0],[95,3,1.5,1,.5,.5,.5,.5,0,0],[100,3,1.5,.5,.5,.5,.5,1,0,0],[105,3,1,0,.5,1,1,1,0,0],[110,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[115,1.5,1.5,.75,1.5,1.125,.75,.375,1.5,1.5],[120,1,1,.5,1,.75,.5,.25,1,1],[125,0,0,0,0,0,0,0,0,0]],o=[e.toFixed(a),0,0,0,0,0,0,0,0,0],t=777,d=0==(e=Math.abs(e))?1:.2*e|0,l=0,n=.2*(e-r[d][l]);for(l++;l<10;l++)o[l]=(t=r[d][l])>400?t:e<14.5?999:e<29.5?777:t>24?Math.round(t-f[d][l]*n):t-.5*(2*f[d][l]*n|0);return o},exports.reverseAPCA=function(e,r,f,o){if(void 0===e&&(e=0),void 0===r&&(r=1),void 0===f&&(f="bg"),void 0===o&&(o="hex"),Math.abs(e)<9)return!1;var t,d,l=r,n=e>0?a.scaleBoW:a.scaleWoB,i=e>0?a.loBoWoffset:-a.loWoBoffset;if(e=(.01*parseFloat(e)+i)/n,r=r>a.blkThrs?r:r+Math.pow(a.blkThrs-r,a.blkClmp),"bg"==f||"background"==f){if(t=e>0?a.normBG:a.revBG,d=e>0?a.normTXT:a.revTXT,l=Math.pow(Math.pow(r,t)-e,1/d),isNaN(l))return!1}else{if("txt"!=f&&"text"!=f)return!1;if(t=e>0?a.normTXT:a.revTXT,d=e>0?a.normBG:a.revBG,l=Math.pow(e+Math.pow(r,t),1/d),isNaN(l))return!1}if(l>1.06||l<0)return!1;if(l=l>a.blkThrs?l:Math.pow((l+a.mOffsetIn)*a.mFactor,a.mExp)*a.mFactInv-a.mOffsetOut,l=Math.max(Math.min(l,1),0),"hex"===o){var c=Math.round(255*Math.pow(l,a.mainTRCencode)).toString(16).padStart(2,"0");return"#"+c+c+c}if("color"===o){var s=Math.round(255*Math.pow(l,a.mainTRCencode));return[s,s,s,1,"bg"==f?"txtColor":"bgColor"]}return("Y"===o||"y"===o)&&Math.max(0,l)},exports.sRGBtoY=f;
//# sourceMappingURL=apca-w3.cjs.map
