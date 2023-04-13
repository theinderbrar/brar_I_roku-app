import Navbar from "./Navbar.js";
import BottomNav from "./BottomNav.js";

export default {
  name: "TheDefaultHomeComponent",
  data() {
    let genres = null;
    let moviesByGenre = {};
    return {
      genres,
      moviesByGenre,
    };
  },
  created() {
    this.fetchGenres();
  },
  methods: {
    async fetchGenres() {
      try {
        const response = await fetch(
          "http://localhost:5050/api/movie/get-genres"
        );
        const data = await response.json();
        this.genres = data.data.genres;
        await this.fetchMoviesByGenre();
      } catch (error) {
        console.error(error);
      }
    },
    async fetchMoviesByGenre() {
      for (const genre of this.genres) {
        try {
          const response = await fetch(
            `http://localhost:5050/api/movie/movie-genre/${genre.id}`
          );
          const data = await response.json();
          this.moviesByGenre[genre.id] = data.data.results;
        } catch (error) {
          console.error(error);
        }
      }
    },
  },
  template: `
    <Navbar />
    <div class='home_wrapper'>
      <div v-if="genres">
        <ul>
          <li v-for="genre in genres" :key="genre.id">
            <h3>{{ genre.name }}</h3>
            <div class='main_wrapper' style="display: flex; overflow-x: scroll;">
              <div class='movie_card' v-for="movie in moviesByGenre[genre.id]" :key="movie.id">
              <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" :alt="movie.title" style="max-width: 100%; height: auto; margin-bottom: 10px;">
              <h4>{{ movie.title }}</h4>
                <p><strong>Rating:</strong> {{ movie.vote_average }}</p>
                <router-link :to="{ name: 'movie', params: { id: movie.id }}"><button>Play</button></router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <BottomNav/>
    `,
  components: {
    Navbar,
    BottomNav
  },
};
