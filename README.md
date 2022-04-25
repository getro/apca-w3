<p align="center">
 <img src="images/APCAcolor4.png"  alt="APCA The Revolution Will Be Readable" width="420"><br><br>
    
  <a href="https://github.com/Myndex/SAPC-APCA">
    <img src="https://badgen.net/badge/SAPC/Main Repo/db6b0b" alt="SAPC/Main Repo" />
  </a> &nbsp;&nbsp;  
  <a href="https://npmjs.org/package/apca-w3">
    <img src="https://badgen.net/npm/v/apca-w3?color=3000c0&icon=npm" alt="version" />
  </a> &nbsp;&nbsp;
  <a href="https://github.com/Myndex/apca-w3/src/">
    <img src="https://badgen.net/badge/JS/Vanilla/889900" alt="plain vanilla JS" />
  </a> &nbsp;&nbsp;
  <a href="https://github.com/Myndex/apca-w3/blob/master/LICENSE.md">
    <img src="https://badgen.net/badge/license/W3 • Web Use?icon=github&color=BB5FD1" alt="license" />
  </a> &nbsp;&nbsp;
</p>
<p align="center">
  <a href="https://github.com/Myndex/apca-w3">
    <img src="https://badgen.net/github/last-commit/Myndex/apca-w3/?icon=github" alt="last commit" />
  </a> &nbsp;&nbsp;
  <a href="https://npmjs.org/package/apca-w3">
    <img src="https://badgen.net/npm/dt/apca-w3?color=6000b0&icon=npm" alt="downloads" />
  </a> &nbsp;&nbsp;
  <a href="https://twitter.com/MyndexResearch">
    <img src="https://badgen.net/badge/@/MyndexResearch?icon=twitter" alt="twitter" />
  </a> &nbsp;&nbsp;
  <a href="https://www.myndex.com/APCA/">
    <img src="https://badgen.net/badge/APCA/Live Tool/db6b0b" alt="APCA/Live Tool/" />
  </a> &nbsp;&nbsp;    
</p>

# APCA™ for W3C & WCAG\_3
## npm i apca-w3
The APCA version in this repositiory is licensed to the W3/AGWG per the collaborative agreement.

### Questions/Comments?
#### For comments and discussions, please see the main SAPC-APCA repo, [discussion area.]( https://github.com/Myndex/SAPC-APCA/discussions)

-----
## <s>Advanced</s> ... _Accessible_ Perceptual Contrast Algorithm
The "Advanced" was originally part of an internal code name "SAPC" that eventually becasme "APCA"... and the word "advanced" moved along with that...  realized that first "A" should - almost has to — be "Accessibility." And it's shockingly obvious now, LOL.

Thus, from here on, APCA stands for:

### _Accessible_ <br> Perceptual <br> Contrast <br> Algorithm



<img width='250' alt="Poster: a picture of crash test dummies crashing out of a car, and text that says don't be a dummy! Stop using low contrast text. At the bottom it says APCA the world is reading" src='https://user-images.githubusercontent.com/42009457/161151275-7c4feea7-888a-43f1-a9c0-7504afaac258.png'>  <img  width='240' alt='Smokey the bear saying  ONLY YOU CAN STOP LOW CONTRAST' src='https://user-images.githubusercontent.com/42009457/161151536-a0add333-161e-482d-a99a-d1d076c75daf.png'>   <img  width='220' alt='Uncle Sam saying I want you to use high contrast text' src='https://user-images.githubusercontent.com/42009457/161151222-74fb81af-f87b-4d7c-a41c-756e1ee3056f.png'> 

### Current Version: **0.1.2** G (w3) _beta_

#### 0.1.2 • April 23, 2022
**NEW!** `fontLookupAPCA(Lc)` Live font lookup table — sent it a contrast, it returns an array of font sizes (in px) for each of 9 weights (100 to 900).

**NEW!** `reverseAPCA(Lc,Y,use,returnAs)` 
New in this version is a reverse contrast lookup. Specify a contrast, and one color (i.e. bg) and it will try to find a color with that contrast.

#### CHANGE for 0.1.1:
**NEW!! Alpha channels! AdobeRGB!!**

#### CHANGE for 0.1.0:
NEW! displayP3!     
colorParsley() is now in its own package and must be imported separately.


