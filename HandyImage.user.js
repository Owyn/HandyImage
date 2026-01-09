// ==UserScript==
// @name		Handy Image
// @version		2026.01.09
// @author		Owyn
// @contributor	ubless607, bitst0rm
// @namespace	handyimage
// @description	Shows just fullsize Image with hotkeys & without pop-ups on many image-hosting sites
// @updateURL	https://github.com/Owyn/HandyImage/raw/master/HandyImage.user.js
// @downloadURL	https://github.com/Owyn/HandyImage/raw/master/HandyImage.user.js
// @homepage	https://github.com/Owyn/HandyImage
// @supportURL	https://github.com/Owyn/HandyImage/issues
// @icon		https://i.ibb.co/Xk4vsrTT/Handy.png
// @run-at		document-start
// @grant		GM.getValue
// @grant		GM.setValue
// @grant		GM_registerMenuCommand
// @grant		GM_unregisterMenuCommand
// @grant		GM_getValue
// @grant		GM_setValue
// @grant		GM_download
// @grant		GM_addElement
// @grant		unsafeWindow
// @sandbox		JavaScript
// @compatible	Chrome
// @compatible	Firefox
// @match		https://www.imagebam.com/image/*
// @match		https://www.imagebam.com/view/*
// @match		http://imgchili.net/show*
// @match		*://imgbox.com/*
// @match		*://*.imagetwist.com/*
// @match		*://imagexport.com/*
// @match		https://*.imagevenue.com/*
// @match		*://*.imageshack.com/i/*
// @match		*://*.imageshack.com/f/*
// @match		*://*.image2you.ru/*/*/
// @exclude		*://image2you.ru/cabinet/*
// @exclude		*://www.image2you.ru/cabinet/*
// @match		https://imageban.ru/show*
// @match		*://fastpic.ru/view*
// @match		*://fastpic.ru/fullview*
// @match		https://fastpic.org/view/*
// @match		https://fastpic.org/fullview/*
// @match		*://pixhost.to/show/*
// @match		http://*.picpicture.com/image/*
// @match		http://*.pic5you.ru/*/*/
// @match		http://*.tinypic.com/view*
// @match		http://radical-foto.ru/*
// @match		http://radikal-foto.ru/*
// @match		https://radikal.ru/*
// @exclude		https://radikal.ru/video/*
// @match		http://f-page.ru/*
// @match		http://f-picture.net/*
// @match		https://*.pimpandhost.com/image*
// @match		https://*.pixroute.com/*/*
// @match		https://*.picforall.ru/*/*/
// @match		*://*.imagecurl.com/view*
// @match		*://*.imagecurl.org/view*
// @match		http://*.euro-pic.eu/*share*
// @match		http://*.xxxhost.me/view*
// @match		http://*.imadul.com/?*
// @match		*://postimg.org/image/*
// @match		*://postimg.cc/*
// @match		http://*.niceimage.pl/*.html
// @match		http://*.pics-money.ru/*
// @match		http://*.freeimgup.com/*.*
// @match		http://imgtiger.com/view*
// @match		https://*.imgspice.com/*/*
// @match		http://*.picage.ru/*/*
// @match		http://*.imgserve.net/img*
// @match		http://*.images-host.biz/*/*
// @match		http://*.imgfantasy.com/*
// @match		http://*.platimzafoto.ru/full/
// @match		http://*.platimzafoto.ru/*.html
// @match		http://imgdino.com/view*
// @match		http://*.pic-money.ru/*.html
// @match		http://*.pic-money.ru/full/
// @match		http://*.imgcandy.net/img*
// @match		http://*.imagefolks.com/img*
// @match		*://*.pzy.be/v*
// @match		https://www.turboimagehost.com/p*
// @match		http://*.subirimagenes.com/*.html
// @match		http://*.screenlist.ru/details.php?image_id=*
// @match		http://qrrro.com/images*
// @match		http://imgmade.com/images*
// @match		http://www.pic-upload.de/view*
// @match		http://picshare.geenza.com/pics*
// @match		https://www.imgbabes.com/*/*.htm*
// @match		http://ibunker.us/f*
// @match		http://ichan.org/image.php?path=*
// @match		http://*.imagearn.com/*
// @match		http://www.dumppix.com/view*
// @match		http://www.bilder-upload.eu/show*
// @match		http://www.bilder-hochladen.net/file*
// @match		http://www.bild.me/bild.php?*
// @match		*://www.imagesnake.com/show*
// @match		*://www.imagesnake.com/img*
// @match		*://www.imagesnake.com/view*
// @match		http://www.imagesnake.org/show*
// @match		http://www.imagesnake.org/img*
// @match		http://www.imagesnake.org/view*
// @match		https://www.freebunker.com/show*
// @match		https://www.freebunker.com/img*
// @match		https://www.freebunker.com/view*
// @match		http://bayimg.com/*
// @match		http://*.directupload.net/file*
// @match		http://*.imagecherry.com/*
// @match		https://funkyimg.com/view*
// @match		http://*.abload.de/image.php?*
// @match		http://*.picfox.org/share*
// @match		http://*.pixup.us/img-*
// @match		http://*.imagecarry.com/*/*
// @match		http://*.imagedunk.com/*/*
// @match		http://*.imageswitch.com/*/*
// @match		http://*.piclambo.net/*/*
// @match		http://*.picleet.com/*/*
// @match		http://*.yankoimages.net/*/*
// @match		http://*.picturedip.com/*/*
// @match		https://*.imagedecode.com/img-*
// @match		https://*.imagefruit.com/img*
// @match		https://*.imagefruit.com/show*
// @match		https://*.miragepics.com/view*
// @match		http://*.freeimagehosting.net/*
// @match		http://*.keptarolo.hu/*
// @match		http://www.uploadhouse.com/view*
// @match		http://*.dumpt.com/img/view*
// @match		http://imagezilla.net/show/*
// @match		https://*.imageup.ru/img*
// @match		http://*.casimages.com/photos/*/*/*
// @match		http://*.casimages.com/img*
// @match		http://*.cyberpics.net/p*
// @match		*://vvcap.com/*
// @match		https://*.freeimage.us/share*
// @match		http://*.pix-x.net/*/*
// @match		http://*.shareimages.com/image*
// @match		http://www.xtremeshack.com/image/*
// @match		http://*.mrjh.org/gallery.php?entry=*
// @match		http://*.itmages.ru/image/view*
// @match		http://shrani.najdi.si/*
// @match		http://*.iv.pl/view*
// @match		http://*.image18.org/show/*
// @match		http://*.pic4you.ru/*
// @match		http://picload.org/view*
// @match		http://*.thebestpichost.com/picture/*
// @match		*://*.lostpic.net/image/*
// @match		http://subefotos.com/ver/*
// @exclude		http://subefotos.com/ver/*#codigos
// @match		http://*.pixsor.com/share*
// @match		http://*.pixsor.com/XXX/share*
// @match		http://*.image-share.com/i*html
// @match		http://*.npicture.net/share-*
// @match		http://*.overpic.net/view*
// @match		http://*.imagecross.com/*
// @match		http://*.mojoimage.com/*
// @match		http://www.use.com/*
// @match		http://www.hostingpics.net/view*
// @match		http://*.pictureshoster.com/view*
// @match		http://*.imageshost.ru/photo*
// @match		http://*.imagestime.com/show*
// @match		http://sharenxs.com/view*
// @match		http://sharenxs.com/gallery/*/*
// @match		http://img4.imagetitan.com/img*
// @match		*://*.imagenpic.com/*
// @match		http://*.stuffed.ru/images*
// @match		http://*.wstaw.org/w/*
// @match		http://www.imagesocket.com/photos*
// @match		http://www.imagesocket.com/social*
// @match		http://imageban.net/show*
// @match		http://*.otofotki.pl/*
// @match		http://*.imgsin.com/view*
// @match		http://*.imagenetz.de/*
// @match		http://pix.toile-libre.org/?img*
// @match		*://servimg.com/view/*
// @match		http://*.upix.me/files/*
// @match		http://*.upix.me/i/v/?q=*
// @match		http://*.pixelup.net/image*
// @match		http://*.pixelup.net/image*
// @match		http://*.picsee.net/*
// @match		http://www.fotosik.pl/pokaz_obrazek/pelny*
// @match		https://*.depic.me/*
// @match		http://www.xup.in/dl*
// @match		http://*.hotchyx.com/d*
// @match		http://*.imageupper.com/i/*
// @match		*://beeimg.com/view*
// @match		http://www.noelshack.com/*.*
// @match		http://www.turbopix.fr/v/*
// @match		http://thumbsnap.com/*
// @match		http://deffe.com/image/*
// @match		http://*.imageno.com/*.html
// @match		http://*.imagehousing.com/image*
// @match		http://www.picfront.org/d/*
// @match		http://*.imagehost.thasnasty.com/?*
// @match		http://*.imagilive.com/*.htm*
// @match		http://*.picturevip.com/*
// @exclude		http://*.picturevip.com/x/clean/
// @match		http://img.3ezy.net/*.htm
// @match		http://*.xximg.net/img-*
// @match		http://*.zaslike.com/view*
// @match		http://www.zimagez.com/zimage*
// @match		http://*.pictureturn.com/*.html
// @match		http://*.cubeupload.com/im/*
// @match		http://www.photo-host.org/view-image/*
// @match		http://www.fotoszok.pl/show*
// @match		http://*.imglink.ru/show*
// @match		http://zapodaj.net/*.html
// @match		http://www.pixic.ru/view*
// @match		http://www.imagesup.de/picture.php?code=*
// @match		https://www.pornbus.org/show*
// @match		http://www.bilder-space.de/bild-*
// @match		*://www.imgcarry.com/show*
// @match		http://*.saveimg.ru/show*
// @match		http://www.fotos-hochladen.net/view*
// @match		http://simplest-image-hosting.net/*
// @match		http://jpegbay.com/gallery/*.html
// @match		https://www.hostpic.org/view*
// @match		*://imagik.fr/image/*
// @match		http://www.image-load.net/show*
// @match		http://*.sxpics.nl/img-*
// @match		http://*.gallerycloud.net/image/*
// @match		http://tryimg.com/image/*
// @match		http://bilder.nixhelp.de/display-*
// @match		http://*.funextra.hostzi.com/view*
// @match		http://*.freakimage.com/view*
// @match		http://*.fotoo.pl/show.php?img=*.html
// @match		http://*.rapid-img.de/img.php?f=*
// @match		http://*.upload.djmaster.fr/?v=*
// @match		http://img.pereslavl.ru/share*
// @match		http://*.dwimg.com/view*
// @match		http://www.imageurlhost.com/view*
// @match		http://*.imagesup.net/*
// @match		http://*.superkipje.com/view*
// @match		https://*.2i.sk/i/*
// @match		https://imgadult.com/img-*
// @match		http://imagebic.com/?v=*
// @match		http://www.picshot.pl/public/view*
// @match		http://*.imagesmax.de/display-*
// @match		http://*.ifotos.pl/zobacz/*
// @match		http://www.zimage.fr/photo.php?id=*
// @match		http://www.zimage.fr/taillereel.php?id=*
// @match		http://ngarko.online.fr/view*
// @match		http://*.b4he.com/?v=*
// @match		http://*.oxily.com/?*
// @match		http://ghanaimages.co/?*
// @match		http://*.imgplus.info/view*
// @match		http://firepic.org/?v=*
// @match		http://savepic.org/*.htm
// @match		http://*.fastimages.ru/p*
// @match		http://ipic.su/?page=img&pic=*
// @match		http://*.jpegshare.net/*.html
// @match		http://*.overdream.cz/*
// @match		http://*.fastpics.net/?v=*
// @match		http://www.ii4.ru/image-*
// @match		http://*.picuploader.de/*
// @match		http://*.rupict.ru/share*
// @match		http://bildr.no/view*
// @match		http://www.subeimagenes.com/img*
// @match		http://screenshot.ru/*
// @match		http://*.hostpix.de/show.php?img*
// @match		http://*.freeuploadimages.org/view*
// @match		http://smages.com/?v=*
// @match		https://*.hostingkartinok.com/show-image.php?id=*
// @match		http://*.4put.ru/*max*
// @match		http://www.pictureshack.ru/view*
// @match		http://*.host99.byethost4.com/share.php?id=*
// @match		http://*.eazypics.net/share*
// @match		http://xtupload.com/share.php?id=*
// @match		http://t.williamgates.net/share*
// @match		*://photosex.biz/v.php?id=*
// @match		http://*.imageteam.org/img-*
// @match		http://*.hostimage.ru/photo*
// @match		http://www.loaditup.de/*.html
// @match		http://*.imgbox.de/show/img*
// @match		http://*.picszone.net/view*
// @match		http://*.images.share-films.net/view*
// @match		http://www.uploadking.biz/show*
// @match		http://foto.xhost.lv/show.php?img=*
// @match		http://*.imagefile.org/view*
// @match		http://*.onimage.net/show*
// @match		http://*.uploadagent.de/show*
// @match		http://*.bildjunkies.de/view*
// @match		http://*.foto.hcfor.pl/view*
// @match		http://*.pic.tooptarinha.com/view*
// @match		http://*.poopr.org/view*
// @match		http://*.xp-images.hi2.ro/view*
// @match		http://*.dayzeddesigns.com/view*
// @match		http://*.freeimghosting.co.uk/view*
// @match		http://*.123poze.3x.ro/view*
// @match		http://*.upload.removed.us/view*
// @match		http://*.ximg.co.uk/view*
// @match		http://sl-images.ath.cx/view*
// @match		http://*.picatom.com/*
// @match		https://*.picshare.ru/image/*
// @match		http://*.imghost.pl/index.php?id=*
// @match		http://*.udostepniaj.pl/view*
// @match		http://*.hosting-zdjec.pl/view*
// @match		http://*.zapisz.net/view*
// @match		http://www.imagehosting.cz/?v=*
// @match		http://www.dumparump.com/view*
// @match		http://*.myxpic.com/showpic*
// @match		http://*.picness.com/image/*
// @match		http://h4z.it/View*
// @match		http://*.freeamateurteens.net/view*
// @match		http://*.fotoshack.us/foto*
// @match		https://*.imagebin.ca/v/*
// @match		http://*.loadpix.de/*.html
// @match		http://www.public-pic.de/image/show/*
// @match		http://*.9foto.ru/photo/*
// @match		http://uploads.ru/*
// @match		http://*.storepic.com/show*
// @match		http://www.myimg.de/?img=*
// @match		http://*.root-space.eu/file*
// @match		http://*.hot-file.org/p*
// @match		http://*.hostarea.de/show*
// @match		http://mepic.ru/view/?id=*
// @match		http://*.upislam.com/view*
// @match		http://*.ngarko.free.fr/view*
// @match		http://*.add-screen.com/view*
// @match		http://image.siroro.co.uk/p*
// @match		http://thaisharing.online.fr/view*
// @match		http://*.images.collectiontricks.it/view*
// @match		http://*.my-collection.ru/view*
// @match		http://img.schattorie.nl/view*
// @match		http://*.forexrainbow.com/view*
// @match		http://*.imgupload.pl/view*
// @match		http://*.1y9y.com/view*
// @match		http://*.addpix.net/view*
// @match		http://www.myuploadedimages.com/view*
// @match		http://multihoster.saxonia-fighter.de/view*
// @match		http://knecht.novarata.net/?*
// @match		http://*.img.irandeliver.com/?*
// @match		http://*.xferz.com/?*
// @match		http://*.up.kfesfahan.com/?*
// @match		http://upload.khontai.com/?*
// @match		http://*.image.pantyhosemania.info/?*
// @match		http://*.addyourpics.com/image*
// @match		http://*.imgnext.com/img-*
// @match		http://*.qattach.com/p*
// @match		http://*.host4images.com/view*
// @match		http://*.imgbank.cz/*
// @match		http://*.nyanimg.com/*
// @match		http://*.geekpics.in/*
// @match		http://*.imagesloading.altervista.org/?*
// @match		http://*.showmyimage.com/*
// @match		http://*.phpbbmods.it/immaggini*
// @match		http://upload.supreme-elite.fr/?*
// @match		http://*.fotohelp.kz/image*
// @match		https://*.myimg.me/*
// @match		http://*.heberg-hush.org/?*
// @match		http://*.oltaciyukle.com/*
// @match		http://*.pichost.name/*
// @match		*://*.fsfiles.org/flightsimshotsv2/image/*
// @match		http://*.imagend.com/*
// @match		http://*.imagerocket.com/*
// @match		http://*.hyyathost.com/*
// @match		http://images.reptilescanada.com/*
// @match		http://*.lakhdaria.net/imagebank/?*
// @match		http://*.webjardiner.com/hebergement_images_photos/image*
// @match		http://*.intergranada.com/images/?*
// @match		http://*.partizansk.eu/foto/image*
// @match		http://*.xenopix.com/?*
// @match		http://*.wepic.ru/*
// @match		http://*.imgup.com/images*
// @match		http://*.picturepush.com/public*
// @match		http://*.upload-image.fr/*
// @match		http://*.iezz.com/?*
// @match		https://*.images.baconbits.org/?*
// @match		http://*.upanh.ovo.vn/*
// @match		http://*.wrzucaj.net/*
// @match		http://*.heberge-images.com/?*
// @match		http://www.image.kg/*
// @match		http://*.savemyimage.com/*
// @match		http://*.img.dramacafe.tv/*
// @match		http://*.hosturimage.com/img-*
// @match		http://*.pic-mir.ru/*/*
// @match		http://*.244pix.com/view*
// @match		http://*.uploadimage.ro/view*
// @match		https://*.imgflare.com/*/*
// @match		https://www.imagefap.com/photo/*
// @match		https://www.imagefap.com/video.php?vid=*
// @match		http://filefap.com/view*
// @match		https://imgur.com/*
// @match		https://m.imgur.com/*
// @exclude		https://imgur.com/a/*
// @exclude		https://m.imgur.com/a/*
// @match		https://motherless.com/*
// @match		https://*.tumblr.com/image/*
// @match		https://*.media.tumblr.com/*.*
// @match		http://*.imageporter.com/*
// @match		http://*.damimage.com/img-*
// @match		https://fapping.empornium.sx/image/*
// @match		http://imgboxxx.com/view*
// @match		http://*.imghere.net/view*
// @match		http://*.sharepic.biz/show-image.php?id=*
// @match		http://f-lite.ru/*
// @match		http://*.picturescream.com/*
// @match		http://*.imgdone.com/view*
// @match		https://*.2i.cz/i/*
// @match		http://awesomescreenshot.com/*
// @match		https://www.flickr.com/photos/*/*/*
// @exclude		https://www.flickr.com/photos/*/galleries/*
// @exclude		https://www.flickr.com/photos/*/albums/*
// @exclude		https://www.flickr.com/photos/sets/*
// @exclude		https://www.flickr.com/photos/tags/*
// @exclude		https://www.flickr.com/photos/page*
// @exclude		https://www.flickr.com/photos/with*
// @exclude		https://www.flickr.com/photos*favorites*
// @match		http://www.amateri.cz/g*/*
// @match		*://*.wikipedia.org/wiki/*:*.jp*
// @match		*://*.wikipedia.org/wiki/*:*.png
// @match		*://*.wikimedia.org/wiki/*:*.jp*
// @match		*://*.wikimedia.org/wiki/*:*.pn*
// @match		*://*.xxxscreens.com/img-*
// @match		http://avenuexxx.com/*-*
// @match		http://avenuexxx.com/archives/*/*
// @exclude		http://avenuexxx.com/archives/category/*
// @match		http://www.bilderhoster.net/*.html
// @match		http://*.xxxscreens.com/img-*
// @match		http://*.imgdope.com/view*
// @match		http://*.imagehost.eu/*
// @match		http://*.aveimage.com/view*
// @match		*://*.fappic.com/*
// @match		http://*.imagenimage.com/*/*
// @match		http://*.adultur.com/img-*
// @match		https://*.imageshimage.com/*/*
// @match		http://*.imgswift.com/*/*
// @match		http://*.imageporn.eu/?v=*
// @match		https://*.500px.com/photo/*
// @match		http://*.greenpiccs.com/images/*.html
// @match		http://*.hostmat.eu/view*
// @match		http://*.photobucket.com/user/*/media/*.htm*
// @match		https://www.imgshots.com/img*
// @match		https://www.imgshots.com/show/*
// @match		https://*.3xplanet.com/view*
// @match		https://*.3xplanet.net/view*
// @match		http://*.imgmega.com/*.html
// @match		*://img.yt/img-*
// @match		http://*.payforpic.ru/*/*/
// @match		http://*.keep4u.ru/full/*
// @match		http://*.pic.re/*.html
// @match		http://*.freshpics.ru/*/*/
// @match		*://*.imgseeds.com/img-*
// @match		https://*.pronpic.org/*/*
// @match		https://prnt.sc/*
// @match		http://*.imgdream.net/view*
// @match		http://*.imgtab.net/*
// @match		http://*.kephost.com/image/*
// @match		http://i.ruspotting.net/image/*
// @match		https://*.gifyu.com/image/*
// @match		http://celebimg.com/image/*
// @match		http://*.sharepic.org/image/*
// @match		http://*.zuly.de/image/*
// @match		http://upload.vstanced.com/image/*
// @match		http://*.thro.bz/image/*
// @match		http://*.qoou.net/image/*
// @match		http://brightpic.tk/image/*
// @match		http://*.cweb-pix.com/image/*
// @match		http://hosting.webspell.fr/image/*
// @match		http://*.i-pict.ru/image/*
// @match		http://*.images.woh.to/image/*
// @match		http://*.imghaze.com/image/*
// @match		http://*.imgup.nl/image/*
// @match		http://*.nium.co/image/*
// @match		http://pix.hostux.net/image/*
// @match		http://*.pixoload.de/image/*
// @match		http://*.primeimg.co/image/*
// @match		http://pic.xtream-reallife.de/image/*
// @match		http://*.ultraimg.com/image/*
// @match		http://demo.chevereto.com/image/*
// @match		*://imgclick.net/*/*
// @match		http://*.gogoimage.org/img-*
// @match		http://imgmoney.ru/*.html
// @match		http://imgmoney.ru/full/
// @match		http://*.imglooks.com/img-*
// @match		http://*.you-logo.ru/show*
// @match		http://*.uploadimagex.com/view*
// @match		http://*.powerlogo.ru/show*
// @match		http://youpicture.org/?v=*
// @match		http://*.all-poster.ru/?v=*
// @match		http://*.picbug.ru/share*
// @match		http://*.sxpix.nl/img-*
// @match		http://*.hotflick.net/u/v/?q=*
// @match		http://*.hotflick.net/f/v/?q=*
// @match		http://vavvi.com/images/*.html
// @match		https://www.deviantart.com/*/art/*
// @match		http://*.myceleb.net/u/v/?q=*
// @match		http://*.imageblinks.com/img-*
// @match		*://*.gelbooru.com/index.php?page=post&s=view&id=*
// @match		*://*.youhate.us/index.php?page=post&s=view&id=*
// @match		https://safebooru.org/index.php?page=post&s=view&id=*
// @match		https://hypnohub.net/index.php?page=post&s=view&id=*
// @match		https://danbooru.donmai.us/posts/*
// @match		http://konachan.com/post/show/*
// @match		http://konachan.net/post/show/*
// @match		https://yande.re/post/show/*
// @match		https://chan.sankakucomplex.com/*posts/*
// @match		https://idol.sankakucomplex.com/*posts/*
// @match		https://yande.re/post/show/*
// @match		http://www.zerochan.net/*
// @match		http://imgzap.com/view*
// @match		http://*.olivepix.com/view/*
// @match		http://*.ocaload.com/img-*
// @match		http://*.imghit.com/img-*
// @match		http://*.imageon.org/img-*
// @match		http://*.imgcentral.com/view*
// @match		http://*.chronos.to/*
// @match		http://picspornfree.me/img-*
// @match		http://*.pic-you.com/p*
// @match		http://*.image-bugs.com/*mage/*
// @match		https://*.imgdrive.net/img-*
// @match		https://www.pixiv.net/*/artworks/*
// @match		http://*.scrin.org/?v=*
// @match		http://*.thumbnailus.com/img-*
// @match		http://*.nimplus.com/img-*
// @match		https://*.imgtaxi.com/img-*
// @match		http://*.imgstudio.org/img-*
// @match		http://goimge.com/img-*
// @match		http://*.safeimage.biz/image/*
// @match		http://*.imgbase.online/*/*/
// @match		http://*.picpays.ru/*/*/
// @match		http://*.imgclover.com/image/*
// @match		*://*.imgking.co/img*
// @match		http://ask.fm/*/photo/original
// @match		http://*.newimagepost.com/img-*
// @match		http://*.imageho.me/img-*
// @match		http://myimg.club/*
// @match		https://www.hotimage.uk/*mg-*
// @match		http://*.10.imageleon.com/i-*
// @match		https://www.dropbox.com/s/*/*
// @match		http://imgor.net/img-*
// @match		http://*.imagedax.net/*/*.html
// @match		https://*.imgmonkey.com/*/*.html
// @match		http://*.fapat.me/img-*
// @match		http://photo.weibo.com/*/large/photo_id/*
// @match		https://*.crazyimg.com/images/*.html
// @match		http://imgbe.com/img-*
// @match		https://*.imgextra.uk/image/*
// @match		http://*.extraimago.com/image/*
// @match		http://*.fireimg.cc/img-*
// @match		http://www.pornimagex.com/image/*
// @match		http://*.imgboom.net/*
// @match		http://*.img24.org/*.html
// @match		http://*.img24.org/full/
// @match		http://*.pic-maniac.com/*
// @match		https://*.instagram.com/p/*
// @match		https://*.instagram.com/*/p/*
// @exclude		https://instagram.com/p/*/embed/*
// @exclude		https://*.instagram.com/p/*/embed/*
// @match		http://*.imgsay.com/?v=*
// @match		http://*.imgsmile.com/?v=*
// @match		http://*.balkanelite.org/MultiHoster/view*
// @match		https://*.x.com/*/photo/*
// @match		http://*.icezap.com/img-*
// @match		*://*.rapidimg.net/img-*
// @match		http://*.imgtornado.com/img-*
// @match		http://*.daily-img.com/image/*
// @match		http://*.imageab.com/image/*
// @match		http://*.erimge.com/img-*
// @match		http://*.imgtrial.com/img-*
// @match		https://imgtown.net/*.php
// @match		http://ameblo.jp/*/image-*
// @match		http://*.loftlm.ru/img-*
// @match		http://*.imgdragon.com/*/*.html
// @match		http://ftop.ru/*/*
// @match		http://*.imgurx.net/share*
// @match		http://savepic.ru/*.htm
// @match		http://*.imgmaid.net/*
// @match		http://*.imggold.org/*/*.html
// @match		http://*.imgcredit.xyz/img-*
// @match		http://*.imgcredit.xyz/p/img-*
// @match		http://*.imgcredit.xyz/image/*
// @match		http://*.dimtus.com/img-*
// @match		http://*.coreimg.net/*
// @match		http://sfwimg.com/image/*
// @match		http://*.img3x.com/image/*
// @match		http://*.imguniversal.com/*
// @match		http://*.imagepearl.com/view/*
// @match		http://*.imagepearl.com/verify/*
// @match		http://*.tinizo.com/img-*
// @match		*://*.imgkings.com/img*
// @match		http://*.imagerar.com/img*
// @match		http://*.sendpic.org/view/*
// @match		*://www.porncomix.info/*/*/
// @exclude		*://www.porncomix.info/gallery/*
// @exclude		*://www.porncomix.info/artist/*
// @match		*://*.picclock.ru/*/*/
// @match		http://*.svetmonet.ru/*.html
// @match		http://*.svetmonet.ru/full/
// @match		http://*.imgpix.net/*
// @match		http://*.freeimagehostin.com/img-*
// @match		http://www.mixbase.net/gallery/image.*
// @match		https://www.adultimages.xyz/*/image*.html
// @match		http://*.pic4share.ru/*.html
// @match		http://*.pic4share.ru/full/
// @match		http://*.sximg.nl/img-*
// @match		http://*.0img.net/?v=*
// @match		https://ss.movierls.net/image/*
// @match		http://www.xxximagetpb.org/image/*
// @match		http://www.pixsense.net/site/v/*
// @match		http://www.imgsky.net/*
// @match		http://www.imagespicy.site/site/v/*
// @match		https://outletpic.com/*.php
// @match		http://*.pix.ac/image/*
// @match		*://*.imgmak.com/image/*
// @match		http://*.freephotohostin.com/img-*
// @match		http://*.imgcat.pw/img-*
// @match		http://*.levinpic.org/*.html
// @match		https://www.sparrowpics.com/image/*
// @match		http://*.imgmax.com/image/*
// @match		https://lostpix.com/?v=*
// @match		https://extraimago.com/image/*
// @match		http://www.joblo.com/hollywood-celebrities/hottie-profile/*/image-gallery/*.jpg
// @match		*://extraimage.net/image/
// @match		*://www.bellazon.com/main/attachment/*
// @match		*://extraimage.net/image/*
// @match		https://www.artstation.com/artwork/*
// @match		http://bcy.net/illust/detail/*
// @match		http://*.imgpics.nl/img-*
// @match		http://*.imagexxx18.com/image/*
// @match		http://*.imagepics.xyz/img-*
// @match		*://postto.me/*
// @match		http://*.imgskull.xyz/image/*
// @match		http://*.imgskull.com/image/*
// @match		*://*.ninjaimages.com/*.html
// @match		*://*.imgprime.com/img*
// @match		*://*.piccash.net/*/*/
// @exclude		*://piccash.net/cabinets/*
// @exclude		*://www.piccash.net/cabinets/*
// @match		http://imgwo.com/img-*
// @match		http://luxpic.ru/images/*.html
// @match		http://*.pic-images.ru/full/
// @match		http://*.pic-images.ru/*.html
// @match		http://*.imgspic.ru/full/
// @match		http://*.imgspic.ru/*.html
// @match		http://imgleveret.com/img-*
// @match		http://porn84.org/img-*
// @match		https://*.ima.gy/i/*
// @match		http://picpower.ru/full/
// @match		http://picpower.ru/*.html
// @match		http://piccloud.ru/full/
// @match		http://piccloud.ru/*.html
// @match		https://imgbase.ru/*/*/
// @match		http://*.sexybabepics.net/img-*.html
// @match		http://*.sexybabepics.net/x/image/*
// @match		http://*.imagecrest.com/verify/*
// @match		http://*.imagecrest.com/view/*
// @match		https://*.picz.site/img-*.html
// @match		http://*.allxpix.com/img-*.html
// @match		http://pixxsees.ru/full/
// @match		http://pixxsees.ru/*.html
// @match		http://imgblank.com/img-*.html
// @match		http://imgtrex.com/*/*
// @match		https://imgwallet.com/img-*.html
// @match		http://2picsun.ru/full/
// @match		http://2picsun.ru/*.html
// @match		http://picpie.org/image/*
// @match		*://*.xeimg.yt/img-*.html
// @match		*://*.imagedisco.net/?v=*
// @match		http://*.imgmain.com/img-*.html
// @match		http://*.imgvisits.com/*
// @match		*://pixxxels.org/image/*
// @match		http://img-pika.ru/full/
// @match		http://img-pika.ru/*.html
// @match		http://imgcach.ru/*/*/
// @match		https://*.xhamster19.com/photos/gallery/*/*
// @match		https://*.xhamster11.com/photos/gallery/*/*
// @match		https://*.xhamster4.com/photos/gallery/*/*
// @match		https://*.xhamster3.com/photos/gallery/*/*
// @match		https://*.xhamster.com/photos/gallery/*/*
// @match		https://*.xhamster.desi/photos/gallery/*/*
// @exclude		/^https://(.*\.)?xhamster(\d{1,2})?\.(com|desi)/photos/gallery/.*/\d{1,3}$/
// @match		http://*.imghall.com/?v=*
// @match		https://*.acidimg.cc/img-*
// @match		https://imgcloud.pw/image/*
// @match		https://z4a.net/image/*
// @match		https://t.hogor.net/?pm=*
// @match		http://xxxwebdlxxx.org/*.html
// @match		https://www.sizzlingclicks.com/image/*
// @match		http://wwxxww.ru/*.html
// @match		http://wwxxww.ru/full/
// @match		http://passpix.com/images/*
// @match		http://*.imgseed.com/img-*.html
// @match		http://img.folluo.me/image/*
// @match		*://imgpart.com/img-*
// @match		https://picstate.com/view/full/*
// @match		https://jerking.empornium.ph/image/*
// @match		https://truepic.org/*
// @match		https://www.jiopic.com/image/*
// @match		https://imx.to/img-*
// @match		https://imx.to/i/*
// @match		https://pixxxels.cc/*
// @match		http://picpic.online/*/*/
// @match		http://imgking.xyz/*.html
// @match		http://moreimage.pw/image/*
// @match		https://imgsha.com/i/*
// @match		https://www.pic-upload.de/view-*/*.html
// @match		http://pic3you.org/*.html
// @match		http://pic3you.org/full/
// @match		*://*.vipix.pw/images/*.html
// @match		https://*.imgazure.com/*.html
// @match		https://*.imgazure.com/full/
// @match		*://*.dpic.me/*
// @match		*://*.picmoza.com//img-*.html
// @match		*://suckmypic.net/*
// @match		*://pic.hotimg.site/img-*.html
// @match		http://*.shaggyimg.pro/*.html
// @match		http://*.shaggyimg.pro/full/
// @match		https://*.imgjazz.xyz/img-*.html
// @match		https://22pixx.xyz/i*-*/*.html
// @match		https://22pixx.xyz/i-*/*.html
// @match		https://22pixx.xyz/x-*/*.html
// @match		https://22pixx.xyz/y-*/*.html
// @match		*://trueimg.xyz/u-*/*.html
// @match		*://imgsmarts.info/*.html
// @match		*://imgsmarts.info/full/
// @match		*://www.keepimg.com/image/*
// @match		https://ibb.co/*
// @match		http://*.imgsee.net/*
// @match		*://*.picbaron.com/*/*.html
// @match		*://*.imgbaron.com/*/*
// @match		https://kvador.com/*/*.html
// @match		http://picshost.info//img-*.html
// @match		*://imagescanner.cc/images/*.html
// @match		http://batpic.com/image/*
// @match		http://*.1pic.org/view/*.html
// @match		*://lookimg.com/image/*
// @match		http://*.xfap.fun/img-*.html
// @match		*://*.hdmoza.com//img-*.html
// @match		*://trans.firm.in/images/*.html
// @match		http://*.imgtorrnt.in/view.php?id=*
// @match		https://*.dailyimages.xyz/*.html
// @match		https://*.dailyimages.xyz/full/
// @match		http://*.petrovixxxjav.com//img-*.html
// @match		*://*.placeimg.net/img-*.html
// @match		https://subefotos.com/ver/?*
// @match		http://*.imageshtorm.com/img-*.html
// @match		https://*.blameless.work/img-*.html
// @match		https://trumbhost.com/images/*.html
// @match		http://*.xxx.kodiak.top/img-*.html
// @match		*://*.your-pictures.net/p*/*.html
// @match		https://*.xaoutchouc.live/img-*.html
// @match		https://*.picusha.net/?v=*
// @match		https://e621.net/posts/*
// @match		https://rule34.xxx/index.php?page=post&s=view&id=*
// @match		https://*.rule34hentai.net/post/view/*
// @match		https://pixs.cx/*
// @match		*://mshelxxx.ru.com//img-*.html
// @match		*://www.hentai-foundry.com/pictures/*
// @exclude		*://www.hentai-foundry.com/pictures/user/*/page/*
// @match		*://imgcredit.xyz/image/*
// @match		*://drlink.online/*/*/
// @match		https://savepice.ru/full/*.html
// @match		https://kropic.com/*/*.html
// @match		http://*.imgzong.xyz/*
// @match		https://www.furaffinity.net/view/*
// @match		http://imageking.xyz/*
// @match		http://imgxx.xyz/*
// @match		http://imgao.xyz/*
// @match		http://imgweng.xyz/*
// @match		http://imgkes.xyz/*
// @match		https://imgair.net/*
// @match		https://imgtgd.shop/*
// @match		https://*.imgsto.com/*/*.html
// @match		https://*.pics4you.net/*/*.html
// @match		https://*.pics4you.org/*/*.html
// @match		https://vipr.im/*
// @match		https://*.trans.firm.in/img-*.html
// @match		https://*.imgdawgknuttz.com/img-*.html
// @match		https://*.xxxwebdlxxx.top/img-*.html
// @match		https://*.olarixas.xyz/img-*.html
// @match		http://imgkoi.xyz/*
// @match		https://imagehaha.com/*/*
// @match		https://picshick.com/*/*
// @match		https://imgsen.com/*/*.html
// @match		https://premalo.com/*/*.html
// @match		https://picdollar.com/*/*.html
// @match		https://fotokiz.com/*/*.html
// @match		https://silverpic.com/*/*.html
// @match		https://silverpic.net/*/*.html
// @match		http://imglin.xyz/*
// @match		*://*.crownimg.com/*/*.html*
// @match		http://imgkr.xyz/*
// @match		*://*.xxxwebdlxxx.org/img-*.html
// @match		http://imgbird.xyz/*
// @match		https://*.pornhd720p.com//img-*.html
// @match		http://imgwewo.xyz/*
// @match		https://*.rintor.space/image/*
// @match		http://imgirx.xyz/*
// @match		http://*.imgalor.xyz/*
// @match		http://imgjut.buzz/*
// @match		http://imgtrw.buzz/*
// @match		http://imglina.xyz/*
// @match		http://imgkuiw.xyz/*
// @match		http://imgwang.buzz/*
// @match		https://imgbb.com/*
// @match		*://vfl.ru/fotos/*.html
// @match		https://*.imgstar.eu/*/*.html
// @match		https://dewimg.com/*.php
// @match		https://pictwn.com/*.php
// @match		https://comment-cdn.9gag.com/image?*
// @match		https://t.me/*/*
// @match		https://telegram.me/*/*
// @match		*://piccy.info/view3/*/*/
// @match		http://imgmeno.buzz/*
// @match		https://*.pics4upload.com/*/*.html
// @match		http://imgpekele.buzz/*
// @match		http://imglqw.buzz/*
// @match		http://imgyng.buzz/*
// @match		http://imgbbd.buzz/*
// @match		http://imgwia.buzz/*
// @match		http://imgowk.buzz/*
// @match		http://imgokr.buzz/*
// @match		http://imgoiu.buzz/*
// @match		https://picmoney.org/image/*
// @match		*://skrinshoter.ru/s/*/*
// @match		https://photo-screen.ru/i/*
// @match		https://postlmg.cc/*
// @match		https://pasteboard.co/*
// @match		https://*.picklik.ru/image/*
// @match		https://*.jpg.church/img/*
// @match		https://rule34.us/index.php?r=posts/view&id=*
// @match		https://*.imghub.ru/i/*
// @match		https://imgeza.buzz/*
// @match		http://mrlzqoe.buzz/*
// @match		https://radikal.host/i/*
// @match		https://*.slowpic.xyz//img-*.html
// @match		https://yapx.ru/*/*
// @match		https://imgpukxxr.site/*
// @match		https://picngt.shop/*
// @match		https://realbooru.com/index.php?page=post&s=view&id=*
// @match		*://imgutkr.store/*
// @match		*://imghhr.online/*
// @match		*://imglaiw.store/*
// @match		https://meetimgz.com/*.php
// @match		*://imgvue.online/*
// @match		*://imgxgf.store/*
// @match		*://imgbibam.online/*
// @match		https://imgsh.net/a/*
// @match		*://imgqaz.online/*
// @match		*://imgurt.online/*
// @match		https://jpg5.su/img/*
// @match		https://jpg6.su/img/*
// @match		https://jpg7.cr/img/*
// @match		*://imgwxr.online/*
// @match		*://imgyre.online/*
// @match		https://pixl.li/image/*
// @match		https://pixlev.store/*
// @match		https://pixmax.store/*
// @match		https://imgxqy.online/*
// @match		https://skr.sh/*
// @match		https://i.redd.it/*
// @match		https://preview.redd.it/*
// @match		https://www.reddit.com/media?url=*
// @match		https://vsco.co/*/media/*
// @match		https://www.gettyimages.com/detail*photo*
// @match		https://www.gettyimages.com/detail*video*
// @match		https://jpg.pet/img/*
// @match		https://jpeg.pet/img/*
// @match		https://imgnmh.cfd/*
// @match		https://im.ge/i/*
// @match		https://piczel.tv/gallery/image/*
// @match		https://www.screencast.com/t/*
// @match		https://slushe.com/galleries/*.html
// @match		https://img.trafficimage.club/image/*
// @match		https://*.picturedent.org/image/*
// @match		https://pig69.com/upload/*
// @match		https://javball.com/upload/*
// @match		https://idol69.net/upload/*
// @match		https://picqaxs.cfd/*
// @match		https://www.zupimages.net/viewer.php?id=*
// @match		https://porn4f.com/upload/*
// @match		https://ovabee.com/upload/*
// @match		https://ai18.pics/upload/*
// @match		https://paste.pics/*
// @match		https://cnxx.me/upload/*
// @match		https://cnpics.org/upload/*
// @match		https://picvvvd.sbs/*
// @match		https://civitai.com/images/*
// @match		https://civitai.com/posts/*
// @match		https://cosplay18.pics/upload/*
// @match		https://*.mjj.today/i/*
// @match		https://adult-images.ru/*/*/
// @match		https://imgfoto.host/i/*
// @match		https://picabox.ru/pic/*
// @match		https://snipboard.io/*
// @match		https://www.seaart.ai/explore/detail/*
// @match		https://tensor.art/images/*
// @match		https://freeimage.host/i/*
// @match		https://imgjjtr.sbs/*
// @match		https://tezzpic.com/*.php
// @match		https://clip2net.com/s/*
// @match		https://4fuk.me/upload/*
// @match		https://555fap.com/upload/*
// @match		https://kin8-av.com/upload/*
// @match		https://javsunday.com/upload/*
// @match		https://*.redgifs.com/watch/*
// @match		https://*.redgifs.com/gifs/*
// @match		https://hentaicovid.com/uploads/*
// @match		https://hentaipig.com/upload/*
// @match		https://fikfok.net/upload/*
// @match		https://image.javbee.me/*
// @match		https://pixeldrain.com/u/*
// @match		https://getapic.me/v/*
// @match		https://3minx.com/upload/*
// @match		https://sweetie-fox.com/upload/*
// @match		https://porn4f.org/upload/*
// @match		https://pixai.art/artwork/*
// @match		https://pixai.art/video/*
// @match		https://image.javbee.vip/*
// @match		https://fc2ppv.stream/upload/*
// @match		https://blackwidof.org/upload/*
// @match		https://iimg.su/i/*
// @match		https://radikal.cloud/i/*
// @match		https://hamster.is/image/*
// @match		https://hamsterimg.net/image/*
// @match		https://coomimgs.net/image/*
// @match		https://javring.com/upload/*
// @match		https://xcamcovid.com/upload/*
// @match		https://javtele.net/upload/*
// @match		https://hentai4f.com/upload/*
// @match		https://porn-pig.com/upload/*
// @match		https://kin8-jav.com/upload/*
// @match		https://cn-av.com/upload/*
// @match		https://anime-jav.com/upload/*
// @match		https://chinese-pics.com/upload/*
// @match		https://kr-av.com/upload/*
// @match		https://xxpics.org/upload/*
// @match		https://hentaixnx.com/upload/*
// @match		https://hentai-sub.com/upload/*
// @match		https://cosplay-xxx.com/upload/*
// @match		https://www.weasyl.com/*/submissions/*
// @match		https://ltdfoto.ru/image/*
// @match		https://imgouhmde.sbs/*
// @match		https://vgy.me/u/*
// @match		https://gyazo.com/*
// ==/UserScript==

