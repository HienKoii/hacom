var banderApi = 'http://localhost:3000/bannder'
var laptopApi = 'http://localhost:3000/Laptop,Tablet,Mobile'
var pcGamingApi = 'http://localhost:3000/PCGaming,Streaming'
var pcRenderApi = 'http://localhost:3000/PCDoHoa,Render,MayChu'
var laptopGamingApi = 'http://localhost:3000/LaptopGaming,DoHoa'
var accessoryApi = 'http://localhost:3000/PhuKienLaptop,PC,Mobile'
var pcMiniApi = 'http://localhost:3000/PCVanPhong,AIO,MiniPC'
var computerApi = 'http://localhost:3000/LinhKienMayTinh'
var coolingApi = 'http://localhost:3000/TanNhietPC,Cooling'
var screenPcApi = 'http://localhost:3000/ManHinhMayTinh'
var headPhoneApi = 'http://localhost:3000/TaiNghe'
var gearApi = 'http://localhost:3000/PhimChuot,GheGame,Gear'
var showroomsApi = 'http://localhost:3000/showrooms'

function start () {

    getBanderApi(renderBander)

    getLaptopApi(renderLaptop)
    getLaptopApi(renderPLaptop)

    getPcGamingApi(renderPcGaming)
    getPcGamingApi(renderPcGamingTrend)

    getPcDesignApi(renderPcDesign)

    getLaptopGamingApi(renderLaptopGaming)
    getLaptopGamingApi(renderLaptopGmTrend)

    getAccessoryApi(renderAccessory)

    getPcMiniApi(renderPcMini)
    getPcMiniApi(renderPcMiniTrend)


    getComputerApi(renderComputer)

    getCoolingApi(renderCooling)

    getScreenPcApi(renderScreenPc)

    getHeadPhoneApi(renderHeadPhone)
    
    getGearApi(renderGear)

    getShowroomsApi(renderShowrooms)
    getShowroomsApi(renderShowroomsMb)
}
start();
// start gọi api
function getBanderApi (callback) {
    fetch(banderApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}
//api laptop
function getLaptopApi (callback) {
    fetch(laptopApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}
//api pcgaming
function getPcGamingApi (callback) {
    fetch(pcGamingApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}
//api pcrender
function getPcDesignApi (callback) {
    fetch(pcRenderApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}
// api laptop gaming
function getLaptopGamingApi (callback) {
    fetch(laptopGamingApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}
// api accessory
function getAccessoryApi (callback) {
    fetch(accessoryApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}
// api pc mini
function getPcMiniApi (callback) {
    fetch(pcMiniApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}
// api linh kiện pc
function getComputerApi (callback) {
    fetch(computerApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}
// api TẢN NHIỆT PC, COOLING
function getCoolingApi (callback) {
    fetch(coolingApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}
// api MÀN HÌNH MÁY TÍNH
function getScreenPcApi (callback) {
    fetch(screenPcApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}
// api TAI NGHe
function getHeadPhoneApi (callback) {
    fetch(headPhoneApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}
// api PHÍM CHUỘT, GHẾ GAME, GEAR 
function getGearApi (callback) {
    fetch(gearApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}
// api getShowroomsApi
function getShowroomsApi (callback) {
    fetch(showroomsApi)
        .then(function(response) {
            return response.json()
        })
        .then(callback);
}
// end api

//start render
//render bander
function renderBander(imgs) {
    var listProduct = document.querySelector('.bander--slider')
    var htmls = imgs.map(function(img) {
        return `
        <a href="#" class="bander--slider-item">
            <img src=${img.url} alt="">
        </a>
        `
    })
    listProduct.innerHTML = htmls.join('')
   // thêm slider
   $('.bander--slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow:"<button type='button' class='bander__slick-nav bander__slick-prev pull-left'><i class='fa fa-angle-left bander__slick-nav-icon slick-nav-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='bander__slick-nav bander__slick-next pull-right'><i class='fa fa-angle-right bander__slick-nav-icon slick-nav-right' aria-hidden='true'></i></button>",
    dots: true,
    });
}
//render laptop
function renderLaptop(laptops) {
    var listProduct = document.querySelector('.p-list')
    var htmls = laptops.map(function(laptop) {
        return `
        <div class="col l-2-4 c-6 p-item">
            <div class="p-bg">
                <img src=${laptop.imgSrc} alt="" class="p-img">
            </div>
            <div class="p-info">
                <div class="p-info-header">
                    <a href="#" class="p-info-evaluate">
                        <img src="https://hacom.vn/media/lib/star_5.png" alt="" class="product__item--info-star">
                        <span class="p-count-rate">(0)</span>
                    </a>
                    <span class="p-sku">
                        Mã: ${laptop.sku}
                    </span>
                </div>
                <a href="./product.html" class="p-name">
                     ${laptop.name}
                </a>
                <div class="p-info-price">
                    <span class="p-mprice"> ${laptop.price}đ</span>
                    <span class="p-discount"> ${laptop.discount}</span>
                </div>
                <span class="p-price"> ${laptop.price} đ</span>
                <div class="p-action">
                    <span class="p-check">
                        <i class="fa-solid fa-check p-check-icon"></i>
                        Còn hàng
                    </span>
                    <a href="cart.html" class="p-cart">
                        <i class="fa-solid fa-cart-shopping p-icon-cart"></i>
                    </a>
                </div>
            </div>
        </div>
        `
    })
    listProduct.innerHTML = htmls.join('')
   // thêm slider
    $(listProduct).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<i class='fa fa-angle-left p-nav p-nav-prev' aria-hidden='true'></i>",
        nextArrow:"<i class='fa fa-angle-right p-nav p-nav-next ' aria-hidden='true'></i>",
        responsive: [
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 2000,
                }
            }
        ]
      });
}
//pc gmaing
function renderPcGaming(pcgamings) {
    var listProduct = document.querySelector('.p-list.pc-gaming')
    var htmls = pcgamings.map(function(pcgaming) {
        return `
        <div class="col l-2-4 c-6 p-item">
            <div class="p-bg">
                <img src=${pcgaming.imgSrc} alt="" class="p-img">
            </div>
            <div class="p-info">
                <div class="p-info-header">
                    <a href="#" class="p-info-evaluate">
                        <img src="https://hacom.vn/media/lib/star_5.png" alt="" class="product__item--info-star">
                        <span class="p-count-rate">(0)</span>
                    </a>
                    <span class="p-sku">
                        Mã: ${pcgaming.sku}
                    </span>
                </div>
                <a href="#" class="p-name">
                     ${pcgaming.name}
                </a>
                <div class="p-info-price">
                    <span class="p-mprice"> ${pcgaming.price}đ</span>
                    <span class="p-discount"> ${pcgaming.discount}</span>
                </div>
                <span class="p-price"> ${pcgaming.price} đ</span>
                <div class="p-action">
                    <span class="p-check">
                        <i class="fa-solid fa-check p-check-icon"></i>
                        Còn hàng
                    </span>
                    <a href="cart.html" class="p-cart">
                        <i class="fa-solid fa-cart-shopping p-icon-cart"></i>
                    </a>
                </div>
            </div>
        </div>
        `
    })
    listProduct.innerHTML = htmls.join('')
    // thêm slider
    $(listProduct).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<i class='fa fa-angle-left p-nav p-nav-prev' aria-hidden='true'></i>",
        nextArrow:"<i class='fa fa-angle-right p-nav p-nav-next ' aria-hidden='true'></i>",
        responsive: [
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 2000,
                }
            }
        ]
      });
}
// pc design
function renderPcDesign(pcdesigns) {
    var listProduct = document.querySelector('.p-list.pc-design')
    var htmls = pcdesigns.map(function(pcdesign) {
        return `
        <div class="col l-2-4 c-6 p-item">
            <div class="p-bg">
                <img src=${pcdesign.imgSrc} alt="" class="p-img">
            </div>
            <div class="p-info">
                <div class="p-info-header">
                    <a href="#" class="p-info-evaluate">
                        <img src="https://hacom.vn/media/lib/star_5.png" alt="" class="product__item--info-star">
                        <span class="p-count-rate">(0)</span>
                    </a>
                    <span class="p-sku">
                        Mã: ${pcdesign.sku}
                    </span>
                </div>
                <a href="#" class="p-name">
                     ${pcdesign.name}
                </a>
                <div class="p-info-price">
                    <span class="p-mprice"> ${pcdesign.price}đ</span>
                    <span class="p-discount"> ${pcdesign.discount}</span>
                </div>
                <span class="p-price"> ${pcdesign.price} đ</span>
                <div class="p-action">
                    <span class="p-check">
                        <i class="fa-solid fa-check p-check-icon"></i>
                        Còn hàng
                    </span>
                    <a href="cart.html" class="p-cart">
                        <i class="fa-solid fa-cart-shopping p-icon-cart"></i>
                    </a>
                </div>
            </div>
        </div>
        `
    })
    listProduct.innerHTML = htmls.join('')
    // thêm slider
    $(listProduct).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<i class='fa fa-angle-left p-nav p-nav-prev' aria-hidden='true'></i>",
        nextArrow:"<i class='fa fa-angle-right p-nav p-nav-next ' aria-hidden='true'></i>",
        responsive: [
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 2000,
                }
            }
        ]
      });
}
// laptop gaming
function renderLaptopGaming(laptopgms) {
    var listProduct = document.querySelector('.p-list.laptop-gm')
    var htmls = laptopgms.map(function(laptopgm) {
        return `
        <div class="col l-2-4 c6 p-item">
            <div class="p-bg">
                <img src=${laptopgm.imgSrc} alt="" class="p-img">
            </div>
            <div class="p-info">
                <div class="p-info-header">
                    <a href="#" class="p-info-evaluate">
                        <img src="https://hacom.vn/media/lib/star_5.png" alt="" class="product__item--info-star">
                        <span class="p-count-rate">(0)</span>
                    </a>
                    <span class="p-sku">
                        Mã: ${laptopgm.sku}
                    </span>
                </div>
                <a href="#" class="p-name">
                     ${laptopgm.name}
                </a>
                <div class="p-info-price">
                    <span class="p-mprice"> ${laptopgm.price}đ</span>
                    <span class="p-discount"> ${laptopgm.discount}</span>
                </div>
                <span class="p-price"> ${laptopgm.price} đ</span>
                <div class="p-action">
                    <span class="p-check">
                        <i class="fa-solid fa-check p-check-icon"></i>
                        Còn hàng
                    </span>
                    <a href="cart.html" class="p-cart">
                        <i class="fa-solid fa-cart-shopping p-icon-cart"></i>
                    </a>
                </div>
            </div>
        </div>
        `
    })
    listProduct.innerHTML = htmls.join('')
    // thêm slider
    $(listProduct).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<i class='fa fa-angle-left p-nav p-nav-prev' aria-hidden='true'></i>",
        nextArrow:"<i class='fa fa-angle-right p-nav p-nav-next ' aria-hidden='true'></i>",
        responsive: [
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 2000,
                }
            }
        ]
      });
}
//phụ kiện
// laptop gaming
function renderAccessory(accessorys) {
    var listProduct = document.querySelector('.p-list.accessory')
    var htmls = accessorys.map(function(accessory) {
        return `
        <div class="col l-2-4 c-6 p-item">
            <div class="p-bg">
                <img src=${accessory.imgSrc} alt="" class="p-img">
            </div>
            <div class="p-info">
                <div class="p-info-header">
                    <a href="#" class="p-info-evaluate">
                        <img src="https://hacom.vn/media/lib/star_5.png" alt="" class="product__item--info-star">
                        <span class="p-count-rate">(0)</span>
                    </a>
                    <span class="p-sku">
                        Mã: ${accessory.sku}
                    </span>
                </div>
                <a href="#" class="p-name">
                     ${accessory.name}
                </a>
                <div class="p-info-price">
                    <span class="p-mprice"> ${accessory.price}đ</span>
                    <span class="p-discount"> ${accessory.discount}</span>
                </div>
                <span class="p-price"> ${accessory.price} đ</span>
                <div class="p-action">
                    <span class="p-check">
                        <i class="fa-solid fa-check p-check-icon"></i>
                        Còn hàng
                    </span>
                    <a href="cart.html" class="p-cart">
                        <i class="fa-solid fa-cart-shopping p-icon-cart"></i>
                    </a>
                </div>
            </div>
        </div>
        `
    })
    listProduct.innerHTML = htmls.join('')
    // thêm slider
    $(listProduct).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<i class='fa fa-angle-left p-nav p-nav-prev' aria-hidden='true'></i>",
        nextArrow:"<i class='fa fa-angle-right p-nav p-nav-next ' aria-hidden='true'></i>",
        responsive: [
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 2000,
                }
            }
        ]
      });
}
// pc mini
//render laptop
function renderPcMini(pcminis) {
    var listProduct = document.querySelector('.p-list.pc-mini')
    var htmls = pcminis.map(function(pcmini) {
        return `
        <div class="col l-2-4 c-6 p-item">
            <div class="p-bg">
                <img src=${pcmini.imgSrc} alt="" class="p-img">
            </div>
            <div class="p-info">
                <div class="p-info-header">
                    <a href="#" class="p-info-evaluate">
                        <img src="https://hacom.vn/media/lib/star_5.png" alt="" class="product__item--info-star">
                        <span class="p-count-rate">(0)</span>
                    </a>
                    <span class="p-sku">
                        Mã: ${pcmini.sku}
                    </span>
                </div>
                <a href="#" class="p-name">
                     ${pcmini.name}
                </a>
                <div class="p-info-price">
                    <span class="p-mprice"> ${pcmini.price}đ</span>
                    <span class="p-discount"> ${pcmini.discount}</span>
                </div>
                <span class="p-price"> ${pcmini.price} đ</span>
                <div class="p-action">
                    <span class="p-check">
                        <i class="fa-solid fa-check p-check-icon"></i>
                        Còn hàng
                    </span>
                    <a href="cart.html" class="p-cart">
                        <i class="fa-solid fa-cart-shopping p-icon-cart"></i>
                    </a>
                </div>
            </div>
        </div>
        `
    })
    listProduct.innerHTML = htmls.join('')
    // thêm slider
    $(listProduct).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<i class='fa fa-angle-left p-nav p-nav-prev' aria-hidden='true'></i>",
        nextArrow:"<i class='fa fa-angle-right p-nav p-nav-next ' aria-hidden='true'></i>",
        responsive: [
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 2000,
                }
            }
        ]
      });
}
//render lih kiện pc
function renderComputer(computers) {
    var listProduct = document.querySelector('.p-list.computer')
    var htmls = computers.map(function(compute) {
        return `
        <div class="col l-2-4 c-6 p-item">
            <div class="p-bg">
                <img src=${compute.imgSrc} alt="" class="p-img">
            </div>
            <div class="p-info">
                <div class="p-info-header">
                    <a href="#" class="p-info-evaluate">
                        <img src="https://hacom.vn/media/lib/star_5.png" alt="" class="product__item--info-star">
                        <span class="p-count-rate">(0)</span>
                    </a>
                    <span class="p-sku">
                        Mã: ${compute.sku}
                    </span>
                </div>
                <a href="#" class="p-name">
                     ${compute.name}
                </a>
                <div class="p-info-price">
                    <span class="p-mprice"> ${compute.price}đ</span>
                    <span class="p-discount"> ${compute.discount}</span>
                </div>
                <span class="p-price"> ${compute.price} đ</span>
                <div class="p-action">
                    <span class="p-check">
                        <i class="fa-solid fa-check p-check-icon"></i>
                        Còn hàng
                    </span>
                    <a href="cart.html" class="p-cart">
                        <i class="fa-solid fa-cart-shopping p-icon-cart"></i>
                    </a>
                </div>
            </div>
        </div>
        `
    })
    listProduct.innerHTML = htmls.join('')
    // thêm slider
    $(listProduct).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<i class='fa fa-angle-left p-nav p-nav-prev' aria-hidden='true'></i>",
        nextArrow:"<i class='fa fa-angle-right p-nav p-nav-next ' aria-hidden='true'></i>",
        responsive: [
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 2000,
                }
            }
        ]
      });
}
//render TẢN NHIỆT PC, COOLING
function renderCooling(coolings) {
    var listProduct = document.querySelector('.p-list.cooling')
    var htmls = coolings.map(function(cooling) {
        return `
        <div class="col l-2-4 c-6 p-item">
            <div class="p-bg">
                <img src=${cooling.imgSrc} alt="" class="p-img">
            </div>
            <div class="p-info">
                <div class="p-info-header">
                    <a href="#" class="p-info-evaluate">
                        <img src="https://hacom.vn/media/lib/star_5.png" alt="" class="product__item--info-star">
                        <span class="p-count-rate">(0)</span>
                    </a>
                    <span class="p-sku">
                        Mã: ${cooling.sku}
                    </span>
                </div>
                <a href="#" class="p-name">
                     ${cooling.name}
                </a>
                <div class="p-info-price">
                    <span class="p-mprice"> ${cooling.price}đ</span>
                    <span class="p-discount"> ${cooling.discount}</span>
                </div>
                <span class="p-price"> ${cooling.price} đ</span>
                <div class="p-action">
                    <span class="p-check">
                        <i class="fa-solid fa-check p-check-icon"></i>
                        Còn hàng
                    </span>
                    <a href="cart.html" class="p-cart">
                        <i class="fa-solid fa-cart-shopping p-icon-cart"></i>
                    </a>
                </div>
            </div>
        </div>
        `
    })
    listProduct.innerHTML = htmls.join('')
    // thêm slider
    $(listProduct).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<i class='fa fa-angle-left p-nav p-nav-prev' aria-hidden='true'></i>",
        nextArrow:"<i class='fa fa-angle-right p-nav p-nav-next ' aria-hidden='true'></i>",
        responsive: [
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 2000,
                }
            }
        ]
      });
}
//render MÀN HÌNH MÁY TÍNH
function renderScreenPc(screens) {
    var listProduct = document.querySelector('.p-list.screen-pc')
    var htmls = screens.map(function(screen) {
        return `
        <div class="col l-2-4 c-6 p-item">
            <div class="p-bg">
                <img src=${screen.imgSrc} alt="" class="p-img">
            </div>
            <div class="p-info">
                <div class="p-info-header">
                    <a href="#" class="p-info-evaluate">
                        <img src="https://hacom.vn/media/lib/star_5.png" alt="" class="product__item--info-star">
                        <span class="p-count-rate">(0)</span>
                    </a>
                    <span class="p-sku">
                        Mã: ${screen.sku}
                    </span>
                </div>
                <a href="#" class="p-name">
                     ${screen.name}
                </a>
                <div class="p-info-price">
                    <span class="p-mprice"> ${screen.price}đ</span>
                    <span class="p-discount"> ${screen.discount}</span>
                </div>
                <span class="p-price"> ${screen.price} đ</span>
                <div class="p-action">
                    <span class="p-check">
                        <i class="fa-solid fa-check p-check-icon"></i>
                        Còn hàng
                    </span>
                    <a href="cart.html" class="p-cart">
                        <i class="fa-solid fa-cart-shopping p-icon-cart"></i>
                    </a>
                </div>
            </div>
        </div>
        `
    })
    listProduct.innerHTML = htmls.join('')
    // thêm slider
    $(listProduct).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<i class='fa fa-angle-left p-nav p-nav-prev' aria-hidden='true'></i>",
        nextArrow:"<i class='fa fa-angle-right p-nav p-nav-next ' aria-hidden='true'></i>",
        responsive: [
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 2000,
                }
            }
        ]
      });
}
//render PHÍM CHUỘT, GHẾ GAME, GEAR
function renderGear(gears) {
    var listProduct = document.querySelector('.p-list.gear')
    var htmls = gears.map(function(gear) {
        return `
        <div class="col l-2-4 c-6 p-item">
            <div class="p-bg">
                <img src=${gear.imgSrc} alt="" class="p-img">
            </div>
            <div class="p-info">
                <div class="p-info-header">
                    <a href="#" class="p-info-evaluate">
                        <img src="https://hacom.vn/media/lib/star_5.png" alt="" class="product__item--info-star">
                        <span class="p-count-rate">(0)</span>
                    </a>
                    <span class="p-sku">
                        Mã: ${gear.sku}
                    </span>
                </div>
                <a href="#" class="p-name">
                     ${gear.name}
                </a>
                <div class="p-info-price">
                    <span class="p-mprice"> ${gear.price}đ</span>
                    <span class="p-discount"> ${gear.discount}</span>
                </div>
                <span class="p-price"> ${gear.price} đ</span>
                <div class="p-action">
                    <span class="p-check">
                        <i class="fa-solid fa-check p-check-icon"></i>
                        Còn hàng
                    </span>
                    <a href="cart.html" class="p-cart">
                        <i class="fa-solid fa-cart-shopping p-icon-cart"></i>
                    </a>
                </div>
            </div>
        </div>
        `
    })
    listProduct.innerHTML = htmls.join('')
    // thêm slider
    $(listProduct).slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<i class='fa fa-angle-left p-nav p-nav-prev' aria-hidden='true'></i>",
        nextArrow:"<i class='fa fa-angle-right p-nav p-nav-next ' aria-hidden='true'></i>",
        responsive: [
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 2000,
                }
            }
        ]
      });
}
//render showrooms
function renderShowrooms(showrooms) {
    var listShowrooms = document.querySelector('.s__list')
    var htmls = showrooms.map(function(showroom) {
        return `
        <div class="col l-4 s__item">

            <div class="s__item--header">
                <span class="s__item--stt">${showroom.stt}</span>
                <h4 class="s__item--title">${showroom.name}</h4>
            </div>

            <div class="s__item--content">
                <div class="s__item--description address">
                    <i class="fa-solid fa-location-dot"></i>
                    <p> ${showroom.diachi}</p>
                </div>
                    <!-- hình ảnh thực tế -->
                <div class="s__item--description showroom">
                    <i class="fa-solid fa-images"></i>
                    <a href="${showroom.img}">Hình ảnh thực tế showroom</a>
                </div>
                <!-- xem đường đi -->
                <div class="s__item--description showroom">
                    <i class="fa-solid fa-map-location-dot"></i>
                        <a href="${showroom.map}">Xem đường đi</a>
                </div>

                <div class="s__item--description">
                    <i class="fa-solid fa-phone"></i>
                    <p>Tel: ${showroom.phone}</p>
                </div>
                <div class="s__item--description">
                    <i class="fa-solid fa-phone"></i>
                    <p>Bảo hành: ${showroom.baohanh}</p>
                </div>
                <div class="s__item--description">
                    <i class="fa-solid fa-envelope"></i>
                    <p>Email: ${showroom.email}</p>
                </div>
                <div class="s__item--description">
                    <i class="fa-solid fa-clock"></i>
                    <p>${showroom.openTime}</p>
                </div>
                
            </div>
         </div>
        `
    })
    listShowrooms.innerHTML = htmls.join('')
}
//end render


