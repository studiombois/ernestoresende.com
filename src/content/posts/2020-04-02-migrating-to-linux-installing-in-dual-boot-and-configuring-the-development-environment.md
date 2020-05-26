---
title: "Migrating to Linux: Installing and configuring a development environment"
date: 2020-04-18
description: "A comprehensive guide for those who are still on the fence about using Linux as an operating system for development tasks."
---

I often see in the community a certain indecision about which direction to take when choosing an OS to develop. "*Do I use Windows with WSL, a Linux distro, break my head trying a hackintosh or spend a ton of money buying a Macbook?*"


Most of these people are a little afraid to migrate to Linux distributions, but at the same time feel the limitations that the lack of a native development environment brings when using Windows. If for any reason you intend to migrate to Linux, my goal in this article is to help you install and configure a complete and friendly development environment, and to learn some new things in the middle of the process that will make your Linux experience a little friendlier in the future.

This article will be divided into **four parts**. In the first part we will explore how to configure a dual-boot Windows with a Linux distribution, install essential applications for the development environment and synchronize our local repositories with Github. In the second part we will explore some customizations for the terminal with ZSH and Oh My Zsh. In the third part we will explain some extensions and configurations that can transform Visual Studio Code and speed up your workflow. And finally, we will dive a little into considerations about Linux performance and how to get the maximum performance out of your machine.

# Choosing the distribution
The term Linux is generally used to describe the operating system as a whole, but this is actually just the name of the kernel that runs behind the system. The system itself are distributions, such as **Ubuntu**, **Debian**, **Arch**, **Deepin** and etc. Think of these distributions as "flavors" of the system: some are more focused on the common user and have simpler interfaces, others are focused on specific tasks, but all have Linux as the heart of the system. The only way to know which distribution is best for you is… testing. The discussion runs wild about the best distributions that we have out there in a series of parameters; usability, performance, graphic interface, customization. But at the end of the day, this is the truth:

> The choice of a distribution is completely personal. No user is the same and everyone will want the system to work in a different way.

So what I can do here is to suggest: Are you starting now? **Install Ubuntu**. It comes with a large majority of the things you need, a relatively customizable interface, and is the most popular and used distribution, so you will always get help on the internet when you run into a problem that you can't solve yourself.

![Ubuntu Download Page Banner](./ubuntu_banner.jpeg)

In this article I will use Ubuntu as a base, but the vast majority of configurations are replicable in other distributions.

## Installing dual-boot distribution with Windows

It all starts by downloading the system's ISO. On the [official Ubuntu website](https://ubuntu.com/download/desktop) you will find the latest version, and the LTS version, that is, a stable version that will continue to receive updates for five years after its release. I always preferred to use the latest version, I never had any problems and they always come with the newest features, but it goes from your personal relationship between novelty vs. stability.

After downloading the ISO, it's time to put it on a bootable USB stick. I like to use Rufus on Windows. Just select the USB device, select the ISO, and bingo. Before creating an image, check if your system uses [BIOS or UEFI](https://websetnet.net/pt/Como-verificar-se-o-seu-computador-usa-uefi-or-bios/) at startup. If using BIOS, use the MBR partition scheme. Otherwise, you can use GPT without any problems.

![Windows Disk Manager](./disk_manager.jpeg)

