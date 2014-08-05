// ==UserScript==
// @name          Handy Image
// @namespace     handyimage
// @author        Owyn
// @contributors  U BLESS
// @version       2014.08.05
// @updateURL     https://github.com/Owyn/HandyImage/raw/master/HandyImage.user.js
// @downloadURL   https://github.com/Owyn/HandyImage/raw/master/HandyImage.user.js
// @homepage      https://greasyfork.org/scripts/109-handy-image
// @icon          http://i.imgur.com/Q5TTIjV.png
// @description   Shows just fullsize Image with hotkeys & without pop-ups on many image-hosting sites
// @run-at        document-start
// @grant         GM_getValue
// @grant         GM_setValue
// @grant         GM_registerMenuCommand
// @grant         GM_unregisterMenuCommand
// @grant         unsafeWindow
// @match         https://github.com/Owyn/HandyImage/configuration
// @match         http://www.imagebam.com/image*
// @match         http://imgchili.net/show*
// @match         http://imgbox.com/*
// @match         http://*.imagetwist.com/*/*
// @match         http://*.imagevenue.com/img.php?*
// @match         *://*.imageshack.com/i/*
// @match         http://imagepix.org/image*
// @match         http://image2you.ru/*/*/
// @match         http://imageban.ru/show*
// @match         http://fastpic.ru/view*
// @match         http://www.pixhost.org/show*
// @match         http://*.picpicture.com/share.php?id=*
// @match         http://*.pic5you.ru/*/*/
// @match         http://tinypic.com/view*
// @match         http://radical-foto.ru/*
// @match         http://radikal-foto.ru/*
// @match         http://radikal.ru/*
// @match         http://f-page.ru/*
// @match         http://f-picture.net/*
// @match         http://www.fotolink.su/v.php?id=*
// @match         http://www.stooorage.com/show*
// @match         http://*.pimpandhost.com/image*
// @match         http://*.pixroute.com/*.html
// @match         http://*.piccash.net/*/*/
// @exclude       http://piccash.net/cabinets/*
// @exclude       http://www.piccash.net/cabinets/*
// @match         http://*.picforall.ru/*/*/
// @match         http://*.pron-pix.com/*
// @match         http://*.imagecurl.com/view*
// @match         http://*.imagecurl.org/view*
// @match         http://*.euro-pic.eu/*share*
// @match         http://*.imagescream.com/?v=*
// @match         http://*.imagescream.com/img/*
// @match         http://*.picturescream.asia/*
// @match         http://*.imagepdb.com/?*
// @match         http://*.xxxhost.me/view*
// @match         http://*.imadul.com/?*
// @match         http://*.d69.in/?*
// @match         http://*.pixdir.net/show*
// @match         http://postimg.org/image*
// @match         http://*.niceimage.pl/*.html
// @match         http://*.picbank.pl/*.html
// @match         http://*.pics-money.ru/*
// @match         http://*.freeimgup.com/*.*
// @match         http://imgtiger.com/view*
// @match         http://*.imgspice.com/*.html
// @match         http://*.ruleimg.com/img*
// @match         http://*.picage.ru/*/*
// @match         http://*.imgserve.net/img*
// @match         http://*.images-host.biz/*/*
// @match         http://*.imgfantasy.com/*
// @match         http://*.platimzafoto.ru/full/
// @match         http://*.platimzafoto.ru/*.html
// @match         http://*.imageontime.com/img*
// @match         http://*.pic2profit.com/*/*
// @exclude       http://pic2profit.com/cabinet/*
// @exclude       http://www.pic2profit.com/cabinet/*
// @match         http://imgdino.com/view*
// @match         http://*.anonpic.com/?v=*
// @match         http://*.pic-money.ru/*.html
// @match         http://*.pic-money.ru/full/
// @match         http://*.imgcandy.net/img*
// @match         http://*.imagecorn.com/img*
// @match         http://*.imgrill.com/img*
// @match         http://imgbar.net/*.html
// @match         http://*.imagefolks.com/img*
// @match         http://imagepicsa.com/img*
// @match         http://*.imgbunk.com/image*
// @match         http://*.pzy.be/v*
// @match         http://www.turboimagehost.com/p*
// @match         http://*.subirimagenes.com/*.html
// @match         http://*.screenlist.ru/details.php?image_id=*
// @match         http://qrrro.com/images*
// @match         http://imgmade.com/images*
// @match         http://*.imgnip.com/view*
// @match         http://*.imgwiev.tk/?*
// @match         http://*.javelite.tk/view*
// @match         http://www.pic-upload.de/view*
// @match         http://picshare.geenza.com/pics*
// @match         http://www.imgbabes.com/*/*.html
// @match         http://*.goimagehost.com/xxx/*.*
// @exclude       http://goimagehost.com/xxx/?v=*
// @exclude       http://www.goimagehost.com/xxx/?v=*
// @match         http://*.hotimg.com/image*
// @match         http://ibunker.us/f*
// @match         http://ichan.org/image.php?path=*
// @match         http://*.imagearn.com/*
// @match         http://www.dumppix.com/view*
// @match         http://www.bilder-upload.eu/show*
// @match         http://www.bilder-hochladen.net/file*
// @match         http://www.bild.me/bild.php?*
// @match         http://www.imagesnake.com/show*
// @match         http://www.imagesnake.com/img*
// @match         http://www.imagesnake.com/view*
// @match         http://www.freebunker.com/show*
// @match         http://www.freebunker.com/img*
// @match         http://www.freebunker.com/view*
// @match         http://bayimg.com/*
// @match         http://*.directupload.net/file*
// @match         http://*.imgjav.tk/?*
// @match         http://*.imgurban.info/?*
// @match         http://*.imagecherry.com/*
// @match         http://funkyimg.com/view*
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
// @match         http://*.picturedip.com/*/*
// @match         http://*.croftimage.com/img-*
// @match         http://*.imagedecode.com/img-*
// @match         http://*.imagepremium.com/view*
// @match         http://*.shareimage.ro/view*
// @match         http://howtohemorrhoidscure.com/view*
// @match         http://*.imagefruit.com/img*
// @match         http://*.imagefruit.com/show*
// @match         http://*.hentai-hosting.com/view*
// @match         http://*.gallery.jpavgod.com/view*
// @match         http://*.imgonion.com/img*
// @match         http://*.miragepics.com/view*
// @match         http://*.freeimagehosting.net/*
// @match         http://*.gratisimage.dk/share*
// @match         http://*.keptarolo.hu/*
// @match         http://www.uploadhouse.com/view*
// @match         http://*.x05.org/show*
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
// @match         http://www.xtremeshack.com/image/*
// @match         http://*.mrjh.org/gallery.php?entry=*
// @match         http://*.ipicture.ru/Gallery/Viewfull/*
// @match         http://*.itmages.ru/image/view*
// @match         http://*.pohrani.com/*
// @match         http://shrani.najdi.si/*
// @match         http://*.iv.pl/view*
// @match         http://*.hostingfailov.com/photo/*
// @match         http://www.picamatic.com/view*
// @match         http://*.image18.org/show/*
// @match         http://*.pic4you.ru/*
// @match         http://picload.org/view*
// @match         http://*.moyophoto.com/share-*
// @match         http://www.imageboss.net/view*
// @match         http://*.thebestpichost.com/picture/*
// @match         http://*.lostpic.net/?photo=*
// @match         http://subefotos.com/ver/*
// @exclude       http://subefotos.com/ver/*#codigos
// @match         http://*.seedimage.com/P/show*
// @match         http://*.pixsor.com/share*
// @match         http://*.pixsor.com/XXX/share*
// @match         http://*.imgtheif.com/image/*
// @match         http://*.image-share.com/i*html
// @match         http://*.uaimage.com/*
// @match         http://*.npicture.net/share-*
// @match         http://*.img.acianetmedia.com/*
// @match         http://www.2imgs.com/*
// @match         http://*.overpic.net/view*
// @match         http://*.unlimitedpicture.com/?*
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
// @match         http://*.imageshost.ru/photo*
// @match         http://www.imagebanana.com/view*
// @match         http://*.imagestime.com/show*
// @match         http://sharenxs.com/view*
// @match         http://img4.imagetitan.com/img*
// @match         http://*.imagenpic.com/*
// @match         http://*.stuffed.ru/images*
// @match         http://*.wstaw.org/w/*
// @match         http://pikucha.ru/*
// @match         http://www.imagesocket.com/photos*
// @match         http://www.imagesocket.com/social*
// @match         http://*.youpic.ru/view*
// @match         http://imageban.net/show*
// @match         http://*.otofotki.pl/*
// @match         http://*.imgsin.com/view*
// @match         http://*.imagenetz.de/*
// @match         http://pix.toile-libre.org/?img*
// @match         http://uppix.com/s*
// @match         http://www.servimg.com/image*
// @match         http://*.upix.me/files*
// @match         http://*.pixelup.net/image*
// @match         http://*.pixelup.net/image*
// @match         http://*.picsee.net/*
// @match         http://www.fotosik.pl/pokaz_obrazek/pelny*
// @match         http://imagebin.org/*
// @match         *://dumpyourphoto.com/photo*
// @match         http://*.depic.me/*
// @match         http://www.xup.in/dl*
// @match         http://*.foto-save.ru/full/
// @match         http://*.hostpornpics.net/view*
// @match         http://*.flickimg.com/*
// @match         http://*.sexseeimage.com/image*
// @match         http://*.hotchyx.com/d*
// @match         http://*.imgns.com/pt*
// @match         http://*.ultraimg.com/*
// @match         http://ima.so/*
// @match         http://*.kinkypic.net/show*
// @match         http://*.imagerocket.net/view*
// @match         http://*.imageupper.com/i/*
// @match         http://*.mypixxx.lonestarnaughtygirls.com/?*
// @match         http://*.ifap.co/?v=*
// @match         http://*.pixtn.com/view*
// @match         *://beeimg.com/view*
// @match         http://www.noelshack.com/*.*
// @match         http://www.zupmage.eu/image*
// @match         http://*.picstwist.com/img*
// @match         http://thumbsnap.com/*
// @match         http://*.deffe.com/image*
// @match         http://flickcabin.com/*/view*
// @match         http://*.image-shed.com/show*
// @match         http://*.imgnook.com/*
// @match         http://*.imageno.com/*.html
// @match         http://*.imagehousing.com/image*
// @match         http://www.rapidjoy.com/p*
// @match         http://pixpipeline.com/d/*
// @match         http://www.picfront.org/d/*
// @match         http://*.theimghost.com/?*
// @match         http://*.instaimagehost.com/*.html
// @match         http://*.imagehost.thasnasty.com/?*
// @match         http://*.imagilive.com/*.htm*
// @match         http://*.thepornfeeds.com/?*
// @match         http://*.piratescreen.com/*
// @match         http://*.hotimages.eu/img-*
// @match         http://*.picturevip.com/*
// @exclude       http://*.picturevip.com/x/clean/
// @match         http://*.emptypix.com/*
// @match         http://*.hornyimage.com/show*
// @match         http://img.3ezy.net/*.htm
// @match         http://*.xximg.net/img-*
// @match         http://*.zaslike.com/view*
// @match         http://www.zimagez.com/zimage*
// @match         http://*.someimage.com/*
// @match         http://*.sexyxpixels.com/?v=*
// @match         http://*.postimg.net/view*
// @match         http://*.imagedomino.com/?v=*
// @match         http://*.pixhub.eu/images/show*
// @match         http://*.pictureturn.com/*.html
// @match         http://*.cubeupload.com/im/*
// @match         http://*.pixentral.com/show*
// @match         http://www.photo-host.org/view-image/*
// @match         http://www.fotoszok.pl/show*
// @match         http://*.imglink.ru/show*
// @match         http://zapodaj.net/*.html
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
// @match         http://*.sxpics.net/img-*
// @match         http://*.gallerycloud.net/img-*
// @match         http://*.tryimg.com/?v=*
// @match         http://img.deli.sh/view*
// @match         http://www.webm6.com/op-*.host
// @match         http://*.picturespk.pk/view*
// @match         http://*.imagevau.eu/view*
// @match         http://up.sukrbnat.com/view*
// @match         http://bilder.nixhelp.de/display-*
// @match         http://*.funextra.hostzi.com/view*
// @match         http://*.freakimage.com/view*
// @match         http://imgbin.me/view*
// @match         http://*.fotoo.pl/show.php?img=*.html
// @match         http://*.rapid-img.de/img.php?f=*
// @match         http://*.images.vyjimecny.cz/share.php?id=*
// @match         http://*.1pics.ru/view-*
// @match         http://*.1pics.ru//view-*
// @match         http://*.picthost.net/v.php?id=*
// @match         http://*.imghostr.me/*
// @match         http://*.tinyphoto.net/show-image.php?id=*
// @match         http://*.ushareimg.com/view*
// @match         http://*.upload.djmaster.fr/?v=*
// @match         http://img.pereslavl.ru/share*
// @match         http://images.maxigame.by/share*
// @match         http://*.dwimg.com/view*
// @match         http://uprapide.com/* 
// @match         http://www.imageurlhost.com/view*
// @match         http://*.picdir.net/show/*
// @match         http://*.uploadyourimages.org/*.html
// @match         http://*.imagesup.net/* 
// @match         http://*.blackcatpix.com/v.php?id=*
// @match         http://*.picgarage.net/public/*
// @match         http://*.myminifile.com/?v=*
// @match         http://*.superkipje.com/view*
// @match         http://www.2i.sk/*
// @match         http://*.digitalfrenzy.net/share-*
// @match         http://www.imgadult.com/img-*
// @match         http://www.picshot.pl/public/view*
// @match         http://*.imageho.st/*
// @match         http://*.imagesmax.de/display-*
// @match         http://*.ifotos.pl/zobacz/*
// @match         http://*.voila.pl/index.php?f=*
// @match         http://www.zimage.fr/photo.php?id=*
// @match         http://www.zimage.fr/taillereel.php?id=*
// @match         http://ngarko.online.fr/view*
// @match         http://*.b4he.com/?v=*
// @match         http://*.fullimg.com/?v=*
// @match         http://*.oxily.com/?*
// @match         http://ghanaimages.co/?*
// @match         http://*.imgplus.info/view*
// @match         http://*.x45x.info/?*
// @match         http://firepic.org/?v=*
// @match         http://*.nium.co/*
// @match         http://*.seeit.bz/*
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
// @match         http://bildr.no/view*
// @match         http://*.hosttrain.org/share*
// @match         http://www.imagestorming.com/*
// @match         http://*.photolair.net/images/*.html
// @match         http://*.tuspics.net/*
// @match         http://*.freepicninja.com/*
// @match         http://www.subeimagenes.com/img*
// @match         http://www.fotosupload.com/mostrar.php?imagen=*
// @match         http://screenshot.ru/*
// @match         http://*.picrak.com/view*
// @match         http://*.picspider.de/show*
// @match         http://*.hostpix.de/show.php?img* 
// @match         http://*.ld-host.de/show*
// @match         http://*.flexhost.de/photo* 
// @match         http://*.freeuploadimages.org/view*
// @match         http://*.javimage.us/view*
// @match         http://smages.com/?v=*
// @match         http://image.auditory.ru/view*
// @match         http://*.hostingkartinok.com/show-image.php?id=*
// @match         http://*.4put.ru/*max*
// @match         http://*.goload.ru/?v=*
// @match         http://www.pictureshack.ru/view*
// @match         http://*.host99.byethost4.com/share.php?id=*
// @match         http://upanh.depmely.com/share*
// @match         http://*.eazypics.net/share*
// @match         http://*.image.sabyjai.org/share*
// @match         http://*.image.shabab20.net/share*
// @match         http://xtupload.com/share.php?id=*
// @match         http://t.williamgates.net/share*
// @match         http://*.upload.fpsthailand.com/share.php?id=* 
// @match         http://*.fapomatic.com/v*
// @match         http://photosex.biz/v.php?id=*
// @match         http://*.celebimg.com/2*
// @match         http://*.imageteam.org/img-*
// @match         http://*.fotoshara.pl/*.html
// @match         http://*.screencity.pl/*.html
// @match         http://*.x.thebestpichost.com/*
// @match         http://*.hostimage.ru/photo*
// @match         http://hostpic.de/?b=*
// @match         http://www.yourimage24.de/view*
// @match         http://www.loaditup.de/*.html
// @match         http://*.chickupload.com/show*
// @match         http://www.images.woh.to/?*
// @match         http://*.imgbox.de/show/img*
// @match         http://*.picszone.net/view*
// @match         http://*.p1c.in/p*
// @match         http://*.images.share-films.net/view*
// @match         http://www.uploadking.biz/show*
// @match         http://*.roboimages.com/view*
// @match         http://foto.xhost.lv/show.php?img=*
// @match         http://*.imagenic.net/view*
// @match         http://*.imagefile.org/view*
// @match         http://*.onimage.net/show*
// @match         http://*.uploadagent.de/show*
// @match         http://www.pixoload.de/?*
// @match         http://*.bildjunkies.de/view*
// @match         http://*.imagetotal.de/image.php?fileID=*
// @match         http://pix.hostux.net/*
// @match         http://*.uppic.ilovemyshopping.com/view*
// @match         http://*.marmolak.net/view*
// @match         http://*.foto.hcfor.pl/view*
// @match         http://*.iuploader.com/view*
// @match         http://*.up.daniyalonline.com/view*
// @match         http://*.slikosef.pajek.net/view*
// @match         http://*.imagegecko.com/view*
// @match         http://*.imagesticky.com/view*
// @match         http://*.pic.tooptarinha.com/view*
// @match         http://*.up.dlu3at.net/view*
// @match         http://*.poopr.org/view*
// @match         http://*.xp-images.hi2.ro/view*
// @match         http://*.dayzeddesigns.com/view*
// @match         http://*.freeimghosting.co.uk/view*
// @match         http://*.123poze.3x.ro/view*
// @match         http://*.photostand.co.za/view*
// @match         http://*.upload.removed.us/view*
// @match         http://*.images-hosting.tk/view*
// @match         http://demo.chevereto.com/*
// @match         http://*.imagewoof.com/view_image*
// @match         http://*.hostimg.org/show-image.php?id=*
// @match         http://*.ximg.co.uk/view*
// @match         http://sl-images.ath.cx/view* 
// @match         http://*.picatom.com/* 
// @match         http://*.picmoe.net/d.php?id=* 
// @match         http://*.imagerule.com/view*
// @match         http://*.imagepussy.com/view*
// @match         http://*.7image.ru/v.php?id=*
// @match         http://www.picshare.ru/view*
// @match         http://*.bien-vue.com/view*
// @match         http://*.pics.tam.in.ua/showpic.php?p=*
// @match         http://*.xc5.ru/v.php?id=*
// @match         http://*.pikczery.pl/view*
// @match         http://*.tuxi.pl/view*
// @match         http://*.imghost.pl/index.php?id=*
// @match         http://*.udostepniaj.pl/view*
// @match         http://*.hosting-zdjec.pl/view*
// @match         http://*.zapisz.net/view*
// @match         http://www.imagehosting.cz/?v=* 
// @match         http://*.totalsimage.com/site/*
// @match         http://www.dumparump.com/view*
// @match         http://*.myxpic.com/showpic*
// @match         http://*.picness.com/image/*
// @match         http://h4z.it/View*
// @match         http://*.free-picload.de/pics/*
// @match         http://server5.upload69.net/view*
// @match         http://s6.snapgram.co/*
// @match         http://*.s1.pixmax.ru/view*
// @match         http://*.s1.pixmaxx.ru/view*
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
// @match         http://*.9foto.ru/photo/*
// @match         http://uploads.ru/*
// @match         http://*.picmania.com.ua/?v=*
// @match         http://*.storepic.com/show*
// @match         http://*.img-uploader.de/p*
// @match         http://www.myimg.de/?img=*
// @match         http://*.root-space.eu/file*
// @match         http://photodok.com/*
// @match         http://*.hot-file.org/p*
// @match         http://*.hostarea.de/show*
// @match         http://*.pokazal.ru/v.php?id=*
// @match         http://mepic.ru/view/?id=*
// @match         http://*.imgcandy.com/p*
// @match         http://*.4owl.info/view*
// @match         http://*.upislam.com/view*
// @match         http://*.ngarko.free.fr/view*
// @match         http://*.upload.qoonal.com/show*
// @match         http://*.add-screen.com/view*
// @match         http://*.image-upload.net/p*
// @match         http://image.siroro.co.uk/p*
// @match         http://into.na.tl/view*
// @match         http://shell.na.tl/view*
// @match         http://thaisharing.online.fr/view*
// @match         http://*.images.collectiontricks.it/view*
// @match         http://*.my-collection.ru/view*
// @match         http://img.schattorie.nl/view*
// @match         http://*.vipsforum.com/h/view*
// @match         http://*.forexrainbow.com/view*
// @match         http://*.imgupload.pl/view*
// @match         http://*.1y9y.com/view*
// @match         http://*.addpix.net/view*
// @match         http://*.tennis-image.com/view*
// @match         http://*.imagetoupload.com/show*
// @match         http://www.myuploadedimages.com/view*
// @match         http://*.imageupload.sketchupthai.com/view*
// @match         http://*.php-bb.ir/pic/view*
// @match         http://multihoster.saxonia-fighter.de/view*
// @match         http://*.img.mdy.ro/?*
// @match         http://*.mkerala.com/u/p*
// @match         http://knecht.novarata.net/?*
// @match         http://*.yadeller.biz/resimyolla/?*
// @match         http://*.img.delux.lv/?*
// @match         http://*.lordbost.com/images/?*
// @match         http://imagehosting.skem9.co.uk/p*
// @match         http://*.plusgamer.ir/img4up/?*
// @match         http://*.tiny-img.com/?*
// @match         http://*.img.irandeliver.com/?*
// @match         http://img.solpie.net/?*
// @match         http://*.xferz.com/?*
// @match         http://*.lgeoo.us/?*
// @match         http://*.intermcafe.com/imgh/p*
// @match         http://*.ddpic.2tl.in/p*
// @match         http://*.image.warmd.net/p*
// @match         http://*.fragcap.com/?*
// @match         http://*.img.wangolds.com/?*
// @match         http://thainguyen.mobi/p*
// @match         http://*.fmsecond.com/p*
// @match         http://*.up.kfesfahan.com/?*
// @match         http://*.dump.omertabeyond.com/p*
// @match         http://*.img.tfktech.com/p*
// @match         http://imagehost.freddyferdianjaya.com/?*
// @match         http://pic.freelian.com/?*
// @match         http://*.image.alesher.com/?*
// @match         http://ch.1798.in/?*
// @match         http://*.images.tapasilo.org/?*
// @match         http://upload.khontai.com/?*
// @match         http://pic.dnjc8.com/?*
// @match         http://*.image.pantyhosemania.info/?*
// @match         http://*.addyourpics.com/image*
// @match         http://*.imgnext.com/img-*
// @match         http://*.vippix.com/share*
// @match         http://*.qattach.com/p*
// @match         http://*.urimage.net/*
// @match         http://vmei.info/?* 
// @match         http://*.picfree.org/p*
// @match         http://*.imghs.teamfreewill.net/p*
// @match         http://*.imgant.com/p*
// @match         http://*.videoforall.org/p*
// @match         http://medias.allforever.net/p*
// @match         http://*.host4images.com/view*
// @match         http://*.imgbank.cz/*
// @match         http://hosting.tidus.eu/?*
// @match         http://*.nyanimg.com/*
// @match         http://*.picr.ws/*
// @match         http://*.geekpics.in/*
// @match         http://*.pikz.co/*
// @match         http://www.ownimg.com/*
// @match         http://*.liolink.com/*
// @match         http://*.fastpics.altervista.org/?*
// @match         http://*.imagesturk.net/*
// @match         http://*.imagesloading.altervista.org/?*
// @match         http://*.showmyimage.com/*
// @match         http://*.phpbbmods.it/immaggini* 
// @match         http://img.dulieu.net/*
// @match         http://*.givme.de/*
// @match         http://upload.crazycraft.pl/*
// @match         http://*.omgdb.net/*
// @match         http://*.mynameismiz.com/*
// @match         http://upload.supreme-elite.fr/?*
// @match         http://image.vsemrole.ru/*
// @match         http://up.vn-hello.com/*
// @match         http://*.oksee.pp.ua/*
// @match         http://*.imagefluff.com/?*
// @match         http://*.img.androidteclive.com/*
// @match         http://*.resimupload.org/*
// @match         http://*.fotohelp.kz/image*
// @match         https://*.myimg.me/*
// @match         http://i.ruspotting.net/*
// @match         http://*.upic.kz/*
// @match         http://imguploda.inamurajane.info/*
// @match         http://*.hosting.webspell.fr/*
// @match         http://*.photo.vietnamlib.net/?*
// @match         http://*.heberg-hush.org/?*
// @match         http://zuly.de/*
// @match         http://*.uplomax.com/*
// @match         http://*.planet-upload.eu/*
// @match         http://*.oltaciyukle.com/*
// @match         http://*.picto.lt/*
// @match         http://www.3intro.com/image/*
// @match         http://*.slikomanija.net/*
// @match         http://*.kaise123.com/img*
// @match         http://upload.vstanced.com/*
// @match         http://*.gurin.ee/*
// @match         http://*.up.hayah.cc/*
// @match         http://*.img.extremeldm.com/*
// @match         http://*.pichost.name/*
// @match         http://picstorage.eu/*
// @match         http://*.imgzi.com/*
// @match         http://*.22.io/*
// @match         http://*.img.dayzland.eu/*
// @match         http://*.pixit.hu/*
// @match         http://peach.warosu.org/*
// @match         http://*.fsfiles.org/*
// @match         http://*.giveimg.net/*
// @match         http://*.evopikz.net/?*
// @match         http://*.linkmypic.com/*
// @match         http://www.sxfoto.com/*
// @match         http://*.upanh.biz/*
// @match         http://*.host-my-image.de/*
// @match         http://*.i-pict.ru/*
// @match         http://*.imagend.com/*
// @match         http://brightpic.tk/*
// @match         http://*.ilimdunyasi.net/?*
// @match         http://*.imagerocket.com/*
// @match         http://*.piczhub.com/*
// @match         http://*.sharebreezy.com/?*
// @match         http://*.hyyathost.com/*
// @match         http://*.imghaze.com/*
// @match         http://*.imgratis.com/*
// @match         http://www.stfimages.com/*
// @match         http://strikeys-pic.com/*
// @match         http://*.picture.ms/*
// @match         http://*.compartirfoto.com/*
// @match         http://*.qoou.net/*
// @match         http://image.yhjkj.com/*
// @match         http://images.reptilescanada.com/*
// @match         http://*.imgcode.com/*
// @match         http://*.lakhdaria.net/imagebank/?*
// @match         http://*.webjardiner.com/hebergement_images_photos/image*
// @match         http://*.zagruzitfoto.com/*
// @match         http://www.cweb-pix.com/*
// @match         http://*.i39.org/img/*
// @match         http://*.intergranada.com/images/?*
// @match         http://*.partizansk.eu/foto/image*
// @match         http://*.xenopix.com/?*
// @match         http://*.wepic.ru/*
// @match         http://photo.goicam.vn/*
// @match         http://*.naeamysig.com/*
// @match         http://*.microforma.ru/*
// @match         http://*.gsmimagehost.com/*
// @match         http://tinysnaps.com/*
// @match         http://*.imgup.com/images*
// @match         http://*.goshimage.com/*
// @match         http://*.hippopic.com/beta*
// @match         http://*.razol.ru/?*
// @match         http://*.myimageshare.com/*
// @match         http://*.picgro.com/*
// @match         http://*.picturepush.com/public*
// @match         http://imgur.my/*
// @match         http://*.upload.sh3bawy.com/*
// @match         http://*.asan-gsm.com/picture*
// @match         http://www.pixelspeicher.com/*
// @match         http://*.graphicupload.com/*
// @match         http://*.imagenaked.com/?*
// @match         http://*.upload-image.fr/*
// @match         http://*.picselio.com/*
// @match         http://*.t4up.net/*
// @match         http://*.iezz.com/?*
// @match         http://*.xostpics.com/*
// @match         http://*.fileaimage.com/?*
// @match         http://*.images.gamewind.de/?*
// @match         https://*.images.baconbits.org/?*
// @match         http://*.pic.sheep7.com/*
// @match         http://*.kuvajako.com/*
// @match         http://*.upanh.ovo.vn/*
// @match         http://*.uploads.li/*
// @match         http://imgsavvy.com/img-*
// @match         http://*.imagesaur.com/*
// @match         http://*.wrzucaj.net/*
// @match         http://*.api.picx.me/?*
// @match         http://*.heberge-images.com/?*
// @match         http://*.yehpic.com/*
// @match         http://*.joepler.com/*
// @match         http://www.image.kg/*
// @match         http://*.imgdark.com/?*
// @match         http://*.primeimg.co/*
// @match         http://*.picshome.ru/?*
// @match         http://*.savemyimage.com/*
// @match         http://*.subeme.net/*
// @match         http://*.tndupload.com/*
// @match         http://pic.xtream-reallife.de/*
// @match         http://*.img.dramacafe.tv/*
// @match         http://*.hosturimage.com/img-*
// @match         http://*.xlocker.net/*.html
// @match         http://*.picup.in/*.html
// @match         http://*.love69.org/i/view*
// @match         http://*.pic-mir.ru/*/*
// @match         http://*.244pix.com/view*
// @match         http://*.imageview.me/view*
// @match         http://*.uploadimage.ro/view*
// @match         http://imgmaster.net/img-*
// @match         http://*.thro.bz/*
// @match         http://*.pixtreat.com/show.php*
// @match         http://*.imgflare.com/*/*
// @match         http://www.imagefap.com/photo/*
// @match         http://filefap.com/view*
// @match         *://imgur.com/*
// @exclude       *://imgur.com/*,*
// @exclude       *://imgur.com/memege*
// @match         http://motherless.com/*/*
// @match         http://*.imgult.com/img-*
// @match         http://*.send-up.ru/*
// @match         http://*.xpic.biz/*/view*
// @match         http://pictraff.ru/*/*/
// @match         http://*.tumblr.com/image/*
// @match         http://*.imgearn.net/*
// @match         http://*.imgheat.com/*.html
// @match         http://*.imageporter.com/*.html
// @match         http://*.damimage.com/img-*
// @match         http://fapping.empornium.sx/*
// @match         http://*.imagehovel.com/view*
// @match         http://cloudimg.net/img-*
// @match         http://*.imgfap.net/img-*
// @match         http://*.imageheli.com/img-*
// @match         http://*.img-zone.com/img-*
// @match         http://*.imageback.info/view*
// @match         http://*.imagepong.info/view*
// @match         http://*.bulkimg.info/img-*
// @match         http://*.img.spicyzilla.com/img-*
// @match         http://*.imgstudio.org/img-*
// @match         http://*.imgsure.com/*
// @exclude       http://*.imgsure.com/uc.php*
// @match         http://*.onlinepic.net/share*
// @match         http://imgboxxx.com/view*
// @match         http://*.imghere.net/view*
// @match         http://www.torrentzet.com/view*
// @match         http://*.xxxces.com/view*
// @match         http://*.imghash.com/?v=*
// @match         http://*.imagedomino.net/?v=*
// @match         http://*.sharepic.biz/show-image.php?id=*
// @match         http://*.photoup.biz/view*
// @match         http://f-lite.ru/*
// @match         http://*.imgup.nl/*
// @match         http://*.pixel.so/*
// @match         http://*.kuvapankki.in/*
// @match         http://*.picify.com/?v=*
// @match         http://img.titank.com/*
// @match         http://*.vipeep.com/*
// @match         http://*.imgskull.info/img-*
// @match         http://*.imagehost.thehateugave.com/*
// @match         http://*.picturescream.com/*
// @match         http://*.imgleech.com/?*
// @match         http://*.imgdone.com/view*
// @match         http://*.imghoney.com/view*
// @match         http://*.pictureupl.info/?*
// @match         http://*.4ufrom.me/view*
// @match         http://*.img3x.net/view*
// @match         http://www.2i.cz/*
// @match         http://2tu.me/view*
// @match         http://awesomescreenshot.com/*
// @match         http://*.istoreimg.com/i/*
// @match         http://*.catpic.biz/view*
// @match         http://*.catpic.biz/x/view*
// @match         http://*.imgcoin.net/img-*
// @match         http://*.08lkk.com/Image/img-*
// @match         *://*.flickr.com/photos/*/*
// @exclude       /^https?://(www\.)?flickr\.com/photos/([^/]+)/(sets/.*|page.*)?$/
// @match         http://*.imgrex.com/view*
// @match         http://www.amateri.cz/g*/*
// @match         http://*.imgshow.me/*
// @match         *://*.wikipedia.org/wiki/File:*.jp*
// @match         *://*.wikipedia.org/wiki/File:*.png
// @match         http://*.imgking.us/view*
// @match         http://*.dragimage.org/img-*
// @match         http://*.xxxscreens.com//img-*
// @match         http://*.trikyimg.com//img-*
// @match         http://*.trikyimg.com/img-*
// @match         http://*.pixpal.net/*.html
// @match         http://avenuexxx.com/*-*
// @match         http://www.bilderhoster.net/*.html
// @match         http://*.imgfun.biz/img-*
// @match         http://iceimg.com/*/*
// @match         http://*.dtpics.biz/img-*
// @match         http://*.xxxscreens.com/img-*
// @match         http://*.imgdope.com/view*
// @match         http://*.imagehost.eu/*
// @match         http://*.sexyimage.imagepool.in/share-*
// @match         http://*.picbank.org/image/*
// @match         http://*.storeimgs.net/img-*
// @match         http://*.imgpaying.com/*/*
// @match         http://*.aveimage.com/view*
// @match         http://*.fappic.com/*
// @match         http://*.imagenimage.com/*/*
// @match         http://*.adultur.com/img-*
// @match         http://*.imageshimage.com/*/*
// @match         http://www.urpichost.com/?v=*
// @match         http://*.imgswift.com/*/*
// @match         http://*.imgdoze.com/share.php?*
// @match         http://*.imageporn.eu/?v=*
// @match         http://500px.com/photo/*
// @match         http://www.piking.us/show.php/*
// @match         http://*.gokoimage.com/img-*
// @match         http://*.greenpiccs.com/images/*.html
// @match         http://*.hostmat.eu/view*
// @match         http://*.pic.apollon-fervor.com/img-*
// @match         http://*.image.adlock.in/img-*
// @match         http://*.photobucket.com/user/*/media/*.htm*
// @match         http://www.picrar.com/view*
// @match         http://*.imagepool.in/share*
// @match         http://imgv.net/*.html
// @match         http://www.imgshots.com/img*
// @match         http://*.3xplanet.com/view*
// @match         http://*.imgmega.com/*.html
// @match         http://*.imgsee.me/*.html
// @match         http://img.yt/img-*
// @match         http://*.payforpic.ru/*/*/
// @match         http://*.pic4cash.ru/*.html
// @match         http://*.pic4cash.ru/full/
// @match         http://*.imgchili.mcdir.ru/v*
// @match         http://*.keep4u.ru/full/*
// @match         http://*.imgfeel.com/img-*
// @match         http://*.imageeer.com/img-*
// @match         http://*.pic.re/*.html
// @match         http://*.imagebucks.biz/*/*
// @match         http://*.freshpics.ru/*/*/
// @match         http://imglocker.com/*/*
// @match         http://imgspot.org/img*
// @match         http://picexposed.com/*.html
// @match         http://*.imgpapa.com/img-*
// @match         http://*.sexyimg.eu/img-*
// @match         http://*.imglemon.com/img-*
// @match         http://*.imgseeds.com/image/*
// @match         http://*.pronpic.org/*/*
// @match         http://prntscr.com/*
// @match         http://*.imgdream.net/view*
// @match         http://*.imgtab.net/*
// @match         http://*.madimage.org/img-*
// ==/UserScript==

