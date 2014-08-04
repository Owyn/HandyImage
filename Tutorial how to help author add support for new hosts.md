As other authors abandon their scripts when they start to take more time supporting and improving - I'm making an alternative to keep this going and help me with the work. (I will still be adding popular hosts but no long lists of barely-used ones)

This topic would be a tutorial on how to add support for new hosts, after you add it you can commit code changes to script's github https://github.com/Owyn/HandyImage so I can update this userscript here for everyone.

ok, **Tutorial**:

example host: **imgshow.me**

example image: http://imgshow.me/image/sm

**1) making a @match line**

- it should tell the script on which pages on website script should run

**1.1)** check if website opens on `www.` address (or if link has `www.` - check if it opens without `www.`)

- open `http://www.imgshow.me/image/sm` and see that it is either unavailable or redirect us back without `www.` or loads fine

**1.1.1)** if it does not open or redirects back - just write address it only opens on  
    `// @match         http://www.imgshow.me/image/sm`

**1.1.2)** if it opens both on www. and without it - write  
    `// @match         http://*.imgshow.me/image/sm`

`*.` part will tell script to both work on `www.` and without it.

**1.2)** make a pattern so script would work on all image addresses for this host

in url `http://imgshow.me/image/sm` code after `/image/` determines which image website opens so script should work for all codes, use a wildcard `*` here like this:  
    `// @match         http://*.imgshow.me/image/*`  
this is our final `@match` line, we need to place it after all other `@match` lines but before `// ==/UserScript==` (don't put it in the middle of the hostlist, place it last - this way we can keep track when host was added)

**2) making a case to find image on page**

**2.1)** find image itself to display it on your screen later

right click on the image on image page and select "Inspect (code of) element"
it should open dev tools of your browser and highlight code of the image, pay attention to src="" attribute (the address where image is located) and find the common part to match all images
here the code of image is:  
    `<img src="http://imgshow.me/images/60wmMdG.jpg" alt="60wmMdG.jpg" id="full_image">`  

src here is `http://imgshow.me/images/60wmMdG.jpg` , so common part for all images is `/images/` - to be exact - `website url + /images/` (we need to take the biggest common part of the url to not confuse image with other images which might appear on the image page now or later)

**2.2) writing the case itself**

now after we know how to determine images we should write it down so script would know it too:
for most of websites there is already a correct machanism to find the image is present, you just have to add new website address to one of those.
do a ctrl+f (f3) (find) in `HandyImage.user.js` for common part you found ( `website url + "/images/"` here)
what we need would be:  
    `i = ev('.//img[contains(@src,"' + iurl + '/images/")]');`

code above finds an `<img>` element containing `website url` and `/images/` right after it inside `src` attribute

old part of code now looks like:
```
    case "hostpic.org":
	case "zapodaj.net":
		i = ev('.//img[contains(@src,"' + iurl + '/images/")]');
		break;
```
and we have to just add new host address (without `www.` here so it would look like:
```
    case "hostpic.org":
	case "zapodaj.net":
	case "imgshow.me":
		i = ev('.//img[contains(@src,"' + iurl + '/images/")]');
		break;
```

*changes to script to add one host is shown here in green lines as example: https://github.com/Owyn/HandyImage/commit/2a934f0386a5f622abda36d3fca02891ffb902bd (plus before line means that line was added)

**3) Testing**
Install edited userscript to your browser (drag the file to it) and open any image on the host you added, here it is: 
example image: http://imgshow.me/image/sm

if it shows image correctly then everything is done right, if it shows wrong image then common part was not unique and it found other images with it on images page so another one should be found instead either by `src=` or `id=` or `class=` or `onclick`= (there are many cases for sites in the script, one should most likely fit it (if many fits the current image - use one with more hosts already present for it - don't bleat the script writing new cases or expanding less used ones without 100% need. It's easier to support script this way)

**4) Sharing the result**

4.1) login to http://github.com

4.2) open https://github.com/Owyn/HandyImage/blob/master/HandyImage.user.js

4.3) click `Edit`

4.4) Do the edits (either you write em manually there one by one) or you just open your locally saved HandyImage.user.js file you edited, select & copy everythere there (by pressing ctrl+A, then ctrl+C), then in browser (after pressing "Edit" on github) select everying in the file again there with Ctrl+A and press ctrl+V to replace it with your work

4.5) Click `Propose file change` (the green button at bottom), then on new page with changes preview click next green button called `Send pull request`


Now everything is done, and after I confirm this commit it will go into my main script there (and then here).

or either post lines you edited in here, discusssions, if there aren't many or you'r just lazy for github


Comment if you have any question about any steps or anything else here.