// render product trending

// render pcgm  trend
function renderPcGamingTrend(pcGmTrends) {
    var listProduct = document.querySelector('.p-trending.pcgmaing-trend')
    var htmls = pcGmTrends.map(function(pcGmTrend) {
        return `
        <div class="p-item p-item-trend">
        <div class="p-bg">
            <img src="${pcGmTrend.imgSrc}" alt="" class="p-img p-trend-img">
        </div>
        <div class="p-info">
            <div class="p-info-header">
                <a href="#" class="p-info-evaluate">
                    <img src="https://hacom.vn/media/lib/star_5.png" alt="" class="product__item--info-star">
                    <span class="p-count-rate">(0)</span>
                </a>
                <span class="p-sku">
                    Mã: ${pcGmTrend.sku}
                </span>
            </div>
            <a href="#" class="p-name">
                    ${pcGmTrend.name}
            </a>
            <div class="p-info-price">
                <span class="p-mprice"> ${pcGmTrend.price}đ</span>
                <span class="p-discount"> ${pcGmTrend.discount}</span>
            </div>
            <span class="p-price"> ${pcGmTrend.price} đ</span>
            <div class="p-action">
                <span class="p-check">
                    <i class="fa-solid fa-check p-check-icon"></i>
                    Còn hàng
                </span>
                <a href="cart.html" class="p-cart">
                    <i class="fa-solid fa-cart-shopping p-icon-cart"></i>
                </a>
            </div>
        </div>
    </div>
        `
    })
    listProduct.innerHTML = htmls.join('')
 //   thêm slider
    $(listProduct).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<i class='fa fa-angle-left p-trend-nav p-trend-nav-prev' aria-hidden='true'></i>",
        nextArrow:"<i class='fa fa-angle-right p-trend-nav p-trend-nav-next ' aria-hidden='true'></i>",
      });
}

