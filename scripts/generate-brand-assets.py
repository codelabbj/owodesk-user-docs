"""Génère favicon, apple-touch-icon et carte Open Graph depuis static/img/logo.png."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "static" / "img" / "logo.png"
OUT_IMG = ROOT / "static" / "img"
OUT_STATIC = ROOT / "static"

BRAND_ORANGE = (232, 69, 10, 255)  # #E8450A
BLACK = (10, 10, 10, 255)
WHITE = (255, 255, 255, 255)
MUTED = (180, 176, 170, 255)


def square_pad(im: Image.Image, fill: tuple[int, int, int, int] = (0, 0, 0, 255)) -> Image.Image:
    im = im.convert("RGBA")
    w, h = im.size
    side = max(w, h)
    canvas = Image.new("RGBA", (side, side), fill)
    canvas.paste(im, ((side - w) // 2, (side - h) // 2), im)
    return canvas


def load_font(name: str, size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    fonts_dir = Path(r"C:\Windows\Fonts")
    for candidate in (name, name.replace(".ttf", ".TTF")):
        path = fonts_dir / candidate
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def save_png(im: Image.Image, path: Path) -> None:
    im.save(path, format="PNG", optimize=True)


def make_og_image(logo: Image.Image) -> Image.Image:
    width, height = 1200, 630
    og = Image.new("RGBA", (width, height), BLACK)
    mark = logo.resize((280, 280), Image.Resampling.LANCZOS)
    og.paste(mark, (80, (height - 280) // 2), mark)

    draw = ImageDraw.Draw(og)
    title = load_font("segoeuib.ttf", 72)
    subtitle = load_font("segoeui.ttf", 38)
    caption = load_font("segoeui.ttf", 26)
    draw.text((420, 200), "OwoDesk", fill=WHITE, font=title)
    draw.text((420, 290), "Centre d'aide", fill=BRAND_ORANGE, font=subtitle)
    draw.text(
        (420, 360),
        "Documentation ERP OHADA  ·  SYSCOHADA  ·  MECeF",
        fill=MUTED,
        font=caption,
    )
    return og.convert("RGB")


def main() -> None:
    if not SRC.exists():
        raise SystemExit(f"Logo introuvable : {SRC}")

    logo = square_pad(Image.open(SRC))

    png_sizes = {
        "favicon-16x16.png": 16,
        "favicon-32x32.png": 32,
        "favicon.png": 32,
        "apple-touch-icon.png": 180,
        "icon-192.png": 192,
        "icon-512.png": 512,
    }
    for name, size in png_sizes.items():
        save_png(logo.resize((size, size), Image.Resampling.LANCZOS), OUT_IMG / name)

    ico_sizes = [(16, 16), (32, 32), (48, 48)]
    logo.save(OUT_IMG / "favicon.ico", format="ICO", sizes=ico_sizes)
    logo.save(OUT_STATIC / "favicon.ico", format="ICO", sizes=ico_sizes)

    og = make_og_image(logo)
    og.save(OUT_IMG / "owodesk-social-card.png", format="PNG", optimize=True)

    print("Assets générés :")
    for path in sorted(OUT_IMG.glob("favicon*")) + [
        OUT_IMG / "apple-touch-icon.png",
        OUT_IMG / "icon-192.png",
        OUT_IMG / "icon-512.png",
        OUT_IMG / "owodesk-social-card.png",
        OUT_STATIC / "favicon.ico",
    ]:
        print(f"  {path.relative_to(ROOT)} ({path.stat().st_size} octets)")


if __name__ == "__main__":
    main()
