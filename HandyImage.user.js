// ==UserScript==
// @name          Handy Image
// @namespace     handyimage
// @author        Owyn
// @version       4.5.5
// @updateURL     https://userscripts.org/scripts/source/166494.user.js
// @downloadURL   https://userscripts.org/scripts/source/166494.user.js
// @homepage      https://userscripts.org/scripts/show/166494
// @description   Shows just fullsize Image with hotkeys & without pop-ups on many image-hosting sites
// @run-at        document-start
// @grant         none
// @match         http://www.imagebam.com/image/*
// @match         http://imgchili.net/show/*
// @match         http://imgchili.com/show/*
// @match         http://imgbox.com/*
// @match         http://imagetwist.com/*/*
// @match         http://*.imagevenue.com/img.php?*
// @match         http://imageshack.us/photo/*
// @match         http://imagepix.org/image/*
// @match         http://image2you.ru/*/*/
// @match         http://imageban.ru/show/*
// @match         http://fastpic.ru/view/*
// @match         http://www.pixhost.org/show/*
// @match         http://picpicture.com/share.php?id=*
// @match         http://*.pic5you.ru/*/*/
// @match         http://*.megaimg.ru/*/*/
// @match         http://tinypic.com/view.php?pic=*
// @match         http://radical-foto.ru/*
// @match         http://pics-hosting.com/viewer.php?file=*
// @match         http://www.fotolink.su/v.php?id=*
// @match         http://www.stooorage.com/show/*/*
// @match         http://*.pimpandhost.com/image/*
// @match         http://*.pixroute.com/*.html
// @match         http://*.piccash.net/*
// @exclude       http://piccash.net/cabinets/upl/
// @exclude       http://www.piccash.net/cabinets/upl/
// @match         http://*.picforall.ru/*/*/
// @match         http://pron-pix.com/image/*
// @match         http://imagecurl.com/view*
// @match         http://imagecurl.org/view*
// @match         http://*.euro-pic.eu/share*
// @match         http://amateurfreak.org/share*
// @match         http://*.imagescream.com/?v=*
// @match         http://picturescream.asia/*
// @match         http://imagepdb.com/?*
// @match         http://xxxhost.me/viewer.php?*
// @match         http://imadul.com/?*
// @match         http://d69.in/?*
// @match         http://*.pixdir.net/show/*
// @match         http://postimg.org/image/*
// @exclude       http://postimg.org/image/*/*/
// @match         http://niceimage.pl/*.html
// @match         http://picbank.pl/*.html
// @match         http://*.pics-money.ru/v.php?id=*
// @match         http://imgcloud.co/img*.html
// @match         http://*.freeimgup.com/*.*
// @match         http://imgtiger.com/viewer.php?*
// @match         http://*.imageporter.com/*.html
// @match         http://ruleimg.com/img*
// @match         http://*.picage.ru/*/*
// @match         http://*.imgserve.net/img*
// @match         http://*.images-host.biz/*/*
// @match         http://*.imgfantasy.com/*
// @match         http://*.imgmoney.com/img-*
// @match         http://*.platimzafoto.ru/full/
// @match         http://*.platimzafoto.ru/*.html
// @match         http://*.imageontime.com/*mg*
// @match         http://*.pic2profit.com/*/*
// @exclude       http://pic2profit.com/cabinet/*
// @exclude       http://*.pic2profit.com/cabinet/*
// @match         http://imgdino.com/viewer.php*
// @match         http://*.anonpic.com/?v=*
// @match         http://*.galhost.ru/*/*
// @match         http://*.pic-money.ru/*.html
// @match         http://*.pic-money.ru/full/
// @match         http://*.imgcandy.net/img-*
// @match         http://*.imagecorn.com/img-*
// @match         http://*.imgrill.com/img-*
// @match         http://imgbar.net/*.html
// @match         http://*.imagefolks.com/img-*
// @match         http://imagepicsa.com/img-*
// @match         http://*.imgbunk.com/image/*
// @match         http://pzy.be/v/*
// @match         http://www.turboimagehost.com/p/*
// @match         http://*.subirimagenes.com/*
// @match         http://*.screenlist.ru/details.php?image_id=*
// @match         http://qrrro.com/images/*
// @match         http://*.imgnip.com/viewer.php?*
// @match         http://*.imgwiev.tk/?pm=*
// @match         http://*.javelite.tk/viewer.php?id=*
// @match         http://www.pic-upload.de/view-*
// @match         http://picshare.geenza.com/pics/*
// @match         http://www.imgbabes.com/*/*.html
// @match         http://*.imgah.com/*/*.*
// @match         http://*.goimagehost.com/xxx/*.*
// @exclude       http://goimagehost.com/xxx/?v=*
// @exclude       http://www.goimagehost.com/xxx/?v=*
// @match         http://*.hostpics.info/view.php?*
// @match         http://*.hotimg.com/image/*
// @match         http://ibunker.us/f*
// @match         http://ichan.org/image.php?path=*
// @match         http://*.imagearn.com/*
// @match         http://www.dumppix.com/view*
// @match         http://www.bilder-upload.eu/show.php?*
// @match         http://www.bilder-hochladen.net/file*
// @match         http://www.bild.me/bild.php?*
// @match         http://www.imagesnake.com/show*
// @match         http://www.freebunker.com/show*
// @match         http://bayimg.com/*
// @match         http://*.directupload.net/file*
// @match         http://imagepong.info/view-image/*
// @match         http://imageback.info/view-image/*
// @match         http://*.imgpo.st/*
// @match         http://*.imgjav.tk/?pm=*
// @match         http://*.imgurban.info/?pm=*
// @match         http://*.imagecherry.com/*
// @match         http://*.funkyimg.com/view*
// @match         http://*.abload.de/image.php?*
// @match         http://*.picfox.org/share*
// @match         http://*.pixup.us/img-*
// @match         http://*.imgtube.net/img-*
// @match         http://*.imgcorn.com/img-*
// @match         http://*.imagecarry.com/*/*
// @match         http://*.imagedunk.com/*/*
// @match         http://*.imageswitch.com/*/*
// @match         http://*.piclambo.net/*/*
// @match         http://*.picleet.com/*/*
// @match         http://*.yankoimages.net/*/*
// @match         http://*.zonezeedimage.com/img-*
// @match         http://*.picturedip.com/*/*
// @match         http://*.croftimage.com/img-*
// @match         http://*.imagedecode.com/img-*
// @match         http://*.imagepremium.com/viewer.php?*
// @match         http://*.shareimage.ro/viewer.php?*
// @match         http://howtohemorrhoidscure.com/viewer.php?*
// @match         http://*.imagefruit.com/show*
// @match         http://*.hentai-hosting.com/viewer.php?*
// @match         http://*.gallery.jpavgod.com/viewer.php?*
// @match         http://*.imgonion.com/img*
// @match         http://*.zeljeimage.com/img-*
// @match         http://*.miragepics.com/viewer.php?*
// @match         http://*.freeimagehosting.net/*
// @match         http://*.gratisimage.dk/share*
// @match         http://*.keptarolo.hu/*
// @match         http://www.uploadhouse.com/viewfile.php?*
// @match         http://*.x05.org/show.php*
// @match         http://*.dumpt.com/img*
// @match         http://*.fotohosting.net/image*
// @match         http://imagebunk.com/*
// @match         http://imagezilla.net/show/*
// @match         http://*.imageup.ru/img*
// @match         http://*.casimages.com/photos/*/*/*
// @match         http://*.casimages.com/img*
// @match         http://*.cyberpics.net/pm/*
// @match         http://*.vvcap.net/db/*
// @match         http://*.freeimage.us/share*
// @match         http://*.your-files.ru/*.html
// @match         http://*.your-files.ru/full/
// @match         http://*.pix-x.net/*/*
// @match         http://subimg.net/jpg?*
// @match         http://*.shareimages.com/image*
// @match         http://upsimple.com/view/*
// @match         http://www.xtremeshack.com/image/*
// @match         http://*.mrjh.org/gallery.php?entry=*
// @match         http://*.ipicture.ru/Gallery/Viewfull/*
// @match         http://*.itmages.ru/image/view/*
// @match         http://*.pohrani.com/*
// @match         http://*.iv.pl/viewer.php?file=*
// @match         http://*.hostingfailov.com/photo/*
// @match         http://www.picamatic.com/view/*
// @match         http://*.image18.org/show/*
// @match         http://*.pic4you.ru/*
// @match         http://picload.org/view/*
// @match         http://*.moyophoto.com/share-*
// @match         http://www.imageboss.net/view*
// @match         http://*.thebestpichost.com/picture/*
// @match         http://*.lostpic.net/?photo=*
// @match         http://subefotos.com/ver/*
// @exclude       http://subefotos.com/ver/*#codigos
// @match         http://*.seedimage.com/P/show.php*
// @match         http://*.pixsor.com/share*
// @match         http://*.pixsor.com/XXX/share*
// @match         http://*.imgtheif.com/image/*
// @match         http://*.image-share.com/i*html
// @match         http://*.uaimage.com/image/*
// @match         http://*.npicture.net/share-*
// @match         http://*.img.acianetmedia.com/image/*
// @match         http://www.filedump.net/index.php?pic=*
// @match         http://www.2imgs.com/*
// @exclude       http://www.2imgs.com/uploaded/*
// @match         http://*.overpic.net/view*
// @match         http://*.unlimitedpicture.com/?pm=*
// @match         http://*.imagecross.com/d/image*
// @match         http://*.mojoimage.com/*
// @match         http://www.use.com/*
// @match         http://www.imgjoe.com/?v=*
// @match         http://www.hostingpics.net/view*
// @match         http://*.picp2.com/*/*/
// @exclude       http://*.picp2.com/cabinet/*
// @exclude       http://picp2.com/cabinet/*
// @match         http://*.imgplate.com/img-*
// @match         http://*.myhotimage.com/img-*
// @match         http://*.pictureshoster.com/view*
// @match         http://*.imageshost.ru/photo/*
// @match         http://www.imagebanana.com/view*
// @match         http://*.imagestime.com/show*
// @match         http://*.sharenxs.com/view*
// @match         http://img4.imagetitan.com/img*
// @match         http://*.imagenpic.com/*
// @match         http://*.stuffed.ru/images*
// @match         http://*.wstaw.org/w/*
// @match         http://pikucha.ru/*
// @match         http://www.imagesocket.com/photos*
// @match         http://*.youpic.ru/view*
// @match         http://imageban.net/show*
// @match         http://*.otofotki.pl/*
// @match         http://*.imgsin.com/view*
// @match         http://*.imagenetz.de/*
// @match         http://pix.toile-libre.org/?img=*
// @match         http://uppix.com/s-*
// @match         http://www.servimg.com/image_preview*
// @match         http://*.upix.me/files/*
// @match         http://*.pixelup.net/image*
// @match         http://*.pixelup.net/image*
// @match         http://picsee.net/*
// @match         http://www.fotosik.pl/pokaz_obrazek/pelny/*
// @match         http://imagebin.org/*
// @match         https://dumpyourphoto.com/photo/*
// @match         http://dumpyourphoto.com/photo/*
// @match         http://*.depic.me/*
// @match         http://www.xup.in/dl*
// @match         http://*.imgboo.me/img-*
// @match         http://*.foto-save.ru/*.html
// @match         http://*.foto-save.ru/full/
// @match         http://hostpornpics.net/view*
// @match         http://*.flickimg.com/image/*
// @match         http://*.sexseeimage.com/image/*
// @match         http://*.hotchyx.com/d/*
// @match         http://*.imgns.com/pt*
// @match         http://*.ultraimg.com/image/*
// @match         http://ima.so/*
// @match         http://*.kinkypic.net/show*
// @match         http://*.eropix.me/view*
// @match         http://*.imagerocket.net/view*
// @match         http://*.imgpay.me/img*
// @match         http://*.imgnip.com/view*
// @match         http://*.imageupper.com/i/*
// @match         http://*.mypixxx.lonestarnaughtygirls.com/?pt=*
// @match         http://*.ifap.co/?v=*
// @match         http://*.pixtn.com/view*
// @match         http://beeimg.com/view*
// @match         http://www.noelshack.com/*.*
// @match         http://www.zupmage.eu/image*
// @match         http://*.picstwist.com/img*
// @match         http://thumbsnap.com/*
// @match         http://*.deffe.com/image/*
// @match         http://flickcabin.com/*/view/*
// @match         http://*.image-shed.com/show*
// @match         http://*.imgnook.com/*
// @match         http://*.imageno.com/*.html
// @match         http://*.imagehousing.com/image/*
// @match         http://www.rapidjoy.com/p*
// @match         http://pixpipeline.com/d/*
// @match         http://www.picfront.org/d/*
// @match         http://*.theimghost.com/?pt=*
// @match         http://*.instaimagehost.com/*.html
// @match         http://*.imagehost.thasnasty.com/?pt=*
// @match         http://*.imagilive.com/*.htm*
// @match         http://*.thepornfeeds.com/?p*
// @match         http://*.piratescreen.com/image/*
// @match         http://*.hotimages.eu/img-*
// @match         http://*.picturevip.com/?v*
// @match         http://*.emptypix.com/image/*
// @match         http://*.hornyimage.com/show*
// @match         http://img.3ezy.net/*.htm
// @match         http://*.xximg.net/img-*
// @match         http://*.zaslike.com/view*
// @match         http://www.zimagez.com/zimage/*
// @match         http://*.someimage.com/*
// @match         http://*.sexyxpixels.com/?v=*
// @match         http://*.postimg.net/view*
// @match         http://*.unhidefreepic.com/?v=*
// @match         http://*.imagedomino.com/?v=*
// @match         http://*.freeporndumpster.com/show*
// @match         http://*.pixhub.eu/images/show*
// @match         http://*.pictureturn.com/*.html
// @match         http://*.cubeupload.com/im/*
// @match         http://*.pixentral.com/show*
// @match         http://www.photo-host.org/view-image/*
// @match         http://www.fotoszok.pl/show*
// @match         http://*.imglink.ru/show*
// @match         http://zapodaj.net/*.html
// @match         http://q3.cz/view*
// @match         http://www.pixic.ru/view*
// @match         http://www.imagesup.de/picture.php?code=*
// @match         http://www.pornbus.org/show*
// @match         http://www.bilder-space.de/bild-*
// @match         http://www.imgcarry.com/show*
// @match         http://*.saveimg.ru/show*
// @match         http://www.fotos-hochladen.net/view*
// @match         http://www.imgxc.com/image/*
// @match         http://simplest-image-hosting.net/*
// @match         http://jpegbay.com/gallery/*.html
// @match         http://www.hostpic.org/view*
// @match         http://imagik.fr/view*
// @match         http://www.image-load.net/show*
// @match         http://imghost.us.to/?v=*
// @match         http://*.sxpics.nl/img-*
// @match         http://*.uploadedpictures.com/share.php?id=*
// @match         http://*.gallerycloud.net/img-*
// @match         http://*.tryimg.com/?v=*
// @match         http://img.deli.sh/viewer.php?file=*
// @match         http://www.webm6.com/op-*.host
// @match         http://*.picturespk.pk/viewer.php?id=*
// @match         http://*.imagevau.eu/viewer.php?file=*
// @match         http://up.sukrbnat.com/viewer.php?file=* 
// @match         http://bilder.nixhelp.de/viewer.php?file=*
// @match         http://*.funextra.hostzi.com/viewer.php?file=*
// @match         http://*.freakimage.com/view.php?filename=*
// @match         http://imgbin.me/view/*
// @match         http://*.fotoo.pl/show.php?img=*.html
// @match         http://*.rapid-img.de/img.php?f=*
// @match         http://*.images.vyjimecny.cz/share.php?id=*
// @match         http://*.1pics.ru//view-*
// @match         http://*.picthost.net/v.php?id=*
// @match         http://*.imghostr.me/image/*
// @match         http://*.tinyphoto.net/show-image.php?id=*
// @match         http://*.ushareimg.com/view.php?filename=*
// @match         http://*.upload.djmaster.fr/?v=*
// @match         http://img.pereslavl.ru/share-*.html
// @match         http://images.maxigame.by/share-*.html
// @match         http://*.dwimg.com/viewer.php?file=* 
// @match         http://uprapide.com/* 
// @match         http://www.imageurlhost.com/viewer.php?file=*
// @match         http://*.picdir.net/show/*
// @match         http://*.uploadyourimages.org/*.html
// @match         http://*.imagesup.net/* 
// @match         http://*.blackcatpix.com/v.php?id=*
// @match         http://*.picgarage.net/public/*
// @match         http://*.vietchecker.com/file/viewer.php?file=*
// @match         http://*.myminifile.com/?v=*
// @match         http://*.superkipje.com/viewer.php?file=*
// @match         http://www.2i.sk/*
// @match         http://*.digitalfrenzy.net/share-*
// @match         http://www.imagefruit.com/img.php?img=*
// @match         http://www.imgadult.com/img-*
// ==/UserScript==

