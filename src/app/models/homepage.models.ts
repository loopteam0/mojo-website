export interface AdvantageCard{
    icon: string;
    title: string;
    subtitle: string;
}

export interface HomepageHero{
    tagText: string;
    mainTitle: string;
    subTitle: string;
}


export interface GeneralFeatures{
    containerColor: string;
    title: string;
    subtitle: string;
    icon: string;
}

export interface MojoForYou{
    subheader: string;
    mainHeader: string;
    points: Array<string>;
}

export interface BecomeAMojoer{
    firstStep: [
        mainHeader: string,
        subHeader: string,
        stepTagTxt: string
    ];
    secondStep: [
        mainHeader: string,
        subHeader: string,
        stepTagTxt: string
    ];
    thirdStep: [
        mainHeader: string,
        subHeader: string,
        stepTagTxt: string
    ]
}