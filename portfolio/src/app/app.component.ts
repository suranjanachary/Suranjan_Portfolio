import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './theme.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkMode: boolean = false;
  contactForm!: FormGroup;

  constructor(private themeService: ThemeService, private fb: FormBuilder) {
    this.isDarkMode = this.themeService.isDarkMode;

    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({ 
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      alert('Your message has been sent successfully!');
      this.contactForm.reset();
    }
  }

  isSidebarOpen = false;

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.isDarkMode;
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  downloadResume() {
    const resumeUrl = "assets/pdf/Suranjan-Achary-Resume.pdf"; // Relative path
  
    // Open in a new tab
    const newTab = window.open(resumeUrl, "_blank");
    if (newTab) {
      newTab.opener = null;
    }
  
    // Force download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Suranjan-Achary-Resume.pdf"; // Set download filename
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
