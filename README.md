angular-clippy
==============

Angular module and directive for ClippyJS


Installation
------------

Place the following on your server (you can use the build.sh to generate the directory to copy):

 * ./angular-clippy.js
 * ./Agents/ (rename from agents/)
 * ./clippy.css
 * ./clippy.min.js

Make sure you have JQuery and Angular:

```{html}
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"></script>
```

Load up angular clippy and dependencies:

```{html}
<link rel="stylesheet" href="/css/clippy.css">

<script src="/js/clippy/clippy.min.js"></script>
<script src="/js/clippy/angular-clippy.js"></script>
```

Usage
-----

```{html}
<clippy data-agent="Merlin" data-setup="callbackName"></clippy>
```

 Attribute     | Description                                                    
 ------------- | -------------------
 agent         | string denoting the clippy agent desired, see agents/
 setup         | name of the callback function in your scope, will be called with the initialized agent as the first argument
