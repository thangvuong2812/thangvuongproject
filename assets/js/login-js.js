$(function (){
    function KTDN()
    {
        var re = /[A-Za-z0-9]/;
        if(!re.test($("#txtDN").val()))
        {
            $("#tbDN").html("*Tên tài khoản không rỗng.");
            return false;
        }
        else
        {
            $("#tbDN").html("");
            return true;
        }
    }
    $("#txtDN").on("blur",KTDN);
    function KTMK()
    {
        var re = /.{6,}/;
        if($("#txtMK").val()=="")
        {
            $("#tbMK").html("*Mật khẩu không rỗng.");
            return false;
        }
        else
        {   
            if(!re.test($("#txtMK").val()))
            {
                $("#tbMK").html("*Mật khẩu phải có ít nhất 6 kí tự.");
                return false;
            }
            else
            {
                $("#tbMK").html("");
                return true;
            }
        }
    }
    $("#txtMK").on("blur",KTMK);
});