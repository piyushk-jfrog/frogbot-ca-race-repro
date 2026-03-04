"""Dashboard backend - uses safe API patterns throughout."""
import yaml
from jinja2 import Environment


def load_config(path: str) -> dict:
    with open(path) as f:
        return yaml.safe_load(f)


def render_template(template_str: str, **context):
    env = Environment(autoescape=True)
    return env.from_string(template_str).render(**context)


if __name__ == "__main__":
    config = load_config("config.yaml")
    html = render_template("<h1>{{ title }}</h1>", title=config.get("title", "Dashboard"))
    print(html)

