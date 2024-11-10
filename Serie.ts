export class Serie {
    numero: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    imageUrl: string;
  
constructor(numero: number,name: string, channel: string, seasons: number, description: string, link: string, imageUrl: string) {
    this.numero=numero;
    this.name = name;
    this.channel = channel;
    this.seasons = seasons;
    this.description = description;
     this.link = link; 
     this.imageUrl = imageUrl;
    }
  }