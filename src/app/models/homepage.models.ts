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

  Steps: Array<{
    firstStep: Array<{
      mainHeader: string;
      subHeader: string;
      stepTagTxt: string;
    }>;

    secondStep: Array<{
      mainHeader: string;
      subHeader: string;
      stepTagTxt: string;
    }>;

    thirdStep: Array<{
      mainHeader: string;
      subHeader: string;
      stepTagTxt: string;
    }>;
  }>;

}

export interface StepsVideos{
  title: string;
  description: string;
  videoLink : string;
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
  title: string;
  content: string;
  isExpanded: boolean;
}

export interface SubHeroContent {
  mainTitle: string;
  subTitle: string;
}

export interface FeaturePoints {
  backgroundColor: string;
  image: string;
  mainTitle: string;
  subTitle: string;
  flexDirection: string;
}

export interface AboutUs {
  mainTitle: string;
  passage: string;
}

export interface TeamMembers {
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

export interface NewsCards {
  newsImg: string;
  writerImg: string;
  writerName: string;
  newsDate: string;
  newsTitle: string;
  newsSubTitle: string;
  newsLink: string;
}

export interface BusinessAgentsBenefits {
  icon: string;
  iconContainerBG: string;
  mainTitle: string | undefined;
  subTitle: string | undefined;
}
export interface RegistrationRequirements {
  mainText: string;
  point: Array<string>;
}

export interface CareerPositionCards {
  positionId: string;
  position: string;
  positionType: string;
  location: string;
}

export interface MojoeeBenefitsCards {
  mainHeader: string;
  benefitsList: Array<string>;
}

export interface JobPositions {
  positionId: string;
  positionTitle: string;
  whoWeAreLookingFor: Array<string>;
  whatYouWillBeDoing: Array<string>;
  bonusPointsFamiliarity: Array<string>;
  educationalRequirement: string;
  salary: Array<string>;
  workingHours: Array<string>;
  workingDays: Array<string>;
  perksAndBenefits: Array<string>;
  applicationProcess: Array<string>;
  jobSummary: Array<{
    icon: string;
    mainTitle: string;
    subTitle: string;
  }>;
}


// export interface MediaAndPress{
//   title: string;
//   description: string;
//   newsLink: string;
//   newsImg: string;
// }