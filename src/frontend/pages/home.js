window.handleHomeRequest = () => {
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
 
  
  <div id ="search_bar">
      <input class="search_input" type="text"  name="searchbar" placeholder="search meal..">
      
      <button class="search_button" onClick='../api/meals'>search</button>
      <div class='bodyDiv'><ul class='searchedMeals'></ul></div>
      
     
    </div>
    
    <div class="front_image">
    <img
      class="potmeal"
      src="img/front_image.jpg"
      alt="african-meal"
    />

    
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

  //const mealList = document.getElementsByClassName("meals_list");
  const searchBar = document.getElementById("search_bar");
  const searchedMeals = document.querySelector(".searchedMeals");
  const meals = async () => {
    const res = await fetch("/api/meals");
    const result = await res.json();
    console.log(result);
    searchBar.addEventListener("keyup", (e) => {
      const filteredMeals = result.filter((meal) => {
        return meal.title === e.target.value;
      });

      if (filteredMeals.length !== 0) {
        searchedMeals.innerHTML = ` <li>${filteredMeals[0].title}</li> 
                            <li>${filteredMeals[0].description}</li>
                             <img src=${filteredMeals.image}>
                                `;
      }
    });
  };
  meals();

  // if any links are added to the dom, use this function
  // make the router handle those links.
  router.updatePageLinks();
};
