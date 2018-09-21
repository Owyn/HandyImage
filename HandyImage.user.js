// ==UserScript==
// @name		Handy Image
// @version		2018.09.21
// @author		Owyn
// @contributor	ubless607, bitst0rm
// @namespace	handyimage
// @description	Shows just fullsize Image with hotkeys & without pop-ups on many image-hosting sites
// @updateURL	https://github.com/Owyn/HandyImage/raw/master/HandyImage.user.js
// @downloadURL	https://github.com/Owyn/HandyImage/raw/master/HandyImage.user.js
// @homepage	https://sleazyfork.org/scripts/109-handy-image
// @supportURL	https://sleazyfork.org/scripts/109-handy-image/feedback
// @icon		http://i.imgur.com/Q5TTIjV.png
// @run-at		document-start
// @grant		GM.getValue
// @grant		GM.setValue
// @grant		GM_registerMenuCommand
// @grant		GM_unregisterMenuCommand
// @grant		GM_getValue
// @grant		GM_setValue
// @grant		unsafeWindow
// @match		https://gist.github.com/Owyn/8553d7953d948228e312
// @match		http://www.imagebam.com/image*
// @match		http://imgchili.net/show*
// @match		*://imgbox.com/*
// @match		*://*.imagetwist.com/*
// @match		http://*.imagevenue.com/img.php?*
// @match		*://*.imageshack.com/i/*
// @match		*://*.imageshack.com/f/*
// @match		*://*.image2you.ru/*/*/
// @exclude		*://image2you.ru/cabinet/*
// @exclude		*://www.image2you.ru/cabinet/*
// @match		https://imageban.ru/show*
// @match		*://fastpic.ru/view*
// @match		*://pixhost.to/show/*
// @match		http://*.picpicture.com/image/*
// @match		http://*.pic5you.ru/*/*/
// @match		http://*.tinypic.com/view*
// @match		http://radical-foto.ru/*
// @match		http://radikal-foto.ru/*
// @match		https://radikal.ru/*
// @match		http://f-page.ru/*
// @match		http://f-picture.net/*
// @match		https://*.pimpandhost.com/image*
// @match		http://*.pixroute.com/*.html
// @match		http://*.picforall.ru/*/*/
// @match		*://*.imagecurl.com/view*
// @match		*://*.imagecurl.org/view*
// @match		http://*.euro-pic.eu/*share*
// @match		http://*.xxxhost.me/view*
// @match		http://*.imadul.com/?*
// @match		*://postimg.org/image/*
// @match		*://postimg.cc/image/*
// @match		http://*.niceimage.pl/*.html
// @match		http://*.pics-money.ru/*
// @match		http://*.freeimgup.com/*.*
// @match		http://imgtiger.com/view*
// @match		http://*.imgspice.com/*.html
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
// @match		http://www.imgbabes.com/*/*.htm*
// @match		http://ibunker.us/f*
// @match		http://ichan.org/image.php?path=*
// @match		http://*.imagearn.com/*
// @match		http://www.dumppix.com/view*
// @match		http://www.bilder-upload.eu/show*
// @match		http://www.bilder-hochladen.net/file*
// @match		http://www.bild.me/bild.php?*
// @match		http://www.imagesnake.com/show*
// @match		http://www.imagesnake.com/img*
// @match		http://www.imagesnake.com/view*
// @match		http://www.imagesnake.org/show*
// @match		http://www.imagesnake.org/img*
// @match		http://www.imagesnake.org/view*
// @match		https://www.freebunker.com/show*
// @match		https://www.freebunker.com/img*
// @match		https://www.freebunker.com/view*
// @match		http://bayimg.com/*
// @match		http://*.directupload.net/file*
// @match		http://*.imagecherry.com/*
// @match		http://funkyimg.com/view*
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
// @match		http://*.croftimage.com/img-*
// @match		http://*.imagedecode.com/img-*
// @match		http://*.imagefruit.com/img*
// @match		http://*.imagefruit.com/show*
// @match		http://*.miragepics.com/view*
// @match		http://*.freeimagehosting.net/*
// @match		http://*.keptarolo.hu/*
// @match		http://www.uploadhouse.com/view*
// @match		http://*.dumpt.com/img/view*
// @match		http://imagezilla.net/show/*
// @match		http://*.imageup.ru/img*
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
// @match		https://*.lostpic.net/image/*
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
// @match		http://*.imagenpic.com/*
// @match		http://*.stuffed.ru/images*
// @match		http://*.wstaw.org/w/*
// @match		http://www.imagesocket.com/photos*
// @match		http://www.imagesocket.com/social*
// @match		http://imageban.net/show*
// @match		http://*.otofotki.pl/*
// @match		http://*.imgsin.com/view*
// @match		http://*.imagenetz.de/*
// @match		http://pix.toile-libre.org/?img*
// @match		http://www.servimg.com/image*
// @match		http://*.upix.me/files/*
// @match		http://*.upix.me/i/v/?q=*
// @match		http://*.pixelup.net/image*
// @match		http://*.pixelup.net/image*
// @match		http://*.picsee.net/*
// @match		http://www.fotosik.pl/pokaz_obrazek/pelny*
// @match		http://*.depic.me/*
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
// @match		http://*.thepornfeeds.com/?*
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
// @match		http://www.imgcarry.com/show*
// @match		http://*.saveimg.ru/show*
// @match		http://www.fotos-hochladen.net/view*
// @match		http://simplest-image-hosting.net/*
// @match		http://jpegbay.com/gallery/*.html
// @match		http://www.hostpic.org/view*
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
// @match		http://*.1pics.ru/view-*
// @match		http://*.1pics.ru//view-*
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
// @match		http://*.hostingkartinok.com/show-image.php?id=*
// @match		http://*.4put.ru/*max*
// @match		http://www.pictureshack.ru/view*
// @match		http://*.host99.byethost4.com/share.php?id=*
// @match		http://*.eazypics.net/share*
// @match		http://xtupload.com/share.php?id=*
// @match		http://t.williamgates.net/share*
// @match		http://photosex.biz/v.php?id=*
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
// @match		http://www.picshare.ru/view*
// @match		http://*.pikczery.pl/view*
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
// @match		http://*.image-server.ru/view*
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
// @match		http://*.image.alesher.com/?*
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
// @match		http://*.mynameismiz.com/*
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
// @match		http://*.fileaimage.com/?*
// @match		https://*.images.baconbits.org/?*
// @match		http://*.kuvajako.com/*
// @match		http://*.upanh.ovo.vn/*
// @match		http://*.imagesaur.com/*
// @match		http://*.wrzucaj.net/*
// @match		http://*.heberge-images.com/?*
// @match		http://www.image.kg/*
// @match		http://*.picshome.ru/?*
// @match		http://*.savemyimage.com/*
// @match		http://*.img.dramacafe.tv/*
// @match		http://*.hosturimage.com/img-*
// @match		http://*.pic-mir.ru/*/*
// @match		http://*.244pix.com/view*
// @match		http://*.uploadimage.ro/view*
// @match		http://*.imgflare.com/*/*
// @match		https://www.imagefap.com/photo/*
// @match		http://filefap.com/view*
// @match		*://imgur.com/*
// @exclude		*://imgur.com/*,*
// @match		http://motherless.com/*
// @match		http://*.xpic.biz/*/view*
// @match		*://*.tumblr.com/image/*
// @match		http://*.imageporter.com/*
// @match		http://*.damimage.com/img-*
// @match		http://fapping.empornium.sx/*
// @match		http://*.bulkimg.info/img-*
// @match		http://imgboxxx.com/view*
// @match		http://*.imghere.net/view*
// @match		http://*.sharepic.biz/show-image.php?id=*
// @match		http://f-lite.ru/*
// @match		http://*.picturescream.com/*
// @match		http://*.imgdone.com/view*
// @match		https://*.2i.cz/i/*
// @match		http://awesomescreenshot.com/*
// @match		https://www.flickr.com/photos/*/*/
// @exclude		https://www.flickr.com/photos/*/galleries/*
// @exclude		https://www.flickr.com/photos/sets/*
// @exclude		https://www.flickr.com/photos/tags/*
// @exclude		https://www.flickr.com/photos/page*
// @exclude		https://www.flickr.com/photos/with*
// @exclude		https://www.flickr.com/photos/favorites*
// @match		http://www.amateri.cz/g*/*
// @match		http://*.imgshow.me/*
// @match		*://*.wikipedia.org/wiki/*:*.jp*
// @match		*://*.wikipedia.org/wiki/*:*.png
// @match		*://*.wikimedia.org/wiki/File:*.jp*
// @match		*://*.wikimedia.org/wiki/File:*.pn*
// @match		http://*.xxxscreens.com//img-*
// @match		http://avenuexxx.com/*-*
// @match		http://avenuexxx.com/archives/*/*
// @exclude		http://avenuexxx.com/archives/category/*
// @match		http://www.bilderhoster.net/*.html
// @match		http://*.xxxscreens.com/img-*
// @match		http://*.imgdope.com/view*
// @match		http://*.imagehost.eu/*
// @match		http://*.aveimage.com/view*
// @match		http://*.fappic.com/*
// @match		http://*.imagenimage.com/*/*
// @match		http://*.adultur.com/img-*
// @match		http://*.imageshimage.com/*/*
// @match		http://*.imgswift.com/*/*
// @match		http://*.imageporn.eu/?v=*
// @match		https://500px.com/photo/*
// @match		http://*.greenpiccs.com/images/*.html
// @match		http://*.hostmat.eu/view*
// @match		http://*.photobucket.com/user/*/media/*.htm*
// @match		https://www.imgshots.com/img*
// @match		https://www.imgshots.com/show/*
// @match		http://*.3xplanet.com/view*
// @match		http://*.imgmega.com/*.html
// @match		*://img.yt/img-*
// @match		http://*.payforpic.ru/*/*/
// @match		http://*.keep4u.ru/full/*
// @match		http://*.pic.re/*.html
// @match		http://*.freshpics.ru/*/*/
// @match		http://*.sexyimg.eu/img-*
// @match		*://*.imgseeds.com/img-*
// @match		http://*.pronpic.org/*/*
// @match		http://prnt.sc/*
// @match		http://*.imgdream.net/view*
// @match		http://*.imgtab.net/*
// @match		http://*.kephost.com/image/*
// @match		http://i.ruspotting.net/image/*
// @match		http://*.gifyu.com/image/*
// @match		https://*.picr.ws/image/*
// @match		https://www.linkmypic.com/image/*
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
// @match		http://*.kuvapankki.in/image/*
// @match		http://*.myimageshare.com/image/*
// @match		http://*.nium.co/image/*
// @match		http://pix.hostux.net/image/*
// @match		http://*.pixoload.de/image/*
// @match		http://*.primeimg.co/image/*
// @match		http://pic.xtream-reallife.de/image/*
// @match		http://*.ultraimg.com/image/*
// @match		http://demo.chevereto.com/image/*
// @match		http://imgclick.net/*
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
// @match		https://danbooru.donmai.us/posts/*
// @match		http://konachan.com/post/show/*
// @match		http://konachan.net/post/show/*
// @match		https://yande.re/post/show/*
// @match		https://chan.sankakucomplex.com/*post/show/*
// @match		https://yande.re/post/show/*
// @match		http://www.zerochan.net/*
// @match		http://*.imgrock.pw/*.php
// @match		http://imgzap.com/view*
// @match		http://*.funimg.net/img*
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
// @match		https://www.pixiv.net/member_illust.php?mode=medium&illust_id=*
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
// @match		http://*.imgz.pw/share-*
// @match		http://*.imgz.pw/ch/image/*
// @match		*://*.imgking.co/img*
// @match		http://ask.fm/*/photo/original
// @match		http://*.newimagepost.com/img-*
// @match		http://*.imageho.me/img-*
// @match		http://myimg.club/*
// @match		http://*.imgease.re/img-*
// @match		https://www.hotimage.uk/*mg-*
// @match		http://imgview.pw/*.php
// @match		http://*.10.imageleon.com/i-*
// @match		https://www.dropbox.com/s/*/*
// @match		http://imgor.net/img-*
// @match		http://*.imagedax.net/*/*.html
// @match		https://*.imgmonkey.com/*/*.html
// @match		http://*.fapat.me/img-*
// @match		http://photo.weibo.com/*/large/photo_id/*
// @match		http://*.crazyimg.com/images/*.html
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
// @exclude		https://instagram.com/p/*/embed/*
// @exclude		https://*.instagram.com/p/*/embed/*
// @match		http://*.imgsay.com/?v=*
// @match		http://*.imgsmile.com/?v=*
// @match		http://*.balkanelite.org/MultiHoster/view*
// @match		https://twitter.com/*/photo/*
// @match		http://*.icezap.com/img-*
// @match		*://*.rapidimg.net/img-*
// @match		http://foxyimg.link/*
// @match		http://*.imgtornado.com/img-*
// @match		http://*.daily-img.com/image/*
// @match		http://*.imageab.com/image/*
// @match		http://*.erimge.com/img-*
// @match		http://*.imgtrial.com/img-*
// @match		http://imgtown.net/*.php
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
// @match		http://*.imgtiger.org/*/*
// @match		http://*.img3x.com/image/*
// @match		http://*.imguniversal.com/*
// @match		http://*.imagepearl.com/view/*
// @match		http://*.imagepearl.com/verify/*
// @match		http://*.tinizo.com/img-*
// @match		*://*.imgkings.com/img*
// @match		http://*.imagerar.com/img*
// @match		http://*.sendpic.org/view/*
// @match		http://www.porncomix.info/*/*/
// @exclude		http://www.porncomix.info/gallery/*
// @match		http://*.picclock.ru/*/*/
// @match		http://*.svetmonet.ru/*.html
// @match		http://*.svetmonet.ru/full/
// @match		http://*.imgpix.net/*
// @match		https://*.imgzulu.com/img-*
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
// @match		http://www.imgsky.net/site/v/*
// @match		http://www.imagespicy.site/site/v/*
// @match		http://imgoutlet.pw/*.php
// @match		http://*.pix.ac/image/*
// @match		*://*.imgmak.com/image/*
// @match		http://*.freephotohostin.com/img-*
// @match		http://*.imgcat.pw/img-*
// @match		http://*.levinpic.org/*.html
// @match		https://www.sparrowpics.com/image/*
// @match		http://*.imgmax.com/image/*
// @match		http://lostpix.com/?v=*
// @match		https://extraimago.com/image/*
// @match		http://*.imgroute.com/?v=*
// @match		http://www.joblo.com/hollywood-celebrities/hottie-profile/*/image-gallery/*.jpg
// @match		*://extraimage.net/image/
// @match		*://www.bellazon.com/main/attachment/*
// @match		*://extraimage.net/image/*
// @match		https://www.artstation.com/artwork/*
// @match		http://bcy.net/illust/detail/*
// @match		http://*.imgpics.nl/img-*
// @match		http://*.imagexxx18.com/image/*
// @match		http://*.imagepics.xyz/img-*
// @match		*://*.imagesouls.net/img*
// @match		*://postto.me/*
// @match		http://*.imgskull.xyz/image/*
// @match		http://*.imgskull.com/image/*
// @match		*://*.ninjaimages.com/*.html
// @match		*://*.imgprime.com/img*
// @match		http://*.imgmaze.pw/*.php
// @match		*://*.piccash.net/*/*/
// @exclude		*://piccash.net/cabinets/*
// @exclude		*://www.piccash.net/cabinets/*
// @match		http://imgwo.com/img-*
// @match		http://luxpic.ru/images/*.html
// @match		http://*.pic-images.ru/full/
// @match		http://*.pic-images.ru/*.html
// @match		http://*.imgbun.ru/full/
// @match		http://*.imgbun.ru/*.html
// @match		http://*.imgspic.ru/full/
// @match		http://*.imgspic.ru/*.html
// @match		http://imgleveret.com/img-*
// @match		http://porn84.org/img-*
// @match		http://*.jpgstore.ru/full/
// @match		http://*.jpgstore.ru/*.html
// @match		https://*.ima.gy/i/*
// @match		http://moonpix.ru/full/
// @match		http://moonpix.ru/*.html
// @match		http://*.0img.ws/*
// @match		http://picpower.ru/full/
// @match		http://picpower.ru/*.html
// @match		http://piccloud.ru/full/
// @match		http://piccloud.ru/*.html
// @match		http://imgbase.ru/*/*/
// @match		http://*.sexybabepics.net/img-*.html
// @match		http://*.sexybabepics.net/x/image/*
// @match		http://*.imagecrest.com/verify/*
// @match		http://*.imagecrest.com/view/*
// @match		https://*.picz.site/img-*.html
// @match		http://*.allxpix.com/img-*.html
// @match		http://pixxss.ru/full/
// @match		http://pixxss.ru/*.html
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
// @match		http://pic2x.ru/full/
// @match		http://pic2x.ru/*.html
// @match		http://imgcach.ru/*/*/
// @match		http://*.2pixxsee.ru/*.html
// @match		http://*.2pixxsee.ru/full/
// @match		https://*.xhamster.com/photos/gallery/*/*
// @match		http://*.imghall.com/?v=*
// @match		https://*.acidimg.cc/img-*
// @match		https://imgcloud.pw/image/*
// @match		https://z4a.net/image/*
// @match		https://t.hogor.net/?pm=*
// @match		http://1pic2x.ru/*.html
// @match		http://1pic2x.ru/full/
// @match		http://1pics1img.ru/*.html
// @match		http://1pics1img.ru/full/
// @match		http://xxxwebdlxxx.org/*.html
// @match		https://www.sizzlingclicks.com/image/*
// @match		http://wwxxww.ru/*.html
// @match		http://wwxxww.ru/full/
// @match		http://pikoclick.ru/*/*/
// @match		http://passpix.com/images/*
// @match		http://*.sexyimg.eu/*/*.html
// @match		http://*.imgseed.com/img-*.html
// @match		http://img.folluo.me/image/*
// @match		*://imgpart.com/img-*
// @match		http://picstate.com/view/full/*
// @match		https://jerking.empornium.ph/image/*
// @match		http://p0xpicmoney.ru/*/*/
// @match		http://picker-click.ru/*/*/
// @match		https://truepic.org/*
// @match		https://www.jiopic.com/image/*
// @match		https://imx.to/img-*
// @match		https://imx.to/i/*
// @match		https://pixxxels.cc/image/*
// @match		http://picpic.online/*/*/
// @match		http://imgking.xyz/*.html
// @match		http://moreimage.pw/image/*
// @match		https://imgsha.com/i/*
// @match		https://www.pic-upload.de/view-*/*.html
// @match		http://pic3you.org/*.html
// @match		http://pic3you.org/full/
// @match		*://*.vipix.pw/images/*.html
// @match		http://*.imgchilibum.ru/v.php?id=*
// @match		http://*.imgazure.com/*.html
// @match		*://*.dpic.me/*
// ==/UserScript==