if (typeof unsafeWindow === "undefined")
{
	unsafeWindow = window;
}

var menuID;
if (typeof GM_registerMenuCommand !== "undefined")
{
	menuID = GM_registerMenuCommand("Handy Image Configuration", cfg, "C");
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

function ev(q){return document.evaluate(q,document.body,null,9,null).singleNodeValue;}
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
	if(!(FireFox && i.src.lastIndexOf(".gif") != -1)) // NOT firefox + gif = no animation
	{
		unsafeWindow.stop();
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
	time += 3000; // 3 sec to help quit double-pages
	now.setTime(time);
	now.toGMTString();
	document.cookie = 'backhji=; expires=' + now.toGMTString() + '; path=/';
}

function makeimage()
{
	loadCfg();
	if(cfg_direct){window.location.href = i.src;return false;}
	if(cfg_bgclr){document.body.bgColor = cfg_bgclr;}
	document.body.style.margin = "0px";
	document.body.innerHTML = "<style>img { position: absolute; top: 0; right: 0; bottom: 0; left: 0; }</style>"; // center image
	ws();
	var isrc = i.src;
	i = document.createElement("img");
	i.src = isrc;
	i.style.margin = "auto"; // center image
	document.body.appendChild(i);
	i.addEventListener("click", rescale, true);
	unsafeWindow.addEventListener("keydown", onkeydown, true);
	if(dp){console.warn("you are on a double-page image hosting (probably)");unsafeWindow.addEventListener("beforeunload", onbeforeunload, true);}
	autoresize();
}

function find_text_in_scripts(a, b)
{
	var s = document.getElementsByTagName("script");
	for(var c=0;c<s.length;c++) 
	{
		var start_pos = s[c].innerHTML.lastIndexOf(a);
		if(start_pos == -1){continue;}
		start_pos += a.length;
		i = s[c];
		i.src = decodeURIComponent(s[c].innerHTML.substring(start_pos,s[c].innerHTML.indexOf(b,start_pos)).split("\\").join("")); // slpit\join fix for stupidfox GreaseMonkey
		return true;
	}
	return false;
}

function makeworld()
{
	if(i){return false;}
	// per-host image detection
	switch (iurl)
	{
	case "github.com":
		i=1;cfg();break;
	case "vvcap.net":
	case "simplest-image-hosting.net":
	case "hostpic.de":
	case "hostimage.ru":
	case "gluner.de":
	case "imagebin.ca":
	case "iceimg.com":
	case "pics.tam.in.ua":
		i = ev('.//img');
		break;
	case "tryimg.com":
		i = ev('.//a[not(contains(@href,"' + iurl + '"))]/img');
		break;
	case "savepic.org":
		i = ev('.//a/img[not(contains(@src,"/images/"))]');
		break;
	case "motherless.com":
		i = ev('.//div[@id="media-media"]/div/a/img');
		break;
	case "awesomescreenshot.com":
		i = ev('.//img[@id="screenshot"]');
		break;
	case "imagefap.com":
		i = ev('.//a[@imageid="'+window.location.pathname.substring(7,window.location.pathname.lastIndexOf("/"))+'"]');
		if(i){i.src = i.href;}
		break;
	case "imgur.com":
		j = true;
		i = ev('//meta[@name="twitter:image"]');
		if(i){i.src = i.content;}
		break;
	case "directupload.net":
	case "bilderhoster.net":
	case "noelshack.com":
	case "prntscr.com":
		i = ev('//meta[@property="og:image" or @name="og:image"]');
		if(i){i.src = i.content;}
		break;
	case "flickr.com":
	case "secure.flickr.com":
		if(!find_text_in_scripts('"url":"', '"'))
		{
			if(i = document.getElementById("share-options-embed-textarea-o-bbcode"))
			{
				i.src = i.value.substring(i.value.indexOf("[img]")+5, i.value.indexOf("[/img]"));
			}
		}
		break;
	case "imageshack.com":
		i = ev('.//img[@data-width]');
		break;
	case "imgnook.com":
	case "h4z.it":
		i = document.images[2];
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
	case "imagetoupload.com":
	case "pixtreat.com":
	case "piking.us":
	case "imgshots.com":
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
	case "cweb-pix.com":
	case "imagehost.thehateugave.com":
		i = ev('.//img[@id="full_image"]');
		break;
	case "depic.me":
		i = ev('.//img[@id="pic"]');
		break;
	case "xup.in":
		i = ev('.//img[contains(@src,"/exec/")]');
		break;
	case "image2you.ru":
		i = ev('.//img[contains(@src,"images/")]');
		if(i){i.src = i.src.replace('2_', '');}
		break;
	case "upix.me":
		i = ev('.//a');
		if(i){i.src = window.location.href.replace("#","");}
		break;
	case "jpegbay.com":
		i = ev('.//a[@class]');
		if(i){i.src = i.href;}
		break;
	case "keep4u.ru":
		i = ev('.//img[contains(@src,"/b/")]');
		break;
	case "euro-pic.eu":
	case "picpicture.com":
	case "picfox.org":
	case "freeimage.us":
	case "xxx.freeimage.us":
	case "pixsor.com":
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
	case "upload.fpsthailand.com":
	case "vippix.com":
	case "onlinepic.net":
	case "sexyimage.imagepool.in":
	case "imgdoze.com":
	case "imagepool.in":
		//i = ev('.//img[@id="iimg"]');
		find_text_in_scripts("<img src='", "'");
		break;
	case "amateri.cz":
		if(find_text_in_scripts('var orig_url="', '"'))
		{
			i.src = i.src.replace('http://www.amateri.cz/orig.php?&img=', 'http://img2.amateri.cz/users/');
		}
		break;
	case "500px.com":
		find_text_in_scripts('"image_url":["', '"');
		break;
	case "pix-x.net":
		i = ev('.//td/img[contains(@src,"thumb")]');
		if(i){i.src = i.src.replace('-thumb', '');i.src = i.src.replace('img_thumb', 'img_full');}
		break;
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
	case "pic-mir.ru":
	case "pictraff.ru":
	case "payforpic.ru":
	case "freshpics.ru":
	case "imglocker.com":
		i = ev('.//img[contains(@src,"thumb")]');
		if(i){i.src = i.src.replace('-thumb', '');i.src = i.src.replace('img_thumb', 'img_full');i.src = i.src.replace('_thumb', '');}
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
	case "sharenxs.com":
		i = ev('.//img[contains(@src,"/thumbnails/")]');
		if(i){i.src = i.src.replace('/thumbnails/', '/images/');
		i.src = i.src.replace('/tn-', '/');
		i.src = i.src.replace('/mid/', '/wz/');}
		break;
	case "radikal.ru":
	case "radical-foto.ru":
	case "radikal-foto.ru":
	case "f-page.ru":
	case "f-lite.ru":
	case "f-picture.net":
		find_text_in_scripts('"Url":"', '"');
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
	case "imagehost.eu":
	case "fappic.com":
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
	case "imgv.net":
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
	case "imagevau.eu":
	case "up.sukrbnat.com":
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
	case "tuxi.pl":
	case "hosting-zdjec.pl":
	case "upislam.com":
	case "add-screen.com":
	case "into.na.tl":
	case "shell.na.tl":
	case "my-collection.ru":
	case "img.schattorie.nl":
	case "vipsforum.com":
	case "forexrainbow.com":
	case "imgupload.pl":
	case "addpix.net":
	case "tennis-image.com":
	case "myuploadedimages.com":
	case "imageupload.sketchupthai.com":
	case "php-bb.ir":
	case "multihoster.saxonia-fighter.de":
	case "imgdone.com":
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
	case "pronpic.org":
		i = ev('.//img[contains(@src,"/pic/")]');
		if(i){i.src = i.src.replace('th_', '');}
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
	case "imgmega.com":
	case "pic.re":
		i = ev('.//input[@value="Continue to image..."]');
		if(i)
		{
			i.click();
			break;
		}
		i = ev('.//img[contains(@onload,"scale")]');
		break;
	case "img3x.net":
	case "imgsee.me":
		i = ev('.//input[@type="submit"]');
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
	case "upload.qoonal.com":
	case "imagehovel.com":
	case "imgchili.mcdir.ru":
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
	case "pic4cash.ru":
		var f = document.getElementsByTagName("button");
		if(f.length)
		{
			f[0].click();
			break;
		}
		dp=true;
		i = ev('.//img[contains(@src,"/pic.jpeg")]');
		break;
	case "freeimagehosting.net":
	case "uploadhouse.com":
	case "pixhub.eu":
	case "fotos-hochladen.net":
	case "voila.pl":
	case "ld-host.de":
	case "fapomatic.com":
	case "picshare.ru":
	case "imgearn.net":
	case "imgtab.net":
		i = ev('.//img[contains(@src,"uploads/")]');
		break;
	case "xtremeshack.com":
	case "picbank.org":
		i = ev('.//img[contains(@src,"/photos/")]');
		break;
	case "images.orzzso.com":
	case "picturepush.com":	
		i = ev('.//img[contains(@src,"/photo/")]');
		break;
	case "imagerocket.net":
		i = ev('.//a[contains(@href,"/photos/")]');
		if(i){i.src = i.href;}
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
	case "imagebucks.biz":
		i = ev('.//input[@type="submit"]');
		dp=true;
		if(i) 
		{
			i.click();
			break;
		}
	case "casimages.com":
	case "thebestpichost.com":
	case "imagebanana.com":
	case "deffe.com":
	case "ifotos.pl":
	case "subeimagenes.com":
	case "x.thebestpichost.com2":
	case "imgcode.com":
	case "pixpal.net":
	case "imgpaying.com":
	case "picexposed.com":
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
	case "thaisharing.online.fr":
	case "xlocker.net":
	case "imgflare.com":
	case "filefap.com":
	case "imgheat.com":
	case "xxxces.com":
	case "4ufrom.me":
	case "imgswift.com":
		i = ev('.//img[contains(@src,"/files/")]');
		break;
	case "image18.org":
	case "imguploda.inamurajane.info":
		i = ev('.//img[contains(@src,"/file/")]');
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
	case "imgadult.com":
		i = ev('.//a[@class="overlay_ad_link"]');
		if(i)
		{
			var now = new Date();
			var time = now.getTime();
			time += 360 * 1000;
			now.setTime(time);
			document.cookie = 'user=' + 'true' + 
				'; expires=' + now.toGMTString() + 
				'; path=/';
			window.location.href = window.location.pathname + "?imgContinue=1";
			break;
		}
	case "imgbar.net":
		i = ev('.//img[contains(@src,"view/")]');
		break;
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
	case "imgonion.com":
	case "xximg.net":
	case "x.xximg.net":
	case "sxpics.nl":
	case "sxpics.net":
	case "img.spicyzilla.com":
	case "imgskull.info":
	case "bulkimg.info":
	case "img-zone.com":
	case "trikyimg.com":
	case "image.adlock.in":
	case "img.yt":
	case "imgfeel.com":
	case "xxxscreens.com":
	case "imgpapa.com":
	case "imglemon.com":
		dp=true;
		var f = document.getElementsByTagName("input");
		if(f.length)
		{
			f[f.length-1].click();
			break;
		}
	case "imgplate.com":
	case "myhotimage.com":
	case "picstwist.com":
	case "hotimages.eu":
	case "fotoszok.pl":
	case "gallerycloud.net":
	case "imagetotal.de":
	case "imgsavvy.com":
	case "3xvintage.com":
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
	case "imgstudio.org":
	case "imgfap.net":
	case "pic.apollon-fervor.com":
	case "imageeer.com":
	case "imgspot.org":
	case "sexyimg.eu":
	case "madimage.org":
		i = ev('.//img[contains(@src,"/upload/")]');
		break;
	case "xxx.image-server.ru":
	case "image-server.ru":
	case "avenuexxx.com":
		i = ev('.//img[contains(@src,"/upload")]');
		break;
	case "imageontime.com":
		i = ev('.//img[contains(@src,"/big/")]');
		break;
	case "cloudimg.net":
	case "imgtube.net":	
		i = ev('.//input[@value="Continue to image"]');
		dp=true;
		if(i) 
		{
			$("browser_fingerprint").value = unsafeWindow.pstfgrpnt(true);
			i.click();
		}
		else
		{
			i = ev('.//img[contains(@src,"/uploads/")]');
		}
		break;
	case "imgsure.com":
		i = ev('.//input[@value="Continue to image"]');
		dp=true;
		if(i) 
		{
			i.click();
		}
		else
		{
			i = ev('.//img[contains(@src,"uploads/")]');
		}
		break;
	case "imageheli.com":
		i = ev('.//input[@value="Continue to image"]');
		dp=true;
		if(i) 
		{
			i.click();
		}
		else
		{
			i = ev('.//img[contains(@src,"/images/")]');
		}
		break;
	case "ruleimg.com":
		i = ev('.//img[@alt="image"]');
		break;
	case "3xplanet.com":
		i = ev('.//img[@alt="picContent"]');
		break;
	case "zagruzitfoto.com":
		i = ev('.//img[contains(@src,"' + iurl + '/images/")][@alt]');
		break;
	case "subirimagenes.com":
		i = ev('.//input[@type="submit"][@id="boton"]');
		dp=true;
		if(i) 
		{
			i.click();
			break;
		}
		i = ev('.//img[contains(@onclick,"scale")]');
		break;
	case "image-share.com":
	case "ima.so":
	case "imageho.st":
	case "flexhost.de":
	case "xpic.biz":
		i = ev('.//img[contains(@src,"upload/")]');
		break;
	case "bilder-upload.eu":
		i = ev('.//input[contains(@src,"upload/")]');
		break;
	case "picload.org":
	case "imagecross.com":
	case "npicture.net":
	case "uprapide.com":
	case "roboimages.com":
	case "public-pic.de":
		i = ev('.//img[contains(@src,"' + iurl + '/image")]');
		break;
	case "imgns.com":
		i = ev('.//img[contains(@src,"dt")]');
		if(i)
		{
			i.src = i.src.replace('dt', 'di');
		}
		break;
	case "imagesup.net":
	case "picfree.org":
	case "imghs.teamfreewill.net":
	case "imgant.com":
	case "videoforall.org":
	case "medias.allforever.net":
		i = ev('.//a[contains(@href,"/di-")]');
		if(i)
		{
			i.src = i.href;
		}
		break;
	case "rapidjoy.com":
	case "cyberpics.net":
	case "fastimages.ru":
	case "p1c.in":
	case "img-uploader.de":
	case "hot-file.org":
	case "imgcandy.com":
	case "image-upload.net":
	case "image.siroro.co.uk":
	case "imagehosting.skem9.co.uk":
	case "intermcafe.com":
	case "ddpic.2tl.in":
	case "thainguyen.mobi":
	case "image.warmd.net":
	case "fmsecond.com":
	case "dump.omertabeyond.com":
	case "img.tfktech.com":
	case "qattach.com":
	case "fotohelp.kz":
	case "mkerala.com":
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
	case "img.mdy.ro":
	case "knecht.novarata.net":
	case "yadeller.biz":
	case "img.delux.lv":
	case "lordbost.com":
	case "plusgamer.ir":
	case "tiny-img.com":
	case "img.irandeliver.com":
	case "img.solpie.net":
	case "xferz.com":
	case "lgeoo.us":
	case "fragcap.com":
	case "img.wangolds.com":
	case "up.kfesfahan.com":
	case "imagehost.freddyferdianjaya.com":
	case "pic.freelian.com":
	case "image.alesher.com":
	case "ch.1798.in":
	case "images.tapasilo.org":
	case "upload.khontai.com":
	case "pic.dnjc8.com":
	case "image.pantyhosemania.info":
	case "vmei.info":
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
			window.location.href = i.href;
			break;
		}
	case "imgnip.com":
	case "mrjh.org":
	case "stuffed.ru":
	case "pixtn.com":
	case "postimg.net":
	case "img.deli.sh":
	case "rapid-img.de":
	case "imghostr.me":
	case "ushareimg.com":
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
	case "images-hosting.tk":
	case "xc5.ru":
	case "imghost.pl":
	case "udostepniaj.pl":
	case "s1.pixmax.ru":
	case "s1.pixmaxx.ru":
	case "ngarko.free.fr":
	case "images.collectiontricks.it":
	case "244pix.com":
	case "imageview.me":
	case "imageback.info":
	case "imagepong.info":
	case "imgboxxx.com":
	case "imghere.net":
	case "imghoney.com":
	case "imgking.us":
	case "imgdope.com":
	case "hostmat.eu":
	case "picrar.com":
	case "imagedomino.net":
	case "imgdream.net":
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
	case "1y9y.com":
	case "host4images.com":
	case "2tu.me":	
	case "aveimage.com":
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
	case "imgbox.de":
	case "imagehosting.cz":
	case "server5.upload69.net":
	case "9foto.ru":
	case "picmania.com.ua":
	case "4owl.info":
	case "hosting.tidus.eu":
	case "imagesloading.altervista.org":
	case "phpbbmods.it":
	case "photo.vietnamlib.net":	
	case "kaise123.com":
	case "gurin.ee":
	case "fsfiles.org":
	case "giveimg.net":
	case "ilimdunyasi.net":
	case "sharebreezy.com":
	case "lakhdaria.net":
	case "ebjardiner.com":
	case "i39.org":
	case "partizansk.eu":
	case "webjardiner.com":
	case "imgup.com":
	case "hippopic.com":
	case "asan-gsm.com":
	case "iezz.com":
	case "fileaimage.com":
	case "picify.com":
	case "picturescream.com":
	case "urpichost.com":
		i = ev('.//img[contains(@src,"/images/")]');
		break;
	case "intergranada.com":
		i = ev('.//img[contains(@src,"/images/images/")]');
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
	case "sharepic.biz":
		i = ev('.//img[contains(@src,"pictures/")]');
		break;
	case "xenopix.com":
		i = ev('.//img[contains(@src,"/pix/")]');
		break;
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
	case "ownimg.com": 
	case "imagefluff.com":
	case "picstorage.eu":
	case "peach.warosu.org":
	case "brightpic.tk":
	case "imageporter.com":
	case "imagenimage.com":
	case "imageshimage.com":
		i = ev('.//img[contains(@src,"/i/")]');
		break;
	case "pixpipeline.com":
		i = ev('.//img[contains(@src,"/s/")]');
		break;
	case "2imgs.com":
	case "2i.sk":
	case "2i.cz":	
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
	case "love69.org":
	case "picup.in":
	case "photoup.biz":
	case "catpic.biz":
		i = ev('.//a[contains(@href,"/images/")]');
		if(i){i.src = i.href.substr(i.href.lastIndexOf("http://"));}
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
	case "imgrex.com":
		i = ev('.//form[@action="' + window.location.pathname.substr(1) + window.location.search + '"]');
		if(i)
		{
			i.submit();
		}
		else
		{
			i = ev('.//img[contains(@src,"images/")]');
		}
		break;
	case "qrrro.com":
	case "imgmade.com":
		i = ev('.//form');
		dp=true;
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
	case "jpegshare.net":
	case "imagestorming.com":
	case "photolair.net":
	case "screenshot.ru":
	case "imagefile.org":
	case "pix.hostux.net":
	case "demo.chevereto.com":
	case "zapisz.net":
	case "s6.snapgram.co":
	case "addyourpics.com":
	case "urimage.net":
	case "imgbank.cz":
	case "picr.ws":
	case "pikz.co":
	case "liolink.com":
	case "fastpics.altervista.org":
	case "imagesturk.net":
	case "showmyimage.com":
	case "img.dulieu.net":
	case "givme.de":
	case "upload.crazycraft.pl":
	case "omgdb.net":
	case "mynameismiz.com":
	case "upload.supreme-elite.fr":
	case "image.vsemrole.ru":
	case "up.vn-hello.com":
	case "oksee.pp.ua":
	case "img.androidteclive.com":
	case "resimupload.org":
	case "myimg.me":
	case "i.ruspotting.net":
	case "upic.kz":
	case "hosting.webspell.fr":
	case "heberg-hush.org":
	case "zuly.de":
	case "uplomax.com":
	case "planet-upload.eu":
	case "oltaciyukle.com":
	case "picto.lt":
	case "3intro.com":
	case "slikomanija.net":
	case "upload.vstanced.com":
	case "up.hayah.cc":
	case "img.extremeldm.com":
	case "pichost.name":
	case "imgzi.com":
	case "22.io":
	case "img.dayzland.eu":
	case "pixit.hu":
	case "evopikz.net":
	case "linkmypic.com":
	case "sxfoto.com":
	case "upanh.biz":
	case "host-my-image.de":
	case "i-pict.ru":
	case "imagend.com":
	case "imagerocket.com":
	case "piczhub.com":
	case "hyyathost.com":
	case "imghaze.com":
	case "imgratis.com":
	case "stfimages.com":
	case "strikeys-pic.com":
	case "picture.ms":
	case "compartirfoto.com":
	case "qoou.net":
	case "image.yhjkj.com":
	case "images.reptilescanada.com":
	case "wepic.ru":
	case "photo.goicam.vn":
	case "naeamysig.com":
	case "microforma.ru":
	case "gsmimagehost.com":
	case "tinysnaps.com":
	case "goshimage.com":
	case "razol.ru":
	case "myimageshare.com":
	case "picgro.com":
	case "imgur.my":
	case "upload.sh3bawy.com":
	case "pixelspeicher.com":
	case "graphicupload.com":
	case "imagenaked.com":
	case "upload-image.fr":
	case "picselio.com":
	case "t4up.net":
	case "xostpics.com":
	case "images.gamewind.de":
	case "images.baconbits.org":
	case "pic.sheep7.com":
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
	case "imgdark.com":
	case "primeimg.co":
	case "picshome.ru":
	case "savemyimage.com":
	case "subeme.net":
	case "tndupload.com":
	case "pic.xtream-reallife.de":
	case "img.dramacafe.tv":
	case "thro.bz":
	case "send-up.ru":
	case "fapping.empornium.sx":
	case "torrentzet.com":
	case "imgup.nl":
	case "pixel.so":
	case "kuvapankki.in":
	case "img.titank.com":
	case "vipeep.com":
	case "pictureupl.info":
	case "beeimg.com":	
	case "1pics.ru":	
	case "imgshow.me":
	case "greenpiccs.com":
	case "imgseeds.com":
		i = ev('.//img[contains(@src,"' + iurl + '/images/")]');
		break;
	case "shareimages.com":
	case "imagesmax.de":
	case "bilder.nixhelp.de":
		i = ev('.//img[contains(@src,"' + iurl + '/images")]');
		break;
	case "imgfantasy.com":
	case "imagedomino.com":
	case "imagepdb.com":
	case "imghash.com":
	case "imageporn.eu":
	case "imgleech.com":
		j = true;
		dp=true;
		i = ev('.//input[@value="YES"]');
		if(i){i.onclick();break;}
	case "imagebam.com":
	case "imgchili.net":
	case "pic-upload.de":
	case "pohrani.com":
	case "shrani.najdi.si":
		i = ev('.//img[contains(@onclick,"(this")]');
		break;
	default: // dynamic subdomain
		switch(iurl.substr(iurl.indexOf(".")+1))
		{
		case "tumblr.com":
			i = ev('.//img[not(contains(@src,"data:"))][@id]');
			break;
		case "imagevenue.com":
			i = ev('.//img[contains(@src,"/loc")]');
			break;
		case "wikipedia.org":
			i = ev('.//a[contains(@href,"/upload")]');
			if(i){i.src = i.href;}
			break;
		case "photobucket.com":
			i = ev('//meta[@property="og:image" or @name="og:image"]');
			if(i){i.src = i.content;}
			break;
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
				dp=true;
				i.click();
				break;
			}
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
		unsafeWindow.addEventListener('beforescriptexecute', onscript, true);
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
		if(!FireFox) // Then it is Chrome
		{
			if (typeof GM_unregisterMenuCommand !== "undefined" && menuID)
			{
				GM_unregisterMenuCommand(menuID);
			}
		}
		clr_pgn();
		ws();
		document.head.innerHTML = "";
		sanitize();
		unsafeWindow.removeEventListener('beforescriptexecute', onscript, true);
		makeimage();
	}
	else // try again
	{
		//console.warn("Didnt find image, trying again in " + timeout + " ms");
		if(tb){clearTimeout(tb);}
		tb = setTimeout(function() { tb=0; timeout*=2; makeworld(); }, timeout);
	}
}

