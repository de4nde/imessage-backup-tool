
# iMessage Exporter

This tool was built to help my Grandfather export his iMessages from his iPhone to a format that he could read and store digitally. It's a utility that is mainly just to take a SQLite file from an iOS backup and convert it into something that most computers can open (a CSV). 

## Install and run locally on macOS

The export runs entirely in your browser. Node.js 18 or newer is required only
to start the local development server.

```bash
git clone <repository-url>
cd imessage-backup-tool
npm ci
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`). You can
also create and serve a production build:

```bash
npm run build
npm run preview
```

On a Mac, the Messages database is normally `~/Library/Messages/chat.db`.
Finder hides `Library` by default; use **Go > Go to Folder…** and enter that
path. macOS may require granting your browser Full Disk Access before it can
read the file. Make a copy of `chat.db` before opening it so that the live
Messages database is not modified while Messages is running.

For an iPhone backup, the relevant file has the fixed backup identifier
`3d0d7e5fb2ce288813306e4d4636395e047a3d28` inside the backup directory. This
browser tool cannot open encrypted iPhone backups directly; decrypt the backup
with an appropriate local tool first.

## Development

Run the Vite server rather than opening `index.html` directly. Browsers commonly
block loading the local WebAssembly file from a `file://` URL. This project was
forked from [@inloop's sqlite-viewer](https://github.com/inloop/sqlite-viewer).