if (typeof unsafeWindow === "undefined")
{
	unsafeWindow = window;
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
if (document.images.length == 1 && document.images[0].src == window.location.href) 
{
	console.warn("handy isn't needed for directly opened images");
	return false;
}
if(document.referrer)
{
	if(document.referrer.lastIndexOf(window.location.hostname) != -1 && document.referrer.lastIndexOf(window.location.hostname) +1 == document.referrer.length - window.location.hostname.length)
	{
		console.warn("you have just uploaded a picture, haven't you?");
		return false;
	}
}
if(document.cookie.indexOf("hji=") != -1)
{
	if(document.cookie.indexOf("hji=" + window.location.href) != -1)
	{
		console.warn("you just don't want the script to run now, do you?");
		document.cookie = "hji=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
		return false;
	}
	else if(document.cookie.indexOf("backhji=") != -1)
	{
		console.warn("you have found a time machine, now you are traveling back in history");
		window.history.go(-1);
		document.cookie = "hji=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
		return false;
	}
	console.warn("found a weird cookie, let's eat it");
	document.cookie = "hji=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"; // stealth mode
}
//else{	console.warn("no hji cookie found");}

function q(s){if(document.body){return document.body.querySelector(s);}return null;}
var cfg_direct;
var cfg_bgclr;
var cfg_fitWH;
var cfg_fitB;
var cfg_fitS;
var cfg_js;
var dp = false;
var rescaled = false;
var tb;
var timeout = 1000;
var FireFox = ((navigator.userAgent.indexOf('Firefox') != -1) ? true : false);
var i;
var j;
var ext_list = ['webm', 'mp4', 'ogg'];
var iurl = window.location.hostname;
if(!iurl.indexOf("www."))
{
	iurl = iurl.substr(4);
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
	var lasttask = setTimeout(function() {},0);
	for(var n = lasttask; n > 0; n--)
	{
		clearTimeout(n);
	}
}

function DeleteAllCookies()
{
	document.cookie.split(";").forEach(function(c) {
		document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
	});
}

function onscript(e) 
{
	//console.warn( "STOPPED: " + e.target.src + e.target.innerHTML);
	e.preventDefault();
	e.stopPropagation();
}

function onbeforeunload(e) // back helper
{
	//console.warn("setting hji cookie before unloading page");
	var now = new Date();
	var time = now.getTime();
	time += 2000; // 2 sec to help quit double-pages
	now.setTime(time);
	now.toGMTString();
	document.cookie = 'backhji=; expires=' + now.toGMTString() + '; path=/';
}

function protected_createElement(el)
{
	delete document.createElement;
	var r = document.createElement(el);
	unsafeWindow.document.createElement = null;
	return r;
}

function makeimage()
{
	if(cfg_direct){unsafeWindow.location.href = i.src;return false;}
	if(cfg_bgclr){document.body.bgColor = cfg_bgclr;}
	document.body.style.margin = "0px";
	document.body.innerHTML = "<style>img { position: absolute; top: 0; right: 0; bottom: 0; left: 0; image-orientation: from-image; }</style>"; // center image
	ws();
	var isrc = i.src;
	i = protected_createElement("img");
	i.src = isrc;
	i.style.margin = "auto"; // center image
	document.body.appendChild(i);
	i.addEventListener("click", rescale, true);
	window.addEventListener("keydown", onkeydown, true);
	if(dp){console.warn("you are on a double-page image hosting (probably)");window.addEventListener("beforeunload", onbeforeunload, true);}
	autoresize();
}

function find_text_in_scripts(text, stopword, start_from_top, search_after_word)
{
	var s = document.getElementsByTagName("script");
	for(var c=0;c<s.length;c++) 
	{
		if(search_after_word && s[c].innerHTML.indexOf(search_after_word) != -1){s[c].innerHTML = s[c].innerHTML.substring(0, s[c].innerHTML.indexOf(search_after_word));}
		var start_pos = start_from_top ? s[c].innerHTML.indexOf(text) : s[c].innerHTML.lastIndexOf(text);
		if(start_pos == -1){continue;}
		start_pos += text.length;
		i = s[c];
		i.src = decodeURIComponent(s[c].innerHTML.substring(start_pos,s[c].innerHTML.indexOf(stopword,start_pos)).split("\\").join("")); // split\join fix for stupidfox GreaseMonkey
		return true;
	}
	return false;
}

function post(path, params, method) 
{
	method = method || "post";
	var form = protected_createElement("form");
	form.setAttribute("method", method);
	form.setAttribute("action", path);
	for(var key in params) 
	{
		if(params.hasOwnProperty(key)) 
		{
			var hiddenField = protected_createElement("input");
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
	if(i){return;}
	// per-host image detection
	switch (iurl)
	{
	case "gist.github.com":
		if(document.body){i=1;cfg();}break;
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
		//chevereto 3.x
		i = document.head.querySelector('link[rel="image_src"]');
		if(i)
		{
			i.src = i.href;
			i.src = i.src.replace('_800.', '.'); //img.3ezy.net
		}
		break;
	case "directupload.net":
	case "bilderhoster.net":
	case "noelshack.com":
	case "kephost.com":
	case "i.ruspotting.net":
	case "gifyu.com":
	case "picr.ws":
	case "linkmypic.com":
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
	case "kuvapankki.in":
	case "myimageshare.com":
	case "nium.co":
	case "pix.hostux.net":
	case "pixoload.de":
	case "primeimg.co":
	case "pic.xtream-reallife.de":
	case "ultraimg.com":
	case "safeimage.biz":
	case "imagebam.com":
	case "twitter.com":
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
		ext_list = []; // imagebam
		i = document.querySelector('meta[property="og:image"] , [name="og:image"]');
		if(i)
		{
			i.src = i.content;
			i.src = i.src.replace(':large', ':orig'); //twitter.com
		}
		else
		{
			i = q('a[download]');
			if(i){i.src = i.href;}
		}
		break;
	case "imgur.com":
		j = true;
		i = document.head.querySelector('meta[property="og:image"]');
		if(i)
		{
			var f = document.head.querySelector('meta[property="og:url"]');
			var v = document.head.querySelector('meta[property="og:video"]');
			if((f && (f.content.indexOf("/a/") != -1 || f.content.indexOf("/gallery/") != -1) ) || i.content.indexOf("/images/logo") != -1)
			{
				return;
			}
			else if(v)
			{
				i.src = v.content.replace('.mp4', '.gif');
			}
			else
			{
				i.src = i.content;i.src = i.src.split('?')[0];
			}
		}
		break;
	case "ameblo.jp":
		j = true;
		i = q('img#imgItem');
		break;
	case "instagram.com":
		j = true;
		if(find_text_in_scripts('"shortcode_media":{"__typename":"GraphImage"'))
		{
			find_text_in_scripts('"display_url":"', '"');
			if(i)
			{
				i.src = i.src.replace(/\/p\d+x\d+?\//, '/');
			}
		}
		break;
	case "flickr.com":
	case "secure.flickr.com":
		find_text_in_scripts('"url":"', '"', false, '"canComment"');
		break;
	case "500px.com":
		find_text_in_scripts('"https_url":"', '"', false);
		break;
	case "artstation.com":
		j = true;
		if(document.querySelectorAll("div.artwork").length == 1)
		{
			i = q('a[href*="&dl="]');
			if(i)
			{
				i.src = i.href;
			}
		}
		break;
	case "pixiv.net":
		j = true;
		i = q('img[src*="i.pximg.net/img-"]');
		if(i)
		{
			if(!q('a[href*="member_illust.php?mode=manga"]'))
			{
				find_text_in_scripts('"original":"', '"');
			}
			else
			{
				console.warn("Manga page with multiple images, no action taken further");
				return;
			}
		}
		break;
	case "chan.sankakucomplex.com":
		i = q('a[itemprop="contentUrl"]');
		if(i)
		{
			i.src = i.href;
		}
		break;
	case "bcy.net":
		var f = document.querySelectorAll("img.detail_clickable")
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
	case "fastpic.ru":
	case "abload.de":
		i = document.body.querySelectorAll('img#image');
		if(i)
		{
			i = i[i.length-1];
		}
		break;
	case "imagecrest.com":
	case "imagepearl.com":
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
	case "imgz.pw":
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
	case "pixsense.net":
	case "imgsky.net":
	case "imagespicy.site":
		find_text_in_scripts('"src","', '"');
		break;
	case "pix-x.net":
	case "picclock.ru":
	case "imgcach.ru":
	case "pikoclick.ru":
	case "p0xpicmoney.ru":
	case "picker-click.ru":
	case "picpic.online":
		i = q('img[onclick*="mshow"]');
		if(i){i.src = i.src.replace('-thumb', '');i.src = i.src.replace('img_thumb', 'img_full');}
		break;
	case "pics-money.ru":
		i = q('img[src*="/full/"]');if(i){break;}
	case "pic5you.ru":
	case "pic4you.ru":
	case "picforall.ru":
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
		var fn = q('div.alert.alert-info.nomargin.photo_name span');
		if(fn)
		{
			var url = i.src;
			i.src = url.substring(0,url.lastIndexOf('/')+1) + fn.textContent + url.substring(url.lastIndexOf('.'));
		}}
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
		i = q('img.normal');
		if(i){i.src = i.src.replace('_l.jpg', '.jpg');}
		break;
	case "sexybabepics.net":
		i = document.head.querySelector('meta[property="og:image"]');
		if(i){i.src = i.content; break;}
	case "picsee.net":
		i = q('a[href*="/upload"]');
		if(i){i.src = i.href;}
		break;
	case "danbooru.donmai.us":
		i = q('a[href*="/data/"]');
		if(i){i.src = i.href;}
		break;
	case "gelbooru.com":
	case "youhate.us":
		j = true;
		i = q('a[href*="//images/"]');
		if(i){i.src = i.href;}
		break;
	case "deviantart.com":
		if(q('img.dev-content-normal'))
		{
			i = q('a[href*="/download/"]');
			if(i && i.href.indexOf(".zip?") == -1 && i.href.indexOf(".7z?") == -1 && i.href.indexOf(".rar?") == -1 && i.href.indexOf(".psd?") == -1 && i.href.indexOf("deviantart.com/users/outgoing?")== -1){i.src = i.href;}
			else{i = q('img.dev-content-full');}
		}
		break;
	case "imagehost.eu":
	case "fappic.com":
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
	case "pikczery.pl":
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
	case "imgchilibum.ru":
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
	case "foxyimg.link":
		i = q('input[type="submit"]');
		dp=true;
		if(i) 
		{
			i.click();
			break;
		}
	case "turboimagehost.com":
	case "screenlist.ru":
	case "picshare.geenza.com":
	case "mojoimage.com":
	case "imagecherry.com":
	case "10.imageleon.com":
	case "img4.imagetitan.com":
	case "ninjaimages.com":		
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
	case "imageup.ru":
	case "hotchyx.com":
	case "imagehousing.com":
	case "cubeupload.com":
	case "dumparump.com":
	case "uploads.ru":
	case "myimg.de":
	case "root-space.eu":
	case "mepic.ru":
	case "postto.me":
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
	case "imgbun.ru":
	case "imgspic.ru":
	case "jpgstore.ru":
	case "moonpix.ru":
	case "picpower.ru":
	case "piccloud.ru":
	case "pixxss.ru":
	case "pixxsees.ru":
	case "2picsun.ru":
	case "pic2x.ru":
	case "img-pika.ru":
	case "1pic2x.ru":
	case "1pics1img.ru":
	case "wwxxww.ru":
	case "pic3you.org":		
		var f = document.getElementsByTagName("button");
		if(f.length)
		{
			f[f.length-1].click();
		}
		dp=true;
		i = q('img[src*="/pic.jpeg"]');
		break;
	case "imgkings.com":
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
		else // if(window.location.href.indexOf("/imgb-u/") != -1)
		{
			i = q('img[src*="/u/b/"]');
			break;
		}
	case "freeimagehosting.net":
	case "uploadhouse.com":
	case "fotos-hochladen.net":
	case "picshare.ru":
	case "imgtab.net":
		i = q('img[src*="uploads/"]');
		break;
	case "xtremeshack.com":
		i = q('img[src*="/photos/"]');
		break;
	case "picturepush.com":
		i = q('img[src*="/photo/"]');
		break;
	case "keptarolo.hu":
		i = q('img[src*="/kep/"]');
		break;
	case "servimg.com":
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
	case "imgtiger.org":
		i = q('form');
		if(i)
		{
			i.submit();
			break;
		}
	case "imgoutlet.pw":
	case "imgrock.pw":
	case "imgview.pw":
	case "imgmaze.pw":
		j = true;
		dp=true;
		i = q('img.picview');
		if (i)
		{
			break;
		}
		var f = document.querySelectorAll("[type='button']")
		if(f.length)
		{
			var n;
			for(n=f.length-1; n >= 0; n--)
			{
				if(window.getComputedStyle(f[n]).visibility != "hidden" && f[n].offsetWidth != 0 && f[n].value.indexOf("eply") == -1 && f[n].value.indexOf("Log") == -1)
				{
					f[n].removeAttribute("disabled");
					f[n].click();
					i = 1;
					break;
				}
			}
		}
		break;
	case "myimg.club":
	case "imgmonkey.com":
	case "imgdragon.com":
	case "imggold.org":
	case "levinpic.org":
	case "imgtown.net":
	case "0img.ws":
		j = true;
		dp=true;
		var f = document.querySelectorAll("input[type='submit']")
		if(f.length)
		{
			var n;
			for(n=f.length-1; n >= 0; n--)
			{
				if(window.getComputedStyle(f[n]).visibility != "hidden" && f[n].offsetWidth != 0 && f[n].value.indexOf("eply") == -1 && f[n].value.indexOf("Log") == -1)
				{
					f[n].removeAttribute("disabled");
					f[n].click();
					break;
				}
			}
		}
	case "casimages.com":
	case "thebestpichost.com":
	case "ifotos.pl":
	case "subeimagenes.com":
	case "lostpix.com":
	case "vvcap.com":
	case "imgtrex.com":
	case "pic-upload.de":
		i = q('img[src*="/img/"]');
		break;
	case "imagenetz.de":
		i = q('img[src*="/img"]');
		break;
	case "picatom.com":
		i = q('img[src*="img/"]'); 
		break;
	case "2pixxsee.ru":
	case "imgking.xyz":
	case "imgazure.com":
		i = q('img[src*="/img/"]');
		if(i){i.src = i.src.replace('p.', '.');}
		break;
	case "imgbabes.com":
	case "imgflare.com":
		i = q('input[onclick*="Decode"]');
		dp=true;
		j = true;
		if(i) 
		{
			i.click();
			break;
		}
	case "xxxhost.me":
	case "bilder-hochladen.net":
	case "dumpt.com":
	case "imgsin.com":
	case "loaditup.de":
	case "123poze.3x.ro":
	case "thaisharing.online.fr":
	case "filefap.com":
	case "imgswift.com":
	case "picstate.com":
		i = q('img[src*="/files/"]');
		break;
	case "image18.org":
		i = q('img[src*="/file/"]');
		break;
	case "zimagez.com":
		i = q('img[src*="/full/"]');
		break;
	case "niceimage.pl":
		i = q('img[src*="/uploaded/"]');
		break;
	case "imagefap.com":
		i = q('noscript');
		if(i)
		{
			i.src = i.innerHTML.substring(i.innerHTML.indexOf("http"));
			i.src = i.src.substring(0,i.src.indexOf('"'));
		}
		break;
	case "olivepix.com":
		i = q('img[src*="view/"]');
		break;
	case "imgking.co":
		i = q('img[src*="uploads/"]');
		if(i)	break;
        	if(window.location.href.indexOf("imgs") != -1)
		{
			window.location.href = window.location.href.replace("imgs","imgv");
			break;
		}
		if(window.location.href.indexOf("img3") != -1)
		{
			window.location.href = window.location.href.replace("img3","img4");
			break;
		}
	case "imagesouls.net":
	case "funimg.net":
		if(find_text_in_scripts('linkid="', '"', false))
		{
			window.location.href = i.src;
			break;
		}
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
	case "bulkimg.info":
	case "img.yt":
	case "xxxscreens.com":
	case "i.sxpics.nl":
	case "imageon.org":
	case "nimplus.com":
	case "imag.nimplus.com":
	case "newimagepost.com":
	case "imgease.re":
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
		dp=true;
		var f = document.getElementsByTagName("input");
		if(f.length)
		{
			f[f.length-1].removeAttribute("disabled");
			f[f.length-1].click();
		}
	case "fotoszok.pl":
	case "damimage.com":
	case "adultur.com":
	case "croftimage.com":
	case "imagedecode.com":
	case "sexyimg.eu":
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
	case "sexyimg.eu":
	case "imgseed.com":
	case "imgcredit.xyz":
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
	case "imgzulu.com":
		i = q('button[type="submit"]');
		dp=true;
		if(i) 
		{
			i.click();
			break;
		}
		i = q('img[src*="' + iurl + '/upload/"]');
		break;
	case "picspornfree.me":
	case "hotimage.uk":
	case "xxxwebdlxxx.org":
		i = q('input[type="submit"]');
		dp=true;
		if(i) 
		{
			i.click();
			break;
		}
	case "image-server.ru":
	case "avenuexxx.com":
	case "uploadimagex.com":
	case "hostingkartinok.com":
	case "bellazon":
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
	case "3xplanet.com":
		i = q('img[alt="picContent"]');
		break;
	case "subirimagenes.com":
		i = q('input[type="submit"]');
		dp=true;
		if(i) 
		{
			i.click();
			break;
		}
		i = q('img[onclick*="scale"]');
		break;
	case "image-share.com":
	case "xpic.biz":
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
	case "thepornfeeds.com":
	case "oxily.com":
	case "ghanaimages.co":
	case "knecht.novarata.net":
	case "img.irandeliver.com":
	case "xferz.com":
	case "up.kfesfahan.com":
	case "image.alesher.com":
	case "upload.khontai.com":
	case "image.pantyhosemania.info":
	case "t.hogor.net":
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
	case "imgroute.com":
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
	case "fileaimage.com":
	case "picturescream.com":
	case "all-poster.ru":
	case "imgmak.com":
	case "extraimage.net":
	case "imagexxx18.com":
	case "imgvisits.com":
	case "imghall.com":
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
		i = q('img[src*="/i/"]');
		break;
	case "imguniversal.com":
	case "imgclick.net": // no submits
        i = q("form input[type='submit'][value*='continue to image' i]");
        j = true;
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
			DeleteAllCookies();
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
	case "mynameismiz.com":
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
	case "kuvajako.com":
	case "upanh.ovo.vn":
	case "imagesaur.com":
	case "wrzucaj.net":
	case "heberge-images.com":
	case "image.kg":
	case "picshome.ru":
	case "savemyimage.com":
	case "img.dramacafe.tv":
	case "fapping.empornium.sx":
	case "beeimg.com":	
	case "1pics.ru":	
	case "imgshow.me":
	case "youpicture.org":
	case "vavvi.com":
	case "imgzap.com":
	case "imgdrive.net":
	case "crazyimg.com":
	case "extraimago.com":
	case "ftop.ru":
	case "porncomix.info":
	case "luxpic.ru":
	case "passpix.com":
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
	default: // dynamic subdomain
		switch(iurl.substr(iurl.indexOf(".")+1))
		{
		case "tumblr.com":
			if(FireFox)
			{
				i = q('img[data-src]');
				if(i)
				{
					i.src = i.dataset.src;
				}
			}
			else
			{
				i = q('img:not([src*="data:"])[id]');
			}
			break;
		case "imagevenue.com":
			i = q('img[src*="/loc"]');
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
		case "xhamster.com":
			j = true;
			i = q('img.fotorama__img');
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
			console.warn("HJI is running on a custom website");
			if(document.readyState != "loading" && document.images.length != 0)
			{
				var b = 0;
				for(var n = 0; n < document.images.length; n++)
				{
					if(document.images[n].width == 0 && !document.images[n].complete) // not started loading
					{
						b = -1;
						break;
					}
					else if(document.images[n].width * document.images[n].height > document.images[b].width * document.images[b].height)
					{
						b = n;
					}
				}
				i = document.images[b];
				if(i){console.warn("HJI is running on a custom website, showing biggest image");}
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
		if (document.title == "Attention Required! | Cloudflare")
		{
			console.warn("Cloudflare MITM guard page.  Stopping.");
			return false;
		}
		window.addEventListener('beforescriptexecute', onscript, true);
	}
	//
	if(i && i.src)
	{
		observer.disconnect();
		function clr_pgn()
		{
			unsafeWindow.open = null;
			unsafeWindow.onbeforeunload = null;
			if(!FireFox)
			{
				delete document.write;
				document.write('<html><head></head><body></body></html>');
				document.close();
			}
			else
			{
				document.replaceChild(document.importNode(document.implementation.createHTMLDocument("").documentElement, true), document.documentElement);
			}
		}
		if (ext_list.indexOf(i.src.split('.').pop().split('?')[0].toLowerCase()) >= 0)
		{
			console.warn("What we found is not an image");
			return false;
		}
		clr_pgn();
		ws();
		document.head.innerHTML = "";
		sanitize();
		window.removeEventListener('beforescriptexecute', onscript, true);
		makeimage();
	}
	else // try again
	{
		//console.warn("Didnt find image, trying again in " + timeout + " ms");
		if(tb){clearTimeout(tb);}
		tb = setTimeout(function() { console.warn("Didnt find image, waited " + timeout + " ms to try again. page: " + window.location.href); tb=0; timeout*=2; i=0; makeworld(); }, timeout);
	}
}

function changecursor()
{
	i.style.margin = "auto";
	if(!rescaled && (((i.naturalHeight / window.devicePixelRatio).toFixed() == window.innerHeight && (i.naturalWidth / window.devicePixelRatio).toFixed() <= window.innerWidth) || ((i.naturalHeight / window.devicePixelRatio).toFixed() <= window.innerHeight && (i.naturalWidth / window.devicePixelRatio).toFixed() == window.innerWidth))) // one img dimension is equal to screen and other is the same or less than the screen
	{
		i.style.cursor = "";
	}
	else if((i.naturalHeight / window.devicePixelRatio).toFixed() > window.innerHeight || (i.naturalWidth / window.devicePixelRatio).toFixed() > window.innerWidth) // at least one img dimenion is bigger than the screen
	{
		if(rescaled)
		{
			i.style.cursor = "-moz-zoom-in";
			i.style.cursor = "-webkit-zoom-in";
		}
		else
		{
			i.style.cursor = "-moz-zoom-out";
			i.style.cursor = "-webkit-zoom-out";
			if((i.naturalHeight / window.devicePixelRatio).toFixed() > window.innerHeight) // image pushing out-of-screen fix
			{
				i.style.margin = "0px auto";
			}
		}
	}
	else
	{
		if(rescaled)
		{
			i.style.cursor = "-moz-zoom-out";
			i.style.cursor = "-webkit-zoom-out";
		}
		else
		{
			i.style.cursor = "-moz-zoom-in";
			i.style.cursor = "-webkit-zoom-in";
		}
	}
}

function rescale(event)
{
	if(rescaled)
	{
		rescaled = false;
		var scale,ex,ey;
		if(event)
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
			ex -= i.offsetLeft;
			ey -= i.offsetTop;
			scale = Math.min((window.innerWidth / (i.naturalWidth / window.devicePixelRatio).toFixed()), (window.innerHeight / (i.naturalHeight / window.devicePixelRatio).toFixed()));
		}
		i.style.width = (i.naturalWidth / window.devicePixelRatio).toFixed() + "px";
		i.style.height = (i.naturalHeight / window.devicePixelRatio).toFixed() + "px";
		changecursor();
		if(event)
		{
			window.scrollTo(ex / scale - window.innerWidth / 2, ey / scale - window.innerHeight / 2);
		}
	}
	else
	{
		i.style.width = (i.naturalWidth / window.devicePixelRatio).toFixed() + "px";
		i.style.height = (i.naturalHeight / window.devicePixelRatio).toFixed() + "px";
		if((i.naturalWidth / window.devicePixelRatio).toFixed() != window.innerWidth)
		{
			i.style.width = window.innerWidth + "px";
			i.style.height = "";
			rescaled = true;
		}
		
		if((i.height > window.innerHeight) || (i.width > window.innerWidth))
		{
			i.style.width = (i.naturalWidth / window.devicePixelRatio).toFixed() + "px";
			i.style.height = (i.naturalHeight / window.devicePixelRatio).toFixed() + "px";
			if((i.naturalHeight / window.devicePixelRatio).toFixed() != window.innerHeight)
			{
				i.style.height = window.innerHeight + "px";
				i.style.width = "";
				rescaled = true;
			}
		}
		changecursor();
	}
}

var ARC = 0;
function autoresize()
{
	if(i.naturalWidth)
	{
		var title = i.src.substr(i.src.lastIndexOf("/")+1);
		if(title.indexOf("?") != -1)
		{
			title = title.substr(0, title.indexOf("?"));
		}
		document.title = title + " (" + i.naturalWidth + "x" + i.naturalHeight + ")"; // title
		var link = protected_createElement('link');
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = i.src;
		document.getElementsByTagName('head')[0].appendChild(link);
		rescaled = true;rescale(0); // to original size in pixels
		if(cfg_fitWH && i.height > window.innerHeight && i.width > window.innerWidth) // both scrollbars
		{
			rescale(0);
		}
		else if(cfg_fitB && (i.height > window.innerHeight || i.width > window.innerWidth)) // one scrollbar
		{
			rescale(0);
		}
		else if(cfg_fitS && i.height <= window.innerHeight && i.width <= window.innerWidth) // no scrollbars
		{
			rescale(0);
		}
		if(cfg_js){eval(cfg_js);}
	}
	else
	{
		ARC++;
		if(ARC == 25 || ARC == 250 || ARC == 750)
		{
			i.src = i.src; // lol fix
		}
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
		DOM_VK_P: 80,
		DOM_VK_Q: 81,
		DOM_VK_R: 82,
		DOM_VK_S: 83,
		DOM_VK_W: 87,
		DOM_VK_NUMPAD2: 98,
		DOM_VK_NUMPAD4: 100,
		DOM_VK_NUMPAD5: 101,
		DOM_VK_NUMPAD6: 102,
		DOM_VK_NUMPAD8: 104,
		DOM_VK_F5: 116
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

	if(b.ctrlKey && a == KeyEvent.DOM_VK_S)
	{
		cancelEvent(b);
		if(i)
		{
			a = protected_createElement("a");
			a.href = i.src;
			a.download = ""; // HTML5
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		}
		return;
	}
	if (b.altKey || b.metaKey || (b.ctrlKey && a != KeyEvent.DOM_VK_SPACE && a != KeyEvent.DOM_VK_F5 && a != KeyEvent.DOM_VK_R))
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
	case KeyEvent.DOM_VK_P:
		if(i && !FireFox) // Chrome nosave bug
		{
			window.location.href = "https://gist.github.com/Owyn/8553d7953d948228e312";
		}
		else
		{
			cfg();
		}
		cancelEvent(b);
		break;
	case KeyEvent.DOM_VK_R:
		if(!b.ctrlKey)
		{
			document.cookie= "hji=" + window.location.href;
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
			GM.setValue("js", q("#hji_cfg_6_js").value);
			alert("Configuration Saved");
			if(q("#hji_cfg_2_bgclr").value){document.body.bgColor = q("#hji_cfg_2_bgclr").value;}else{document.body.removeAttribute("bgColor");}
		}
		if(i && i.src){i.removeEventListener("click", rescale, true);}
		window.removeEventListener("keydown", onkeydown, true);
		document.head.innerHTML = "";
		document.body.innerHTML = "";
		ws();
		var div = protected_createElement("div");
		div.style.margin = "11% auto";
		div.style.width = "444px";
		div.style.border = "solid 1px black";
		div.style.background = "silver";
		div.innerHTML = "<b><center>Configuration</center></b><br><input id='hji_cfg_1_direct' type='checkbox'> Open images directly with browser"
		+ "<br><br><input id='hji_cfg_2_bgclr' type='text' size='6'> Background color (empty = default)"
		+ "<br><br>Fit to window images:"
		+ "<br><br><input id='hji_cfg_3_fitWH' type='checkbox'> Larger than window both vertically and horizontally"
		+ "<br><br><input id='hji_cfg_4_fitB' type='checkbox'> Larger than window either vertically or horizontally"
		+ "<br><br><input id='hji_cfg_5_fitS' type='checkbox'> Smaller than window"
		+ "<br><br><center>Custom JS Action:<textarea id='hji_cfg_6_js' style='margin: 0px; width: 400px; height: 50px;'></textarea>"
		+ "<br><input id='hji_cfg_save' type='button' value='Save configuration'></center>";
		document.body.appendChild(div);
		q("#hji_cfg_1_direct").checked = cfg_direct;
		q("#hji_cfg_2_bgclr").value = cfg_bgclr;
		q("#hji_cfg_3_fitWH").checked = cfg_fitWH;
		q("#hji_cfg_4_fitB").checked = cfg_fitB;
		q("#hji_cfg_5_fitS").checked = cfg_fitS;
		q("#hji_cfg_6_js").value = cfg_js;
		q("#hji_cfg_save").addEventListener("click", saveCfg, true);
	}
	else
	{
		alert("Sorry, Chrome userscripts in native mode can't have configurations! Install TamperMonkey (Beta) extension. (it's very good)");
	}
}

if (typeof GM === 'undefined') // PRE GM4
{
	GM = {};
	GM.getValue = GM_getValue;
	GM.setValue = GM_setValue;
}

try
{
	eval(
	'async function loadCfg()'+
	'{'+
		'if (typeof GM.getValue !== "undefined")'+
		'{'+
			'cfg_direct = await GM.getValue("directImage", false);'+
			'cfg_bgclr = await GM.getValue("bgColor", "grey");'+
			'cfg_fitWH = await GM.getValue("fitWH", true);'+
			'cfg_fitB = await GM.getValue("fitB", false);'+
			'cfg_fitS = await GM.getValue("fitS", true);'+
			'cfg_js = await GM.getValue("js", "");'+
		'}'+
	'}'
	);
}
catch(e) // PRE FireFox 53
{
	console.warn("Handy Image: Your browser is too old, please update it.");
	function loadCfg()
	{
		if (typeof GM.getValue !== "undefined")
		{
			cfg_direct = GM.getValue("directImage", false);
			cfg_bgclr = GM.getValue("bgColor", "grey");
			cfg_fitWH = GM.getValue("fitWH", true);
			cfg_fitB = GM.getValue("fitB", false);
			cfg_fitS = GM.getValue("fitS", true);
			cfg_js = GM.getValue("js", "");
		}
	}
}

loadCfg();
