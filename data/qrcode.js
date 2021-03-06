
class Utils {
    constructor(options) {
        if (!options.embedFooter) throw new TypeError('Missing argument embedFooter')
        if (typeof options.embedFooter !== 'string') throw new TypeError('embedFooter must be a string')

        if (!options.embedTitle) throw new TypeError('Missing argument embedTitle')
        if (typeof options.embedTitle !== 'string') throw new TypeError('embedTitle must be a string')

        if (!options.embedColor) throw new TypeError('Missing argument embedColor')
        if (typeof options.embedColor !== 'string') throw new TypeError('embedColor must be a string')
        if (typeof options.slashCommand !== 'boolean') throw new TypeError('slashCommand value must be true or false')
         //if (!options.message) throw new TypeError('Missing argument: message')

        this.message = options.message;
        this.embedFooter = options.embedFooter
        this.embedTitle = options.embedTitle
        this.embedColor = options.embedColor
        this.args = options.args
        this.interaction = options.interaction
        this.slashCommand = options.slashCommand 
    };

    async qrcode() {
        if(this.slashCommand === false) {
        const Discord = require('discord.js')
        let link = this.args
        let qrlink = `http://api.qrserver.com/v1/create-qr-code/?data=${link}&size=200x200`

        if (!link)
            return this.message.channel.send({content:` Please provide a link !`})

        if (require('is-url')(link)) {
            const attachment = new Discord.MessageAttachment(qrlink, 'qrcode.png');

            const embed = new Discord.MessageEmbed()
                .setTitle(this.embedTitle)
                .setColor(this.embedColor)
                .setImage('attachment://qrcode.png')
                .setFooter(this.embedFooter)

            this.message.channel.send({embeds: [embed], files: [attachment]})

        } else {
            this.message.channel.send({ content: `Error provide a valid link which contains \`https://\``})
        }
    } else if(this.slashCommand === true) {
        
        const Discord = require('discord.js')
        let [link] = this.args
        let qrlink = `http://api.qrserver.com/v1/create-qr-code/?data=${link}&size=200x200`

        if (!link)
            return this.interaction.followUp({content:` Please provide a link !`})

        if (require('is-url')(link)) {
            const attachment = new Discord.MessageAttachment(qrlink, 'qrcode.png');

            const embed = new Discord.MessageEmbed()
                .setTitle(this.embedTitle)
                .setColor(this.embedColor)
                .setImage('attachment://qrcode.png')
                .setFooter(this.embedFooter)

                this.interaction.followUp({embeds: [embed], files: [attachment]})

        } else {
            this.interaction.followUp({ content: `Error provide a valid link which contains \`https://\``})
        }


    }
    }
}
module.exports = Utils;