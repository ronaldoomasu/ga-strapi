import type { Schema, Struct } from '@strapi/strapi';

export interface AboutBoard extends Struct.ComponentSchema {
  collectionName: 'components_about_boards';
  info: {
    displayName: 'Board';
  };
  attributes: {
    boards: Schema.Attribute.Relation<'oneToMany', 'api::board.board'>;
    title: Schema.Attribute.String;
  };
}

export interface AboutBoardDetail extends Struct.ComponentSchema {
  collectionName: 'components_about_board_details';
  info: {
    displayName: 'Board Detail';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface AboutCommunity extends Struct.ComponentSchema {
  collectionName: 'components_about_communities';
  info: {
    displayName: 'Community';
  };
  attributes: {
    communityDetail: Schema.Attribute.Component<'about.community-detail', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutCommunityDetail extends Struct.ComponentSchema {
  collectionName: 'components_about_community_details';
  info: {
    displayName: 'Community Detail';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface AboutSection extends Struct.ComponentSchema {
  collectionName: 'components_about_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface EventHeroImages extends Struct.ComponentSchema {
  collectionName: 'components_event_hero_images';
  info: {
    displayName: 'Hero Images';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    cta: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
    textButton: Schema.Attribute.String;
  };
}

export interface HomeHeroImages extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_images';
  info: {
    displayName: 'Hero Images';
  };
  attributes: {
    cta: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface HomeImpact extends Struct.ComponentSchema {
  collectionName: 'components_home_impacts';
  info: {
    displayName: 'Impact';
  };
  attributes: {
    impactDetail: Schema.Attribute.Component<'home.impact-detail', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeImpactDetail extends Struct.ComponentSchema {
  collectionName: 'components_home_impact_details';
  info: {
    displayName: 'Impact Detail';
  };
  attributes: {
    impact: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface HomePartner extends Struct.ComponentSchema {
  collectionName: 'components_home_partners';
  info: {
    displayName: 'Partner';
  };
  attributes: {
    logos: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeSection extends Struct.ComponentSchema {
  collectionName: 'components_home_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    cta: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    textButton: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    cta: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images', true>;
    text: Schema.Attribute.String;
    textButton: Schema.Attribute.String;
  };
}

export interface SharedBannerAds extends Struct.ComponentSchema {
  collectionName: 'components_shared_banner_ads';
  info: {
    displayName: 'Banner Ads';
  };
  attributes: {
    cta: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedLabelDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_label_details';
  info: {
    displayName: 'LabelDetail';
  };
  attributes: {
    detail: Schema.Attribute.RichText;
    label: Schema.Attribute.String;
  };
}

export interface SharedReview extends Struct.ComponentSchema {
  collectionName: 'components_shared_reviews';
  info: {
    displayName: 'Review';
  };
  attributes: {
    reviews: Schema.Attribute.Relation<'oneToMany', 'api::review.review'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface VolunteerVolunteer extends Struct.ComponentSchema {
  collectionName: 'components_volunteer_volunteers';
  info: {
    displayName: 'Volunteer';
  };
  attributes: {
    cta: Schema.Attribute.String;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    textButton: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.board': AboutBoard;
      'about.board-detail': AboutBoardDetail;
      'about.community': AboutCommunity;
      'about.community-detail': AboutCommunityDetail;
      'about.section': AboutSection;
      'event.hero-images': EventHeroImages;
      'home.banner': HomeBanner;
      'home.hero-images': HomeHeroImages;
      'home.impact': HomeImpact;
      'home.impact-detail': HomeImpactDetail;
      'home.partner': HomePartner;
      'home.section': HomeSection;
      'shared.banner': SharedBanner;
      'shared.banner-ads': SharedBannerAds;
      'shared.label-detail': SharedLabelDetail;
      'shared.review': SharedReview;
      'shared.section': SharedSection;
      'volunteer.volunteer': VolunteerVolunteer;
    }
  }
}
