# 📦 NodeJS Compress and Backup to AWS S3

Este es un proyecto sencillo desarrollado con **Node.js nativo**, sin frameworks externos, que permite:

- 📁 Comprimir archivos o carpetas localmente.
- ☁️ Subir los backups comprimidos a **AWS S3**.
- 🕒 Automatizar el proceso de backups para entornos de desarrollo o producción.

---

## 🚀 Características

- Compresión de archivos/carpeta a formato `.gz`.
// - Autenticación segura con AWS mediante variables de entorno.
- Subida automática del archivo comprimido a un bucket S3.
- Limpieza opcional de archivos temporales locales.
- Código escrito 100% en Node.js sin frameworks.

---

## 🛠️ Tecnologías

- [Node.js](https://nodejs.org/) (sin frameworks externos)
- [AWS SDK para JavaScript (v3)](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/)
- Módulos nativos: `fs`, `zlib`, `child_process`, `path`, `url`.

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tuusuario/node-backup-s3.git
cd worldBackUpMine
