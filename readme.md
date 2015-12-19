# text-meme-cli

> Generate text meme

<img src="meme.gif" width="300">

## Install

```
$ npm install --global text-meme-cli
```


## Usage

```
$ text-meme --help

  Options
    --delay       frame delay [Default: 500]
    --background  image's background color in hex [Default: #000000]
    --fontcolor   font's color in hex [Default: #ffffff]
    --filename    expected name of the file (without file extension) [Default: quote]
    --fontsize    font's size [Default: 30]

  Examples
    $ text-meme "It always seems impossible until it's done."
    generated text-meme > filename.gif
    
    $ text-meme-cli "It always seems impossible until it's done. --filename=quote --background=#ef8321"
    generated text-meme > quote.gif
```


### Related

- [text-meme](https://github.com/beatfreaker/text-meme/) - Api of this module
- [slate](https://github.com/bitshadow/slate) - Inspire from this module


## License

MIT © [beatfreaker](https://beatfreaker.github.io)
