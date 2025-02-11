---
id: windows_agent
title: Windows Agent Installation
slug: /windows_agent
---

# Windows Agent Installation

## Step 1: Open the Web Browser
1. Go to [SolarWinds Agent Download Page](http://10.204.42.7/Orion/AgentManagement/Admin/DownloadAgent.aspx).
2. When the login window appears, log in with your credentials
3. Click the **Login** button.

![login](/img/ms_ag_install/login.png)

## Step 2: Download and Install the Agent
1. Select the **Windows** button and click the **Next** button.

![login](/img/ms_ag_install/download.png)

2. Choose **Install Manually** and click the **Next** button.

![login](/img/ms_ag_install/install_manually.png)

3. Click the **DOWNLOAD.MSI** button, then click the **Done** button.

![login](/img/ms_ag_install/msidown.png)

4. Locate and open the `SolarWinds-Agent.msi` file.
5. Click **Next** to begin the installation.
6. Check the box to accept the **License Agreement** and click **Next**.
7. Use the **default installation path**, then click **Next**.
8. Click the **Install** button.
9. When prompted, click **Yes** to confirm the installation.

![login](/img/ms_ag_install/changeyes.png)

## Step 3: Configure the Agent

![login](/img/ms_ag_install/agentsetting.png)

1. Enter the following details when prompted:
   - **NMS Server IP Address:** `10.204.42.7`
   - **Orion Server Port:** `17778`
   - **Orion Username/ Password:** Obtain from the Admin.
2. Click **Yes** to proceed with the installation.

![login](/img/ms_ag_install/certificate.png)

3. Once the installation is complete, click **OK**.

## Step 4: Verify the Installation
1. Access the **Agent Management** page:  
   [http://10.204.42.7/Orion/AgentManagement/Admin/ManageAgents.aspx](http://10.204.42.7/Orion/AgentManagement/Admin/ManageAgents.aspx).
2. Enter the Credentials obtained
3. If you see the newly installed agent in the list, the installation was successful.

![login](/img/ms_ag_install/newlist.png)
