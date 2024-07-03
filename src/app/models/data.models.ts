export interface PageResponse {
    response: {
      response: string;
      status: number;
      message: string;
      name: string;
    };
    result: {
      _id: string;
      status: string;
      pageType: string;
      pageSection: PageSection[];
      __v: number;
    };
    }
  
    export interface PageResult{
      
    }
    
    export interface PageSection {
      sectionType: string;
      header: string;
      subtext: string;
      title: string;
      description: string;
      photo: string;
      points: string[];
      titleDescription: TitleDescription[];
      // arrayOne: TitleDescription[];
      // arrayTwo: TitleDescription[];
      // arrayThree: TitleDescription[];
      // arrayFour: TitleDescription[];
      imagesObj: Image[];
      videosObj: Video[];
      teamMember: {
        teamMembers: TeamMember[];
      };
      companies: string[];
      blogs: Blog[];
      jobPosts: JobPost[];
      benefits: Benefit[];
      faqs: FAQ[];
    }
    
    export interface Image {
      position: number;
      linkUrl: string;
    }
  
    export interface TitleDescription {
      position: number;
      title: string;
      description: string;
      videosObj: Video[];
    }
  
    export interface titleDescription {
      titleOne: string;
      descriptionOne: string;
      titleTwo: string;
      descriptionTwo: string;
      titleThree: string;
      descriptionThree: string;
      titleFour: string;
      descriptionFour: string;
    }
    
    export interface Video {
      position: number;
      linkUrl: string;
    }
    
    // export interface teamMembers {
    //   name: string;
    //   role: string;
    //   photoUrl: string;
    //   socialLinks: SocialLinks[];
    // }
  
    export interface TeamMember {
      name: string;
      role: string;
      photoUrl: string;
      socialLinks: {
        name: string;
        iconUrl: string;
        linkUrl: string;
      };
    }
  
    // export interface TeamMember {
    //   name: string;
    //   role: string;
    //   photoUrl: string;
    //   socialLinks: SocialLinks[];
    // }
    
    export interface SocialLinks {
      name: string;
      iconUrl: string;
      linkUrl: string;
    }
    
    export interface Blog {
      title: string;
      category: string;
      blogPost: string;
      socialLinks: SocialLinks[];
      authorName: string;
      authorDescription: string;
      authorImageUrl: string;
    }
    
    export interface JobPost {
      jobTitle: string;
      jobCategory: string;
      location: string;
      jobType: string;
      experience: string;
      authorDescription: string;
      authorImageUrl: string;
      jobAdditionalInfos: JobAdditionalInfo[];
    }
  
    export interface JobPostsPayload {
      jobPosts: JobPost[];
    }
    
    export interface JobAdditionalInfo {
      jobInfoType: string;
      details: string;
    }
    
    export interface Benefit {
      jobTitle: string;
      jobCategory: string;
      details: string;
    }
    
    export interface FAQ {
      question: string;
      category: string;
      answer: string;
    }
    