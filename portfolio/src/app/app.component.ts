import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSidebarOpen = false; // Sidebar state

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  downloadResume() {
    const resumeUrl = "assets/pdf/Suranjan_Achary_Resume.pdf"; // Relative path
  
    // Open in a new tab
    const newTab = window.open(resumeUrl, "_blank");
    if (newTab) {
      newTab.opener = null;
    }
  
    // Force download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Suranjan_Achary_Resume.pdf"; // Set download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  
  projects = [
    {
      title: 'Flash-Go',
      summary: 'REST APIs developed for an Online Cab Booking Application.This API handles an Admin, user and performs all the fundamental CRUD operations of any Online Cab Booking Application platform with user validation at every step. This project is developed by team of 5 Back-end Developers',
      image: 'https://i.pinimg.com/736x/89/fd/8a/89fd8a433b5b78b1cb3d25d02a71fec5.jpg',
      techStack: 'Java, Spring Boot, Hibernate, MySQL, Postman',
      link: 'https://drive.google.com/file/d/19h0Pe99JLymg_q6NaTU-nsSiHLK6Kiu1/view?usp=share_link'
    },
    {
      title: 'Frazoo-Clone',
      summary: 'A website to buy all types of fruits, vegetables & kitchen staples It was a collaborative group project where, I have created the user login and signup part where the JavaScript was used extensively',
      image: 'https://suranjan-achary-portfolio.netlify.app/frazoo.jpeg',
      techStack: 'java Script, HTML, CSS',
      link: 'https://fraazo-clone.netlify.app/'
    },
    {
      title: 'Best Buy- Clone',
      summary: 'An E-commerce website to buy all types of , Electronics, kitchen and House holds. It was a collaborative group project where, I have created the data base manually and created the Api out of it and created the product listing and product detail part where the JavaScript was used extensively',
      image: 'https://suranjan-achary-portfolio.netlify.app/bestbuy.jpeg',
      techStack: 'java Script, HTML, CSS',
      link: 'https://eloquent-cactus-07c1d1.netlify.app/'
    }
  ];
}