if(document.id == 44) // bad monkey, bad, no more!
{
	console.warn("stopped bad monkey");
	return false;
}
document.id = 44;

if(document.referrer && document.referrer.lastIndexOf(window.location.hostname) != -1 && document.referrer.lastIndexOf(window.location.hostname) +1 == document.referrer.length - window.location.hostname.length)
{
	console.warn("you have just uploaded a picture, didn't you?");
	return false;
}
if(window.location.href.lastIndexOf(window.location.hostname) + window.location.hostname.length + 1 == window.location.href.length)
{
	console.warn("we are on website's main page, aren't we?");
	return false;
}

function ev(q,root){return document.evaluate(q,root?root:document,null,9,null).singleNodeValue;}
var rescaled = false;
var lasttask;
var isrc;
var img;
var j;
var iurl = window.location.hostname;
if(iurl.indexOf("www.") == 0)
{
	iurl = iurl.substr(4);
}

function sanitize() // lol I'm such a hacker
{
	for(var i = lasttask; i > 0; i--)
	{
		clearTimeout(i);
	}
}

function makeimage()
{
	document.body.innerHTML = "<style>img { position: absolute; top: 0; right: 0; bottom: 0; left: 0; }</style>"; // center image
	img = document.createElement("img");
	img.src = isrc;
	img.id = "resizing";
	img.style.margin = "auto"; // center image
	document.body.style.margin = "0px";
	document.body.appendChild(img);
	img.addEventListener("click", rescale, true);
	window.addEventListener("keydown", onkeydown, true);
	setTimeout(function() { autoresize(); }, 0);
}

