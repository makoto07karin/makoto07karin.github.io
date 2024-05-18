$(function(){
    $('.input_form_list-form').on('submit', function(e){
        var username = $('#username').val();
        var userkana = $('#userkana').val();
        var post = $('#userpost').val();
        var city = $('#prefectures').val();
        var mun = $('#municipalities').val();
        var tel_num = $('#usertel').val();
        var mail = $('#usermail').val();
        var pass = $('#userpass').val();
        
        var error_text = '';
  
        
        const phonePattern = /^0\d{9,10}$/; 
  
        if (username.trim() === ''){
            error_text = 'お名前を入力してください';
        } else if (userkana.trim() === ''){
            error_text = 'フリガナを入力してください';
        } else if (!userkana.match(/^[ァ-ヴ　]+$/)){
            error_text = 'フリガナは全角のカタカナで入力し、氏名の間にスペースを入れてください';
        } else if (post.trim() === ''){
            error_text = '郵便番号を入力してください';
        } else if (!post.match(/^[0-9]{7}$/)){
            error_text = '半角数字で７桁を入力してください';
        } else if (city.trim() === ''){
            error_text = '都道府県を選択してください';
        } else if (mun.trim() === ''){
            error_text = '市区町村を入力してください';
        } else if (!mun.match(/^[^\x20-\x7e]*$/)){
            error_text = '全角で入力してください';
        } else if (tel_num.trim() === ''){
            error_text = '電話番号を入力してください';
        } else if (!phonePattern.test(tel_num)){
            error_text = '電話番号は半角かつ10行または11行で入力してください';
        } else if (mail.trim() === ''){
            error_text = 'メールアドレスを入力してください';
        } else if (!mail.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)){
            error_text = 'メールアドレスを正しい書式で入力してください';
        } else if (pass.trim() === ''){
            error_text = 'パスワードを入力してください';
        } else if (!pass.match(/^([a-zA-Z0-9]{4,})$/)){
            error_text = 'パスワードは4文字以上の英数字で設定してください';
        }
        
        if (error_text !== ''){
            e.preventDefault();
            $('.entry-error').text(error_text);
        } else {
            e.preventDefault();
            $('.entry-error').text('当日お会いできるのを楽しみしております');
        }
    });
  });
  