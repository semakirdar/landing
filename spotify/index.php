<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="http://localhost:8081/spotify/">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="plugins/fontawesome/css/all.min.css" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
    <title>Spotify Mobile</title>
</head>
<body>
<div class="container">

    <div class="small-view">
        <section class="song-options">
            <div>
                <a href="#">
                    <i class="fas fa-angle-down"></i>
                </a>
            </div>
            <div>
                <p>
                    Liked Songs
                </p>

            </div>
            <div>
                <a href="#">
                    <i class="fas fa-ellipsis-h"></i>
                </a>
            </div>
        </section>
        <section class="song-image">
            <img src="images/songs-img.jpg">
        </section>
        <section class="song-name">
            <div>
                <h2>Before I Forget</h2>
                <h4>Slipknot</h4>
            </div>
            <div class="song-fav">
                <a>
                    <i class="far fa-heart"></i>
                </a>
            </div>
        </section>
        <section class="play-range">
            <input type="range" min="1" max="200" value="50" class="slider" id="myRange">
            <div class="times">
                <div class="current-time">
                    0:00
                </div>
                <div class="full-time">
                    4:44
                </div>
            </div>
        </section>
        <section class="player-controls">
            <div class="btn-small">
                <a href="#">
                    <i class="fas fa-random"></i>
                </a>
            </div>
            <div>
                <a href="#">
                    <i class="fas fa-step-backward"></i>
                </a>
            </div>
            <div class="btn-play">
                <a href="#">
                    <i class="fas fa-play"></i>
                </a>
            </div>
            <div>
                <a href="#">
                    <i class="fas fa-step-forward"></i>
                </a>
            </div>
            <div class="btn-small">
                <a href="#">
                    <i class="fas fa-redo"></i>
                </a>
            </div>
        </section>
        <section class="player-buttons">
            <div>
                <a href="#">
                    <i class="fas fa-desktop"></i>
                </a>
            </div>
            <div>
                <a href="#">
                    <i class="fas fa-sort-amount-up"></i>
                </a>

            </div>
        </section>
    </div>

</div>
</body>
</html>
