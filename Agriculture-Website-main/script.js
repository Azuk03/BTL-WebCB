// nav-menu
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav_link');
  const currentUrl = window.location.pathname.split('/').pop();
  console.log('Current URL:', currentUrl);  // Debug log

  navLinks.forEach(link => {
    let linkHref = link.getAttribute('href').replace('./', ''); // Normalize the href
    console.log('Checking link:', linkHref);  // Debug log

    if (linkHref === currentUrl) {
      link.classList.add('active');
      console.log('Added active class to:', link);  // Debug log
    }

    // Add click event listener to each nav link
    link.addEventListener('click', function() {
      // Remove 'active' class from all links
      navLinks.forEach(nav => nav.classList.remove('active'));
      console.log('Removed active class from all links');  // Debug log

      // Add 'active' class to the clicked link
      this.classList.add('active');
      console.log('Added active class to clicked link:', this);  // Debug log
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // search task
  let searchForm = document.querySelector('.search-form');
  document.querySelector('#search-btn').onclick = () =>{
      searchForm.classList.toggle('active');
      navBar.classList.remove('active');
      loginForm.classList.remove('active');
      Signupform.classList.remove('active');
      forgetPass.classList.remove('active');
  }

  // login task
  let loginForm = document.querySelector('.login_form');
  document.querySelector('#login-btn').onclick = () =>{
      loginForm.classList.toggle('active');
      navBar.classList.remove('active');
      searchForm.classList.remove('active');
      Signupform.classList.remove('active');
      forgetPass.classList.remove('active');
  }

  let Signupform = document.querySelector('.Sign-up_form');
  document.querySelector('#Sign-upp').onclick = () =>{
      Signupform.classList.toggle('active');
      loginForm.classList.remove('active');
      navBar.classList.remove('active');
      searchForm.classList.remove('active');
      forgetPass.classList.remove('active');
  }

  let loginForm2 = document.querySelector('.login_form');
  document.querySelector('#Login_p').onclick = () =>{
    loginForm2.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    Signupform.classList.remove('active');
    forgetPass.classList.remove('active');
  }

  let forgetPass = document.querySelector('.forget-pass_form');
  document.querySelector('#Forget_pass').onclick = () =>{
    forgetPass.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    Signupform.classList.remove('active');
    loginForm.classList.remove('active');
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const FPmessage = document.querySelector('.forget-pass_message');
    const FPinput = document.querySelector('.FP_input');
    document.querySelector('#FP_message').onclick = (event) => {
        event.preventDefault(); 
        const FPvalue = FPinput.value;
        if (FPvalue === 'meocuptai2@gmail.com') {
            FPmessage.style.display = 'block';
        } else {
            FPmessage.style.display = 'none'; // Ẩn thông báo nếu email không khớp
        }
    }
  });
  
  // responsive mobile navbar
  let navBar = document.querySelector('.nav_list');
  document.querySelector('#menu-btn').onclick = () =>{
      navBar.classList.toggle('active');
      searchForm.classList.remove('active');
      loginForm.classList.remove('active');
      Signupform.classList.remove('active');
  }
  
  window.onscroll = () =>{
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    Signupform.classList.remove('active');
  }
});


// Loadmore btn
document.addEventListener("DOMContentLoaded", () => {
  const loadMoreButton = document.querySelector(".products_btn");
  const hiddenProducts = document.querySelectorAll(".product_card.product_hidden");

  loadMoreButton.addEventListener("click", () => {
    hiddenProducts.forEach(product => {
      product.classList.toggle("product_hidden");
    });

    if (loadMoreButton.textContent === "Load More") {
      loadMoreButton.textContent = "Show Less";
    } else {
      loadMoreButton.textContent = "Load More";
    }
  });
});

// Single product description and info
function showContent(type) {
  const descriptionBtn = document.querySelector('.description_btn');
  const informationBtn = document.querySelector('.information_btn');
  const descriptionPara = document.querySelector('.description');
  const informationPara = document.querySelector('.information');
  
  if (type === 'description') {
    descriptionBtn.classList.add('active');
    informationBtn.classList.remove('active');
    descriptionPara.style.display = 'block';
    informationPara.style.display = 'none';
  } else if (type === 'information') {
    descriptionBtn.classList.remove('active');
    informationBtn.classList.add('active');
    descriptionPara.style.display = 'none';
    informationPara.style.display = 'block';
  }
}

// Cart
document.addEventListener('DOMContentLoaded', function() {
  const cartInput = document.querySelector('.cart_input');
  const cartBtn = document.querySelector('.cart_btn');
  const shoppingCart = document.querySelector('.shopping-cart .cart_items');
  
  cartBtn.addEventListener('click', addtoCart);
  
  function addtoCart() {
    const quantity = parseInt(cartInput.value);
  
    if(quantity > 0){
      const productName = document.querySelector('.single_title').textContent;
      const productImage = document.querySelector('.single_img').src;
      const productPrice = parseFloat(document.querySelector('.single_price').textContent.replace('$', ''));

      const totalPrice = productPrice * quantity;
  
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart_box');
      cartItem.innerHTML = `
        <i class="fas fa-trash cart_trash-icon"></i>
        <img src="${productImage}" alt="${productName} Image">
        <div class="cart_content">
          <h3>${productName}</h3>
          <span class="cart_price">$${totalPrice.toFixed(2)}/-</span>
          <span class="cart_quantity">qty: ${quantity}</span>
        </div>
      `;
  
      shoppingCart.appendChild(cartItem);
  
      cartInput.value = '';
  
      const trashIcon = cartItem.querySelector('.cart_trash-icon');
      trashIcon.addEventListener('click', function() {
        cartItem.remove();
      });
    } else {
      alert('Please enter a valid quantity.');
    }
    
  }
});

// contact feedback alert
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('thankYouMessage').style.display = 'block';
    document.getElementById('feedbackForm').style.display = 'none';
  });
});

