// ==UserScript==
// @name		Handy Image
// @version		2016.03.20
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
// @grant		GM_getValue
// @grant		GM_setValue
// @grant		GM_registerMenuCommand
// @grant		GM_unregisterMenuCommand
// @grant		unsafeWindow
// @match		https://gist.github.com/Owyn/8553d7953d948228e312
// @match		*://www.imagebam.com/image*
// @match		*://imgchili.net/show*
// @match		*://imgbox.com/*
// @match		*://*.imagetwist.com/*/*
// @match		*://*.imagevenue.com/img.php?*
// @match		*://*.imageshack.com/i/*
// @match		*://*.imageshack.com/f/*
// @match		*://imagepix.org/image*
// @match		*://image2you.ru/*/*/
// @match		*://imageban.ru/show*
// @match		*://fastpic.ru/view*
// @match		*://www.pixhost.org/show*
// @match		*://*.picpicture.com/share.php?id=*
// @match		*://*.pic5you.ru/*/*/
// @match		*://*.tinypic.com/view*
// @match		*://radical-foto.ru/*
// @match		*://radikal-foto.ru/*
// @match		*://radikal.ru/*
// @match		*://f-page.ru/*
// @match		*://f-picture.net/*
// @match		*://www.stooorage.com/show*
// @match		*://*.pimpandhost.com/image*
// @match		*://*.pixroute.com/*.html
// @match		*://*.piccash.net/*/*/
// @exclude		http://piccash.net/cabinets/*
// @exclude		http://www.piccash.net/cabinets/*
// @match		*://*.picforall.ru/*/*/
// @match		*://*.imagecurl.com/view*
// @match		*://*.imagecurl.org/view*
// @match		*://*.euro-pic.eu/*share*
// @match		*://*.imagescream.com/?v=*
// @match		*://*.imagescream.com/img/*
// @match		*://*.picturescream.asia/*
// @match		*://*.xxxhost.me/view*
// @match		*://*.imadul.com/?*
// @match		*://*.d69.in/?*
// @match		*://postimg.org/image*
// @match		*://*.niceimage.pl/*.html
// @match		*://*.picbank.pl/*.html
// @match		*://*.pics-money.ru/*
// @match		*://*.freeimgup.com/*.*
// @match		*://imgtiger.com/view*
// @match		*://*.imgspice.com/*.html
// @match		*://*.ruleimg.com/img*
// @match		*://*.picage.ru/*/*
// @match		*://*.imgserve.net/img*
// @match		*://*.images-host.biz/*/*
// @match		*://*.imgfantasy.com/*
// @match		*://*.platimzafoto.ru/full/
// @match		*://*.platimzafoto.ru/*.html
// @match		*://*.imageontime.com/img*
// @match		*://*.pic2profit.com/*/*
// @exclude		http://pic2profit.com/cabinet/*
// @exclude		http://www.pic2profit.com/cabinet/*
// @match		*://imgdino.com/view*
// @match		*://*.anonpic.com/?v=*
// @match		*://*.pic-money.ru/*.html
// @match		*://*.pic-money.ru/full/
// @match		*://*.imgcandy.net/img*
// @match		*://*.imagecorn.com/img*
// @match		*://*.imgrill.com/img*
// @match		*://imgbar.net/*.html
// @match		*://*.imagefolks.com/img*
// @match		*://imagepicsa.com/img*
// @match		*://*.imgbunk.com/image*
// @match		*://*.pzy.be/v*
// @match		*://www.turboimagehost.com/p*
// @match		*://*.subirimagenes.com/*.html
// @match		*://*.screenlist.ru/details.php?image_id=*
// @match		*://qrrro.com/images*
// @match		*://imgmade.com/images*
// @match		*://*.imgnip.com/view*
// @match		*://www.pic-upload.de/view*
// @match		*://picshare.geenza.com/pics*
// @match		*://www.imgbabes.com/*/*.htm*
// @match		*://*.goimagehost.com/xxx/*.*
// @exclude		http://goimagehost.com/xxx/?v=*
// @exclude		http://www.goimagehost.com/xxx/?v=*
// @match		*://ibunker.us/f*
// @match		*://ichan.org/image.php?path=*
// @match		*://*.imagearn.com/*
// @match		*://www.dumppix.com/view*
// @match		*://www.bilder-upload.eu/show*
// @match		*://www.bilder-hochladen.net/file*
// @match		*://www.bild.me/bild.php?*
// @match		*://www.imagesnake.com/show*
// @match		*://www.imagesnake.com/img*
// @match		*://www.imagesnake.com/view*
// @match		*://www.freebunker.com/show*
// @match		*://www.freebunker.com/img*
// @match		*://www.freebunker.com/view*
// @match		*://bayimg.com/*
// @match		*://*.directupload.net/file*
// @match		*://*.imgurban.info/?*
// @match		*://*.imagecherry.com/*
// @match		*://funkyimg.com/view*
// @match		*://*.abload.de/image.php?*
// @match		*://*.picfox.org/share*
// @match		*://*.pixup.us/img-*
// @match		*://*.imgtube.net/img-*
// @match		*://*.imgcorn.com/img-*
// @match		*://*.imagecarry.com/*/*
// @match		*://*.imagedunk.com/*/*
// @match		*://*.imageswitch.com/*/*
// @match		*://*.piclambo.net/*/*
// @match		*://*.picleet.com/*/*
// @match		*://*.yankoimages.net/*/*
// @match		*://*.picturedip.com/*/*
// @match		*://*.croftimage.com/img-*
// @match		*://*.imagedecode.com/img-*
// @match		*://*.imagefruit.com/img*
// @match		*://*.imagefruit.com/show*
// @match		*://*.hentai-hosting.com/view*
// @match		*://*.miragepics.com/view*
// @match		*://*.freeimagehosting.net/*
// @match		*://*.gratisimage.dk/share*
// @match		*://*.keptarolo.hu/*
// @match		*://www.uploadhouse.com/view*
// @match		*://*.dumpt.com/img/view*
// @match		*://imagezilla.net/show/*
// @match		*://*.imageup.ru/img*
// @match		*://*.casimages.com/photos/*/*/*
// @match		*://*.casimages.com/img*
// @match		*://*.cyberpics.net/p*
// @match		*://*.vvcap.net/db/*
// @match		*://*.freeimage.us/share*
// @match		*://*.pix-x.net/*/*
// @match		*://*.shareimages.com/image*
// @match		*://www.xtremeshack.com/image/*
// @match		*://*.mrjh.org/gallery.php?entry=*
// @match		*://*.itmages.ru/image/view*
// @match		*://*.pohrani.com/*
// @match		*://shrani.najdi.si/*
// @match		*://*.iv.pl/view*
// @match		*://*.hostingfailov.com/photo/*
// @match		*://www.picamatic.com/view*
// @match		*://*.image18.org/show/*
// @match		*://*.pic4you.ru/*
// @match		*://picload.org/view*
// @match		*://*.moyophoto.com/share-*
// @match		*://www.imageboss.net/view*
// @match		*://*.thebestpichost.com/picture/*
// @match		*://*.lostpic.net/?photo=*
// @match		*://subefotos.com/ver/*
// @exclude		http://subefotos.com/ver/*#codigos
// @match		*://*.seedimage.com/P/show*
// @match		*://*.pixsor.com/share*
// @match		*://*.pixsor.com/XXX/share*
// @match		*://*.imgtheif.com/image/*
// @match		*://*.image-share.com/i*html
// @match		*://*.uaimage.com/*
// @match		*://*.npicture.net/share-*
// @match		*://*.img.acianetmedia.com/*
// @match		*://www.2imgs.com/*
// @match		*://*.overpic.net/view*
// @match		*://*.unlimitedpicture.com/?*
// @match		*://*.imagecross.com/*
// @match		*://*.mojoimage.com/*
// @match		*://www.use.com/*
// @match		*://www.hostingpics.net/view*
// @match		*://*.picp2.com/*/*/
// @exclude		http://*.picp2.com/cabinet/*
// @exclude		http://picp2.com/cabinet/*
// @match		*://*.myhotimage.com/img-*
// @match		*://*.pictureshoster.com/view*
// @match		*://*.imageshost.ru/photo*
// @match		*://*.imagestime.com/show*
// @match		*://sharenxs.com/view*
// @match		*://sharenxs.com/gallery/*/*
// @match		*://img4.imagetitan.com/img*
// @match		*://*.imagenpic.com/*
// @match		*://*.stuffed.ru/images*
// @match		*://*.wstaw.org/w/*
// @match		*://pikucha.ru/*
// @match		*://www.imagesocket.com/photos*
// @match		*://www.imagesocket.com/social*
// @match		*://imageban.net/show*
// @match		*://*.otofotki.pl/*
// @match		*://*.imgsin.com/view*
// @match		*://*.imagenetz.de/*
// @match		*://pix.toile-libre.org/?img*
// @match		*://uppix.com/s*
// @match		*://www.servimg.com/image*
// @match		*://*.upix.me/files/*
// @match		*://*.upix.me/i/v/?q=*
// @match		*://*.pixelup.net/image*
// @match		*://*.pixelup.net/image*
// @match		*://*.picsee.net/*
// @match		*://www.fotosik.pl/pokaz_obrazek/pelny*
// @match		*://imagebin.org/*
// @match		*://dumpyourphoto.com/photo*
// @match		*://*.depic.me/*
// @match		*://www.xup.in/dl*
// @match		*://*.foto-save.ru/full/
// @match		*://*.flickimg.com/*
// @match		*://*.sexseeimage.com/image*
// @match		*://*.hotchyx.com/d*
// @match		*://ima.so/*
// @match		*://*.kinkypic.net/show*
// @match		*://*.imageupper.com/i/*
// @match		*://*.mypixxx.lonestarnaughtygirls.com/?*
// @match		*://beeimg.com/view*
// @match		*://www.noelshack.com/*.*
// @match		*://www.zupmage.eu/image*
// @match		*://*.picstwist.com/img*
// @match		*://thumbsnap.com/*
// @match		*://*.deffe.com/image*
// @match		*://*.imgnook.com/*
// @match		*://*.imageno.com/*.html
// @match		*://*.imagehousing.com/image*
// @match		*://pixpipeline.com/d/*
// @match		*://www.picfront.org/d/*
// @match		*://*.theimghost.com/?*
// @match		*://*.imagehost.thasnasty.com/?*
// @match		*://*.imagilive.com/*.htm*
// @match		*://*.thepornfeeds.com/?*
// @match		*://*.piratescreen.com/*
// @match		*://*.hotimages.eu/img-*
// @match		*://*.picturevip.com/*
// @exclude		http://*.picturevip.com/x/clean/
// @match		*://*.emptypix.com/*
// @match		*://*.hornyimage.com/show*
// @match		*://img.3ezy.net/*.htm
// @match		*://*.xximg.net/img-*
// @match		*://*.zaslike.com/view*
// @match		*://www.zimagez.com/zimage*
// @match		*://*.someimage.com/*
// @exclude		*://*/someimage.com/compare/*
// @match		*://*.sexyxpixels.com/?v=*
// @match		*://*.postimg.net/view*
// @match		*://*.imagedomino.com/?v=*
// @match		*://*.pixhub.eu/images/show*
// @match		*://*.pictureturn.com/*.html
// @match		*://*.cubeupload.com/im/*
// @match		*://*.pixentral.com/show*
// @match		*://www.photo-host.org/view-image/*
// @match		*://www.fotoszok.pl/show*
// @match		*://*.imglink.ru/show*
// @match		*://zapodaj.net/*.html
// @match		*://www.pixic.ru/view*
// @match		*://www.imagesup.de/picture.php?code=*
// @match		*://www.pornbus.org/show*
// @match		*://www.bilder-space.de/bild-*
// @match		*://www.imgcarry.com/show*
// @match		*://*.saveimg.ru/show*
// @match		*://www.fotos-hochladen.net/view*
// @match		*://simplest-image-hosting.net/*
// @match		*://jpegbay.com/gallery/*.html
// @match		*://www.hostpic.org/view*
// @match		*://imagik.fr/view*
// @match		*://www.image-load.net/show*
// @match		*://*.sxpics.nl/img-*
// @match		*://*.sxpics.net/img-*
// @match		*://*.gallerycloud.net/img-*
// @match		*://*.tryimg.com/?v=*
// @match		*://img.deli.sh/view*
// @match		*://*.picturespk.pk/view*
// @match		*://*.imagevau.eu/view*
// @match		*://bilder.nixhelp.de/display-*
// @match		*://*.funextra.hostzi.com/view*
// @match		*://*.freakimage.com/view*
// @match		*://*.fotoo.pl/show.php?img=*.html
// @match		*://*.rapid-img.de/img.php?f=*
// @match		*://*.1pics.ru/view-*
// @match		*://*.1pics.ru//view-*
// @match		*://*.picthost.net/v.php?id=*
// @match		*://*.tinyphoto.net/show-image.php?id=*
// @match		*://*.ushareimg.com/view*
// @match		*://*.upload.djmaster.fr/?v=*
// @match		*://img.pereslavl.ru/share*
// @match		*://*.dwimg.com/view*
// @match		*://uprapide.com/* 
// @match		*://www.imageurlhost.com/view*
// @match		*://*.uploadyourimages.org/*.html
// @match		*://*.imagesup.net/* 
// @match		*://*.blackcatpix.com/v.php?id=*
// @match		*://*.picgarage.net/public/*
// @match		*://*.superkipje.com/view*
// @match		*://www.2i.sk/*
// @match		*://*.digitalfrenzy.net/share-*
// @match		*://www.imgadult.com/img-*
// @match		*://www.picshot.pl/public/view*
// @match		*://*.imagesmax.de/display-*
// @match		*://*.ifotos.pl/zobacz/*
// @match		*://*.voila.pl/index.php?f=*
// @match		*://www.zimage.fr/photo.php?id=*
// @match		*://www.zimage.fr/taillereel.php?id=*
// @match		*://ngarko.online.fr/view*
// @match		*://*.b4he.com/?v=*
// @match		*://*.fullimg.com/?v=*
// @match		*://*.oxily.com/?*
// @match		*://ghanaimages.co/?*
// @match		*://*.imgplus.info/view*
// @match		*://*.x45x.info/?*
// @match		*://firepic.org/?v=*
// @match		*://*.seeit.bz/*
// @match		*://savepic.org/*.htm
// @match		*://*.fastimages.ru/p*
// @match		*://ipic.su/?page=img&pic=*
// @match		*://*.jpegshare.net/*.html
// @match		*://*.overdream.cz/*
// @match		*://uppic.xgn.in.th/share*
// @match		*://*.fastpics.net/?v=*
// @match		*://www.ii4.ru/image-*
// @match		*://*.picuploader.de/*
// @match		*://pic.2x4.ru/share*
// @match		*://*.rupict.ru/share*
// @match		*://bildr.no/view*
// @match		*://*.photolair.net/images/*.html
// @match		*://*.tuspics.net/*
// @match		*://*.freepicninja.com/*
// @match		*://www.subeimagenes.com/img*
// @match		*://screenshot.ru/*
// @match		*://*.picrak.com/view*
// @match		*://*.picspider.de/show*
// @match		*://*.hostpix.de/show.php?img* 
// @match		*://*.ld-host.de/show*
// @match		*://*.freeuploadimages.org/view*
// @match		*://smages.com/?v=*
// @match		*://*.hostingkartinok.com/show-image.php?id=*
// @match		*://*.4put.ru/*max*
// @match		*://www.pictureshack.ru/view*
// @match		*://*.host99.byethost4.com/share.php?id=*
// @match		*://upanh.depmely.com/share*
// @match		*://*.eazypics.net/share*
// @match		*://*.image.sabyjai.org/share*
// @match		*://xtupload.com/share.php?id=*
// @match		*://t.williamgates.net/share*
// @match		*://photosex.biz/v.php?id=*
// @match		*://*.imageteam.org/img-*
// @match		*://*.fotoshara.pl/*.html
// @match		*://*.screencity.pl/*.html
// @match		*://*.x.thebestpichost.com/*
// @match		*://*.hostimage.ru/photo*
// @match		*://www.yourimage24.de/view*
// @match		*://www.loaditup.de/*.html
// @match		*://*.chickupload.com/show*
// @match		*://*.imgbox.de/show/img*
// @match		*://*.picszone.net/view*
// @match		*://*.images.share-films.net/view*
// @match		*://www.uploadking.biz/show*
// @match		*://*.roboimages.com/view*
// @match		*://foto.xhost.lv/show.php?img=*
// @match		*://*.imagefile.org/view*
// @match		*://*.onimage.net/show*
// @match		*://*.uploadagent.de/show*
// @match		*://*.bildjunkies.de/view*
// @match		*://*.uppic.ilovemyshopping.com/view*
// @match		*://*.foto.hcfor.pl/view*
// @match		*://*.up.daniyalonline.com/view*
// @match		*://*.slikosef.pajek.net/view*
// @match		*://*.imagegecko.com/view*
// @match		*://*.imagesticky.com/view*
// @match		*://*.pic.tooptarinha.com/view*
// @match		*://*.up.dlu3at.net/view*
// @match		*://*.poopr.org/view*
// @match		*://*.xp-images.hi2.ro/view*
// @match		*://*.dayzeddesigns.com/view*
// @match		*://*.freeimghosting.co.uk/view*
// @match		*://*.123poze.3x.ro/view*
// @match		*://*.photostand.co.za/view*
// @match		*://*.upload.removed.us/view*
// @match		*://*.images-hosting.tk/view*
// @match		*://*.hostimg.org/show-image.php?id=*
// @match		*://*.ximg.co.uk/view*
// @match		*://sl-images.ath.cx/view* 
// @match		*://*.picatom.com/* 
// @match		*://*.picmoe.net/d.php?id=* 
// @match		*://*.imagerule.com/view*
// @match		*://*.imagepussy.com/view*
// @match		*://*.7image.ru/v.php?id=*
// @match		*://www.picshare.ru/view*
// @match		*://*.bien-vue.com/view*
// @match		*://*.pics.tam.in.ua/showpic.php?p=*
// @match		*://*.pikczery.pl/view*
// @match		*://*.imghost.pl/index.php?id=*
// @match		*://*.udostepniaj.pl/view*
// @match		*://*.hosting-zdjec.pl/view*
// @match		*://*.zapisz.net/view*
// @match		*://www.imagehosting.cz/?v=* 
// @match		*://*.totalsimage.com/site/*
// @match		*://www.dumparump.com/view*
// @match		*://*.myxpic.com/showpic*
// @match		*://*.picness.com/image/*
// @match		*://h4z.it/View*
// @match		*://*.free-picload.de/pics/*
// @match		*://server5.upload69.net/view*
// @match		*://*.freeamateurteens.net/view*
// @match		*://*.gluner.de/*.html
// @match		*://*.fotoshack.us/foto*
// @match		*://*.xxx.image-server.ru/view*
// @match		*://*.image-server.ru/view*
// @match		*://orzz.us/image/*
// @match		*://images.orzzso.com/image/*
// @match		*://*.imagebin.ca/v/*
// @match		*://*.loadpix.de/*.html
// @match		*://www.public-pic.de/image/show/*
// @match		*://*.img-vidiklub.com/view*
// @match		*://*.9foto.ru/photo/*
// @match		*://uploads.ru/*
// @match		*://*.storepic.com/show*
// @match		*://*.img-uploader.de/p*
// @match		*://www.myimg.de/?img=*
// @match		*://*.root-space.eu/file*
// @match		*://photodok.com/*
// @match		*://*.hot-file.org/p*
// @match		*://*.hostarea.de/show*
// @match		*://*.pokazal.ru/v.php?id=*
// @match		*://mepic.ru/view/?id=*
// @match		*://*.imgcandy.com/p*
// @match		*://*.upislam.com/view*
// @match		*://*.ngarko.free.fr/view*
// @match		*://*.add-screen.com/view*
// @match		*://image.siroro.co.uk/p*
// @match		*://shell.na.tl/view*
// @match		*://thaisharing.online.fr/view*
// @match		*://*.images.collectiontricks.it/view*
// @match		*://*.my-collection.ru/view*
// @match		*://img.schattorie.nl/view*
// @match		*://*.forexrainbow.com/view*
// @match		*://*.imgupload.pl/view*
// @match		*://*.1y9y.com/view*
// @match		*://*.addpix.net/view*
// @match		*://www.myuploadedimages.com/view*
// @match		*://*.imageupload.sketchupthai.com/view*
// @match		*://multihoster.saxonia-fighter.de/view*
// @match		*://*.img.mdy.ro/?*
// @match		*://knecht.novarata.net/?*
// @match		*://*.plusgamer.ir/img4up/?*
// @match		*://*.tiny-img.com/?*
// @match		*://*.img.irandeliver.com/?*
// @match		*://img.solpie.net/?*
// @match		*://*.xferz.com/?*
// @match		*://*.lgeoo.us/?*
// @match		*://*.intermcafe.com/imgh/p*
// @match		*://*.ddpic.2tl.in/p*
// @match		*://*.img.wangolds.com/?*
// @match		*://*.fmsecond.com/p*
// @match		*://*.up.kfesfahan.com/?*
// @match		*://pic.freelian.com/?*
// @match		*://*.image.alesher.com/?*
// @match		*://ch.1798.in/?*
// @match		*://*.images.tapasilo.org/?*
// @match		*://upload.khontai.com/?*
// @match		*://pic.dnjc8.com/?*
// @match		*://*.image.pantyhosemania.info/?*
// @match		*://*.addyourpics.com/image*
// @match		*://*.imgnext.com/img-*
// @match		*://*.vippix.com/share*
// @match		*://*.qattach.com/p*
// @match		*://*.urimage.net/*
// @match		*://*.picfree.org/p*
// @match		*://*.imghs.teamfreewill.net/p*
// @match		*://*.videoforall.org/p*
// @match		*://*.host4images.com/view*
// @match		*://*.imgbank.cz/*
// @match		*://hosting.tidus.eu/?*
// @match		*://*.nyanimg.com/*
// @match		*://*.geekpics.in/*
// @match		*://*.liolink.com/*
// @match		*://*.imagesloading.altervista.org/?*
// @match		*://*.showmyimage.com/*
// @match		*://*.phpbbmods.it/immaggini* 
// @match		*://*.givme.de/*
// @match		*://upload.crazycraft.pl/*
// @match		*://*.mynameismiz.com/*
// @match		*://upload.supreme-elite.fr/?*
// @match		*://up.vn-hello.com/*
// @match		*://*.imagefluff.com/?*
// @match		*://*.fotohelp.kz/image*
// @match		https://*.myimg.me/*
// @match		*://*.upic.kz/*
// @match		*://imguploda.inamurajane.info/*
// @match		*://*.heberg-hush.org/?*
// @match		*://*.oltaciyukle.com/*
// @match		*://*.slikomanija.net/*
// @match		*://*.pichost.name/*
// @match		*://*.fsfiles.org/*
// @match		*://*.giveimg.net/*
// @match		*://*.evopikz.net/?*
// @match		*://www.sxfoto.com/*
// @match		*://*.upanh.biz/*
// @match		*://*.imagend.com/*
// @match		*://*.ilimdunyasi.net/?*
// @match		*://*.imagerocket.com/*
// @match		*://*.hyyathost.com/*
// @match		*://images.reptilescanada.com/*
// @match		*://*.imgcode.com/*
// @match		*://*.lakhdaria.net/imagebank/?*
// @match		*://*.webjardiner.com/hebergement_images_photos/image*
// @match		*://*.zagruzitfoto.com/*
// @match		*://*.intergranada.com/images/?*
// @match		*://*.partizansk.eu/foto/image*
// @match		*://*.xenopix.com/?*
// @match		*://*.wepic.ru/*
// @match		*://*.naeamysig.com/*
// @match		*://*.imgup.com/images*
// @match		*://*.picturepush.com/public*
// @match		*://*.upload-image.fr/*
// @match		*://*.picselio.com/*
// @match		*://*.t4up.net/*
// @match		*://*.iezz.com/?*
// @match		*://*.fileaimage.com/?*
// @match		*://*.images.gamewind.de/?*
// @match		https://*.images.baconbits.org/?*
// @match		*://*.kuvajako.com/*
// @match		*://*.upanh.ovo.vn/*
// @match		*://*.uploads.li/*
// @match		*://*.imagesaur.com/*
// @match		*://*.wrzucaj.net/*
// @match		*://*.api.picx.me/?*
// @match		*://*.heberge-images.com/?*
// @match		*://*.yehpic.com/*
// @match		*://*.joepler.com/*
// @match		*://www.image.kg/*
// @match		*://*.picshome.ru/?*
// @match		*://*.savemyimage.com/*
// @match		*://*.subeme.net/*
// @match		*://*.img.dramacafe.tv/*
// @match		*://*.hosturimage.com/img-*
// @match		*://*.pic-mir.ru/*/*
// @match		*://*.244pix.com/view*
// @match		*://*.imageview.me/view*
// @match		*://*.uploadimage.ro/view*
// @match		*://imgmaster.net/img-*
// @match		*://*.pixtreat.com/show.php*
// @match		*://*.imgflare.com/*/*
// @match		*://www.imagefap.com/photo/*
// @match		*://filefap.com/view*
// @match		*://imgur.com/*
// @exclude		*://imgur.com/*,*
// @match		*://motherless.com/*
// @match		*://*.imgult.com/img-*
// @match		*://*.xpic.biz/*/view*
// @match		*://pictraff.ru/*/*/
// @match		*://*.tumblr.com/image/*
// @match		*://*.imageporter.com/*
// @match		*://*.damimage.com/img-*
// @match		*://fapping.empornium.sx/*
// @match		*://*.imagehovel.com/view*
// @match		*://*.imgfap.net/img-*
// @match		*://*.img-zone.com/img-*
// @match		*://*.bulkimg.info/img-*
// @match		*://imgboxxx.com/view*
// @match		*://*.imghere.net/view*
// @match		*://*.imghash.com/?v=*
// @match		*://*.imagedomino.net/?v=*
// @match		*://*.sharepic.biz/show-image.php?id=*
// @match		*://f-lite.ru/*
// @match		*://*.pixel.so/*
// @match		*://*.picify.com/?v=*
// @match		*://img.titank.com/*
// @match		*://*.picturescream.com/*
// @match		*://*.imgdone.com/view*
// @match		*://*.imghoney.com/view*
// @match		*://*.4ufrom.me/view*
// @match		*://www.2i.cz/*
// @match		*://awesomescreenshot.com/*
// @match		*://*.istoreimg.com/i/*
// @match		*://*.imgcoin.net/img-*
// @match		*://*.08lkk.com/Image/img-*
// @match		*://*.flickr.com/photos/*/*/
// @exclude		/^https?://(www\.)?flickr\.com/photos/([^/]+)/(sets/.*|page.*|with.*|favorites.*)?$/
// @match		*://*.imgrex.com/view*
// @match		*://www.amateri.cz/g*/*
// @match		*://*.imgshow.me/*
// @match		*://*.wikipedia.org/wiki/*:*.jp*
// @match		*://*.wikipedia.org/wiki/*:*.png
// @match		*://*.wikimedia.org/wiki/File:*.jp*
// @match		*://*.wikimedia.org/wiki/File:*.pn*
// @match		*://*.dragimage.org/img-*
// @match		*://*.xxxscreens.com//img-*
// @match		*://*.trikyimg.com//img-*
// @match		*://*.trikyimg.com/img-*
// @match		*://*.pixpal.net/*.html
// @match		*://avenuexxx.com/*-*
// @match		*://www.bilderhoster.net/*.html
// @match		*://*.imgfun.biz/img-*
// @match		*://iceimg.com/*/*
// @match		*://*.dtpics.biz/img-*
// @match		*://*.xxxscreens.com/img-*
// @match		*://*.imgdope.com/view*
// @match		*://*.imagehost.eu/*
// @match		*://*.sexyimage.imagepool.in/share-*
// @match		*://*.storeimgs.net/img-*
// @match		*://*.imgpaying.com/*/*
// @match		*://*.aveimage.com/view*
// @match		*://*.fappic.com/*
// @match		*://*.imagenimage.com/*/*
// @match		*://*.adultur.com/img-*
// @match		*://*.imageshimage.com/*/*
// @match		*://www.urpichost.com/?v=*
// @match		*://*.imgswift.com/*/*
// @match		*://*.imageporn.eu/?v=*
// @match		https://500px.com/photo/*
// @match		*://*.gokoimage.com/img-*
// @match		*://*.greenpiccs.com/images/*.html
// @match		*://*.hostmat.eu/view*
// @match		*://*.image.adlock.in/img-*
// @match		*://*.photobucket.com/user/*/media/*.htm*
// @match		*://*.imagepool.in/share*
// @match		*://imgv.net/*.html
// @match		*://www.imgshots.com/img*
// @match		*://www.imgshots.com/show/*
// @match		*://*.3xplanet.com/view*
// @match		*://*.imgmega.com/*.html
// @match		*://*.imgsee.me/*
// @match		*://img.yt/img-*
// @match		*://*.payforpic.ru/*/*/
// @match		*://*.pic4cash.ru/*.html
// @match		*://*.pic4cash.ru/full/
// @match		*://*.imgchili.mcdir.ru/v*
// @match		*://*.keep4u.ru/full/*
// @match		*://*.imgfeel.com/img-*
// @match		*://*.pic.re/*.html
// @match		*://*.imagebucks.biz/*/*
// @match		*://*.freshpics.ru/*/*/
// @match		*://imglocker.com/*/*
// @match		*://imgspot.org/img*
// @match		*://picexposed.com/*.html
// @match		*://*.imgpapa.com/img-*
// @match		*://*.sexyimg.eu/img-*
// @match		*://*.imglemon.com/img-*
// @match		*://*.imgseeds.com/img-*
// @match		*://*.pronpic.org/*/*
// @match		*://prntscr.com/*
// @match		*://*.imgdream.net/view*
// @match		*://*.imgtab.net/*
// @match		*://*.madimage.org/img-*
// @match		*://*.kephost.com/image/*
// @match		*://i.ruspotting.net/image/*
// @match		*://*.gifyu.com/image/*
// @match		https://*.picr.ws/image/*
// @match		https://www.linkmypic.com/image/*
// @match		*://celebimg.com/image/*
// @match		*://*.sharepic.org/image/*
// @match		*://*.zuly.de/image/*
// @match		*://upload.vstanced.com/image/*
// @match		*://*.thro.bz/image/*
// @match		*://*.qoou.net/image/*
// @match		*://*.3intro.com/image/*
// @match		*://brightpic.tk/image/*
// @match		*://*.cweb-pix.com/image/*
// @match		*://*.gsmimagehost.com/image/*
// @match		*://hosting.webspell.fr/image/*
// @match		*://*.i-pict.ru/image/*
// @match		*://*.images.woh.to/image/*
// @match		*://*.imagesturk.net/image/*
// @match		*://*.imghaze.com/image/*
// @match		*://*.imgup.nl/image/*
// @match		*://*.kuvapankki.in/image/*
// @match		*://*.myimageshare.com/image/*
// @match		*://*.nium.co/image/*
// @match		*://pix.hostux.net/image/*
// @match		*://*.pixit.hu/image/*
// @match		*://*.pixoload.de/image/*
// @match		*://*.primeimg.co/image/*
// @match		*://*.planet-upload.eu/image/*
// @match		*://www.imagestorming.com/image/*
// @match		*://pic.xtream-reallife.de/image/*
// @match		*://*.ultraimg.com/image/*
// @match		*://demo.chevereto.com/image/*
// @match		*://*.ownimg.com/image/*
// @match		*://*.6on9.com/img/*
// @match		*://imgclick.net/*/*
// @match		*://*.gogoimage.org/img-*
// @match		*://imgmoney.ru/*.html
// @match		*://imgmoney.ru/full/
// @match		*://www.imgili.com/view*
// @match		*://*.imglooks.com/img-*
// @match		*://*.bababian.com/phoinfo/*
// @match		*://*.imageeer.com/*
// @match		*://*.xxximagenow.com/img-*
// @match		*://*.imgreserve.com/?v=*
// @match		*://*.you-logo.ru/show*
// @match		*://*.ticklebytes.com/?v=*
// @match		*://*.uploadimagex.com/view*
// @match		*://*.powerlogo.ru/show*
// @match		*://*.rupix.org/view*
// @match		*://youpicture.org/?v=*
// @match		*://*.all-poster.ru/?v=*
// @match		*://*.picbug.ru/share*
// @match		*://*.etc.imgextra.com//img-*
// @match		*://*.sxpix.nl/img-*
// @match		*://*.xxxupload.org/img-*
// @match		*://*.hotflick.net/u/v/?q=*
// @match		*://*.hotflick.net/f/v/?q=*
// @match		*://*.fotooplata.ru/*.html
// @match		*://*.fotooplata.ru/full/
// @match		*://vavvi.com/images/*.html
// @match		*://*.viewvee.com/img-*
// @match		*://*.deviantart.com/art/*
// @match		*://*.myceleb.net/u/v/?q=*
// @match		*://*.imageblinks.com/img-*
// @match		*://*.gelbooru.com/index.php?page=post&s=view&id=*
// @match		*://danbooru.donmai.us/posts/*
// @match		*://konachan.com/post/show/*
// @match		*://konachan.net/post/show/*
// @match		https://yande.re/post/show/*
// @match		https://chan.sankakucomplex.com/*post/show/*
// @match		https://yande.re/post/show/*
// @match		*://www.zerochan.net/*
// @match		*://*.imgrock.net/*/*.html
// @match		*://*.imagedoza.com/i.cc/i/*
// @match		*://imgzap.com/view*
// @match		*://*.funimg.net/img-*
// @match		*://*.olivepix.com/view/*
// @match		*://*.imageontime.org/img-*
// @match		*://*.ocaload.com/img-*
// @match		*://*.imgget.net/img-*
// @match		*://*.imgs.it/img-*
// @match		*://*.imghit.com/img-*
// @match		*://*.imagewow.eu/img-*
// @match		*://*.imageon.org/img-*
// @match		*://*.imgcentral.com/view*
// @match		*://*.imgtrex.com/*/*
// @match		*://*.imgdoggy.com/img-*
// @match		*://*.chronos.to/*
// @match		*://picspornfree.me/img-*
// @match		*://*.pic-you.com/p*
// @match		*://*.imageback.info/view*
// @match		*://*.image-bugs.com/*mage/*
// @match		*://*.pixhst.com/pictures/*
// @match		*://*.imgdrive.net/img-*
// @match		*://*.fapic.me/img-*
// @match		*://*.gallerynova.se/site/v/*
// @match		*://*.image.re/img-*
// @match		*://*.uplimg.com/img-*
// @match		*://www.pixiv.net/member_illust.php?mode=medium&illust_id=*
// @match		*://*.imagelike.org/?v=*
// @match		*://*.scrin.org/?v=*
// @match		*://*.imghost.us.to/xxx/?v=*
// @match		*://*.thumbnailus.com/img-*
// @match		*://*.nimplus.com/img-*
// @match		*://www.imgtaxi.com/img-*
// @match		*://*.imgstudio.org/img-*
// @match		*://goimge.com/img-*
// @match		*://*.shareimg.fr/img-*
// @match		*://*.safeimage.biz/image/*
// @match		*://*.picclick.ru/*/*/
// @match		*://*.fixxpix.ru/*/*/
// @match		*://*.imgclover.com/image/*
// @match		*://*.imgz.pw/share-*
// @match		*://*.imgking.co/img*
// @match		*://ask.fm/*/photo/original
// @match		*://cuteimg.cc/*
// @match		*://*.newimagepost.com/img-*
// @match		*://*.imageho.me/img-*
// @match		*://myimg.club/*
// @match		*://*.imgease.re/img-*
// @match		*://www.hotimage.uk/img-*
// @match		*://imgview.net/*/*.html
// @match		*://*.picsnova.net/img-*
// @match		*://*.holdthemoan.net/x/share-*
// @match		*://*.10.imageleon.com/i-*
// @match		https://www.dropbox.com/s/*/*
// @match		*://imgor.net/img-*
// @match		*://*.imagedax.net/*/*.html
// @match		*://*.ipicsharer.com/img-*
// @match		*://*.imgwet.com/img-*
// @match		*://*.imgwel.com/*
// @match		*://*.imgmonkey.com/*/*.html
// @match		https://*.img.bi/*
// @match		*://*.fapat.me/img-*
// @match		*://photo.weibo.com/*/large/photo_id/*
// @match		*://*.crazyimg.com/images/*.html
// @match		*://imgbe.com/img-*
// @match		*://*.imgextra.uk/image/*
// @match		*://*.extraimago.com/image/*
// @match		*://*.fireimg.cc/img-*
// @match		*://www.pornimagex.com/image/*
// @match		*://*.porno-pirat.ru/img-*
// @match		*://*.imgdrive.co/*/*
// @match		*://*.imgboom.net/img-*
// @match		*://*.img24.org/*.html
// @match		*://*.project-photo.net/img-*
// @match		*://*.img-planet.com/img-*
// @match		*://*.greasyimage.com/img-*
// @match		*://*.imgbb.net/v-*
// @match		*://*.picangel.com/?v=*
// @match		*://*.picangel.com/?p=*
// @match		*://*.photolot.org/img-*
// @match		*://*.pic-maniac.com/*
// @match		https://*.instagram.com/p/*
// @exclude		https://instagram.com/p/*/embed/*
// @exclude		https://*.instagram.com/p/*/embed/*
// @match		*://*.picbee.pw/image/*
// @match		*://*.imgglobe.eu/img-*
// @match		*://*.imgsay.com/?v=*
// @match		*://*.imgsmile.com/?v=*
// @match		*://*.balkanelite.org/MultiHoster/view*
// @match		*://*.shareimgs.com/show*
// @match		https://twitter.com/*/photo/*
// @match		*://*.icezap.com/img-*
// @match		*://*.imgtea.com/img-*
// @match		*://*.imgsen.se/img-*
// @match		*://*.rapidimg.net/img-*
// @match		*://foxyimg.link/*
// @match		*://*.imgflash.net/img-*
// @match		*://*.sexyimagexxx.com/img-*
// @match		*://*.imgtornado.com/img-*
// @match		*://*.img-365.com/image/*
// @match		*://*.imgbonk.com/image/*
// @match		*://*.imageyo.ga/image/*
// @match		*://*.daily-img.com/image/*
// @match		*://*.imgcool.net/?*
// @match		*://*.imageab.com/image/*
// @match		*://*.erimge.com/img-*
// @match		*://*.img-pay.com/img-*
// @match		*://*.imgtrial.com/img-*
// @match		*://imgtown.net/*
// @match		*://ameblo.jp/*/image-*
// @match		*://*.loftlm.ru/img-*
// @match		*://*.imgmag.co/img-*
// @match		*://*.imgdragon.com/*/*.html
// @match		*://ftop.ru/*/*
// @match		*://*.imgurx.net/share*
// @match		*://savepic.ru/*.htm
// @match		*://*.imgmaid.net/*
// @match		*://*.imggold.org/*/*.html
// @match		*://*.imgcredit.xyz/img-*
// @match		*://*.dimtus.com/img-*
// @match		*://*.coreimg.net/*
// @match		*://sfwimg.com/image/*
// @match		*://*.imgtiger.org/*/*
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
var cfg_fitWH = true;
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
	loadCfg();
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

