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

export interface EventEventComponent extends Struct.ComponentSchema {
  collectionName: 'components_event_event_components';
  info: {
    displayName: 'Event Component';
  };
  attributes: {
    eventTitle: Schema.Attribute.String;
    readMoreText: Schema.Attribute.String;
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

export interface FooterApps extends Struct.ComponentSchema {
  collectionName: 'components_footer_apps';
  info: {
    displayName: 'Apps';
  };
  attributes: {
    appleApp: Schema.Attribute.Media<'images'>;
    appleCTA: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    googleApp: Schema.Attribute.Media<'images'>;
    googleCTA: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FooterPage extends Struct.ComponentSchema {
  collectionName: 'components_footer_pages';
  info: {
    displayName: 'Page';
  };
  attributes: {
    pageItems: Schema.Attribute.Component<'footer.page-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface FooterPageItems extends Struct.ComponentSchema {
  collectionName: 'components_footer_page_items';
  info: {
    displayName: 'Page Items';
  };
  attributes: {
    pageCTA: Schema.Attribute.String;
    pageText: Schema.Attribute.String;
  };
}

export interface FooterSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    imageCTA: Schema.Attribute.String;
  };
}

export interface GetInvolvedInvolveComponent extends Struct.ComponentSchema {
  collectionName: 'components_get_involved_involve_components';
  info: {
    displayName: 'Involve Component';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    detailBtnCTA: Schema.Attribute.String;
    detailBtnText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    joinBtnCTA: Schema.Attribute.String;
    joinBtnText: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HeaderCategoryNavbar extends Struct.ComponentSchema {
  collectionName: 'components_header_category_navbars';
  info: {
    displayName: 'Category Navbar';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    title: Schema.Attribute.String;
    titleCTA: Schema.Attribute.String;
  };
}

export interface HeaderNavbar extends Struct.ComponentSchema {
  collectionName: 'components_header_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    dropdown: Schema.Attribute.Component<'header.navbar-items', true>;
    title: Schema.Attribute.String;
    titleCTA: Schema.Attribute.String;
  };
}

export interface HeaderNavbarItems extends Struct.ComponentSchema {
  collectionName: 'components_header_navbar_items';
  info: {
    displayName: 'Navbar Items';
  };
  attributes: {
    text: Schema.Attribute.String;
    textCTA: Schema.Attribute.String;
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
    partners: Schema.Attribute.Component<'logo.partner', true>;
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

export interface LogoPartner extends Struct.ComponentSchema {
  collectionName: 'components_logo_partners';
  info: {
    displayName: 'Partner';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    url: Schema.Attribute.String;
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
      'event.event-component': EventEventComponent;
      'event.hero-images': EventHeroImages;
      'footer.apps': FooterApps;
      'footer.page': FooterPage;
      'footer.page-items': FooterPageItems;
      'footer.social-media': FooterSocialMedia;
      'get-involved.involve-component': GetInvolvedInvolveComponent;
      'header.category-navbar': HeaderCategoryNavbar;
      'header.navbar': HeaderNavbar;
      'header.navbar-items': HeaderNavbarItems;
      'home.banner': HomeBanner;
      'home.hero-images': HomeHeroImages;
      'home.impact': HomeImpact;
      'home.impact-detail': HomeImpactDetail;
      'home.partner': HomePartner;
      'home.section': HomeSection;
      'logo.partner': LogoPartner;
      'shared.banner': SharedBanner;
      'shared.banner-ads': SharedBannerAds;
      'shared.label-detail': SharedLabelDetail;
      'shared.review': SharedReview;
      'shared.section': SharedSection;
      'volunteer.volunteer': VolunteerVolunteer;
    }
  }
}
