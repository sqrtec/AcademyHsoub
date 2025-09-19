/* Page Code Index js */
$(document).ready(function() {
    $(".first-list-element").addClass("active");
    //لحذف الصنف النشط، ووضعه عندما يُضغط على أحد أزرار القائمة العلوية
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
    //عند الضغط على الأيقونة الخاصة بالقائمة الجانبية
    $("#toggler").click(function(event) {
        $('#wrap').toggleClass('toggled');

        //إضافة طبقة سوداء
        var right = $('.sidebar').css("right"); //أعطينا هذه الخاصية للقائمة الجانبية لكي تُصبح على اليمين
        if (right == '0px') //القائمة الجانبية بحالة إظهار وبالتالي يجب إغلاقها
        {
            $('.sidebar').css({ 'right': '-17rem' });
            $('.layer').fadeOut(); /*أخفي الطبقة السوداء*/
        }
        else { //القائمة الجانبية بحالة إغلاق وبالتالي يجب إظهارها
            $('.sidebar').css({ 'right': '0' });
            $('.layer').fadeIn(); /*أظهر الطبقة السوداء*/
        }
    });

    //إخفاء القائمة الجانبية والطبقة السوداء عند الضغط على الطبقة السوداء
    $('.layer').click(function () {
        $('.sidebar').css({ 'right': '-17rem' });
        $('.layer').fadeOut();
    });

    //إخفاء وإظهار حقل البحث عند الضغط على أيقونة البحث التي تظهر في الشاشات المتوسطة والصغيرة
    $(".search-icon").click(function () {
        $(".search-input").slideToggle("slow"); 
    });

});



/* Page Code Log js */
$(document).ready(function() {
    // حذف الفيديو من سجل المشاهدة عندما يُضغط على إشارة الخطأ الموجودة في الزاوية
    $(".remove").click(function () {
        $(this).parents('.card').hide(); 
    });
});



/* Page Code Search js */
$(document).ready(function() {
    //فتح وإغلاق مرشحات تصفية البحث
    $("#search-filters-icon").click(function () {
        $(".filter-column").slideToggle("slow");
    });
    /*اختيار خيار واحد من كل عمود من صناديق التأشير*/
    $("input:checkbox").click(function () {
        var $box = $(this);//تحديد صندوق التأشير الذي تم الضغط عليه

        if ($box.is(":checked")) {//إذا حدد صندوق التأشير؟
            //attr الحصول على اسم صندوق التأشير عن طريق الخاصية
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false);//تحديد خطأ لجميع صناديق التأشير الموجودة في المجموعة التي لها الاسم الذي جلبناه في السطر السابق
            $box.prop("checked", true);//تحديد صح فقط لصندوق التأشير الذي ضغطنا عليه
        }
    });
});


/* Page Code Watch Js */
$(document).ready(function () {
    /*عند الضغط على الزر استدعي الدالة لتعمل وتظهر وتخفي النص*/
    $("#myBtn").on("click", function(){
        read();
    });
    /*إظهار وإخفاء الردود*/
    $(".reply").click(function() {
        $(this).parents("div.row").next("div.card").toggle();
    });
});

/*الدالة التي نستخدمها لإظهار وإخفاء العناصر*/
function read() {
    var dots = document.getElementById("dots");/*أحضر النقاط الثلاث*/
    var moreText = document.getElementById("more");/*أحضر النص الذي نريد إظهاره وإخفائه*/
    var btnText = document.getElementById("myBtn");/*أحضر الزر الذي سنضغط عليه*/

    if (dots.style.display === "none") {/*إذا كانوا النقاط الثلاث مخفيين يعني النص ظاهر وضغطت عالزر*/
        dots.style.display = "inline";/*أظهر النقط */
        btnText.innerHTML = "عرض المزيد";
      moreText.style.display = "none";/*أخفي النص */
    } else {/*إذا كانت النقط الثلاث ظاهرين أي النص مخفي وضغطت على الزر */
        dots.style.display = "none";/*أخفي النقط */
        btnText.innerHTML = "عرض عناصر أقل";
        moreText.style.display = "inline";/*أظهر النص المخفي */
    }
}