"use strict";

console.debug("HandyImage Script running");

if (typeof unsafeWindow === "undefined")
{
	unsafeWindow = window;
	console.warn("unsafeWindow missing");
}

if (typeof GM_registerMenuCommand !== "undefined")
{
	GM_registerMenuCommand("Handy Image Configuration", cfg, "C");
}

if(window.location.href.lastIndexOf(window.location.hostname) + window.location.hostname.length + 1 == window.location.href.length)
{
	console.warn("we are on website's main page, aren't we?");
	return false;
}
let type = document.contentType.substring(0,document.contentType.indexOf("/"));
if (type === "image" || type === "video")
{
	console.warn("Handy isn't needed for directly opened images or videos (if you want it this way - use CenterImage userscript");
	return false;
}
if(history.length !== 1 && document.referrer)
{
	if(document.referrer.lastIndexOf(window.location.hostname) != -1 && document.referrer.lastIndexOf(window.location.hostname) +1 == document.referrer.length - window.location.hostname.length)
	{
		console.warn("Handy Image: userscript stopped itself from running INTENTIONALLY: cuz your previous page is websites mainpage so you probably have just uploaded a picture yourself");
		return false;
	}
}
if (document.title == "Attention Required! | Cloudflare" || document.title == "Just a moment...")
{
	console.warn("Cloudflare MITM guard page.  Stopping.");
	return false;
}
if(sessionStorage.length)
{
	if(sessionStorage.hji)
	{
		if(sessionStorage.hji.indexOf(window.location.href) != -1) // check address in case page failed to load b4
		{
			console.warn("Handy Image: userscript stopped itself from running INTENTIONALLY");
			setTimeout(function() {sessionStorage.removeItem("hji");},1000); // for frames
			return false;
		}
		sessionStorage.removeItem("hji");
	}
	else if(sessionStorage.hji_back)
	{
		if(Date.now() < parseInt(sessionStorage.hji_back)) // 2 sec not yet passed
		{
			console.warn("Handy Image: userscript now helps you go to previous page automatically");
			sessionStorage.removeItem("hji_back");
			window.history.go(-1);
			return false;
		}
		sessionStorage.removeItem("hji_back");
	}
}