function find_text_in_scripts(a, b, o, h)
{
	var s = document.getElementsByTagName("script");
	for(var c=0;c<s.length;c++) 
	{
		if(h && s[c].innerHTML.indexOf(h) != -1){s[c].innerHTML = s[c].innerHTML.substring(0, s[c].innerHTML.indexOf(h));}
		var start_pos = o ? s[c].innerHTML.indexOf(a) : s[c].innerHTML.lastIndexOf(a);
		if(start_pos == -1){continue;}
		start_pos += a.length;
		i = s[c];
		i.src = decodeURIComponent(s[c].innerHTML.substring(start_pos,s[c].innerHTML.indexOf(b,start_pos)).split("\\").join("")); // split\join fix for stupidfox GreaseMonkey
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
	case "vvcap.net":
	case "simplest-image-hosting.net":
	case "hostimage.ru":
	case "gluner.de":
	case "imagebin.ca":
	case "iceimg.com":
	case "pics.tam.in.ua":
	case "pixhst.com":
		i = q('img');
		break;
	case "myceleb.net":
		i = q('img[id]');
		break;
	case "gallerynova.se":
		i = q('a[href*="' + iurl + '"]');
		if(i)
		{
			i.src = i.href;
		}
		break;
	case "tryimg.com":
		i = q('a img:not([href,"' + iurl + '"])');
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
			i = q('a[href*="?dl=1"]');
			if(i)
			{
				i.src = i.href;
			}
		}
		break;
	case "img.3ezy.net":
	case "image-bugs.com":
	case "imgclover.com":
	case "picbee.pw":
	case "demo.chevereto.com":	
	case "img-365.com":
	case "imgbonk.com":
	case "imageyo.ga":
	case "daily-img.com":
	case "celebimg.com":
	case "sfwimg.com":
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
	case "3intro.com":
	case "brightpic.tk":
	case "cweb-pix.com":
	case "gsmimagehost.com":
	case "hosting.webspell.fr":
	case "i-pict.ru":
	case "images.woh.to":
	case "imagesturk.net":
	case "imghaze.com":
	case "imgup.nl":
	case "kuvapankki.in":
	case "myimageshare.com":
	case "nium.co":
	case "pix.hostux.net":
	case "pixit.hu":
	case "pixoload.de":
	case "primeimg.co":
	case "planet-upload.eu":
	case "imagestorming.com":
	case "pic.xtream-reallife.de":
	case "ultraimg.com":
	case "ownimg.com":
	case "safeimage.biz":
	case "imagebam.com":
	case "twitter.com":
	case "500px.com":
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
			if((f && (f.content.indexOf("/a/") != -1 || f.content.indexOf("/gallery/") != -1) ) || i.content.indexOf("/images/logo") != -1)
			{
				return;
			}
			else
			{
				i.src = i.content;i.src = i.src.split('?')[0];
			}
		}
		break;
	case "prntscr.com":
		i = document.querySelector('meta[property="og:image"]');
		if(i)
		{
			i.src = i.content;
			if(FireFox)
			{
				i.src = "http://img.prntscr.com/img?url=" + i.src;
			}
		}
		break;
	case "ameblo.jp":
		j=true;
		i = q('img#imgItem');
		break;
	case "instagram.com":
		j = true;
		find_text_in_scripts('display_src":"', '"');
		if(i)
		{
			if(!find_text_in_scripts('is_video":true', ','))
			{
				i.src = i.src.replace(/\/p\d+x\d+?\//, '/');
			}
			else
			{
				i = null;
			}
		}
		break;
	case "flickr.com":
	case "secure.flickr.com":
		find_text_in_scripts('"url":"', '"', false, '"canComment"');
		break;
	case "pixiv.net":
		{
			i = q("img.original-image");
			if(i){i.src = i.dataset.src;}
		}
		break;
	case "chan.sankakucomplex.com":
		i = q('a[itemprop="contentUrl"]');
		if(i)
		{
			i.src = i.href;
		}
		break;
	case "imageshack.com":
		i = q('input[value*="' + iurl + '/f/"]');
		if(i){window.location.href = i.value.replace('/f/', '/i/');}
		i = q('img[data-width]');
		break;
	case "imgnook.com":
	case "h4z.it":
		i = document.images[2];
		if(i){i.src = i.parentNode.href;}
		break;
	case "dumpyourphoto.com":
		i = q('a img:not([alt])');
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
	case "imageban.ru":
	case "imageban.net":
	case "imagesnake.com":
	case "freebunker.com":
	case "imagefruit.com":
	case "imagestime.com":
	case "kinkypic.net":
	case "hornyimage.com":
	case "imgcarry.com":
	case "pornbus.org":
	case "fotoo.pl":
	case "picspider.de":
	case "hostpix.de":
	case "uploadking.biz":
	case "foto.xhost.lv":
	case "onimage.net":
	case "storepic.com":
	case "photodok.com":
	case "hostarea.de":
	case "pixtreat.com":
	case "imgshots.com":
	case "shareimgs.com":
		i = q('img#img_obj');
		break;
	case "pimpandhost.com":
	case "fastpic.ru":
	case "abload.de":
		i = document.body.querySelectorAll('img#image');
		if(i)
		{
			i = i[i.length-1];
		}
		break;
	case "pikucha.ru":
		i = q('img#image');
		j = true;
		break;
	case "bayimg.com":
	case "picgarage.net":
		i = q('img#mainImage');
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
	case "picpicture.com":
	case "picfox.org":
	case "freeimage.us":
	case "xxx.freeimage.us":
	case "pixsor.com":
	case "img.pereslavl.ru":
	case "digitalfrenzy.net":
	case "uppic.xgn.in.th":
	case "pic.2x4.ru":
	case "rupict.ru":
	case "host99.byethost4.com":
	case "upanh.depmely.com":
	case "eazypics.net":
	case "image.sabyjai.org":
	case "xtupload.com":
	case "t.williamgates.net":
	case "vippix.com":
	case "sexyimage.imagepool.in":
	case "imagepool.in":
	case "imgz.pw":
	case "holdthemoan.net":
	case "imgurx.net":
		//i = q('img#iimg');
		find_text_in_scripts("<img src='", "'");
		break;
	case "amateri.cz":
		if(find_text_in_scripts('var orig_url="', '"'))
		{
			i.src = i.src.replace('http://www.amateri.cz/orig.php?&img=', 'http://img2.amateri.cz/users/');
		}
		break;
	case "pix-x.net":
		i = q('td img[src*="thumb"]');
		if(i){i.src = i.src.replace('-thumb', '');i.src = i.src.replace('img_thumb', 'img_full');}
		break;
	case "pics-money.ru":
		i = q('img[src*="/full/"]');if(i){break;}
	case "pic5you.ru":
	case "pic4you.ru":
	case "picp2.com":
	case "picforall.ru":
	case "piccash.net":
	case "picage.ru":
	case "images-host.biz":
	case "pic2profit.com":
	case "pic-mir.ru":
	case "pictraff.ru":
	case "payforpic.ru":
	case "freshpics.ru":
	case "imglocker.com":
	case "picclick.ru":
	case "fixxpix.ru":
		i = q('img[src*="thumb"]');
		if(i){i.src = i.src.replace('-thumb', '');i.src = i.src.replace('img_thumb', 'img_full');i.src = i.src.replace('_thumb', '');}
		break;
	case "imagik.fr":
		i = q('img[src*="/uploads/"]');
		if(i){i.src = i.src.replace('thumb_', '');}
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
	case "bilder-space.de":
	case "imagesup.de":
		i = q('img.picture');
		break;
	case "lostpic.net":
		i = q('a[href*="/orig"]');
		if(i){i.src = i.href;}
		break;
	case "pix.toile-libre.org":
	case "photo-host.org":
	case "myxpic.com":
	case "picness.com":
		i = q('a[href*="original"]');
		if(i){i.src = i.href;}
		break;
	case "picsee.net":
		i = q('a[href*="/upload"]');
		if(i){i.src = i.href;}
		break;
	case "danbooru.donmai.us":
		i = q('a[href*="/data/"]');
		if(i){i.src = i.href;}
		break;
	case "totalsimage.com":
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
	case "imgv.net":
		i = q('a[href*="/img/"]');
		if(i){i.src = i.href;}
		break;
	case "freepicninja.com":
	case "x.thebestpichost.com":
		if(window.location.href.indexOf("ads-cookie.php") != -1)
		{
			i = q('a');
			if(i)
			{
				window.location.href = i.href;
			}
		}
		else
		{
			iurl += "$";
		}
		break;
	case "freepicninja.com$":
	case "uploadimage.ro":
		i = q('img[src*="img.php"]');
		break;
	case "imageno.com":
		i = q('img[src*="image.php"]');
		break;
	case "loadpix.de":
		i = q('img[src*="bild.php"]');
		break;
	case "imagebin.org":
	case "bildr.no":
		i = q('img[src*="image"]');
		break;
	case "iv.pl":
	case "imagevau.eu":
	case "funextra.hostzi.com":
	case "freakimage.com":
	case "imageurlhost.com":
	case "superkipje.com":
	case "yourimage24.de":
	case "ximg.co.uk":	
	case "sl-images.ath.cx":
	case "imagepussy.com": 
	case "bien-vue.com":
	case "pikczery.pl":
	case "hosting-zdjec.pl":
	case "upislam.com":
	case "add-screen.com":
	case "shell.na.tl":
	case "my-collection.ru":
	case "img.schattorie.nl":
	case "forexrainbow.com":
	case "imgupload.pl":
	case "addpix.net":
	case "myuploadedimages.com":
	case "imageupload.sketchupthai.com":
	case "multihoster.saxonia-fighter.de":
	case "imgdone.com":
	case "rupix.org":
	case "gelbooru.com":
	case "greenpiccs.com":
	case "imagelike.org":
	case "balkanelite.org":
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
	case "uppix.com":
		i = q('img[src*="/f"]');
		break;
	case "pictureshoster.com":
	case "zaslike.com":
	case "dwimg.com":
	case "uploadagent.de":
		i = q('a[href*="files/"]');
		if(i){i.src = i.href;}
		break;
	case "imgtheif.com":
	case "picthost.net":
	case "blackcatpix.com":
	case "photosex.biz":
		i = q('img[src*="/pic"]');
		break;
	case "pronpic.org":
		i = q('img[src*="/pic/"]');
		if(i){i.src = i.src.replace('th_', '');}
		break;
	case "d69.in":
	case "imadul.com":
		i = q('div.img_box a');
		if(i){i.src = i.href;}
		break;
	case "imgmega.com":
	case "pic.re":
	case "imgdrive.co":
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
	case "imageboss.net":
	case "mojoimage.com":
	case "imagecherry.com":
	case "6on9.com":
	case "10.imageleon.com":
	case "img4.imagetitan.com":
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
	case "seedimage.com":
	case "hotchyx.com":
	case "imagehousing.com":
	case "cubeupload.com":
	case "dumparump.com":
	case "uploads.ru":
	case "myimg.de":
	case "root-space.eu":
	case "pokazal.ru":
	case "mepic.ru":
	case "imagehovel.com":
	case "imgchili.mcdir.ru":
	case "depic.me":
	case "imagedoza.com":
		i = q('img[src*="' + iurl + '"]');
		break;
	case "postimg.org":
		i = q('img[src*="' + iurl + '"]');
		if(i && i.parentNode.href)
		{
			window.location.assign(i.parentNode.href);
			return;
		}
		break;
	case "ask.fm":
	case "uaimage.com":
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
	case "pic4cash.ru":
	case "imgmoney.ru":
	case "fotooplata.ru":
	case "img24.org":
		var f = document.getElementsByTagName("button");
		if(f.length)
		{
			f[0].click();
			break;
		}
		dp=true;
		i = q('img[src*="/pic.jpeg"]');
		break;
	case "freeimagehosting.net":
	case "uploadhouse.com":
	case "pixhub.eu":
	case "fotos-hochladen.net":
	case "voila.pl":
	case "ld-host.de":
	case "picshare.ru":
	case "imgtab.net":
		i = q('img[src*="uploads/"]');
		break;
	case "xtremeshack.com":
		i = q('img[src*="/photos/"]');
		break;
	case "images.orzzso.com":
	case "picturepush.com":
		i = q('img[src*="/photo/"]');
		break;
	case "keptarolo.hu":
		i = q('img[src*="/kep/"]');
		break;
	case "servimg.com":
		i = q('img[src*="/u/"]');
		break;
	case "imagearn.com":
		i = q('img[src*="/imags/"]');
		break;
	case "ichan.org":
		i = q('img[src*="/src/"]');
		break;
	case "picmoe.net": 
		i = q('img[src*="src/"]');
		break;
	case "ibunker.us":
	case "hostingpics.net":
	case "pixentral.com":
	case "7image.ru":
	case "free-picload.de":
		i = q('img[src*="pics/"]');
		break;
	case "imgtiger.org":
		i = q('form');
		if(i)
		{
			i.submit();
			break;
		}
	case "imageeer.com":
	case "cuteimg.cc":
		i = q('input[type="button"]');
		if(i)
		{
			i.click();
			break;
		}
	case "imagebucks.biz":
	case "imgrock.net":
	case "myimg.club":
	case "imgview.net":
	case "imgwel.com":
	case "imgmonkey.com":
	case "imgdragon.com":
	case "imggold.org":
	case "imgtown.net":
		j = true;
		i = q("input[type='submit']:not([style='display:none;']):not([value*='eply'])");
		dp=true;
		if(i) 
		{
			i.click();
			break;
		}
	case "casimages.com":
	case "thebestpichost.com":
	case "deffe.com":
	case "ifotos.pl":
	case "subeimagenes.com":
	case "x.thebestpichost.com$":
	case "imgcode.com":
	case "pixpal.net":
	case "imgpaying.com":
	case "picexposed.com":
		i = q('img[src*="/img/"]');
		break;
	case "imagenetz.de":
		i = q('img[src*="/img"]');
		break;
	case "picatom.com":
		i = q('img[src*="img/"]'); 
		break;
	case "orzz.us":
		i = q('img[src*="/img/"][title]'); 
		break;
	case "img.bi":
		j = true;
		i = q('img[ng-src]'); 
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
	case "4ufrom.me":
	case "imgswift.com":
		i = q('img[src*="/files/"]');
		break;
	case "image18.org":
	case "imguploda.inamurajane.info":
		i = q('img[src*="/file/"]');
		break;
	case "imagepix.org":
	case "hostingfailov.com":
	case "zimagez.com":
	case "chickupload.com":
		i = q('img[src*="/full/"]');
		break;
	case "picbank.pl":
	case "niceimage.pl":
	case "screencity.pl":
	case "fotoshara.pl":
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
	case "imgbar.net":
	case "olivepix.com":
		i = q('img[src*="view/"]');
		break;
	case "imgking.co":
		if(window.location.href.indexOf("img3") != -1)
		{
			window.location.href = window.location.href.replace("img3","img4");
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
	case "imagepicsa.com":
	case "imagefolks.com":
	case "imgrill.com":
	case "imgcandy.net":
	case "imagecorn.com":
	case "uploadyourimages.org":
	case "imageteam.org":
	case "imgnext.com":
	case "hosturimage.com":
	case "imgmaster.net":
	case "imgcoin.net":
	case "dtpics.biz":
	case "gokoimage.com":
	case "pixup.us":
	case "imgcorn.com":
	case "xximg.net":
	case "x.xximg.net":
	case "sxpics.nl":
	case "sxpics.net":
	case "sxpix.nl":
	case "bulkimg.info":
	case "img-zone.com":
	case "trikyimg.com":
	case "image.adlock.in":
	case "img.yt":
	case "imgfeel.com":
	case "xxxscreens.com":
	case "imgpapa.com":
	case "imglemon.com":
	case "xxximagenow.com":
	case "etc.imgextra.com":
	case "i.sxpics.nl":
	case "viewvee.com":
	case "funimg.net":
	case "imageon.org":
	case "nimplus.com":
	case "imag.nimplus.com":
	case "shareimg.fr":
	case "newimagepost.com":
	case "imgease.re":
	case "ipicsharer.com":
	case "fapat.me":
	case "imgbe.com":
	case "fireimg.cc":
	case "porno-pirat.ru":
	case "thumbnailus.com":		
	case "imgboom.net":
	case "project-photo.net":
	case "img-planet.com":
	case "greasyimage.com":
	case "imgbb.net":
	case "imgtea.com":
	case "imgsen.se":
	case "rapidimg.net":
	case "imgflash.net":
	case "sexyimagexxx.com":
	case "imgtornado.com":
	case "erimge.com":
	case "img-pay.com":	
	case "loftlm.ru":
		dp=true;
		var f = document.getElementsByTagName("input");
		if(f.length)
		{
			f[f.length-1].click();
		}
	case "myhotimage.com":
	case "picstwist.com":
	case "hotimages.eu":
	case "fotoszok.pl":
	case "gallerycloud.net":
	case "imgult.com":
	case "istoreimg.com":
	case "08lkk.com":	
	case "dragimage.org":
	case "imgfun.biz":
	case "storeimgs.net":
	case "damimage.com":
	case "adultur.com":
	case "croftimage.com":
	case "imagedecode.com":
	case "imgfap.net":
	case "imgspot.org":
	case "sexyimg.eu":
	case "madimage.org":
	case "gogoimage.org":
	case "xxxupload.org":
	case "imageblinks.com":
	case "imglooks.com":
	case "imageontime.org":
	case "ocaload.com":
	case "imgget.net":
	case "imgs.it":
	case "imagewow.eu":
	case "imgdoggy.com":
	case "fapic.me":
	case "uplimg.com":
	case "imgstudio.org":
	case "goimge.com":
	case "imageho.me":
	case "picsnova.net":
	case "imgor.net":
	case "photolot.org":
	case "imgglobe.eu":
	case "icezap.com":
	case "imgtrial.com":
	case "imgmag.co":
	case "imgcredit.xyz":
	case "dimtus.com":
		i = q('img[src*="' + iurl + '/upload/"]');
		break;
	case "picspornfree.me":
	case "hotimage.uk":
		i = q('input[type="submit"]');
		dp=true;
		if(i) 
		{
			i.click();
			break;
		}
	case "xxx.image-server.ru":
	case "image-server.ru":
	case "avenuexxx.com":
	case "uploadimagex.com":
	case "hostingkartinok.com":
		i = q('img[src*="/upload"]');
		break;
	case "bababian.com":
		i = q('img[src*="/upload"]');
		if(i){i.src = i.src.replace('_500', '');}
		break;
	case "imgseeds.com":
		i = q('input');
		if(i)
		{
			i.click();
			break;
		}
	case "imgtaxi.com":
		j = true;
		i = q("a.overlay_ad_link");
		if(i)
		{
			i.click();
			break;
		}
	case "imageontime.com":
	case "imgwet.com":
		j = true;
		i = q('img[src*="/big/"]');
		break;
	case "imgtube.net":	
		i = q('input[value="Continue to image"]');
		dp=true;
		if(i) 
		{
			q("#browser_fingerprint").value = unsafeWindow.pstfgrpnt(true);
			i.click();
		}
		else
		{
			i = q('img[src*="/uploads/"]');
		}
		break;
	case "ruleimg.com":
	case "imghit.com":
	case "image.re":
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
	case "ima.so":
	case "xpic.biz":
		i = q('img[src*="upload/"]');
		break;
	case "bilder-upload.eu":
		i = q('input[src*="upload/"]');
		break;
	case "picload.org":
	case "imagecross.com":
	case "npicture.net":
	case "uprapide.com":
	case "roboimages.com":
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
	case "picfree.org":
	case "imghs.teamfreewill.net":
	case "videoforall.org":
		i = q('a[href*="/di-"]');
		if(i)
		{
			i.src = i.href;
		}
		break;
	case "cyberpics.net":
	case "fastimages.ru":
	case "img-uploader.de":
	case "hot-file.org":
	case "imgcandy.com":
	case "image.siroro.co.uk":
	case "intermcafe.com":
	case "ddpic.2tl.in":
	case "fmsecond.com":
	case "qattach.com":
	case "fotohelp.kz":
	case "pic-you.com":
		i = q('a[href*="/di/"]');
		if(i)
		{
			i.src = i.href;
		}
		break;
	case "theimghost.com":
	case "imagehost.thasnasty.com":
	case "thepornfeeds.com":
	case "oxily.com":
	case "ghanaimages.co":
	case "imgurban.info":
	case "unlimitedpicture.com":
	case "mypixxx.lonestarnaughtygirls.com":
	case "x45x.info":
	case "img.mdy.ro":
	case "knecht.novarata.net":
	case "plusgamer.ir":
	case "tiny-img.com":
	case "img.irandeliver.com":
	case "img.solpie.net":
	case "xferz.com":
	case "lgeoo.us":
	case "img.wangolds.com":
	case "up.kfesfahan.com":
	case "pic.freelian.com":
	case "image.alesher.com":
	case "ch.1798.in":
	case "images.tapasilo.org":
	case "upload.khontai.com":
	case "pic.dnjc8.com":
	case "image.pantyhosemania.info":
		i = q('a[href*="?di="]');
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
	case "imgnip.com":
	case "mrjh.org":
	case "stuffed.ru":
	case "postimg.net":
	case "img.deli.sh":
	case "rapid-img.de":
	case "ushareimg.com":
	case "ngarko.online.fr":
	case "picrak.com":
	case "freeuploadimages.org":
	case "picszone.net":
	case "images.share-films.net":
	case "bildjunkies.de":
	case "uppic.ilovemyshopping.com":
	case "foto.hcfor.pl":
	case "up.daniyalonline.com":
	case "slikosef.pajek.net":
	case "imagegecko.com":
	case "imagesticky.com":
	case "pic.tooptarinha.com":
	case "up.dlu3at.net":
	case "poopr.org":
	case "xp-images.hi2.ro":
	case "dayzeddesigns.com":
	case "freeimghosting.co.uk":
	case "photostand.co.za":
	case "upload.removed.us":
	case "images-hosting.tk":
	case "imghost.pl":
	case "udostepniaj.pl":
	case "ngarko.free.fr":
	case "images.collectiontricks.it":
	case "244pix.com":
	case "imageview.me":
	case "imgboxxx.com":
	case "imghere.net":
	case "imghoney.com":
	case "imgdope.com":
	case "hostmat.eu":
	case "imgdream.net":
	case "imgili.com":
	case "imgcentral.com":
	case "imageback.info":
		i = q('img[src*="images/"]');
		break;
	case "use.com":
		i = q('img[src*="images/"][onload]');
		if(i){i.src = i.src.replace('/s_2/', '/s_5/');}		
		break;
	case "imagerule.com":
	case "1y9y.com":
	case "host4images.com":
	case "aveimage.com":
		i = q('img#photo');
		break;
	case "picamatic.com":
		i = q('img[src*="/show/"]');
		break;
	case "freeimgup.com":
	case "imagescream.com":
	case "anonpic.com":
	case "goimagehost.com":
	case "picturevip.com":
	case "image-load.net":
	case "picturespk.pk":
	case "upload.djmaster.fr":
	case "fullimg.com":
	case "b4he.com":
	case "firepic.org":
	case "seeit.bz":
	case "overdream.cz":
	case "fastpics.net":
	case "ii4.ru":
	case "picuploader.de":
	case "smages.com":
	case "pictureshack.ru":
	case "imgbox.de":
	case "imagehosting.cz":
	case "server5.upload69.net":
	case "9foto.ru":
	case "hosting.tidus.eu":
	case "imagesloading.altervista.org":
	case "phpbbmods.it":
	case "fsfiles.org":
	case "giveimg.net":
	case "ilimdunyasi.net":
	case "lakhdaria.net":
	case "partizansk.eu":
	case "webjardiner.com":
	case "imgup.com":
	case "iezz.com":
	case "fileaimage.com":
	case "picify.com":
	case "picturescream.com":
	case "urpichost.com":
	case "all-poster.ru":
	case "picturescream.asia":
	case "imghost.us.to":
		i = q('img[src*="/images/"]');
		break;
	case "intergranada.com":
		i = q('img[src*="/images/images/"]');
		break;
	case "someimage.com":
		i = q('img#viewimage');
		break;
	case "pixelup.net":
		i = q('center img[src*="/images/"]');
		break;
	case "saveimg.ru":
	case "imglink.ru":
	case "tinyphoto.net":
	case "4put.ru":
	case "hostimg.org":
	case "sharepic.biz":
	case "you-logo.ru":
	case "powerlogo.ru":
		i = q('img[src*="pictures/"]');
		break;
	case "xenopix.com":
		i = q('img[src*="/pix/"]');
		break;
	case "imgclick.net":
	case "chronos.to":
	case "imgmaid.net":
	case "pic-maniac.com":
	case "coreimg.net":
		j = true;
		i = q('input[type="submit"]');
		dp=true;
		if(i) 
		{
			i.click();
			break;
		}
	case "imgsee.me":
		i = q('input[type="button"]');
		if(i)
		{
			i.click();
			break;
		}
		dp=true;
	case "imgspice.com":
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
	case "tuspics.net":
	case "nyanimg.com":
	case "geekpics.in":
	case "imagefluff.com":
	case "imageporter.com":
	case "imagenimage.com":
	case "imageshimage.com":
	case "imagedax.net":
	case "pornimagex.com":
	case "imgtrex.com":
		i = q('img[src*="/i/"]');
		break;
	case "pixpipeline.com":
		i = q('img[src*="/s/"]');
		break;
	case "2imgs.com":
	case "2i.sk":
	case "2i.cz":
	case "scrin.org":
		i = q('a[href*="/i/"]');
		if(i)
		{
			i.src = i.href;
			break;
		}
		i = q('img[src*="/i/"]');
		break;
	case "hentai-hosting.com":
	case "miragepics.com":
	case "imagecurl.com":
	case "imagecurl.org":
		i = q('input[value*="' + iurl + '/images/"]');
		if(i){i.src = i.value;}
		break;
	case "gratisimage.dk":
	case "moyophoto.com":
		i = q('input[value*="' + iurl + '/image"]');
		if(i){i.src = i.value;}
		break;
	case "ipic.su":
		i = q('input[value*="' + iurl + ' img/"]');
		if(i){i.src = i.value;}
		break;
	case "image2you.ru":
		i = q('img[src*="images/"]');
		if(i){i.src = i.src.replace('2_', '');}
		break;
	case "imgrex.com":
		i = q('form[action="' + window.location.pathname.substr(1) + window.location.search + '"]');
		if(i)
		{
			i.submit();
		}
		else
		{
			i = q('img[src*="images/"]');
		}
		break;
	case "qrrro.com":
	case "imgmade.com":
		i = q('form');
		dp=true;
		if(i)
		{
			i.submit();
			break;
		}
	case "imgdrive.net":
		j = true;
		i = q("a.overlay_ad_link");
		if(i)
		{
			i.click();
			break;
		}
	case "pixhost.org":
	case "stooorage.com":
	case "imgtiger.com":
	case "imgserve.net":
	case "imgdino.com":
	case "overpic.net":
	case "imagesocket.com":
	case "flickimg.com":
	case "sexseeimage.com":
	case "piratescreen.com":
	case "emptypix.com":
	case "sexyxpixels.com":
	case "hostpic.org":
	case "zapodaj.net":
	case "jpegshare.net":
	case "photolair.net":
	case "screenshot.ru":
	case "imagefile.org":
	case "zapisz.net":
	case "addyourpics.com":
	case "urimage.net":
	case "imgbank.cz":
	case "liolink.com":
	case "showmyimage.com":
	case "givme.de":
	case "upload.crazycraft.pl":
	case "mynameismiz.com":
	case "upload.supreme-elite.fr":
	case "up.vn-hello.com":
	case "myimg.me":
	case "upic.kz":
	case "heberg-hush.org":
	case "oltaciyukle.com":
	case "slikomanija.net":
	case "pichost.name":
	case "evopikz.net":
	case "sxfoto.com":
	case "upanh.biz":
	case "imagend.com":
	case "imagerocket.com":
	case "hyyathost.com":
	case "images.reptilescanada.com":
	case "wepic.ru":
	case "naeamysig.com":
	case "upload-image.fr":
	case "picselio.com":
	case "t4up.net":
	case "images.gamewind.de":
	case "images.baconbits.org":
	case "kuvajako.com":
	case "upanh.ovo.vn":
	case "uploads.li":
	case "imagesaur.com":
	case "wrzucaj.net":
	case "api.picx.me":
	case "heberge-images.com":
	case "yehpic.com":
	case "joepler.com":
	case "image.kg":
	case "picshome.ru":
	case "savemyimage.com":
	case "subeme.net":
	case "img.dramacafe.tv":
	case "fapping.empornium.sx":
	case "pixel.so":
	case "img.titank.com":
	case "beeimg.com":	
	case "1pics.ru":	
	case "imgshow.me":
	case "ticklebytes.com":
	case "youpicture.org":
	case "zagruzitfoto.com":
	case "vavvi.com":
	case "imgzap.com":
	case "imgdrive.net":
	case "crazyimg.com":
	case "imgextra.uk":
	case "extraimago.com":
	case "ftop.ru":
		i = q('img[src*="' + iurl + '/images/"]');
		break;
	case "shareimages.com":
	case "imagesmax.de":
	case "bilder.nixhelp.de":
		i = q('img[src*="' + iurl + '/images"]');
		break;
	case "imgfantasy.com":
	case "imagedomino.com":
	case "imagedomino.net":
	case "imghash.com":
	case "imageporn.eu":
	case "imgreserve.com":
	case "picangel.com":
	case "imgsmile.com":
	case "imgsay.com":
	case "imgcool.net":
		//IMGReserve  
		j = true;
		dp=true;
		i = q('input[value="YES"]');
		if(i){i.onclick();break;}
	case "imgchili.net":
	case "pic-upload.de":
	case "pohrani.com":
	case "shrani.najdi.si":
	case "imageab.com":	
		i = q('img[onclick*="(this"]');
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
		case "deviantart.com":
			if(q('div.deviation-mlt-preview'))
			{
				i = q('a[href*="/download/"]');
				if(i){i.src = i.href;}
				else{i = q('img.dev-content-full');}
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
		case "photobucket.com":
			find_text_in_scripts('originalUrl":"', '"');
			break;
		case "freeamateurteens.net":
		case "img-vidiklub.com":
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
		tb = setTimeout(function() { console.warn("Didnt find image, waited " + timeout + " ms to try again"); tb=0; timeout*=2; i=0; makeworld(); }, timeout);
	}
}

function changecursor()
{
	i.style.margin = "auto";
	if(!rescaled && (((i.naturalHeight / window.devicePixelRatio).toFixed() == window.innerHeight && (i.naturalWidth / window.devicePixelRatio).toFixed() == window.innerWidth) || ((i.naturalWidth / window.devicePixelRatio).toFixed() == window.innerWidth && (i.naturalWidth / window.devicePixelRatio).toFixed() == window.innerWidth))) // one img dimension is equal to screen and other is the same or less than the screen
	{
		i.style.cursor = "";
	}
	else if((i.naturalHeight / window.devicePixelRatio).toFixed() > window.innerHeight || (i.naturalWidth / window.devicePixelRatio).toFixed() > window.innerWidth)
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
			if((i.naturalHeight / window.devicePixelRatio).toFixed() > window.innerHeight) // chrome bug fuuuuu
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
	if (typeof GM_setValue !== "undefined")
	{
		function saveCfg()
		{
			GM_setValue("directImage", q("#hji_cfg_1_direct").checked);
			GM_setValue("bgColor", q("#hji_cfg_2_bgclr").value);
			GM_setValue("fitWH", q("#hji_cfg_3_fitWH").checked);
			GM_setValue("fitB", q("#hji_cfg_4_fitB").checked);
			GM_setValue("fitS", q("#hji_cfg_5_fitS").checked);
			GM_setValue("js", q("#hji_cfg_6_js").value);
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
		q("#hji_cfg_1_direct").checked = GM_getValue("directImage");
		q("#hji_cfg_2_bgclr").value = GM_getValue("bgColor", "");
		q("#hji_cfg_3_fitWH").checked = GM_getValue("fitWH", true);
		q("#hji_cfg_4_fitB").checked = GM_getValue("fitB");
		q("#hji_cfg_5_fitS").checked = GM_getValue("fitS");
		q("#hji_cfg_6_js").value = GM_getValue("js", "");
		q("#hji_cfg_save").addEventListener("click", saveCfg, true);
	}
	else
	{
		alert("Sorry, Chrome userscripts in native mode can't have configurations! Install TamperMonkey extension. (it's very good)");
	}
}

function loadCfg()
{
	if (typeof GM_getValue !== "undefined")
	{
		cfg_direct = GM_getValue("directImage");
		cfg_bgclr = GM_getValue("bgColor");
		cfg_fitWH = GM_getValue("fitWH", true);
		cfg_fitB = GM_getValue("fitB");
		cfg_fitS = GM_getValue("fitS");
		cfg_js = GM_getValue("js");
	}
}
