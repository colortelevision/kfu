## WINDOWS SUBSYSTEM FOR LINUX

OPEN POWERSHELL AS ADMINISTRATOR AND RUN
```bash
wsl --install
```

TO INSTALL A SPECIFIC DISTRIBUTION, SPECIFY
```bash
wsl --install -d debian
```

RESTART IF PROMPTED
OPEN WSL TERMINAL, CREATE A USER AND SET A PASSWORD

UPDATE & UPGRADE
```bash
sudo apt update && sudo apt upgrade -y
```

INSTALL ESSENTIAL TOOLS
```bash
sudo apt install -y build-essential curl git wget unzip
```

CONFIGURE GIT
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

GENERATE AN SSH AND ADD IT TO GITHUB (OR OTHER SERVICES)
```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
cat ~/.ssh/id_ed25519.pub
```

## OPTIONAL:

INSTALL NODE.JS

FOR JAVASCRIPT
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
```

VERIFY
```bash
node -v
npm -v
```

INSTALL NVM (NODE VERSION MANAGER) FOR EASIER VERSION CONTROL
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
nvm install --lts
```

CHECK IF PYTHON IS INSTALLED
```bash
python3 --version
```

IF NOT, INSTALL PYTHON
```bash
sudo apt install -y python3 python3-pip python3-venv
```

INSTALL DOCKER
```bash
sudo apt install -y docker.io
```

ADD YOUR USER TO THE DOCKER GROUP
```bash
sudo usermod -aG docker $USER
```

START DOCKER
```bash
sudo service docker start
```

open a WSL & NAVIGATE TO YOUR PROJECT DIRECTORY, LAUNCH VS CODE FROM WSL
```bash
code .
```

SYNC FILES BETWEEN WINDOWS AND WSL
```bash
\\wsl$\<distro_name>\
```

## MISCELLANEOUS TOOLS

JAVA
```bash
sudo apt install default-jdk
```
MYSQL
```bash
sudo apt install mysql-server
```
POSTGRESQL
```bash
sudo apt install prstgresql postgresql-contrib
```
RUBY
```bash
sudo apt install ruby-full
```
GO
```bash
sudo apt install golang
```

SET ZSH AS DEFAULT SHELL
```bash
sudo apt install -y zsh
```

```bash
chsh -s $(which zsh)
```

INSTALL OH-MY-ZSH FOR CONFIGURATION
```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```
