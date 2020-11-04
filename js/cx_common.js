window.onload=function(){
      // $(".four").css('display', 'none')
      atijiao = function () {
        if ($('#onetable  input:radio:checked').length != 15) {
            alert("还有没选的")
            return false
        } else {
            alert("选择完毕")

            $(".one").css('display', 'none')
            $(".two").css('display', 'block')
        }
        
      


    }
    btijiao = function () {
        if ($('#onetable  input:radio:checked').length != 15) {
            alert("还有没选的")
            return false
        } else {

            $(".two").css('display', 'none')
            $(".three").css('display', 'block')
        }

    }
    bsyz = function () {
        $(".two").css('display', 'none')
        $(".one").css('display', 'block')
    }
    cxyz = function () {
        if ($('#onetable  input:radio:checked').length != 15) {
            alert("还有没选的")
            return false
        } else {

            $(".three").css('display', 'none')
            $(".four").css('display', 'block')
        }

    }
    csyz = function () {
        $(".three").css('display', 'none')
        $(".two").css('display', 'block')
    }
    dsyz = function () {
        $(".four").css('display', 'none')
        $(".three").css('display', 'block')
    }

    tijiao = function () {

        var atotal = 0;
        $('#onetable input:radio:checked').each(function () {

            atotal += Number($(this).val())
        });
        console.log(atotal)
        var btotal = 0;
        $('#twotable input:radio:checked').each(function () {


            btotal += Number($(this).val())
        });
        console.log(btotal)
        var ctotal = 0;
        $('#threetable input:radio:checked').each(function () {

            ctotal += Number($(this).val())
        });
        console.log(ctotal)
        var dtotal = 0;
        $('#fourtable input:radio:checked').each(function () {

            dtotal += Number($(this).val())
        });
        console.log(dtotal)








    }

}