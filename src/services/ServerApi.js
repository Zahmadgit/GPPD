import axios from "axios";

export const getData = async () => {
    try {
      const response = await fetch(
        `https://fine-lilac-inch.glitch.me/getinfo`
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
  
      return { success: true, data };
    } catch (e) {
      return { success: false, data: null };
    }
  };



  export const postData = async (data) => {
    try {
        const response = await fetch('https://fine-lilac-inch.glitch.me/postinfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            //Ensure the data is wrapped in { data: ... }
            body: JSON.stringify({data}), 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        return { success: true, data: responseData };
    } catch (error) {
        console.error('Error in postData:', error); // Log the error
        return { success: false, data: null };
    }
};



export const putData = async ({ id, newData }) => {
  try {
      const response = await fetch('https://fine-lilac-inch.glitch.me/putinfo', {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id, newData }),
      });

      console.log('Response status:', response.status);
      
      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return { success: true, data: responseData };
  } catch (error) {
      console.error('Error in putData:', error);
      return { success: false, data: null };
  }
};



export const deleteData = async (id) => {
  try {
    const response = await fetch(
      `https://fine-lilac-inch.glitch.me/deleteinfo?id=${id}`,
      {
        method: 'DELETE',
      }
    );

    const responseData = await response.json();
    console.log('Response status:', response.status);
    console.log('Response data:', responseData);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { success: true, data: responseData };
  } catch (error) {
    console.error('Error in deleteData:', error);
    return { success: false, data: null };
  }
};