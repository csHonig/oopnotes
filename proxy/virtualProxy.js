class Image
{
  constructor(url)
  {
    this.url = url;
    console.log(`Loading image from ${url}`);
  }

  draw()
  {
    console.log(`Drawing image from ${this.url}`);
  }
}

function drawImage(img)
{
  console.log(`About to draw the image`);
  img.draw();
  console.log(`Done drawing the image`);
}

class LazyImage
{
  constructor(url)
  {
    this.url = url;
  }

  draw()
  {
    if (!this.image)
      this.image = new Image(this.url);
    this.image.draw();
  }
}

let img = new LazyImage('http://pokemon.com/pikachu.png');
drawImage(img);