function makeworld()
{
	if(img){return false;}
	var i;
	// per-host image detection
	switch (iurl)
	{
	case "vvcap.net":
	case "simplest-image-hosting.net":
		i = ev('.//img');
		break;
	case "dumpyourphoto.com":
	case "imageno.com":
		i = ev('.//a/img');
		break;
	case "tryimg.com":
		i = ev('.//a[not(contains(@href,"' + iurl + '"))]/img');
		break;
	case "img.3ezy.net":
		i = ev('.//link[@rel="image_src"]');
		if(i){i.src = i.href;}
		break;
	case "imgnook.com":
		i = ev('.//a/img[contains(@src,"' + iurl + '")]');
		if(i){i.src = i.parentNode.href;}
		break;
	case "noelshack.com":
		i = ev('.//a[@target="_blank"]/img');
		if(i){i.src = i.parentNode.href;}
		break;
	case "thumbsnap.com":
		i = ev('.//img[@id="thepic"]');
		if(i && i.parentNode.href){i.src = i.src.replace('/s/', '/i/');}
		break;
	case "imgbox.com":
	case "imageupper.com":
		i = ev('//*[@id="img"]');
		break;
	case "imageban.ru":
	case "imageban.net":
	case "imagesnake.com":
	case "freebunker.com":
	case "imagefruit.com":
	case "x05.org":
	case "imagebunk.com":
	case "imagestime.com":
	case "kinkypic.net":
	case "image-shed.com":
	case "hornyimage.com":
	case "imgcarry.com":
	case "pornbus.org":
	case "fotoo.pl":
	case "imagefruit.com":
		i = ev('//*[@id="img_obj"]');
		break;
	case "pimpandhost.com":
	case "pixdir.net":
	case "fastpic.ru":
	case "abload.de":
	case "pikucha.ru":
		i = ev('//img[@id="image"]');
		j = true;
		break;
	case "bayimg.com":
	case "picgarage.net":
		i = ev('//*[@id="mainImage"]');
		break;
	case "depic.me":
		i = ev('//*[@id="pic"]');
		break;
	case "xup.in":
		i = ev('.//img[contains(@src,"/exec/")]');
		break;
	case "imageshack.us":
		i = ev('//*[@id="direct-link"]');
		if(i){i.src = i.value;}
		break;
	case "image2you.ru":
		i = ev('//*[@id="formitem"]/img');
		if(i){i.src = i.src.replace('2_', '');}
		break;
	case "upix.me":
		i = ev('//a[@class="thumb"]');
		if(i){i.src = i.title;}
		break;
	case "amateurfreak.org":
	case "euro-pic.eu":
	case "picpicture.com":
	case "picfox.org":
	case "freeimage.us":
	case "xxx.freeimage.us":
	case "pixsor.com":
	case "uploadedpictures.com":
	case "images.vyjimecny.cz":
	case "img.pereslavl.ru":
	case "images.maxigame.by":
	case "digitalfrenzy.net":
		//i = ev('//*[@id="iimg"]');
		var fn;
		var f = document.getElementsByTagName("script");
		for(c=0;c<f.length;c++) 
		{
			fn = f[c].innerHTML.indexOf("<img src=");
			if(fn != -1)
			{
				i = f[c];
				i.src = f[c].innerHTML.substr(fn+10, f[c].innerHTML.indexOf("'", fn+10)-fn-10);
				break;
			}
		}
		break;
	case "pic5you.ru":
	case "pic4you.ru":
	case "picp2.com":
	case "picforall.ru":
	case "piccash.net":
	case "megaimg.ru":
	case "picage.ru":
	case "images-host.biz":
	case "pic2profit.com":
	case "galhost.ru":
	case "pix-x.net":
		i = ev('.//img[contains(@src,"thumb")]');
		if(i){i.src = i.src.replace('-thumb', '');
		i.src = i.src.replace('img_thumb', 'img_full');}
		break;
	case "imagik.fr":
		i = ev('.//img[contains(@src,"/uploads/")]');
		if(i){i.src = i.src.replace('thumb_', '');}
		break;
	case "tinypic.com":
		i = ev('//*[@id="imgElement"]');
		break;
	case "flickcabin.com":
		i = ev('.//img[contains(@src,"' + iurl + '/p")]');
		if(i){i.src = i.src.replace('thumb', 'file');}
		break;
	case "radical-foto.ru":
		var fn;
		var f = document.getElementsByTagName("script");
		for(c=0;c<f.length;c++) 
		{
			fn = f[c].innerHTML.indexOf('"Url":"');
			if(fn != -1)
			{
				i = f[c];
				i.src = f[c].innerHTML.substr(fn+7, f[c].innerHTML.indexOf('"', fn+7)-fn-7);
				break;
			}
		}
		break;
	case "subimg.net":
		i = ev('//img[@class="magnify"]');
		break;
	case "bilder-space.de":
	case "imagesup.de":
		i = ev('.//img[@class="picture"]');
		break;
	case "lostpic.net":
	case "pix.toile-libre.org":
	case "photo-host.org":
		i = ev('.//a[contains(@href,"/orig")]');
		if(i){i.src = i.href;}
		break;
	case "picsee.net":
		i = ev('.//a[contains(@href,"/upload/")]');
		if(i){i.src = i.href;}
		break;
	case "imgxc.com":
		i = ev('.//img[contains(@src,"/fullimage/")]');
		break;
	case "wstaw.org":
		i = ev('.//a[contains(@href,"/m/")]');
		if(i){i.src = i.href;}
		break;
	case "hostpornpics.net":
		i = ev('.//img[contains(@src,"img.php")]');
		break;
	case "imagebin.org":
	case "imgbin.me":
		i = ev('.//img[contains(@src,"image")]');
		break;
	case "iv.pl":
	case "eropix.me":
	case "beeimg.com":
	case "unhidefreepic.com":
	case "q3.cz":
	case "imagevau.eu":
	case "up.sukrbnat.com":
	case "bilder.nixhelp.de":
	case "funextra.hostzi.com":
	case "freakimage.com":
	case "1pics.ru":
	case "imageurlhost.com":
	case "vietchecker.com":
	case "superkipje.com":
		i = ev('.//a[contains(@href,"images/")]');
		if(i){i.src = i.href;}
		break;
	case "subefotos.com":
		j = true;
		i = ev('.//img[contains(@src,"fotos.' + iurl + '")]');
		break;
	case "uppix.com":
		i = ev('.//img[contains(@src,"/f")]');
		break;
	case "pics-hosting.com":
	case "pictureshoster.com":
	case "zaslike.com":
	case "dwimg.com":
		i = ev('.//a[contains(@href,"files/")]');
		if(i){i.src = i.href;}
		break;
	case "imgtheif.com":
	case "fotolink.su":
	case "picthost.net":
	case "blackcatpix.com":
		i = ev('.//img[contains(@src,"/pic")]');
		break;
	case "d69.in":
	case "imadul.com":
		i = ev('.//div[@class="img_box"]/a');
		if(i){i.src = i.href;}
		break;
	case "hotimg.com":
		i = ev('.//a[contains(@href,"/direct/")]');
		if(i){i.src = i.href;}
		break;
	case "postimg.org":
		i = ev('.//img[contains(@src,"' + iurl + '")]');
		if(i && i.parentNode.href)
		{
			window.location.assign(i.parentNode.href);
			return;
		}
		break;
	case "turboimagehost.com":
	case "screenlist.ru":
	case "picshare.geenza.com":
	case "imageboss.net":
	case "mojoimage.com":
		i = ev('.//img[contains(@onload,"scale")]');
		break;
	case "bild.me":
	case "imagecarry.com":
	case "imagedunk.com":
	case "imageswitch.com":
	case "piclambo.net":
	case "picleet.com":
	case "yankoimages.net":
	case "picturedip.com":
	case "imagezilla.net":
	case "imageup.ru":
	case "uaimage.com":
	case "seedimage.com":
	case "hotchyx.com":
	case "imagehousing.com":
	case "cubeupload.com":
	case "jpegbay.com":
		i = ev('.//img[contains(@src,"' + iurl + '")]');
		break;
	case "picfront.org":
		j = true;
		i = ev('.//img[contains(@src,"' + iurl + '")][@title]');
		break;
	case "platimzafoto.ru":
	case "pic-money.ru":
	case "your-files.ru":
	case "foto-save.ru":
		var f = document.getElementsByTagName("button");
		if(f.length != 0) 
		{
			f[0].click();
			break;
		}
		i = ev('.//img[contains(@src,"/pic.jpeg")]');
		break;
	case "freeimagehosting.net":
	case "uploadhouse.com":
	case "upsimple.com":
	case "pixhub.eu":
	case "fotos-hochladen.net":
		i = ev('.//img[contains(@src,"uploads/")]');
		break;
	case "xtremeshack.com":
	case "imagerocket.net":
		i = ev('.//img[contains(@src,"photos/")]');
		break;
	case "keptarolo.hu":
		i = ev('.//img[contains(@src,"/kep/")]');
		break;
	case "servimg.com":
		i = ev('.//img[contains(@src,"/u/")]');
		break;
	case "imagearn.com":
		i = ev('.//img[contains(@src,"/imags/")]');
		break;
	case "ichan.org":
		i = ev('.//img[contains(@src,"/src/")]');
		break;
	case "ibunker.us":
	case "hostingpics.net":
	case "pixentral.com":
		i = ev('.//img[contains(@src,"pics/")]');
		break;
	case "casimages.com":
	case "thebestpichost.com":
	case "imageshost.ru":
	case "imagebanana.com":
	case "deffe.com":
		i = ev('.//img[contains(@src,"/img/")]');
		break;
	case "imagenetz.de":
		i = ev('.//img[contains(@src,"/img")]');
		break;
	case "filedump.net":
		i = ev('.//img[contains(@src,"/dumped/")]');
		break;
	case "imgjoe.com":
		i = ev('.//img[contains(@src,"/x/")]');
		break;
	case "xxxhost.me":
	case "imgbabes.com":
	case "bilder-hochladen.net":
	case "dumpt.com":
	case "imgsin.com":
		i = ev('.//img[contains(@src,"/files/")]');
		break;
	case "image18.org":
		i = ev('.//img[contains(@src,"/file/")]');
		break;
	case "imagepix.org":
	case "pics-money.ru":
	case "hostingfailov.com":
	case "zimagez.com":
		i = ev('.//img[contains(@src,"/full/")]');
		break;
	case "picbank.pl":
	case "niceimage.pl":
		i = ev('.//img[contains(@src,"/uploaded/")]');
		break;
	case "imgbunk.com":
	case "imgah.com":
	case "imgpo.st":
	case "imagecherry.com":
		i = ev('.//img[contains(@onload,"(this")]');
		if(i){break;}
	case "imgbar.net":
		i = ev('.//img[contains(@src,"view/")]');
		if(i){break;}
	case "imgbunk.com":
	case "imgbar.net":
	case "imagepicsa.com":
	case "imagefolks.com":
	case "imgrill.com":
	case "imgcandy.net":
	case "imgmoney.com":
	case "imagecorn.com":
	case "imgcloud.co":
	case "uploadyourimages.org":
		i = ev('.//img[contains(@src,"/upload/")]');
		var c;
		if(!i)
		{
			var f = document.getElementsByTagName("input");
			for(c=0;c<f.length;c++) 
			{
				if(f[c].type == "submit" && f[c].value != "Premium Download")
				{
					f[c].click();
					c = 999;
				}
			}
		}
		if(i || c==999)
		{
			break;
		}
	case "imgadult.com":
		i = ev('.//a[@class="clicked"]');
		if(i)
		{
			var now = new Date();
			var time = now.getTime();
			time += 30000;
			now.setTime(time);
			document.cookie = 'user=' + 'true' + '; expires=' + now.toGMTString() + '; path=/';
			setTimeout(function(){window.location.href = window.location.pathname + "?imgContinue=1";},500);
			img = i;
			break;
		}
	case "pixup.us":
	case "imgtube.net":
	case "imgcorn.com":
	case "imgonion.com":
	case "imgboo.me":
	case "imgpay.me":
	case "xximg.net":
	case "sxpics.nl":
		i = ev('//input[@type="submit"]');
		if(i) 
		{
			i.click();
			break;
		}
	case "imgonion.com":
	case "pixup.us":
	case "imgtube.net":
	case "imgcorn.com":
	case "imageontime.com":
	case "zonezeedimage.com":
	case "croftimage.com":
	case "imagedecode.com":
	case "zeljeimage.com":
	case "imgplate.com":
	case "myhotimage.com":
	case "imgboo.me":
	case "picstwist.com":
	case "hotimages.eu":
	case "xximg.net":
	case "fotoszok.pl":
	case "sxpics.nl":
	case "gallerycloud.net":
	case "imgadult.com":
		i = ev('.//img[contains(@src,"/upload/")]');
		break;
	case "imgpay.me":
		i = ev('.//img[contains(@src,"/upload/")][@alt]');
		break;
	case "ruleimg.com":
		i = ev('//img[@alt="image"]');
		break;
	case "subirimagenes.com":
		i = ev('//input[@type="submit"][@id="boton"]');
		if(i) 
		{
			i.click();
			break;
		}
	case "subirimagenes.com":
		i = ev('.//img[contains(@onclick,"scale")]');
		break;
	case "image-share.com":
	case "ima.so":
		i = ev('.//img[contains(@src,"upload/")]');
		break;
	case "bilder-upload.eu":
		i = ev('.//input[contains(@src,"upload/")]');
		break;
	case "imageback.info":
	case "imagepong.info":
	case "picload.org":
	case "imagecross.com":
	case "npicture.net":
	case "uprapide.com":
		i = ev('.//img[contains(@src,"' + iurl + '/image")]');
		break;
	case "imgjav.tk":
	case "imgwiev.tk":
	case "imgurban.info":
	case "unlimitedpicture.com":
		i = ev('.//img[contains(@src,"?dm=")]');
		if(i)
		{
			i.src = i.src.replace('dm', 'di');
		}
		break;
	case "cyberpics.net":
		i = ev('.//img[contains(@src,"/dm/")]');
		if(i)
		{
			i.src = i.src.replace('dm', 'di');
		}
		break;
	case "imgns.com":
	case "mypixxx.lonestarnaughtygirls.com":
	case "imagesup.net":
		i = ev('.//img[contains(@src,"dt")]');
		if(i)
		{
			i.src = i.src.replace('dt', 'di');
		}
		break;
	case "rapidjoy.com":
		i = ev('.//a[contains(@href,"/di/")]');
		if(i)
		{
			i.src = i.href;
		}
		break;
	case "theimghost.com":
	case "imagehost.thasnasty.com":
	case "thepornfeeds.com":
		i = ev('.//a[contains(@href,"?di=")]');
		if(i)
		{
			i.src = i.href;
		}
		break;
	case "dumppix.com":
		i = ev('.//a[contains(@href,"enter")]');
		if(i)
		{
			i.click();
			break;
		}
	case "imgnip.com":
	case "dumppix.com":
	case "mrjh.org":
	case "stuffed.ru":
	case "imgnip.com":
	case "pixtn.com":
	case "postimg.net":
	case "freeporndumpster.com":
	case "img.deli.sh":
	case "rapid-img.de":
	case "imghostr.me":
	case "ushareimg.com":
		i = ev('//img[contains(@src,"images/")]');
		break;
	case "fotosik.pl":
		i = ev('//img[contains(@src,"images")][contains(@src,iurl)][@style]');
		break;
	case "use.com":
		i = ev('//img[contains(@src,"images/")][@onload]');
		break;
	case "hostpics.info":
		i = ev('//*[@id="photo"]');
		break;
	case "picamatic.com":
		i = ev('.//img[contains(@src,"/show/")]');
		break;
	case "freeimgup.com":
	case "imagescream.com":
	case "anonpic.com":
	case "javelite.tk":
	case "goimagehost.com":
	case "picturevip.com":
	case "image-load.net":
	case "webm6.com":
	case "picturespk.pk":
	case "upload.djmaster.fr":
	case "picdir.net":
	case "myminifile.com":
		i = ev('.//img[contains(@src,"/images/")]');
		break;
	case "someimage.com":
		i = ev('.//img[@id="viewimage"]');
		break;
	case "pixelup.net":
		i = ev('.//center/img[contains(@src,"/images/")]');
		break;
	case "instaimagehost.com":
	case "saveimg.ru":
	case "imglink.ru":
	case "tinyphoto.net":
		i = ev('.//img[contains(@src,"pictures/")]');
		break;
	case "imageporter.com":
	case "imagetwist.com":
	case "pixroute.com":
	case "pzy.be":
	case "funkyimg.com":
	case "itmages.ru":
	case "img.acianetmedia.com":
	case "imagenpic.com":
	case "zupmage.eu":
	case "pictureturn.com":
	case "pixic.ru":
		i = ev('.//img[contains(@src,"/i/")]');
		break;
	case "pixpipeline.com":
		i = ev('.//img[contains(@src,"/s/")]');
		break;
	case "2imgs.com":
	case "2i.sk":
		i = ev('.//a[contains(@href,"/i/")]');
		if(i)
		{
			i.src = i.href;
			break;
		}
		i = ev('.//img[contains(@src,"/i/")]');
		break;
	case "howtohemorrhoidscure.com":
		i = ev('.//a[contains(@href,"' + iurl + '/images/")]');
		if(i){i.src = i.href.substr(i.href.indexOf("http://", 1));}
		break;
	case "shareimage.ro":
	case "imagepremium.com":
	case "hentai-hosting.com":
	case "gallery.jpavgod.com":
	case "miragepics.com":
	case "imagecurl.com":
	case "imagecurl.org":
	case "youpic.ru":
		i = ev('.//input[contains(@value,"' + iurl + '/images/")]');
		if(i){i.src = i.value;}
		break;
	case "gratisimage.dk":
	case "moyophoto.com":
		i = ev('.//input[contains(@value,"' + iurl + '/image")]');
		if(i){i.src = i.value;}
		break;
	case "qrrro.com":
		i = ev('//form[@name="F1"]');
		if(i)
		{
			i.submit();
			break;
		}
	case "pixhost.org":
	case "picturescream.asia":
	case "stooorage.com":
	case "pron-pix.com":
	case "imgtiger.com":
	case "imgserve.net":
	case "imgdino.com":
	case "qrrro.com":
	case "fotohosting.net":
	case "overpic.net":
	case "sharenxs.com":
	case "imagesocket.com":
	case "flickimg.com":
	case "sexseeimage.com":
	case "ultraimg.com":
	case "ifap.co":
	case "piratescreen.com":
	case "emptypix.com":
	case "sexyxpixels.com":
	case "hostpic.org":
	case "zapodaj.net":
	case "imghost.us.to":
		i = ev('.//img[contains(@src,"' + iurl + '/images/")]');
		break;
	case "shareimages.com":
		i = ev('.//img[contains(@src,"' + iurl + '/images")]');
		break;
	case "imgfantasy.com":
	case "imagedomino.com":
		j = true;
		i = ev('//input[@value="YES"]');
		if(i){i.click();img = i;}
	case "imagepdb.com":
	case "imagebam.com":
	case "imgfantasy.com":
	case "imagedomino.com":
	case "imgchili.net":
	case "imgchili.com":
	case "pic-upload.de":
	case "pohrani.com":
		i = ev('.//img[contains(@onclick,"(this")]');
		break;
	default:
		switch(iurl.substr(iurl.indexOf(".")+1))
		{
		case "imagevenue.com":
			i = ev('.//img[contains(@src,"/loc")]');
			break;
		case "directupload.net":
			i = ev('.//img[contains(@src,"/images/")]');
			break;
		case "ipicture.ru":
			i = ev('.//img[contains(@src,"/uploads/")]');
			break;
		case "imagetitan.com":
			i = ev('.//img[contains(@onload,"scale")]');
			break;
		case "otofotki.pl":
			i = ev('.//img[contains(@src,"/obrazki/")]');
			break;
		case "imagilive.com":
			i = ev('.//a[@class="button"]');
			if(i)
			{
				i.click();
				break;
			}
		case "imagilive.com":
			i = ev('.//img[contains(@src,"' + iurl + '")]');
			break;
		default:
			break;
		}
		break;
	}
	//
	//firefox handmade noscript
	if(!j)
	{
		j = true;
		window.addEventListener('beforescriptexecute', function(e) 
		{
			if(e.target.innerHTML.indexOf("clr_pgn()") == -1 && e.target.innerHTML.indexOf(".innerHTML") == -1)
			{
				//console.warn( "STOPPED: " + e.target.src + e.target.innerHTML);
				e.preventDefault();
				e.stopPropagation();
			}
		}, true);
	}
	//
	if(i && i.src)
	{
		isrc = i.src;
		img = i;
		observer.disconnect();
		function inject(func) 
		{
			var source = func.toString();
			var script = document.createElement('script');
			script.text = "("+ source +")()";
			document.head.appendChild(script);
		}
		function clr_pgn() 
		{
			window.onbeforeunload = null;
			delete document.write;
			document.write('<html><head></head><body></body></html>'); // clears tasks also
			document.close();
		}
		inject(clr_pgn);
		if(navigator.userAgent.indexOf('Firefox') == -1 && isrc.lastIndexOf(".gif") == -1) // firefox + gif = bug
		{
			window.stop();
		}
		document.head.innerHTML = "";
		lasttask = setTimeout(function() {},0);
		sanitize();
		setTimeout(function() // else there will be scary bugs
		{
			inject(clr_pgn);
			makeimage();
		}, 0);
	}
	else // try again
	{
		//console.warn("Didnt find image, trying again in 100ms");
		setTimeout(function() { makeworld(); }, 100);
	}
}

