const SUBMITFORM_URL = process.env.REACT_APP_SUBMITFORM_URL;
  
export const submitForm = async({name, email, message}) => {
  try {
    const response = await fetch(SUBMITFORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message
      }),
    })
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al enviar');
    }

    return { success: true };
  } catch (error) {
    console.error('Error en sendForm:', error.message);
    return { success: false, error: error.message };
  }
}