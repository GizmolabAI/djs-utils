# About
- A discord.js Utils Package with qrcode and other utility commands! Works With Slash and Normal Commands!
- Join our [Support Server](https://discord.gg/jDP2FbvCdk) for help
- For Discord.js v13: npm i djs-utils
- For Discord.js v12: npm i djs-utils@old
# Installation

```npm i djs-utils```

# Example usage

```
USE ACCORDING TO YOUR COMMAND HANDLER
```

**QR CODE GENERATOR**
=== 
*NORMAL COMMAND*

![](https://cdn.discordapp.com/attachments/834390098304565323/872480765248696360/unknown.png)
```js
     const { Utils } = require('djs-utils')
        const util = new Utils({
        args: args[0],
        message: message,
        slashCommand: false,
        embedFooter: "Made With djs-utils", //The Footer of the embed
        embedTitle: "Generated A QR Code", //The title of the embed
        embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
        })
        util.qrcode()
```
*SLASH COMMAND*
=== 
(*Requires djs-utils@dev and a slash command handler setup)
![](https://cdn.discordapp.com/attachments/834390098304565323/872480858110578789/unknown.png)
```js
 const { Utils } = require('djs-utils')
        const util = new Utils({
        args: args,
        slashCommand: true,
        interaction: interaction,
        embedFooter: "Made With djs-utils", //The Footer of the embed
        embedTitle: "Generated A QR Code", //The title of the embed
        embedColor: "RANDOM", //The color of the embed! (Use Hex codes or use the color name)
        })
        util.qrcode()
```


# Note: 
Please Respect the license and dont just copy  the whole thing as paste as your own package!

# Updates

You Can use this package with djs-13 by installing djs-utils@dev

# Credits

Our Other packages:
- [djs-games](https://www.npmjs.com/package/djs-games) - A package for discord games
- [djs-anime](https://www.npmjs.com/package/djs-anime) - A package for anime commands

# Help
## Join our Support Server for help
<a href="https://discord.gg/jDP2FbvCdk"><img src="https://invidget.switchblade.xyz/jDP2FbvCdk" /></a>

