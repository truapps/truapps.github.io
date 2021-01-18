## Structure

```txt
📙
 ├── 📦 back-end             Server part (dc-api-core)
 │   ├── ⚙️ controllers      Request controllers
 │   ├── 🗃️ models           Models for working with DB
 │   └── 📁 site_template    Templates, that used while creating site
 │       ├── 📁 public_html  Default site files
 │       └── ⚙️ apache.conf  Apache configuration file
 ├── 📰 front-end            Browser part
 │   ├── 📁 public           Static files
 │   └── 📁 src              App root
 │       ├── 💽 assets       Assets
 │       ├── 📚 components   Basic application components
 │       ├── 🌍 lang         Localization files
 │       ├── 🎨 styles       Style kits
 │       └── 🗂️ views        Site pages
 ├── 🔐 ssl                  SSL certificates storage
 └── ⚙️ config.json          Main configuration file
```