// render laptop trend
function renderLaptopGmTrend(ltGmTrends) {
    var listProduct = document.querySelector('.p-trending.laptop-trend')
    var htmls = ltGmTrends.map(function(ltGmTrend) {
        return `
        <div class="p-item p-item-trend">
        <div class="p-bg">
            <img src="${ltGmTrend.imgSrc}" alt="" class="p-img p-trend-img">
        </div>
        <div class="p-info">
            <div class="p-info-header">
                <a href="#" class="p-info-evaluate">
                    <img src="https://hacom.vn/media/lib/star_5.png" alt="" class="product__item--info-star">
                    <span class="p-count-rate">(0)</span>
                </a>
                <span class="p-sku">
                    Mã: ${ltGmTrend.sku}
                </span>
            </div>
            <a href="#" class="p-name">
                    ${ltGmTrend.name}
            </a>
            <div class="p-info-price">
                <span class="p-mprice"> ${ltGmTrend.price}đ</span>
                <span class="p-discount"> ${ltGmTrend.discount}</span>
            </div>
            <span class="p-price"> ${ltGmTrend.price} đ</span>
            <div class="p-action">
                <span class="p-check">
                    <i class="fa-solid fa-check p-check-icon"></i>
                    Còn hàng
                </span>
                <a href="cart.html" class="p-cart">
                    <i class="fa-solid fa-cart-shopping p-icon-cart"></i>
                </a>
            </div>
        </div>
    </div>
        `
    })
    listProduct.innerHTML = htmls.join('')
    // thêm slider
    $(listProduct).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<i class='fa fa-angle-left p-trend-nav p-trend-nav-prev' aria-hidden='true'></i>",
        nextArrow:"<i class='fa fa-angle-right p-trend-nav p-trend-nav-next ' aria-hidden='true'></i>",
      });
}

