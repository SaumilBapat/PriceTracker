alert('updated');
window.fbAsyncInit = function() {
  FB.init({
    appId      : '264830230758095',
    cookie     : true,
    xfbml      : true,
    version    : 'v3.2'
  });

  FB.AppEvents.logPageView();

};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));


 $('#facebook-button').on('click', function() {
   alert('hi');
   // Initialize with your OAuth.io app public key
   OAuth.initialize('LllCNrbeI4SlJk6vdQLO5txR8os');
   // Use popup for oauth
   OAuth.popup('facebook').then(facebook => {
     console.log('facebook:',facebook);
     // Prompts 'welcome' message with User's email on successful login
     // #me() is a convenient method to retrieve user data without requiring you
     // to know which OAuth provider url to call
     facebook.me().then(data => {
       console.log('me data:', data);
       alert('Facebook says your email is:' + data.email + ".\nView browser 'Console Log' for more details");
     })
     // Retrieves user data from OAuth provider by using #get() and
     // OAuth provider url
     facebook.get('/v2.5/me?fields=name,first_name,last_name,email,gender,location,locale,work,languages,birthday,relationship_status,hometown,picture').then(data => {
       console.log('self data:', data);
     })
   });
 });
