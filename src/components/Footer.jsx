// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyle";

const Footer = () => {
	return (
		<Box>
			<h3
				style={{
					color: "green",
					textAlign: "center",
					marginTop: "-50px",
				}}
			>
				Iron Man Project
			</h3>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">
							Aim
						</FooterLink>
						<FooterLink href="#">
							Vision
						</FooterLink>
						<FooterLink href="#">
							Testimonials
						</FooterLink>
					</Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="#">
							Writing
						</FooterLink>
						<FooterLink href="#">
							Internships
						</FooterLink>
						<FooterLink href="#">
							Coding
						</FooterLink>
						<FooterLink href="#">
							Teaching
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">
							Uttar Pradesh
						</FooterLink>
						<FooterLink href="#">
							Ahemdabad
						</FooterLink>
						<FooterLink href="#">
							Indore
						</FooterLink>
						<FooterLink href="#">
							Mumbai
						</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="https://www.facebook.com/pakorn.ashakiri/">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="https://www.instagram.com/9_you_yang/?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr&fbclid=IwAR1kfOfX1UgVo9iUy2isXF9oEy6q2nqYg_2GcuspxTPNOwhRXKcrGRcUmvs">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="https://www.youtube.com/channel/UCx4bLE7kG2iyVg7hUDHmkgA">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
