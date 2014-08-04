As other authors abandon their scripts when they start to take more time supporting and improving - I'm making an alternative to keep this going and help me with the work. (I will still be adding popular hosts but no long lists of barely-used ones)

This topic would be a tutorial on how to add support for new hosts, after you add it you can commit code changes to script's github https://github.com/Owyn/HandyImage so I can update this userscript here for everyone.

ok, **Tutorial**:

example host: **imghost.us.to**
example image: http://imghost.us.to/?v=98HX4.jpg

**1) making a @match line**

- it should tell the script on which pages on website script should run

**1.1)** check if website opens on www. address (or if link has www. - check if it opens without www.)

- open http://www.imghost.us.to/?v=98HX4.jpg and see that it is either unavailable or redirect us back without www. or loads fine

**1.1.1)** if it does not open or redirects back - just write address it only opens on
    // @match         http://imghost.us.to/?v=98HX4.jpg

**1.1.2)** if it opens both on www. and without it - write
    // @match         http://*.imghost.us.to/?v=98HX4.jpg

*. part will tell script to both work on www. and without it.

**1.2)** make a pattern so script would work on all image addresses for this host

in url http://imghost.us.to/?v=98HX4.jpg code after `?v=` determines which image website opens so script should work for all codes, use a wildcard (*) here like this:
    // @match         http://*.imghost.us.to/?v=*
this is our final `@match` line, we need to place it after all other `@match` lines but before `// ==/UserScript==`

**2) making a case to find image on page**

**2.1)**find image itself to display it on your screen later

right click on the image on image page and select "Inspect (code of) element"
it should open dev tools of your browser and highlight code of the image, pay attention to src="" attribute (the address where image is located) and find the common part to match all images
here the code of image is:
    <img src="http://imghost.us.to/images/98HX4.jpg" alt="98HX4.jpg" id="full_image">

src here is http://imghost.us.to/images/98HX4.jpg , so common part for all images is imghost.us.to/images/ (website url + /images/)

**2.2) writing the case itself**

now after we know how to determine images we should write it down so script would know it too:
for most of websites there is already a correct machanism to find the image is present, you just have to add new website address to one of those.
do a ctrl+f (f3) (find) in HandyImage.user.js for common part you found ( website url + "/images/" here)
what we need would be: 
    i = ev('.//img[contains(@src,"' + iurl + '/images/")]');
code above finds an <img> element containing website url and /images/ right after it in `src` attribute

old part of code now looks like:
    case "hostpic.org":
	case "zapodaj.net":
		i = ev('.//img[contains(@src,"' + iurl + '/images/")]');
		break;
and we have to just add new host address here so it would look like:
    case "hostpic.org":
	case "zapodaj.net":
	case "imghost.us.to":
		i = ev('.//img[contains(@src,"' + iurl + '/images/")]');
		break;

*changes to script to add one host is shown here in green lines as example: https://github.com/Owyn/HandyImage/commit/2a934f0386a5f622abda36d3fca02891ffb902bd (plus before line means that line was added)

**3) Testing **
Install edited userscript to your browser (drag the file to it) and open any image on the host you added, here it is: 
example image: http://imghost.us.to/?v=98HX4.jpg

if it shows image correctly then everything is done right, if it shows wrong image then common part was not unique and it found other images with it on image's page so another one should be found instead either by src= or id= or class= or onclick= (there are many cases ( ev() ) in the script, one should most likely fit it (if many fits the current image - use one with more hosts present for it already)

**4) Sharing the result **

4.1) login to http://github.com

4.2) open https://github.com/Owyn/HandyImage/blob/master/HandyImage.user.js

4.3) click `Edit`

4.4) Do the edits (either you write em manually there one by one) or you just open your locally saved HandyImage.user.js file you edited, select & copy everythere there (by pressing ctrl+A, then ctrl+C), then in browser (after pressing "Edit" on github) select everying in the file again there with Ctrl+A and press ctrl+V to replace it with your work

4.5) Click `Propose file change` (the green button at bottom), then on new page with changes preview click next green button called `Send pull request`


Now everything is done, and after I confirm this commit it will go into my main script there (and then here).

or either post lines you edited in here, discusssions, if there aren't many or you'r just lazy for github


Say if you have any question about any steps or anything else here.
