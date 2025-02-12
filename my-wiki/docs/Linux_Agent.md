---
id: linux_agent
title: Linux Agent Installation
slug: /Linux_agent
---

# Linux Agent Installation  
![login](\windows_install\login.png)
1. Open the Web Browser on your Desktop or Laptop.  
2. Access `http://10.204.42.7/Orion/AgentManagement/Admin/DownloadAgent.aspx`.  
3. When the login window appears, log in using your given credentials.
4. Select Unix/Linux and then click the Next button.  

---

### Copying and Running the Installation Script  
5. Choose **Install via Package Management Tool** and click the **Next** button.
6. Click the item highlighted in the red box and then click the first Copy button (for number 1.). 
![redhat](\linux_install\redhat.png)
7. Return to the shell and run the command `vi install.sh`.  
8. Paste the copied code, then type `:wq` to save it and return to the shell.  
9. Run the command `chmod 755 install.sh` to give execution permission.  

---

### Running the Installation Script  
![redhat](\linux_install\command.png)
10. Run the command `sudo ./install.sh` to execute the script.  
11. Ensure that you have `sudo` command authority.  
12. Once the script execution is complete, enter the following command:  
    `sudo yum clean all && sudo yum -y install swiagent`  

---

### Configuring the Agent  

13. Confirm that the `swiagent` installation is complete.  
14. In the shell, enter the following command:  
    `sudo service swiagentd init`  
15. Select `2` and enter `10.204.42.7`.  
16. Select `5` and enter the given password.
17. Select `7` to save the information.  
18. Select `yes` and press Enter.  
19. The information is saved, and you return to the shell.  

---

### Verifying Installation  
![redhat](\linux_install\idk.png)
20. To check if the installation is normal, enter the following command:  
    `ps -ef | grep swi`  
21. If the results appear, the installation is successful.  
22. The agent runs automatically and will restart even after a system reboot.  

---

### Confirming in the Web Interface  
![final](\linux_install\final.png)
23. Access `http://10.204.42.7/Orion/AgentManagement/Admin/ManageAgents.aspx`.  
24. Enter the Credentials obtained
25. If you see a new entry in the list as shown on the screen, the installation is successful.