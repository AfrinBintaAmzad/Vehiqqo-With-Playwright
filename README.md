<h1 align="center">🚀 Vehiqqo - Playwright Automation Tests</h1>

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=150&section=header&text=Vehiqqo%20Tests&fontSize=45&fontColor=ffffff" alt="banner" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white" alt="Playwright" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
</p>

<p align="center">
  🧪 Automated UI tests for the Vehiqqo web application, built while learning Playwright.
</p>

---

## ✨ What is tested

| Feature | Test type | Status |
|---|---|---|
| 🔐 Login page | Negative tests (wrong email / password, empty fields) | ✅ Done |
| 📝 Forgot PAssword page | Valid Email| ❌ Failed |
| 📧 Verification code | Wrong code handling | 🚧 In progress |

---

## 🛠️ Tech stack

- 🎭 **Playwright** - browser automation and testing
- 🟨 **JavaScript** - test code
- 🟩 **Node.js** - runtime
- 🐙 **Git & GitHub** - version control

---

## ⚙️ Setup

**1. Install** [Node.js](https://nodejs.org) (version 18 or newer)

**2. Clone this repository**

```bash
git clone https://github.com/AfrinBintaAmzad/Vehiqqo-With-Playwright.git
cd Vehiqqo-With-Playwright
```

**3. Install dependencies and browsers**

```bash
npm install
npx playwright install
```

---

## ▶️ Run the tests

| Command | What it does |
|---|---|
| `npx playwright test` | Run all tests |
| `npx playwright test --headed` | Watch the browser while testing |
| `npx playwright test vehiqqo.spec.js` | Run one file |
| `npx playwright show-report` |  Open the HTML report |
| `npx playwright codegen <url>` |  Record actions and generate code |

---

## 📁 Project structure

```
📦 Vehiqqo-With-Playwright
 ┣ 📂 tests
 ┃ ┗ 📜 vehiqqo.spec.js      # login and register tests
 ┣ 📜 playwright.config.js   # Playwright settings
 ┗ 📜 package.json           # project dependencies
```

---

## 🎯 What I learned

- ✅ Writing tests with `test` and `expect`
- ✅ Finding elements with `getByRole`, `getByPlaceholder`, `getByText`
- ✅ Negative testing for login and forgot password forms
- ✅ Using Git and GitHub to share code

---


<img width="1364" height="549" alt="image" src="https://github.com/user-attachments/assets/3ec16c87-488f-41c7-a088-b5cf09ace8e3" />

<img width="1360" height="556" alt="image" src="https://github.com/user-attachments/assets/fef92532-672e-4a22-9277-199f8f409a54" />


