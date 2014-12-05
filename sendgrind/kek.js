
function keksuccess() {
  $('#kek').html('<iframe src="https://www.youtube.com/embed/P3ALwKeSEYs?autoplay=1" width="540" height="325" frameborder="0" allowfullscreen></iframe>');
}

$('#kekform').on('submit', function(e) {
  var email, goodto, html, subject, testto, url;
  url = 'http://localhost:3000/send';
  testto = 'dasilvacontin@gmail.com';
  goodto = 'robin.johnson@sendgrid.com';
  subject = $('#subject').val()
  html = $('#msg').val();
  email = {
    to: goodto,
    subject: subject,
    html: html
  };
  $.post(url, email, function(res) {
    if (res.success) keksuccess();
    else alert(res.error.message);
  });
  e.preventDefault();
  return false;
});
