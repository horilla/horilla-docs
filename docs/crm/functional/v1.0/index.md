# **CRM Documentation**

## **What is Horilla CRM?**

Horilla CRM is a comprehensive, open-source Customer Relationship Management solution engineered to unify sales, marketing, customer data management, scheduling, analytics, automation, and system administration into one cohesive platform. Designed with scalability, flexibility, and usability in mind, Horilla CRM empowers businesses to efficiently manage the entire customer lifecycle — from lead generation and campaign execution to deal closure, forecasting, and beyond.

By connecting every customer touchpoint — from initial engagement and campaigns to sales opportunities, activities, and analytics — Horilla CRM ensures complete visibility across your organization's interactions. Its intuitive design, configurable structure, real-time capabilities, and robust reporting tools make it a powerful system for enhancing productivity, improving collaboration, and driving informed decision-making.

### **Integrated Platform Foundation**

At its core, Horilla CRM operates as a fully integrated workspace that unifies all customer-facing operations. Sales management, marketing campaigns, customer data, scheduling, analytics, automation, and administrative controls are brought together into a single cohesive system — eliminating data silos and ensuring seamless information flow across all business functions. Real-time notifications via WebSockets and background task processing via Celery keep the platform responsive and up to date without manual intervention.

### **Comprehensive Modules**

Horilla CRM is organized into purpose-built modules that together form a complete CRM suite.

#### **Sales**

Manage the complete sales lifecycle with modules for Leads, Campaigns, Opportunities, and Forecast.

* **Leads** — Capture, qualify, score, and nurture potential customers. Includes a lead scoring engine, Web-to-Lead public forms, Mail-to-Lead email automation, customizable pipeline stages, and full conversion to accounts, contacts, and opportunities.  
* **Campaigns** — Plan, execute, and track multi-channel marketing campaigns. Monitor campaign performance, lead attribution, conversion rates, and ROI in real time.  
* **Opportunities** — Manage deals through a configurable sales pipeline. Track stage probability, big deal alerts, split revenue, opportunity teams, and forecasting alignment.  
* **Forecast** — Project revenue against targets with configurable forecast types and periods. Monitor sales performance and accuracy across teams.

#### **People**

Centralize and manage all organizational relationships with dedicated modules for Accounts and Contacts.

* **Accounts** — Maintain detailed company and organization profiles, account hierarchies, linked contacts, and interaction history.  
* **Contacts** — Manage individual contact profiles with full relationship tracking, activity history, and association to accounts and opportunities.

#### **Schedule**

Manage all time-based activities with Calendar and Activities modules.

* **Calendar** — Schedule and visualize activities across Month, Week, Day, and Year views with color-coded activity types. Includes Google Calendar two-way sync with real-time push notifications.  
* **Activities** — Create and track Tasks, Events, Meetings, and Calls linked to any CRM record. Manage unavailability and monitor progress through list and Kanban layouts.

#### **Analytics**

Transform data into actionable insights with Reports and Dashboards.

* **Reports** — Build customizable data reports with tables, pivot views, and charts. Schedule and export reports in CSV, Excel, PDF, and PNG formats.  
* **Dashboards** — Design personalized visual dashboards with KPI cards, ECharts-based charts, and real-time metrics for comprehensive business intelligence.

#### **Settings**

Configure system-wide parameters from a centralized administrative hub.

* **General Settings** — Company information, branches, departments, users, and groups.  
* **Mail Settings** — Incoming and outgoing mail server configuration, mail templates, and automation rules.  
* **Base Settings** — Pipeline stage management (Lead Stages, Opportunity Stages), scoring rules, relationship roles, recycle bin, and data import/export controls.  
* **Integrations** — Google Calendar integration toggle, Web-to-Lead form builder, and Mail-to-Lead email account configuration.

#### **My Settings**

Personalize each user's individual CRM experience.

* User profile, regional formatting, and localization preferences.  
* Login history and session transparency.  
* Opportunity team management.  
* Keyboard shortcut configuration.

### **Key Capabilities**

#### **Flexible Visualization**

Every major module supports multiple view modes to match different work styles:

* **List View** — Tabular data with sorting, filtering, and column customization.  
* **Kanban View** — Visual pipeline management with drag-and-drop stage updates.  
* **Card View** — Compact card layout for a quick overview of records.  
* **Group By View** — Segment records by any field for comparative analysis.  
* **Chart View** — ECharts-based visualizations for trend and distribution analysis.  
* **Split View** — Side-by-side list and detail panel for fast review and editing.  
* **Timeline View** — Chronological view of records based on dates and activity.

#### **Advanced Filtering and Customization**

* Customizable filters with multiple conditions and saved filter sets.  
* Column personalization and field reordering.  
* Recently Viewed, Recently Created, and Recently Modified record tracking.

#### **Automation and Integration**

* **Workflow Automations** — Trigger email notifications or in-app alerts on record create, update, delete, or on a schedule, with AND/OR condition logic.  
* **Sales Cadences** — Multi-step automated follow-up sequences for lead nurturing.  
* **Google Calendar Sync** — Bidirectional real-time sync with push notification delivery.  
* **Mail-to-Lead** — Automatic lead creation from IMAP and Microsoft Outlook inboxes.  
* **Web-to-Lead** — Embeddable public lead capture forms for external websites.

#### **Robust Data Management**

* Bulk operations: Update, Delete, and Export across all modules.  
* Multi-format export: CSV, Excel, PDF, PNG.  
* Import tools with field mapping for bulk data entry.  
* Recycle bin with record restoration.  
* Complete audit trails and change history on every record.  
* Duplicate detection and record merging.

#### **Real-Time Collaboration**

* WebSocket-powered live notifications delivered instantly in-app.  
* Real-time dashboard metric updates.  
* Activity streaming across linked records.

#### **Access Control and Security**

* Four-layer permission model: Model-level, Field-level, Row-level (owner-based), and Role hierarchy.  
* Company-based multi-tenancy — each company's data is fully isolated.  
* User groups with defined access levels.  
* Opportunity team access control (Read/Write or Read-Only).  
* Login history monitoring and session tracking.

### **Tailored Adaptability**

Horilla CRM's modular architecture and configurable structure make it suitable across diverse industries and business models — from small teams managing local relationships to enterprises coordinating complex multi-branch sales operations. Its open-source foundation ensures it can be extended and tailored to meet specific organizational requirements.

