window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
// أستيراد ملفات من مجلد node_modules
// import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';

// أضافة عنوان منبثق لأيقونة عربة الشراء
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item));