// render pcmini trend
function renderPcMiniTrend(pcMiniTrends) {
    var listProduct = document.querySelector('.p-trending.pcmini-trend')
    var htmls = pcMiniTrends.map(function(pcMiniTrend) {
        return `
        <div class="p-item p-item-trend">
        <div class="p-bg">
            <img src="${pcMiniTrend.imgSrc}" alt="" class="p-img p-trend-img">
        </div>
        <div class="p-info">
            <div class="p-info-header">
                <a href="#" class="p-info-evaluate">
                    <img src="https://hacom.vn/media/lib/star_5.png" alt="" class="product__item--info-star">
                    <span class="p-count-rate">(0)</span>
                </a>
                <span class="p-sku">
                    Mã: ${pcMiniTrend.sku}
                </span>
            </div>
            <a href="#" class="p-name">
                    ${pcMiniTrend.name}
            </a>
            <div class="p-info-price">
                <span class="p-mprice"> ${pcMiniTrend.price}đ</span>
                <span class="p-discount"> ${pcMiniTrend.discount}</span>
            </div>
            <span class="p-price"> ${pcMiniTrend.price} đ</span>
            <div class="p-action">
                <span class="p-check">
                    <i class="fa-solid fa-check p-check-icon"></i>
                    Còn hàng
                </span>
                <a href="cart.html" class="p-cart">
                    <i class="fa-solid fa-cart-shopping p-icon-cart"></i>
                </a>
            </div>
        </div>
    </div>
        `
    })
    listProduct.innerHTML = htmls.join('')
    // thêm slider
    $(listProduct).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<i class='fa fa-angle-left p-trend-nav p-trend-nav-prev' aria-hidden='true'></i>",
        nextArrow:"<i class='fa fa-angle-right p-trend-nav p-trend-nav-next ' aria-hidden='true'></i>",
      });
}
// render tainghe
function renderHeadPhone(headPhones) {
    var listProduct = document.querySelector('.p-trending.headphone-trend')
    var htmls = headPhones.map(function(headPhone) {
        return `
        <div class="p-item p-item-trend">
        <div class="p-bg">
            <img src="${headPhone.imgSrc}" alt="" class="p-img p-trend-img">
        </div>
        <div class="p-info">
            <div class="p-info-header">
                <a href="#" class="p-info-evaluate">
                    <img src="https://hacom.vn/media/lib/star_5.png" alt="" class="product__item--info-star">
                    <span class="p-count-rate">(0)</span>
                </a>
                <span class="p-sku">
                    Mã: ${headPhone.sku}
                </span>
            </div>
            <a href="#" class="p-name">
                    ${headPhone.name}
            </a>
            <div class="p-info-price">
                <span class="p-mprice"> ${headPhone.price}đ</span>
                <span class="p-discount"> ${headPhone.discount}</span>
            </div>
            <span class="p-price"> ${headPhone.price} đ</span>
            <div class="p-action">
                <span class="p-check">
                    <i class="fa-solid fa-check p-check-icon"></i>
                    Còn hàng
                </span>
                <a href="cart.html" class="p-cart">
                    <i class="fa-solid fa-cart-shopping p-icon-cart"></i>
                </a>
            </div>
        </div>
    </div>
        `
    })
    listProduct.innerHTML = htmls.join('')
    // thêm slider
    $(listProduct).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow:"<i class='fa fa-angle-left p-trend-nav p-trend-nav-prev' aria-hidden='true'></i>",
        nextArrow:"<i class='fa fa-angle-right p-trend-nav p-trend-nav-next ' aria-hidden='true'></i>",
      });
}

