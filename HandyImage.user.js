// ==UserScript==
// @name          Handy Image
// @namespace     handyimage
// @author        Owyn
// @contributors  U Bless
// @version       2013.10.04
// @updateURL     https://userscripts.org/scripts/source/166494.user.js
// @downloadURL   https://userscripts.org/scripts/source/166494.user.js
// @homepage      https://userscripts.org/scripts/show/166494
// @description   Shows just fullsize Image with hotkeys & without pop-ups on many image-hosting sites
// @run-at        document-start
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_registerMenuCommand
// @grant         unsafeWindow
// @match         https://userscripts.org/scripts/show/166494/configuration
// @match         http://www.imagebam.com/image/*
// @match         http://imgchili.net/show/*
// @match         http://imgchili.com/show/*
// @match         http://imgbox.com/*
// @exclude       http://imgbox.com/g/*
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
// @match         http://tinypic.com/view.php?pic=*
// @match         http://radical-foto.ru/*
// @match         http://radikal-foto.ru/*
// @match         http://www.fotolink.su/v.php?id=*
// @match         http://www.stooorage.com/show/*/*
// @match         http://*.pimpandhost.com/image/*
// @match         http://*.pixroute.com/*.html
// @match         http://*.piccash.net/*
// @exclude       http://piccash.net/cabinets/upl/
// @exclude       http://www.piccash.net/cabinets/upl/
// @match         http://*.picforall.ru/*/*/
// @match         http://pron-pix.com/*
// @match         http://imagecurl.com/view*
// @match         http://imagecurl.org/view*
// @match         http://*.euro-pic.eu/share*
// @match         http://amateurfreak.org/share*
// @match         http://*.imagescream.com/?v=*
// @match         http://*.imagescream.com/img/soft/image*
// @match         http://picturescream.asia/*
// @match         http://imagepdb.com/?*
// @match         http://xxxhost.me/viewer.php?*
// @match         http://imadul.com/?*
// @match         http://d69.in/?*
// @match         http://*.pixdir.net/show/*
// @match         http://postimg.org/image/*
// @match         http://*.niceimage.pl/*.html
// @match         http://*.picbank.pl/*.html
// @match         http://*.pics-money.ru/*
// @match         http://imgcloud.co/img*.html
// @match         http://*.freeimgup.com/*.*
// @match         http://imgtiger.com/viewer.php?*
// @match         http://*.imageporter.com/*
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
// @match         http://*.subirimagenes.com/*.html
// @match         http://*.screenlist.ru/details.php?image_id=*
// @match         http://qrrro.com/images/*
// @match         http://*.imgnip.com/viewer.php?*
// @match         http://*.imgwiev.tk/?p*
// @match         http://*.javelite.tk/viewer.php?id=*
// @match         http://www.pic-upload.de/view-*
// @match         http://picshare.geenza.com/pics/*
// @match         http://www.imgbabes.com/*/*.html
// @match         http://*.imgah.com/*/*.*
// @match         http://*.goimagehost.com/xxx/*.*
// @exclude       http://goimagehost.com/xxx/?v=*
// @exclude       http://www.goimagehost.com/xxx/?v=*
// @match         http://*.hotimg.com/image/*
// @match         http://ibunker.us/f*
// @match         http://ichan.org/image.php?path=*
// @match         http://*.imagearn.com/*
// @match         http://www.dumppix.com/view*
// @match         http://www.bilder-upload.eu/show.php?*
// @match         http://www.bilder-hochladen.net/file*
// @match         http://www.bild.me/bild.php?*
// @match         http://www.imagesnake.com/show*
// @match         http://www.freebunker.com/*
// @match         http://bayimg.com/*
// @match         http://*.directupload.net/file*
// @match         http://imagepong.info/view-image/*
// @match         http://imageback.info/view-image/*
// @match         http://*.imgpo.st/*
// @match         http://*.imgjav.tk/?p*
// @match         http://*.imgurban.info/?p*
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
// @match         http://*.imagefruit.com/img*
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
// @match         http://*.dumpt.com/img/view*
// @match         http://*.fotohosting.net/*
// @match         http://imagebunk.com/*
// @match         http://imagezilla.net/show/*
// @match         http://*.imageup.ru/img*
// @match         http://*.casimages.com/photos/*/*/*
// @match         http://*.casimages.com/img*
// @match         http://*.cyberpics.net/p*
// @match         http://*.vvcap.net/db/*
// @match         http://*.freeimage.us/share*
// @match         http://*.pix-x.net/*/*
// @match         http://subimg.net/jpg?*
// @match         http://*.shareimages.com/image*
// @match         http://upsimple.com/view/*
// @match         http://www.xtremeshack.com/image/*
// @match         http://*.mrjh.org/gallery.php?entry=*
// @match         http://*.ipicture.ru/Gallery/Viewfull/*
// @match         http://*.itmages.ru/image/view/*
// @match         http://*.pohrani.com/*
// @match         http://shrani.najdi.si/*
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
// @match         http://*.uaimage.com/*
// @match         http://*.npicture.net/share-*
// @match         http://*.img.acianetmedia.com/*
// @match         http://www.filedump.net/index.php?pic=*
// @match         http://www.2imgs.com/*
// @exclude       http://www.2imgs.com/uploaded/*
// @match         http://*.overpic.net/view*
// @match         http://*.unlimitedpicture.com/?p*
// @match         http://*.imagecross.com/*
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
// @match         http://*.picsee.net/*
// @match         http://www.fotosik.pl/pokaz_obrazek/pelny/*
// @match         http://imagebin.org/*
// @match         https://dumpyourphoto.com/photo/*
// @match         http://dumpyourphoto.com/photo/*
// @match         http://*.depic.me/*
// @match         http://www.xup.in/dl*
// @match         http://*.foto-save.ru/full/
// @match         http://hostpornpics.net/view*
// @match         http://*.flickimg.com/image/*
// @match         http://*.sexseeimage.com/image/*
// @match         http://*.hotchyx.com/d/*
// @match         http://*.imgns.com/pt*
// @match         http://*.ultraimg.com/*
// @match         http://ima.so/*
// @match         http://*.kinkypic.net/show*
// @match         http://*.imagerocket.net/view*
// @match         http://*.imgnip.com/view*
// @match         http://*.imageupper.com/i/*
// @match         http://*.mypixxx.lonestarnaughtygirls.com/?p*
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
// @match         http://*.theimghost.com/?p*
// @match         http://*.instaimagehost.com/*.html
// @match         http://*.imagehost.thasnasty.com/?p*
// @match         http://*.imagilive.com/*.htm*
// @match         http://*.thepornfeeds.com/?p*
// @match         http://*.piratescreen.com/*
// @match         http://*.hotimages.eu/img-*
// @match         http://*.picturevip.com/*
// @exclude       http://*.picturevip.com/x/clean/
// @match         http://*.emptypix.com/*
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
// @match         http://*.imghostr.me/*
// @match         http://*.tinyphoto.net/show-image.php?id=*
// @match         http://*.ushareimg.com/view.php?filename=*
// @match         http://*.upload.djmaster.fr/?v=*
// @match         http://img.pereslavl.ru/share*
// @match         http://images.maxigame.by/share*
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
// @match         http://www.imgadult.com/img-*
// @match         http://www.picshot.pl/public/view/*
// @match         http://*.imageho.st/*
// @match         http://*.imagesmax.de/display-*
// @match         http://*.ifotos.pl/zobacz/*
// @match         http://*.voila.pl/index.php?f=*
// @match         http://www.zimage.fr/photo.php?id=*
// @match         http://www.zimage.fr/taillereel.php?id=*
// @match         http://ngarko.online.fr/viewer.php?file=*
// @match         http://*.b4he.com/?v=*
// @match         http://*.fullimg.com/?v=*
// @match         http://*.oxily.com/?p*
// @match         http://ghanaimages.co/?p*
// @match         http://*.imgplus.info/view*
// @match         http://*.x45x.info/?p*
// @match         http://firepic.org/?v=*
// @match         http://*.nium.co/*
// @match         http://*.seeit.bz/*
// @match         http://*.flickimg.com/*
// @match         http://savepic.org/*.htm
// @match         http://*.fastimages.ru/p*
// @match         http://ipic.su/?page=img&pic=*
// @match         http://*.jpegshare.net/*.html
// @match         http://*.overdream.cz/*
// @match         http://uppic.xgn.in.th/share*
// @match         http://*.fastpics.net/?v=*
// @match         http://www.ii4.ru/image-*
// @match         http://*.picuploader.de/*
// @match         http://pic.2x4.ru/share*
// @match         http://*.rupict.ru/share*
// @match         http://bildr.no/view/*
// @match         http://*.hosttrain.org/share*
// @match         http://www.imagestorming.com/*
// @match         http://*.photolair.net/images/*.html
// @match         http://*.tuspics.net/*
// @match         http://*.imagewix.com/img-*
// @match         http://*.freepicninja.com/*
// @match         http://www.subeimagenes.com/img*
// @match         http://www.fotosupload.com/mostrar.php?imagen=*
// @match         http://screenshot.ru/*
// @match         http://*.picrak.com/viewer.php?file=*
// @match         http://*.picspider.de/show.php*
// @match         http://*.hostpix.de/show.php?img* 
// @match         http://*.ld-host.de/show*
// @match         http://*.flexhost.de/photo* 
// @match         http://*.freeuploadimages.org/viewer.php?file=*
// @match         http://*.javimage.us/view*
// @match         http://smages.com/?v=*
// @match         http://image.auditory.ru/viewer.php?id=*
// @match         http://*.hostingkartinok.com/show-image.php?id=*
// @match         http://*.4put.ru/view-max-picture.php?id=*
// @match         http://*.goload.ru/?v=*
// @match         http://www.pictureshack.ru/view*
// @match         http://*.host99.byethost4.com/share.php?id=*
// @match         http://upanh.depmely.com/share*
// @match         http://*.eazypics.net/share*
// @match         http://*.image.sabyjai.org/share*
// @match         http://*.image.shabab20.net/share*
// @match         http://xtupload.com/share.php?id=*
// @match         http://t.williamgates.net/share*
// @match         http://*.coolnspicy.com/share*
// @match         http://*.upload.fpsthailand.com/share.php?id=* 
// @match         http://*.fapomatic.com/v*
// @match         http://photosex.biz/v.php?id=*
// @match         http://*.celebimg.com/2*
// @match         http://*.imageteam.org/img-*
// @match         http://*.fotoshara.pl/*.html
// @match         http://*.screencity.pl/*.html
// @match         http://*.x.thebestpichost.com/*
// @match         http://*.hostimage.ru/photo/*
// @match         http://*.5pics.de/?b=*
// @match         http://hostpic.de/?b=*
// @match         http://www.yourimage24.de/view*
// @match         http://www.loaditup.de/*.html
// @match         http://*.uploadimage.ro/viewer.php?file=*
// @match         http://*.chickupload.com/showpicture*
// @match         http://www.images.woh.to/?p*
// @match         http://*.imgbox.de/show/img*
// @match         http://*.upmyphoto.com/image*
// @match         http://*.picszone.net/viewer.php?file=*
// @match         http://*.p1c.in/p*
// @match         http://*.images.share-films.net/viewer.php?file=*
// @match         http://www.uploadking.biz/show.php*
// @match         http://*.roboimages.com/view*
// @match         http://foto.xhost.lv/show.php?img=*
// @match         http://*.imagenic.net/viewer.php?file=*
// @match         http://*.imagefile.org/view.php?filename=*
// @match         http://*.onimage.net/show.php*
// @match         http://*.uploadagent.de/show*
// @match         http://www.pixoload.de/?p*
// @match         http://*.bildjunkies.de/viewer.php?file=*
// @match         http://*.imagetotal.de/image.php?fileID=*
// @match         http://pix.hostux.net/*
// @match         http://*.uppic.ilovemyshopping.com/viewer.php?file=*
// @match         http://*.marmolak.net/viewer.php?file=*
// @match         http://*.foto.hcfor.pl/viewer.php?file=*
// @match         http://*.iuploader.com/viewer.php?file=*
// @match         http://*.up.daniyalonline.com/viewer.php?file=*
// @match         http://*.slikosef.pajek.net/viewer.php?file=*
// @match         http://*.imagegecko.com/viewer.php?file=*
// @match         http://*.imagesticky.com/viewer.php?file=*
// @match         http://*.pic.tooptarinha.com/viewer.php?file=* 
// @match         http://*.up.dlu3at.net/viewer.php?file=*
// @match         http://*.poopr.org/viewer.php?file=*
// @match         http://*.xp-images.hi2.ro/viewer.php?file=*
// @match         http://*.dayzeddesigns.com/viewer.php?file=*
// @match         http://*.freeimghosting.co.uk/viewer.php?file=*
// @match         http://*.123poze.3x.ro/viewer.php?file=*
// @match         http://*.photostand.co.za/viewer.php?file=*
// @match         http://*.upload.removed.us/viewer.php?file=*
// @match         http://*.sharepic.antahjutasb.com.my/viewer.php?file=*
// @match         http://*.images-hosting.tk/viewer.php?file=*
// @match         http://demo.chevereto.com/*
// @match         http://*.imagewoof.com/view_image*
// @match         http://*.image-hoster.org/share*
// @match         http://*.hostimg.org/show-image.php?id=*
// @match         http://*.ximg.co.uk/viewer.php?file=* 
// @match         http://sl-images.ath.cx/view.php?filename=* 
// @match         http://*.picatom.com/* 
// @match         http://*.picmoe.net/d.php?id=* 
// @match         http://*.imagerule.com/view.php?filename=*
// @match         http://*.imagepussy.com/view.php?filename=*
// @match         http://*.7image.ru/v.php?id=*
// @match         http://www.picshare.ru/view*
// @match         http://*.bien-vue.com/view.php?filename=*
// @match         http://www.e-loader.net/i* 
// @match         http://*.pics.tam.in.ua/showpic.php?p=*
// @match         http://*.xc5.ru/v.php?id=*
// @match         http://*.pikczery.pl/view.php?filename=*
// @match         http://*.tuxi.pl/view.php?filename=*
// @match         http://*.imghost.pl/index.php?id=*
// @match         http://*.udostepniaj.pl/viewer.php?file=*
// @match         http://*.hosting-zdjec.pl/view.php?filename=*
// @match         http://*.zapisz.net/view.php?filename=*
// @match         http://www.imagehosting.cz/?v=* 
// @match         http://*.totalsimage.com/site/*
// @match         http://www.dumparump.com/view*
// @match         http://*.myxpic.com/showpic*
// @match         http://*.picness.com/image/*
// @match         http://*.upfoto.us/view*
// @match         http://h4z.it/View*
// @match         http://*.free-picload.de/pics/*
// @match         http://server5.upload69.net/view*
// @match         http://s6.snapgram.co/*
// @match         http://*.s1.pixmax.ru/view*
// @match         http://*.freeamateurteens.net/view*
// @match         http://*.gluner.de/*.html
// @match         http://*.fotoshack.us/foto*
// @match         http://*.xxx.image-server.ru/view*
// @match         http://*.image-server.ru/view*
// @match         http://*.lgx.im/g/*.html
// @match         http://orzz.us/image/*
// @match         http://images.orzzso.com/image/*
// @match         http://*.imagebin.ca/v/*
// @match         http://*.loadpix.de/*.html
// @match         http://*.bilderhosten.de/archiv.php?*
// @match         http://www.public-pic.de/image/show/*
// @match         http://*.imgbox.in/index.php?m=display*
// @match         http://*.img-vidiklub.com/view*
// @match         http://*.9foto.ru/photo*
// @match         http://uploads.ru/*
// @match         http://*.picmania.com.ua/?v=*
// @match         http://*.storepic.com/show.php*
// @match         http://*.img-uploader.de/p*
// @match         http://www.myimg.de/?img=*
// @match         http://*.root-space.eu/file*
// @match         http://photodok.com/show.php*
// @match         http://*.hot-file.org/p*
// @match         http://*.hostarea.de/show.php*
// @match         http://*.pokazal.ru/v.php?id=*
// @match         http://mepic.ru/view/?id=*
// @match         http://*.imgcandy.com/p*
// @match         http://*.4owl.info/viewer.php?id=*
// ==/UserScript==

