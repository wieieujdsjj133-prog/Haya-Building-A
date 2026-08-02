from typing import Callable, Dict


class PluginManager:

    def __init__(self):
        self.plugins: Dict[str, Callable] = {}


    def register(
        self,
        name: str,
        function: Callable
    ):

        self.plugins[name] = function


    def execute(
        self,
        name: str,
        *args,
        **kwargs
    ):

        if name not in self.plugins:
            return {
                "error": "Plugin not found"
            }

        return self.plugins[name](
            *args,
            **kwargs
        )


    def list_plugins(self):

        return list(
            self.plugins.keys()
        )


plugin_manager = PluginManager()


# مثال إضافة بسيطة
def hello_plugin(name: str):

    return f"Hello {name}"


plugin_manager.register(
    "hello",
    hello_plugin
)
