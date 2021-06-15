$(function(){
    function KTHT() {
        var re = /[\p{Letter}\s]+/;
        if($("#txtht").val()=="")
        {
            $("#tbht").html("*Tên không được rỗng");
            return false;
        }
        else
        {
            if(!re.test($("#txtht").val()))
            {
                $("#tbht").html("*Tên bắt đầu bằng chữ IN HOA và không được chứa số");
                return false;
            }
            else
            {
                $("#tbht").html("");
                return true;
            }
        }
    }
    $("#txtht").on("blur",KTHT);

    function KTE() {
    var re =/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if($("#txtemail").val()=="")
        {
            $("#tbemail").html("*Email không được rỗng");
            return false;
        }
        else
        {
            if(!re.test($("#txtemail").val()))
            {
                $("#tbemail").html("*Email không hợp lệ");
                return false;
            }
            else
            {
                $("#tbemail").html("");
                return true;
            }
        }
    }
    $("#txtemail").on("blur",KTE);

    function KTNS() {
        var d = new Date();
            if($("#txtns").getYear()>d.getFullYear())
            {
                $("#tbns").html("*Năm sinh không hợp lệ");
                return false;
            }
            else
            {
                if($("#txtns").getYear()>1998)
                {
                    $("#tbns").html("*Bạn chưa đủ tuổi bạn êy!");
                    return false;
                }
                else
                {
                    $("#tbns").html("");
                    return true;
                }
            }
        }
        $("#txtns").on("blur",KTNS);

        function KTDN()
        {
            var re = /[A-Za-z0-9]/;
            if(!re.test($("#txtun").val()))
            {
                $("#tbun").html("*Tên tài khoản không rỗng!");
                return false;
            }
            else
            {
                $("#tbun").html("");
                return true;
            }
        }
    $("#txtun").on("blur",KTDN);
    function KTMK()
    {
        var re = /.{6,}/;
        if($("#txtmk").val()=="")
        {
            $("#tbmk").html("*Mật khẩu không rỗng.");
            return false;
        }
        else
        {   
            if(!re.test($("#txtmk").val()))
            {
                $("#tbmk").html("*Mật khẩu phải có ít nhất 6 kí tự.");
                return false;
            }
            else
            {
                $("#tbmk").html("");
                return true;
            }
        }
    }
    $("#txtmk").on("blur",KTMK);

    function KTNLMK()
    {
        if($("#txtnlmk").val()=="")
        {
            $("#tbnlmk").html("*Nhập lại mật khẩu không rỗng.");
            return false;
        }
        else
        {   
            if(!($("#txtnlmk").val() == $("#txtmk").val()))
            {
                $("#tbnlmk").html("*Nhập lại mật khẩu không trùng khớp.");
                return false;
            }
            else
            {
                $("#tbnlmk").html("");
                return true;
            }
        }
    }
    $("#txtnlmk").on("blur",KTNLMK);

    // BUG Can Fix
    $("a").click(function(e) {
        if(KTHT().valueOf() && KTE().valueOf() && KTDN.valueOf() && KTMK().valueOf() && KTNLMK().valueOf()) {
            
        } else {
            e.preventDefault();
        }
        
    })

});