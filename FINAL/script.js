// Burger menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click', () => nav.classList.toggle('active'));

// Form validation
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('email').value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!regex.test(email)) {
    alert("გთხოვთ შეიყვანოთ სწორი ელ.ფოსტა");
    return;
  }
  alert("ფორმა წარმატებით გაიგზავნა!");
});

// Show/hide password
document.getElementById('togglePassword')?.addEventListener('click', () => {
  const pass = document.getElementById('password');
  pass.type = pass.type === "password" ? "text" : "password";
});

// Fetch products
fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('product-list');
    if(list){
      data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.price} ₾</p>
        `;
        list.appendChild(div);
      });
    }
  })
  .catch(err => console.error("Error loading products:", err));

// Scroll-to-top
const scrollBtn = document.createElement('button');
scrollBtn.textContent = "⬆";
scrollBtn.classList.add('scroll-top');
document.body.appendChild(scrollBtn);
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// Cookies notification
if(!localStorage.getItem('cookiesAccepted')){
  const cookieDiv = document.createElement('div');
  cookieDiv.innerHTML = "ეს საიტი იყენებს cookies <button id='accept'>Accept</button>";
  cookieDiv.classList.add('cookie');
  document.body.appendChild(cookieDiv);
  document.getElementById('accept').addEventListener('click', () => {
    cookieDiv.style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
  });
}