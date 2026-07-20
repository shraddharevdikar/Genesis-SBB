export type SocialNetworkCode =
  | 'LINKEDIN_BUSINESS'
  | 'X_TWITTER_BUSINESS'
  | 'YOUTUBE_BRAND'
  | 'INSTAGRAM_BUSINESS';

export interface SocialPost {
  readonly postId: string;
  readonly contentTextString: string;
  readonly scheduledPublishDate: Date;
  readonly actualPublishedDate?: Date;
  readonly totalViewsCount: number;
  readonly totalEngagementReactionsCount: number;
  readonly isRepublishedToInternalBlogFlag: boolean;
}

export interface SocialMediaChannel {
  readonly channelId: string;
  readonly uniqueChannelCode: string; // e.g. "CHN-SOCIAL-LNK"
  readonly targetNetwork: SocialNetworkCode;
  readonly brandHandleName: string; // e.g. "@sbb_global"
  readonly totalFollowersCount: number;
  readonly interactionEngagementRateRatio: number;
  readonly scheduledPosts: SocialPost[];
}
