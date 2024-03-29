<h3>Features</h3>
<p>This script leaves just the image (largest available version) on pages of <strong>many image hosting sites</strong> skipping all the annoying stuff like ads, "continue to image" etc and <strong>disabling</strong> any kind of <strong>pop-ups</strong>. (script for images opened directly in browser can be found <a href=https://github.com/Owyn/Center_Image>here</a> - if you like centering of image, autoresize and hotkeys)</p>

<ul><li><strong>Hotkeys</strong> - very handy ones</li>
<li><strong>fullsizing</strong> image to its largest available version when opened, <strong>nothing else</strong> than image</li>
<li><strong>autofit</strong> to screen big images by default (larger than screen both vertically and horizontally)</li>
<li><strong>address</strong> of page doesn't change so you still can copy\share it</li>
<li><strong>image centering</strong> (like in firefox) - pretty usefull on wide monitors</li>
<li><strong>configurable</strong> - choose background color and what images to fit to screen when opened, or run your js</a></li>
<li><strong>fast</strong> - does its job before page loads its resources (or run JavaScripts in FireFox)</li>
<li><strong>fail-safe</strong> - if it didn't find image to fullsize - it won't do anything to mess the page up and will try again in few sec.</li></ul>

<h3>Hotkeys</h3>
<ul>
<li><strong>WASD</strong> \ <strong>arrows</strong> \ <strong>num4862</strong> - scroll image to right\left\top\bottom accordingly</li>
<li><strong>Q</strong> \ <strong>num5</strong> \ <strong>click on image</strong> - resize image from full-window-size to original and vica versa</li>
<li><strong>Tab</strong> \ <strong>Enter</strong> \ <strong>Middle Mouse Click on image</strong> - resize image to fill the window with it or return it to original</li>
<li><strong>ctrl+space</strong> and <strong>ctrl+shift+space</strong> - simular to scroll of spacebar but horizontally</li>
<li><strong>P</strong> \ <strong>menu item</strong> in (tamper\grease)monkey icon - open configuration menu</li>
<li><strong>R</strong> - reload page with script disabled (to see comments etc)</li>
<li><strong>F</strong> - fullscreen mode (for videos)</li>
<li><strong>M</strong> - mute audio (for videos)</li>
<li><strong>ctrl + S</strong> - save image\video (same as when you right click the image and press save as),<br>
on booru sites it automatically puts artist and character tags into saved filename, you can also autosave your favorite tags of choice in names, use custom JS setting for that, e.g. put <code>grab_fav_tags = ['solo', 'animal_ears', 'horse']</code> at top there,<br>
to have the "save as" dialogue where you choose or correct the filename yourself instead of having the file downloaded right away - you have to set <code>download mode</code> to <code>Browser API</code> in TM -> dashboard -> settings: 
<img src=https://github.com/Owyn/HandyImage/assets/1309656/2419da42-9a5c-4200-bb9c-aa02e0616632></li>
</ul>

<h3>Supported browsers:</h3>
<img src=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/180px-Google_Chrome_icon_%28September_2014%29.svg.png><img src=https://github.com/Owyn/Universal_Dark_Theme/assets/1309656/0d2c7e4a-4038-4c06-96a8-505a36c9d625> 

You need a userscript manager to install and use the script, e.g. <a href="https://www.tampermonkey.net/">TamperMonkey</a> (might not work in other less-pupular and less-maintained ones)

<h3>How to request a new imagehost support or fix for old one</h3>
<p>Please, if you would like to request a new site or report a non-working one, please, remember to write at least ONE image URL where the script should work, then head right to <strong><a href="https://github.com/Owyn/HandyImage/issues">Feedback section</a></strong>.</p>

<p>In the topic title, write "fix" if the site is already on the list or "add" if it is a new request, and the domain (eg: add googleimagehost.com)</p>

<em>* But keep in mind that when requesting nameless non-popular image hosting google knows not much about you'd have to provide a reason for adding it - a website url which uses that hosting a lot for images</em>
<br><em>** Or if you are a developer yourself and would like to help add new hosts, you can <a href="https://github.com/Owyn/HandyImage/blob/master/Tutorial:%20adding%20new%20imagehosts%20support.md">submit code edits</a> at <a href="https://github.com/Owyn/HandyImage">GitHub page</a></em>

<br>
<h3>If the userscript fails for some website:</h3>
<p>Try disabling your ADBlocker for that site - occasionally it might prevent not only ads but this script as well from working there
</p>
<img src=https://user-images.githubusercontent.com/1309656/199995950-68fdb2c3-d11c-4b2a-ac34-a6e969b893cb.png>


<br>
<h3>If you see a placeholder instead of an image:</h3>
<p>Try disabling your Tracking Protection \ other Privacy extensions for that site - that is the reason why:
</p>
<img src=https://user-images.githubusercontent.com/1309656/199995080-a2d4d769-3ae9-44da-9ea6-87504ef74bbe.png>
