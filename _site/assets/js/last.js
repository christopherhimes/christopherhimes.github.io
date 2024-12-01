import process from 'process'
// export default async (request, context) => {
//     const api_key = Netlify.env.get("LASTFM_API_KEY");

//     return new Response(`Value of LASTFM_API_KEY for ${context.site.name} is ${value}.`, {
//         headers: { "content-type": "text/html" },
//     });
// };
var api_key = process.env.LASTFM_API_KEY;
console.log(api_key);
const MY_USERNAME = 'cshmes';