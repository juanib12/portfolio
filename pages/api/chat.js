// API route para el chat
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    
    // Aquí puedes implementar la lógica del chat
    // Por ejemplo, llamar a una API externa o usar un modelo de IA
    
    // Ejemplo de respuesta
    const response = {
      message: "Este es un tip de ejemplo: Usa TypeScript para mejor desarrollo"
    };
    
    res.status(200).json(response);
  } catch (error) {
    console.error('Error en API chat:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}
