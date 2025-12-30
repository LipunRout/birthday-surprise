import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer className="footer text-center py-3">
      {/* 💬 Chat button only on Dec31 */}
      {location.pathname === "/dec31" && (
       <div className="footer-chat">
       <div className="chat-card">
         <button
           className="chat-btn"
           onClick={() => navigate("/contact")}
         >
           <span className="chat-text">
             Tap this after all the wishes finish
           </span>
           <span className="chat-emoji">💬</span>
         </button>
       </div>
     </div>
     
      )}

      <div className="footer-text">
        Happy Birthday Not Youuu ❤️  
        <br />
        Made with patience and care by @lipunnnn ✨
      </div>
    </footer>
  );
}
