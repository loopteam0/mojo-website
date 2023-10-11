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

export interface AboutUs{
  mainTitle: string;
  passage: string;
}

export interface TeamMembers{
  memberImg: string;
  memberName: string;
  memberRole: string;
  iconContainerBg: string;
  iconContainer: Array<{
    background: string;
    icon: string;
    iconColor: string;
    iconLink: string;
  }>;

}

export interface NewsCards{
  newsImg: string;
  writerImg: string;
  writerName: string;
  newsDate: string;
  newsTitle: string;
  newsSubTitle: string;
}

export interface BusinessAgentsBenefits{
  icon: string;
  iconContainerBG: string;
  mainTitle: string;
  subTitle: string;
}

export interface RegistrationRequirements{
  mainText: string;
  point: Array<string>;
}