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
      ...prevMessages,
      { role: "user", content: "" },
    ]);

    try {
      const apiUrl = `${process.env.URLAPI}/chat`; // Ensure this matches your API endpoint for sending messages
      const requestBody = {
        message: "Di una frase que sirva como tip para desarrolladores fullstack, ahorrate el saludo y di directo la frase",
      };

      const { data } = await axios.post(apiUrl, requestBody);
      console.log(data);

      // Extracting the bot's response from the nested structure
      const botResponse = data;

      // Assuming 'data' contains the bot's response in a manner you expect
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "bot", content: botResponse },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      // Optionally handle the error visually in the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "bot",
          content: "Sorry, there was an error processing your message.",
        },
      ]);
    } finally {
      setIsLoading(false); // End loading regardless of outcome
    }
  };

  useEffect(() => {
    // setInterval(() => {
      const url_api = process.env.URL_API;
      console.log(url_api)
      sendMessage()
    // }, 10000);
  }, [])

  return (
    <div className="quotes-container">
      <label htmlFor='btn-bot'>
        <i className='bx bxs-bot'></i>
      </label>
      <input type='checkbox' id='btn-bot' name='btn-bot'/>
      <article className="quotes-box">
        <div className="messages-container">
            {messages.map((message, index) => (
            <p key={index} className={`message ${message.role}`}>
                {message.content}
            </p>
            ))}
            {/* Loading indicator */}
            {isLoading && <p className="loading">Sending...</p>}
            <div ref={messagesEndRef} />
        </div>
      </article>
    </div>
  )
}

export default QuotesBox