$(function(){
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '685653374879329',
            xfbml      : true,
            version    : 'v2.2'
        });
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

   function share_It(){
        FB.ui(    {
                method: 'share',
                href: 'http://qa.grupow.com/vw/2015/touareg/',
                name: 'Nuevo Jetta, Volkswagen México.',
                link: 'http://qa.grupow.com/vw/2015/touareg/',
                caption: 'Nuevo Jetta, Volkswagen México.',
                description: 'Nuevo Jetta: elegante, deportivo e innovador. Te damos 9 poderosas razones para quererlo.',
                message: 'Nuevo Touareg. El verdadero lujo es estar preparado para todo. Conócela aquí.',
            },
            function (response) {
                if (response && response.post_id) {

                } else {

                }
            }
        );
    }

        $('#fcShare').on('click', function(e){
            e.preventDefault();
            console.log('Click Share');
            share_It();
        })


});