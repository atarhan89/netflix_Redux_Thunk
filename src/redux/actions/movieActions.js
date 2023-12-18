import axios from "axios";
import { options } from "../../costants/costants";
import { actionTypes } from "../actionTypes";

  axios.defaults.baseURL="https://api.themoviedb.org/3"

//populer fılmlerı al ve store a aktarır

export const getPopular=()=>(dispatch)=>{
axios.get("/movie/popular",options)
.then((res)=>dispatch({type:actionTypes.SET_MOVIES,payload:res.data.results}))
.catch((er)=>dispatch({type:actionTypes.SET_MOVIES_ERROR}));


}


//genres al store a aktar
  export const getGenres=()=>(dispatch)=>{


    axios.get("/genre/movie/list?language=en",options)
    //apiden olumlu cevap gelırse türleri store a aktar.

    .then((res)=>dispatch({type: actionTypes.SET_GENRES,payload:res.data}))
    // olumsuz gelırse store u bılgılendır
    .catch(()=>dispatch({type: actionTypes.SET_GENRES_ERROR}))
  }