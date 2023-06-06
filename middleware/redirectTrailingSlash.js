
/* 
 * Redirect trailing slash paths to its variant without trailing slash 
 * example.example/ -> example.example
*/
export default defineNuxtRouteMiddleware((to, from) => {

  console.log('to.path', to.path)
  if (to.path !== '/' && to.path.endsWith('/')) {
    const { path, query, hash } = to;
    const nextPath = path.replace(/\/+$/, '') || '/';
    const nextRoute = { path: nextPath, query, hash };
    return navigateTo(nextRoute, { redirectCode: 301 });
  }

});