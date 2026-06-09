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
    const resumeUrl = "assets/pdf/Suranjan-Achary-Resume-3YOE.pdf"; // Relative path
  
    // Open in a new tab
    const newTab = window.open(resumeUrl, "_blank");
    if (newTab) {
      newTab.opener = null;
    }
  
    // Force download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Suranjan-Achary-Resume-YOE.pdf"; // Set download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
   skillCategories = [
    {
      title: 'Backend',
      skills: 'Java 17, Spring Boot 3.x, Hibernate/JPA, REST APIs, Microservices'
    },
    {
      title: 'Security',
      skills: 'Spring Security, JWT, OAuth 2.0, RBAC, EULA Compliance'
    },
    {
      title: 'Frontend',
      skills: 'React 18, Angular 14, JavaScript (ES6+), TypeScript, HTML5, CSS3, IBM Carbon Design System'
    },
    {
      title: 'Databases',
      skills: 'MySQL, MongoDB, Redis'
    },
    {
      title: 'Messaging & Event Streaming',
      skills: 'Apache Kafka'
    },
    {
      title: 'Cloud',
      skills: 'Azure, AWS (EC2, S3)'
    },
    {
      title: 'DevOps',
      skills: 'Docker, GitHub Actions (CI/CD), Git, GitHub'
    },
    {
      title: 'Testing',
      skills: 'JUnit 5, Mockito, Jest, API Testing, Cross-Environment Validation'
    },
    {
      title: 'Key Skills',
      skills: 'System Design, Data Structures & Algorithms, Agile/Scrum'
    }
  ];

  projects = [
    {
      title: 'Software Engineer II',
      company: 'Techcanopy Software Labs',
      location: 'Bangalore, India',
      period: '06/2025 – Present',
      highlights: [
        'Spearheaded the architecture and delivery of enterprise Cyber Risk Quantification (CRQ) and third-party risk management modules leveraging Java 17, Spring Boot 3, React 18, and MongoDB, serving 5,000+ active users across mission-critical cybersecurity workflows.',
        'Engineered a robust JWT authentication, RBAC authorization, and EULA compliance framework, significantly strengthening platform security posture and eliminating manual governance overhead.',
        'Designed and delivered 20+ production-grade IBM Carbon UI components adopted enterprise-wide across multiple squads, accelerating feature delivery velocity while enforcing consistent UX standards.',
        'Orchestrated integration of 10+ REST APIs and upheld 99%+ automated test reliability via JUnit 5 and Mockito suites across dev, UAT, staging, and production environments.',
        'Drove end-to-end deployment, compliance auditing, and production operations for cybersecurity products spanning susceptibility analysis and vendor risk assessment domains.'
      ],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop',
      techStack: 'Java 17, Spring Boot 3, React 18, MongoDB, JWT, RBAC, IBM Carbon, JUnit 5, Mockito',
      link: ''
    },
    {
      title: 'Full-Stack Developer',
      company: 'Hostbooks Limited',
      location: 'Gurgaon, India',
      period: '02/2023 – 04/2025',
      highlights: [
        'Engineered core ERP modules in Java 17 + Spring Boot 3 powering finance, payroll, and compliance workflows for a 5,000+ user SaaS platform; drove a 25% reduction in page load time through API optimisation.',
        'Built a high-throughput RESTful API layer handling 500+ concurrent requests at sub-200 ms average latency, consumed by Angular 15 frontend and native mobile clients.',
        'Architected multi-layer JWT / RBAC security model integrated across backend and Angular frontend, hardening the application against OWASP Top 10 vulnerabilities.',
        'Delivered reusable IBM Carbon UI components and Angular directives adopted across 4 product teams, reducing repeated frontend code by ~40% and accelerating sprint velocity.'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop',
      techStack: 'Java 17, Spring Boot 3, Angular 15, JWT, RBAC, IBM Carbon, REST APIs',
      link: ''
    },
    {
      title: 'Flash-Go',
      company: 'Masai School — Full Stack Course',
      location: 'India',
      period: '2022',
      highlights: [
        'REST APIs developed for an Online Cab Booking Application handling Admin and user roles with fundamental CRUD operations and user validation at every step.',
        'Collaborative back-end project built by a team of 5 developers as part of the Masai full stack curriculum.'
      ],
      image: 'https://i.pinimg.com/736x/89/fd/8a/89fd8a433b5b78b1cb3d25d02a71fec5.jpg',
      techStack: 'Java, Spring Boot, Hibernate, MySQL, Postman',
      link: 'https://drive.google.com/file/d/19h0Pe99JLymg_q6NaTU-nsSiHLK6Kiu1/view?usp=share_link'
    },
    {
      title: 'Frazoo-Clone',
      company: 'Masai School — Full Stack Course',
      location: 'India',
      period: '2022',
      highlights: [
        'A website to buy fruits, vegetables, and kitchen staples built as a collaborative group project.',
        'Created the user login and signup flows with extensive use of JavaScript.'
      ],
      image: 'https://suranjan-achary-portfolio.netlify.app/frazoo.jpeg',
      techStack: 'JavaScript, HTML, CSS',
      link: 'https://fraazo-clone.netlify.app/'
    }
  ];
}