// mobile render
function renderShowroomsMb(showroomsMb) {
    var listShowrooms = document.querySelector('.showroom-moible-list')
    var htmls = showroomsMb.map(function(showroomMb) {
        return `
        <li class="showroom-moible-item">
            <div class="showroom-moible-block">
                <span class="showroom-moible-title">
                   ${showroomMb.name}
                </span>
                <span class="showroom-moible-icon"></span>
            </div>
            <ul class="showroom-moible-sub ">
                <li class="showroom-moible-sub-item">
                    <p class="showroom-moible-sub-info addres">
                       - ${showroomMb.diachi}
                    </p>
                    <p class="showroom-moible-sub-info phone">
                       - ${showroomMb.phone}
                    </p>
                    <p class="showroom-moible-sub-info email">
                       - ${showroomMb.email}
                    </p>
                    <p>
                        <a href="${showroomMb.map}" class="showroom-moible-sub-info map">
                            - Xem đường đi
                        </a>
                    </p>
                </li>
            </ul>
        </li>
        `
    })
    listShowrooms.innerHTML = htmls.join('')
    $(document).ready(function() {
        $('.showroom-moible-block').click(function () {
            $(this).next(".showroom-moible-sub").slideToggle()
            $(this).children('.showroom-moible-icon').toggleClass('open');
        })
    })
}

