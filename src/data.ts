class Serie {
    private id: number;
    private name: string;
    private channel: string;
    private seasons: number;
    private description: string;
    private link: string;
    private image: string;

    constructor(id: number, name: string, channel: string, seasons: number, description: string, link:string, image: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.image = image;
        this.link = link;
    }

    getId(): number {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getChannel(): string {
        return this.channel;
    }
    getSeasons(): number {
        return this.seasons;
    }
    getDescription(): string {
        return this.description;
    }
    getLink(): string {
        return this.link;
    }
    getImage(): string {
        return this.image;
    }

    setId(id: number): void {
        this.id = id;
    }
    setName(name: string): void {
        this.name = name;
    }
    setChannel(channel: string): void {
        this.channel = channel;
    }
    setSeasons(seasons: number): void {
        this.seasons = seasons;
    }
    setDescription(description: string): void {
        this.description = description;
    }
    setLink(link: string): void {
        this.link = link;
    }
    setImage(image: string): void {
        this.image = image;
    }
}

export const series = [
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.netflix.com/co/title/70143836","images/breakingbad.jpeg"),
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","images/OrangeIsTheNewBlack.jpeg"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
      "images/GameOfThrones.jpeg"),

    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
        "https://www.max.com/co/es/shows/big-bang-theory/c8ea8e19-cae7-4683-9b62-cdbbed744784", "images/TheBigBangTheory.jpeg"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
        "https://www.bbc.co.uk/programmes/b018ttws", "images/Sherlock.jpeg"),

    new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "images/AVeryEnglishScandal.jpeg"),
  ];