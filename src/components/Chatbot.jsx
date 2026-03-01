import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import { getGeminiResponse } from '../utils/gemini';
import ReactMarkdown from 'react-markdown';

const Chatbot = ({ isOpen, onClose, onOpen }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm the Flovepal Assistant. Ask me about our organic farming or IoT solutions!", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            // Filter out error messages or system notifications if necessary, 
            // and map to the format expected by our utility (though we handle mapping in utility, passing the raw state is easier if we clean it first)
            // We strip the very first message if it's the welcome message to avoid confusing the "user" role logic, 
            // but actually Gemini handles 'model' first just fine usually. 
            // To be safe, let's just pass the real conversation history.
            // We exclude the current user message being sent because it's passed as the first argument.
            const history = messages.filter(m => m.id !== 1 && m.text !== "Sorry, I'm having trouble connecting right now. Please check your API key or try again later.");
            
            const botResponseText = await getGeminiResponse(input, history);
            const botMsg = { id: Date.now() + 1, text: botResponseText, sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
        } catch (error) {
            const errorMsg = { id: Date.now() + 1, text: "Sorry, I'm having trouble connecting right now. Please check your API key or try again later.", sender: 'bot' };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Desktop Floating Trigger */}
            <button
                className="chatbot-trigger d-none d-lg-flex"
                onClick={onOpen}
                aria-label="Open Chat"
            >
                <FiMessageSquare />
            </button>

            {/* Chat Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chatbot-modal"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <div className="chat-header">
                            <span className="fw-bold"><FiMessageSquare className="me-2" /> Flovepal Support</span>
                            <button className="btn btn-sm text-white" onClick={onClose}><FiX size={20} /></button>
                        </div>

                        <div className="chat-body">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`chat-msg ${msg.sender}`}>
                                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <form className="chat-input-area" onSubmit={handleSend}>
                            <input
                                type="text"
                                className="form-control me-2"
                                placeholder="Ask something..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button type="submit" className="btn btn-primary-custom" style={{ padding: '8px 12px' }}>
                                <FiSend />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
