import axios from "axios";

let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;

class CheckItemsCalls {
  checkItem = async (url, id) => {
    try {
      const { data } = await axios.get(
        `${url}${id}/checkItems?key=${APIKey}&token=${APIToken}`
      );
      return data;
    } catch (error) {
      throw error;
    }
  };

  createNewCheckItem = async (url, name, id) => {
    try {
      const { data } = await axios.post(
        `${url}${id}/checkItems?name=${name}&key=${APIKey}&token=${APIToken}`
      );
      return data;
    } catch (error) {
      throw error;
    }
  };

  removeCheckItem = async (url, id, idCheckItem) => {
    try {
      await axios.delete(
        `${url}${id}/checkItems/${idCheckItem}?key=${APIKey}&token=${APIToken}`
      );
      return "Checkitem Deleted";
    } catch (error) {
      throw error;
    }
  };

  editCheckItem = async (url, state, cardId, checkItemId) => {
    try {
      const { data } = await axios.put(
        `${url}${cardId}/checkItem/${checkItemId}?key=${APIKey}&token=${APIToken}&state=${state}`
      );

      return data;
    } catch (error) {
      throw error;
    }
  };
}

export default CheckItemsCalls;