//portfolio render
function renderPLaptop(laptops) {
    var listProduct = document.querySelector('.portfolio-list.p-laptop')
    var htmls = laptops.map(function(laptop) {
        return `
        <div class="col l-3 c-6 portfolio-item">
            <div class="portfolio-bg">
                <img src=${laptop.imgSrc} alt="" class="portfolio-img">
            </div>
            <div class="p-info">
                <div class="p-info-header">
                    <a href="#" class="p-info-evaluate">
                        <img src="https://hacom.vn/media/lib/star_5.png" alt="" class="product__item--info-star">
                        <span class="p-count-rate">(0)</span>
                    </a>
                    <span class="p-sku">
                        Mã: ${laptop.sku}
                    </span>
                </div>
                <a href="./product.html" class="p-name">
                     ${laptop.name}
                </a>
                <div class="p-info-price">
                    <span class="p-mprice"> ${laptop.price}đ</span>
                    <span class="p-discount"> ${laptop.discount}</span>
                </div>
                <span class="p-price"> ${laptop.price} đ</span>
                <div class="p-action">
                    <span class="p-check">
                        <i class="fa-solid fa-check p-check-icon"></i>
                        Còn hàng
                    </span>
                    <a href="cart.html" class="p-cart">
                        <i class="fa-solid fa-cart-shopping p-icon-cart"></i>
                    </a>
                </div>
            </div>
        </div>
        `
    })
    listProduct.innerHTML = htmls.join('')
}