function q(s){if(document.body){return document.body.querySelector(s);}return null;}
var cfg_direct = false;
var cfg_bgclr ="grey";
var cfg_fitWH = true;
var cfg_fitB = false;
var cfg_fitS = true;
var cfg_fitOS = false;
var cfg_js;
var cfg_vol = "0.5";
var referrer_policy = "strict-origin-when-cross-origin"; // default browser behavior
var dp = false;
let orgImgWidth;
let orgImgHeight;
var rescaled = 0;
var tb = 0;
var timeout = 1000;
var FireFox = ((navigator.userAgent.indexOf('Firefox') != -1) ? true : false);
var i;
var j;
var bStopScripts = false;
var bUseCustomFilename = true;
var filename = "";
var filename_ext = "";
var skip_by = 5;
var is_video = false;
var is_gallery = false;
var ext_list_not_image = ['zip', '7z', 'rar', 'psd', 'swf', 'doc', 'rtf', 'pdf'];
var ext_list_video = ['webm', 'mp4', 'm4v', 'avi', 'flv', 'ogg'];
var iurl = window.location.hostname;
if(!iurl.indexOf("www."))
{
	iurl = iurl.substr(4);
}
var host = iurl;
if(window.location.pathname.indexOf("//") == 0)
{
	iurl += "/";
}

function ws()
{
	if(!FireFox) // NOT firefox
	{
		window.stop();
	}
}

function sanitize() // lol I'm such a hacker
{
	removeAllListeners();
	let lasttask = unsafeWindow.setTimeout(function() {},0);
	for(let n = lasttask; n > 0; n--)
	{
		//if(n !== tg) // unsafeWindow.clear can't clear window.tasks set in the userscript but lets be safe
		//{
			unsafeWindow.clearTimeout(n); // only unsafeWindow has access to clear page tasks
		//}
	}
}

const protected_createElement = Document.prototype.createElement.bind(document);
protected_addEventListener.originalF = Element.prototype.addEventListener;
function protected_addEventListener (el, event, handler, capture = false)
{
	return protected_addEventListener.originalF.call(el, event, handler, capture);
}

var _eventHandlers = {};
var origAdd = unsafeWindow.Element.prototype.addEventListener; // page's one
if(FireFox && typeof exportFunction === "function")
{
	wrapper_addEventListener = exportFunction(wrapper_addEventListener, unsafeWindow); // TM magic
}
// addEventListener inside userscript's `window` doesn't change
unsafeWindow.Window.prototype.addEventListener = wrapper_addEventListener;
unsafeWindow.Document.prototype.addEventListener = wrapper_addEventListener;
unsafeWindow.Element.prototype.addEventListener = wrapper_addEventListener;

function wrapper_addEventListener (event, handler, capture = false)
{
	//if (typeof _eventHandlers === "undefined") unsafeWindow._eventHandlers = {};
	if (bStopScripts)
	{
		console.debug("HJI: stopped 1 addEventListener: " + event);
		return null;
	}
	if (!(event in _eventHandlers))	_eventHandlers[event] = [];

	_eventHandlers[event].push({ node: this || unsafeWindow, handler: handler, capture: capture });
	console.debug("HJI: wrapped 1 addEventListener: " + event + ", "+ Object.keys(_eventHandlers).length);
	return origAdd.call(this, event, handler, capture);
}

function removeAllListeners ()
{
	console.debug("HJI: removed "+ Object.keys(_eventHandlers).length + " event listeners: " + Object.keys(_eventHandlers));
	for(let event in _eventHandlers)
	{
		_eventHandlers[event].forEach(({ node, handler, capture }) => node.removeEventListener(event, handler, capture));
		delete _eventHandlers[event];
	}
}

function onVisibilityChange()
{
	if (document.visibilityState === 'visible')
	{
		if(i && i.src)
		{
			window.removeEventListener('visibilitychange', onVisibilityChange);
			onWindowResize();
			autoresize();
		}
	}
}

const AddElementToPage = typeof GM_addElement === "function" ? GM_addElement : function (node, type, content)
{
	let el = protected_createElement(type);
	el.textContent = content.textContent;
	node.appendChild(el);
}; // stupid adGuard

