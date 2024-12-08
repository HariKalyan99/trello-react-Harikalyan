import axios from "axios";

let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;

class CheckListCalls {
    getAllCheckLists = async (url, id) => {
        try {
            const { data } = await axios.get(
                `${url}${id}/checklists?key=${APIKey}&token=${APIToken}`
              );
              return data
        } catch (error) {
            throw error;
        }
    }

    removeChecklist = async (url, id) => {
        try {
            await axios.delete(
                `${url}${id}?key=${APIKey}&token=${APIToken}`
              );
              return "Checklist Deleted"
        } catch (error) {
            throw error;
        }
    }
}


export default CheckListCalls;