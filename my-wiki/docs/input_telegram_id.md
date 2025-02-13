---
id: input_telegram_id
title: How to Input Telegram ID in Each Device
slug: /input_telegram_id
---

# **1-1. How to Input Telegram ID in Each Device (Adding a New Property for Group Distinction)**  

This section explains how to **create a new custom property** in SolarWinds for distinguishing different groups when using Telegram notifications.  

---

## **1. Check Existing Properties**  
![input_telegram_id](\input_telegram_id\1.png)  
- There are **several pre-made properties** available.  
- If additional customization is required, a **new property** can be created for easier identification.  

---

## **2. Navigate to Custom Properties Management**  
![input_telegram_id](\input_telegram_id\2.png)  
1. Navigate to the **Upper Menu**.  
2. Click **Settings → All Settings**.  
3. Under **Manage Custom Properties**, select **"Manage Custom Properties"**.  

---

## **3. Create a New Custom Property**  
![input_telegram_id](\input_telegram_id\3.png)  
- Click the **"Add"** button to create a new property.  

---

## **4. Define the New Property**  
![input_telegram_id](\input_telegram_id\4.png)  
1. Enter the **desired name** for the new property.  
2. If the property is mandatory, check the **"Value must be specified"** option.  

---

## **5. Assign the New Property to Devices**  
![input_telegram_id](\input_telegram_id\5.png)  
1. Navigate to the **Upper Menu**.  
2. Click **Settings → Manage Nodes**.  

---

## **6. Edit Device Properties**  
![input_telegram_id](\input_telegram_id\6.png)  
- Click the **"Edit Properties"** button for the selected device.  

---

## **7. Verify and Use the New Property**  
![input_telegram_id](\input_telegram_id\7.png)  
- The **new property** will now be visible in the device properties.  
- This property can be used as a **variable in messages** for Telegram notifications.  
- Refer to **Section 2** for guidance on **editing messages** to include this property.  

---

# **1-2. How to Input Telegram ID in Each Device (Using a Pre-existing Property)**  

This section explains how to **add a Telegram ID** to a pre-existing property instead of creating a new one.  

---

## **1. Navigate to Node Management**  
![input_telegram_id](\input_telegram_id\8.png)  
1. Navigate to the **Upper Menu**.  
2. Click **Settings → Manage Nodes**.  

---

## **2. Edit Device Properties**  
![input_telegram_id](\input_telegram_id\9.png)  
- Click the **"Edit Properties"** button for the selected device.  

---

## **3. Locate the Telegram ID Section**  
![input_telegram_id](\input_telegram_id\10.png)  
1. Scroll to the **middle section** of the page.  
2. Find the **TELEGRAM_ID** field.  
3. **Enter your Telegram ID** in the field.  
   - If adding multiple Telegram IDs, **separate them with a comma (",")** (e.g., `12345678,87654321`).