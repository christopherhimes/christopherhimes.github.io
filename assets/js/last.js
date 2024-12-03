// import process from './process'
require('dotenv').config();
console.log(process.env.LASTFM_API_KEY)
// export default async (request, context) => {
//     const api_key = Netlify.env.get("LASTFM_API_KEY");
//     console.log(api_key)
//     console.log("hello")
//     return new Response(`Value of LASTFM_API_KEY for ${context.site.name} is ${value}.`, {
//         headers: { "content-type": "text/html" },
//     });
// };

// export async function handler (event, context) {
//     const value = process.env.LASTFM_API_KEY;
  
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: `Value of MY_IMPORTANT_VARIABLE is ${value}.` }),
//     };
//   }
  
// var api_key = import.meta.env.LASTFM_API_KEY;
// console.log(api_key);
// const MY_USERNAME = 'cshmes';

const handler = async (event) => {
    console.log("not here either")
    try {
      const api_key = process.env.LASTFM_API_KEY;
      console.log("help me")
      return {
        statusCode: 200,
        body: JSON.stringify({ message: `Hello ${api_key}` }),
      }
    } catch (error) {
        console.log("help")
      return { statusCode: 500, body: error.toString() }
    }
  }

// console.log(error)
  export default { handler }