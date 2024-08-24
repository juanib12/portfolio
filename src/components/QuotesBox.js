import { useEffect, useState, useRef } from "react"
import './QuotesBox.css';
import axios from 'axios';


const QuotesBox = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const sendMessage = async () => {
    setIsLoading(true)
    setMessages((prevMessages) => [
      { role: "user", content: "" },
    ]);

    try {
      const apiUrl = `${process.env.REACT_APP_URL_API}/chat`; // Ensure this matches your API endpoint for sending messages
      const requestBody = {
        message: "Di un tip para desarrolladores fullstack pero no lo repitas seguidamente y que no tenga mas de 30 caracteres, ahorrate el saludo y di directo el tip",
      };

      const { data } = await axios.post(apiUrl, requestBody);
      const botResponse = data;
      
      setMessages((prevMessages) => [
        { role: "bot", content: botResponse },
      ]);
      console.log(data, messages)
    } catch (error) {
      setMessages((prevMessages) => [
        {
          role: "bot",
          content: "Ocurrio un error, intentelo nuevamente.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const rechargeApi = () => {
    sendMessage()
  }  

  useEffect(() => {
      sendMessage()
  }, [])

  return (
    <ul className="quotes-container">
      <li>
        <label htmlFor='btn-bot' onMouseEnter={rechargeApi}>
          <i className='bx bxs-bot'></i>
          <article className="quotes-box">
            <div className="messages-container">
                {messages.map((message, index) => (
                <p key={index} className={`message ${message.role}`}>
                    {message.content}
                </p>
                ))}
                {/* Loading indicator */}
                {isLoading && <p className="loading">Pensando...</p>}
                <div ref={messagesEndRef} />
            </div>
          </article>
        </label>
      </li>
    </ul>
  )
}

export default QuotesBox