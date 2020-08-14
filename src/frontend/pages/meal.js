window.handleMealRequest = (params) => {
  fetch("/api/reservations")
    .then((response) => response.json())
    .then((result) => {
      const mealWithReservationsId = result.map(
        (reservation) => reservation.id
      );
      const mealId = `${params.id}`;

      if (mealWithReservationsId.includes(parseInt(mealId))) {
        document.body.innerHTML = `<div class='body_container'>
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



<h1 class="res_statement" >Please place your reservation</h1>
<div class ='pop_window'>
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
</div>`;

        const div = document.querySelector(".pop_window");
        div.innerHTML = `
    <div class="popform_content">
    <div class="container">
      <form action="/api/reservations" method="POST" class="form_container">
        <label for="name"><b>Name</b></label>
        <input
          type="text"
          id="form_input"
          placeholder="Enter Name"
          name="name"
          required
        /><br>
        <br>
        <label for="email"><b>Email</b></label>
        <input
          type="text"
          id="form_input"
          placeholder="Enter email"
          name="email"
          required
        /><br>
        <br>
        <label for="phone_number"><b>Phone number</b></label>
        <input
          type="number"
          id="form_input"
          placeholder="Enter Phone number"
          name="phone_number"
          required
        /><br>
        <br>
        <label for="meal_id"><b>Meal id</b></label>
        <input
          type="number"
          id="form_input"
          placeholder="Enter meal_id"
          name="meal_id"
          required
        /><br>
        <br>
        <label for="number_of_guests"><b>Number of guests</b></label>
        <input
          type="number"
          id="form_input"
          placeholder="Enter number_of_guests"
          name="number_of_guests"
          required
        /><br>
        <br>
        <label for="created_date"><b>Created date</b></label>
        <input
          type="text" 
          id="form_input"
          placeholder="yyyy-mm-dd"
          name="created_date"
          required
        />
        <br>
        <br>
        <button type="submit" class="button">send</button><br><br>
      </form>
    </div>
    </div>`;

      } else {
        alert("Please select another meal to make reservation");
        window.history.back();
      }
    });
};
