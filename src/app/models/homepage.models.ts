export interface AdvantageCard {
  icon: string;
  title: string;
  subtitle: string;
}

export interface HomepageHero {
  tagText: string;
  mainTitle: string;
  subTitle: string;
}

export interface GeneralFeatures {
  containerColor: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface MojoForYou {
  image: string;
  subheader: string;
  mainHeader: string;
  points: Array<string>;
}

export interface BecomeAMojoer {
  firstStep: [mainHeader: string, subHeader: string, stepTagTxt: string];
  secondStep: [mainHeader: string, subHeader: string, stepTagTxt: string];
  thirdStep: [mainHeader: string, subHeader: string, stepTagTxt: string];
}

export interface PaymentLikeNeverBefore {
  mainHeader: string;
  subTitle: string;
  outerBg: string;
  cardInfoOne: Array<{
    cardTitle: string;
    cardSubTitle: string;
    innerBg: string;
  }>;
}


export interface AccordionContent {
  title: string,
  content: string,
  isExpanded: boolean;
}

export interface SubHeroContent{
  mainTitle: string;
  subTitle: string;
}

export interface FeaturePoints{
  backgroundColor: string;
  image: string;
  mainTitle: string;
  subTitle: string;
  flexDirection: string;
}