function DeleteAllCookies()
{
	document.cookie.split(";").forEach(function(c) {
		document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
	});
}

function onscript(e)
{
	//console.debug( "STOPPED: " + e.target.src + e.target.innerHTML);
	console.debug( "HJI: onscript stopped 1 script from loading");
	e.preventDefault();
	e.stopImmediatePropagation();
}

function onbeforeunload() // back helper
{
	sessionStorage.hji_back = Date.now() + 2000; // 2 sec to help back from double-pages
}

function makeimage()
{
	if(typeof cfg_js !== "string") { console.log("waiting for settings to load to makeimage()"); if(!loadCfg_callbacks.includes(makeimage)){loadCfg_callbacks.push(makeimage);} return false;} // lets wait for stupd async
	if(cfg_direct === true){let a = protected_createElement('a'); a.setAttribute('href',i.src); a.click(); return false;}
	let css 
 = `:root, body
{
	height: 100%;
	width: 100%;
	margin: 0px;
	display: grid;
}
img, video
{
	margin: auto;
	outline: none;
	max-width: unset;
	max-height: unset;
	image-orientation: from-image;
}
video::-webkit-media-controls-panel
{
	background-image: linear-gradient(transparent, transparent) !important;
}
:root, body, img, video
{
	min-width: 0px;
	min-height: 0px;
	background-color: ${cfg_bgclr};
}`; // don't mind the broken identation, multiline string demands it
	AddElementToPage(document.documentElement, 'style', {textContent: css});
	ws();
	let isrc = i.src;
	i = protected_createElement(is_video? "video" : "img");
	i.src = isrc;
	document.body.appendChild(i);
	if(!is_video)
	{
		protected_addEventListener(i, "click", rescale, true);
	}
	else
	{
		i.volume = cfg_vol;
		protected_addEventListener(i, "volumechange", onvolumechange, true);
		i.controls = true;
		i.loop = true;
		i.preload = "auto";
		i.focus(); // so video volume built-in hotkeys would work (until you unfocus it)
	}
	protected_addEventListener(i, "auxclick", rescale, true);
	protected_addEventListener(i, "mousedown", mousedown, true); // chrome old fix - still needed
	window.addEventListener("keydown", onkeydown, true);
	window.addEventListener("resize", onWindowResize);
	window.addEventListener("visibilitychange", onVisibilityChange);
	onVisibilityChange(); // if tab is already active when opening image
	if(dp){console.warn("you are on a double-page image hosting (probably)");window.addEventListener("beforeunload", onbeforeunload, true);}
	if (typeof GM_registerMenuCommand !== "undefined")
	{
		GM_registerMenuCommand("Handy Image Download image", download_image, "N");
		GM_registerMenuCommand("Handy Image Re-Load page normally", () => {sessionStorage.hji = window.location.href; window.location.reload();}, "R");
	}
}

function find_text_in_scripts(text, stopword, start_from_top = false, search_after_word = null, content_type = "img")
{
	let scripts = document.getElementsByTagName("script");
	const searchFunc = start_from_top ? String.prototype.indexOf : String.prototype.lastIndexOf;
	for(let n = 0; n < scripts.length; n++)
	{
		let foundIdx;
		if(search_after_word)
		{
			foundIdx = searchFunc.call(scripts[n].innerHTML, search_after_word);
			if(foundIdx === -1)
			{
				foundIdx = undefined;
				console.debug("find_text_in_scripts(): NOT found search_after_word: ");
				continue; // the word MUST be present
			}
			else
			{
				console.debug("find_text_in_scripts(): found search_after_word at: " + foundIdx);
			}
		}
		let found_start_pos = searchFunc.call(scripts[n].innerHTML, text, foundIdx);
		if(found_start_pos == -1){continue;} // text not found in this <script>, try next?
		found_start_pos += text.length;
		let found_content = scripts[n].innerHTML.substring(found_start_pos, scripts[n].innerHTML.indexOf(stopword, found_start_pos));
		found_content = JSON.parse('"' + found_content.replace('"', '\\"') + '"'); // unescape it
		found_content = decodeURIComponent(found_content);
		i = protected_createElement(content_type);
		i.src = found_content;
		console.debug("find_text_in_scripts(): found this url: " + found_content);
		return true;
	}
	return false;
}

function post(path, params, method)
{
	method = method || "post";
	let form = protected_createElement("form");
	form.setAttribute("method", method);
	form.setAttribute("action", path);
	for(let key in params)
	{
		if(Object.hasOwn(params, key)) // hasOwnProperty
		{
			let hiddenField = protected_createElement("input");
			hiddenField.setAttribute("type", "hidden");
			hiddenField.setAttribute("name", key);
			hiddenField.setAttribute("value", params[key]);

			form.appendChild(hiddenField);
		}
	}
	document.body.appendChild(form);
	form.submit();
}

