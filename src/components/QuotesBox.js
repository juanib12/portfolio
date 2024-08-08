import { useEffect, useState, useRef } from "react"
import axios from 'axios';

const QuotesBox = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    
    useEffect(scrollToBottom, [messages]);

    const sendMessage = async () => {
        setIsLoading(true)
        const userMessage = input;
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: "user", content: userMessage },
        ]);
        setInput(""); // Clear input after sending
    
        try {
          const apiUrl = `http://localhost:3008/chat`; // Ensure this matches your API endpoint for sending messages
          const requestBody = {
            message: input,
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
    return (
      <div className="chat-container">
        <label htmlFor='btn-bot'>
          <i className='bx bxs-bot'></i>
        </label>
        <input type='radio' id='btn-bot' name='btn-bot'/>
        <article>
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
          <div className="input-container">
              <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              onKeyPress={(e) => e.key === "Enter" && sendMessage()} // Allows sending message with Enter key
              disabled={isLoading} // Disable input while loading
              />
              <button onClick={sendMessage} disabled={isLoading}>
              Send
              </button>
          </div>
        </article>
      </div>
    )
}

export default QuotesBox