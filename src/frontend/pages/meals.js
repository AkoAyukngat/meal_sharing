window.handleMealsRequest = () => {
  document.body.innerHTML = `
  <div class='body_container'>
  <div class='app_container'> 
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


<div class= 'meals_container'>
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
</div>


 `;

  function renderMeals(meals) {
    const div = document.querySelector(".meals_container");
    const ul = document.createElement("ul");
    ul.className += "meals_list";

    meals.forEach((meal) => {
      const li = document.createElement("li");
      li.className += "individual_meals";

      li.innerHTML = `
      <img class='meals_images' src=${meal.image}/> 
                      <div class ='meals_details'>${meal.title}</div>
                      <div class ='meals_details'>${meal.price}</div>
                      <a  href='/meal/${meal.id}'  class="reservation_button">RESERVE</a>
                      

      `;

      ul.appendChild(li);
    });
    div.appendChild(ul);
  }

  // make sure the backend api works before working with it here
  fetch("/api/meals")
    .then((response) => response.json())
    .then((mealsFromApi) => renderMeals(mealsFromApi));
};
