<h3>Features</h3>
<p>This script leaves just the image\video (largest available version) on pages of <strong>many image hosting sites</strong> skipping all the annoying stuff like ads, "continue to image" etc and <strong>disabling</strong> any kind of <strong>pop-ups</strong>. (script for images opened directly in browser can be found <a href=https://github.com/Owyn/Center_Image>here</a> - does the same things as this script but for directly opened images (e.g. via "open image in a new tab"))</p>

<ul><li><strong>Hotkeys</strong> - very handy ones (e.g. - rescale image to screen or to fill it from the inside)</li>
<li><strong>clean</strong> shows just an empty page with an image or video in its <strong>largest available version</strong> when opened</li>
<li><strong>fights Ads</strong> - Automatically handles "Continue to image" buttons, tries to stop all the javascripts, pop-ups, event listeners, delayed tasks and other tricks on the page </li>
<li><strong>autofit</strong> to screen big or small images (optionally)</li>
<li><strong>configurable</strong> - choose background color and what images to fit to screen when opened, or run your own js code addons, you can even make the script run on any website url pattern and it'd choose the biggest images on the page to fullsize there without the script needing to directly add support for that website</li>
<li><strong>fast</strong> - does its job as soon as the needed element (image) is loaded into the page and usually before other resources are loaded, also uses optimal ways to find the image - CSS paths and uses Page Mutation Observer instead of tasks to make it lightweight</li>
<li><strong>fail-safe</strong> - if it didn't find image to fullsize - it won't do anything to mess the page up and will try again in few sec.</li></ul>

<h3>Mouse Features</h3>
<ul>
<li><strong>Drag-scroll</strong> - scroll image by dragging it with left mouse button</li>
<li><strong>Wheel-zoom</strong> - zoom the image with ctrl+wheel (or without ctrl with an option)</li>
</ul>

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
<img width="128" height="128" alt="Chrome" src="https://github.com/user-attachments/assets/7c5aed3d-9945-4c15-a769-9997b9730a6a" />
<img width="128" height="128" alt="Firefox" src="https://github.com/user-attachments/assets/999bf8f6-d336-48a9-88c9-2b09a6e24ee9" />


You need a userscript manager to install and use the script, e.g. <a href="https://www.tampermonkey.net/">TamperMonkey</a> (might not work in other less-pupular and less-maintained ones)

<h3>How to request a new imagehost support or fix for old one</h3>
<p>Please, if you would like to request a new site or report a non-working one, please, remember to write at least ONE image URL where the script should work, then head right to <strong><a href="https://github.com/Owyn/HandyImage/issues">Feedback section</a></strong>.</p>

<p>In the topic title, write "fix" if the site is already on the list or "add" if it is a new request, and the domain (eg: add googleimagehost.com)</p>

<em>* But keep in mind that when requesting nameless non-popular image hosting google knows not much about you'd have to provide a reason for adding it (cuz one guy was requesting tons of noname websites for no reason at all...) - a website url which uses that hosting a lot for images</em>
<br><em>** Or if you are a developer yourself and would like to help add new hosts, you can <a href="https://github.com/Owyn/HandyImage/blob/master/Tutorial:%20adding%20new%20imagehosts%20support.md">submit code edits</a> at <a href="https://github.com/Owyn/HandyImage">GitHub page</a></em>

<br>
<h3>If the userscript fails for some website:</h3>
<p>Try disabling your ADBlocker for that site - <b>very rarely</b> it might prevent not only ads but this script as well from working there (such thing was happening in the past, but nowadays I haven't encountered it with uBlock - but just so you know)
</p>
<img src=https://user-images.githubusercontent.com/1309656/199995950-68fdb2c3-d11c-4b2a-ac34-a6e969b893cb.png>


<br>
<h3>If you see a placeholder instead of an image:</h3>
<p>Try disabling your Tracking Protection \ other Privacy extensions for that site - that could be the reason why (<b>happened only for one site for me, but just so you know</b>):
</p>
<img src=https://user-images.githubusercontent.com/1309656/199995080-a2d4d769-3ae9-44da-9ea6-87504ef74bbe.png>
