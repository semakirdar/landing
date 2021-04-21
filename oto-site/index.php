<?php include "header.php"; ?>

    <section>
        <div class="hero" id="hero">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-5">
                        <div class="hero-form ">
                            <div class="form-control">
                                <label for="reservationBrand" class="form-label mt-3">Araç Marka Seçiniz</label>
                                <select class="form-select" aria-label="Default select example" id="reservationBrand">
                                    <option selected>Seçiniz</option>
                                </select>

                                <div class="mb-4">
                                    <label for="reservationModel" class="form-label mt-4">Araç Model Seçiniz</label>
                                    <select class="form-select mb-4" id="reservationModel">
                                        <option selected>Seçiniz</option>
                                    </select>
                                </div>

                                <div class="mb-4">
                                    <label for="exampleFormControlInput1" class="form-label">Ad</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                           placeholder="">
                                </div>
                                <div class="mb-4">
                                    <label for="exampleFormControlInput1" class="form-label">Soyad</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                           placeholder="">
                                </div>
                                <button type="button" class="btn btn-danger btn-reservation mb-3">REZERVASYON TALEBİ

                                </button>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                        <div class="car ">
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="car-text mb-5">
                                            <h3>Volkswagen</h3>
                                            <h5>Gizli Özellik Açma</h5>
                                        </div>
                                        <img src="images/slider-car1.png" class="d-block w-100" alt="...">

                                    </div>
                                    <div class="carousel-item">
                                        <div class="car-text mb-5">
                                            <h3>Audi</h3>
                                            <h5>Gizli Özellik Açma</h5>
                                        </div>
                                        <img src="images/slider-car2.png" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <div class="car-text mb-5">
                                            <h3>Skoda</h3>
                                            <h5>Gizli Özellik açma</h5>
                                        </div>
                                        <img src="images/slider-car3.png" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                        <div class="car-text mb-5">
                                            <h3>Seat</h3>
                                            <h5>Gizli Özellik Açma</h5>
                                        </div>
                                        <img src="images/slider-car4.png" class="d-block w-100" alt="...">
                                    </div>
                                </div>

                                <button class="carousel-control-prev btn-prev" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next btn-next" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" id="services">
            <div class="service mt-5 mb-5">
                <h3 class="text-center ">Hizmetlerimiz</h3>
               <div class="row mt-3">
                   <div class="col-sm-12 col-md-12 col-lg-6">
                       <select id="brands" class="form-select mb-4" aria-label="Default select example">
                           <option selected>Marka Seçiniz</option>
                       </select>
                   </div>
                   <div class="col-sm-12 col-md-12 col-lg-6">
                       <select id="models" class="form-select mb-4">
                           <option selected>Model Seçiniz</option>
                           
                       </select>
                   </div>

               </div>
                <div class="row mt-5">
					<!--<div class="col-sm-12 cloned text-center">
						<p>
							Özellik bilgilerini görüntüleyebilmek için lütfen marka/model seçimi yapınız.
						</p>
					</div>
                    <div class="col-sm-12 col-md-6 clone-this" style="display: none;">

                    </div>-->

                    <div class="col-sm-12 cloned text-center">
                        <p>
                            Özellik bilgilerini görüntüleyebilmek için lütfen marka/model seçimi yapınız.
                        </p>
                    </div>
                    <div class="masonry" id="service-list">
                        <div class="item clone-this" style="display: none;">
                            <div class="service-box ">

                                <i class="fas fa-plus-square me-2"></i>
                                <span class="service-box-title">Special rates on car booking</span>
                                <p class="service-box-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.A accusantium delectus
                                    enim
                                    exercitationem labore numquam, officiis optio praesentium quia quod repellat
                                    reprehenderit temporibus ullam veniam veritatis?Accusantium dolorem reiciendis
                                    saepe!
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi at atque deserunt expedita fuga illum, impedit in iure iusto minus molestias perferendis quaerat quis repudiandae sapiente ut velit voluptate.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis doloribus ipsam quae saepe voluptas. Ad aut culpa deleniti dolor doloremque facilis laborum, minus neque praesentium quod rem repudiandae saepe suscipit?
                                </p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        <div class="social ">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="social-text ">
                            <h2>SIGN UP FOR AMAZING OFFERS</h2>
                            <h5>EXCLUSIVE ACCESS FOR OFFERS AND PROMOTIONS</h5>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="input-group social-input text-center">
                            <input type="text" class="form-control" placeholder="Email"
                                   aria-label="Recipient's username"
                                   aria-describedby="button-addon2">
                            <button class="btn btn-outline-secondary btn-social" type="button" id="button-addon2">
                                GÖNDER
                            </button>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="social-icons text-center">
                            <a href="#" class="social-icon twitter"><i class="fab fa-twitter"></i></a>
                            <a href="#" class="social-icon google"><i class="fab fa-google-plus-g"></i></a>
                            <a href="#" class="social-icon facebook"> <i class="fab fa-facebook-f"></i></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="comment">
                <div class="comment-icon mt-5 mb-3 text-center">
                    <i class="fas fa-star small"></i>
                    <i class="fas fa-star small"></i>
                    <i class="fas fa-star big"></i>
                    <i class="fas fa-star small"></i>
                    <i class="fas fa-star small"></i>
                </div>
                <div class="comment-text text-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deleniti ipsam laborum neque
                        <br/>
                        obcaecati recusandae tenetur ut veritatis voluptates? Ab animi aperiam asperiores cumque eos
                        nemo
                        quia repellendus ut voluptas! <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                        laborum
                        magnam, molestiae natus nihil non numquam velit.<br/> Architecto at blanditiis dolor dolore
                        doloremque
                        eligendi placeat, suscipit voluptate voluptatibus? Facere, quis!</p>
                    <h5>- Michael Smith, Santa Barbara CA</h5>
                </div>
            </div>
        </div>
        <div class="map mb-5 mt-5" id="map">

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12284.81991742122!2d27.9224222!3d39.6676034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0fd4db2b1695544!2sDijitaladam%20-%20Mobil%20Uygulama%20ve%20Web%20Yaz%C4%B1l%C4%B1m!5e0!3m2!1str!2str!4v1616591395559!5m2!1str!2str"
                    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

        </div>
        <div class="container">
            <div class="info">
                <div class="row mb-5">
                    <div class="col-sm-12 col-md-6">
                        <div class="info-text ">
                            <h2 class="mb-3">Quality Guaranted</h2>
                            <h5>Here is an example with one single photo displayed </h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut dolorem nam pariatur
                                porro
                                quod quos sequi. Ad amet dolore eligendi hic quas ut vero
                            </p>
                            <div class="info-button">
                                <button type="button" class="btn btn-danger  shadow">More information
                                </button>
                                <button type="button" class="btn btn-secondary shadow">Buy this theme</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="info-img">
                            <img src="images/info-img.jpg">
                        </div>
                    </div>

                </div>
                <div class="row  mt-5">
                    <div class="col-sm-12 col-md-6">
                        <div class="info-img">
                            <img src="images/info-img.jpg">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="info-text-watch">
                            <h2>Watch our info tour</h2>
                            <h5 class="mb-3">You can also show youtube videos in this sections</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut dolorem nam pariatur
                                porro
                                quod quos sequi. Ad amet dolore eligendi hic quas ut vero lorem
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis fuga officiis
                                possimus sint vel. Aliquid amet animi, at delectus, enim eveniet ex fugit impedit libero
                                .</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="partners mb-5 mt-5">
            <div class="container">
                <h2>Meet Our Partners</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi blanditiis cumque cupiditate
                    dolorem, illum in, incidunt iure laboriosam laborum libero magni nesciunt optio quasi ratione
                    recusandae repudiandae sed veniam voluptas! Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Architecto atque blanditiis culpa cupiditate et harum minima nostrum? Ab adipisci, animi atque
                    delectus esse et in, maiores nam qui, ullam ut.
                </p>

                <div class="row text-center mt-5">
                    <div class="col-md-3">
                        <p>themeforest</p>
                    </div>
                    <div class="col-md-3">
                        <p>audiojungle</p>
                    </div>
                    <div class="col-md-3">
                        <p>codecanyon</p>
                    </div>
                    <div class="col-md-3">
                        <p>graphicriver</p>
                    </div>

                </div>
            </div>
        </div>
        <div class="container">
            <div class="contact" id="contact">
                <h2 class="mb-5">Bize Ulaşın</h2>
                <p class="mb-0">You have any questions or need additional information?</p>
                <span class="title">Adres:</span>
                <span class="adress">Car|Rental/3861 Sepulveda Blvd./Culver City,CA 90230</span>
                <div class="contact-form">
                    <div class="row g-3 mt-4 mb-3">
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Ad:" aria-label="First name:">
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Soyad:" aria-label="Last name:">
                        </div>
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                               placeholder="Telefon:">
                    </div>

                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                               placeholder="Email:">
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                  placeholder="Mesaj:"></textarea>
                    </div>
                    <button type="button" class="btn btn-danger btn-submit">MESAJI GÖNDER</button>
                </div>

            </div>
        </div>
    </section>

<?php include "footer.php"; ?>