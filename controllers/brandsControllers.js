import { brandsServices } from "../services";
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

//list of all brands
async function getAllInbrands(request, response, next) {
  
  try {
    const brands =  await brandsServices.getAllInbrands();
    response.status(200).send({
      status: 200,
      response: brands,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: `Something wen't wrong`,
    });
  }
}

export { getAllInbrands };
