`$.dynamic_popup()` is a lightweight jQuery Mobile plugin based on the `popup()` function available since 1.2 alpha release. It enables you to create a *dynamic popup* without stressing you with details where to put the actual HTML code. This is extremely useful if you have *many dynamic pages* in your *jQuery Mobile web application*.

##### Example

Include the required files:

```html
<script src="js/jquery.min.js"></script>
<script src="js/jquery.mobile.min.js"></script>
<script src="js/jquery.mobile.dynamic.popup.js"></script>
```

Simple text alert:
```javascript
$.dynamic_popup('This is a basic help message. Did you get it?');
```

Add HTML and events to your popups:
```javascript
$.dynamic_popup('Enter your <b>name</b> and <b>email</b> before submitting the form.');

$.dynamic_popup({
    content: '<p>' + $('#name').val() + ', you have successfully registered!' + '</p>',
    'data-transition': 'slideup',
    'data-position-to': '#Register'
})
.bind({
    popupafteropen: function(e){
        console.log('Opened the popup!');
    },
    popupafterclose: function(e){
        $.mobile.changePage('#thankyouPage');
    }
});
```

##### Configuration

```javascript
// Default configuration.
$.dynamic_popup({
    content: '',
    popupId: 'popup' + $activePage.attr('id'),
    'data-theme': 'a',
    'data-overlay-theme': 'none',
    'data-position-to': 'window',
    'data-rel': 'back',
    'data-dismissible': true,
    'data-transition': 'none',
    'data-arrow': false
});
```

You can find more about these configuration options on the official jQuery mobile popup docs: http://demos.jquerymobile.com/1.4.2/popup/

##### Contribute

<a href="https://github.com/serbanghita/jQM-dynamic-popup/issues/new">Add an issue</a> or fork the project and submit a pull request. <br>
If this script helped you save a lot of developing time, I really appreciate any donations 
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=serbanghita%40gmail%2ecom&lc=US&item_name=Serban%20Ghita%20%28GitHub%29&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0"></a>. Thank you!