function makeworld()
{
	let f;
	if(i){return;}
	// per-host image detection
	switch (host)
	{
	case "simplest-image-hosting.net":
	case "hostimage.ru":
	case "imgchili.net":
	case "adultimages.xyz":
		i = q('img');
		break;
	case "myceleb.net":
	case "depic.me":
	case "dpic.me":
		i = q('img#pic');
		break;
	case "imagebin.ca":
		i = q('a img');
		if(i){i.src = i.parentNode.href;}
		break;
	case "i.redd.it":
	case "preview.redd.it":
		i = q('faceplate-img, img');
		if(i){i.src = i.getAttribute("src");}
		break;
	case "savepic.org":
	case "savepic.ru":
		i = q('a img:not([src*="/images/"])');
		break;
	case "motherless.com":
		j = true;
		i = q('div#media-media div a img');
		break;
	case "awesomescreenshot.com":
		i = q('img#screenshot');
		break;
	case "zupimages.net":
		i = q('img#img_size');
		break;
	case "dropbox.com":
		j = true;
		i = q('img.preview-image');
		if(i)
		{
			i.src = i.src.replace(/(size_mode)=\d+/, '$1=5');
		}
		break;
	case "img.3ezy.net":
	case "image-bugs.com":
	case "imgclover.com":
	case "demo.chevereto.com":
	case "daily-img.com":
	case "celebimg.com":
	case "sfwimg.com":
	case "img3x.com":
	case "imgskull.xyz":
	case "imgskull.com":
	case "2i.sk":
	case "2i.cz":
	case "deffe.com":
	case "imagik.fr":
	case "gallerycloud.net":
	case "tryimg.com":
	case "fsfiles.org":
	case "picpicture.com":
	case "picpie.org":
	case "lostpic.net":
	case "batpic.com":
	case "gyazo.com":
		//chevereto 3.x
		i = document.head.querySelector('link[rel="image_src"]');
		if(i)
		{
			i.src = i.href;
			i.src = i.src.replace('_800.', '.'); //img.3ezy.net
		}
		break;
	case "imagebam.com":
		i = q("#continue a");
		if(i)
		{
			let expires = '';
			let date = new Date();
			date.setTime(date.getTime() + (6 * 60 * 60 * 1000));
			expires = "; expires=" + date.toUTCString();
			document.cookie = "nsfw_inter=1" + expires + "; path=/"; // for chrome
			document.cookie = "sfw_inter=1" + expires + "; path=/";
			i.click();
			break
		}
		i = q("img.main-image");
		break;
	case "directupload.net":
	case "bilderhoster.net":
	case "noelshack.com":
	case "kephost.com":
	case "i.ruspotting.net":
	case "gifyu.com":
	case "sharepic.org":
	case "zuly.de":
	case "upload.vstanced.com":
	case "thro.bz":
	case "qoou.net":
	case "brightpic.tk":
	case "cweb-pix.com":
	case "hosting.webspell.fr":
	case "i-pict.ru":
	case "images.woh.to":
	case "imghaze.com":
	case "imgup.nl":
	case "nium.co":
	case "pix.hostux.net":
	case "pixoload.de":
	case "primeimg.co":
	case "pic.xtream-reallife.de":
	case "ultraimg.com":
	case "safeimage.biz":
	case "imgextra.uk":
	case "ss.movierls.net":
	case "xxximagetpb.org":
	case "pix.ac":
	case "sparrowpics.com":
	case "prnt.sc":
	case "imgmax.com":
	case "extraimago.com":
	case "extraimage.net":
	case "imgcloud.pw":
	case "z4a.net":
	case "jiopic.com":
	case "wwv.imgcredit.xyz":
	case "moreimage.pw":
	case "lookimg.com":
	case "subefotos.com":
	case "imgcredit.xyz":
	case "rintor.space":
	case "imgbb.com":
	case "servimg.com":
	case "picmoney.org":
	case "skrinshoter.ru":
	case "imgmak.com":
	case "picklik.ru":
	case "jpg.church":
	case "imghub.ru":
	case "radikal.host":
	case "imgsh.net":
	case "pixl.li":
	case "skr.sh":
	case "jpg.pet":
	case "jpeg.pet":
	case "im.ge":
	case "screencast.com":
	case "picshare.ru":
	case 'img.trafficimage.club':
	case 'pig69.com':
	case 'javball.com':
	case 'idol69.net':
	case 'porn4f.com':
	case 'ovabee.com':
	case 'ai18.pics':
	case "paste.pics":
	case 'cnxx.me':
	case 'cnpics.org':
	case 'cosplay18.pics':
	case 'mjj.today':
	case "imgfoto.host":
	case "picabox.ru":
	case "snipboard.io":
	case "seaart.ai":
	case "freeimage.host":
	case "clip2net.com":
	case "4fuk.me":
	case "555fap.com":
	case "kin8-av.com":
	case "javsunday.com":
	case "hentaipig.com":
	case "hentaicovid.com":
	case "fikfok.net":
	case "image.javbee.me":
	case "radikal.cloud":
	case "hamster.is":
	case "coomimgs.net":
	case "ltdfoto.ru":
	case "vgy.me":
	case "hamsterimg.net":
		i = document.querySelector('meta[property="og:image"], [name="og:image"]');
		if(i)
		{
			i.src = i.content;
		}
		else
		{
			i = q('a[download]');
			if(i){i.src = i.href;}
		}
		break;
	case "vsco.co":
		i = document.querySelector('meta[property="og:image"]');
		if(i)
		{
			i.src = i.content.substring(0, i.content.indexOf("?"));
		}
		break;
	case "civitai.com":
		j = true;
		i = document.querySelector('meta[property="og:image"], [name="og:image"]');
		if(i)
		{
			i.src = i.content.replace("width=1200","width=3840"); // 4k
		}
		break;
	case "tensor.art":
		j = true;
		i = document.querySelector('meta[property="og:image"], [name="og:image"]');
		if(i)
		{
			i.src = i.content.replace("w=600","w=3840"); // 4k (if available)
		}
		break;
	case "pixeldrain.com":
		j = true;
		i = document.head.querySelector('meta[property="og:image:secure_url"]');
		if(i)
		{
			i.src = i.content;
		}
		break;
	case "mobile.x.com":
	case "x.com":
		j = true;
		unsafeWindow.history.replaceState = unsafeWindow.console.log;
		i = q('a[href*="'+window.location.href.match("status\/([^\/]+)")[1]+'/photo/' + Number(window.location.href.at(-1)) + '"] img');
		if(i)
		{
			i.src = i.src.substring(0, i.src.indexOf("&name=")) + '&name=orig';
			filename = "by " + document.head.querySelector('meta[property="og:title"]').content;
			filename_ext = i.src.substring(i.src.indexOf("format=")+7 ,i.src.indexOf("&"));
		}
		break;
	case "m.imgur.com":
		j = true;
		i = q('img.Image');
		break;
	case "imgur.com":
		j = true;
		f = document.querySelectorAll(".image-placeholder,.post-image-placeholder,.image.post-image > img"); // for beta and non-beta
		if(f.length)
		{
			if(f.length != 1)
			{
				is_gallery = true;
			}
			else
			{
				i = f[0];
				let fi;
				if((fi = i.src.indexOf("_d.webp")) != -1)
				{
					i.src = i.src.substr(0, fi) + ".jpg"; // png files will be named jpg too here
					console.log("Handy Image: imgur replaced a LQ preview image with original one");
				}
			}
		}
		break;
	case "ameblo.jp":
		j = true;
		i = q('img#imgItem');
		break;
	case "getapic.me":
		i = q('small > a');
		i.src = i.href;
		break;
	case "instagram.com":
		j = true;
		// find_text_in_scripts('"url":"', '"', false, '"image_versions2"')
		if(q('canvas')) // comments' avatar
		{
			f = document.querySelectorAll("div[role=button] > div > div img");
			if(f.length === 1)
			{
				i = f[0];
				filename = "by " + document.querySelector('meta[property="og:title"]').content;
			}
			else
			{
				is_gallery = true;
			}
		}
		break;
	case "flickr.com":
	case "secure.flickr.com":
		find_text_in_scripts('"descendingSizes":[{"displayUrl":"', '"', false, '');
		break;
	case "artstation.com":
		j = true;
		f = document.querySelectorAll('a[href*="&dl="]')
		if(f.length === 1)
		{
			i = f[0];
			i.src = i.href;
		}
		break;
	case "redgifs.com":
		if(!j) // once
		{
			console.debug("HJI: setting up wrapper_JSON_parse");
			let wrapper_JSON_parse = function (json, ...args)
			{
				if (typeof json === 'string' && json.includes('"gif":') && document.head && !document.head.querySelector('link[rel="handy_image"]'))
				{
					const parsed = wrapper_JSON_parse.originalF(json, ...args);
					let link = protected_createElement('link');
					link.rel = 'handy_image';
					link.href = parsed.gif.urls.hd || parsed.gif.urls.sd;
					document.head.appendChild(link);
					console.debug("found redgifs url: " + link.href);
					console.debug(parsed.gif.urls);
					filename = "by " + parsed.gif.userName + " - " + parsed.gif.niches.join(" ") + " - " + parsed.gif.tags.join(" ");
					unsafeWindow.JSON.parse = wrapper_JSON_parse.originalF; // doesn't work for some reason
					return parsed;
				}
				return wrapper_JSON_parse.originalF(json, ...args);
			}
			if(FireFox && typeof exportFunction === "function")
			{
				wrapper_JSON_parse = exportFunction(wrapper_JSON_parse, unsafeWindow); // TM magic
			}
			wrapper_JSON_parse.originalF = unsafeWindow.JSON.parse;
			unsafeWindow.JSON.parse = wrapper_JSON_parse;
		}
		else if(document.head)
		{
			i = document.head.querySelector('link[rel="handy_image"]');
			if(i) i.src = i.href;
		}
		j = true;
		break;
	case "piczel.tv":
		j = true;
		f = document.querySelector("a.GalleryImage_SingleTag");
		if(f)
		{
			i = q('a[href*="/gallery_image/"]');
			if(i)
			{
				if(i.parentNode.previousSibling === null)
				{
					filename = f.parentNode.textContent.substring(1);
					i.src = i.href;
				}
				else
				{
					is_gallery = true;
				}
			}
		}
		break;
	case "pixiv.net":
		j = true;
		i = document.head.querySelector('meta[name="preload-data"]');
		if (i) // this still works for when you are not logged in
		{
			let a = JSON.parse(i.getAttribute('content')).illust;
			let b = a[Object.keys(a)[0]];
			if(b.pageCount !== 1)
			{
				console.warn("Manga page with multiple images, no action taken further");
				return;
			}
			else if(b.illustType == 2)
			{
				console.warn("Animated ugoira image found, no action taken further");
				return;
			}
			i.src = b.urls.original;
			filename = b.title + " by " + b.userName;
			b.tags.tags.forEach(el => filename = filename + " " + el.tag);
		}
		else if ((i = q('a[href*="/img-original/"]')))
		{
			if (q('[aria-label="Preview"]')) // is a manga with multiple pages
			{
				console.warn("Manga page with multiple images, no action taken further");
				return;
			}
			else
			{
				i.src = i.href;
				let k = document.head.querySelector('meta[property="twitter:description"]');
				if(k) { filename = k.content; }
			}
		}
		else if(q('canvas')) // animation ugoira
		{
			console.warn("Animated ugoira image found, no action taken further");
			return;
		}
		break;
	case "idol.sankakucomplex.com":
	case "chan.sankakucomplex.com":
		i = q('a[itemprop="contentUrl"]');
		if(i)
		{
			use_booru_tags_in_dl_filename();
			i.src = i.href;
			referrer_policy = "no-referrer";
		}
		break;
	case "bcy.net":
		f = document.querySelectorAll("img.detail_clickable");
		if(f.length == 1)
		{
			i = f[0];
			i.src = f[0].src.replace('/w650', '');
		}
		break;
	case "imageshack.com":
		i = q('input[value*="' + iurl + '/f/"]');
		if(i){window.location.href = i.value.replace('/f/', '/i/');}
		i = q('img[data-width]');
		break;
	case "22pixx.xyz":
	case "trueimg.xyz":
		f = window.location.href.match(/[a-z]+-([a-z].+(?:\.jpe?g|png|gif|webp))/i);
		if(f)
		{
			i = {src : window.location.origin + "/" + f[1]};
		}
		break;
	case "h4z.it":
		i = document.images[2];
		if(i){i.src = i.parentNode.href;}
		break;
	case "thumbsnap.com":
		i = q('img#thepic');
		if(i && i.parentNode.href){i.src = i.src.replace('/s/', '/i/');}
		break;
	case "imgbox.com":
	case "imageupper.com":
	case "hotflick.net":
	case "upix.me":
		i = q('img#img');
		if(!i && window.location.hash) // upix.me
		{
			i = q('a');
			i.src = window.location.href.replace("#","");
		}
		break;
	case "imagesnake.com":
	case "imagesnake.org":
	case "freebunker.com":
	case "imagefruit.com":
	case "imagestime.com":
	case "imgcarry.com":
	case "pornbus.org":
	case "fotoo.pl":
	case "hostpix.de":
	case "uploadking.biz":
	case "foto.xhost.lv":
	case "onimage.net":
	case "storepic.com":
	case "hostarea.de":
	case "imgshots.com":
		i = q('img#img_obj');
		break;
	case "abload.de":
		i = document.body.querySelectorAll('img#image');
		if(i)
		{
			i = i[i.length-1];
		}
		break;
	case "imagecrest.com":
	case "imagepearl.com":
	case "imageup.ru":
		i = q('#verify2');
		if(i)
		{
			let w = screen.width;
			let h = screen.height;
			let u = q('#i').value;
			let r = q('#r').value;
			let xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (xhttp.readyState == 4 && xhttp.status == 200) {
						location.reload();
					}
				};
			xhttp.open("GET", "verify.php?w=" + w + "&h=" + h + "&i=" + u + "&r=" + r + "", false);
			xhttp.send();
			break;
		}
		i = q('img#image');
		break;
	case "fastpic.ru":
	case "fastpic.org":
	case "slowpic.xyz":
		i = q('img[src*="/big/"]');
		break;
	case "bayimg.com":
		i = q('img#mainImage');
		break;
	case "imageban.ru":
	case "imageban.net":
		i = q('img[src*="' + iurl + '/out/"]');
		break;
	case "xup.in":
		i = q('img[src*="/exec/"]');
		break;
	case "jpegbay.com":
		i = q('a[class]');
		if(i){i.src = i.href;}
		break;
	case "keep4u.ru":
		i = q('img[src*="/b/"]');
		break;
	case "euro-pic.eu":
	case "picfox.org":
	case "freeimage.us":
	case "xxx.freeimage.us":
	case "pixsor.com":
	case "img.pereslavl.ru":
	case "rupict.ru":
	case "host99.byethost4.com":
	case "eazypics.net":
	case "xtupload.com":
	case "t.williamgates.net":
	case "imgurx.net":
		//i = q('img#iimg');
		if(!find_text_in_scripts("<img src='", "'"))
		{
			i = q('a[download]');	// imgz.pw
			if(i){i.src = i.href;}
		}
		break;
	case "amateri.cz":
		if(find_text_in_scripts('var orig_url="', '"'))
		{
			i.src = i.src.replace('http://www.amateri.cz/orig.php?&img=', 'http://img2.amateri.cz/users/');
		}
		break;
	case "imgtgd.shop":
		j = true;
	case "pixlev.store":
	case "pixmax.store":
	case "imgair.net":
	case "imgxqy.online":
	case "imgnmh.cfd":
	case "imgpukxxr.site":
	case "picngt.shop":
	case "imgouhmde.sbs":
		find_text_in_scripts('.src = "', '"');
		break;
	case "pix-x.net":
	case "picclock.ru":
	case "imgcach.ru":
	case "picpic.online":
	case "drlink.online":
		i = q('img[onclick*="mshow"]');
		if(i){i.src = i.src.replace('-thumb', '');i.src = i.src.replace('img_thumb', 'img_full');}
		break;
	case "pics-money.ru":
		i = q('img[src*="/full/"]');if(i){break;}
	case "pic5you.ru":
	case "pic4you.ru":
	case "picforall.ru":
	case "adult-images.ru":
	case "picage.ru":
	case "images-host.biz":
	case "pic-mir.ru":
	case "payforpic.ru":
	case "freshpics.ru":
	case "imgbase.online":
	case "picpays.ru":
	case "piccash.net":
	case "imgbase.ru":
		i = q('img[src*="thumb"]');
		if(i){i.src = i.src.replace('-thumb', '');i.src = i.src.replace('img_thumb', 'img_full');i.src = i.src.replace('_thumb', '');}
		break;
	case "tinypic.com":
		i = q('img#imgElement');
		break;
	case "picshot.pl":
		i = q('img[src*="' + iurl + '/p"]');
		if(i){i.src = i.src.replace('thumb', 'file');}
		break;
	case "sharenxs.com":
		i = q('img.view_photo');
		if(i){i.src = i.src.replace('/thumbnails/', '/images/');
		i.src = i.src.replace('/tn-', '/');
		i.src = i.src.replace('/mid/', '/wz/');
		f = q('div.alert.alert-info.nomargin.photo_name span');
		if(f)
		{
			let url = i.src;
			i.src = url.substring(0,url.lastIndexOf('/')+1) + f.textContent + url.substring(url.lastIndexOf('.'));
		}}
		break;
	case "gettyimages.com":
		j = true;
		find_text_in_scripts('"largeMainImageURL":"', '"') || find_text_in_scripts('"filmCompUrl":"', '"',null,null,"video");
		break;
	case "radikal.ru":
	case "radical-foto.ru":
	case "radikal-foto.ru":
	case "f-page.ru":
	case "f-lite.ru":
	case "f-picture.net":
		find_text_in_scripts('"Url":"', '"');
		break;
	case "jerking.empornium.ph":
		find_text_in_scripts('	url: "', '"', true);
		break;
	case "jpg5.su":
	case "jpg6.su":
	case "jpg7.cr":
		j = true;
		i = q('a[download][href*=\\/]');
		if(i) i.src = i.href;
		break;
	case "bilder-space.de":
	case "imagesup.de":
		i = q('img.picture');
		break;
	case "pix.toile-libre.org":
	case "photo-host.org":
	case "myxpic.com":
	case "picness.com":
		i = q('a[href*="original"]');
		if(i){i.src = i.href;}
		break;
	case "pimpandhost.com":
		i = q('div.main-image-wrapper');
		if(i){i.src = i.dataset.src;}
		break;
	case "postlmg.cc":
		i = q('img#main-image');
		break;
	case "sexybabepics.net":
	case "keepimg.com":
	case "ibb.co":
		i = document.head?.querySelector('meta[property="og:image"]');
		if(i){i.src = i.content; break;}
	case "pasteboard.co":
		i = document.head?.querySelector('meta[name="twitter:image"]');
		if(i){i.src = i.content; break;}
	case "picsee.net":
		i = q('a[href*="/upload"]');
		if(i){i.src = i.href;}
		break;
	case "imagevenue.com":
		i = q('img#main-image');
		break;
	case "slushe.com":
		j = true;
		if(q('footer')){ i = q('img.big-photo'); }
		if(i){use_booru_tags_in_dl_filename(); }
		break;
	case "hentai-foundry.com":
		j = true;
		i = q('.boxbody img');
		if(i && i.onclick)
		{
			i.click();
		}
		break;
	case "realbooru.com":
		i = q('img#image');
		if(!i)
		{
			i = q('video#gelcomVideoPlayer');
			if(i && i.currentSrc){i.src = i.currentSrc;}
		}
		if(i){use_booru_tags_in_dl_filename(); }
		break;
	case "rule34.xxx":
		sessionStorage.setItem("lastRefresh", Date.now()); // fix to keep 'R' hotkey working
	case "rule34.us":
		j = true;
		i = q('a[href*="/images/"][href*="' + host + '/"]');
		if(i){use_booru_tags_in_dl_filename(); i.src = i.href;}
		break;
	// case "rule34.paheal.net":
	// 	j = true;
	// 	bUseCustomFilename = false; // broken currently, again
	// 	i = q('#main_image');
	// 	if(i && i.currentSrc){i.src = i.currentSrc;}
	// 	break;
	case "rule34hentai.net":
	case "danbooru.donmai.us":
	case "weasyl.com":
		i = q('a[download]');
		if(i){use_booru_tags_in_dl_filename(); i.src = i.href;}
		break;
	case "e621.net":
		j = true;
		i = q('.ptbr-fullscreen a[href*="static1.e621.net/data/"]');
		if(i){use_booru_tags_in_dl_filename(); i.src = i.href;}
		break;
	case "gelbooru.com":
	case "youhate.us":
	case "safebooru.org":
	case "hypnohub.net":
		j = true;
		i = q('a[href*="/images/"][style]');
		if(i){use_booru_tags_in_dl_filename(); i.src = i.href;}
		break;
	case "deviantart.com":
		j = true;
		if(q('div[role="complementary"]')) // page loaded enough
		{
			i = q('a[download]');
			if(i && i.href.indexOf("deviantart.com/users/outgoing?") == -1){i.src = i.href;console.log("found download link");}
			else
			{
				if(parseInt(window.location.pathname.substring(window.location.pathname.lastIndexOf("-")+1)) <= 790677560) // max resolution hax (available only for old images - sadly)
				{
					i = document.head.querySelector('link[rel="preload"][as="image"]');
					if(i)
					{
						i = q('img[src="' + i.href + '"]'); // need to check its cursor now
						if(i)
						{
							if(getComputedStyle(i).cursor === "zoom-in")
							{
								f = i.src.search(/\/f\/[^\/]+\/[^\/]+/); // no idea what this code was for
								if(f !== -1)
								{
									i.src = i.src.substring(0,f+i.src.match(/\/f\/[^\/]+\/[^\/]+/)[0].length);
								}
								//
								i.src = i.src.replace('/f/', '/intermediary/f/');
								console.log("hacked image resolution to maximum");
							}
							else
							{
								console.log("found very old and small image - no higher resolution to look for")
							}
						}
					}
				}
				else
				{
					i = q('div[role="dialog"] div img'); // zoomed in
					if(i)
					{
						console.log("found zoomed-in image");
						f = i.src.match(/,q_\d\d,/);
						if(f !== null)
						{
							i.src = i.src.replace(f[0], ',q_100,'); // max quality hax
							console.log("hacked image quality to maximum (but not resolution)");
						}
						break;
					}
					i = q('div[data-hook="art_stage"] div div div img'); // not zoomed in yet
					if(i){console.log("found un-zoomed image, clicked it");i.click();i=null;break;}
				}
			}
			if(i)
			{
				filename = document.title.replace(" on DeviantArt","");
			}
		}
		break;
	case "furaffinity.net":
		j = true;
		i = q('div.download a');
		if(i){i.src = i.href; filename = document.title;}
		break;
	case "pixai.art":
		j = true;
		i = q('.object-contain');
		if(!filename)
		{
			filename = document.title;
			filename_ext = document.URL.indexOf("video") != -1 ? "mp4" : "webp";
		}
		break;
	case "imagehost.eu":
		i = q('a#image');
		if(i){i.src = i.href;}
		break;
	case "imgplus.info":
		i = q('img[src*="full"]');
		break;
	case "zerochan.net":
		i = q('a[href*="full"]');
		if(i){i.src = i.href;}
		break;
	case "wstaw.org":
		i = q('a[href*="/m/"]');
		if(i){i.src = i.href;}
		break;
	case "imageshost.ru":
	case "lostpix.com":
		i = q('a[href*="/img/"]');
		if(i){i.src = i.href;}
		break;
	case "uploadimage.ro":
		i = q('img[src*="img.php"]');
		break;
	case "imageno.com":
		i = q('img[src*="image.php"]');
		break;
	case "loadpix.de":
		i = q('img[src*="bild.php"]');
		break;
	case "bildr.no":
		i = q('img[src*="image"]');
		break;
	case "iv.pl":
	case "funextra.hostzi.com":
	case "freakimage.com":
	case "imageurlhost.com":
	case "superkipje.com":
	case "ximg.co.uk":
	case "sl-images.ath.cx":
	case "hosting-zdjec.pl":
	case "upislam.com":
	case "add-screen.com":
	case "my-collection.ru":
	case "img.schattorie.nl":
	case "forexrainbow.com":
	case "imgupload.pl":
	case "addpix.net":
	case "myuploadedimages.com":
	case "multihoster.saxonia-fighter.de":
	case "imgdone.com":
	case "greenpiccs.com":
	case "balkanelite.org":
	case "qrrro.com":
	case "vipix.pw":
	case "imagecurl.com":
	case "imagecurl.org":
	case "imagescanner.cc":
		i = q('a[href*="images/"]');
		if(i){i.src = i.href;}
		break;
	case "fotoshack.us":
		i = q('img[src*="/fotos/"]');
		break;
	case "subefotos.com":
		j = true;
		i = q('img[src*="fotos.' + iurl + '"]');
		break;
	case "pictureshoster.com":
	case "zaslike.com":
	case "dwimg.com":
	case "uploadagent.de":
		i = q('a[href*="files/"]');
		if(i){i.src = i.href;}
		break;
	case "photosex.biz":
		i = q('img[src*="/pic"]');
		break;
	case "pronpic.org":
		i = q('img#small_img[src*="/pic/"]');
		if(i){i.src = i.src.replace('th_', '');}
		break;
	case "imadul.com":
		i = q('div.img_box a');
		if(i){i.src = i.href;}
		break;
	case "imgmega.com":
	case "pic.re":
	case "picbaron.com":
	case "imgbaron.com":
	case "kvador.com":
	case "pics4you.net":
	case "pics4you.org":
		i = q('input[type="submit"]');
		dp=true;
		if(i)
		{
			i.click();
			break;
		}
	case "screenlist.ru":
	case "picshare.geenza.com":
	case "mojoimage.com":
	case "imagecherry.com":
	case "10.imageleon.com":
	case "img4.imagetitan.com":
	case "ninjaimages.com":
	case "3xplanet.com":
	case "3xplanet.net":
		i = q('img[onload*="scale"]');
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
	case "hotchyx.com":
	case "imagehousing.com":
	case "cubeupload.com":
	case "dumparump.com":
	case "uploads.ru":
	case "myimg.de":
	case "root-space.eu":
	case "mepic.ru":
	case "postto.me":
	case "iimg.su":
		i = q('img[src*="' + iurl + '"]');
		break;
	case "ask.fm":
		i = q('img[src*="' + iurl + '"][id]');
		i.src = i.src.replace('/original/', '/large/'); //ask.fm
		break;
	case "photo.weibo.com":
		i = q('img[src*="/large/"]');
		break;
	case "picfront.org":
		j = true;
		i = q('img[src*="' + iurl + '"][title]');
		break;
	case "platimzafoto.ru":
	case "pic-money.ru":
	case "imgmoney.ru":
	case "img24.org":
	case "svetmonet.ru":
	case "pic4share.ru":
	case "pic-images.ru":
	case "imgspic.ru":
	case "picpower.ru":
	case "piccloud.ru":
	case "pixxsees.ru":
	case "2picsun.ru":
	case "img-pika.ru":
	case "wwxxww.ru":
	case "pic3you.org":
	case "shaggyimg.pro":
	case "imgsmarts.info":
	case "dailyimages.xyz":
	case "imgazure.com":
		f = document.getElementsByTagName("button");
		if(f.length)
		{
			f[f.length-1].click();
		}
		dp=true;
		i = q('img[src*="/pic.jpeg"]');
		break;
	case "imagerar.com":
		if(window.location.href.indexOf("img-") != -1)
		{
			window.location.href = window.location.href.replace("img-","img2-");
			break;
		}
	case "imgprime.com":
		if(window.location.href.indexOf("img-") != -1)
		{
			window.location.href = window.location.href.replace("img-","img3-");
			break;
		}
		else if (window.location.href.indexOf("/imga-u/") != -1)
		{
			window.location.href = window.location.href.replace("/imga-u/","/imgb-u/");
			break;
		}
		else if(window.location.href.indexOf("/imgb-u/") != -1)
		{
			i = q('img[src*="/u/b/"]');
			break;
		}
	case "freeimagehosting.net":
	case "uploadhouse.com":
	case "fotos-hochladen.net":
	case "imgtab.net":
		i = q('img[src*="uploads/"]');
		break;
	case "xtremeshack.com":
		i = q('img[src*="/photos/"]');
		break;
	case "500px.com":
		j = true;
		i = q('#copyrightTooltipContainer img');
		if (i) {
			var m = i.src.match('/photo/(\\d+)/');
			if (m) {
				var xhttp = new XMLHttpRequest();
				xhttp.open('GET', 'https://api.500px.com/v1/photos?ids=' + m[1] + '&image_size=4096');
				xhttp.onload = function() {
					if (xhttp.status == 200) {
						try {
						i.src = JSON.parse(xhttp.response)['photos'][m[1]]['images'][0]['url'];
							console.log("hacked image resolution to maximum");
						} catch (e) {console.warn(e);}
					}
				}
				xhttp.send();
			}
		}
		break;
	case "picturepush.com":
		i = q('img[src*="/photo/"]');
		break;
	case "keptarolo.hu":
		i = q('img[src*="/kep/"]');
		break;
	case "truepic.org":
		i = q('img[src*="/u/"]');
		break;
	case "imagearn.com":
		i = q('img[src*="/imags/"]');
		break;
	case "ichan.org":
		i = q('img[src*="/src/"]');
		break;
	case "ibunker.us":
	case "hostingpics.net":
		i = q('img[src*="pics/"]');
		break;
	case "dewimg.com":
	case "subirimagenes.com":
	case "tezzpic.com":
		j = true;
		dp = true;
		f = document.querySelectorAll("input[type='submit']");
		if(f.length)
		{
			let n;
			for(n=f.length-1; n >= 0; n--)
			{
				if(window.getComputedStyle(f[n]).visibility != "hidden" && f[n].offsetWidth != 0 && f[n].value.indexOf("eply") == -1 && f[n].value.indexOf("Log") == -1)
				{
					f[n].removeAttribute("disabled");
					f[n].click();
					i = 1;
					return;
				}
			}
		}
		i = q('img[onload*="scale"]');
		break;
	case "crownimg.com":
		i = q('button');
		dp=true;
		j =true;
		if(i)
		{
			i.click();
			break;
		}
	case "myimg.club":
	case "imgmonkey.com":
	case "imgdragon.com":
	case "imggold.org":
	case "levinpic.org":
	case "imgtown.net":
	case "pixs.cx":
	case "kropic.com":
	case "outletpic.com":
	case "pictwn.com":
	case "meetimgz.com":
		j = true;
		dp=true;
		f = document.querySelectorAll("input[type='submit']");
		if(f.length)
		{
			let n;
			for(n=f.length-1; n >= 0; n--)
			{
				if(window.getComputedStyle(f[n]).visibility != "hidden" && f[n].offsetWidth != 0 && f[n].value.indexOf("eply") == -1 && f[n].value.indexOf("Log") == -1)
				{
					//f[n].removeAttribute("disabled"); ok, let's wait
					f[n].click();
					break;
				}
			}
		}
	case "casimages.com":
	case "thebestpichost.com":
	case "ifotos.pl":
	case "subeimagenes.com":
	case "vvcap.com":
	case "imgtrex.com":
	case "pic-upload.de":
	case "picusha.net":
		i = q('img[src*="/img/"]');
		break;
	case "imagenetz.de":
		i = q('img[src*="/img"]');
		break;
	case "picatom.com":
		i = q('img[src*="img/"]');
		break;
	case "imgking.xyz":
	case "imgazure.com":
		i = q('img[src*="/img/"]');
		if(i){i.src = i.src.replace('p.', '.');}
		break;
	case "imgbabes.com":
	case "imgflare.com":
		i = q('input[type="submit"]');
		dp=true;
		j=true;
		if(i)
		{
			i.click();
			i=null;
		}
		else
		{
			i = q('img[src*="i.php?"]');
		}
		break;
	case "xxxhost.me":
	case "bilder-hochladen.net":
	case "dumpt.com":
	case "imgsin.com":
	case "loaditup.de":
	case "123poze.3x.ro":
	case "thaisharing.online.fr":
	case "filefap.com":
	case "imgswift.com":
	case "1pic.org":
		i = q('img[src*="/files/"]');
		break;
	case "image18.org":
		i = q('img[src*="/file"]');
		break;
	case "picstate.com":
		i = q('#image_container a img');
		break;
	case "zimagez.com":
		i = q('img[src*="/full/"]');
		break;
	case "niceimage.pl":
		i = q('img[src*="/uploaded/"]');
		break;
	case "imagefap.com":
		j = true;
		//find_text_in_scripts('"contentUrl": "', '"');
		i = q('#slideshow img[src*="/full/"],#video-html5_html5_api');
		break;
	case "olivepix.com":
		i = q('img[src*="view/"]');
		break;
	case "imgkings.com":
		i = q('img[src*="uploads/"]');
		if(i)	break;
		if(find_text_in_scripts('linkid="', '"', false))
		{
			window.location.href = i.src;
			break;
		}
		else if(window.location.href.indexOf("imgs") != -1) // not sure if needed anymore
		{
			window.location.href = window.location.href.replace("imgs","imgv");
			break;
		}
		else if(window.location.href.indexOf("img3") != -1) // not sure if needed anymore
		{
			window.location.href = window.location.href.replace("img3","img4");
			break;
		}
		break;
	case "imgadult.com":
		j = true;
		i = q('a.overlay_ad_link');
		if(i)
		{
			i.click();
			break;
		}
	case "imagefolks.com":
	case "imgcandy.net":
	case "imageteam.org":
	case "imgnext.com":
	case "hosturimage.com":
	case "pixup.us":
	case "xximg.net":
	case "x.xximg.net":
	case "sxpics.nl":
	case "sxpix.nl":
	case "img.yt":
	case "xxxscreens.com":
	case "i.sxpics.nl":
	case "imageon.org":
	case "nimplus.com":
	case "imag.nimplus.com":
	case "newimagepost.com":
	case "fapat.me":
	case "imgbe.com":
	case "fireimg.cc":
	case "rapidimg.net":
	case "imgtornado.com":
	case "erimge.com":
	case "loftlm.ru":
	case "tinizo.com":
	case "imgpix.net":
	case "freeimagehostin.com":
	case "sximg.nl":
	case "freephotohostin.com":
	case "imgpics.nl":
	case "imagepics.xyz":
	case "imgwo.com":
	case "ima.gy":
	case "picz.site":
	case "allxpix.com":
	case "imgblank.com":
	case "xeimg.yt":
	case "imgmain.com":
	case "acidimg.cc":
	case "imgpart.com":
	case "picmoza.com":
	case "imgjazz.xyz":
	case "picshost.info":
	case "petrovixxxjav.com":
	case "placeimg.net":
	case "imageshtorm.com":
	case "blameless.work":
	case "xxx.kodiak.top":
	case "xaoutchouc.live":
	case "mshelxxx.ru.com":
	case "trans.firm.in":
	case "xxxwebdlxxx.top":
	case "imgdawgknuttz.com":
	case "olarixas.xyz":
	case "pornhd720p.com":
		dp=true;
		f = document.getElementsByTagName("input");
		if(f.length)
		{
			f[f.length-1].removeAttribute("disabled");
			f[f.length-1].click();
		}
	case "fotoszok.pl":
	case "damimage.com":
	case "adultur.com":
	case "imagedecode.com":
	case "gogoimage.org":
	case "imageblinks.com":
	case "imglooks.com":
	case "ocaload.com":
	case "imgstudio.org":
	case "goimge.com":
	case "imageho.me":
	case "imgor.net":
	case "icezap.com":
	case "imgtrial.com":
	case "dimtus.com":
	case "imgcat.pw":
	case "imgseed.com":
	case "imgcredit.xyz":
	case "pic.hotimg.site":
	case "xfap.fun":
	case "xxxwebdlxxx.org":
		i = q('img[src*="' + iurl + '/upload/"]');
		break;
	case "imgboom.net":
		if(window.location.href.indexOf("img-") != -1)
		{
			window.location.href = "http://imgboom.net/view.php";
			break;
		}
	case "thumbnailus.com":
	case "imgleveret.com":
	case "porn84.org":
		i = q('input[type="submit"]');
		dp=true;
		if(i)
		{
			i.click();
			break;
		}
		i = q('img[src*="' + iurl + '/upload/"].centred');
		break;
	case "imgking.co":
		if(window.location.href.indexOf("img-") != -1)
		{
			window.location.href = window.location.href.replace("img-","img2-");
			break;
		}
		i = q('img[src*="' + iurl + '/upload/"]');
		break;
	case "imgsky.net":
	case "imgsee.net":
	case "imgzong.xyz":
	case "imageking.xyz":
	case "imgxx.xyz":
	case "imgao.xyz":
	case "imgweng.xyz":
	case "imgkes.xyz":
	case "imgkoi.xyz":
	case "imglin.xyz":
	case "imgkr.xyz":
	case "imgbird.xyz":
	case "imgwewo.xyz":
	case "imgirx.xyz":
	case "imgalor.xyz":
	case "imgjut.buzz":
	case "imgtrw.buzz":
	case "imglina.xyz":
	case "imgkuiw.xyz":
	case "imgwang.buzz":
	case "imgmeno.buzz":
	case "imgpekele.buzz":
	case "imglqw.buzz":
	case "imgyng.buzz":
	case "imgbbd.buzz":
	case "imgwia.buzz":
	case "imgowk.buzz":
	case "imgokr.buzz":
	case "imgoiu.buzz":
	case "imgeza.buzz":
	case "mrlzqoe.buzz":
	case "imgutkr.store":
	case "imghhr.online":
	case "imglaiw.store":
	case "imgvue.online":
	case "imgxgf.store":
	case "imgbibam.online":
	case "imgqaz.online":
	case "imgurt.online":
	case "imgwxr.online":
	case "imgyre.online":
	case "picqaxs.cfd":
	case "picvvvd.sbs":
	case "imgjjtr.sbs":
		i = q('button');
		dp=true;
		j = true;
		if(i)
		{
			i.click();
		}
		i = q('.big_img_box img[src*="http"]');
		break;
	case "picspornfree.me":
	case "hotimage.uk":
	case "xxxwebdlxxx.org":
	case "hdmoza.com":
		i = q('input[type="submit"]');
		dp=true;
		if(i)
		{
			i.click();
			break;
		}
	case "avenuexxx.com":
	case "uploadimagex.com":
	case "hostingkartinok.com":
	case "bellazon":
	case "savepice.ru":
		i = q('img[src*="/upload"]');
		break;
	case "imgseeds.com":
		i = q('input');
		if(i)
		{
			i.click();
			break;
		}
	case "imghit.com":
		i = q('img[alt="image"]');
		break;
	case "image-share.com":
		i = q('img[src*="upload/"]');
		break;
	case "bilder-upload.eu":
		i = q('input[src*="upload/"]');
		break;
	case "picload.org":
	case "imagecross.com":
	case "npicture.net":
	case "public-pic.de":
	case "picbug.ru":
		i = q('img[src*="' + iurl + '/image"]');
		break;
	case "yande.re":
	case "konachan.com":
	case "konachan.net":
		i = q('a[href*="' + iurl + '/image"]');
		if(i){i.src = i.href;}
		break;
	case "imagesup.net":
		i = q('a[href*="/di-"]');
		if(i)
		{
			i.src = i.href;
		}
		break;
	case "cyberpics.net":
	case "fastimages.ru":
	case "hot-file.org":
	case "image.siroro.co.uk":
	case "qattach.com":
	case "fotohelp.kz":
	case "pic-you.com":
		i = q('a[href*="/di/"]');
		if(i)
		{
			i.src = i.href;
		}
		break;
	case "imagehost.thasnasty.com":
	case "oxily.com":
	case "ghanaimages.co":
	case "knecht.novarata.net":
	case "img.irandeliver.com":
	case "xferz.com":
	case "up.kfesfahan.com":
	case "upload.khontai.com":
	case "image.pantyhosemania.info":
	case "t.hogor.net":
	case "your-pictures.net":
		i = q('a[href*="?di="]');
		if(i)
		{
			i.src = i.href;
		}
		break;
	case "pixxxels.org":
	case "postimg.org":
	case "postimg.cc":
	case "pixxxels.cc":
		j = true;
		i = q('a[href*="?dl="]');
		if(i)
		{
			i.src = i.href;
		}
		break;
	case "zimage.fr":
		i = q('img[src*="images.php"]');
		if(i)
		{
			i.src = i.src.replace('.php?nom=', '/');
			break;
		}
	case "dumppix.com":
		i = q('a[href*="enter"]');
		if(i)
		{
			window.location.href = i.href;
			break;
		}
	case "mrjh.org":
	case "stuffed.ru":
	case "rapid-img.de":
	case "ngarko.online.fr":
	case "freeuploadimages.org":
	case "picszone.net":
	case "images.share-films.net":
	case "bildjunkies.de":
	case "foto.hcfor.pl":
	case "pic.tooptarinha.com":
	case "poopr.org":
	case "xp-images.hi2.ro":
	case "dayzeddesigns.com":
	case "freeimghosting.co.uk":
	case "upload.removed.us":
	case "imghost.pl":
	case "udostepniaj.pl":
	case "ngarko.free.fr":
	case "images.collectiontricks.it":
	case "244pix.com":
	case "imgboxxx.com":
	case "imghere.net":
	case "imgdope.com":
	case "hostmat.eu":
	case "imgdream.net":
	case "imgcentral.com":
		i = q('img[src*="images/"]');
		break;
	case "use.com":
		i = q('img[src*="images/"][onload]');
		if(i){i.src = i.src.replace('/s_2/', '/s_5/');}
		break;
	case "1y9y.com":
	case "host4images.com":
	case "aveimage.com":
		i = q('img#photo');
		break;
	case "freeimgup.com":
	case "picturevip.com":
	case "image-load.net":
	case "upload.djmaster.fr":
	case "b4he.com":
	case "firepic.org":
	case "overdream.cz":
	case "fastpics.net":
	case "ii4.ru":
	case "picuploader.de":
	case "smages.com":
	case "pictureshack.ru":
	case "imgbox.de":
	case "imagehosting.cz":
	case "9foto.ru":
	case "imagesloading.altervista.org":
	case "phpbbmods.it":
	case "lakhdaria.net":
	case "partizansk.eu":
	case "webjardiner.com":
	case "imgup.com":
	case "iezz.com":
	case "picturescream.com":
	case "all-poster.ru":
	case "extraimage.net":
	case "imagexxx18.com":
	case "imgvisits.com":
	case "imghall.com":
	case "picturedent.org":
		i = q('img[src*="/images/"]');
		break;
	case "intergranada.com":
		i = q('img[src*="/images/images/"]');
		break;
	case "pixelup.net":
		i = q('center img[src*="/images/"]');
		break;
	case "saveimg.ru":
	case "imglink.ru":
	case "4put.ru":
	case "sharepic.biz":
	case "you-logo.ru":
	case "powerlogo.ru":
		i = q('img[src*="pictures/"]');
		break;
	case "xenopix.com":
		i = q('img[src*="/pix/"]');
		break;
	case "chronos.to":
	case "imgmaid.net":
	case "pic-maniac.com":
	case "coreimg.net":
	case "imx.to":
		j = true;
		i = q('input[type="submit"]');
		dp=true;
		if(i)
		{
			i.click();
			break;
		}
	case "imgspice.com":
	case "imagetwist.com":
	case "dev.imagetwist.com":
	case "imagexport.com":
	case "pixroute.com":
	case "pzy.be":
	case "funkyimg.com":
	case "itmages.ru":
	case "imagenpic.com":
	case "turbopix.fr":
	case "pictureturn.com":
	case "pixic.ru":
	case "nyanimg.com":
	case "geekpics.in":
	case "imageporter.com":
	case "imagenimage.com":
	case "imageshimage.com":
	case "imagedax.net":
	case "pornimagex.com":
	case "sendpic.org":
	case "imagehaha.com":
	case "picshick.com":
	case "photo-screen.ru":
		i = q('img[src*="/i/"]');
		break;
	case "imguniversal.com":
	case "imgclick.net": // no submits
	case "imgsto.com":
	case "fappic.com":
	case "imgsen.com":
	case "premalo.com":
	case "picdollar.com":
	case "fotokiz.com":
	case "silverpic.com":
	case "silverpic.net":
	case "pics4upload.com":
	case "imgstar.eu":
		i = q("form input[type='submit'][value*='continue to image' i]");
		dp = true;
		if(i)
		{
			i.click();
		}
		i = q("img.pic[src*='/i/'], img.pic[src*='/img/']");
		break;
	case "scrin.org":
		i = q('a[href*="/i/"]');
		if(i)
		{
			i.src = i.href;
			break;
		}
		i = q('img[src*="/i/"]');
		break;
	case "miragepics.com":
		i = q('input[value*="' + iurl + '/images/"]');
		if(i){i.src = i.value;}
		break;
	case "ipic.su":
		i = q('input[value*="' + iurl + ' img/"]');
		if(i){i.src = i.value;}
		break;
	case "mixbase.net":
		i = q('img[src*="media/storage/"]');
		break;
	case "image2you.ru":
		i = q('img[src*="images/"]');
		if(i){i.src = i.src.replace('2_', '');}
		break;
	case "imgmade.com":
		i = q('form');
		dp=true;
		if(i)
		{
			i.submit();
			break;
		}
	case "imgdrive.net":
	case "imgtaxi.com":
	case "imgwallet.com":
		j = true;
		i = q("a.overlay_ad_link");
		if(i)
		{
			i.click();
			break;
		}
	case "pixhost.to":
	case "imgtiger.com":
	case "imgserve.net":
	case "imgdino.com":
	case "overpic.net":
	case "imagesocket.com":
	case "hostpic.org":
	case "zapodaj.net":
	case "jpegshare.net":
	case "screenshot.ru":
	case "imagefile.org":
	case "zapisz.net":
	case "addyourpics.com":
	case "imgbank.cz":
	case "showmyimage.com":
	case "upload.supreme-elite.fr":
	case "myimg.me":
	case "heberg-hush.org":
	case "oltaciyukle.com":
	case "pichost.name":
	case "imagend.com":
	case "imagerocket.com":
	case "hyyathost.com":
	case "images.reptilescanada.com":
	case "wepic.ru":
	case "upload-image.fr":
	case "images.baconbits.org":
	case "upanh.ovo.vn":
	case "wrzucaj.net":
	case "heberge-images.com":
	case "image.kg":
	case "savemyimage.com":
	case "img.dramacafe.tv":
	case "fapping.empornium.sx":
	case "beeimg.com":
	case "youpicture.org":
	case "vavvi.com":
	case "imgzap.com":
	case "crazyimg.com":
	case "extraimago.com":
	case "ftop.ru":
	case "porncomix.info":
	case "luxpic.ru":
	case "passpix.com":
	case "trumbhost.com":
		//Chevereto 2.x
		i = q('img[src*="' + iurl + '/images/"]');
		break;
	case "shareimages.com":
	case "imagesmax.de":
	case "bilder.nixhelp.de":
		i = q('img[src*="' + iurl + '/images"]');
		break;
	case "imgfantasy.com":
	case "imageporn.eu":
	case "imgsmile.com":
	case "imgsay.com":
	case "0img.net":
	case "imagedisco.net":
		//IMGReserve
		j = true;
		dp=true;
		i = q('input[value="YES"]');
		if(i){i.onclick();break;}
	case "pic-upload.de":
	case "shrani.najdi.si":
	case "imageab.com":
	case "turboimagehost.com":
		i = q('img[onclick*="(this"]');
		break;
	case "joblo.com":
		i = q('img');
		if(i)
		{
			i.src = "http://www.joblo.com/moviehotties/images/profile-gallery/orig" + window.location.href.substr(window.location.href.lastIndexOf("/"));
		}
		break;
	case "img.folluo.me":
	case "sizzlingclicks.com":
	case "imgsha.com":
		i = q('img[data-load="full"]');
		break;
	case "yapx.ru":
		j = true;
		if(q("footer"))
		{
			f = document.body.querySelectorAll("[data-gallery-index]");
			if(f.length === 1)
			{
				//i = f[0];
				i = document.head.querySelector('meta[property="og:image:secure_url"]');
				if(i)
				{
					i.src = i.content;
				}
			}
			else
			{
				is_gallery = true;
			}
		}
		break;
	case "vfl.ru":
		i = q('img[src*="/ii/"]');
		break;
	case "suckmypic.net":
		i = q('#theImage');
		break;
	case "piccy.info":
		i = q('a[href*="/orig/"]');
		if(i){i.click();return;}
		else{i = q('img#mainim');}
		break;
	case "t.me":
	case "telegram.me":
		j = true;
		if(window.self !== window.top)
		{
			console.log("HJI: - stopped cuz running in an embedded frame");
			return;
		}
		if(document.querySelector("body.body_widget_post"))
		{
			f = document.querySelectorAll('.tgme_widget_message_photo_wrap[style*="/file/"], i[style*="/file/"]'); // photos and videos
			if(f.length === 1)
			{
				i = f[0];
				i.src = i.style.backgroundImage.slice(4, -1).replace(/"/g, "");
			}
			else(f.length > 1)
			{
				is_gallery = true;
			}
		}
		break;
	case "comment-cdn.9gag.com":
		i = q('img');
		if(i) {i.src = window.location.hash.substring(1,window.location.hash.length);}
		break;
	case "xhamster.com":
	case "xhamster.desi":
	case "xhamster3.com":
	case "xhamster4.com":
	case "xhamster11.com":
	case "xhamster19.com":
		j = true;
		i = q('div.fotorama__active>img.fotorama__img');
		break;
	case "imgtorrnt.in":
		window.location.replace("https://i.imgur.com/" + window.location.href.substr(window.location.href.lastIndexOf('=') + 1));
	case "trans.firm.in":
		if(window.location.href.search(/\.(?:jpe?g|png|gif|webp)\.html$/i) != -1)//check whether it's a valid image url
		{
			i = { src :  window.location.href.replace(".html", "") };
		}
	case "vipr.im":
		j = true;
		i = q("a.ddownloader[download]");
		if(i)
		{
			i.src = i.href;
			break;
		}
		break;
	default: // dynamic subdomain
		switch(host.substr(host.indexOf(".")+1))
		{
		case "xhamster.com":
		case "xhamster.desi":
		case "xhamster3.com":
		case "xhamster4.com":
		case "xhamster11.com":
		case "xhamster19.com":
			j = true;
			i = q('div.fotorama__active>img.fotorama__img');
			break;
		case "tumblr.com":
		case "media.tumblr.com":
			f = document.head.querySelectorAll('meta[property="og:image"]');
			if(f.length === 1)
			{
				i = document.head.querySelector('meta[property="og:video"]');
				if(!i)
				{
					i = f[0];
					i.src = f[0].content;
				}
				else
				{
					i.src = i.content;
				}
			}
			else if(f.length > 1)
			{
				is_gallery = true;
			}
			else
			{
				i = document.querySelector('div#base-container > div > div > div > div > img');
			}
			break;
		case "wikipedia.org":
		case "wikimedia.org":
			i = q('a[href*="/upload"]');
			if(i){i.src = i.href;}
			break;
		case "imgcredit.xyz":
			i = q('img[src*="/upload/"]');
			break;
		case "photobucket.com":
			find_text_in_scripts('originalUrl":"', '"');
			break;
		case "lostpic.net":
			//chevereto 3.x
			i = document.head.querySelector('link[rel="image_src"]');
			if(i)
			{
				i.src = i.href;
			}
			break;
		case "freeamateurteens.net":
			i = q('img[src*="images/"]');
			break;
		case "otofotki.pl":
			i = q('img[src*="/obrazki/"]');
			break;
		case "tinypic.com":
			i = q('img#imgElement');
			break;
		case "imagilive.com":
			i = q('a.button');
			if(i)
			{
				dp=true;
				i.click();
				break;
			}
			i = q('img[src*="' + iurl + '"]');
			break;
		default: // for user-added sites
			j = true;
			console.warn("HJI is running on a custom website");

			if(document.readyState !== "loading") // DOM loaded
			{
				f = document.querySelectorAll("img,video");
				if(f.length !== 0)
				{
					let biggest = 0;
					let num_of_broken = 0;
					for(let n = 0; n < f.length; n++)
					{
						if(!f[n].naturalWidth) // not yet loaded // && !f[n].complete
						{
							if(f[n].videoHeight) // or is it?
							{
								f[n].naturalWidth = f[n].videoWidth;
								f[n].naturalHeight = f[n].videoHeight;
								if(!f[n].src) f[n].src = f[n].currentSrc;
							}
							else
							{
								if(timeout < 4000)
								{
									console.warn("waiting for this image to start loading to see its size and compare with others: ", f[n].src);
									biggest = -1;
									break;
								}
								else // waited for 3+ sec, that's enough
								{
									console.warn("skipping broken image: " + (f[n].src || f[n]));
									num_of_broken++;
									continue; // skip the broken image
								}
							}
						}
						else if(f[n].naturalWidth * f[n].naturalHeight >= f[biggest].naturalWidth * f[biggest].naturalHeight)
						{
							biggest = n;
						}
					}
					if (num_of_broken > f.length / 2 && timeout < 5000)
					{
						console.warn("too many broken images: " + num_of_broken + " out of " + f.length + ", lets wait a bit more...");
						break
					}
					if(biggest !== -1){i = f[biggest]; console.warn("showing biggest image/video: ", i.src);}
				}
			}
			break;
		}
		break;
	}
	//
	//firefox handmade noscript
	if(!j)
	{
		j = true;
		window.addEventListener('beforescriptexecute', onscript, true); // useless, but let it be
		bStopScripts = true; // actually better than the event above, blocks more stuff for some reason
	}
	//
	if(tb){clearTimeout(tb);}
	if(is_gallery)
	{
		console.log("Handy Image: userscript stopped itself INTENTIONALLY, - cuz it is not just a single image on the page to fullsize but a gallery");
		observer.disconnect();
		return;
	}
	if(i && i.src)
	{
		bStopScripts = true; // in case JS was allowed before
		observer.disconnect();
		function clr_pgn()
		{
			unsafeWindow.open = null;
			unsafeWindow.onload = null;
			unsafeWindow.onbeforeunload = null;
			document.replaceChild(document.importNode(document.implementation.createHTMLDocument("").documentElement, true), document.documentElement);
			unsafeWindow.document.createElement = unsafeWindow.console.debug;
			document.head.innerHTML = '<meta name="referrer" content="'+referrer_policy+'">';
		}
		if (i.nodeName === "VIDEO" || ext_list_video.indexOf(i.src.split('.').pop().split('?')[0].toLowerCase()) >= 0)
		{
			console.log("Found a video");
			is_video = true;
		}
		else if (ext_list_not_image.indexOf(i.src.split('.').pop().split('?')[0].toLowerCase()) >= 0)
		{
			console.warn("What we found is not an image or a video");
			i = null;
			return false;
		}
		ws();
		sanitize();
		clr_pgn();
		window.removeEventListener('beforescriptexecute', onscript, true);
		makeimage();
	}
	else // try again
	{
		//console.warn("Didnt find image, trying again in " + timeout + " ms");
		tb = setTimeout(function() { console.warn("Didnt find image, waited " + timeout + " ms to try again. page: " + window.location.href); tb=0; timeout*=2; i=0; makeworld(); }, timeout);
	}
}

