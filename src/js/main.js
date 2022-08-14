// envets tabui
const modalTitles = document.querySelectorAll('.header__modal-title-item')
const modalPanes = document.querySelectorAll('.header__modal-pane')

modalTitles.forEach((mobalTitle, i) => {
    const mobalPane = modalPanes[i]
    mobalTitle.onclick = () => {

    const titlesActive = document.querySelector('.header__modal-title-item.header__modal-active')
    const panesActive = document.querySelector('.header__modal-pane.modal-pane-active')
            
    titlesActive.classList.remove('header__modal-active')
    panesActive.classList.remove('modal-pane-active')
        
        mobalTitle.classList.add('header__modal-active')
        mobalPane.classList.add('modal-pane-active')
    }
});



$('.bander__buttom').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow:"<button type='button' class='bander_b-nav bander_b-prev'><i class='fa fa-angle-left bander_b-icon' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='bander_b-nav bander_b-next'><i class='fa fa-angle-right bander_b-icon ' aria-hidden='true'></i></button>",
});

const modalLogin = document.querySelector('#modal')
const loginBtn = document.querySelector('.js__login')
const overLayModal = document.querySelector('.overlay__modal')
const loginEmail = document.querySelector('.form__login--email')
const loginPhone = document.querySelector('.form__login--phone')
const toastMessage = document.querySelector('.toast-message')
const inputPassword = document.querySelector('.input__pass')
const showPasswordBtn = document.querySelector('.btn__show-pass')
const hiddenPasswordBtn = document.querySelector('.btn__hidden-pass')

function openModal() {
    modalLogin.classList.add('open__modal')
    overLayModal.classList.add('open__modal')
}
function closeModal() {
    overLayModal.classList.remove('open__modal')
    modalLogin.classList.remove('open__modal')
}
function removeModal() {
    modalLogin.classList.remove('open__modal')
    overLayModal.classList.remove('open__modal')
}
function prevLogin() {
    loginPhone.style.display = "flex"
    loginEmail.style.display = "none"
}
function prevLoginEmail() {
    loginPhone.style.display = "none"
    loginEmail.style.display = "flex"
}

function showPassword() {
    inputPassword.type ='text';
    showPasswordBtn.style.display = "none"
    hiddenPasswordBtn.style.display = "block"
}
function hiddenPassword() {
    inputPassword.type ='password';
    showPasswordBtn.style.display = "block"
    hiddenPasswordBtn.style.display = "none"
}

// 
function messageError() {
    toastMessage.style.display = "block"
}
function messageErrorHidden() {
    toastMessage.style.display = "none"
}
// sk hiện header__fixed
window.addEventListener('scroll', function() {
   const widthScroll = screen.width
   const heightScroll = window.pageYOffset
   const headerFixed = document.querySelector('.header__fixed')
   if (heightScroll >= 200 && widthScroll > 600) {
       headerFixed.style.display = "block"
    }  else if (heightScroll < 200 || widthScroll <= 600) {
       headerFixed.style.display = "none"
   }
});

window.addEventListener('scroll', function() {
   const logoMobile = document.querySelector('.header__mobile-logo')
   const searchMobile = document.querySelector('.h-mobile__search')
   const heightScroll = window.pageYOffset
   if (heightScroll >= 54) {
      logoMobile.style.display = "none"
      searchMobile.style.display = "flex"
   } else if (heightScroll < 150) {
      logoMobile.style.display = "block"
      searchMobile.style.display = "none"
   }
})
// open navbar mobile
var narBarIcon = document.querySelector('.nav__mobile-icon')
var mobileNav = document.querySelector('.mobile__nav')
narBarIcon.onclick = function() {
    narBarIcon.classList.toggle('nav__mobile-open')
    mobileNav.classList.toggle('mobile__nav-open')
}
/// danh mục ở phần mobile
$(document).ready(function() {
    $('.mobile__nav--category-block').click(function () {
        $('.nav--category-sub').slideToggle()
    })
})

// portfolio__slider
$('.portfolio__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow:"<i class='fa fa-angle-left portfolio-icon portfolio-prev' aria-hidden='true'></i>",
    nextArrow:"<i class='fa fa-angle-right portfolio-icon portfolio-next' aria-hidden='true'></i>",
    responsive: [
        {
            breakpoint: 490,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// lọc sp
$(document).ready(function() {
    $('.p-fillter-item-title').click(function () {
        $(".list-brand-check").slideDown()
        $(this).next().slideToggle()
    })
})

//
const addProduct = document.querySelector('.cart__product--quantity-btn.add')
const reduceProduct = document.querySelector('.cart__product--quantity-btn.reduce')
const quantilyProduct = document.querySelector('.cart__product--quantity-btn.index')
const totalPrice = document.querySelector('.total-item-price')
let i = 1;
let j = 0
let price = 37999000
addProduct.addEventListener('click', function() {
    i++
    j = price * i
    if(i >= 100) {
        i = 1
        price = 37999000
    }
    console.log(j)
    totalPrice.innerText = j + 'đ'
    quantilyProduct.setAttribute('value', `${i}`)
})
reduceProduct.addEventListener('click', function() {
    --i
   
    // j = price - i
    // totalPrice.innerText = j + 'đ'
    quantilyProduct.setAttribute('value', `${i}`)
  
})