It will now be necessary to "shrink" the size of your Windows partition. Open Disk Manager as an administrator, right-click on the *C:/* disk and click on *Shrink*. With this tool you choose how many MB you want to shrink the Windows partition, freeing up space for Ubuntu partitions.

With that done, it's time to do the move on with the installation. Restart the PC, boot from the USB stick, and you will see the initial Ubuntu installation screen. Selecting the language and the installation option, the next screen will ask for the keyboard layout. Choose the one that is compatible with yours and continue.

On the next screen Ubuntu asks you to choose between normal and minimal installation. I always choose the minimum and install only what is necessary afterwards, in order to keep the system as light as possible. In the section below, check both checkboxes to leave the system and updated drivers out of the box.

In the next section you have two options: Install Ubuntu together with Windows, where Ubuntu automatically detects free space and sets up partitions, or install manually, where you can rearrange partitions manually. To avoid any automation conflicts I always choose to manually partition.

In the partition creator you can choose between two partitioning structures: create only the ```/root``` partition (or only ```/```), or create the ```/root``` and ```/home``` partition separately, with the only difference being that when using the second structure, you can change distribution without losing data stored in ```/home```. Regardless of the structure you choose to use, create the partitions by choosing the appropriate space for each one, with the **logical partition type**, located at the **beginning of the volume** and in the **ext4** file system.

![Ubuntu Installer](./ubuntu_installer.jpeg)

When everything is ready, click on “Install now”. The rest is very self-explanatory, just settings for username, password, machine name and location.

After the installation is finished, your dual-boot is ready and already with GRUB (that little screen that lets you choose which system to boot).

# Configuring the development enviroment

Now it's time to start configuring the development environment: installing software and dependencies, synchronizing Git with Github, configuring useful applications and VS Code extensions. Many of the applications here are aligned to my personal preference. Feel free to replace them with similar alternatives.

# Installing with apt and packages with dpkg:

Most programs can be found in the official Ubuntu repository, which means that the only thing needed is a command line in the terminal:

```
sudo apt install name-of-the-software
```

If the application was downloaded in  a .deb format from the internet, navigate and install with the following commands in the terminal:

```
# Navigates to the download folder.
cd Downloads

# Installs the package.
sudo dpkg -i nameOfThePackage.deb

# Install any missing dependencies.
sudo apt install -f
```

## Internet

 - [Google Chrome](https://www.google.pt/intl/pt-PT/chrome/?brand=CHBD&gclid=Cj0KCQjw9tbzBRDVARIsAMBplx-3dl3XAE9QTtDsg2H1OSoF3g8Cwot1zV85De_AD628XPgsGhKdrKQaAoesEALw_wcB&gclsrc=aw.ds) - I recommend installing it even if it is not your default browser as it has great development tools and, whether you like it or not, it is the most used on the market.

 - [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)- It is a version of Firefox with some very interesting development resources and guides for the visual debugging of CSS.

 - [Min](https://minbrowser.github.io/min/) - It is a minimalist browser and focused on preserving machine resources. I find it cool when I want to leave a video running to follow a tutorial or read a documentation.

## Code Editor

 - [Visual Studio Code](https://code.visualstudio.com/) - My favorite code editor, for some pretty obvious reasons. Feel free to download whatever you like, but keep in mind that this article will focus on VS Code extensions that may not be available from other publishers.

## Terminal

 - [Hyper](https://hyper.is/#installation) - It is a beautiful terminal, relatively light, and divides several sections of the terminal within a single window.

# Installing and configuring Git

You will only need to execute:

```
sudo apt install git
```

And now configure it:

```
git config --global user.name "Your_Name"
git config --global user.email "yourname@example.com"
git config --global color.ui auto

### And now check if everything is right...
git config --get user.name
git config --get user.email
```

Now we need to generate the SSH that is going to be used to sync your development machine with Github. Generate the key with:

```
ssh-keygen -C <your-email>
```

You will be asked for a location to save, you can press ```Enter``` to save to the default folder. Then you will request a password, you can press ```Enter``` as well.

Now open a browser, log in your Github account, click on your profile icon -> Settings. On the sidebar, click on ```SSH and GPG keys``` -> ```New SSH Key```. Get back to the terminal:

```
cat ~/.ssh/id_rsa.pub
```

Copy and paste the output, which starts in ```ssh-rsa``` and ends with your email address (in the terminal you have to use Ctrl+Shift+C to copy) and paste it in the Github dialog box. Click ```Add SSH key```, and you're done. The machine is now synchronized with Github.

---

# Configuring your terminal with Zsh and Oh My Zsh

Previously I explained some basic steps of setting up a Windows/Linux dual-boot and installing some programs that make up a basic development environment. This time we will focus a little on the terminal and its tools.

If you followed the previous steps, you probably remember my endpoint recommendation, Hyper. You can download his .deb file [here](https://hyper.is/).

## Installing Zsh

O Zsh pode ser instalado diretamente do terminal:

```
sudo apt install zsh
```

It will now be necessary to make zsh your default shell. This requires a little attention on some aspects that may confuse you up front, so let me clarify them beforehand:

 - Your shell will no longer be BASH (Bourne Again Shell) which comes by default on the vast majority of Unix systems. It will be changed to Z-shell (a command interpreter for Unix).
 - This means that all settings, such as aliases, must now be made in the Zsh files (```~/.zshrc```) and not in the Bash files (```~/.bash_profiles``` or other variants).

To make zsh your default shell, run:

```
chsh -s $(which zsh)
sudo chsh -s $(which zsh)
```

Log out and back to your section so that the desktop is restarted and the changes take effect.

## Installing Oh My Zsh

Now it's time to install Oh My Zsh, which works as a kind of framework for zsh. It is with this framework that you can manage themes, install plugins and configure some options that can streamline your workflow in the future.

To install Oh My Zsh just run:

```
sh -c "$(curl -fsSL <https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh>)"
```

With that done, time to install a theme. I use Material Theme, but you are free to choose the theme you want. To start using Material in Hyper is as simple as running:

```
hyper install hyper-material-theme
```

## Installing a theme

Zsh accepts custom themes that change the organization of elements in the terminal. I use the Spaceship theme, but you are free to use any of the standard themes listed in the official Zsh documentation, or to install another external theme.

Some themes, like Spaceship itself, will require fonts with charsets that are not normally found in monospace fonts that come by default on most systems. This is easily resolved with the **Fira Code**. Download the font from the [official repository] and install the font on the system.

After that, in Hyper, go to ```Edit``` → ```Preferences```, which will open a text file. Look for the fontFamily property and enter the Fira Code like this. Save the file and restart the terminal.