function changecursor()
{
	img.style.margin = "auto";
	var CH = Math.max(document.documentElement.clientHeight, document.body.clientHeight); // die firefox
	if(!rescaled && ((img.naturalHeight == CH) || (img.naturalWidth == document.body.clientWidth)) && ((CH == document.body.scrollHeight) && (document.body.clientWidth == document.body.scrollWidth)) ) // no scrollbars and one img dimension is equal to screen
	{
		img.style.cursor = "";
	}
	else if((img.naturalHeight > CH) || (img.naturalWidth > document.body.clientWidth))
	{
		if(rescaled)
		{
			img.style.cursor = "-moz-zoom-in";
			img.style.cursor = "-webkit-zoom-in";
		}
		else
		{
			img.style.cursor = "-moz-zoom-out";
			img.style.cursor = "-webkit-zoom-out";
			if(img.naturalHeight > CH) // chrome bug fuuuuu
			{
				img.style.margin = "0 auto";
			}
		}
	}
	else
	{
		if(rescaled)
		{
			img.style.cursor = "-moz-zoom-out";
			img.style.cursor = "-webkit-zoom-out";
		}
		else
		{
			img.style.cursor = "-moz-zoom-in";
			img.style.cursor = "-webkit-zoom-in";
		}
	}
}

function rescale(event)
{
	if(rescaled)
	{
		rescaled = false;
		var scale;
		if(event != 0)
		{
			if (typeof event.y === "undefined") // Firefox
			{
				ex = event.clientX;
				ey = event.clientY;
			}
			else
			{
				ex = event.x;
				ey = event.y;
			}
			ex -= img.offsetLeft;
			ey -= img.offsetTop;
			scale = Math.min((window.innerWidth / img.naturalWidth), (window.innerHeight / img.naturalHeight));
		}
		img.removeAttribute("style");
		changecursor();
		if(event != 0)
		{
			window.scrollTo(ex / scale - window.innerWidth / 2, ey / scale - window.innerHeight / 2);
		}
	}
	else
	{
		img.removeAttribute("style");
		if(img.naturalWidth != window.innerWidth)
		{
			img.style.width = window.innerWidth + "px";
			rescaled = true;
		}
		if((document.body.clientHeight != document.body.scrollHeight) || (document.body.clientWidth != document.body.scrollWidth)) // scrollbars detected
		{
			img.removeAttribute("style");
			if(img.naturalHeight != window.innerHeight)
			{
				img.style.height = window.innerHeight + "px";
				rescaled = true;
			}
		}
		changecursor();
	}
}

