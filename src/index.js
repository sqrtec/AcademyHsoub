window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
// أستيراد ملفات من مجلد node_modules
// import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';

// أضافة عنوان منبثق لأيقونة عربة الشراء
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item));

document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener("click", () => {
        alert("أضيف المُنتج إلى عربة الشراء")
    })
});


document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})

document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    })
})

// تحديث سنة الحقوق محفوظة تلقائي
document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة" + new Date().getFullYear();
