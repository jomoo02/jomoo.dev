export default defineNuxtPlugin((nuxtApp) => {
    // nuxtApp.hook('page:finish', () =>{
    //     const route= useRoute();
    //     const routes=ref(route.path.split('/'));
    //     if(process.client) {     

    //         if (routes.value[1]=='projects'){
    //             document.querySelector("#projects").classList.add('link');
    //             document.querySelector("#note").classList.remove('link');

    //             document.querySelector("#projects_md").classList.add('link_md');
    //             document.querySelector("#note_md").classList.remove('link_md');
    //         }
    //         else if (routes.value[1]=='note'){
    //             document.querySelector("#note").classList.add('link');
    //             document.querySelector("#note_md").classList.add('link_md');
    //             document.querySelector("#projects_md").classList.remove('link_md');
    //             document.querySelector("#projects").classList.remove('link');
    //         }
    //     }
    // })
})