function autoresize()
{
	if(img.naturalHeight != 0 && img.naturalWidth != 0)
	{
		var title = img.src.substr(img.src.lastIndexOf("/")+1);
		if(title.indexOf("?") != -1)
		{
			title = title.substr(0, title.indexOf("?"));
		}
		document.title = title + " (" + img.naturalWidth + "x" + img.naturalHeight + ")"; // title
		var link = document.createElement('link');
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = img.src;
		document.getElementsByTagName('head')[0].appendChild(link);
		if((document.body.clientHeight != document.body.scrollHeight) && (document.body.clientWidth != document.body.scrollWidth)) // both scrollbars detected
		{
			rescale(0);
		}
		else
		{
			changecursor();
		}
	}
	else
	{
		setTimeout(function() { autoresize(); }, 10);
	}
}

var observer = new MutationObserver(function(mutations) 
{
	makeworld();
});
observer.observe(document, {subtree: true, childList: true});  

// hotkeys
if (typeof KeyEvent === "undefined")
{
	var KeyEvent = {
		DOM_VK_SPACE: 32,
		DOM_VK_LEFT: 37,
		DOM_VK_UP: 38,
		DOM_VK_RIGHT: 39,
		DOM_VK_DOWN: 40,
		DOM_VK_A: 65,
		DOM_VK_D: 68,
		DOM_VK_Q: 81,
		DOM_VK_S: 83,
		DOM_VK_W: 87,
		DOM_VK_NUMPAD2: 98,
		DOM_VK_NUMPAD4: 100,
		DOM_VK_NUMPAD5: 101,
		DOM_VK_NUMPAD6: 102,
		DOM_VK_NUMPAD8: 104
	};
}

