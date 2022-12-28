export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:finish', () =>{
        const route= useRoute();
        const routes=ref(route.path.split('/'));
        if(process.client) {     
            // document.querySelector(".router-link-active").classList.add('text-emerald-700');
            // console.log(document.querySelector('.router-link-active'));
            if (routes.value[1]=='projects'){
                document.querySelector("#projects").classList.add('link');
                document.querySelector("#note").classList.remove('link');
                document.querySelector("#note2").classList.remove('link_md');
            }
            else if (routes.value[1]=='note'){
                document.querySelector("#note").classList.add('link');
                document.querySelector("#note2").classList.add('link_md');
                document.querySelector("#projects").classList.remove('link');
            }
        }
    })
})