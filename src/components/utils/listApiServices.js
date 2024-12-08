import axios from "axios";

let APIKey = import.meta.env.VITE_APIKEY;
let APIToken = import.meta.env.VITE_APITOKEN;

class ListCalls {
  getAllLists = async (url, boardId) => {
    try {
      const { data } = await axios.get(
        `${url}${boardId}/lists?key=${APIKey}&token=${APIToken}`
      );
      return data;
    } catch (error) {
      throw error;
    }
  };

  getCards = async (url, listId, signal) => {
    try {
        const { data } = await axios.get(
            `${url}${listId}/cards?key=${APIKey}&token=${APIToken}`,
            {
              signal,
            }
          );
          return data
    } catch (error) {
        throw error;
    }
}

  createNewList = async (url, name, id) => {
    try {
      const data = await axios.post(
        `${url}?name=${name}&idBoard=${id}&key=${APIKey}&token=${APIToken}`
      );
      return data;
    } catch (error) {
      throw error;
    }
  };

  removeAllCards = async (url, id) => {
    try {
      const data = await axios.post(
        `${url}${id}/archiveAllCards?key=${APIKey}&token=${APIToken}`
      );
      return data;
    } catch (error) {
      throw error;
    }
  };

  removeList = async (url, id) => {
    try {
      const data = await axios.put(
        `${url}${id}/closed?key=${APIKey}&token=${APIToken}&value=true`
      );
      return data;
    } catch (error) {
      throw error;
    }
  };
}

export default ListCalls;
