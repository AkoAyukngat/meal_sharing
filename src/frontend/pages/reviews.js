function renderReviews(reviews) {
  const div = document.querySelector(".reviews_container");
  const ul = document.createElement("ul");
  ul.className += "reviews_list";

  reviews.forEach((review) => {
    const li = document.createElement("li");
    li.className += "individual_reviews";

    li.innerHTML = `
    <div class='review_details'><h1>Title:</h1> ${review.title}</div>
  
    <div  class='review_details'><h1>Description:</h1> ${review.description}</div>
    
    <div  class='review_details'><h1>Meal Id:</h1>${review.meal_id}</div>
    <div class='review_details'><h1>Ratings:</h1>${review.ratings}</div>`;

    ul.appendChild(li);
  });
  div.appendChild(ul);
}

window.handleReviewsRequest = () => {
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

  <div class='reviews_container'></div>

  
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
</div>
    `;

  // make sure the backend api works before working with it here
  fetch("/api/reviews")
    .then((response) => response.json())
    .then((reviewsFromApi) => renderReviews(reviewsFromApi));
};