function cancelEvent(a)
{
	a = a ? a : window.event;
	if (a.stopPropagation)
	{
		a.stopPropagation();
	}
	if (a.preventDefault)
	{
		a.preventDefault();
	}
	a.cancelBubble = true;
	a.cancel = true;
	a.returnValue = false;
	return false;
}

function scroll_space(a, b)
{
	var by = Math.round((b ? window.innerHeight : window.innerWidth) * 0.50 * (a ? -1 : 1));
	if(!b)
	{
		window.scrollBy(0, by);
	}
	else
	{
		window.scrollBy(by, 0);
	}
}

function onkeydown (b)
{
	var a = (window.event) ? b.keyCode : b.which;

	if (a != KeyEvent.DOM_VK_SPACE && (b.altKey || b.ctrlKey || b.metaKey))
	{
		return;
	}

	var by = Math.round(window.innerHeight * 0.10);

	switch (a)
	{
	case KeyEvent.DOM_VK_RIGHT:
	case KeyEvent.DOM_VK_D:
	case KeyEvent.DOM_VK_NUMPAD6:
		window.scrollBy(by, 0);
		cancelEvent(b);
		break;
	case KeyEvent.DOM_VK_LEFT:
	case KeyEvent.DOM_VK_A:
	case KeyEvent.DOM_VK_NUMPAD4:
		window.scrollBy(by * -1, 0);
		cancelEvent(b);
		break;
	case KeyEvent.DOM_VK_W:
	case KeyEvent.DOM_VK_NUMPAD8:
		window.scrollBy(0, by * -1);
		cancelEvent(b);
		break;
	case KeyEvent.DOM_VK_S:
	case KeyEvent.DOM_VK_NUMPAD2:
		window.scrollBy(0, by);
		cancelEvent(b);
		break;
	case KeyEvent.DOM_VK_SPACE:
		scroll_space(b.shiftKey, b.ctrlKey);
		cancelEvent(b);
		break;
	case KeyEvent.DOM_VK_Q:
	case KeyEvent.DOM_VK_NUMPAD5:
		rescale(0);
		cancelEvent(b);
		break;
	}
}
