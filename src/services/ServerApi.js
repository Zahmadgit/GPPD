import axios from "axios";

export const getData = async () => {
    try {
      const response = await fetch(
        `https://fine-lilac-inch.glitch.me/getinfo`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Parse the JSON data from the response
      const data = await response.json();
  
      return { success: true, data };
    } catch (e) {
      return { success: false, data: null };
    }
  };


  export const getDataDummy = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Parse the JSON data from the response
      const data = await response.json();
  
      return { success: true, data };
    } catch (e) {
      return { success: false, data: null };
    }
  };



export const postData = async () => {
    try {
      const response = await fetch(
          `https://fine-lilac-inch.glitch.me/postinfo`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } 
  
      // Parse the JSON data from the response
      const data = await response.json();
  
      return { success: true, data };
    } catch (e) {
      return { success: false, data: null };
    }
  };



export const putData = async () => {
    try {
      const response = await fetch(
          `https://fine-lilac-inch.glitch.me/putinfo`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } 
  
      // Parse the JSON data from the response
      const data = await response.json();
  
      return { success: true, data };
    } catch (e) {
      return { success: false, data: null };
    }
  };



export const deleteData = async (id) => {
    try {
      const response = await fetch(
          `https://fine-lilac-inch.glitch.me/deleteinfo?id=${id}`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } 
  
      // Parse the JSON data from the response
      const data = await response.json();
  
      return { success: true, data };
    } catch (e) {
      return { success: false, data: null };
    }
  };