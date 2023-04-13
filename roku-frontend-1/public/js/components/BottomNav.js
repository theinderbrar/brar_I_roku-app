export default {
  template: `
    <nav class="bottom-nav">
    <ul>
        <li><router-link to="/home"><svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 495.398 495.398" xml:space="preserve">
                    <g>
                        <g>
                            <g>
                                <path
                                    d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
                                                                                                                                                                                                                                    v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
                                                                                                                                                                                                                                    c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
                                                                                                                                                                                                                                    c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z" />
                                <path
                                    d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
                                                                                                                                                                                                                                    c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
                                                                                                                                                                                                                                    c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z" />
                            </g>
                        </g>
                    </g>
                </svg></router-link></li>
        <li><a href=""><svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z"
                        fill-rule="evenodd" />
                </svg></a></li>
        <li><a href=""><svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                    <title />

                    <g id="Complete">

                        <g id="download">

                            <g>

                                <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

                                <g>

                                    <polyline data-name="Right" fill="none" id="Right-2"
                                        points="7.9 12.3 12 16.3 16.1 12.3" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" />

                                    <line fill="none" stroke="currentColor" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="2.7" y2="14.2" />

                                </g>

                            </g>

                        </g>

                    </g>



                </svg></a></li>
        <li><a @click.prevent="logout"  href=""><svg fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 384.971 384.971" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Sign_Out"> <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z"></path> <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg></a></li>
    </ul>
</nav>
    `,
  methods: {
    logout() {
      localStorage.removeItem("cachedUser");
      this.$router.push({ name: "login" });
    },
  },
};