APCA is a contrast assessment method for predicting the perceived contrast between sRGB colors on a computer monitor. It has been developed as an assessment method for W3 Silver/WCAG3 accessibility standards relating to content for computer displays and mobile devices, with a focus on readability and understandability.


-----
## _Accessibility Statement for Beta Sites_
Beta testers may wish to include the following statement in their sites boilerplate:
### This website is beta testing the APCA guidelines for determining text and non-text contrast. It is well known that WCAG 2 contrast maths are not accurate regarding human perception, and automated testing using WCAG 2 math may incorrectly indicate errors in some color pairs on this site. The APCA guidelines are a substantial improvement in accessibility over WCAG 2 contrast criterions, and therefore compliant with the ADA, and also 508 rules under the alternative methods section. Any automated or manual testing done to determine conformance of this site needs to be conducted using a perceptually accurate method such as APCA.

-----
## Font Lookup Table
Current as of January 27, 2022

<img src="./images/Jan27_2022LUT_byFont.jpg" alt="January 27, 2022 Font Lookup Table">

<img src="./images/Jan27_2022LUT_legend.jpg" alt="January 27, 2022 Font Table Legend">

<img src="./images/Jan27_2022LUT_byLc.jpg" alt="January 27, 2022 Font Lookup sorted by Lc">


------
## QuickStart
### _Install_

```javascript
    npm i apca-w3
```

### _Import_
```javascript
<script type="module">
 import { APCAcontrast, sRGBtoY, displayP3toY, adobeRGBtoY, alphaBlend, calcAPCA, fontLookupAPCA
 } from './apca-w3';
 import { colorParsley } from '../node_modules/colorparsley/dist/colorparsley';  // optional string parsing
</script>
```

### _Usage:_
PARSE:
If you need to parse a color string or 24bit number, use the colorParsley() function:

```javascript
    let rgbaArray = colorParsley('aliceblue');
```
ALPHA BLEND
Intended for blending the foreground color into the background. Only the foreground has an alpha. There is no conversion to linear space, so blending takes place is the working colorspace, as is standard.

```javascript
                       // Send 0-255 arrays alphaBlend(FG, BG)
    let alphaBlended = alphaBlend([0,0,0,0.6],colorParsley([255,255,255])),

                       // Send 0-1.0 float arrays for displayP3toY, 5th element
                      // is bool (false for floats): alphaBlend(FG, BG, false)
    let alphaBlended = alphaBlend([0.7,1.0,1.0,0.33],colorParsley([0,0,0]),false);
```

CONVERT TO Ys
Send rgba INT array `[123,123,123,1.0] ` to ` sRGBtoY() ` — this is a slightly different luminance Y that the IEC piecewise.

```javascript
    let Ys = sRGBtoY([123,123,123,1.0]);
```
FIND Lc CONTRAST
First color _must_ be text, second color must be the background.

```javascript
    let textColor = [17,17,17,1.0];
    let backgroundColor = [232,230,221,1.0];
    
    let contrastLc = APCAcontrast( sRGBtoY( textColor ), sRGBtoY( backgroundColor ) );
```
Example using everything together, including alphaBlend:

```javascript

  let colorTEXT =  rgb(12,23,34,0.65);
  let colorBG =  #e6e0dd;
  
  let Lc = APCAcontrast(sRGBtoY( alphaBlend(colorParsley(colorTEXT), colorParsley(colorBG)) ),
                        sRGBtoY( colorParsley(colorBG) ));
```
#### SHORTCUT ALIAS
The long complete line shown above is aliased into a function ` calcAPCA() `. Alpha for the text is automatically detected, and ignored if 1 or ''. The input type is also auto detected (string, king of string, number, array, object). By default returns a signed float -108.0 to 106.0 (approx)

```javascript
    let Lc = calcAPCA(colorTEXT,colorBG);
```

### NEW! Font Size Array
New in this version is an interpolated font size array. Send `fontLookupAPCA(contrast)` a contrast value, and it returns an array, with the contrast (Lc) as the zeroth element, then 9 font sizes in px corresponding to weights 100 thru 900:

    ['LcValue',100,200,300,400,500,600,700,800,900]

Example:

	  fontArray = fontLookupAPCA(-68.541);

    console.log(fontArray) // -68.541,67,40,28,20.5,18.5,16.5,15,416,418

Thus the 400 weight font is indicating 20.5px

### NEW! Reverse APCA 
New in this version is a reverse contrast lookup. Specify a contrast, and one color (i.e. bg) and it will try to find a color with that contrast.

