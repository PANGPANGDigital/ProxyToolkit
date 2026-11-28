# Third-party notices

## Reukix/ukix Spotify lyrics script and module

- Source: `Reukix/ukix`, `js/Spotify-lyrics.js` and `Script/Spotify.sgmodule`
- Upstream commit: `5615cd0b3e78e04d4cb43f4a4152cce77adf6c08`
- SHA-256 of the upstream `js/Spotify-lyrics.js` snapshot before local edits: `caf13ded9c7bf0c9adfc5cdb8c76ece0514ec2d7a3bc79b06b3d4d8d8f56abcd`
- License: MIT; the full license text is included as `LICENSES/Reukix-ukix-MIT.txt`.
- Local changes:
  - Extracted only the lyrics completion, bilingual translation, and QUIC block rules into `Spotify.Enhance.sgmodule` (removed premium unlock and ad-blocking scripts/rules).
  - Updated `Spotify.Enhance.sgmodule` to use Chinese module argument labels (`启用歌词补全`, `启用歌词翻译`, `翻译目标语言`) and point `script-path` to this repository.
  - Updated `spotify-lyrics.js` storage key (`ProxyToolkit.Spotify.Lyrics.v1`) and outbound `User-Agent` identifier (`ProxyToolkit-Spotify-Lyrics/1.0`) for standalone hosting.
