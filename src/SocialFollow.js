import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTelegram,
    faTwitter,
    faDiscord
} from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
    return (
        <div class="social-container">
            {/* <a href="https://www.youtube.com/c/jamesqquick"
                className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a> */}
            <a href="https://github.com/doma2k"
                className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://discord.com/users/doma2k#4006"
                className="discord social">
                <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
            <a href="https://t.me/domanodes"
                className="telegram social">
                <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
        </div>
        
    );
}