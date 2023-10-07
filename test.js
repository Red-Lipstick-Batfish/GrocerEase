// const playerController = {
//     getPlayer: async (req, res, next) => {
//       try {
//     const profileName = req.body.name;
//              const URL = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
  
//         // API fetch url with profile name
//                 let APICallString = URL + profileName + "?api_key=" + API_Key;
  
//                      let response = await fetch(APICallString);
//                             let fetchData = await response.json();
//              res.locals.profile = fetchData;
//         res.locals.summonerID = fetchData.id;
  
//         return next();
//       } catch (err) {
//         return next({
//           log: "Express error handler caught error in playerController.getPlayer",
//           status: 400,
//           message: { err: "An error occurred" },
//         });
//       }
//     }
// }