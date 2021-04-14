<?php include "header.php"; ?>
    <section>
        <div class="container">
            <div class="slider">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="images/slider-img1.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="images/slider-img2.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="images/slider-img3.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="images/slider-img4.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="new-arrivals">
                <h2 class="text-center">NEW ARRIVALS</h2>
                <div class="shop">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="shop-item">
                                <img src="images/shop_item_1.jpg">
                                <p>Night Party Dress</p>
                                <h4>$159.99</h4>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="shop-item">
                                <img src="images/shop_item_2.jpg">
                                <p>Night Party Dress</p>
                                <h4>$159.99</h4>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="shop-item">
                                <img src="images/shop_item_3.jpg">
                                <p>Night Party Dress</p>
                                <h4>$159.99</h4>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="shop-item">
                                <img src="images/shop_item_4.jpg">
                                <p>Night Party Dress</p>
                                <h4>$159.99</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="subscribe">
                <div class="row">
                    <div class="col-md-6 text-end">
                        <p>SUBSCRIBE TO RECEIVE OUR UPDATES</p>
                    </div>
                    <div class="col-md-6">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
                            <button class="btn btn-outline-secondary btn-subscribe" type="button" id="button-addon2">Subscribe</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
<?php include "footer.php"; ?>