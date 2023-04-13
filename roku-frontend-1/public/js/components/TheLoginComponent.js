import Navbar from "./Navbar.js";

export default {
  name: "TheLoginComponent",

  template: `
  <Navbar />

<section class="login-section">
  <h1>SIGN IN</h1>
  <form @submit.prevent="login">
    <input v-model="email" placeholder="Email" class="input" type="text" name="email"
      id="email">
    <input v-model="password" placeholder="Password" class="input" type="password" name="password" id="password">
    <input :disabled="btnDisabled" type="submit" value="Sign In">
    <div class="additional">
      <div class="input_group">
        <input v-model="remember" type="checkbox" name="remember_me" id="remember_me">
        <label for="remember_me">Remember Me</label>
      </div>
      <a class="help" href="#">Need Help?</a>
    </div>
  </form>
  <p>New to Roku Flashback? <router-link class="signup" to="/signup">Sign Up now</router-link></p>
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
      return this.email.trim().length < 4 || this.password.trim().length < 4;
    },
  },
  data() {
    let email = "";
    let password = "";
    let remember = true;
    return {
      email,
      password,
      remember,
    };
  },
  methods: {
    async login() {
      try {
        let data = await fetch("http://localhost:5000/ums/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
            remember: this.remember,
          }),
        });
        let res = await data.json();
        if(data.ok){
          localStorage.setItem("cachedUser", JSON.stringify(res));
          const today = new Date();
          const userDOB = new Date(JSON.parse(localStorage.cachedUser).dob)
          if((today.getFullYear()-userDOB.getFullYear())>14)
            this.$router.replace({ name: "defaulthome" });
          else{
            this.$router.replace({ name: "kidshome" });
          }
        }else{
          console.error(res.error)
        }


      } catch (error) {
        console.log("error");
        console.log(error);
      }
    },
  },
  components: {
    Navbar,
  },
};
