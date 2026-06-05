from pathlib import Path
import re

root = Path(__file__).resolve().parent

for file in root.rglob("*.html"):
    text = file.read_text(encoding="utf-8")

    depth = len(file.relative_to(root).parents) - 1
    base = "." if depth == 0 else "/".join([".."] * depth)
    script_src = f"{base}/assets/js/footer.js"

    replacement = f'''<footer id="site-footer" data-base="{base}"></footer>
    <script src="{script_src}"></script>'''

    nuovo_testo = re.sub(
        r"<footer[^>]*>.*?</footer>",
        replacement,
        text,
        flags=re.DOTALL | re.IGNORECASE
    )

    if nuovo_testo != text:
        file.write_text(nuovo_testo, encoding="utf-8")
        print("Aggiornato:", file)