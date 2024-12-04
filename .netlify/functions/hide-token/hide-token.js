exports.handler = async function (event, context) {
  const value = process.env.LASTFM_API_KEY;
  // console.log(value)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `${value}` }),
  };MY_IMPORTANT_VARIABLE
};