function changecursor()
{
	i.style.margin = "auto";
	var root = document.compatMode=='BackCompat'? document.body : document.documentElement;
	if(!rescaled && ((i.naturalHeight == root.clientHeight) || (i.naturalWidth == root.clientWidth)) && ((root.clientHeight == root.scrollHeight) && (root.clientWidth == root.scrollWidth)) ) // no scrollbars and one img dimension is equal to screen
	{
		i.style.cursor = "";
	}
	else if((i.naturalHeight > root.clientHeight) || (i.naturalWidth > root.clientWidth))
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
			if(i.naturalHeight > root.clientHeight) // chrome bug fuuuuu
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
			scale = Math.min((window.innerWidth / i.naturalWidth), (window.innerHeight / i.naturalHeight));
		}
		i.removeAttribute("style");
		changecursor();
		if(event)
		{
			window.scrollTo(ex / scale - window.innerWidth / 2, ey / scale - window.innerHeight / 2);
		}
	}
	else
	{
		i.removeAttribute("style");
		if(i.naturalWidth != window.innerWidth)
		{
			i.style.width = window.innerWidth + "px";
			rescaled = true;
		}
		var root = document.compatMode=='BackCompat'? document.body : document.documentElement;
		if((root.scrollHeight != root.clientHeight) || (root.scrollWidth != root.clientWidth))
		{
			i.removeAttribute("style");
			if(i.naturalHeight != window.innerHeight)
			{
				i.style.height = window.innerHeight + "px";
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
		var link = document.createElement('link');
		link.type = 'image/x-icon';
		link.rel = 'shortcut icon';
		link.href = i.src;
		document.getElementsByTagName('head')[0].appendChild(link);
		var root = document.compatMode=='BackCompat'? document.body : document.documentElement;
		if(cfg_fitWH && (root.clientHeight != root.scrollHeight) && (root.clientWidth != root.scrollWidth)) // both scrollbars detected
		{
			rescale(0);
		}
		else if(cfg_fitB && ((root.clientHeight != root.scrollHeight) || (root.clientWidth != root.scrollWidth))) // one scrollbar
		{
			rescale(0);
		}
		else if(cfg_fitS && (root.clientHeight == root.scrollHeight) && (root.clientWidth == root.scrollWidth)) // no scrollbars
		{
			rescale(0);
		}
		else
		{
			changecursor();
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
			window.location.href = "https://github.com/Owyn/HandyImage/configuration";
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
			unsafeWindow.removeEventListener("beforeunload", onbeforeunload, true);
		}
		break;
	case KeyEvent.DOM_VK_F5:
		unsafeWindow.removeEventListener("beforeunload", onbeforeunload, true);
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
			GM_setValue("js", $("hji_cfg_6_js").value);
			alert("Configuration Saved");
			if($("hji_cfg_2_bgclr").value){document.body.bgColor = $("hji_cfg_2_bgclr").value;}else{document.body.removeAttribute("bgColor");}
		}
		if(i && i.src){i.removeEventListener("click", rescale, true);}
		unsafeWindow.removeEventListener("keydown", onkeydown, true);
		document.head.innerHTML = "";
		document.body.innerHTML = "";
		ws();
		var div = document.createElement("div");
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
		$("hji_cfg_1_direct").checked = GM_getValue("directImage");
		$("hji_cfg_2_bgclr").value = GM_getValue("bgColor", "");
		$("hji_cfg_3_fitWH").checked = GM_getValue("fitWH", true);
		$("hji_cfg_4_fitB").checked = GM_getValue("fitB");
		$("hji_cfg_5_fitS").checked = GM_getValue("fitS");
		$("hji_cfg_6_js").value = GM_getValue("js", "");
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
		cfg_js = GM_getValue("js");
	}
}
