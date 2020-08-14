window.handleAboutRequest = () => {
  document.body.innerHTML = `
  <div class='body_container'>
      <div class="navbar">
      <div class="navbar-container">
        <div class="logo-container">
          <a class="navbar-logo" href="/"
            ><h1><span>MEAL</span>SHARING</h1></a
          >
        </div>
        <ul class="navbar-right">
          <a href="/meals"><li>meals</li></a>
          <a href="/reviews"><li>reviews</li></a>
          <a href="/about"><li>about us</li></a>
        </ul>
      </div>
    </div>

    
    <div class="about_us">
    <h1 class='about_header'>THE ESTABLISHMENT OF AKO AYUKNGAT'S CUISINE</h1>
    <p>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.</br> 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</br>
    when an unknown printer took a galley of type and scrambled it to make a type </br>
    specimen book.</br>
    </br></br>
    It has survived not only five centuries, but also the leap into electronic typesetting,</br>
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset</br>
    sheets containing Lorem Ipsum passages, and more recently with desktop</br> 
    publishing software like Aldus PageMaker including versions of Lorem Ipsum.</br>
    </br>
    </br>
    </p>
    
    </div>
 
<div class="footer">
<div class="inner_footer">
  <div class="logo">
    <img src="img.jpg" alt="" />
  </div>
  <div class="footer_one">
    <h1>Need help?</h1>
    <a href="#">Terms &amp; Conditions</a>
    <a href="#">Privacy Policy</a>
  </div>
  <div class="footer_one">
    <h1>Contacts $ Opening Hours</h1>

    <span>
      TELEFON: 300143734 <br />
      Email: mealsharing@mealsharing.com <br />
      <br />
      MONDAY - FRIDAY: 09:00-17:00 <br />
      SATURDAY & SUNDAY: CLOSED
    </span>
  </div>
  <div class="footer_one">
    <h1>Address & Location</h1>

    <span>
      Blomstergarden 400 <br />
      North Naestved Drive <br />
      Naestved-Denmark.
    </span>
  </div>
</div>
</div>
</div>
      `;

  // make sure the backend api works before working with it here
  //   fetch("/api/reviews")
  //     .then((response) => response.json())
  //     .then((reviewsFromApi) => renderReviews(reviewsFromApi));
};