// checkout btn
document.addEventListener('DOMContentLoaded', () => {
  const checkOutBtns = document.querySelectorAll('.js_cartcheck');
  const pmodal = document.querySelector('.payment_modal');
  let pmodalClose = document.querySelector('.js_modal-close');

  function showPayment() {
    const address = document.getElementById('cartDeli').value.trim();
    const phone = document.getElementById('cartPhone').value.trim();
    const paymentMethod = document.querySelector('input[name="payment"]:checked');

    if (!address || !phone || !paymentMethod) {
      alert('Please fill in all the required fields.');
      return;
    }

    if (paymentMethod.value === 'OnlinePayment') {
      pmodal.innerHTML = `<form action="#">
        <div class="pmodal_container">
          <div class="pmodal_close js_modal-close">
            <i class="fa-solid fa-xmark"></i>
          </div>
          <div class="pmodal_container-sub">
            <header class="pmodal_header">
              <div class="pmodal_head">
                <i class="modal_heading-icon fa-solid fa-credit-card"></i>
                <span>Payment</span>
              </div>
                <img src="./images/payment1.png" alt="" class="pmodal_img">
            </header>
            <div class="pmodal_body-container">
              <div class="pmodal_body">
                <div class="pmodal_group">
                  <label for="cardnum" class="pmodal_label">
                    Card number
                  </label>
                  <input id="cardnum" type="tel" class="pmodal_input" placeholder="Valid Card Number" required>
                </div>
                <div class="pmodal_1row">
                  <div class="pmodal_groupf2">
                    <label for="Exdate" class="pmodal_label">
                      Expiration Date
                    </label>
                    <input id="Exdate" type="date" class="pmodal_input" placeholder="MM/ YY" required>
                  </div>
                  <div class="pmodal_groupf1">
                    <label for="CVcode" class="pmodal_label">
                      CV Code
                    </label>
                    <input id="CVcode" type="tel" class="pmodal_input" placeholder="CVC" required>
                  </div>
                </div>
                <div class="pmodal_group">
                  <label for="CardOwn" class="pmodal_label">
                    Card Owner
                  </label>
                  <input id="CardOwn" type="text" class="pmodal_input" placeholder="Card Owner Name" re>
                </div>
                <p class="payment_total">Total: 29.00$</p>
                </div>
                <button id="pmodal_btn">
                  Pay
                  <i class="fa-solid fa-check"></i>
                </button>
            </div>
          </div>  
          </div>
      </form>`
      pmodal.classList.add('open');
      pmodalClose.removeEventListener('click', hidePayment);
      pmodalClose = document.querySelector('.js_modal-close');
      pmodalClose.addEventListener('click', hidePayment);
    } else if (paymentMethod.value === 'DirectPayment') {
      const pmodalBody = document.querySelector('.payment_modal .pmodal_container-sub');
      pmodalBody.innerHTML = '<img src="./images/sc.png" class="scimg" alt="Success">';
      pmodal.classList.add('open');
    }
  }

  function hidePayment() {
    pmodal.classList.remove('open');
    pmodal.innerHTML = '';
  }

  for (const checkOutBtn of checkOutBtns) {
    checkOutBtn.addEventListener('click', showPayment);
  }

  pmodalClose.addEventListener('click', hidePayment);
});

// payment_btn click
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('pmodal_btn').addEventListener('click', function() {
    const cardNumber = document.getElementById('cardnum').value;
    const pmodalBody = document.querySelector('.payment_modal .pmodal_body-container');

    if (cardNumber === '123456789') {
      pmodalBody.innerHTML = '<div class="pmodal_fsdiv"><i class="pmodal_fsimg fa-regular fa-thumbs-up"></i><span>Successful!</span></div>';
    } else {
      pmodalBody.innerHTML = '<div class="pmodal_fsdiv"><i class="pmodal_fsimg fa-regular fa-thumbs-down"></i><span>Failed!</span></div>';
    }
  });
});



