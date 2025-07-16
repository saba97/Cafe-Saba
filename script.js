window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

function toggleMode() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");
  body.classList.toggle("dark");
  icon.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
}

function filterMenu(category) {
      const items = document.querySelectorAll('.menu-item');
      items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    }
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
});

function filterGallery(category) {
  const cards = document.querySelectorAll('.gallery-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function filterGallery(category) {
  const cards = document.querySelectorAll('.gallery-card');
  let visibleCount = 0;
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
      visibleCount++;
    
    } else {
      card.style.display = 'none';
    }
  });
  
  const emptyMsg = document.getElementById('empty-message');
  if (visibleCount === 0) {
    emptyMsg.style.display = 'block';
  } else {
    emptyMsg.style.display = 'none';
  }
}

// Tab switching
    function showCategory(cat) {
      const categories = ['coffee', 'pastry', 'dessert'];
      categories.forEach(c => {
        document.getElementById(c).hidden = c !== cat;
        const tabBtn = document.getElementById('tab-' + c);
        tabBtn.classList.toggle('active', c === cat);
        tabBtn.setAttribute('aria-selected', c === cat ? 'true' : 'false');
      });
    }

    // Order logic
    const order = [];
    function addToOrder(name, price) {
      order.push({name, price});
      updateOrderCount();
    }
    function updateOrderCount() {
      document.getElementById('order-count').textContent = order.length;
    }
    function alertOrder() {
      if(order.length === 0) {
        alert("Your order is empty!");
        return;
      }
      let message = "Your order:\n";
      order.forEach((item, i) => {
        message += `${i+1}. ${item.name} - $${item.price.toFixed(2)}\n`;
      });
      alert(message);
    }

    // Initial animation for visible cards
    document.querySelectorAll('.menu-card').forEach((card, i) => {
      card.style.animationDelay = (i * 0.1) + 's';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    });
    let cart = [];
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

function toggleCart() {
  document.getElementById("cart-panel").classList.toggle("active");
}

function addToCart(name, price) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}
function updateCart() {
  cartItems.innerHTML = "";  // ← باید این باشه، نه += ""

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</span>

      <div style="display: inline-block; margin-left: 10px;">
        <button onclick="changeQuantity(${index}, -1)">−</button>
        <button onclick="changeQuantity(${index}, 1)">+</button>
        <button onclick="removeItem(${index})">🗑️</button>
      </div>
    `;

    cartItems.appendChild(li);
  });

  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartTotal.textContent = total.toFixed(2);
}
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}
function changeQuantity(index, amount) {
  cart[index].quantity += amount;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  updateCart();
}
document.querySelector(".reservation-section form").addEventListener("submit", function(e) {
  e.preventDefault(); // جلوگیری از رفرش شدن

  // پاک کردن فرم
  this.reset();

  // نمایش پیام
  const msg = document.getElementById("reservation-msg");
  msg.style.display = "block";

  // مخفی کردن بعد چند ثانیه (اختیاری)
  setTimeout(() => {
    msg.style.display = "none";
  }, 6000);
});

const backToTopBtn = document.getElementById("backToTop");

  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  };

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });