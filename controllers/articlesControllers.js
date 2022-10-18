import { articlesServices } from "../services";
/**
 * End-point to register a articles
 *
 * @param {Request} request http request for articles registration
 * @param {Response} response http response
 * @returns {Promise<Response>} returns
 * 200 { token, refreshToken } as Data if articles was registered successfully
 * 422 { message } if articles already exists
 * 500 { message }
 *
 */
//list of all articles
async function getAllArticles(request, response) {
  try {
    const articles = await articlesServices.getAllArticles();
    return response.status(200).json({
     articles 
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return response.status(500).json({
      error: "Internal error retrieving articles!",
    });
  }
}
export { getAllArticles };
