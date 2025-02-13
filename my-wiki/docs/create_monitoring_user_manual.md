---
id: create_monitoring_user_manual
title: SolarWinds DPA - Manually Creating a Monitoring User
slug: /create_monitoring_user_manual
---

This guide explains how to manually create a monitoring user in **SolarWinds Database Performance Analyzer (DPA)** to monitor Oracle databases.  

---

### **1. Access the DPA Web Interface**  
![create_monitoring_user_manual](\create_monitoring_user_manual\1.png)  
To begin, open your web browser and follow these steps:  

1. **Navigate to the DPA Web Interface** by entering the following URL:  
   🔗 [DPA Web](https://10.204.42.7:8443/iwc/ng/registerDbWizard?returnPage=main)  
2. When the login window appears, **enter your credentials**:  
   - **Username**: `dpa`  
   - **Password**: `qcell#12`  
3. Click the **"Login"** button.  
4. On the setup page, select **"I will create the monitoring user manually"** instead of the automatic option.  

---

### **2. Prepare the Monitoring User Script**  
![create_monitoring_user_manual](\create_monitoring_user_manual\2.png)  
Before proceeding, you need to **manually create a monitoring user** in Oracle using a SQL script:  

1. **Use a database client (e.g., SQL*Plus, SQL Developer, or Toad)** to connect to your Oracle instance.  
2. The required **SQL script** for user creation is **provided separately via email**.  
3. Run the script using a **SYS-privileged** account to grant necessary permissions.  
4. Once the script execution is complete, proceed with the next steps in DPA.  

---

### **3. Configure Connection Settings**  
![create_monitoring_user_manual](\create_monitoring_user_manual\3.png)  
After creating the monitoring user in Oracle, follow these steps to connect it to DPA:  

1. **Select the Connection Type**:  
   - Choose **"Direct Connect"** (recommended).  
2. **Enter Database Connection Information**:  
   - **IP Address or Hostname** of the Oracle database server.  
   - **Port Number** (default is usually **1521**).  
   - **Service Name or SID** (depends on the Oracle configuration).  
3. **Enter Monitoring User Credentials**:  
   - **Instance Name** (database instance to monitor).  
   - **Monitoring Username and Password** (created in Step 2).  
4. Click **"Next"** to continue.  

---

### **4. Verify Monitoring User Creation**  
![create_monitoring_user_manual](\create_monitoring_user_manual\4.png)  
- If the monitoring user was **created successfully**, DPA will allow you to proceed.  
- Click **"Next"** to move to the final registration step.  

---

### **5. Final Verification and Registration**  
![create_monitoring_user_manual](\create_monitoring_user_manual\5.png)  
Before completing the process:  

1. Review all the **database connection details** and **monitoring user information**.  
2. Ensure that everything is correct to avoid connection failures.  
3. Click **"Register"** to finalize the database registration in DPA.  

---

### **6. Confirm Successful Registration**  
![create_monitoring_user_manual](\create_monitoring_user_manual\6.png)  
Once registration is complete:  

- You will see a **confirmation message** indicating that the **Oracle DB instance has been successfully registered**.  
- If you need to **register another database**, repeat the process by clicking **"Register Another Database Instance"**.  

---

### **7. Verify Registration on the Main Page**  
![create_monitoring_user_manual](\create_monitoring_user_manual\7.png)  
- Go to the **Main Page** of DPA.  
- Check that the **newly registered Oracle DB instance** appears in the database monitoring list.  
- Ensure that it is **active and collecting performance data**.  

---

## **Conclusion**  
You have now successfully **manually created and registered a monitoring user** for an Oracle database in **SolarWinds DPA**. This allows DPA to collect and analyze performance metrics, helping you optimize database performance and detect potential issues early.