# **Web to Lead — Functional Guide**

1. ## **Introduction**

The Web to Lead feature in Horilla CRM lets you capture leads directly from any external website. You can create a form inside the CRM, embed it on your website, and each submission automatically creates a Lead record — no login required.

2. ## **Access Web to Lead**

   Go to **Settings → Web to Lead** to open the form builder.  
   ![alt text](media/web_to_lead/image-1.png) 
   

3. ## **Configure the Form**

   ### **Form Heading**

* Enter a **Form Name** (shown as the form title)  
  ![alt text](media/web_to_lead/image-2.png)

  ### **Select Fields**

* Click fields from the left panel to add them  
* Remove fields using the remove icon  
* The preview updates instantly  
  **Common fields:**  
   First Name, Last Name, Email, Phone,Company Name 

  ![alt text](media/web_to_lead/image-3.png)

	

### **After Submission**

  ![alt text](media/web_to_lead/image-4.png)

Choose what happens after form submission:

* **Success Message** → Show a custom message on the same page  
* **Return URL** → Redirect to another page (like a thank-you page)

  ### **Language**

	![alt text](media/web_to_lead/image-5.png)

Choose the form language:

* English  
* Arabic  
* German  
* French


  ### **Lead Owner**

	![alt text](media/web_to_lead/image-6.png)

* Select a user  
* All captured leads will be assigned to this user

 **Form Color**

* Choose a **Header Color** to match your brand 

  ![alt text](media/web_to_lead/image-7.png)

### **Save**

* Click **Generate to** apply the configuration

4. ## **Embed the Form**

   After saving, a public URL is generated:  
   https://yourdomain.com/leads/capture/\<form\_id\>/  
   You can:  
* Share the link directly  
* Embed it using an `<iframe>` on your website

![alt text](media/web_to_lead/image-8.png)

## **How Lead Capture Works**

When a visitor submits the form:

![alt text](media/web_to_lead/image-9.png)

* A new Lead is created in Horilla CRM  
* Lead Source → automatically set to **Website**  
* Lead Status → set to the first active pipeline stage  
* Lead Owner → assigned based on form settings  
* User sees success message or gets redirected

## **Additional Recommendations**

* Keep the form simple; too many fields can reduce submissions  
* Use clear labels and required fields only when necessary  
* Match form design (colors, wording) with your website branding  
* Test the form after embedding to ensure proper lead creation  
* Regularly review captured leads to maintain data quality

