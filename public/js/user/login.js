/**
 * Created by Administrator on 2017/6/1.
 */

jQuery(document).ready(function() {

    /*
     Fullscreen background
     */
    $.backstretch("assets/img/backgrounds/1.jpg");

    /*
     Form validation
     */
    $('.login-form input[type="text"], .login-form input[type="password"], .login-form textarea').on('focus', function () {
        $(this).removeClass('input-error');
        $("#error").text("");
    });
        $('.login-form').on('submit', function (e) {
            e.preventDefault();
            var phone = $("input[name=form-phone]").val();
            var password = $("input[name=form-password]").val();
            if (phone == "") {
                $("input[name=form-phone]").addClass('input-error');
                $("#error").text("用户名不能为空");
                return;
            }
            if (password == "") {
                $("input[name=form-password]").addClass('input-error');
                $("#error").text("密码不能为空");
                return;
            }
            $.ajax({
                url: '/doLogin',
                data: {phone: phone, password: password},
                method: 'post',
                complete: function (data) {
                    var result = eval("(" + data.responseText + ")");
                    if (result.success) {
                        setInterval(function () {
                            window.location = "index.html";
                        }, 1000) // $("#error").text(result.errorInfo);
                    } else {
                        $("#error").text(result.errorInfo);
                    }
                }
            })


        });




})