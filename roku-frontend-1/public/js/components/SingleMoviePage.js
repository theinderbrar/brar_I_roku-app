import Navbar from "./Navbar.js";
import BottomNav from "./BottomNav.js";

export default {
  name: "SingleMoviePage",
  template: `
    <Navbar />
    <section class="individual-movie-section">
        <h1>{{ title }}</h1>
        <div class="video">
            <iframe :src="\`https://www.youtube.com/embed/\${key}\`" title="YouTube video player" frameborder="0"
                allowfullscreen></iframe>
        </div>
        <h3 class="rating">Ratings: {{ rating.toFixed(2) }}</h3>
        <h3 class="genre">Genre</h3>
        <p>{{ genre.join(" | ") }}</p>
        <h3>Description</h3>
        <p> {{ description }}</p>
        <div id="disqus_thread"></div>
    </section>
    <BottomNav />
    `,
  data() {
    return {
      title: "",
      key: null,
      rating: 0,
      description: "",
      ref: null,
      genre: []
    };
  },
  components: {
    Navbar,
    BottomNav,
  },
  beforeCreate() {
    fetch(
      `http://localhost:5050/api/movie/single-movie/${this.$route.params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.key = data.videos[1]?.key || "";
        this.title = data.details.title;
        this.rating = data.details.vote_average;
        this.genre = data.details.genres.map((genre) => genre.name);
        this.description = data.details.overview;
      });
  },
  mounted() {
    let d = document,
      s = d.createElement("script");
    s.src = "https://roku-3.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  },
};
