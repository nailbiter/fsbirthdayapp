		window.fbAsyncInit = function() {
		FB.init({
			 appId            : '287927608592313',
			 autoLogAppEvents : true,
			 xfbml            : true,
			version          : 'v3.2'
		});
		FB.login(function(response) {
				if (response.authResponse) {
				 console.log('Welcome!  Fetching your information.... ');
				 FB.api('/me', function(response) {
					 console.log('Good to see you, ' + response.name + '.');
				 });
				} else {
				 console.log('User cancelled login or did not fully authorize.');
				}
		});
		};

		(function(d, s, id){
			 var js, fjs = d.getElementsByTagName(s)[0];
			 if (d.getElementById(id)) {return;}
			 js = d.createElement(s); js.id = id;
			 js.src = "https://connect.facebook.net/en_US/sdk.js";
			 fjs.parentNode.insertBefore(js, fjs);
		 }(document, 'script', 'facebook-jssdk'));
