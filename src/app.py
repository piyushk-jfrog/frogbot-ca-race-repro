"""Safe application - all patterns use secure APIs."""


def load_config(path: str) -> dict:
    import yaml

    with open(path) as f:
        return yaml.safe_load(f)


def render_page(template_str: str, **ctx):
    from jinja2 import Environment

    env = Environment(autoescape=True)
    return env.from_string(template_str).render(**ctx)


if __name__ == "__main__":
    config = load_config("config.yaml")
    print(render_page("<p>{{ name }}</p>", name=config.get("name", "world")))
