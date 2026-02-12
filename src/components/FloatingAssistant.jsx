import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Volume2,
  VolumeX,
  Minimize2,
  Maximize2,
  Mic,
  MicOff,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Route mapping for School Bells pages
const ROUTE_MAP = {
  // Main pages
  home: "/",
  homepage: "/",
  main: "/",

  // Modules
  modules: "/modules",
  "all modules": "/modules",
  features: "/modules",

  "aurora effect": "/",
};

const PAGE_TITLES = {
  "/": "Home",
  "/modules": "All Modules",
};

const NAVIGATION_MENU = {
  "Main Pages": [
    { label: "Home", route: "/" },
    { label: "All Modules", route: "/modules" },
  ],
};

function FloatingAssistant() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // Initial State with Demo Options
  const [messages, setMessages] = useState([
    {
      id: "1",
      text: "Hi! I'm your My School Bells assistant. I can help you navigate around the platform. What would you like to explore?",
      sender: "assistant",
      timestamp: new Date(),
      options: [
        { label: "View All Modules", action: "navigate:/modules" },
        { label: "Back to Home", action: "navigate:/" },
        { label: "Show Menu", action: "show_main_menu" },
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechEnabled, setSpeechEnabled] = useState(true);
  const messagesEndRef = useRef(null);
  const synthRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      synthRef.current = window.speechSynthesis;

      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = "en-US";

        recognitionRef.current.onresult = (event) => {
          let transcript = event.results[0][0].transcript;
          transcript = transcript.replace(/[.,!?]+$/g, "").trim();
          setInputValue(transcript);
          setIsListening(false);
          handleSendMessage(transcript);
        };

        recognitionRef.current.onerror = (event) => {
          console.error("Speech recognition error:", event.error);
          setIsListening(false);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }
  }, []);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen, isMinimized]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const speak = (text) => {
    if (!speechEnabled || !synthRef.current) return;
    synthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    synthRef.current.speak(utterance);
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (error) {
        console.error("Error starting recognition:", error);
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const getLocalResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    if (/\b(hello|hi|hey)\b/.test(lowerMessage)) {
      return {
        text: "Hello! I'm the My School Bells assistant. How can I help you navigate our platform today?",
        options: [{ label: "Show Menu", action: "show_main_menu" }],
      };
    }
    if (/\b(thank|thanks)\b/.test(lowerMessage)) {
      return {
        text: "You're very welcome! Is there anywhere else I can take you?",
      };
    }
    if (/\b(bye|goodbye)\b/.test(lowerMessage)) {
      return {
        text: "Goodbye! Feel free to click me again if you need more help navigating My School Bells.",
      };
    }
    if (/\b(module|feature)\b/.test(lowerMessage)) {
      return {
        text: "Would you like to see all our modules and features?",
        options: [{ label: "View All Modules", action: "navigate:/modules" }],
      };
    }
    return {
      text: "I'm here to help you navigate! You can ask for 'Home', 'Modules', or use the menu below.",
      options: [{ label: "Explore Menu", action: "show_main_menu" }],
    };
  };

  const handleOptionClick = (option) => {
    if (!option.action) return;

    const [type, payload] = option.action.split(":");

    // Add user selection as a message
    const userMsg = {
      id: `user-${Date.now()}`,
      text: option.label,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);

    if (type === "navigate") {
      handleNavigation(payload);
    } else if (type === "menu") {
      showSubMenu(payload);
    } else if (option.action === "show_main_menu") {
      showMainMenu();
    }
  };

  const handleNavigation = async (route) => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    const displayPath =
      PAGE_TITLES[route] || route.split("/").pop().replace(/-/g, " ");
    const responseText = `Sure! Taking you to ${displayPath} now.`;

    const assistantMsg = {
      id: `assistant-${Date.now()}`,
      text: responseText,
      sender: "assistant",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, assistantMsg]);
    setIsTyping(false);
    if (speechEnabled) speak(responseText);

    setTimeout(() => {
      navigate(route);
      if (window.innerWidth < 768) setIsOpen(false);
    }, 1000);
  };

  const showMainMenu = async () => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 600));

    const categories = Object.keys(NAVIGATION_MENU);
    const options = categories.map((cat) => ({
      label: cat,
      action: `menu:${cat}`,
    }));

    const assistantMsg = {
      id: `assistant-${Date.now()}`,
      text: "Please select a category to see available pages:",
      sender: "assistant",
      timestamp: new Date(),
      options: options,
    };
    setMessages((prev) => [...prev, assistantMsg]);
    setIsTyping(false);
  };

  const showSubMenu = async (category) => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 600));

    const items = NAVIGATION_MENU[category] || [];
    const options = items.map((item) => ({
      label: item.label,
      action: `navigate:${item.route}`,
    }));
    options.push({ label: "⬅ Back to Menu", action: "show_main_menu" });

    const assistantMsg = {
      id: `assistant-${Date.now()}`,
      text: `Here are the pages under ${category}:`,
      sender: "assistant",
      timestamp: new Date(),
      options: options,
    };
    setMessages((prev) => [...prev, assistantMsg]);
    setIsTyping(false);
  };

  const handleSendMessage = async (text) => {
    const messageText = (typeof text === "string" ? text : inputValue).trim();
    if (!messageText) return;

    if (typeof text !== "string") setInputValue("");

    const userMsg = {
      id: `user-${Date.now()}`,
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    const lowerText = messageText.toLowerCase();

    const navKeywords = [
      "go to",
      "goto",
      "open",
      "navigate to",
      "take me to",
      "visit",
      "show me",
      "where is",
    ];
    const foundKeyword = navKeywords.find((kw) => lowerText.includes(kw));

    const negativeKeywords = [
      "don't",
      "dont",
      "do not",
      "never",
      "stop",
      "wont",
      "won't",
      "not",
      "cancel",
    ];
    const isNegated = negativeKeywords.some((kw) => lowerText.includes(kw));

    const menuCommands = ["menu", "options", "help", "list", "show me around"];
    const isMenuRequest = menuCommands.some((cmd) => lowerText.includes(cmd));

    let foundRoute = null;

    if (foundKeyword && !isNegated) {
      const searchPart = lowerText.split(foundKeyword).pop().trim();
      if (searchPart) {
        if (ROUTE_MAP[searchPart]) {
          foundRoute = ROUTE_MAP[searchPart];
        } else {
          for (const [key, route] of Object.entries(ROUTE_MAP)) {
            if (searchPart.includes(key) || key.includes(searchPart)) {
              foundRoute = route;
              break;
            }
          }
        }
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 800));

    if (foundRoute) {
      handleNavigation(foundRoute);
    } else if (isMenuRequest && !isNegated) {
      await showMainMenu();
    } else {
      let responseText;
      let options;

      if (isNegated) {
        responseText =
          "Understood. I will NOT navigate. Is there anything else I can help you find?";
        options = [{ label: "Explore Menu", action: "show_main_menu" }];
      } else {
        const localResponse = getLocalResponse(messageText);
        responseText = localResponse.text;
        options = localResponse.options;
      }

      const assistantMsg = {
        id: `assistant-${Date.now()}`,
        text: responseText,
        sender: "assistant",
        timestamp: new Date(),
        options: options,
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
      if (speechEnabled) speak(responseText);
    }
  };

  return (
    <>
      <motion.div
        className={`fixed bottom-6 right-6 z-50 ${isOpen ? "hidden md:block" : "block"}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.div className="pointer-events-auto">
          <motion.div
            className="absolute -top-12 right-0 bg-white dark:bg-gray-800 px-3 py-1.5 rounded-xl shadow-lg border border-blue-100 dark:border-gray-700 text-[11px] font-semibold text-blue-600 dark:text-blue-400 whitespace-nowrap mb-2 hidden md:block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, 10] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 10 }}
          >
            Need help navigating? Click me! ✨
          </motion.div>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 shadow-[0_8px_32px_rgba(37,99,235,0.5)] flex items-center justify-center overflow-hidden border-2 border-white/40 backdrop-blur-md relative group"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -8, 0],
              boxShadow: [
                "0 8px 32px rgba(37,99,235,0.4)",
                "0 12px 48px rgba(37,99,235,0.6)",
                "0 8px 32px rgba(37,99,235,0.4)",
              ],
            }}
            transition={{
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            {/* Placeholder icon - replace with your chatbot image */}
            <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
              🤖
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent group-hover:opacity-0 transition-opacity" />
          </motion.button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed z-[9999] bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl overflow-hidden flex flex-col shadow-2xl border border-white/20 dark:border-gray-800/50 
                        inset-0 w-full h-[100dvh] rounded-none 
                        md:z-50 md:top-auto md:left-auto md:bottom-10 md:right-20 md:w-96 md:h-[600px] md:rounded-2xl
                        ${isMinimized ? "hidden md:flex md:h-16" : ""}`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 p-5 flex items-center justify-between text-white shadow-lg shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/40 bg-white/10 backdrop-blur-sm shadow-inner flex items-center justify-center text-xl">
                  🤖
                </div>
                <div className="leading-tight">
                  <h3 className="font-bold text-sm tracking-tight text-white m-0">
                    School Bells AI
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                    <span className="text-[10px] text-blue-100 font-semibold uppercase tracking-wider">
                      Ready to Help
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setSpeechEnabled(!speechEnabled)}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors text-white"
                  title={speechEnabled ? "Mute" : "Unmute"}
                >
                  {speechEnabled ? (
                    <Volume2 size={18} />
                  ) : (
                    <VolumeX size={18} />
                  )}
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="hidden md:block p-1.5 hover:bg-white/20 rounded-lg transition-colors text-white"
                  title={isMinimized ? "Maximize" : "Minimize"}
                >
                  {isMinimized ? (
                    <Maximize2 size={18} />
                  ) : (
                    <Minimize2 size={18} />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/20 rounded-lg transition-colors ml-1 text-white"
                  title="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-gray-50/80 dark:bg-gray-800/80 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700">
                  {messages.map((m) => (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[85%] p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-sm transition-all ${
                          m.sender === "user"
                            ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-tr-none"
                            : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700 rounded-tl-none"
                        }`}
                      >
                        {m.text}
                      </div>

                      {/* Options Chips */}
                      {m.options && (
                        <div className="flex flex-wrap gap-2 mt-3 max-w-full">
                          {m.options.map((opt, idx) => (
                            <motion.button
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + idx * 0.08 }}
                              onClick={() => handleOptionClick(opt)}
                              className="px-3.5 py-2 bg-white dark:bg-gray-750 border border-blue-100 dark:border-gray-700 rounded-xl text-xs font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-300 transition-all shadow-sm flex items-center gap-1.5 active:scale-95 group"
                            >
                              {opt.label}
                              <ArrowRight
                                size={12}
                                className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                              />
                            </motion.button>
                          ))}
                        </div>
                      )}
                      <span className="text-[9px] text-gray-400 dark:text-gray-500 mt-1 px-1">
                        {new Date(m.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-1.5 items-center p-3 bg-white dark:bg-gray-800 w-fit rounded-2xl border border-gray-100 dark:border-gray-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" />
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 flex gap-2 items-center shrink-0">
                  <div className="flex-1 relative group">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                      placeholder="Where would you like to go?"
                      className="w-full bg-gray-100 dark:bg-gray-800/80 border-2 border-transparent focus:border-blue-500/50 focus:bg-white dark:focus:bg-gray-800 rounded-2xl px-4 py-3 text-sm transition-all outline-none pr-12 text-gray-800 dark:text-white placeholder:text-gray-400"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity">
                      <div className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-[8px] font-bold text-gray-500">
                        ENTER
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={isListening ? stopListening : startListening}
                      className={`p-3 rounded-2xl transition-all ${
                        isListening
                          ? "bg-red-500 text-white shadow-lg shadow-red-500/40 animate-pulse"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-750"
                      }`}
                      title={isListening ? "Stop Listening" : "Voice Search"}
                    >
                      {isListening ? <MicOff size={20} /> : <Mic size={20} />}
                    </button>
                    <button
                      onClick={() => handleSendMessage()}
                      disabled={!inputValue.trim()}
                      className="p-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-700 text-white rounded-2xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 active:scale-95"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default FloatingAssistant;
