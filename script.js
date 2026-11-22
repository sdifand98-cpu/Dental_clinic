const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const opened = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(opened));
  menuToggle.textContent = opened ? '×' : '☰';
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

const dateInput = document.getElementById('dateInput');
const today = new Date();
const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split('T')[0];
dateInput.min = localDate;

document.querySelectorAll('.book-doctor').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('doctorSelect').value = button.dataset.doctor;
    document.getElementById('booking').scrollIntoView({behavior: 'smooth'});
  });
});

document.getElementById('bookingForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const name = form.elements.name.value.trim();
  const message = document.getElementById('successMessage');
  message.textContent = `شكراً ${name}، تم استلام طلبك التجريبي بنجاح. سيتواصل معك فريق الاستقبال لتأكيد الموعد.`;
  message.classList.add('show');
  form.reset();
  dateInput.min = localDate;
});

document.querySelectorAll('.offer-book').forEach(button => {button.addEventListener('click', () => {const select=document.querySelector('select[name="service"]');if(select){let opt=[...select.options].find(o=>o.text===button.dataset.service);if(!opt && button.dataset.service==='كشف وتنظيف الأسنان'){opt=[...select.options].find(o=>o.text==='تبييض الأسنان بالليزر');}if(opt)select.value=opt.value;}});});
