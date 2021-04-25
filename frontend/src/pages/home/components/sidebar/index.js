import React from "react";
//icons
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
//components
import AeroButton from "../../../components/aeroButton/index";
//images
import msnLogo from "./assets/msn-logo.png";
import { Container } from "./styles";

const sidebar = () => {
    return (
        <Container>
            <AeroButton className="button">
                <img src={msnLogo} alt="" />
            </AeroButton>
            <AeroButton className="button">
                <a href="http://www.github.com/rmsaitam" target="_blank">
                    <AiFillGithub size="30" />
                </a>
            </AeroButton>
            <AeroButton className="button">
                <a href="http://www.instagram.com/reginaldomatias20" target="_blank">
                    <AiOutlineInstagram size="30" color="#E1306C" />
                </a>
            </AeroButton>
        </Container>
    );
};

export default sidebar;
