# Third-party notices

## Maasea YouTube response script

- Source: `Maasea/sgmodule`, `Script/Youtube/youtube.response.js`
- Upstream build timestamp: `2026/7/19 16:16:39`
- SHA-256 of the upstream snapshot before local edits: `f98483d5f5017514f82502253c0db5ce2d4ffb7839887aa2cadc22666f5a7f12`
- License: Apache-2.0; the full license text is included as `LICENSES/Maasea-Apache-2.0.txt`.
- Local changes: the debug argument is wired into the script logger; an external documentation URL was removed from an error message. The script does not call Maasea's `youtube.request.js` or its Worker.

## protobuf-ts runtime

- Version: `1.0.8`, bundled into `youtube.js` (there is no runtime import or fetch from this project).
- Source: `timostamm/protobuf-ts`.
- License: Apache-2.0; the full license text is included as `LICENSES/protobuf-ts-Apache-2.0.txt`.
