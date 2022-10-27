import { influencersServices } from "../services";
/**
 * End-point to register a influencers
 *
 * @param {Request} request http request for influencers registration
 * @param {Response} response http response
 * @returns {Promise<Response>} returns
 * 200 { token, refreshToken } as Data if influencers was registered successfully
 * 422 { message } if influencers already exists
 * 500 { message }
 *
 */

//List of all influencers
async function getAllInfluencers(request, response, next) {
  

  try {
    const user = await influencersServices.getAllInfluencers();
    response.status(200).send({
      status: 200,
      response: user,
    });
  } catch (error) {
    response.status(500).send({
      status: 500,
      message: `Something wen't wrong`,
    });
  }
}
//Count of all influencers (Statistic Dashobard)
async function CountAllInfluencers(request, response, next) {
  try {
    const countInfluencers = await influencersServices.CountAllInfluencers();
    return response.status(200).json({
      countInfluencers ,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return response.status(500).json({
      error: "Internal error retrieving users!",
    });
  }
}

export { getAllInfluencers, CountAllInfluencers };
