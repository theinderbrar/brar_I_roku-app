

export default {
  template: `
    <nav class="navbar">
    <div class="logo">
        <h1>
            <router-link to="/home">
                ROKU
            </router-link>
        </h1>
        <h2>{{username}}</h2>
    </div>
    </nav>
    `,

    data(){
        const userjson = localStorage.getItem("cachedUser");
        let username = "";
        if(userjson){
            const user = JSON.parse(userjson);
            username = user.username
        }

        return {
            username
        }
    }
};