var grab_fav_tags = []; // set in Custom JS
function use_booru_tags_in_dl_filename()
{
	let artist = document.querySelectorAll(".tag-type-artist a:not([href*='/books?'])[href*='tags='],.tag-type-idol a:not([href*='/books?'])[href*='tags='], .artist-tag > a, a.search-tag[itemprop='author'], a.model, .user-info-box .username > a, .tag-artist");
	for(let n = 0; n < artist.length; n++)
	{
		if(artist[n]?.text == "?") continue;
		if(artist[n].dataset?.name) {filename = "by " + decodeURIComponent(artist[n].dataset.name).replaceAll(" ", "_") + " " + filename;}
		else {filename = "by " + artist[n].text.replaceAll(" ", "_") + " " + filename;}
	}

	let character = document.querySelectorAll(".tag-type-character a:not([href*='/books?'])[href*='tags='], .character-tag > a, .character-tag-list a.search-tag, a.character, .tag-character");
	for(let n = 0; n < character.length; n++)
	{
		if(character[n]?.text == "?") continue;
		if(character[n].dataset?.name) {filename = decodeURIComponent(character[n].dataset.name).replaceAll(" ", "_") + " " + filename;}
		else {filename = character[n].text.replaceAll(" ", "_") + " " + filename;}
	}

	/*if(character.length === 0)
	{
		let franchise = document.querySelectorAll(".tag-type-copyright > a, .copyright-tag > a, .copyright-tag-list a.search-tag");
		for(let n = 0; n < franchise.length; n++)
		{
			if(franchise[n].text == "?") continue;
			filename = franchise[n].text.replaceAll(" ", "_") + " " + filename;
			break; // just one cuz else it'd get long
		}
	}*/
	let general_tags = document.querySelectorAll(".tag-link, .tag-type-general a:not([href*='/books?'])[href*='tags='], .tag-type-metadata a:not([href*='/books?'])[href*='tags='], .tag-type-genre > a, .general-tag > a, .general-tag-list > .tag-type-0 > a.search-tag, a.search-tag, div#tagLink > a,.tags-list a, .tag-list-item, a.tag");
	let general_tags_text = [];
	for(let n = 0; n < general_tags.length; n++)
	{
		general_tags_text.push(general_tags[n]?.text || general_tags[n].dataset?.name || "no_tag");
	}

	function process_grabbed_tags()
	{
		if(typeof cfg_js !== "string")
		{
			console.log("waiting for async setting loading of cfg_js: " + (typeof cfg_js));
			if(!loadCfg_callbacks.includes(process_grabbed_tags)){loadCfg_callbacks.push(process_grabbed_tags);}
			return;
		}
		if(cfg_js && cfg_js.indexOf("grab_fav_tags") != -1) {grab_fav_tags = cfg_js.substring(cfg_js.indexOf("[")+1,cfg_js.indexOf("]")).replaceAll(" ", "").replaceAll("_", " ").replaceAll(/\n/g, '').replaceAll(/(?<!\\)'/g, "").replaceAll("\\'","'").replaceAll('"','').toLowerCase().split(",");} // load custom tags // also bypass CSP
		console.debug("your favorite tags: "+ grab_fav_tags);
		if(grab_fav_tags.length)
		{
			for(let n = 0; n < general_tags_text.length; n++)
			{
				if(general_tags_text[n] == "?") continue;
				if(grab_fav_tags.indexOf(general_tags_text[n].toLowerCase().replaceAll("_", " ")) != -1)
				{
					filename = general_tags_text[n].replaceAll(" ", "_") + " " +filename;
				}
			}
		}
		filename = filename.replaceAll("_(", " ("); // but not the space before franchise
	}
	process_grabbed_tags();
}

function onvolumechange()
{
	GM.setValue("vid_volume", (i.muted? "0" : i.volume));
}

function changeCursor()
{
	/*if(i.scrollHeight > iViewHeight) // image pushing out-of-screen browser fix
	{
		i.style.margin = "0px auto";
	}
	else
	{
		i.style.margin = "auto";
	}*/

	if(is_video) return;

	if(rescaled === 0) // original
	{
		if((orgImgWidth == viewWidth && orgImgHeight <= viewHeight) || (orgImgWidth <= viewWidth && orgImgHeight == viewHeight)) // perfect fit on one side, can't resize
		{ // with zoom there might be a 1 pixel difference and it's not a matter of rounding, e.g. image is 501.03 width and the window is 501.55 width so there won't be a perfect fit even tho both the image and your screen (window) are 1920px wide
			i.style.cursor = "";
		}
		else if (orgImgWidth > viewWidth || orgImgHeight > viewHeight)
		{
			i.style.cursor = "zoom-out";
		}
		else
		{
			i.style.cursor = "zoom-in";
		}
	}
	else if(rescaled === 2) // fill
	{
		if(orgImgWidth == viewWidth && orgImgHeight == viewHeight) // perfect fit, can't resize
		{
			i.style.cursor = "";
		}
		else if (orgImgWidth > i.scrollWidth)
		{
			i.style.cursor = "zoom-in";
		}
		else
		{
			i.style.cursor = "zoom-out";
		}
	}
	else // if(rescaled === 1) // fit
	{
		if((orgImgWidth == viewWidth && orgImgHeight <= viewHeight) || (orgImgWidth <= viewWidth && orgImgHeight == viewHeight)) // perfect fit on one side, can't resize
		{
			i.style.cursor = "";
		}
		else if (orgImgWidth > i.scrollWidth)
		{
			i.style.cursor = "zoom-in";
		}
		else
		{
			i.style.cursor = "zoom-out";
		}
	}
}

function mousedown(event) // chrome scroll-wheel
{
	if(event.which === 2) // middle mouse
	{
		event.preventDefault();
		event.stopImmediatePropagation();
		return;
	}
}

// Firefox 90- support
if(typeof window.visualViewport === "undefined")
{
	window.visualViewport = {
		get pageTop(){return window.scrollY},
        get pageLeft(){return window.scrollX}
	};
}

let viewHeight;
let viewWidth;

function onWindowResize()
{
	viewHeight = window.innerHeight; //Math.round(window.visualViewport.height);
	viewWidth = window.innerWidth; //Math.round(window.visualViewport.width);
	//console.debug("not including scrollbar: iViewHeight: " + window.visualViewport.height + ", iViewWidth:" +window.visualViewport.width );
	//console.debug("including scrollbar: iViewHeight: " + window.innerHeight + ", iViewWidth:" +window.innerWidth );
}

let bZoomCenterOnCursor = true; // setting to change in custom JS

function rescale(oEvent, isFilling)
{
	let click_X, click_Y;
	if(oEvent) // mouse click
	{
		if(oEvent.which === 3) // right mouse
		{
			return;
		}
		else if(oEvent.which === 2) // middle mouse
		{
			isFilling = true;
			oEvent.preventDefault(); // drag scroll
			oEvent.stopImmediatePropagation();
		}
		click_X = oEvent.clientX - i.offsetLeft;
		click_Y = oEvent.clientY - i.offsetTop;
	}
	//let unFilling = false;
	//document.body.style.overflowX = '';
	//document.body.style.overflowY = '';
	//let iScrollMax_V = document.documentElement.scrollHeight - iViewHeight; // FireFox (only) has window.scrollMaxY
	//let iScrollMax_H = document.documentElement.scrollWidth - iViewWidth;

	let imgPrevWidth = i.scrollWidth;
	let imgPrevHeight = i.scrollHeight;
	let prevScroll_Y = Math.round(window.visualViewport.pageTop);
	let prevScroll_X = Math.round(window.visualViewport.pageLeft);

	let bSidesCMP;
	if(isFilling)
	{
		if(rescaled === 2) // to original
		{
			rescaled = 0;
			i.style.width = orgImgWidth + "px";
			i.style.height = orgImgHeight + "px";
		}
		else // fill
		{
			bSidesCMP = (orgImgWidth / orgImgHeight) < (viewWidth / viewHeight);
			rescaled = 2;
		}
	}
	else
	{
		if(rescaled != 0) // to original
		{
			//if(rescaled === 2) {unFilling = true;}
			rescaled = 0;
			i.style.width = orgImgWidth + "px";
			i.style.height = orgImgHeight + "px";
		}
		else // fit
		{
			bSidesCMP = (orgImgWidth / orgImgHeight) > (viewWidth / viewHeight);
			rescaled = 1;
		}
	}

	if(rescaled != 0)
	{
		if(bSidesCMP)
		{
			i.style.width = "100%";
			i.style.height = "auto";
			//document.body.style.overflowX = 'hidden'; // we don't need unscrollable scrollbars if they appear
		}
		else
		{
			i.style.height = "100%";
			i.style.width = "auto";
			//document.body.style.overflowY = 'hidden'; // we don't need unscrollable scrollbars if they appear
		}
	}

	changeCursor();
	let newToOldImgScale_X = i.scrollWidth / imgPrevWidth;
	let newToOldImgScale_Y = i.scrollHeight / imgPrevHeight;
	click_X *= newToOldImgScale_X;
	click_Y *= newToOldImgScale_Y;
	prevScroll_X *= newToOldImgScale_X;
	prevScroll_Y *= newToOldImgScale_Y;
	
	if(oEvent)
	{
		if(bZoomCenterOnCursor)
		{ // scroll to the place our mouse was on the image (including scroll progress) (that place will now be in the top left corner) then try to shift it back to under the mouse cursor (if there is enough space)
			window.scrollTo(click_X + prevScroll_X - oEvent.clientX, click_Y + prevScroll_Y - oEvent.clientY);
		}
		else
		{ // scroll to the place our mouse was on the image (including scroll progress) (that place will now be in the top left corner) then try to shift it to the center of the screen (if there is enough space)
			window.scrollTo(click_X + prevScroll_X - viewWidth / 2, click_Y + prevScroll_Y - viewHeight / 2);
		}
	}
	else // keep percentage scroll progress for KB hotkeys
	{ // the top pixel of the image which is seen is the same after resizing so we can't keep the scrool at the max bottom - it's a feature, not a bug
		window.scrollTo(prevScroll_X, prevScroll_Y);
	}
}

var ARC = 0;
function autoresize()
{
	if((!is_video && i.naturalHeight) || i.videoHeight)
	{
		orgImgWidth = Math.round((is_video ? i.videoWidth : i.naturalWidth) / window.devicePixelRatio);
		orgImgHeight = Math.round((is_video ? i.videoHeight : i.naturalHeight) / window.devicePixelRatio);
		i.style.width = orgImgWidth + "px";
		i.style.height = orgImgHeight + "px";
		let title = i.src.substr(i.src.lastIndexOf("/")+1);
		if(title.indexOf("?") != -1)
		{
			title = title.substr(0, title.indexOf("?"));
		}
		title = decodeURIComponent(title);
		if(is_video)
		{
			document.title = title + " (" + i.videoWidth + "x" + i.videoHeight + ")";
		}
		else
		{
			document.title = title + " (" + i.naturalWidth + "x" + i.naturalHeight + ")";
		}
		if(filename && filename.lastIndexOf(" ") != filename.length-1) {filename += " ";}
		if(filename_ext) {filename_ext = "." + filename_ext;}
		filename = filename + title + filename_ext;
		/*let link = protected_createElement('link');
		link.rel = 'icon';
		link.href = i.src;
		document.head.appendChild(link);*/ // big lag in general from this feature
		let InitRescale = false;
		if(cfg_fitWH && orgImgHeight > viewHeight && orgImgWidth > viewWidth) // both scrollbars
		{
			InitRescale = true;
		}
		else if(cfg_fitB && (orgImgHeight > viewHeight || orgImgWidth > viewWidth)) // one scrollbar
		{
			InitRescale = true;
		}
		else if(cfg_fitS && orgImgHeight <= viewHeight && orgImgWidth <= viewWidth) // no scrollbars
		{
			InitRescale = true;
		}
		if(InitRescale)
		{
			rescale(null, cfg_fitOS ? true : false);
		}
		else
		{
			changeCursor();
		}
		bStopScripts = false; // should be safe now, right?
		if(cfg_js)
		{
			try {
			eval(cfg_js);
			} catch (e) {console.warn(e);} // CSP
		}
	}
	else // no onloadstart event for images, sadge
	{
		ARC++;
		if(ARC < 1000)
		{
			if(ARC == 75 || ARC == 300 || ARC == 999) // about 1sec, 5sec, 15sec
			{
				i.src = i.src; // lol fix
				console.warn("HJI: Trying to reload the image, " + ARC);
			}
			window.setTimeout(autoresize, 10);
		}
		else
		{
			console.warn("HJI: Gave up trying to reload the image, it is broken");
			i.onload = autoresize; // not really gave up
		}
	}
}

var observer = new MutationObserver((mutations) => {

	makeworld();

	if(bStopScripts) // Chrome handmade NoScript
	{
		for (const m of mutations)
		{
            for (const n of m.addedNodes)
            {
				if(n.tagName === "SCRIPT")
				{
					//console.debug("HJI: Script was stopped from loading: ", n);
					console.debug( "HJI: stopped 1 script from loading ");
					n.textContent = "";
                    n.remove();
				}
            }
        }
	}
});
observer.observe(document, {subtree: true, childList: true});

// hotkeys
if (typeof KeyEvent === "undefined") // only defined in FireFox
{
	window.KeyEvent = {
		DOM_VK_SPACE: 32,
		DOM_VK_LEFT: 37,
		DOM_VK_UP: 38,
		DOM_VK_RIGHT: 39,
		DOM_VK_DOWN: 40,
		DOM_VK_A: 65,
		DOM_VK_D: 68,
		DOM_VK_P: 80,
		DOM_VK_Q: 81,
		DOM_VK_R: 82,
		DOM_VK_S: 83,
		DOM_VK_W: 87,
		DOM_VK_M: 77,
		DOM_VK_F: 70,
		DOM_VK_NUMPAD2: 98,
		DOM_VK_NUMPAD4: 100,
		DOM_VK_NUMPAD5: 101,
		DOM_VK_NUMPAD6: 102,
		DOM_VK_NUMPAD8: 104,
		DOM_VK_F5: 116,
		DOM_VK_TAB: 9,
		DOM_VK_ENTER: 13
	};
}

function cancelEvent(a)
{
	a = a ? a : window.event;
	if (a.stopPropagation)
	{
		a.stopPropagation();
	}
	if (a.stopImmediatePropagation)
	{
		a.stopImmediatePropagation();
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
	let by = Math.round((b ? viewHeight : viewWidth) * 0.50 * (a ? -1 : 1));
	if(!b)
	{
		window.scrollBy(0, by);
	}
	else
	{
		window.scrollBy(by, 0);
	}
}

function download_image()
{
	if(i && i.src)
	{
		filename = filename.replace(/[/\\?%*:|"<>]/g, '_'); // characters you can't use in filenames
		let details = {	url: i.src,
						headers: referrer_policy !== "no-referrer" ? {'Referer': window.location.href} : {}, // doesn't fully follow the page's referer policy but ok
						name: bUseCustomFilename !== false ? filename : null,
						saveAs: true };
		console.log('downloading: ' + filename + " from: " + i.src);
        details.onload = () => { console.log('download complete'); };
        details.ontimeout = () => { console.error('download timeout'); };
        details.onerror = (error, errorDetails) => { console.error('download failed', error, errorDetails); };
        GM_download(details);
	}
}

function onkeydown (b)
{
	let a = (window.event) ? b.keyCode : b.which;

	if(b.ctrlKey && a == KeyEvent.DOM_VK_S)
	{
		cancelEvent(b);
		download_image();
		return;
	}
	if (b.altKey || b.metaKey || (b.ctrlKey && a != KeyEvent.DOM_VK_SPACE && a != KeyEvent.DOM_VK_F5 && a != KeyEvent.DOM_VK_R))
	{
		return;
	}

	let by = Math.round(viewHeight * 0.10);

	switch (a)
	{
	case KeyEvent.DOM_VK_RIGHT:
	case KeyEvent.DOM_VK_D:
	case KeyEvent.DOM_VK_NUMPAD6:
		if(!is_video)
		{
			window.scrollBy(by, 0);
			cancelEvent(b);
		}
		else
		{
			i.currentTime += skip_by;
		}
		break;
	case KeyEvent.DOM_VK_LEFT:
	case KeyEvent.DOM_VK_A:
	case KeyEvent.DOM_VK_NUMPAD4:
		if(!is_video)
		{
			window.scrollBy(by * -1, 0);
			cancelEvent(b);
		}
		else
		{
			i.currentTime -= skip_by;
		}
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
		if(!is_video)
		{
			scroll_space(b.shiftKey, b.ctrlKey);
		}
		else if(i.paused || i.ended)
		{
			i.play();
		}
		else
		{
			i.pause();
		}
		cancelEvent(b);
		break;
	case KeyEvent.DOM_VK_M:
		i.muted = !i.muted;
		cancelEvent(b);
		break;
	case KeyEvent.DOM_VK_F:
		i.requestFullscreen();
		cancelEvent(b);
		break;
	case KeyEvent.DOM_VK_TAB:
	case KeyEvent.DOM_VK_ENTER:
		rescale(null, true);
		cancelEvent(b);
		break;
	case KeyEvent.DOM_VK_Q:
	case KeyEvent.DOM_VK_NUMPAD5:
		rescale(null, false);
		cancelEvent(b);
		break;
	case KeyEvent.DOM_VK_P:
		cfg();
		cancelEvent(b);
		break;
	case KeyEvent.DOM_VK_R:
		if(!b.ctrlKey)
		{
			sessionStorage.hji = window.location.href;
			window.location.reload();
			cancelEvent(b);
		}
		else
		{
			window.removeEventListener("beforeunload", onbeforeunload, true);
		}
		break;
	case KeyEvent.DOM_VK_F5:
		window.removeEventListener("beforeunload", onbeforeunload, true);
		break;
	}
}

function cfg()
{
	if (typeof GM.setValue !== "undefined")
	{
		function saveCfg()
		{
			GM.setValue("directImage", q("#hji_cfg_1_direct").checked);
			GM.setValue("bgColor", q("#hji_cfg_2_bgclr").value);
			GM.setValue("fitWH", q("#hji_cfg_3_fitWH").checked);
			GM.setValue("fitB", q("#hji_cfg_4_fitB").checked);
			GM.setValue("fitS", q("#hji_cfg_5_fitS").checked);
			GM.setValue("fitOS", q("#hji_cfg_7_fitOS").checked);
			GM.setValue("js", q("#hji_cfg_6_js").value);
			alert("Configuration Saved");
			if(q("#hji_cfg_2_bgclr").value){document.body.style.backgroundColor = q("#hji_cfg_2_bgclr").value;}else{document.body.style.backgroundColor = "";}
		}
		if(i && i.src)
		{
			i.removeEventListener("click", rescale, true);
			i.removeEventListener("auxclick", rescale, true);
			i.removeEventListener("mousedown", mousedown, true);
		}
		window.removeEventListener("keydown", onkeydown, true);
		document.head.innerHTML = "";
		document.body.innerHTML = "";
		ws();
		let div = protected_createElement("div");
		div.style = "margin: auto; width: fit-content; height: fit-content; border: 2px solid black; color: white; background: #5a5757; position: absolute; inset: 0;"; // chrome "force dark mode" ignores our colors and just makes text white... great
		div.innerHTML = "<b><center>Configuration</center></b><br><input id='hji_cfg_1_direct' type='checkbox'> Open images directly with browser (disables Handy)"
		+ "<br><br><input id='hji_cfg_2_bgclr' style='color: inherit; background: inherit;' type='text' size='6'> Background color (empty = default)"
		+ "<br><br>Fit to window images:" + " ( Fill to window instead <input id='hji_cfg_7_fitOS' type='checkbox'> )"
		+ "<br><br><input id='hji_cfg_3_fitWH' type='checkbox'> Larger than window both vertically and horizontally"
		+ "<br><br><input id='hji_cfg_4_fitB' type='checkbox'> Larger than window either vertically or horizontally"
		+ "<br><br><input id='hji_cfg_5_fitS' type='checkbox'> Smaller than window"
		+ "<br><br><center>Custom JS Action:<br><textarea id='hji_cfg_6_js' style='margin: 0px; width: 400px; height: 50px; color: inherit; background: inherit;'></textarea>"
		+ "<br><input id='hji_cfg_save' style='color: inherit; background: inherit;' type='button' value='Save configuration'></center>";
		document.body.appendChild(div);
		q("#hji_cfg_1_direct").checked = cfg_direct;
		q("#hji_cfg_2_bgclr").value = cfg_bgclr;
		q("#hji_cfg_3_fitWH").checked = cfg_fitWH;
		q("#hji_cfg_4_fitB").checked = cfg_fitB;
		q("#hji_cfg_5_fitS").checked = cfg_fitS;
		q("#hji_cfg_7_fitOS").checked = cfg_fitOS;
		q("#hji_cfg_6_js").value = cfg_js;
		q("#hji_cfg_save").addEventListener("click", saveCfg, true);
	}
	else
	{
		alert("Sorry, userscripts in browser native mode (without a script manager) can't have configurations! Install TamperMonkey extension. (it's a very good userscript manager)");
	}
}

var loadCfg;
var loadCfg_callbacks = [];
if (typeof GM === 'undefined') // GM3 or native
{
	if (typeof GM_getValue !== "undefined")
	{
		console.warn("using synchronous GM setting loading");
		window.GM = {};
		GM.getValue = GM_getValue;
		GM.setValue = GM_setValue;
		loadCfg = function()
		{
			cfg_direct = GM.getValue("directImage", false);
			cfg_bgclr = GM.getValue("bgColor", "grey");
			cfg_fitWH = GM.getValue("fitWH", true);
			cfg_fitB = GM.getValue("fitB", false);
			cfg_fitS = GM.getValue("fitS", true);
			cfg_fitOS = GM.getValue("fitOS", false);
			cfg_js = GM.getValue("js", "");
			cfg_vol = GM.getValue("vid_volume", "0.5");
		}
		loadCfg();
		loadCfg_callbacks.forEach(function(item) {item()}); // likely not needed here
	}
	else
	{
		cfg_js = "";
		console.warn("no script manager found - using default settings mode");
	}
}
else
{
	loadCfg = async function ()
	{
	Promise.all([
		GM.getValue("directImage", false).then( function(result) { cfg_direct = result; } , console.error),
		GM.getValue("bgColor", "grey").then( function(result) { cfg_bgclr = result; } , console.error),
		GM.getValue("fitWH", true).then( function(result) { cfg_fitWH = result; } , console.error),
		GM.getValue("fitB", false).then( function(result) { cfg_fitB = result; } , console.error),
		GM.getValue("fitS", true).then( function(result) { cfg_fitS = result; } , console.error),
		GM.getValue("fitOS", false).then( function(result) { cfg_fitOS = result; } , console.error),
		GM.getValue("js", "").then( function(result) { cfg_js = result; } , console.error),
		GM.getValue("vid_volume", "0.5").then( function(result) { cfg_vol = result; } , console.error)
	]).then(
		function() { console.debug("GM settings loaded"); loadCfg_callbacks.forEach(function(item) {item()}); },
		function(error) { console.error("GM settings NOT loaded: " + error); loadCfg_callbacks.forEach(function(item) {item()}); }
		);
	}
	console.debug("GM settings started loading")
	loadCfg();
}
