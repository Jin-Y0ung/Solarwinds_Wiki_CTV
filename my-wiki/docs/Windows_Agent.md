---
id: windows_agent
title: Windows Agent Installation
slug: /windows_agent
---

## Step 1: Open the Web Browser
![login](\windows_install\login.png)
1. Go to [SolarWinds Agent Download Page](http://10.204.42.7/Orion/AgentManagement/Admin/DownloadAgent.aspx).
2. When the login window appears, log in with the given credential.
3. Click the **Login** button.

## Step 2: Download and Install the Agent
1. Select the **Windows** button and click the **Next** button.
2. Choose **Manually Install by Downloading Files via URL** and click the **Next** button.
3. Click the **DOWNLOAD.MSI** button, then click the **Done** button.
4. Locate and open the `SolarWinds-Agent.msi` file.
5. Click **Next** to begin the installation.
6. Check the box to accept the **License Agreement** and click **Next**.
7. Use the **default installation path**, then click **Next**.
8. Click the **Install** button.
9. When prompted, click **Yes** to confirm the installation.
![promt](\windows_install\certificate.png)

## Step 3: Configure the Agent
1. Enter the following details when prompted:
   - **NMS Server IP Address:** `10.204.42.7`
   - **Orion Server Port:** `17778`
   - **Orion Username/ Password** Obtain from the Admin.
![server](\windows_install\serverinput.png)
2. Click **Yes** to proceed with the installation.
3. Once the installation is complete, click **OK**.

## Step 4: Verify the Installation
1. Access the **Agent Management** page:  
   [http://10.204.42.7/Orion/AgentManagement/Admin/ManageAgents.aspx](http://10.204.42.7/Orion/AgentManagement/Admin/ManageAgents.aspx).
2. Enter the Credentials obtained
3. If you see the newly installed agent in the list, the installation was successful.
![end](\windows_install\final.png)