if (typeof unsafeWindow === "undefined")
{
	unsafeWindow = window;
}

if(unsafeWindow.document.id == 44) // bad monkey, bad, no more!
{
	console.warn("stopped bad monkey");
	return false;
}
unsafeWindow.document.id = 44;

if (typeof GM_registerMenuCommand !== "undefined")
{
	GM_registerMenuCommand("Handy Image Configuration", cfg, "C");
}

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

function ev(q){return document.evaluate(q,document.body,null,9,null).singleNodeValue;}
var cfg_direct;
var cfg_bgclr;
var cfg_fitWH = true;
var cfg_fitB;
var cfg_fitS;
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

function ws()
{
	if(!(navigator.userAgent.indexOf('Firefox') != -1 && isrc.lastIndexOf(".gif") != -1)) // NOT firefox + gif = bug
	{
		unsafeWindow.stop();
	}
}

function sanitize() // lol I'm such a hacker
{
	for(var i = lasttask; i > 0; i--)
	{
		clearTimeout(i);
	}
}

function onscript(e) 
{
	//console.warn( "STOPPED: " + e.target.src + e.target.innerHTML);
	e.preventDefault();
	e.stopPropagation();
}

function makeimage()
{
	loadCfg();
	if(cfg_direct){window.location.href = img.src;return false;}
	if(cfg_bgclr){document.body.bgColor = cfg_bgclr;}
	document.body.style.margin = "0px";
	document.body.innerHTML = "<style>img { position: absolute; top: 0; right: 0; bottom: 0; left: 0; }</style>"; // center image
	img = document.createElement("img");
	img.src = isrc;
	img.id = "resizing";
	img.style.margin = "auto"; // center image
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
	case "userscripts.org":
		cfg();img=1;break;
	case "vvcap.net":
	case "simplest-image-hosting.net":
	case "hostpic.de":
	case "5pics.de":
	case "hostimage.ru":
	case "gluner.de":
	case "imagebin.ca":
		i = ev('.//img');
		break;
	case "tryimg.com":
		i = ev('.//a[not(contains(@href,"' + iurl + '"))]/img');
		break;
	case "savepic.org":
		i = ev('.//a/img[not(contains(@src,"/images/"))]');
		break;
	case "imgnook.com":
	case "h4z.it":
		i = document.images[2];
		if(i){i.src = i.parentNode.href;}
		break;
	case "noelshack.com":
		i = ev('.//a[@target="_blank"]/img');
		if(i){i.src = i.parentNode.href;}
		break;
	case "dumpyourphoto.com":
		i = ev('.//a/img');
		if(i){i.src = i.parentNode.href;}
		break;
	case "thumbsnap.com":
		i = ev('.//img[@id="thepic"]');
		if(i && i.parentNode.href){i.src = i.src.replace('/s/', '/i/');}
		break;
	case "imgbox.com":
	case "imageupper.com":
	case "fotosupload.com":
	case "e-loader.net":  	
		i = ev('.//img[@id="img"]');
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
	case "picspider.de":
	case "hostpix.de":
	case "uploadking.biz":
	case "foto.xhost.lv":
	case "onimage.net":
	case "storepic.com":
	case "photodok.com":
	case "hostarea.de":
		i = ev('.//img[@id="img_obj"]');
		break;
	case "pimpandhost.com":
	case "pixdir.net":
	case "fastpic.ru":
	case "abload.de":
	case "imagenic.net":
		i = ev('.//img[@id="image"]');
		break;
	case "pikucha.ru":
		i = ev('.//img[@id="image"]');
		j = true;
		break;
	case "bayimg.com":
	case "picgarage.net":
		i = ev('.//img[@id="mainImage"]');
		break;
	case "depic.me":
		i = ev('.//img[@id="pic"]');
		break;
	case "xup.in":
		i = ev('.//img[contains(@src,"/exec/")]');
		break;
	case "imageshack.us":
		i = ev('.//input[@id="direct-link"]');
		if(i){i.src = i.value;}
		break;
	case "image2you.ru":
		i = ev('.//img[contains(@src,"images/")]')
		if(i){i.src = i.src.replace('2_', '');}
		break;
	case "upix.me":
		i = ev('.//a[@class="thumb"]');
		if(i){i.src = i.title;}
		break;
	case "jpegbay.com":
		i = ev('.//a[@class]');
		if(i){i.src = i.href;}
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
	case "uppic.xgn.in.th":
	case "pic.2x4.ru":
	case "rupict.ru":
	case "hosttrain.org":
	case "host99.byethost4.com":
	case "upanh.depmely.com":
	case "eazypics.net":
	case "image.sabyjai.org":
	case "image.shabab20.net":
	case "xtupload.com":
	case "t.williamgates.net":
	case "coolnspicy.com":
	case "upload.fpsthailand.com": 	
	case "image-hoster.org":
		//i = ev('.//img[@id="iimg"]');
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
	case "pix-x.net":
		i = ev('.//img[contains(@src,"images/")]');if(i){break;}
	case "pics-money.ru":
		i = ev('.//img[contains(@src,"/full/")]');if(i){break;}
	case "pic5you.ru":
	case "pic4you.ru":
	case "picp2.com":
	case "picforall.ru":
	case "piccash.net":
	case "picage.ru":
	case "images-host.biz":
	case "pic2profit.com":
	case "pix-x.net":
	case "pics-money.ru":
		i = ev('.//img[contains(@src,"thumb")]');
		if(i){i.src = i.src.replace('-thumb', '');
		i.src = i.src.replace('img_thumb', 'img_full');}
		break;
	case "imagik.fr":
		i = ev('.//img[contains(@src,"/uploads/")]');
		if(i){i.src = i.src.replace('thumb_', '');}
		break;
	case "tinypic.com":
		i = ev('.//img[@id="imgElement"]');
		break;
	case "flickcabin.com":
	case "picshot.pl":
		i = ev('.//img[contains(@src,"' + iurl + '/p")]');
		if(i){i.src = i.src.replace('thumb', 'file');}
		break;
	case "radical-foto.ru":
	case "radikal-foto.ru":
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
		i = ev('.//img[@class="magnify"]');
		break;
	case "bilder-space.de":
	case "imagesup.de":
		i = ev('.//img[@class="picture"]');
		break;
	case "lostpic.net":
		i = ev('.//a[contains(@href,"/orig")]');
		if(i){i.src = i.href;}
		break;
	case "pix.toile-libre.org":
	case "photo-host.org":
	case "myxpic.com":
	case "picness.com":
		i = ev('.//a[contains(@href,"original")]');
		if(i){i.src = i.href;}
		break;
	case "picsee.net":
	case "imgbox.in":
		i = ev('.//a[contains(@href,"/upload")]');
		if(i){i.src = i.href;}
		break;
	case "totalsimage.com":
		i = ev('.//a[@id="image"]');
		if(i){i.src = i.href;}
		break;
	case "imgxc.com":
	case "imgplus.info":
		i = ev('.//img[contains(@src,"full")]');
		break;
	case "wstaw.org":
		i = ev('.//a[contains(@href,"/m/")]');
		if(i){i.src = i.href;}
		break;
	case "imageshost.ru":
		i = ev('.//a[contains(@href,"/img/")]');
		if(i){i.src = i.href;}
		break;
	case "freepicninja.com":
	case "x.thebestpichost.com":
		if(window.location.href.indexOf("ads-cookie.php") != -1)
		{
			i = ev('.//a');
			if(i)
			{
				img = i;
				window.location.href = i.href;
			}
		}
		else
		{
			iurl += 2;
		}
		break;
	case "freepicninja.com2":
	case "hostpornpics.net":
	case "uploadimage.ro":
	case "marmolak.net":
		i = ev('.//img[contains(@src,"img.php")]');
		break;
	case "imageno.com":
	case "imagewoof.com":
		i = ev('.//img[contains(@src,"image.php")]');
		break;
	case "loadpix.de":
	case "bilderhosten.de":
		i = ev('.//img[contains(@src,"bild.php")]');
		break;
	case "imagebin.org":
	case "imgbin.me":
	case "bildr.no":
		i = ev('.//img[contains(@src,"image")]');
		break;
	case "iv.pl":
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
	case "yourimage24.de":
	case "ximg.co.uk":	
	case "sl-images.ath.cx":  
	case "imagepussy.com": 
	case "bien-vue.com":
	case "pikczery.pl":
	case "tuxi.pl":
	case "hosting-zdjec.pl":
		i = ev('.//a[contains(@href,"images/")]');
		if(i){i.src = i.href;}
		break;
	case "fotoshack.us":
		i = ev('.//img[contains(@src,"/fotos/")]');
		break;
	case "subefotos.com":
		j = true;
		i = ev('.//img[contains(@src,"fotos.' + iurl + '")]');
		break;
	case "uppix.com":
		i = ev('.//img[contains(@src,"/f")]');
		break;
	case "pictureshoster.com":
	case "zaslike.com":
	case "dwimg.com":
	case "uploadagent.de":
		i = ev('.//a[contains(@href,"files/")]');
		if(i){i.src = i.href;}
		break;
	case "imgtheif.com":
	case "fotolink.su":
	case "picthost.net":
	case "blackcatpix.com":
	case "photosex.biz":
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
	case "seedimage.com":
	case "hotchyx.com":
	case "imagehousing.com":
	case "cubeupload.com":
	case "dumparump.com":
	case "lgx.im":
	case "img.3ezy.net":
	case "uploads.ru":
	case "myimg.de":
	case "root-space.eu":
	case "pokazal.ru":
	case "mepic.ru":
		i = ev('.//img[contains(@src,"' + iurl + '")]');
		break;
	case "uaimage.com":
	i = ev('.//img[contains(@src,"' + iurl + '")][@id]');
		break;
	case "picfront.org":
		j = true;
		i = ev('.//img[contains(@src,"' + iurl + '")][@title]');
		break;
	case "platimzafoto.ru":
	case "pic-money.ru":
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
	case "voila.pl":
	case "ld-host.de":
	case "fapomatic.com":
	case "picshare.ru": 	
		i = ev('.//img[contains(@src,"uploads/")]');
		break;
	case "xtremeshack.com":
	case "images.orzzso.com":
		i = ev('.//img[contains(@src,"/photo")]');
		break;
	case "imagerocket.net":
		i = ev('.//a[contains(@href,"/photos/")]');
		if(i){i.src = i.href};
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
	case "picmoe.net": 
		i = ev('.//img[contains(@src,"src/")]');    
		break;
	case "ibunker.us":
	case "hostingpics.net":
	case "pixentral.com":
	case "7image.ru": 	
	case "free-picload.de":
		i = ev('.//img[contains(@src,"pics/")]');
		break;
	case "casimages.com":
	case "thebestpichost.com":
	case "imagebanana.com":
	case "deffe.com":
	case "ifotos.pl":
	case "subeimagenes.com":
	case "x.thebestpichost.com2":
		i = ev('.//img[contains(@src,"/img/")]');
		break;
	case "imagenetz.de":
		i = ev('.//img[contains(@src,"/img")]');
		break;
	case "picatom.com":  
		i = ev('.//img[contains(@src,"img/")]'); 
		break;
	case "orzz.us":
		i = ev('.//img[contains(@src,"/img/")][@title]'); 
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
	case "loaditup.de":
	case "123poze.3x.ro":
		i = ev('.//img[contains(@src,"/files/")]');
		break;
	case "image18.org":
		i = ev('.//img[contains(@src,"/file/")]');
		break;
	case "upfoto.us":
		i = ev('.//img[contains(@src,"files/")]');
		break;
	case "imagepix.org":
	case "hostingfailov.com":
	case "zimagez.com":
	case "chickupload.com":
		i = ev('.//img[contains(@src,"/full/")]');
		break;
	case "picbank.pl":
	case "niceimage.pl":
	case "screencity.pl":
	case "fotoshara.pl":
		i = ev('.//img[contains(@src,"/uploaded/")]');
		break;
	case "imgbunk.com":
	case "imgah.com":
	case "imgpo.st":
	case "imagecherry.com":
	case "pics.tam.in.ua":
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
	case "imagewix.com":
	case "imageteam.org":
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
	case "xximg.net":
	case "sxpics.nl":
		i = ev('.//input[@type="submit"]');
		if(i) 
		{
			i.click();
			img = 1;
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
	case "picstwist.com":
	case "hotimages.eu":
	case "xximg.net":
	case "fotoszok.pl":
	case "sxpics.nl":
	case "gallerycloud.net":
	case "imgadult.com":
	case "imagetotal.de":
		i = ev('.//img[contains(@src,"/upload/")]');
		break;
	case "xxx.image-server.ru":
	case "image-server.ru":
		i = ev('.//img[contains(@src,"/upload")]');
		break;
	case "ruleimg.com":
		i = ev('.//img[@alt="image"]');
		break;
	case "subirimagenes.com":
		i = ev('.//input[@type="submit"][@id="boton"]');
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
	case "imageho.st":
	case "flexhost.de":
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
	case "roboimages.com":
	case "public-pic.de":
		i = ev('.//img[contains(@src,"' + iurl + '/image")]');
		break;
	case "imgns.com":
	case "imagesup.net":
		i = ev('.//img[contains(@src,"dt")]');
		if(i)
		{
			i.src = i.src.replace('dt', 'di');
		}
		break;
	case "rapidjoy.com":
	case "cyberpics.net":
	case "fastimages.ru":
	case "p1c.in":
	case "img-uploader.de":
	case "hot-file.org":
	case "imgcandy.com":
		i = ev('.//a[contains(@href,"/di/")]');
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
	case "imgwiev.tk":
	case "imgjav.tk":
	case "unlimitedpicture.com":
	case "mypixxx.lonestarnaughtygirls.com":
	case "x45x.info":
	case "images.woh.to":
	case "pixoload.de":
		i = ev('.//a[contains(@href,"?di=")]');
		if(i)
		{
			i.src = i.href;
		}
		break;
	case "zimage.fr":
		i = ev('.//img[contains(@src,"images.php")]');
		if(i)
		{
			i.src = i.src.replace('.php?nom=', '/');
			break;
		}
	case "dumppix.com":
		i = ev('.//a[contains(@href,"enter")]');
		if(i)
		{
			img = i;
			window.location.href = i.href;
			break;
		}
	case "imgnip.com":
	case "dumppix.com":
	case "mrjh.org":
	case "stuffed.ru":
	case "imgnip.com":
	case "pixtn.com":
	case "postimg.net":
	case "img.deli.sh":
	case "rapid-img.de":
	case "imghostr.me":
	case "ushareimg.com":
	case "zimage.fr":
	case "ngarko.online.fr":
	case "picrak.com":
	case "freeuploadimages.org":
	case "picszone.net":
	case "images.share-films.net":
	case "bildjunkies.de":
	case "uppic.ilovemyshopping.com":
	case "foto.hcfor.pl":
	case "iuploader.com":
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
	case "sharepic.antahjutasb.com.my":
	case "images-hosting.tk":
	case "xc5.ru":
	case "imghost.pl":
	case "udostepniaj.pl":
	case "s1.pixmax.ru":
		i = ev('.//img[contains(@src,"images/")]');
		break;
	case "fotosik.pl":
		i = ev('.//img[contains(@src,"images")][contains(@src,iurl)][@style]');
		break;
	case "use.com":
		i = ev('.//img[contains(@src,"images/")][@onload]');
		if(i){i.src = i.src.replace('/s_2/', '/s_5/');}		
		break;
	case "imagerule.com":
		i = ev('.//img[@id="photo"]');
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
	case "fullimg.com":
	case "b4he.com":
	case "firepic.org":
	case "seeit.bz":
	case "overdream.cz":
	case "fastpics.net":
	case "ii4.ru":
	case "picuploader.de":
	case "smages.com":
	case "image.auditory.ru":
	case "hostingkartinok.com":
	case "goload.ru":
	case "pictureshack.ru":
	case "celebimg.com":
	case "sharenxs.com":
	case "imgbox.de":
	case "imagehosting.cz": 	
	case "server5.upload69.net":
	case "9foto.ru":
	case "picmania.com.ua":
	case "4owl.info":
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
	case "4put.ru":
	case "hostimg.org":
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
	case "tuspics.net":
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
	case "javimage.us":
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
	case "ipic.su":
		i = ev('.//input[contains(@value,"' + iurl + '/img/")]');
		if(i){i.src = i.value;}
		break;
	case "qrrro.com":
		i = ev('.//form[@name="F1"]');
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
	case "nium.co":
	case "flickimg.com":
	case "jpegshare.net":
	case "imagestorming.com":
	case "photolair.net":
	case "screenshot.ru":
	case "upmyphoto.com":
	case "imagefile.org":
	case "pix.hostux.net":
	case "demo.chevereto.com":
	case "zapisz.net":
	case "s6.snapgram.co":
		i = ev('.//img[contains(@src,"' + iurl + '/images/")]');
		break;
	case "shareimages.com":
	case "imagesmax.de":
		i = ev('.//img[contains(@src,"' + iurl + '/images")]');
		break;
	case "imgfantasy.com":
	case "imagedomino.com":
	case "imagepdb.com":
		j = true;
		i = ev('.//input[@value="YES"]');
		if(i){i.click();img = i;}
	case "imagepdb.com":
	case "imagebam.com":
	case "imgfantasy.com":
	case "imagedomino.com":
	case "imgchili.net":
	case "imgchili.com":
	case "pic-upload.de":
	case "pohrani.com":
	case "shrani.najdi.si":
		i = ev('.//img[contains(@onclick,"(this")]');
		break;
	default: // dynamic subdomain
		switch(iurl.substr(iurl.indexOf(".")+1))
		{
		case "imagevenue.com":
			i = ev('.//img[contains(@src,"/loc")]');
			break;
		case "directupload.net":
		case "freeamateurteens.net":
		case "img-vidiklub.com":
			i = ev('.//img[contains(@src,"images/")]');
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
		window.addEventListener('beforescriptexecute', onscript, true);
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
		window.removeEventListener('beforescriptexecute', onscript, true);
		inject(clr_pgn);
		ws();
		document.head.innerHTML = "";
		lasttask = setTimeout(function() {},0);
		sanitize();
		setTimeout(function() // else there will be scary bugs
		{
			inject(clr_pgn);
			ws();
			makeimage();
		}, 0);
	}
	else // try again
	{
		//console.warn("Didnt find image, trying again in 2 sec");
		setTimeout(function() { makeworld(); }, 2000);
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

var ARC = 0;
function autoresize()
{
	if(img.naturalWidth != 0)
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
		if(cfg_fitWH && (document.body.clientHeight != document.body.scrollHeight) && (document.body.clientWidth != document.body.scrollWidth)) // both scrollbars detected
		{
			rescale(0);
		}
		else if(cfg_fitB && ((document.body.clientHeight != document.body.scrollHeight) || (document.body.clientWidth != document.body.scrollWidth))) // one scrollbar
		{
			rescale(0);
		}
		else // no scrollbars
		{
			if(cfg_fitS)
			{
				rescale(0);
			}
			else
			{
				changecursor();
			}
		}
	}
	else
	{
		ARC++;
		if(ARC == 25 || ARC == 250)
		{
			img.src = img.src; // lol fix
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
	case KeyEvent.DOM_VK_P:
		if(img && navigator.userAgent.indexOf('Firefox') == -1) // Chrome bug
		{
			window.location.href = "https://userscripts.org/scripts/show/166494/configuration";
		}
		else
		{
			cfg();
		}
		cancelEvent(b);
		break;
	}
}

function $(id) {return document.getElementById(id);} // for StupidFox

function cfg()
{
	if (typeof GM_setValue !== "undefined")
	{
		function saveCfg()
		{
			GM_setValue("directImage", $("hji_cfg_1_direct").checked);
			GM_setValue("bgColor", $("hji_cfg_2_bgclr").value);
			GM_setValue("fitWH", $("hji_cfg_3_fitWH").checked);
			GM_setValue("fitB", $("hji_cfg_4_fitB").checked);
			GM_setValue("fitS", $("hji_cfg_5_fitS").checked);
			alert("Configuration Saved");
			if($("hji_cfg_2_bgclr").value){document.body.bgColor = $("hji_cfg_2_bgclr").value;}else{document.body.removeAttribute("bgColor");}
		}
		if(img && img.src){img.removeEventListener("click", rescale, true);}
		window.removeEventListener("keydown", onkeydown, true);
		document.head.innerHTML = "";
		document.body.innerHTML = "";
		var div = document.createElement("div");
		div.style.margin = "11% auto";
		div.style.width = "444px";
		div.style.border = "solid 1px black";
		div.style.background = "silver";
		div.innerHTML = "<style>#content {display:none;}</style><b><center>Configuration</center></b><br><input id='hji_cfg_1_direct' type='checkbox'> Open images directly with browser"
		+ "<br><br><input id='hji_cfg_2_bgclr' type='text' size='6'> Background color (empty = default)"
		+ "<br><br>Fit to window images:"
		+ "<br><br><input id='hji_cfg_3_fitWH' type='checkbox'> Larger than window both vertically and horizontally"
		+ "<br><br><input id='hji_cfg_4_fitB' type='checkbox'> Larger than window either vertically or horizontally"
		+ "<br><br><input id='hji_cfg_5_fitS' type='checkbox'> Smaller than window"
		+ "<br><br><center><input id='hji_cfg_save' type='button' value='Save configuration'></center>";
		document.body.appendChild(div);
		$("hji_cfg_1_direct").checked = GM_getValue("directImage");
		$("hji_cfg_2_bgclr").value = GM_getValue("bgColor", "");
		$("hji_cfg_3_fitWH").checked = GM_getValue("fitWH", true);
		$("hji_cfg_4_fitB").checked = GM_getValue("fitB");
		$("hji_cfg_5_fitS").checked = GM_getValue("fitS");
		$("hji_cfg_save").addEventListener("click", saveCfg, true);
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
	}
}
