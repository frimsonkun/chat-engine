import { ChatEngine } from "react-chat-engine";

import { useState, useEffect } from "react";
import ChatFeed from "./components/ChatFeed";
import LogOutButton from "./components/LogOut";
import LoginForm from "./components/LoginForm";

import "./App.css";

const App = () => {
        const [isAuth, setIsAuth] = useState(localStorage.getItem("username"));
        if (!isAuth) return <LoginForm isAuth = { isAuth }
        setIsAuth = { setIsAuth }
        />;

        return ( <
            >
            <
            LogOutButton isAuth = { isAuth }
            setIsAuth = { setIsAuth }
            />{" "} <
            ChatEngine height = "100vh"
            projectID = "0c98ecf7-f2b9-4759-b3eb-e0f35ac45503"
            userName = { localStorage.getItem("username") }
            userSecret = { localStorage.getItem("password") }
            renderChatFeed = {
                (chatAppProps) => < ChatFeed {...chatAppProps }
                />} /
                >
                <
                />
            );
        };

        export default App;