#### NOTES:
1) Currently only returns a greyscale color
2) If a color can not fit the contrast, or other error, returns false.
    - A small overrun/underrun of a few percent is permitted.
3) Can return a hex string (default) or an array of RGBA values, with the fifth element a string indicating if the color is for text or bg.

    reverseAPCA (Lc, knownY, knownType = 'bg', returnAs = 'hex')


### _String Theory_
The following are the available input types for colorParsley(), HSL is not implemented at the moment. All are automatically recognized:

### INPUT as STRINGS:
- **No Alpha**
    - ` '#abc' ` or ` 'abc' ` (interpreted as ` 'aabbcc' `)
    - ` '#abcdef' ` or ` 'abcdef' ` (hash is ignored)
    - ` 'rgb(123, 45, 67)' `
    - ` 'aquamarine' ` or ` 'magenta' ` (full CSS4 named colors list)

- **With Alpha** _(alpha is NOT presently calculated, and assumed as fully opaque)_
    - ` '#abcf' ` or ` 'abcf' ` (interpreted as ` 'aabbccff' `)
    - ` '#123456ff' ` or ` '123456ff' ` (hash is ignored)
    - ` 'rgba(123, 45, 67,1.0)' `

### INPUT as NUMBER:
- **As hex**
    - ` 0xabcdef `
- **As integer**
    - ` 11259375 `

No alpha parsing for _numbers_ in part as there are big and little endian issues that need to be resolved.




### colorParsley() string Parsing Removed, now a dependency
The function is called "colorParsley()" because what is that useless leafy thing the restaurant puts on the plate?  Well, most mature software already has good parsing, and you may want to minimize the file leaving all that "parsley" at the restaurant...

So, colorParsley() is removed from the APCA-W3 file, and is now its own package, listed as a dependency here.

**colorParsley() is required for the shorthand ` calcAPCA() `**


### Two Secret Parameters
There are two extra parameters for calcAPCA(), and one extra for APCAcontrast.

    calcAPCA( text, BG, places, isInt )
    APCAcontrast ( txYs, bgYs, places )
    alphaBlend( txt, BG, isInt )

` places ` defaults to -1, but you can send it 0 and the Lc is returned as a rounded value, and instead of a minus sign for polarity, 'WoB' for white on black is returned.

` isInt ` defaults to true, as we assume the RGB tuples are 0-255. If you are sending float such as for displayP3, then set ` isInt = false ``

_NOTE: neither of these are "official" and may change, move, or vanish._

-----
## EXTRAS
Additional documentation, including a plain language walkthrough, LaTeX math, and more are available [at the main SAPC repo.](https://github.com/Myndex/SAPC-APCA)

### Current APCA Constants ( 0.1.1 G - W3 )
**These constants are for use with the web standard sRGB colorspace.**
```javascript
 // 0.1.1 - W3 constants (W3 license only):
    
  Exponents =  { mainTRC: 2.4,       normBG: 0.56,       normTXT: 0.57,     revTXT: 0.62,     revBG: 0.65, };
  
  ColorSpace = { sRco: 0.2126729,    sGco: 0.7151522,    sBco: 0.0721750, };
    
  Clamps =     { blkThrs: 0.022,     blkClmp: 1.414,     loClip: 0.1,     deltaYmin: 0.0005, };
        
  Scalers =    { scaleBoW: 1.14,     loBoWoffset: 0.027, 
                 scaleWoB: 1.14,     loWoBoffset: 0.027, };	
```

----- 
### [LIVE VERSION][APCAsite]
There is a working version with examples and reference material on [the APCA site][APCAsite]

[APCAsite]: https://www.myndex.com/APCA/

[![](https://raw.githubusercontent.com/Myndex/SAPC-APCA/master/images/Myndex_eye_cielabWide.png)](https://github.com/Myndex)

### APCA is the _Advanced Perceptual Contrast Algorithm_
## THE REVOLUTION WILL BE READABLE™


<sub>**Disclaimer:** _APCA is being evaluated as a replacement for WCAG 2 contrast math for future standards and guidelines, however, standards that will be incorporating APCA are still developmental. Because WCAG 2 contrast math does not accurately model human visual perception nor visual impairments, there will be discrepancies between WCAG 2 contrast math, and perceptually uniform models such as APCA. It is up to the end user to determine suitability of purpose for their region and conformance requirements._</sub>
