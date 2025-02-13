---
title: Preparations
id: preperations
slug: /preperations
---


When installing with a user account, be sure to add it to the **wheel group**. This ensures that the user has the necessary administrative privileges.

## Adding a User to the Wheel Group

To add a user to the wheel group, use the following command:

```bash
usermod -aG wheel <user id>
usermod -aG wheel aylimgr
usermod -aG wheel dcuomgr
```

![END](\windows_install\PREP.png)

This command appends the specified user `(<user id>)` to the wheel group, granting them administrative privileges.