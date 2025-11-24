# Snake Game--

A simple browser-based Snake game implemented with HTML, CSS, and JavaScript.

**Project structure

- `index.html`: The game entry point and markup.
- `index.js`: Game logic (snake movement, food, collision, scoring).
- `index.css`: Styles for the game layout and visuals.

**Overview**

This is a minimal Snake game you can open and play in any modern browser. Use the arrow keys to steer the snake, collect food to grow, and avoid colliding with walls or the snake's own body.

**How to run**

Option 1 — Open directly in your browser (simple):

- Double-click `index.html`, or from PowerShell run:

```powershell
start .\index.html
```

Option 2 — Serve over a local HTTP server (recommended for consistent behavior):

- If you have Python installed, from the project folder run:

```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

**Controls**

- Arrow keys: `←` `→` `↑` `↓` to change the snake's direction.
- (If implemented) `P` to pause/resume.

**Gameplay**

- Eating food increases the score and the snake's length.
- The game ends when the snake hits the wall or itself.

**Customization**

- Open `index.js` to tweak game variables such as speed, grid size, or starting length.
- You can change styling (colors, sizes) in `index.css`.

**Development / Contribution**

- Small improvements welcome: add mobile controls, touch support, or high-score persistence.
- To contribute: fork the repo, make changes, and open a pull request.

**License**

No license file is included. Add a `LICENSE` if you want to set explicit reuse terms.

---

Enjoy playing! If you'd like, I can also:

- Add keyboard pause/unpause, touch controls, or high-score saving.
- Create a small GitHub Actions workflow to run basic checks.

Tell me which of those you'd like next.
