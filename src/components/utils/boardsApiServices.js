import axios from "axios";

let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;

class BoardCalls {
    getAllBoards = async (url, signal) => {
        try {
            const { data } = await axios.get(
                `${url}?key=${APIKey}&token=${APIToken}`,
                {
                  signal,
                }
              );
              return data
        } catch (error) {
            throw error;
        }
    }

    createNewBoard = async (url, name) => {
        try {
            const { data } = await axios.post(
                `${url}?name=${name}&key=${APIKey}&token=${APIToken}`
              );
              return data
        } catch (error) {
            throw error;
        }
    }


    removeBoard = async (url, id) => {
        try {
            await axios.delete(
                `${url}${id}?key=${APIKey}&token=${APIToken}`
              );
              return "Board Deleted"
        } catch (error) {
            throw error;
        }
    }
}


export default BoardCalls;