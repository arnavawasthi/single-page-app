<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <title>Multi-Level Backbone Image Gallery</title>
        <link rel="stylesheet" href="css/gallery.css" type="text/css" media="screen" charset="utf-8" />
        <link rel="stylesheet" href="css/shadows.css" type="text/css" media="screen" charset="utf-8" />
        <link rel="stylesheet" href="css/buttons.css" type="text/css" media="screen" charset="utf-8" />
        
        <script src="js/lib/jquery-1.4.4.min.js" type="text/javascript"></script>
        <script src="js/lib/JQuery.Ns.js" type="text/javascript"></script>
        <script src="js/lib/jquery.tmpl.min.js" type="text/javascript"></script>
        <script src="js/lib/underscore-min.js" type="text/javascript"></script>
        <script src="js/lib/cacheprovider.js" type="text/javascript"></script>
        <script src="js/lib/backbone-min.js" type="text/javascript"></script>        
    </head>
    <body>
        <div id="container">
            <div id="header">
                <h1>
                    <a href="index.php">Multi-Level Backbone Gallery</a>
                </h1>
                <h3>Created by Addy Osmani for 'Building Single-page Apps With jQuery's Best Friends'</h3>
            </div>

            <div id="main">
                <div class="jstest">This application is running with JavaScript turned off.</div>
            </div>
        </div>
<!--        <script src="js/lib/LAB.min.js" type="text/javascript"></script>-->
        
        <!--   Utils     -->
        <script src="js/utils/SinglePageApp.Utils.js" type="text/javascript"></script>
        
        <!--   Models     -->
        <script src="js/models/PhotoModel.js" type="text/javascript"></script>
        <script src="js/models/PhotoCollection.js" type="text/javascript"></script>
        
        <!--   Views     -->
        <script src="js/views/IndexView.js" type="text/javascript"></script>
        <script src="js/views/PhotoView.js" type="text/javascript"></script>
        <script src="js/views/SubAlbumView.js" type="text/javascript"></script>
        
        <!--   Controllers     -->
        <script src="js/controllers/GalleryController.js" type="text/javascript"></script>
        
        <script type="text/javascript">
            //           $LAB
            //           .script("js/lib/jquery-1.4.4.min.js").wait()
            //           .script("js/lib/jquery.tmpl.min.js")
            //           .script("js/lib/underscore-min.js")
            //           .script("js/lib/backbone-min.js")
            //           .script("js/lib/cacheprovider.js").wait()
            //           .script("js/models/PhotoModel.js").wait()
            //           .script("js/models/PhotoCollection.js").wait()
            //           .script("js/views/IndexView.js").wait()
            //           .script("js/views/PhotoView.js").wait()
            //           .script("js/views/SubAlbumView.js").wait()
            //           .script("js/controllers/GalleryController.js")
            ;         
        </script>


        <?php
//PHP fallback to enable graceful degredation
//feel free to substitute with a more secure read-in method
        $json = file_get_contents("data/album1.json");
        $json_a = json_decode($json, true);
        $folderType = $_GET['view'];
        $index = $_GET['ind'];
        $subal = $_GET['subalbum'];
        $subalbums = array();
        $i = 0;
        $j = 0;
        error_reporting(0);

//expose convenient access to subalbums
        foreach ($json_a as $p => $k) {
            foreach ($k["subalbum"] as $sub) {
                $subalbums[$i][$j] = $sub;
                $j++;
            }
            $i++;
        }

//handle 'view' switching
        switch ($folderType) {
            case "subalbum":
                echo "<ul class='gallery'>";
                foreach ($subalbums[$index] as $sub) {
                    echo "<li class='item drop-shadow round'><a href='" . $sub['large_image'] . "'><img src='" . $sub['image'] . "'></img>" . $sub['title'] . "</a> " . $sub['artist'] . " </li>";
                }
                echo "</ul>";
                break;

            default:
                $ind = 0;
                echo "<ul class='gallery'>";
                foreach ($json_a as $p => $k) {
                    echo "<li class='item drop-shadow round'><a href='index.php?view=subalbum&ind=$ind'><img src='" . $k['image'] . "'></img>" . $k['title'] . "</a> " . $k['years'] . " </li>";
                    $ind++;
                }
                echo "</ul>";
                break;
        }
        ?>
        <script type="text/javascript">
        
            //util function   
            function removeFallbacks(){
                var query = $('.jstest,.gallery');
                if(query.length){
                    query.remove();
                }
            }
   
            $(document).ready(function(){
                gallery = new SinglePageApp.Controllers.GalleryController();
                Backbone.history.start();
            });
           
        </script>
    </body>
</html>
