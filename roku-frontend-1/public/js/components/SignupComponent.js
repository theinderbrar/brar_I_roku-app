import Navbar from "./Navbar.js";

export default {
  name: "TheLoginComponent",

  template: `
    <Navbar />
  
  <section class="login-section">
    <h1>SIGN UP</h1>
    <form @submit.prevent="signup">
    <input v-model="fname" placeholder="Enter First Name" class="input" type="text" name="fname" id="fname">
    <input v-model="lname" placeholder="Enter Last Name" class="input" type="text" name="lname" id="lname">
    <input v-model="username" placeholder="Enter Username" class="input" type="text" name="" id="usernames">
    <input v-model="dob" placeholder="Enter DOB" class="input" type="date" name="dob" id="dob">

    
      <input v-model="email" placeholder="Email email" class="input" type="text" name="username"
        id="email">
      <input v-model="password" placeholder="Password" class="input" type="password" name="password" id="password">
      <input v-model="confirmPassword" placeholder="Confirm password" class="input" type="password" name="confirmPassword" id="confirmPassword">
      <input :disabled="btnDisabled" type="submit" value="Sign In">
      <div class="additional">
        <div class="input_group">
          <input v-model="remember" type="checkbox" name="remember_me" id="remember_me">
          <label for="remember_me">Remember Me</label>
        </div>
        <router-link class="help" to="/">Need Help?</router-link>
      </div>
    </form>
    <p>New to Roku Flashback? <router-link class="signup" to="/">Sign in now</router-link></p>
  </section>
  <footer class="login-footer">
    <p>Questions? Call <a href="">952-803-4658</a></p>
    <ul class="info">
      <div class="info_section">
        <li><a href="">FAQ</a></li>
        <li><a href="">Terms of Use</a></li>
        <li><a href="">Cookie Preference</a></li>
      </div>
      <div class="info_section">
        <li><a href="">Help Center</a></li>
        <li><a href="">Privacy</a></li>
        <li><a href="">Corporate Info</a></li>
      </div>
    </ul>
  </footer>`,

  computed: {
    btnDisabled() {
      return (
        false

          // this.email.trim().length < 4 ||
          // this.password.trim().length < 4 ||
          // this.password !== this.confirmPassword
      );
    },
  },
  data() {
    return {
      fname: "",
      lname: "",
      username: "",
      email: "",
      password: "",
      cunfirmPassword: "",
      remember: true,
      dob: "",
    };
  },
  methods: {
    async signup() {
      try {
        const response = await fetch("http://localhost:5000/ums/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname: this.fname,
            lname: this.lname,
            username: this.username,
            email: this.email,
            password: this.password,
            remember: this.remember,
            dob: this.dob,
          }),
        });
        const data = await response.json();
        if(response.ok){
          // redirect to the home page
          this.$router.push({ name: "login" });
        }else{
          console.error(data.error);
        }
      } catch (error) {
        console.error(error);
      }
  
    },
  },
  components: {
    Navbar,
  },
};
